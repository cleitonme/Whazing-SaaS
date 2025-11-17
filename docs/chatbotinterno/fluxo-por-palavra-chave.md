# Fluxo por palavra chave

#### Regras para acionar chatbot por palavra-chave na **primeira mensagem**

<figure><img src="../../.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

1. O acionamento do **fluxo do chatbot** só ocorre quando o cliente envia a **primeira mensagem de um novo ticket** (ou seja, ticket fechado anteriormente).
2. Exemplo:
   *   Se o cliente enviar:

       ```
       eu quero adquirir whazing
       ```

       → O sistema identifica a palavra-chave e inicia automaticamente o **fluxo “whazing”** no canal oficial.
3. Importante:
   * **Somente a primeira mensagem é considerada.**
   *   Se o cliente enviar algo genérico como:

       ```
       oi
       ```

       e depois enviar:

       ```
       eu quero adquirir whazing
       ```

       → **Não será acionado**, pois não foi a primeira mensagem do ticket.
4. Resumindo:
   * ✅ Funciona: primeira mensagem contém a palavra-chave configurada.
   * ❌ Não funciona: palavra-chave enviada em mensagens seguintes dentro do mesmo ticket.
   * ❌ Não funciona: caso tenha seleciona um chatbot na lane do crm que o cliente estiver pois prioridade chatbot da lane

***
