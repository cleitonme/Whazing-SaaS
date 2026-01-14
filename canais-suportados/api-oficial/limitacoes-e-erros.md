# Limitações e Erros

## ✉️ Envio de mensagens com API oficial via Whazing

* Funciona com envio de **mensagens e arquivos**, assim como na API não oficial.
* A API **não valida** se o número possui WhatsApp, então:
  * O número deve estar correto (DDD + 9º dígito, quando necessário).
  * Deve respeitar a **janela de 24 horas**.

📊 Limites da API Oficial

1. Para iniciar uma conversa, é necessário usar uma **mensagem de modelo**, que precisa de aprovação da Meta.
2. Imagens PNG com fundo transparente podem apresentar **alterações**, pois o WhatsApp converte para JPEG.
3. Mensagens fora do modelo só são entregues **dentro da janela de 24 horas** desde a última mensagem do cliente.

![](https://doc.whazing.com.br/~gitbook/image?url=https%3A%2F%2F858671661-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FL28BkT6aCze1NvvWNwS5%252Fuploads%252Fgit-blob-0c7dab9ce59d26cd4b74e5b6e630569045167f2a%252Flimites.png%3Falt%3Dmedia\&width=768\&dpr=4\&quality=100\&sign=d4ed56b1\&sv=2)

#### ❌ Por que minha mensagem enviada tem um “X” vermelho? <a href="#por-que-minha-mensagem-enviada-tem-um-x-vermelho" id="por-que-minha-mensagem-enviada-tem-um-x-vermelho"></a>

![](https://doc.whazing.com.br/~gitbook/image?url=https%3A%2F%2F858671661-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FL28BkT6aCze1NvvWNwS5%252Fuploads%252Fgit-blob-1743ce4cd037e75c4783976fe155b5a30f25b4fc%252Fmensagemrejeitada.png%3Falt%3Dmedia\&width=768\&dpr=4\&quality=100\&sign=ae67a165\&sv=2)print

* Isso ocorre quando:
  * A mensagem é enviada **fora da janela de 24 horas**, ou
  * O conteúdo está em **formato não aceito pela Meta**.

Se tiver retorno webhook do erro possivel consultar

<figure><img src="../../.gitbook/assets/image (51).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (52).png" alt=""><figcaption></figcaption></figure>

Nesse caso foi enviado arquivo formato não Suportado.

Outro exemplo

<figure><img src="../../.gitbook/assets/image (53).png" alt=""><figcaption></figcaption></figure>

