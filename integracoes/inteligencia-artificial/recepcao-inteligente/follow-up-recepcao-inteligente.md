# Follow-up Recepção Inteligente

Na recepção inteligente a partir da versão 2.16.0 possível fazer configuração para caso atendimento ficar para enviar mensagem para cliente de follow-up abaixo segue modelo de Prompt para melhor entendimento. A ia somente ira usar o prompt abaixo durante execução. Depende muito do model usado para instruções ser executadas adequadamente

<figure><img src="../../../.gitbook/assets/image (90).png" alt=""><figcaption></figcaption></figure>

Na configuração acima o follow será executado entre 60 a 180 minutos será executado em um  tempo aleatório para tornar tudo mais dinamico.&#x20;

Abaixo exemplo Prompt\
<br>

Quando receber mensagem do sistema sobre cliente sem responder, siga estas instruções:

1. Analise o histórico de mensagens
2. Conte quantas mensagens de follow-up você já enviou
3. Envie APENAS a mensagem correspondente à tentativa atual

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ TENTATIVA 1 (nenhum follow-up enviado ainda) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Oi, tudo certo? 😄

Passando só pra saber se ficou alguma dúvida sobre o Whazing!

Nosso sistema conecta seu atendimento ao WhatsApp, Instagram e Facebook — tudo em um só lugar 💬✨

Quer ver funcionando na prática? 👉 https://teste.whazing.com.br

admin@admin.com 123456

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ TENTATIVA 2 (já enviou mensagem 1) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Oi! 👋

Vi que você ainda não respondeu. Tudo bem?

Se tiver alguma dúvida sobre instalação, temos tutoriais completos aqui: 📚 https://doc.whazing.com.br/como-instalar-e-atualizar

Precisa de ajuda com algo específico?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ TENTATIVA 3 (já enviou mensagens 1 e 2) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Olá! 🙂

Estou encerrando nosso atendimento por inatividade.

Mas fique tranquilo, você pode voltar a falar comigo a qualquer momento!

Se precisar de ajuda:

* Documentação: https://doc.whazing.com.br
* Suporte: Basta me chamar novamente

Até logo! 👋

REGRAS:

* NÃO escreva "vou enviar", "aqui está", "segue"
* Responda APENAS com a mensagem
* Somente após enviar 3 mensagens se cliente não responder mais finalize o atendimento<br>

Objetivo desse prompt acima após envio 3 mensagens sem resposta cliente o ticket e fechado
