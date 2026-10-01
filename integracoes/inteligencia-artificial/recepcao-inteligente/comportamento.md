# Comportamento

A aba **Comportamento** da tela de edição da integração define como a IA utiliza o histórico e o tempo de espera antes de responder.

Acesse a integração em **Automação e Integrações → IA e Integrações** e abra a aba **Comportamento**.

***

## 📜 Utilizar histórico de atendimentos anteriores

Ao ativar, a IA também considera conversas de **tickets anteriores do mesmo contato**.

* Respeita o **limite máximo de mensagens** configurado.
* **Máximo de mensagens no histórico:** `10` (padrão) — ajustável de `1` a `50` na barra deslizante

> 💡 Isso permite que a IA não repita perguntas que o cliente já respondeu em atendimentos anteriores.

***

## ⏳ Tempo de espera para resposta

Define quanto tempo o sistema aguarda antes de responder, juntando as mensagens enviadas pelo cliente nesse período.

* **Recomendado: 30 a 60 segundos** — um tempo maior deixa a resposta mais natural e humana.
* Você escolhe o **tempo mínimo e o tempo máximo** (de `1` a `120` segundos) e o sistema aguardará um tempo **aleatório** entre os dois antes de responder, juntando as mensagens enviadas nesse período.

> 💡 Isso evita que a IA responda mensagens "picadas" separadamente (ex.: o cliente manda "bom dia" e depois o assunto).
>
> 💡 A barra de tempo tem dois ponteiros: o da esquerda define o tempo **mínimo** e o da direita o tempo **máximo**.
