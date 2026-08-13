# Usando o 9Router como Provedor de IA no Whazing

> **Disponível a partir da versão 3.0**

O Whazing pode utilizar o **9Router** como um provedor intermediário de Inteligência Artificial.

A ideia é simples:

**Whazing → 9Router → vários provedores de IA**

Em vez de configurar cada provedor diretamente no Whazing, você pode centralizar vários provedores no 9Router e criar um **modelo com rotação automática e fallback**.

Isso pode ser útil para o SaaS disponibilizar IA compartilhada aos clientes sem exigir que cada cliente tenha sua própria conta de IA.

O 9Router oferece suporte a múltiplos provedores, modelos, contas e combinações com fallback/rotação. A documentação atual do projeto também informa que ele possui uma API compatível com OpenAI em `/v1`.

[Projeto oficial do 9Router no GitHub](https://github.com/decolua/9router?utm_source=chatgpt.com)

> ⚠️ **Importante:** "gratuito" não significa que os limites dos provedores sejam permanentes. Os provedores podem alterar modelos, limites, créditos, necessidade de verificação ou regras de uso. Antes de oferecer um serviço comercial baseado neles, confirme as regras atuais de cada provedor.

***

## 🎯 O que vamos fazer

Neste tutorial vamos configurar:

1. Instalar o 9Router no servidor
2. Disponibilizar o 9Router através de um domínio
3. Acessar o painel do 9Router
4. Alterar a senha padrão
5. Cadastrar vários provedores
6. Criar um Combo
7. Configurar rotação automática
8. Criar um Serviço de IA no Whazing
9. Liberar a IA nos planos
10. Criar adicionais para vender mais utilização

No final teremos uma estrutura semelhante a:

```
                         ┌── NVIDIA NIM
                         │
                         ├── Ollama Cloud
                         │
WHazing → 9Router ───────├── OpenRouter
                         │
                         ├── Kiro AI
                         │
                         ├── Cloudflare
                         │
                         └── Bazaarlink
                             
                         ↓
                    Rotação / Fallback
                             
                         ↓
                       Whazing
                             
                         ↓
                       Clientes
```

***

## 🐳 1. Instalar o 9Router

A forma mais simples é utilizar Docker.

O próprio projeto disponibiliza execução via Docker, e o painel/API padrão utiliza a porta **20128**.

Abra o terminal do seu servidor e execute:

```bash
docker run -d \
  --name 9router \
  -p 20128:20128 \
  -v "$HOME/.9router:/app/data" \
  -e DATA_DIR=/app/data \
  decolua/9router:latest
```

Depois de alguns segundos, verifique se o container está funcionando:

```bash
docker ps
```

Você deverá encontrar algo parecido com:

```
9router
```

***

## 🔎 2. Verificar os logs

Se quiser confirmar se o 9Router iniciou corretamente:

```bash
docker logs 9router
```

Para acompanhar os logs em tempo real:

```bash
docker logs -f 9router
```

Para sair dos logs sem parar o sistema:

**CTRL + C**

***

## 🌍 3. Disponibilizar o 9Router na Internet

Para o Whazing conseguir acessar o 9Router, ele precisa estar disponível através de um endereço acessível pelo servidor.

Você pode fazer isso de duas formas:

#### Opção A — Cloudflare Tunnel

Exemplo:

```
https://9router.seusite.com.br
```

O túnel encaminha para:

```
http://localhost:20128
```

#### Opção B — Caddy

Se o servidor já utiliza Caddy para outros domínios, você pode simplesmente adicionar mais um domínio ao Caddy.

Neste tutorial vamos mostrar as duas possibilidades.

***

## ☁️ 4. Usando Cloudflare Tunnel

Se você já utiliza Cloudflare Tunnel para seus sistemas, crie um novo endereço.

Exemplo:

```
9router.seusite.com.br
```

Configure o túnel para encaminhar para:

```
http://localhost:20128
```

O resultado será:

```
https://9router.seusite.com.br
        ↓
http://localhost:20128
        ↓
9Router
```

***

## 🔒 5. Usando Caddy

Se você já possui o **Caddy instalado e funcionando com outros domínios**, não precisa instalar novamente.

Apenas adicione um novo domínio à configuração.

Normalmente o arquivo utilizado é:

```
/etc/caddy/Caddyfile
```

Abra o arquivo:

```bash
sudo nano /etc/caddy/Caddyfile
```

Você provavelmente já encontrará outros sites configurados.

Por exemplo:

```
app.seusite.com.br {
    reverse_proxy localhost:3000
}
```

Não apague os sites existentes.

Adicione um novo bloco:

```
9router.seusite.com.br {
    reverse_proxy localhost:20128
}
```

O resultado pode ficar parecido com:

```
app.seusite.com.br {
    reverse_proxy localhost:3000
}

api.seusite.com.br {
    reverse_proxy localhost:3001
}

9router.seusite.com.br {
    reverse_proxy localhost:20128
}
```

> 💡 O número `20128` é a porta utilizada pelo container do 9Router.

***

## 🌐 6. Criar o DNS do domínio

No seu provedor de DNS, crie:

```
9router.seusite.com.br
```

Apontando para o servidor onde o Caddy está instalado.

Se estiver utilizando Cloudflare, normalmente o registro ficará como:

```
Tipo: A
Nome: 9router
IP: IP_DO_SERVIDOR
```

Se estiver utilizando proxy da Cloudflare, mantenha as configurações de proxy de acordo com sua infraestrutura.

***

## 🔄 7. Testar a configuração do Caddy

Antes de reiniciar, valide a configuração:

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
```

Se estiver tudo correto, recarregue o Caddy:

```bash
sudo systemctl reload caddy
```

Verifique:

```bash
sudo systemctl status caddy
```

***

## 🔐 8. Acessar o 9Router

Agora abra no navegador:

```
https://9router.seusite.com.br
```

Você deverá visualizar o painel do 9Router.

A instalação deve manter os dados no volume:

```
$HOME/.9router
```

Isso é importante porque as configurações ficam persistidas mesmo quando o container é recriado.

***

## 🔑 9. Alterar a senha padrão

Na primeira utilização, utilize a senha padrão informada pelo procedimento de instalação:

```
123456
```

Depois de entrar:

> **Altere imediatamente para uma senha forte de sua preferência.**

Não mantenha a senha padrão em produção.

***

## 🤖 10. Cadastrar os provedores

No menu do 9Router, acesse:

**Provedores**

É nessa área que você poderá conectar os diferentes provedores.

A ideia é cadastrar **vários provedores e, quando permitido, várias contas**, para aumentar a redundância.

O 9Router atualmente suporta múltiplos provedores e contas, além de mecanismos de fallback e round-robin.

***

## 🆓 11. Provedores utilizados neste exemplo

Abaixo estão exemplos de provedores/modelos que podem ser utilizados na configuração.

> ⚠️ **Importante:** limites, modelos e disponibilidade podem mudar. Os nomes abaixo representam a configuração testada neste cenário e não devem ser tratados como garantia de gratuidade permanente.

***

### NVIDIA NIM

Exemplo de modelo:

```
nvidia/z-ai/glm-5.2
```

Alguns recursos gratuitos podem exigir verificação da conta, inclusive número de celular.



***

## Ollama Cloud

Exemplo:

```
ollama/gpt-oss:120b
```

Cadastre a conta correspondente no 9Router.

***

## OpenRouter

Exemplo:

```
openrouter/openrouter/free
```

O modelo gratuito depende da disponibilidade atual do OpenRouter.

***

## Kiro AI

Exemplo:

```
kr/claude-sonnet-4.5
```

> ⚠️ O próprio projeto 9Router informa que a oferta gratuita do Kiro possui limites e pode mudar. Atualmente a documentação do 9Router descreve uma franquia gratuita limitada, não uso ilimitado.

***

## Cloudflare

Exemplo:

```
cf/@cf/zai-org/glm-4.7-flash
```

A disponibilidade depende da conta e dos recursos oferecidos pela Cloudflare.

***

## Bazaarlink

Exemplo:

```
bzl/auto:free
```

A disponibilidade do modelo gratuito pode mudar conforme o provedor.

***

## 📧 12. Use contas separadas quando necessário

Quando um provedor permitir múltiplas contas, você pode cadastrar contas diferentes.

Por exemplo:

```
Conta 1
Conta 2
Conta 3
```

Isso pode aumentar a capacidade disponível dentro das regras de cada provedor.

> ⚠️ Nunca utilize contas de maneira que viole os termos de serviço do provedor. O objetivo deve ser distribuir legitimamente contas que você possui e está autorizado a utilizar.

***

## 🔄 13. Criar um Combo

Depois de cadastrar os provedores, vamos criar uma configuração que utiliza os modelos cadastrados.

No 9Router, acesse:

**Combos e Vision Adapter**

Depois clique em:

**Criar Combo**

***

## ✏️ 14. Nome do Combo

Escolha um nome fácil de identificar.

Exemplo:

```
9router
```

***

## 🧠 15. Adicionar os modelos

Adicione os modelos que você cadastrou anteriormente.

Por exemplo:

```
nvidia/z-ai/glm-5.2
ollama/gpt-oss:120b
openrouter/openrouter/free
kr/claude-sonnet-4.5
cf/@cf/zai-org/glm-4.7-flash
bzl/auto:free
```

A ordem pode ser ajustada de acordo com sua estratégia.

***

## 🔄 16. Configurar Round Robin

Depois de salvar o Combo, configure o modo de fallback/rotação como:

**Round Robin**

A ideia é distribuir as chamadas entre os modelos configurados.

Exemplo:

```
Requisição 1 → Modelo A
Requisição 2 → Modelo B
Requisição 3 → Modelo C
Requisição 4 → Modelo D
Requisição 5 → Modelo A
```

Assim, o tráfego não fica concentrado em um único provedor.

O 9Router documenta suporte a **round-robin, múltiplas contas e fallback automático**

***

## 🔌 17. Conectar o 9Router ao Whazing

Agora vamos configurar o Whazing.

Acesse:

**Painel SaaS → Inteligência Artificial → Serviços de IA**

Clique em:

**Adicionar**

ou

**Novo Serviço de IA**

***

## 📝 18. Nome do serviço

Escolha um nome.

Exemplo:

```
9Router IA
```

ou:

```
IA Compartilhada 9Router
```

***

## 🔌 19. Tipo

Selecione:

**OpenAI Compatible (personalizado)**

O 9Router disponibiliza uma API compatível com OpenAI, utilizando o endpoint `/v1`.

***

## 🌐 20. URL Base

No 9Router, localize o **Endpoint** da API.

Você terá algo semelhante a:

```
https://9router.seusite.com.br/v1
```

Copie essa URL para o campo:

**URL Base**

> ⚠️ Não utilize somente o domínio se o campo do Whazing espera a URL base da API. Para a integração OpenAI-compatible, utilize o endpoint `/v1`.

***

## 🧠 21. Modelo padrão

No 9Router, copie o nome do modelo/Combo criado.

Se existir o botão:

**Copiar Latest**

você pode utilizá-lo para copiar o identificador correto.

Cole esse valor no campo:

**Modelo padrão**

Exemplo:

```
9router
```

> 💡 O nome precisa corresponder ao modelo/Combo disponibilizado pelo 9Router.

***

## 🔑 22. Adicionar o token

No 9Router, copie a **API Key/Key** disponibilizada pelo endpoint.

No Whazing, vá até:

**Pool de tokens (round robin)**

Clique:

**Adicionar token(s)**

Cole o token fornecido pelo 9Router.

***

## 🔄 23. Pool de tokens do Whazing

O Whazing também possui seu próprio mecanismo de:

**Pool de tokens (round robin)**

Você pode utilizar o token do 9Router nesse campo.

Se desejar utilizar vários endpoints/tokens do 9Router, poderá cadastrá-los conforme a necessidade da sua infraestrutura.

A arquitetura fica:

```
Cliente
   ↓
Whazing
   ↓
Pool de tokens Whazing
   ↓
9Router
   ↓
Round Robin do 9Router
   ↓
Vários provedores
```

Isso cria uma camada adicional de distribuição.

***

## ✅ 24. Habilitar os recursos

No Serviço de IA do Whazing, habilite os recursos desejados.

Neste exemplo:

* ✅ Copilot
* ✅ Smart Reception
* ✅ Resposta automática em redes sociais

> ⚠️ Para **Embeddings**, utilize um serviço/provedor compatível com essa finalidade. A configuração de Embeddings possui requisitos próprios no Whazing.

***

## 💾 25. Salvar

Depois de preencher:

* Nome
* Tipo
* URL Base
* Modelo
* Token
* Recursos

Salve o Serviço de IA.

O resultado será semelhante a:

```
9Router IA
OpenAI Compatible
Modelo: 9router
Status: Ativo
```

***

## 📦 26. Liberar IA nos planos

Agora precisamos informar ao Whazing quais planos poderão utilizar essa IA.

Acesse:

**Painel SaaS → Comercial → Planos**

Abra o plano desejado.

Localize:

**Serviços de IA**

***

## 🤖 27. Liberar Copilot

No campo:

**Copilot**

Selecione:

**Serviço de IA:**

```
9Router IA
```

Depois defina:

**Unidade do limite:**

```
Tokens
```

E escolha um limite mensal.

Exemplo:

```
10.000
```

***

## 🤖 28. Liberar Smart Reception

Configure:

**Serviço de IA:**

```
9Router IA
```

**Unidade do limite:**

```
Requisições
```

Exemplo:

```
10
```

***

## 📱 29. Liberar respostas automáticas

Para:

**Resposta automática em redes sociais**

selecione:

```
9Router IA
```

e defina o limite mensal desejado.

***

## 💡 30. Estratégia comercial

Uma estratégia interessante para o SaaS é disponibilizar uma quantidade pequena de IA dentro dos planos.

Por exemplo:

#### Plano Inicial

**Copilot**

10.000 tokens/mês

#### Plano Premium

**Copilot**

30.000 tokens/mês

#### Plano Empresarial

**Copilot**

100.000 tokens/mês

Assim o cliente consegue experimentar o recurso sem precisar configurar uma conta própria.

Depois, você pode oferecer **Adicionais de IA** para quem precisar de mais utilização.

***

## 💰 31. Criar adicional de IA

Acesse:

**Painel SaaS → Comercial → Adicionais**

Clique em:

**Criar Adicional**

Escolha:

**Tipo:**

```
Copilot
```

Defina o:

**Limite mensal**

Exemplo:

```
50.000
```

Escolha:

**Unidade do limite:**

```
Tokens
```

E informe o:

**Valor mensal**

Exemplo:

```
R$ 9,90
```

***

## 🛒 32. Modelo de venda

Você pode criar diferentes pacotes.

#### Pacote 1

**+10.000 tokens**

R$ 5,00/mês

#### Pacote 2

**+50.000 tokens**

R$ 15,00/mês

#### Pacote 3

**+100.000 tokens**

R$ 25,00/mês

Os valores acima são apenas exemplos. O preço real deve considerar seus custos, limites dos provedores e margem desejada.

***

## 📈 33. Por que vender como adicional?

O cliente recebe uma quantidade de IA incluída no plano.

Se precisar de mais:

```
Plano
   +
IA incluída
   +
Adicional de IA
```

Isso permite aumentar a receita sem obrigar o cliente a mudar para um plano maior.

***

## ⚠️ 34. Não prometa "IA ilimitada"

Mesmo que o custo dos modelos utilizados seja baixo ou zero, os provedores podem possuir:

* Limite diário
* Limite mensal
* Rate limit
* Limite por conta
* Limite por modelo
* Alterações de disponibilidade
* Alterações de política
* Necessidade de verificação

Por isso, é mais seguro vender:

**Quantidade de utilização**

em vez de prometer:

**IA ilimitada**

***

## 📊 35. Acompanhar o consumo

Depois de colocar o sistema em funcionamento, acompanhe:

**Painel SaaS → Inteligência Artificial → Relatório de Consumo de IA**

Observe principalmente:

* Total de requisições
* Total de tokens
* Empresas que mais utilizam
* Modelos mais utilizados
* Taxa de erro
* Custo estimado

O 9Router também possui recursos próprios de acompanhamento de uso e custos, embora os valores apresentados pelo 9Router sejam métricas de acompanhamento e não uma cobrança feita pelo próprio 9Router.

***

## 🧪 36. Faça um teste antes de liberar

Recomendo seguir esta ordem:

#### Teste 1

Testar o provedor diretamente no 9Router.

#### Teste 2

Testar o Combo.

#### Teste 3

Verificar a rotação Round Robin.

#### Teste 4

Testar o endpoint OpenAI-compatible.

#### Teste 5

Cadastrar no Whazing.

#### Teste 6

Testar o Copilot.

#### Teste 7

Testar Smart Reception.

#### Teste 8

Verificar o consumo no relatório.

#### Teste 9

Testar o limite mensal.

#### Teste 10

Testar um adicional de IA.

***

## 🛠️ 37. Se o Whazing não conseguir conectar

Verifique primeiro a URL.

Deve estar semelhante a:

```
https://9router.seusite.com.br/v1
```

Depois teste se o domínio abre no navegador.

Também confira:

```bash
docker ps
```

O container deve estar ativo.

Confira os logs:

```bash
docker logs --tail 100 9router
```

Se estiver usando Caddy:

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
```

E:

```bash
sudo systemctl status caddy
```

***

## 🔐 40. Segurança

O 9Router será colocado na Internet e poderá funcionar como uma porta de acesso para seus serviços de IA.

Por isso:

* Não mantenha a senha padrão.
* Utilize HTTPS.
* Não compartilhe API Keys.
* Não coloque tokens em screenshots públicas.
* Utilize senhas fortes.
* Mantenha o 9Router atualizado.
* Monitore os logs.
* Monitore o consumo.
* Verifique os termos dos provedores utilizados.
* Não compartilhe uma conta de provedor de forma que viole as regras desse provedor.

***

## 🎯 Resultado final

Depois de concluir toda a configuração, teremos:

```
                         NVIDIA NIM
                             │
                         Ollama Cloud
                             │
                         OpenRouter
                             │
                          Kiro AI
                             │
                         Cloudflare
                             │
                         Bazaarlink
                             │
                             ▼
                    ┌─────────────────┐
                    │     9Router     │
                    │                 │
                    │ Round Robin     │
                    │ Fallback        │
                    │ Vários modelos  │
                    └────────┬────────┘
                             │
                             │ OpenAI Compatible
                             ▼
                    ┌─────────────────┐
                    │     Whazing     │
                    │                 │
                    │ Copilot         │
                    │ Smart Reception │
                    │ Redes Sociais   │
                    └────────┬────────┘
                             │
                             ▼
                         Clientes
```

Dessa forma, o **9Router fica responsável pela camada de distribuição entre os provedores**, enquanto o **Whazing fica responsável por controlar quais clientes possuem IA, quais recursos podem utilizar, limites mensais, adicionais e consumo**.

> 💡 **Estratégia recomendada:** ofereça uma pequena quantidade de IA incluída nos planos para que o cliente possa experimentar. Depois, disponibilize pacotes adicionais de utilização. Isso transforma a IA em um recurso que pode gerar **receita recorrente adicional**, sem obrigar cada cliente a configurar sua própria conta de IA.
