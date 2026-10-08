# Comportamento

A aba **Comportamento** da tela de edição da integração define como a IA usa o histórico de atendimentos e o tempo de espera antes de responder.

Acesse a integração em **Automação e Integrações → IA e Integrações** e abra a aba **Comportamento**.

***

## 📜 Utilizar histórico de atendimentos anteriores

Ao ativar, a IA também considera conversas de **tickets anteriores do mesmo contato**.

* Respeita o **limite máximo de mensagens** configurado.
* **Máximo de mensagens no histórico:** `10` (padrão) — ajustável de `1` a `50` na barra deslizante.

> 💡 Isso evita que a IA repita perguntas que o cliente já respondeu em atendimentos anteriores.

***

## ⏳ Tempo de espera para resposta

Define quanto tempo o sistema aguarda antes de responder e, nesse período, quais mensagens ele considera na resposta.

* **Recomendado: 30 a 60 segundos** — um tempo maior deixa a resposta mais natural e humana.
* Você escolhe o **tempo mínimo e o tempo máximo** (de `1` a `120` segundos) e o sistema aguarda um tempo **aleatório** entre os dois antes de responder.
* Durante a espera, o sistema **junta as mensagens que o cliente enviou** e responde considerando tudo junto.

### Por que a IA parece demorar?

Esse tempo é proposital: evita respostas instantâneas e ``picadas``, e permite que a IA leia o contexto da conversa antes de responder.

Exemplo: se o cliente envia "bom dia" e, 5 segundos depois, "quero saber o preço do plano", a IA pode responder a conversa completa em vez de tratar cada mensagem como uma coisa nova.

### Como deixar a resposta mais rápida?

Diminua o **tempo mínimo e o tempo máximo** na barra deslizante.

> ⚠️ Atenção: tempo muito curto tende a gerar respostas mais fragmentadas — a IA responde antes de juntar o contexto da conversa.

### Como funciona a barra de tempo?

A barra tem dois ponteiros:

* **Esquerda:** tempo **mínimo** de espera.
* **Direita:** tempo **máximo** de espera.

O sistema escolhe um tempo aleatório entre os dois e, nesse intervalo, agrupa as mensagens do cliente antes de responder.
