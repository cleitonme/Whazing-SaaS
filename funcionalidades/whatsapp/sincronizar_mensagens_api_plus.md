---
icon: arrows-rotate
---

# SINCRONIZAR MENSAGENS - API PLUS - WuzApi

\*Somente mensagens que não entraram no sistema após leitura QRcode. Sincronizar com mensagens gravadas no servidor da plus que whazing não baixou. Caso queira importar mensagens use baileys depois da importação migre para Plus

Existe 2 locais podem ser sincronizadas mensagens dentros tickets e para todos contatos nos canais

Para canais tem que o plano ter "Importar Mensagens"&#x20;

🔁 **Sincronizar mensagens todos contatos API Plus e Wuzapi**

Esse processo é extremamente lento. Estará disponível somente quando estiver ativado plano importar mensagens.

Na lista de canais vai ter opção sincronizar, onde coloca número de mensagens por contato (valor de 1 a 100). O sistema pega lista de contatos e busca no servidor Plus ou Wuzapi se possui alguma mensagem e baixa para o Whazing.

Se tiver 1000 contatos, terá cerca de 2000 sincronizações. 1000 JID e 1000 LID.



Acessa Configurações - Canais

Com canal conectado terá opção

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

Preencha quantidade de mensagem que deseja sincronizar e clique em salvar será processo demorado, não sera informações que esta fazendo somente pode acompanhar verificando que novos tickets será criados.&#x20;



Para sincronizar somente contato especifico

* Cadastrar contato - caso não tenha
* Abrir novo ticket - caso não tenha algum aberto

<figure><img src="../../.gitbook/assets/sinc (1).png" alt=""><figcaption></figcaption></figure>

* Aparece pedindo quantidade de mensagens máximo 100, caso encontrar as mensagens elas começaram ser baixadas
