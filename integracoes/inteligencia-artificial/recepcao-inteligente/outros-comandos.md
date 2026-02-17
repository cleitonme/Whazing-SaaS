# Outros Comandos

## ⚙️ Comandos Automáticos da IA

O sistema permite que a IA execute ações automáticas dentro do atendimento usando comandos em formato JSON.

Esses comandos devem ser enviados exatamente no formato correto para que o sistema reconheça e execute a ação.

***

## 🔄 Transferir para Fila

Comando:

```json
{ "transferQueue": ID }
```

#### 📌 O que faz?

Transfere o atendimento para uma **fila específica**.

#### ⚠️ Importante:

Substituir `ID` pelo ID real da fila cadastrada no sistema.

#### 🧠 Exemplo de Uso

Se o cliente disser:

> “Preciso falar com o suporte técnico”

A IA pode responder:

```
Vou transferir você para nossa equipe de suporte técnico.
```

E incluir:

```json
{ "transferQueue": 3 }
```

(onde `3` é o ID da fila Suporte Técnico)

***

## 👤 Transferir para Usuário

Comando:

```json
{ "transferUser": ID }
```

#### 📌 O que faz?

Transfere o atendimento para um **usuário específico**.

#### ⚠️ Importante:

Substituir `ID` pelo ID real do usuário.

#### 🧠 Exemplo

Cliente:

> “Quero falar com o João”

IA responde:

```
Certo! Vou encaminhar seu atendimento para o João.
```

E envia:

```json
{ "transferUser": 12 }
```

(onde `12` é o ID do usuário João)

***

## 💳 Envio de Pix

Comando:

```json
{ "SendPix": true }
```

#### 📌 O que faz?

Ativa o envio do botão de pagamento Pix no atendimento.

⚠️ Só funcionará se a chave Pix estiver corretamente cadastrada no sistema.

#### 🧠 Exemplo

Cliente:

> “Prefiro pagar via Pix”

IA responde:

```
Perfeito! Vou enviar nosso Pix para você realizar o pagamento.
```

E inclui:

```json
{ "SendPix": true }
```

***

## ✅ Fechar Ticket

Comando:

```json
{ "closeTicket": true }
```

#### 📌 O que faz?

Encerra automaticamente o atendimento.

#### 🧠 Exemplo

Cliente:

> “Obrigado, já resolvi.”

IA responde:

```
Fico feliz em ajudar! 😊
Qualquer coisa é só chamar novamente.
```

E envia:

```json
{ "closeTicket": true }
```

***

## ⚠️ Regras Importantes para Todos os Comandos

* O JSON deve estar exatamente no formato correto.
* Não altere nomes das chaves.
* Os IDs devem existir no sistema.
* Teste antes de usar em produção.
* A IA deve responder normalmente e incluir o comando junto da resposta (conforme padrão do sistema).

***

## 🤖 Exemplo de Prompt com Comandos Automáticos

Use este modelo como base:

```
Você é um assistente de atendimento.

REGRAS IMPORTANTES:

1. Sempre responda normalmente ao cliente.
2. Quando necessário, envie o comando JSON correto ao final da resposta.
3. Não explique o comando.
4. Não altere o nome das chaves JSON.
5. Envie apenas os comandos permitidos.

COMANDOS DISPONÍVEIS:

Transferir para fila:
{ "transferQueue": ID }

Transferir para usuário:
{ "transferUser": ID }

Enviar Pix:
{ "SendPix": true }

Fechar atendimento:
{ "closeTicket": true }

REGRAS DE USO:

- Se cliente pedir suporte técnico → transferir para fila de suporte.
- Se cliente pedir humano → transferir para usuário responsável.
- Se cliente confirmar pagamento via Pix → usar { "SendPix": true }.
- Se cliente encerrar conversa ou agradecer → usar { "closeTicket": true }.

Nunca escreva explicações sobre os comandos.
Responda naturalmente e adicione o JSON apenas quando necessário.
```

***

## 🎯 Exemplo de Resposta Gerada pela IA

Cliente:

> Quero falar com suporte técnico

Resposta da IA:

```
Claro! Vou encaminhar você para nossa equipe de suporte técnico agora mesmo.

{ "transferQueue": 3 }
```

***

Cliente:

> Pode me mandar o Pix

Resposta:

```
Perfeito! Vou enviar os dados para pagamento via Pix.

{ "SendPix": true }
```

***

## 🚀 Por que esse modelo é ideal?

* ✅ Curto
* ✅ Reduz consumo de tokens
* ✅ Fácil de manter
* ✅ Diminui chance de erro da IA
* ✅ Mantém comandos padronizados

***

## 🚀 Benefícios

* 🤖 Atendimento automatizado
* 🔄 Transferências inteligentes
* 💰 Pagamentos facilitados
* 📎 Menos ação manual do operador
* 🧠 Fluxos mais organizados

***

## 🎯 Resultado Final

Com esses comandos configurados corretamente, a IA pode:

* Classificar atendimentos
* Transferir automaticamente
* Enviar Pix
* Encerrar tickets
* Organizar seu fluxo sozinho

Transformando o atendimento em um processo **inteligente, rápido e escalável** 🚀
