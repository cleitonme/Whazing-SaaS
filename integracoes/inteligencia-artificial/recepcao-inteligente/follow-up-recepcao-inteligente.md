# Follow-up na Recepção Inteligente

A Recepção Inteligente permite configurar **mensagens automáticas de follow-up** quando o cliente para de responder.

Esse recurso ajuda a:

* 🧠 Retomar conversas automaticamente
* 📈 Aumentar conversões
* 🗂️ Evitar tickets esquecidos
* 🔒 Encerrar atendimentos inativos de forma organizada

A configuração fica na **aba Followup** da tela de edição da integração (**Automação e Integrações → IA e Integrações**).

<figure><img src="../../../.gitbook/assets/image (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

***

## ⏱️ Campos de tempo

#### Tempo mínimo (min)

Define o tempo mínimo para iniciar o follow-up automático.

> 💡 Use `0` para **desativar** o follow-up automático.

#### Cliente sem resposta — Tempo de espera (minutos)

Define quanto tempo aguardar a resposta do cliente antes de executar a ação de follow-up.

> 💡 Use `0` para **desativar**.

***

## 🤖 Como funciona o Prompt?

Durante a execução do follow-up, a IA utilizará **somente o prompt configurado nesse campo**.

⚠️ Importante: O funcionamento correto depende do **modelo de IA utilizado**. Alguns modelos seguem instruções com mais precisão do que outros.

***

## 📝 Exemplo de Prompt para Follow-up

Abaixo um modelo recomendado para controlar até **3 tentativas automáticas**:

***

```
🚨 REGRA SUPREMA (OBEDEÇA SEMPRE)

Você NÃO deve contar mensagens.
Você NÃO deve decidir por número de tentativa.
Você NÃO deve analisar numericamente o histórico.
Você NÃO deve repetir mensagens já enviadas.

Sua única tarefa é:

1. Verificar se a mensagem da TENTATIVA 1 já aparece no histórico.
2. Verificar se a mensagem da TENTATIVA 2 já aparece no histórico.
3. Verificar se a mensagem da TENTATIVA 3 já aparece no histórico.
4. Enviar APENAS a primeira mensagem que ainda NÃO foi enviada.

Se nenhuma foi enviada → envie TENTATIVA 1.
Se apenas a 1 foi enviada → envie TENTATIVA 2.
Se 1 e 2 já foram enviadas → envie TENTATIVA 3.
Se as 3 já foram enviadas → NÃO envie nova mensagem.

━━━━━━━━━━━━━━━━━━━━━━━

TENTATIVA 1:

Oi, tudo certo? 😄

Passando só pra saber se ficou alguma dúvida sobre o Whazing!

Nosso sistema conecta seu atendimento ao WhatsApp, Instagram e Facebook — tudo em um só lugar 💬✨

Quer ver funcionando na prática?
https://teste.whazing.com.br

admin@admin.com
123456

━━━━━━━━━━━━━━━━━━━━━━━

TENTATIVA 2:

Olá 😊
Passando para saber se conseguiu finalizar a contratação do plano Premium ou se precisa de ajuda.

Lembrando que o plano Premium libera todos os recursos avançados da plataforma 🚀

Você sabia que nosso sistema pode ser instalado e testado sem nenhum custo?
Temos uma versão gratuita disponível com todos os recursos da versão paga.

Veja como é fácil instalar:
https://doc.whazing.com.br/como-instalar-e-atualizar

Ou ative o Teste Premium gratuito de 10 dias:
https://trial.whazing.com.br/

Fico à disposição 👋

━━━━━━━━━━━━━━━━━━━━━━━

TENTATIVA 3:

Olá! 🙂

Estou encerrando nosso atendimento por inatividade.

Você pode voltar a falar comigo a qualquer momento.

Se precisar:
Documentação: https://doc.whazing.com.br

Até logo! 👋

Após essa mensagem, escreva exatamente:
{ "closeTicket": true }

━━━━━━━━━━━━━━━━━━━━━━━

⚠️ Envie apenas UMA mensagem.
⚠️ Não explique sua decisão.
⚠️ Não diga que está verificando histórico.
⚠️ Não escreva nada além da mensagem escolhida.
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
