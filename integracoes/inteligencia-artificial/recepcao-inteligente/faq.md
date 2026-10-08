# Recepção Inteligente — FAQ e comportamento comum

## 📌 Como a IA decide quando responder?

A Recepção Inteligente **não responde mensagem por mensagem** na hora exata em que o cliente envia. Ela funciona com dois conceitos:

1. **Tempo de espera para resposta** — o sistema aguarda um período (configurável) antes de responder.
2. **Histórico de mensagens** — durante esse período, ele junta as mensagens que o cliente enviou e responde considerando tudo junto.

Ou seja: a IA “observa” a conversa por alguns segundos antes de responder, para não tratar cada mensagem isolada como um assunto novo.

---

## ⏱️ Por que a resposta parece delayed?

Por padrão, a IA espera entre um tempo mínimo e um tempo máximo configurados na aba **Comportamento**. O sistema escolhe um tempo **aleatório** nessa faixa antes de responder.

Isso tem dois motivos:

- Evita respostas instantâneas e "robóticas".
- Deixa a IA pegar o contexto da conversa em vez de responder "oi", "bom dia", "quero o boleto" como pedidos separados.

---

## 🧠 Por que ela às vezes parece não entender?

No geral, as causas mais comuns são:

- **Prompt muito genérico** — a IA não sabe o que pode responder ou para onde encaminhar.
- **Sem palavras-chave de transferência** — nomes de assunto, "boleto", "conta", "preco", "venda", etc.
- **Sem fila de fallback** — quando não há atendente online ou a IA não consegue encaminhar, é preciso uma fila de reserva.
- **Histórico pequeno ou desligado** — se o contato já teve outros atendimentos, o histórico ajuda a evitar perguntas repetidas.

---

## ❓ Perguntas rápidas

**A IA está lenta de propósito?**
Não. O tempo de espera é configurável. Se você quer respostas mais rápidas, diminua o tempo mínimo/máximo na aba **Comportamento**.

**Ela vai responder qualquer coisa?**
Não. Ela segue o prompt configurado e pode ser limitada a responder dentro do que você definir.

**Ela vai substituir o atendente?**
Não. Ela faz pré-atendimento: responde o que consegue e encaminha para a equipe no momento certo.

**Como testar antes de usar de verdade?**
Use **Simular conversa** na tela da integração. O simulador testa o prompt e as transferências, mas tem limitações — veja o botão **Ver limitações** dentro do teste.
