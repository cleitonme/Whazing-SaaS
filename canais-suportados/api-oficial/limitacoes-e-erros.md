# ⚠️ Limitações e Erros

## ✉️ Envio de mensagens com API Oficial via Whazing

O Whazing permite o envio de mensagens utilizando a **API Oficial do WhatsApp**, porém essa integração possui **regras e limitações definidas pela Meta** que precisam ser compreendidas para evitar erros e mensagens rejeitadas.

---

## ✅ O que é possível fazer

* Enviar **mensagens de texto**
* Enviar **arquivos** (imagens, vídeos, áudios e documentos)
* Utilizar a API integrada ao Whazing, com segurança e estabilidade

---

## ⚠️ Pontos de atenção importantes

* A API Oficial **não valida se o número possui WhatsApp**
* É responsabilidade do usuário garantir que:

  * O número esteja **correto**
  * Utilize **DDD + 9º dígito**, quando necessário
  * O envio respeite a **janela de atendimento de 24 horas**

---

## 📊 Regras e limites da API Oficial

### 1️⃣ Início de conversas (Templates)

Para **iniciar uma conversa com um cliente**, é obrigatório utilizar uma:

📩 **Mensagem de modelo (Template)**

Essas mensagens:

* Precisam ser **aprovadas previamente pela Meta**
* São obrigatórias quando:

  * Não existe conversa ativa
  * A janela de 24 horas já foi encerrada

---

### 2️⃣ Janela de atendimento de 24 horas

* Após o cliente enviar uma mensagem, abre-se uma **janela de 24 horas**
* Dentro desse período, é permitido enviar:

  * Mensagens de texto
  * Arquivos
* Fora desse prazo:

  * ❌ Mensagens livres não são entregues
  * ✅ Apenas **Templates aprovados** podem ser enviados

---

### 3️⃣ Imagens PNG com fundo transparente

* Imagens em **PNG com transparência** podem sofrer alterações
* O WhatsApp converte automaticamente esse formato para **JPEG**
* Isso pode resultar em:

  * Fundo branco
  * Perda de transparência

---

![](https://doc.whazing.com.br/~gitbook/image?url=https%3A%2F%2F858671661-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FL28BkT6aCze1NvvWNwS5%252Fuploads%252Fgit-blob-0c7dab9ce59d26cd4b74e5b6e630569045167f2a%252Flimites.png%3Falt%3Dmedia\&width=768\&dpr=4\&quality=100\&sign=d4ed56b1\&sv=2)

---

## ❌ Mensagem com “X” vermelho (mensagem rejeitada)

![](https://doc.whazing.com.br/~gitbook/image?url=https%3A%2F%2F858671661-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FL28BkT6aCze1NvvWNwS5%252Fuploads%252Fgit-blob-1743ce4cd037e75c4783976fe155b5a30f25b4fc%252Fmensagemrejeitada.png%3Falt%3Dmedia\&width=768\&dpr=4\&quality=100\&sign=ae67a165\&sv=2)

Quando uma mensagem aparece com um **“X” vermelho**, significa que ela **foi rejeitada pela Meta**.

### Motivos mais comuns

* ⏰ Envio fora da **janela de 24 horas**
* 📎 Arquivo em **formato não suportado**
* 📄 Conteúdo incompatível com as políticas da Meta

---

## 🔍 Verificando o erro via Webhook

Quando o webhook está ativo, é possível visualizar o **motivo exato da rejeição** da mensagem.

<figure><img src="../../.gitbook/assets/image (51).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (52).png" alt=""><figcaption></figcaption></figure>

➡️ Neste exemplo, o erro ocorreu porque foi enviado um **arquivo em formato não suportado**.

---

### Outro exemplo de erro retornado pela Meta

<figure><img src="../../.gitbook/assets/image (53).png" alt=""><figcaption></figcaption></figure>

---

## 🔀 Limitações da Coexistência (WhatsApp Business App + API Oficial)

A **Coexistência** ocorre quando o mesmo número é utilizado **simultaneamente** no:

* WhatsApp Business App
* API Oficial do WhatsApp

### Limitações da Coexistência

* ❌ **Não suporta mensagens em grupos**
* ⚠️ **Não é recomendada para alto volume de envios**
* 🔐 Exige autenticação via **QR Code**

---

## 🚦 Limite de envio – SOMENTE para Coexistência

⚠️ **Este limite se aplica exclusivamente ao modo de Coexistência**

Quando um número está em **Coexistência**, a Meta impõe um limite fixo de envio:

📌 **20 mensagens por segundo (20 mps)**

Esse limite existe para:

* Evitar conflitos entre o app WhatsApp Business e a API
* Preservar a estabilidade do número
* Reduzir riscos de bloqueios ou restrições

### ❗ Importante

* ✔️ **API Oficial sem Coexistência**

  * **Não possui limite fixo de 20 mps**
  * Os limites variam conforme:

    * Qualidade do número
    * Histórico de uso
    * Tier de envio definido pela Meta

---

## 📚 Documentação oficial da Meta

A Meta possui outras regras e limitações que podem variar conforme o tipo de conta e uso.

🔗 Consulte sempre a documentação oficial:
[https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/)

---

## ✅ Resumo rápido

* ✔️ API Oficial é estável e segura
* ⏰ Janela de 24h é obrigatória
* 📩 Templates são exigidos para iniciar conversas
* ❌ Não funciona com grupos em Coexistência
* 🚦 **20 mensagens por segundo apenas em Coexistência**
* 📈 API Oficial sem Coexistência segue limites dinâmicos da Meta