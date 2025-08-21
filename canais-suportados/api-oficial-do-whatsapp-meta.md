---
description: >-
  Este guia explica como integrar a API Oficial do WhatsApp (WABA) ao sistema
  Whazing.
---

# API Oficial do WhatsApp (Meta)

***

## ✅ Manual de Integração com a API Oficial do WhatsApp (Meta)

***

### 1️⃣ Acessar o Painel da Meta

1. Entre em: [https://developers.facebook.com/](https://developers.facebook.com/)
2. Faça login com sua conta do **Facebook**.
3. Clique em **Criar Aplicativo**.
4. Selecione **Outro > Empresa**.

***

### 2️⃣ Configurar o WhatsApp

* No painel de **Produtos**, localize **WhatsApp** e clique em **Configurar**.
*   Escolha a empresa vinculada à sua conta.

    > Se ainda não tiver uma empresa, será necessário criar uma.
* Clique em **Começar a usar a API**.

***

### 3️⃣ Ajustes Iniciais do Aplicativo

1. Acesse **Configurações do App > Básico**.
2. Preencha os campos obrigatórios:
   * **URL da Política de Privacidade**
   * **URL dos Termos de Serviço**
3. Clique em **Salvar Alterações**.
4. No topo da página, altere o status do app de **Em Desenvolvimento** para **Ativo**.

***

### 4️⃣ Configurar a API do WhatsApp

1. No menu lateral, vá em **WhatsApp > Configuração da API**.
2. Na etapa 5, clique em **Adicionar Número de Telefone**.
3. Informe os dados solicitados e conclua a validação.

***

### 5️⃣ Gerar Token Temporário

* Ainda na tela de configuração da API, clique em **Gerar Token de Acesso Temporário**.
* Copie o token gerado (ele será usado no Whazing).

***

### 6️⃣ Adicionar Canal no Whazing

<figure><img src="../.gitbook/assets/whazing.png" alt=""><figcaption></figcaption></figure>

1. No Whazing, vá em **Adicionar Canal**.
2. Selecione a opção **WABA API Oficial**.
3. Cole o **Token de Acesso** gerado anteriormente.

<figure><img src="../.gitbook/assets/configuracaoapi.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/configuracaoapi (1).png" alt=""><figcaption></figcaption></figure>

📌 Também será necessário copiar do painel da Meta:

* **ID do Número de Telefone**
* **ID da Conta do WhatsApp Business**
* **Versão da API** (ex: `v22.0` ou a mais recente disponível).

<figure><img src="../.gitbook/assets/whazing2.png" alt=""><figcaption></figcaption></figure>

***

### 7️⃣ Configurar Webhook

1. No painel da Meta, acesse **WhatsApp > Configuração da API > Etapa 3: Configure Webhooks**.
2. No Whazing, clique em **Gerar Token de Webhook** e copie:
   * **Token de Verificação**
   * **URL de Callback**
3. Retorne ao painel da Meta, clique em **Configurar Webhook** e cole as informações.
4. Clique em **Verificar e Salvar**.
5. Role a página até encontrar a opção **messages** e altere para **Assinado**.

<figure><img src="../.gitbook/assets/ativarmessages.png" alt=""><figcaption></figcaption></figure>

***

### 8️⃣ Registrar Telefone no Whazing

1. Acesse **Ferramentas > Registrar Telefone**.
2.

    <figure><img src="../.gitbook/assets/registrartelefone.png" alt=""><figcaption></figcaption></figure>
3. Digite um **PIN de 6 dígitos** (caso já tenha usado um PIN antes, utilize o mesmo).

***

### 9️⃣ Gerar Token Permanente

⚠️ O token temporário expira em algumas horas.\
Para garantir o funcionamento contínuo, gere um **Token Permanente**.

👉 Guia oficial:\
[Gerar Token Permanente – Meta](https://developers.facebook.com/docs/whatsapp/business-management-api/get-started#1--acquire-an-access-token-using-a-system-user-or-facebook-login)

***

### 🔟 Atualizar Token no Whazing

* No Whazing, edite o canal criado e substitua o **Token de Acesso** temporário pelo **Token Permanente**.

***

✅ **Pronto! Seu Whazing está integrado com a API Oficial do WhatsApp (Meta).**
