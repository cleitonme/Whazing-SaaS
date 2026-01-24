# Disparo WhatsApp

## 📌 O que você vai precisar

* Acesso ao **painel da Atlaz** (usaremos o painel demo como exemplo)
* Acesso ao **Whazing** com permissão para criar canais e integrações

***

## 1️⃣ Criando o canal de WhatsApp no Whazing

Primeiro, vamos configurar o canal de WhatsApp no Whazing.

Acesse:

**Configurações → Canais - API → API**

Clique em **Adicionar** e selecione um canal de WhatsApp **API não oficial**.

⚠️ **Canais suportados:**

* Baileys
* Wuzapi
* Plus

Outros tipos de canais **não são compatíveis** com este disparo.

<figure><img src="../../../.gitbook/assets/image (80).png" alt=""><figcaption></figcaption></figure>

🔑 Copiar URL e Token

Após criar o canal:

* Copie a **URL da API**
* Copie o **Token**

Essas informações serão usadas no painel da Atlaz.

***

## 2️⃣ Configurando o disparo no painel da Atlaz

Para este exemplo, utilizaremos o painel demo da Atlaz.

No painel da Atlaz, siga o caminho:

**Painel → Configurações → WhatsApp**

<figure><img src="../../../.gitbook/assets/image (78).png" alt=""><figcaption></figcaption></figure>

### ⚙️ Configurações principais

Preencha os campos conforme abaixo:

#### 🔧 Serviço

* Selecione: **Genérico**

#### ⏱️ Intervalo entre envios

* Configure para: **60 segundos**

⚠️ Intervalos muito curtos **aumentam o risco de banimento** do número.

#### 🌐 URL do Webhook

* Cole a **URL da API** copiada do Whazing
* No final da URL, adicione **`/atlaz`**

Exemplo:

```
https://testeapi.whazing.com.br/v1/api/external/e4b92f62-b8c7-41af-a8ab-404840510fd7/atlaz
```

#### 🔐 Token

* Cole **exatamente** o token copiado do Whazing

***

## 3️⃣ Testando o envio de mensagens

Após salvar as configurações:

* O sistema já estará pronto para enviar mensagens
* Utilize a opção **Enviar WhatsApp Teste** para validar a integração

Abaixo do formulário, existem opções para:

* Configurar mensagens automáticas
* Habilitar ou desabilitar envios

⚠️ **Use com cautela**: envio exagerado pode resultar em bloqueio do número.

***

## 5️⃣ Comportamento por tipo de canal

### 📲 Canal Plus

* As mensagens são enviadas no formato **copiar e colar**
* Se houver boleto disponível:
  * O sistema envia automaticamente o **PDF do boleto** junto

<figure><img src="../../../.gitbook/assets/image (79).png" alt=""><figcaption></figcaption></figure>

***

✅ **Pronto!** O **Disparo de WhatsApp** está configurado e funcionando.

Você pode ajustar mensagens, intervalos e regras conforme sua estratégia, sempre com cuidado para evitar bloqueios.
