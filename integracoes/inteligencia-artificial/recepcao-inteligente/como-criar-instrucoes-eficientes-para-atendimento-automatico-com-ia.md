# Como criar instruções eficientes para Atendimento Automático com IA

A qualidade das respostas da IA depende diretamente das instruções configuradas no prompt.

Quanto mais claras forem as regras e exemplos fornecidos, mais a IA irá:

* responder corretamente
* manter o contexto
* seguir o padrão da empresa
* evitar respostas erradas
* agir de forma mais natural e humanizada

***

## 📌 O que é um Prompt?

Prompt é o conjunto de instruções enviado para a IA informando:

* como ela deve responder
* o que ela pode fazer
* o que ela não pode fazer
* como deve agir no atendimento

A IA funciona melhor quando recebe:\
✅ contexto\
✅ regras claras\
✅ objetivos definidos\
✅ exemplos de comportamento

***

## 📌 Estrutura recomendada para um bom prompt

Um prompt eficiente normalmente possui:

```txt
1. Quem a IA é
2. Objetivo do atendimento
3. O que ela pode fazer
4. O que ela NÃO pode fazer
5. Como deve responder
6. Regras obrigatórias
7. Exemplos de respostas
8. Informações da empresa
```

***

## ✅ 1. Defina quem a IA é

Explique qual o papel da IA dentro da empresa.

#### Exemplo:

```txt
Você é a assistente virtual da empresa Whazing.
Seu objetivo é atender clientes pelo WhatsApp de forma rápida, educada e objetiva.
```

***

## ✅ 2. Explique o objetivo do atendimento

A IA precisa entender claramente qual sua função.

#### Exemplo:

```txt
Seu objetivo é:
- responder dúvidas
- apresentar planos
- explicar funcionalidades
- encaminhar suporte quando necessário
```

***

## ✅ 3. Informe o que a IA pode fazer

Liste tudo que ela está autorizada a responder.

#### Exemplo:

```txt
Você pode:
- informar preços
- explicar funcionalidades
- informar horário de atendimento
- encaminhar setores
- coletar informações do cliente
```

***

## ✅ 4. Informe o que a IA NÃO pode fazer

Isso reduz respostas erradas e evita informações inventadas.

#### Exemplo:

```txt
Você NÃO deve:
- inventar informações
- alterar preços
- responder assuntos fora da empresa
- confirmar pagamentos manualmente
```

***

## ✅ 5. Defina o tom da conversa

Explique como a IA deve responder.

#### Exemplo:

```txt
Regras:
- Responda sempre em português do Brasil
- Utilize mensagens curtas
- Seja amigável e profissional
- Nunca envie textos muito longos
- Faça uma pergunta por vez
```

***

## 🤖 Configurações recomendadas da IA

### 🔹 Modelo

O modelo influencia:

* qualidade das respostas
* velocidade
* custo
* capacidade de seguir instruções

#### Exemplos:

| Modelo       | Características            |
| ------------ | -------------------------- |
| GPT-4.1 Mini | Mais rápido e econômico    |
| GPT-4.1      | Mais inteligente e natural |



***

### 🔹 Temperatura

A temperatura controla o nível de criatividade da IA.

| Valor     | Resultado             |
| --------- | --------------------- |
| 0.1 a 0.3 | Mais objetiva         |
| 0.4 a 0.6 | Cria mais informações |
| 0.7+      | Mais criativa         |

#### ✅ Recomendado para garantir seguir prompt:

```txt
0.1 a 0.3
```

Isso ajuda a IA responder de forma consistente sem inventar informações.

***

### 🔹 Máximo de Tokens

Define o tamanho máximo da resposta.

| Tokens    | Resultado                |
| --------- | ------------------------ |
| 100 a 300 | Respostas curtas - Ideal |
| 300 a 800 | Respostas medias         |
| 1000+     | Respostas longas         |

#### ✅ Recomendado:

```txt
200 a 500 tokens
```

***

## 📌 O segredo para melhorar respostas da IA

A IA aprende MUITO melhor quando você mostra:

* o que ela respondeu errado
* por que ficou ruim
* como deveria responder

Exemplos melhoram drasticamente os resultados.

***

## ❌ Exemplo ruim de instrução

```txt
Seja educada.
```

Muito genérico.

***

## ✅ Exemplo correto ensinando comportamento

### Cliente perguntou:

```txt
Qual valor do plano?
```

***

### ❌ IA respondeu errado:

```txt
Temos vários planos disponíveis.
```

Resposta vaga e pouco útil.

***

### ✅ Resposta ideal:

```txt
Temos planos a partir de R$ 99,90/mês 😊

Posso te enviar os detalhes dos planos disponíveis.
```

***

## 📌 Ensine o tom correto da conversa

### ❌ Muito robótico

```txt
Prezado cliente, agradecemos seu contato.
```

***

### ✅ Mais natural

```txt
Olá 😊
Tudo bem?

Vou te ajudar com isso.
```

***

## 📌 Ensine a IA a não inventar respostas

### ❌ Errado

A IA cria informações que não existem.

***

### ✅ Correto

```txt
Caso não saiba uma informação, informe educadamente que irá encaminhar para um atendente.
Nunca invente respostas.
```

***

## 📌 Ensine respostas curtas

WhatsApp funciona melhor com mensagens rápidas e objetivas.

***

### ❌ Errado

```txt
Nosso sistema possui diversas funcionalidades extremamente avançadas para automação empresarial...
```

***

### ✅ Correto

```txt
Nosso sistema possui:
- WhatsApp
- Instagram
- Facebook
- Chatbot
- IA integrada 😊
```

***

## 📌 Como usar o ChatGPT para criar prompts melhores

Você pode utilizar o próprio ChatGPT para criar prompts profissionais.

Informe:

* qual modelo será utilizado
* temperatura
* máximo de tokens
* tipo da empresa
* comportamento esperado da IA

***

## ✅ Exemplo de solicitação para o ChatGPT

```txt
Crie um prompt para atendimento automático no WhatsApp.

Modelo utilizado:
GPT-4.1 Mini

Temperatura:
0.1

Máximo de tokens:
250

Minha empresa vende sistema de atendimento WhatsApp.

A IA deve:
- responder dúvidas
- informar preços
- explicar funcionalidades
- encaminhar suporte

A IA NÃO deve:
- inventar informações
- alterar valores
- responder assuntos fora da empresa

Quero respostas:
- curtas
- naturais
- humanizadas
- profissionais
```

***

## 📌 Exemplo de Prompt Completo

```txt
Você é a assistente virtual da empresa Whazing.

Seu objetivo é atender clientes pelo WhatsApp de forma rápida, amigável e objetiva.

Você deve:
- responder dúvidas
- apresentar planos
- explicar funcionalidades
- encaminhar suporte quando necessário

Você NÃO deve:
- inventar informações
- alterar preços
- responder assuntos fora da empresa

Regras:
- Responda sempre em português do Brasil
- Utilize mensagens curtas
- Nunca envie textos muito longos
- Seja educada e humanizada
- Faça uma pergunta por vez
- Utilize emojis moderadamente

Exemplos:

Cliente:
"Qual valor do sistema?"

Resposta ideal:
"Temos planos a partir de R$ 99,90 😊
Posso te enviar os detalhes."

Cliente:
"Vocês possuem integração com Instagram?"

Resposta ideal:
"Sim 😊
Nosso sistema possui integração com Instagram e Facebook."
```

***

## 📌 Técnica avançada — Ensinar comportamento correto

Você também pode ensinar:

* quando vender
* quando transferir atendimento
* quando encerrar conversa
* como responder clientes irritados

***

## ✅ Exemplo — Cliente irritado

### Cliente:

```txt
Esse sistema não funciona.
```

***

### ❌ Resposta ruim:

```txt
O sistema funciona normalmente.
```

***

### ✅ Resposta ideal:

```txt
Sinto muito pelo problema 😔

Vou te ajudar a resolver isso da melhor forma possível.
Pode me informar o que aconteceu?
```

***

## ✅ Exemplo — Quando transferir atendimento

```txt
Se o cliente solicitar cancelamento, financeiro ou suporte técnico avançado, encaminhe para um atendente humano.
```

***

## 📌 Erros mais comuns ao criar prompts

### ❌ Prompt muito curto

```txt
Atenda o cliente.
```

A IA não possui contexto suficiente.

***

### ❌ Regras contraditórias

```txt
Seja formal.
Use muitas gírias.
```

***

### ❌ Prompt gigante e desorganizado

Muitas regras sem organização fazem a IA ignorar instruções.

***

### ❌ Não utilizar exemplos

Exemplos ajudam muito a IA entender o comportamento esperado.

***

## 💡 Dicas importantes

### ✅ Utilize listas

A IA entende melhor instruções organizadas.

***

### ✅ Seja específico

Quanto mais específico:

* melhor a resposta
* menor chance da IA errar

***

### ✅ Faça testes

Pequenas alterações no prompt podem melhorar drasticamente os resultados.

***

## 📌 Recomendação final

Os melhores prompts normalmente:

* possuem regras claras
* usam exemplos
* limitam comportamentos errados
* ensinam o tom da conversa
* mostram respostas ideais
* definem limites para IA

Quanto melhor o prompt, melhor será o atendimento automático da Inteligência Artificial.
