---
description: >-
  Este manual explica passo a passo como migrar o sistema para outra VPS. Mesmo
  quem não tem experiência com servidores conseguirá seguir.
icon: truck-container
---

# Migração de VPS

#### ⚠️ Importante sobre a licença Premium

A **liberação da licença Premium para a nova VPS só deve ser solicitada depois que o sistema estiver instalado na nova VPS**.

O processo correto é:

1. Instale o sistema completamente na **nova VPS**.
2. Confirme o **IP público da nova VPS**.
3. Acesse **trial.whazing.com.br** e solicite a **liberação da licença Premium para o novo IP**.
4. Após a liberação, prossiga com a migração e restauração dos dados.
5. **Somente depois de confirmar que a nova VPS está funcionando corretamente**, entre em contato com o suporte para solicitar o **cancelamento da licença antiga e a troca definitiva para o novo IP**.

⚠️ **Não entre em contato pelo WhatsApp para solicitar a liberação durante o processo de migração.** A solicitação da licença Premium para a nova VPS deve ser feita pelo **trial.whazing.com.br**.

***

#### ✅ Passos da Migração

**1. Instalar o sistema na nova VPS**

* Acesse a nova VPS.
* Siga o guia oficial de instalação: 👉 [**Como instalar e atualizar**](https://doc.whazing.com.br/instalacao-and-vps/instalacao-and-vps/como-instalar-e-atualizar)
* Finalize toda a instalação.
* Confirme o IP público da nova VPS.

💡 **Importante:** ainda não é necessário realizar a migração dos dados neste momento. Primeiro deixe a instalação da nova VPS pronta.

***

**2. Solicitar a liberação Premium para a nova VPS**

Depois que a instalação estiver concluída:

* Acesse [**trial.whazing.com.br**](https://trial.whazing.com.br).
* Solicite a **liberação da licença Premium**.
* Informe/valide o **IP da nova VPS**, quando solicitado.
* Aguarde a liberação antes de continuar.

⚠️ **Essa solicitação só deve ser feita após a instalação do sistema na nova VPS.**

***

**3. Avisar os clientes e iniciar a migração**

Antes de parar o servidor antigo:

* Avise seus clientes que o sistema ficará temporariamente indisponível.
* Escolha um período de menor utilização para realizar a migração.

⚠️ Durante a migração, o sistema ficará **fora do ar** e **mensagens recebidas nesse período não serão registradas**.

***

**4. Preparar o backup no servidor antigo**

**Parar o sistema antigo:**

```bash
docker container stop whazing-backend
```

**Gerar o backup do banco de dados:**

```bash
curl -sSL backup.whazing.com.br | sudo bash
```

Isso criará o arquivo:

```
backupwhazing.sql.gz
```

***

**5. Copiar o backup para a nova VPS**

No servidor antigo:

```bash
scp backupwhazing.sql.gz usuario@IP_NOVO_SERVIDOR:/home/deploy/
```

***

**6. Restaurar o banco de dados**

Na nova VPS:

```bash
curl -sSL restaurar.whazing.com.br -o /home/deploy/restore.sh | sudo bash /home/deploy/restore.sh
```

Depois acompanhe os logs:

```bash
docker logs --tail 100 -f whazing-backend
```

***

**7. Restaurar os arquivos**

A restauração da pasta `public` é opcional e pode ser feita posteriormente.

**No servidor antigo:**

```bash
sudo tar -czvf public.tar.gz /home/deploy/whazing/backend/public/
```

**Copiar para a nova VPS:**

```bash
scp public.tar.gz usuario@IP_NOVO_SERVIDOR:/home/deploy/
```

**Na nova VPS:**

```bash
sudo tar -xzvf /home/deploy/public.tar.gz -C /
sudo chown -R deploy:deploy /home/deploy/whazing/backend/public/
```

💡 Priorize pelo menos a pasta `/logos`, que contém as imagens do Whitelabel.

***

#### 🚀 Após concluir a migração

Quando confirmar que **a nova VPS está funcionando corretamente**:

1. Teste o acesso ao sistema.
2. Confirme que os dados foram restaurados.
3. Confirme que o novo IP está funcionando corretamente.
4. **Entre em contato com o suporte para solicitar o cancelamento da licença da VPS antiga.**
5. Solicite a **troca da licença antiga para o novo IP**.

⚠️ **Não solicite o cancelamento da licença antiga antes de confirmar que a nova VPS está funcionando.**

**Resumo:**\
**Instalar nova VPS → Solicitar Premium em trial.whazing.com.br → Migrar dados → Testar nova VPS → Suporte cancela licença antiga e troca para o novo IP.**
