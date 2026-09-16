# Configuração do WABA Incorporado (Coexistência)

## ✅ Pré-requisitos (obrigatório antes de começar)

Antes de iniciar, confirme se você **já possui tudo abaixo**:

1. ✅ Uma conta no **Meta for Developers** 👉 Acesse: [https://developers.facebook.com](https://developers.facebook.com)
2. ✅ Um **aplicativo criado** dentro do Meta for Developers
3. ✅ Pelo menos **1 número de WhatsApp conectado** ao aplicativo (API Oficial)
4. ✅ Ser **Provedor de Tecnologia** aprovado pela Meta

⚠️ **Importante** Se você **ainda não concluiu essas etapas**, siga primeiro este guia: 👉 **API Oficial do WhatsApp (Meta)** [https://doc.whazing.com.br/canais-suportados/api-oficial/api-oficial-do-whatsapp-meta](https://doc.whazing.com.br/canais-suportados/api-oficial/api-oficial-do-whatsapp-meta)

***

## 📌 Informações que você vai precisar cadastrar no Whazing

Durante a configuração, você deverá informar no Whazing:

* **ID do Aplicativo**
* **Chave Secreta do Aplicativo**
* **ID da Configuração**
* **Versão da API** (use sempre a mais recente — atualmente: `v24.0`)

Esses dados devem ser cadastrados em:

**Módulos SaaS → Canais → Configuração do WABA Incorporado**

***

## 🔑 Obtendo o ID do Aplicativo e a Chave Secreta

1. Acesse seu aplicativo no **Meta for Developers**
2. Vá em: **Configurações do App → Básico**

<figure><img src="../../.gitbook/assets/image (5) (2).png" alt=""><figcaption></figcaption></figure>

👉 Nesta tela você encontrará:

* **ID do Aplicativo**
* **Chave Secreta do Aplicativo**

⚠️ Aproveite para:

* Cadastrar os **domínios do aplicativo,**

**Exemplo: https://bot.seusite.com.br**

* Adicionar a **plataforma** no final da página

Em **Login do Facebook para Empresas - Configurações**

**Login do Facebook para Empresas**

Domínios permitidos para o SDK do JavaScript:

* Cadastrar os **domínios do aplicativo,**

**Exemplo: https://bot.seusite.com.br**

**Importante em "**&#x55;RIs de redirecionamento do OAuth válidos"

<figure><img src="../../.gitbook/assets/cadastrourloatuh.png" alt=""><figcaption></figcaption></figure>

Cadastrar [https://bot.seusite.com.br/#/conectarwaba](https://bot.seusite.com.br/#/conectarwaba)

Sempre trocando bot.seusite.com.br pelo url do seu frontend

<figure><img src="../../.gitbook/assets/image (2) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

***

## 🆔 Criando o ID da Configuração

### Onde fazer isso

Dentro do **Login do Facebook para Empresas**:

1. Acesse as **Configurações**
2. Clique em **Criar configuração**
3. Escolha **qualquer nome** (é apenas identificador interno)
4. Clique no ícone de **lápis (Editar)**

<figure><img src="../../.gitbook/assets/image (6) (2).png" alt=""><figcaption></figcaption></figure>

***

## 🔄 Ajustando a Variação de Login

1. Em **Variação de Login**, selecione: **Cadastro incorporado do WhatsApp**

<figure><img src="../../.gitbook/assets/image (34).png" alt=""><figcaption></figcaption></figure>

***

## 📦 Configurando os Products

1. Vá até a seção **Products**
2. Marque as opções relacionadas ao WhatsApp

<figure><img src="../../.gitbook/assets/image (37).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (39).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (41).png" alt=""><figcaption></figcaption></figure>

***

## 📲 Contas do WhatsApp

1. Na seção **Contas do WhatsApp**, marque **todas as opções**

<figure><img src="../../.gitbook/assets/image (42).png" alt=""><figcaption></figcaption></figure>

***

## 🔐 Permissões obrigatórias

Em **Permissões**, marque:

* `whatsapp_business_messaging`
* `whatsapp_business_management`

Depois disso:

👉 Copie o **Número de identificação da configuração** 👉 Cadastre esse valor no **Whazing**

👉 Informe também a **Versão da API** (exemplo: `v24.0`)

***

## 📝 Solicitação de permissões extras (rápido e automático)

Ainda no Meta for Developers:

1. Vá em **Análise do App → Permissões e Recursos**
2. Solicite as permissões:
   * `public_profile`
   * `email`

⚠️ Essas permissões são **liberadas na hora**, sem burocracia.

<figure><img src="../../.gitbook/assets/image (43).png" alt=""><figcaption></figcaption></figure>

***

## ✅ Finalização da configuração

Com todas essas etapas concluídas:

* O aplicativo já estará liberado
* A conexão com o WhatsApp poderá ser realizada normalmente

***

## 🔗 Conectando o WABA no Whazing

1. Ative a opção de WABA Incorporado
2. Acesse **Canais**
3. Clique em **Adicionar canal**

<figure><img src="../../.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

4. Clique em **Conectar WABA**

<figure><img src="../../.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

***

## 🔁 Modo Coexistência (Coex)

Para usar **Coexistência**, selecione a opção:

👉 **“Conectar um app do WhatsApp Business”**

<figure><img src="../../.gitbook/assets/image (49).png" alt=""><figcaption></figcaption></figure>

***

🎉 **Pronto!** Seu WABA Incorporado estará configurado e pronto para uso no Whazing.
