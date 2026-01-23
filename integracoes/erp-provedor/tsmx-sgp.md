---
description: Suporte 2ª via de boletos e desbloqueio de confiança
---

# TSMX SGP

⚠️ **Atenção importante** Antes de encaminhar o atendimento para a fila integrada, **é obrigatório solicitar o CPF ou CNPJ do cliente**. A integração do TSMX SGP **espera receber essa informação** para realizar a consulta correta.

***

### Passo 1: Configurar Integração

1. Acesse **Integrações** > clique em **Adicionar**.
2. Preencha os dados
3. Cadastre os dados de acesso à **API do TSMX SGP**.
4. Libere o **IP da VPS** no sistema SGP, conforme as telas de configuração.

***

### Passo 2: Configurar Filas

1. Acesse **Cadastros** > **Filas** > clique em **Adicionar**.
2.  Configure a fila conforme o exemplo abaixo:

    ![](<../../.gitbook/assets/image (30).png>)
3. Na fila, selecione a **integração criada no Passo 1**.

🔎 **Boas práticas da fila:**

* Relacionar corretamente os **botões do chatbot**
* Marcar as opções de **2ª via de boleto** e **desbloqueio de confiança**, quando disponíveis

***

### Passo 3: Criar o Chatbot

1. Crie um chatbot no sistema.
2. Utilize um fluxo simples e objetivo.
3. Certifique-se de que:
   * O **App** esteja configurado como `chatbot`
   * O chatbot tenha botões ou mensagens claras para direcionamento

Exemplo visual:

![](https://doc.whazing.com.br/~gitbook/image?url=https%3A%2F%2F858671661-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FL28BkT6aCze1NvvWNwS5%252Fuploads%252Fgit-blob-48f570295bea2ee68bff1fee7839ec512a51b87b%252Ftela3.png%3Falt%3Dmedia\&width=300\&dpr=4\&quality=100\&sign=35229649\&sv=2)

***

### Passo 4: Configurar Condições

1. Em **Condições**, configure o roteamento para a fila criada.
2. Antes do encaminhamento, adicione uma mensagem solicitando:
   * **CPF ou CNPJ do cliente**

📌 Exemplo de mensagem:

> "Para continuar, por favor informe seu CPF ou CNPJ."

***

### Telas do TSMX SGP

<figure><img src="../../.gitbook/assets/image (5) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (6) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (7) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

***

#### Observações Importantes

* CPF/CNPJ **não informado** = integração não retorna dados
* Conferir relação correta entre **botões, fila e integração**

***

🙏 **Agradecimento** Obrigado **André Alves Magalhães** pelo apoio
