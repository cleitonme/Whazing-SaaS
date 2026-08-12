# Automação de Comentários e Direct do Instagram

> **Disponível a partir da versão 3.0**\
> Este recurso permite que o sistema responda automaticamente aos comentários das publicações do Instagram e envie uma mensagem privada (Direct) para a pessoa que comentou.
>
> ⚠️ **Importante:** este recurso está disponível somente para canais do **Instagram conectados pelo HUB Notificame**.

***

### 📌 O que é a Automação de Comentários e Direct?

Com essa função, você pode automatizar o atendimento de pessoas que comentam nas suas publicações do Instagram.

O sistema pode realizar **duas ações diferentes**:

1. 💬 **Responder publicamente ao comentário**
2. 📩 **Enviar automaticamente uma mensagem pelo Direct**

Você pode utilizar apenas uma dessas funções ou as duas ao mesmo tempo.

Por exemplo:

**Cliente comenta:**

> "Quero saber mais sobre esse produto!"

**Resposta pública automática:**

> "Claro! Vou te enviar mais informações pelo Direct 😊"

**Mensagem automática no Direct:**

> "Olá! 😊 Vi que você comentou na nossa publicação. Posso te ajudar com mais informações sobre o produto."

***

## 📍 Onde encontrar

No menu do sistema, acesse:

**Automação e Integrações → Automação de Comentários e Direct**

***

## 1. Selecionar o canal do Instagram

Ao abrir a página, primeiro escolha qual canal do Instagram será utilizado.

#### Canal do Instagram

Selecione o canal desejado na lista.

Exemplo:

> **instagram (Instagram)**

Essa configuração é importante porque a automação será executada para os comentários e mensagens relacionados a esse canal.

***

## 2. Encerramento automático

A opção:

**Fechar automaticamente tickets de comentários**

permite que o sistema encerre automaticamente o atendimento depois que responder ao comentário.

#### Quando ativado

O fluxo será aproximadamente:

**Comentário → Resposta automática → Ticket encerrado**

Isso é útil quando o comentário não precisa de atendimento humano.

#### Quando desativado

O ticket permanece aberto para que um atendente possa continuar o atendimento.

> 💡 **Dica:** se sua equipe precisa acompanhar manualmente os comentários, recomendamos deixar essa opção desativada.

***

## 3. Resposta automática em redes sociais

Nesta parte você define qual inteligência artificial será utilizada para gerar as respostas automáticas.

O sistema permite utilizar:

* 🤖 IA compartilhada do sistema
* 🔑 Sua própria API
* 🌐 Provedor personalizado compatível com OpenAI

#### IA compartilhada do sistema

Dependendo do plano contratado, a IA compartilhada pode estar disponível automaticamente.

Caso o plano não inclua esse recurso, o sistema exibirá uma mensagem informando que você pode utilizar sua própria chave de API ou contratar a IA do sistema.

***

## 4. Utilizar minha própria API

Caso queira utilizar sua própria conta de IA, ative:

**Utilizar minha própria API**

Depois configure o provedor.

#### Provedor de IA

Selecione o serviço que deseja utilizar.

Também existe a opção:

**Personalizado (OpenAI Compatible)**

Essa opção permite utilizar serviços compatíveis com a API da OpenAI, como:

* OpenRouter
* DeepSeek
* Together AI
* Mistral
* Ollama
* LM Studio
* vLLM
* Outros provedores compatíveis

***

## 5. Configurações da IA

Quando estiver utilizando uma API própria, você poderá configurar alguns parâmetros.

#### Base URL

É o endereço utilizado para acessar o serviço de inteligência artificial.

Exemplo:

`http://localhost:20128/v1`

O endereço depende do provedor utilizado.

#### API Key

É a chave de acesso fornecida pelo seu provedor de IA.

#### Modelo

Define qual modelo de inteligência artificial será utilizado.

#### Máximo de tokens na resposta

Define o tamanho máximo da resposta gerada pela IA.

Por exemplo:

> **300 tokens**

Para respostas de comentários, normalmente não é necessário utilizar valores muito altos.

#### Temperatura

Controla o quanto a resposta pode variar.

Exemplo:

> **0,1**

Valores baixos normalmente produzem respostas mais previsíveis.

***

## 💬 6. Resposta automática ao comentário

Ative:

**Ativar resposta automática ao comentário**

Quando essa opção estiver ativada, sempre que alguém comentar em uma publicação do Instagram, o sistema poderá responder automaticamente ao comentário.

***

## 7. Escolher como responder

Você pode escolher entre duas formas:

#### 📝 Mensagem fixa

A mesma mensagem será utilizada nas respostas.

Exemplo:

> "Obrigado pelo seu comentário! 😊 Enviamos mais informações pelo Direct."

Essa opção é recomendada quando você quer que todos recebam exatamente a mesma resposta.

#### 🤖 Inteligência Artificial

A IA cria uma resposta diferente de acordo com o conteúdo do comentário.

Por exemplo:

**Comentário 1:**

> "Qual o valor?"

A IA pode responder:

> "Olá! 😊 Vou te enviar mais informações pelo Direct."

**Comentário 2:**

> "Vocês entregam para todo o Brasil?"

A IA pode responder:

> "Sim! 😊 Trabalhamos com entregas para todo o Brasil."

***

## 🧠 8. Usar Base de Conhecimento

Quando a resposta for gerada pela IA, você também pode utilizar uma **Base de Conhecimento**.

Ative:

**Usar base de conhecimento**

Depois defina a:

#### Similaridade mínima

Esse valor determina o quanto o conteúdo encontrado na Base de Conhecimento precisa ser parecido com a pergunta/comentário para ser utilizado.

O padrão recomendado é:

> **0,7**

Você pode selecionar uma ou mais bases.

Exemplo:

* Manual
* Mentoria
* PC Gamer

***

## ✍️ 9. Prompt personalizado

O **Prompt personalizado** permite definir como a inteligência artificial deve responder.

Exemplo de configuração:

> Você responde publicamente comentários de uma publicação do Instagram. Seja breve (1-2 frases), educado e simpático. Não use saudações longas nem se despeça.

#### 💡 Dica

Para comentários do Instagram, recomendamos manter as respostas:

* Curtas
* Educadas
* Naturais
* Relacionadas ao comentário
* Sem textos muito longos

***

## 📩 10. Mensagem Automática via Direct

Agora podemos configurar a mensagem privada.

Ative:

**Ativar mensagem automática via Direct**

Quando alguém comentar em uma publicação, o sistema enviará automaticamente uma mensagem privada para essa pessoa pelo Instagram Direct.

***

## 11. Escolher como enviar o Direct

Assim como na resposta pública, existem duas opções:

#### 📝 Mensagem fixa

Todos receberão a mesma mensagem.

Exemplo:

> "Olá! 😊 Vi que você comentou na nossa publicação. Posso te ajudar com mais informações?"

#### 🤖 Inteligência Artificial

A IA poderá criar uma mensagem personalizada de acordo com o contexto.

Exemplo:

**Pessoa comenta:**

> "Quero comprar!"

O Direct pode ser:

> "Olá! 😊 Vi que você quer comprar. Vou te ajudar! Me conte qual produto você está procurando."

***

## 🧠 12. Base de Conhecimento no Direct

A opção **Usar base de conhecimento** também pode ser utilizada nas mensagens enviadas pelo Direct.

Isso permite que a IA utilize informações cadastradas no sistema para criar respostas mais adequadas.

Por exemplo, sua Base de Conhecimento pode conter:

* Produtos
* Preços
* Serviços
* Horários
* Formas de pagamento
* Políticas da empresa
* Perguntas frequentes

Assim, a IA pode utilizar essas informações ao iniciar a conversa.

***

## ✍️ 13. Prompt personalizado do Direct

Você também pode definir como a IA deve criar a primeira mensagem privada.

Exemplo:

> Você envia a primeira mensagem privada (Direct) para alguém que acabou de comentar em uma publicação do Instagram. Seja breve, acolhedor, e convide a pessoa a continuar a conversa por aqui.

***

## 🔄 Como funciona na prática

#### Exemplo completo

**1️⃣ Pessoa vê sua publicação**

⬇️

**2️⃣ Pessoa comenta**

> "Quero saber mais!"

⬇️

**3️⃣ Sistema identifica o comentário**

⬇️

**4️⃣ Sistema responde publicamente**

> "Claro! 😊 Confira seu Direct."

⬇️

**5️⃣ Sistema envia uma mensagem privada**

> "Olá! Vi que você comentou na nossa publicação. 😊 Posso te ajudar com mais informações?"

⬇️

**6️⃣ Cliente continua a conversa pelo Direct**

***

## ⭐ Exemplo de configuração recomendada

Para quem está começando, uma configuração simples pode ser:

| Configuração            | Sugestão                |
| ----------------------- | ----------------------- |
| Canal                   | Seu Instagram           |
| Encerramento automático | Conforme sua operação   |
| Resposta ao comentário  | Inteligência Artificial |
| Base de Conhecimento    | Ativada, se disponível  |
| Similaridade            | 0,7                     |
| Prompt personalizado    | Sim                     |
| Mensagem via Direct     | Ativada                 |
| Direct                  | Inteligência Artificial |
| Base de Conhecimento    | Ativada, se disponível  |

***

## ⚠️ Importante sobre a IA

A inteligência artificial pode gerar respostas diferentes dependendo do comentário recebido.

Por isso, recomendamos:

* Cadastrar informações corretas na Base de Conhecimento.
* Criar um prompt claro.
* Evitar permitir que a IA invente preços ou condições comerciais.
* Testar a automação antes de divulgar a publicação.
* Verificar as primeiras respostas geradas.

> 💡 **Dica:** para respostas comerciais, é recomendado orientar a IA a utilizar somente informações presentes na Base de Conhecimento.

***

## ❓ Perguntas frequentes

#### A automação funciona em qualquer Instagram?

Não. A funcionalidade descrita nesta documentação está disponível para **Instagram conectado pelo HUB Notificame**.

#### Preciso usar inteligência artificial?

Não.

Você pode utilizar **Mensagem fixa** para responder aos comentários e também para enviar mensagens pelo Direct.

#### Posso usar minha própria IA?

Sim. O sistema permite configurar sua própria API, incluindo provedores compatíveis com a API da OpenAI.

#### Posso responder o comentário e enviar Direct ao mesmo tempo?

Sim. Você pode ativar as duas automações.

#### Posso usar a Base de Conhecimento?

Sim, quando estiver utilizando a opção de Inteligência Artificial.

#### Preciso configurar a IA para usar mensagem fixa?

Não. Se você escolher **Mensagem fixa**, basta informar a mensagem que será enviada.
