---
icon: whatsapp
---

# WuzAPI não conecta ou não lê o QR Code

Este guia é para quando você **cria uma sessão no painel e o WhatsApp não conecta**: o QR Code não aparece, a sessão fica eternamente em "conectando", ou aparece algum erro na tela.

> ⚠️ **Antes de tudo:** confirme que você está usando uma conta do **WhatsApp Business**. Contas do WhatsApp normal podem apresentar desconexões e instabilidade — isso não é corrigido por nenhum ajuste no servidor.

***

## 🩺 1️⃣ Comece olhando os logs da Wuzapi

Os **logs** são o "diário" do serviço: lá aparecem os erros reais que explicam por que a sessão não conecta.

Execute no servidor:

```bash
docker logs --tail 100 -f wuzapi
```

* `--tail 100` mostra as **últimas 100 linhas**.
* `-f` (de *follow*) faz o log continuar aparecendo em tempo real. Para sair, pressione **Ctrl + C**.

Tente criar a sessão no painel **com o log aberto** e observe o que aparece no momento da tentativa. Os erros mais comuns são:

| O que aparece no log | O que geralmente significa |
| --- | --- |
| `connection refused` / `no such host` | O Whazing não está conseguindo "enxergar" a Wuzapi (veja o passo da rede bridge, abaixo) |
| Erros de banco de dados / PostgreSQL | O banco da Wuzapi está parado (reinicie `postgreswuzapi`) |
| Erros de RabbitMQ / AMQP | Reinicie o `rabbitmqwuzapi` |
| Erros de webhook | Confira se a **URL** e o **Admin Token** no painel **SaaS → Canais** estão exatamente como na instalação |

> 💡 **Dica:** também vale olhar os logs do banco e do mensageiro, pois a Wuzapi depende dos dois:
>
> ```bash
> docker logs --tail 100 -f postgreswuzapi
> docker logs --tail 100 -f rabbitmqwuzapi
> ```

Para uma visão geral de todos os logs do sistema, veja [Acessando os Logs](../../instalacao-and-vps/acessando_logs.md).

***

## 🌉 2️⃣ Conectar o container à rede bridge (causa mais comum)

A Wuzapi e o Whazing precisam **conversar entre si** dentro do servidor. Quando o container da Wuzapi não está na rede padrão do Docker (**bridge**), essa comunicação falha — e o resultado é exatamente este: **a sessão não conecta e o QR Code não aparece**.

Force a conexão do container à rede bridge:

```bash
docker network connect bridge wuzapi || true
```

* O `|| true` no final é uma proteção: se o container **já estiver** na rede, o comando não dá erro — ele simplesmente ignora e segue.

Depois, reinicie a Wuzapi para aplicar:

```bash
docker container restart wuzapi
```

Volte ao painel e tente criar a sessão novamente.

***

## 🔥 3️⃣ Verificar e reiniciar o Firewall (UFW)

O firewall controla o que pode entrar e sair do servidor. Se ele estiver **parado ou travado**, a comunicação entre os serviços pode falhar mesmo com tudo configurado certo.

**Verifique o status:**

```bash
sudo ufw status
```

* Se aparecer `Status: active`, o firewall está ativo. Ainda assim, se houve alteração recente no servidor, reinicie-o.
* Se aparecer `Status: inactive`, o firewall está **desativado** — ative com:

```bash
sudo ufw enable
```

> ⚠️ **Atenção:** antes de ativar o firewall, confirme que a porta SSH (22) está liberada para não perder o acesso ao servidor.

**Reiniciar o firewall:**

```bash
sudo systemctl restart ufw
```

ou, alternativamente:

```bash
sudo ufw disable
sudo ufw enable
```

Guia completo com todas as verificações: [Como verificar e reiniciar o Firewall (UFW) no Linux](../../solucao-de-problemas/servidor-e-banco-de-dados/como-verificar-e-reiniciar-o-firewall-ufw-no-linux.md).

***

## 🔁 4️⃣ Reiniciar os serviços da Wuzapi

A instalação da Wuzapi usa **3 containers**. Reinicie os três:

```bash
docker container restart wuzapi
docker container restart postgreswuzapi
docker container restart rabbitmqwuzapi
```

Aguarde alguns segundos e tente a sessão novamente no painel.

***

## 📡 5️⃣ Testar se a Wuzapi está respondendo

Para conferir rapidamente se o serviço está "vivo":

```bash
curl -i http://127.0.0.1:8080
```

* **Qualquer resposta** (mesmo uma mensagem de erro HTTP) indica que a Wuzapi está **no ar e escutando** — nesse caso, o problema costuma estar na comunicação com o Whazing (rede bridge, firewall ou URL/Token no painel).
* **Nenhuma resposta ou tempo esgotado** indica que o serviço **não está escutando** — reinicie os containers (passo 4) e confira os logs (passo 1).

Aproveite e confira se a **URL** e o **Admin Token** cadastrados no painel **SaaS → Canais** são exatamente os mesmos exibidos na tela de instalação (exemplo: `http://127.0.0.1:8080`).

***

## 🧹 6️⃣ Sessão antiga travada

Se o QR Code até aparece, mas **não conecta ao ler**:

1. **Desconecte o número de outros lugares.** O WhatsApp não permite a mesma sessão conectada em vários sistemas ao mesmo tempo (WhatsApp Web, outra API não oficial etc.). Desconecte de todos antes de conectar no Whazing.
2. **Apague o canal no painel e crie novamente**, gerando um novo QR Code. Uma sessão antiga com dados corrompidos não se recupera — a nova sessão força uma sincronização limpa.

Veja também as boas práticas em [WhatsApp desconecta ou mensagens não chegam](../../solucao-de-problemas/whatsapp-e-mensagens/whatsapp-desconecta-ou-mensagens-nao-chegam.md).

***

## 🗑️ 7️⃣ Último recurso: reinstalação limpa

Se nada acima resolver, faça a **desinstalação completa** e instale novamente — o passo a passo está em [Desinstalar WUZAPI](whatsapp-wuzapi.md#desinstalar-wuzapi).

> ⚠️ **Lembre-se:** as mensagens do atendimento **não são perdidas** (ficam no banco principal do sistema), mas depois da reinstalação será necessário **ler os QR Codes novamente** e **atualizar o Admin Token no painel SaaS**.

***

## ✅ Checklist rápido

| Sintoma | Provável causa | O que fazer |
| --- | --- | --- |
| Sessão não conecta, QR não aparece | Container fora da rede bridge | `docker network connect bridge wuzapi \|\| true` + restart |
| Nada responde no servidor | Firewall parado/travado | Verificar e reiniciar o UFW |
| QR aparece, mas não conecta ao ler | Número conectado em outro sistema / sessão antiga | Desconectar de outros lugares e criar novo canal |
| Erros de banco/RabbitMQ nos logs | Containers auxiliares parados | Reiniciar `postgreswuzapi` e `rabbitmqwuzapi` |
| Conecta, mas nada chega no Whazing | URL ou Admin Token errados no painel | Conferir **SaaS → Canais** |

***

## 👣 Ainda com problemas?

Se após todos os passos a sessão continuar sem conectar, reúna as informações antes de abrir um chamado:

* Saída do comando `docker logs --tail 100 wuzapi` no momento da tentativa;
* Resultado de `docker ps -a` (mostra se os containers estão ativos ou reiniciando);
* Status do firewall (`sudo ufw status`).

Com esses dados, o suporte consegue identificar a causa com muito mais rapidez.
