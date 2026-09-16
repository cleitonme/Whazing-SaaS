# ⚠️ Limitações e Erros

#### ⚠️ Considerações importantes <a href="#consideracoes-importantes" id="consideracoes-importantes"></a>

* A API oficial **não oferece suporte a grupos**.
* A API oficial **não exibe a foto do contato**.
* Você tem **24 horas** para responder uma mensagem do cliente via Whazing.
* No modo COEX tem algumas mensagens que não chegam na api oficial, somente aparece no celular

## ✉️ Envio de mensagens com API Oficial via Whazing

O Whazing permite o envio de mensagens utilizando a **API Oficial do WhatsApp**, porém essa integração possui **regras e limitações definidas pela Meta** que precisam ser compreendidas para evitar erros e mensagens rejeitadas.

***

## ✅ O que é possível fazer

* Enviar **mensagens de texto**
* Enviar **arquivos** (imagens, vídeos, áudios e documentos)
* Utilizar a API integrada ao Whazing, com segurança e estabilidade

***

## ⚠️ Pontos de atenção importantes

* A API Oficial **não valida se o número possui WhatsApp**
* É responsabilidade do usuário garantir que:
  * O número esteja **correto**
  * Utilize **DDD + 9º dígito**, quando necessário
  * O envio respeite a **janela de atendimento de 24 horas**

***

## 📊 Regras e limites da API Oficial

### 1️⃣ Início de conversas (Templates)

Para **iniciar uma conversa com um cliente**, é obrigatório utilizar uma:

📩 **Mensagem de modelo (Template)**

Essas mensagens:

* Precisam ser **aprovadas previamente pela Meta**
* São obrigatórias quando:
  * Não existe conversa ativa
  * A janela de 24 horas já foi encerrada

***

### 2️⃣ Janela de atendimento de 24 horas

* Após o cliente enviar uma mensagem, abre-se uma **janela de 24 horas**
* Dentro desse período, é permitido enviar:
  * Mensagens de texto
  * Arquivos
* Fora desse prazo:
  * ❌ Mensagens livres não são entregues
  * ✅ Apenas **Templates aprovados** podem ser enviados

***

### 3️⃣ Imagens PNG com fundo transparente

* Imagens em **PNG com transparência** podem sofrer alterações
* O WhatsApp converte automaticamente esse formato para **JPEG**
* Isso pode resultar em:
  * Fundo branco
  * Perda de transparência

***

![](https://doc.whazing.com.br/~gitbook/image?url=https%3A%2F%2F858671661-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FL28BkT6aCze1NvvWNwS5%252Fuploads%252Fgit-blob-0c7dab9ce59d26cd4b74e5b6e630569045167f2a%252Flimites.png%3Falt%3Dmedia\&width=768\&dpr=4\&quality=100\&sign=d4ed56b1\&sv=2)

***

## ❌ Mensagem com “X” vermelho (mensagem rejeitada)

![](https://doc.whazing.com.br/~gitbook/image?url=https%3A%2F%2F858671661-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FL28BkT6aCze1NvvWNwS5%252Fuploads%252Fgit-blob-1743ce4cd037e75c4783976fe155b5a30f25b4fc%252Fmensagemrejeitada.png%3Falt%3Dmedia\&width=768\&dpr=4\&quality=100\&sign=ae67a165\&sv=2)

Quando uma mensagem aparece com um **“X” vermelho**, significa que ela **foi rejeitada pela Meta**.

### Motivos mais comuns

* ⏰ Envio fora da **janela de 24 horas**
* 📎 Arquivo em **formato não suportado**
* 📄 Conteúdo incompatível com as políticas da Meta

***

## 🔍 Verificando o erro via Webhook

Quando o webhook está ativo, é possível visualizar o **motivo exato da rejeição** da mensagem.

<figure><img src="../../../.gitbook/assets/image (51).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (52).png" alt=""><figcaption></figcaption></figure>

➡️ Neste exemplo, o erro ocorreu porque foi enviado um **arquivo em formato não suportado**.

***

### Outro exemplo de erro retornado pela Meta

<figure><img src="../../../.gitbook/assets/image (53).png" alt=""><figcaption></figcaption></figure>

***

## 🔀 Limitações da Coexistência (WhatsApp Business App + API Oficial)

A **Coexistência** ocorre quando o mesmo número é utilizado **simultaneamente** no:

* WhatsApp Business App
* API Oficial do WhatsApp

### Limitações da Coexistência

* ❌ **Não suporta mensagens em grupos**
* ⚠️ **Não é recomendada para alto volume de envios**
* 🔐 Exige autenticação via **QR Code**

***

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

***

## 📚 Documentação oficial da Meta

A Meta possui outras regras e limitações que podem variar conforme o tipo de conta e uso.

🔗 Consulte sempre a documentação oficial: [https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/)

***

Você pode adicionar a seguinte seção na documentação da API Oficial (WABA) do Whazing:

***

## 🔗 Links Úteis para Suporte e Gestão da API Oficial (Meta WhatsApp)

### Verificar Qualidade da Conta

A Meta disponibiliza uma página para acompanhar a qualidade da conta, restrições, violações de políticas e possíveis limitações relacionadas ao WhatsApp Business.

👉 [Meta Account Quality](https://www.facebook.com/accountquality?utm_source=chatgpt.com)

***

### Suporte Oficial da Meta para Parceiros e Tech Providers

Caso seja necessário abrir um atendimento diretamente com a Meta, utilize o canal oficial de suporte empresarial:

👉 [Meta Direct Support](https://business.facebook.com/direct-support?utm_source=chatgpt.com)

#### Recomendação para Tech Providers

Ao abrir um chamado:

1. Selecione o **Business Manager (BM)** relacionado à sua conta.
2. Escolha a opção **Fazer uma pergunta**.
3. Selecione categorias relacionadas a:
   * Tech Provider
   * WhatsApp Business Platform (WABA)
   * Integrações da API Oficial
4. Descreva detalhadamente o problema, incluindo:
   * ID da WABA
   * ID do Número
   * Business Manager (BM)
   * Prints de erro (quando aplicável)
   * Horário aproximado da ocorrência

#### Quando utilizar este suporte

* Erros de aprovação da WABA
* Problemas de verificação empresarial
* Restrições de envio
* Bloqueios de qualidade
* Limites de mensagens
* Problemas com templates
* Questões relacionadas ao programa Tech Provider
* Problemas na API Oficial do WhatsApp

> Este canal costuma ser o meio mais eficaz para suporte relacionado a contas Tech Provider e WhatsApp Business Platform (WABA).

***

💡 **Dica:** Antes de abrir um chamado, consulte a página de qualidade da conta. Muitas restrições e bloqueios já são exibidos diretamente no painel da Meta, agilizando o diagnóstico do problema.

***

## ✅ Resumo rápido

* ✔️ API Oficial é estável e segura
* ⏰ Janela de 24h é obrigatória
* 📩 Templates são exigidos para iniciar conversas
* ❌ Não funciona com grupos em Coexistência
* 🚦 **20 mensagens por segundo apenas em Coexistência**
* 📈 API Oficial sem Coexistência segue limites dinâmicos da Meta
