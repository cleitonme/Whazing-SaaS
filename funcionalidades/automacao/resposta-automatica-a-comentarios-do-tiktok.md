# Resposta Automática a Comentários do TikTok

> **Disponível a partir da versão 3.0**
>
> Com este recurso, o sistema pode responder automaticamente aos comentários recebidos nas publicações do **TikTok**, sem que um atendente precise responder manualmente cada comentário.
>
> ⚠️ **Importante:** este recurso está disponível somente para canais do **TikTok conectados pelo HUB Notificame**.

***

### 📌 O que é esta automação?

A **Resposta Automática a Comentários do TikTok** permite que o sistema identifique novos comentários nas suas publicações e envie automaticamente uma resposta pública.

Por exemplo:

**Pessoa comenta no vídeo:**

> "Qual o valor?"

O sistema pode responder automaticamente:

> "Olá! 😊 Vou te ajudar com essa informação."

A resposta pode ser uma **mensagem fixa** ou ser criada pela **Inteligência Artificial**.

***

## 📍 Onde encontrar

No menu do sistema, acesse:

**Automação e Integrações → Resposta a Comentários (TikTok)**

***

## 1. Selecione o canal do TikTok

Ao abrir a página, será necessário escolher qual canal do TikTok utilizará a automação.

#### Canal do TikTok

Selecione o canal desejado.

Exemplo:

> **tiktok (TikTok)**

Essa configuração determina em qual conta do TikTok o sistema deverá monitorar os comentários.

***

## 2. Encerramento automático

A opção:

**Fechar automaticamente tickets de comentários**

permite encerrar automaticamente o atendimento depois que o sistema responder ao comentário.

#### Quando ativado

O fluxo será:

**Comentário recebido → Resposta automática → Ticket encerrado**

Essa opção é útil quando os comentários não precisam de acompanhamento de um atendente.

#### Quando desativado

O ticket continuará disponível para atendimento, permitindo que um usuário da equipe acompanhe a conversa.

> 💡 **Dica:** se sua equipe quiser acompanhar manualmente os comentários depois da resposta automática, deixe essa opção desativada.

***

## 3. Configuração da Inteligência Artificial

Na seção **Resposta automática em redes sociais**, você poderá configurar a inteligência artificial utilizada para gerar as respostas.

Dependendo do plano contratado, a IA compartilhada do sistema pode estar disponível.

Caso o plano não possua esse recurso, será exibida uma mensagem informando que você pode:

* Utilizar sua própria API; ou
* Contratar a IA do sistema.

***

## 4. Utilizar minha própria API

Caso queira utilizar sua própria conta de inteligência artificial, ative:

**Utilizar minha própria API**

Depois, configure o provedor desejado.

#### Provedor de IA

Você poderá selecionar o serviço de IA disponível.

Também existe a opção:

**Personalizado (OpenAI Compatible)**

Essa opção permite utilizar provedores compatíveis com a API da OpenAI.

Alguns exemplos:

* OpenRouter
* DeepSeek
* Together AI
* Mistral
* Ollama
* LM Studio
* vLLM

***

## 5. Base URL

A **Base URL** é o endereço utilizado para acessar o serviço de inteligência artificial.

Exemplo:

`http://localhost:20128/v1`

O endereço depende do provedor escolhido.

Se estiver utilizando um serviço externo, utilize a URL fornecida pelo próprio provedor.

***

## 6. API Key

A **API Key** é a chave utilizada para autorizar o sistema a utilizar seu serviço de inteligência artificial.

Ela normalmente é fornecida pelo provedor de IA.

***

## 7. Modelo

O campo **Modelo** define qual modelo de inteligência artificial será utilizado para gerar as respostas.

O modelo disponível depende do provedor configurado.

***

## 8. Máximo de tokens na resposta

Define o tamanho máximo que a IA poderá utilizar para gerar uma resposta.

Exemplo:

> **300 tokens**

Como as respostas dos comentários do TikTok normalmente devem ser curtas, não é necessário utilizar valores muito altos.

***

## 9. Temperatura

A **Temperatura** controla a variação das respostas geradas pela IA.

Exemplo:

> **0,1**

Valores mais baixos tendem a produzir respostas mais previsíveis.

Para respostas automáticas em redes sociais, valores baixos podem ajudar a manter um padrão de comunicação.

***

## 💬 10. Ativar resposta automática a comentários

Para começar a responder automaticamente, ative:

**Ativar resposta automática a comentários**

Depois de ativado:

> Sempre que alguém comentar em uma publicação do TikTok, o sistema poderá responder publicamente utilizando a configuração escolhida.

***

## 11. Como deseja responder?

Você poderá escolher entre:

#### 📝 Mensagem fixa

Utiliza sempre a mesma mensagem para responder aos comentários.

Exemplo:

> "Obrigado pelo comentário! 😊 Se precisar de mais informações, estamos à disposição."

Essa opção é indicada quando você deseja manter exatamente a mesma resposta.

***

#### 🤖 Inteligência Artificial

A inteligência artificial cria uma resposta de acordo com o conteúdo do comentário.

Por exemplo:

**Comentário:**

> "Vocês entregam para todo o Brasil?"

A IA pode responder:

> "Sim! 😊 Fazemos entregas para todo o Brasil."

Outro comentário:

> "Onde posso comprar?"

A IA poderá responder de maneira diferente, de acordo com as informações disponíveis.

***

## 🧠 12. Usar Base de Conhecimento

Quando estiver utilizando a Inteligência Artificial, você poderá ativar:

**Usar base de conhecimento**

A Base de Conhecimento permite que a IA utilize informações cadastradas no sistema para criar respostas mais adequadas.

Por exemplo, você pode ter bases contendo informações sobre:

* Produtos
* Serviços
* Preços
* Perguntas frequentes
* Formas de pagamento
* Horários
* Políticas da empresa

***

## 13. Similaridade mínima (KB)

A opção **Similaridade mínima (KB)** determina o quanto uma informação encontrada na Base de Conhecimento precisa ser relacionada ao comentário recebido.

O valor padrão é:

> **0,7**

O campo aceita valores entre:

> **0 e 1**

Para começar, recomendamos utilizar o valor padrão de **0,7** e ajustar posteriormente caso seja necessário.

***

## 14. Selecionar bases de conhecimento

Você pode escolher quais bases serão utilizadas pela IA.

Exemplo:

* **manual**
* **mentoria**
* **pc gamer**

Cada base pode possuir diferentes quantidades de conteúdos ou trechos.

Por exemplo:

> **manual — #2 · 71 trechos**

Isso indica que existem conteúdos cadastrados nessa base que poderão ser utilizados pela inteligência artificial.

> 💡 **Dica:** selecione somente as bases que possuem informações relacionadas ao seu negócio e aos comentários que você deseja responder.

***

## ✍️ 15. Prompt personalizado

O **Prompt personalizado** permite informar para a IA como ela deve responder aos comentários.

Um exemplo de prompt:

> Você responde publicamente comentários de um vídeo do TikTok. Seja breve (1-2 frases), descontraído e adequado ao tom da rede social. Não use saudações longas.

Você pode adaptar esse texto de acordo com a comunicação da sua empresa.

#### Por exemplo:

Se sua empresa possui uma comunicação mais profissional:

> Responda aos comentários de forma educada, profissional e objetiva. Utilize respostas curtas, com no máximo duas frases.

Se sua empresa possui uma comunicação mais descontraída:

> Responda aos comentários de forma simpática, natural e descontraída. Seja breve e utilize uma linguagem adequada ao TikTok.

***

## 🔄 Como funciona na prática?

Depois que tudo estiver configurado, o processo será:

**1️⃣ Você publica um vídeo no TikTok**

⬇️

**2️⃣ Uma pessoa comenta no vídeo**

> "Quanto custa?"

⬇️

**3️⃣ O sistema identifica o novo comentário**

⬇️

**4️⃣ A automação é executada**

⬇️

**5️⃣ O sistema gera a resposta**

Pode ser uma mensagem fixa ou uma resposta criada pela IA.

⬇️

**6️⃣ A resposta é publicada no comentário**

> "Olá! 😊 Posso te ajudar com mais informações."

***

## ⭐ Exemplo de configuração inicial

Para quem está configurando o recurso pela primeira vez, uma configuração simples seria:

| Configuração            | Sugestão                 |
| ----------------------- | ------------------------ |
| Canal                   | Seu canal do TikTok      |
| Encerramento automático | Conforme sua necessidade |
| Resposta automática     | Ativada                  |
| Tipo de resposta        | Inteligência Artificial  |
| Base de Conhecimento    | Ativada, se disponível   |
| Similaridade            | 0,7                      |
| Prompt personalizado    | Opcional                 |
| Temperatura             | 0,1                      |
| Máximo de tokens        | 300                      |

***

## ⚠️ Cuidados importantes

Antes de ativar a automação para o público, recomendamos:

* Testar com alguns comentários.
* Conferir se a IA está respondendo corretamente.
* Verificar as informações da Base de Conhecimento.
* Utilizar um prompt claro.
* Evitar que a IA invente preços, descontos ou condições comerciais.
* Manter as respostas curtas.
* Revisar as primeiras respostas após ativar o recurso.

> 💡 **Boa prática:** se a IA utilizar informações comerciais, mantenha essas informações atualizadas na Base de Conhecimento.

***

## ❓ Perguntas frequentes

#### A função funciona em qualquer TikTok?

Não. Esta automação está disponível somente para canais do **TikTok conectados pelo HUB Notificame**.

#### Preciso utilizar IA?

Não.

Você pode escolher **Mensagem fixa** e definir exatamente o texto que será publicado.

#### Posso usar minha própria IA?

Sim. É possível configurar sua própria API e utilizar provedores compatíveis com a API da OpenAI.

#### Posso utilizar a Base de Conhecimento?

Sim, quando estiver utilizando a opção de **Inteligência Artificial**.

#### Posso escolher quais bases a IA utilizará?

Sim. Você pode selecionar as bases de conhecimento desejadas.

#### Posso criar meu próprio prompt?

Sim. O campo **Prompt personalizado** permite definir as regras de resposta da IA.

#### Posso fechar automaticamente o atendimento?

Sim. A opção **Fechar automaticamente tickets de comentários** permite encerrar o ticket depois que o comentário for respondido.
