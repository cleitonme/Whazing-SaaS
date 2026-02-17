# Follow-up na Recepção Inteligente

A partir da **versão 2.16.0**, a Recepção Inteligente permite configurar **mensagens automáticas de follow-up** quando o cliente para de responder.

Esse recurso ajuda a:

* 🧠 Retomar conversas automaticamente
* 📈 Aumentar conversões
* 🗂️ Evitar tickets esquecidos
* 🔒 Encerrar atendimentos inativos de forma organizada

<figure><img src="../../../.gitbook/assets/image (90).png" alt=""><figcaption></figcaption></figure>

***

## ⏱️ Como funciona o tempo de envio?

No exemplo da imagem:

* O follow-up será executado entre **60 a 180 minutos**
* O envio acontece em **tempo aleatório dentro desse intervalo**

✅ Isso torna o envio mais natural ✅ Evita padrão fixo de disparo ✅ Deixa a automação mais dinâmica

***

## 🤖 Como funciona o Prompt?

Durante a execução do follow-up, a IA utilizará **somente o prompt configurado nesse campo**.

⚠️ Importante: O funcionamento correto depende do **modelo de IA utilizado**. Alguns modelos seguem instruções com mais precisão do que outros.

***

## 📝 Exemplo de Prompt para Follow-up

Abaixo um modelo recomendado para controlar até **3 tentativas automáticas**:

***

```
Quando receber mensagem do sistema sobre cliente sem responder, siga estas instruções:

1. Analise o histórico de mensagens
2. Conte quantas mensagens de follow-up você já enviou
3. Envie APENAS a mensagem correspondente à tentativa atual

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TENTATIVA 1 (nenhum follow-up enviado ainda)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Oi, tudo certo? 😄

Passando só pra saber se ficou alguma dúvida sobre o Whazing!

Nosso sistema conecta seu atendimento ao WhatsApp, Instagram e Facebook — tudo em um só lugar 💬✨

Quer ver funcionando na prática?
👉 https://teste.whazing.com.br

admin@admin.com
123456

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TENTATIVA 2 (já enviou mensagem 1)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Oi! 👋

Vi que você ainda não respondeu. Tudo bem?

Se tiver alguma dúvida sobre instalação, temos tutoriais completos aqui:
📚 https://doc.whazing.com.br/como-instalar-e-atualizar

Precisa de ajuda com algo específico?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TENTATIVA 3 (já enviou mensagens 1 e 2)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Olá! 🙂

Estou encerrando nosso atendimento por inatividade.

Mas fique tranquilo, você pode voltar a falar comigo a qualquer momento!

Se precisar de ajuda:
- Documentação: https://doc.whazing.com.br
- Suporte: Basta me chamar novamente

Até logo! 👋

REGRAS:
- NÃO escreva "vou enviar", "aqui está", "segue"
- Responda APENAS com a mensagem
- Somente após enviar 3 mensagens se cliente não responder mais finalize o atendimento
```

***

## 🎯 Objetivo dessa Configuração

Se o cliente:

1. Não responder após a primeira mensagem → envia a segunda
2. Não responder após a segunda → envia a terceira
3. Não responder após a terceira → o ticket é fechado automaticamente

Isso mantém o sistema:

* ✅ Organizado
* ✅ Automatizado
* ✅ Sem atendimentos parados
* ✅ Com abordagem profissional
