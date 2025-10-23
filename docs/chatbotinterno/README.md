# 🤖 CHAT BOT INTERNO

## 🧭 Escolha e Prioridade dos Bots

> ⚠️ **Atenção:** Se a **fila** associada ao canal tiver **integração ativa**, o bot **não será acionado**.

O sistema utiliza **quatro critérios de prioridade** para definir **qual bot será usado** em novos tickets.
Eles são avaliados **nessa ordem**:

---

### 1️⃣ Lane do CRM

Todos os contatos vinculados a uma *lane* específica do CRM seguirão o bot configurado para ela.
Ao enviar uma mensagem para o número do sistema, se **não houver tickets abertos ou pendentes**, o bot dessa *lane* será acionado.

![print](crm.png)

---

### 2️⃣ Palavra-chave

Permite definir palavras que acionam um bot específico.
Exemplo: se você cadastrar a palavra **"comprar"**, e o cliente enviar **"Eu quero comprar"**, a mensagem será direcionada ao bot configurado.

> ⚠️ Observação: a palavra-chave só funciona **na primeira mensagem** de um novo ticket.
> Se o cliente enviar “oi” e depois “quero comprar”, **não será reconhecida**.

---

### 3️⃣ Canal

Cada canal pode ter um bot próprio.
Quando o cliente envia uma mensagem para o número do sistema, caso **não existam tickets abertos ou pendentes**, o bot configurado nesse canal será utilizado.

![print](canais.png)

---

### 4️⃣ Configurações Globais

Se nenhum dos critérios anteriores se aplicar, o sistema usará o **bot configurado no fluxo ativo padrão**.

---

Essas prioridades determinam **qual bot será acionado** sempre que uma nova mensagem for recebida **sem ticket aberto ou pendente**.
Garanta que cada bot esteja corretamente configurado em seu respectivo nível para que o atendimento funcione conforme o esperado.

---

## 📚 Índice

1. [Configuração de Fluxo](#configuração-de-fluxo)
2. [Ordem das Interações](#ordem-das-interações)
3. [Configuração de Condições](#configuração-de-condições)
4. [Exemplos Práticos de Fluxos](#exemplos-práticos-de-fluxos)

---

## ⚙️ Configuração de Fluxo

A configuração do fluxo do chatbot é feita pela interface visual:

![print](montagembot.png)

### 🔧 Elementos Básicos de Configuração

![print](configfluxo.png)

A partir da versão **2.11.0**, estão disponíveis as seguintes interações:

---

### 💬 Enviar Mensagem

* Permite definir o texto a ser enviado ao cliente.
* Suporta **variáveis dinâmicas** (veja seção de variáveis).

### 📎 Enviar Documentos, Vídeos, Áudios e Arquivos

* Envio de qualquer tipo de arquivo.

### 😄 Enviar Figurinhas

* Converte automaticamente qualquer imagem enviada em **figurinha**.

### 📍 Enviar Localização

* Envia localização para o contato.
* **Compatível apenas com a WHATSAPP oficial e não oficial.**

### ⏱️ Adicionar Delay

* Define o tempo (em segundos) entre as mensagens.
* Garante a **sequência correta de envio**.

### 🏷️ Adicionar Tag

* Marca o contato com uma etiqueta específica.

### 📂 Adicionar CRM

* Move o contato para uma *lane* do CRM compartilhado.

### 🔁 Alterar Follow-up

* Adiciona ou remove o cliente de um **follow-up**.

### 🌐 HTTP Request

* Permite realizar requisições externas e gravar o resultado em variáveis.

### ⚡ Forçar Execução de Condições

* Executa condições sem esperar uma nova mensagem.
  *Exemplo:* fazer uma requisição HTTP, salvar o resultado e comparar a variável obtida.

### 🗂️ Adicionar Lista

* Compatível com **API oficial** e **API Plus**.
* Funciona parcialmente no **Baileys** (sem suporte oficial, pode parar a qualquer momento).

![print](lista.png)
![print](lista2.png)

### 🔘 Enviar Botões

* Compatível com **WhatsApp oficial**, **Facebook**, **Instagram** e **API Plus**.
* Máximo de **3 botões**.

![print](botao.png)

### 🔗 Botão com Link

* Compatível com **API oficial** e **API Plus**.

![print](links.png)

### 📍 Solicitar Localização

* Envia botão solicitando a localização do cliente.
* Útil para serviços de **entrega**.
* Compatível com **API oficial** e **API Plus**.

![print](solicitarlocalizacao.png)

### 🧩 Botão Dinâmico

* Exclusivo da **API Plus**.
* Permite misturar tipos de botões: resposta, link, cópia, ligação, etc.
* Alguns dispositivos pode aparecer mensagem não compativel

![print](dinamico.png)

### 🎠 Carrossel de Mídia

* Exclusivo da **API Plus**.
* Envie várias imagens com botões interativos abaixo delas.
* Alguns dispositivos pode aparecer mensagem não compativel

![print](carrossel1.png) ![print](carrossel2.png)

---

## 🔄 Ordem das Interações

![print](configfluxo2.png)

> ⚠️ **Importante:**
>
> * Os números indicam a **sequência exata de execução**.
> * Use **delays** entre mensagens múltiplas para manter a ordem correta.

---

## 🧩 Configuração de Condições

![print](condicoes.png)

### Tipos de Condições (em ordem de prioridade)

#### 🕓 Dentro/Fora do Horário de Atendimento

* Funciona apenas na etapa **"Boas-vindas!"**.
* Deve estar **no início** das condições.
* Define ações diferentes para dentro ou fora do horário comercial.

#### ✅ Respostas Exatas

* Exemplo: “1” ou “01”.
* A resposta precisa ser **idêntica** ao configurado.

#### 🔍 Contém Exato

* Reconhece **frases completas**.
  Exemplo: “Eu quero comprar um tênis”.

#### 🧠 Contém

* Reconhece partes da frase.
  Exemplo: “comprando”, “comprador” → reconhece “compra”.

#### ✳️ Qualquer Resposta

* Sempre posicionada **por último**.
* Captura qualquer resposta não reconhecida.

#### ⏰ Dentro/Fora de Horário Personalizado

* Define ações específicas conforme horários configurados manualmente.

#### 🧮 Comparação de Variáveis

* Permite comparar valores fixos, variáveis existentes ou verificar se uma variável foi definida.

---

### ⚠️ Respostas Inesperadas

Se nenhuma condição for atendida, o bot enviará:

> “Desculpe! Não entendi sua resposta. Vamos tentar novamente! Escolha uma opção válida.”

*(Essa mensagem pode ser personalizada nas configurações.)*

---

## ⚙️ Configurações Gerais

<figure><img src="../../.gitbook/assets/image (10).png"></figure>
<figure><img src="../../.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1).png"></figure>

**Opções disponíveis:**

* **Mensagem de saudação (Fila/Usuário):** enviada ao transferir ticket.
* **Se nenhuma resposta for enviada:** mensagem padrão caso nenhuma condição seja cumprida.
* **Ausência de resposta:** define ação após determinado tempo sem interação.
* **Máximo de tentativas do bot:** define o que fazer se o cliente não responder corretamente.
* Outras configurações podem ser ajustadas conforme necessidade.

---

## 🧠 Exemplos Práticos de Fluxos

### 1️⃣ Fluxo com Horário de Atendimento

Ideal para empresas com **plantão ou suporte emergencial**.

![print](horario1.jpg) ![print](horario2.jpg)

[Baixar exemplo](horario_de_atendimento.json)

---

### 2️⃣ Fluxo com Variáveis Dinâmicas

Permite personalizar mensagens com **dados do cliente**.

[Baixar exemplo](exemplo_fluxo_usando_novas_variaveis.json)

**Exemplo de uso:**

```text
Template:
Por favor, confirme se seu endereço é {{endereco}}?
1 - Sim
2 - Não

Mensagem enviada:
Por favor, confirme se seu endereço é Rua Marechal Deodoro, 11?
1 - Sim
2 - Não
```

---

### 3️⃣ Fluxo de Agendamento com Cal.com

Integração com [https://cal.com/](https://cal.com/)

![print](barbearia.jpg)

[Baixar exemplo](agendamentobarbearia.json)

![print](barbeariabotao.jpeg)

[Baixar exemplo com botões](agendamentobarbeariabotao.json)

---

### 4️⃣ Fluxo sobre Whazing (lista, botão e links)

[Baixar exemplo](exemplo_whazing.json)

---

### 5️⃣ Fluxo com HTTP Request e Comparação de Variável

Exemplo que valida **CEP e cidade** via API.

[Baixar exemplo](exemplo_http_request.json)

---

### 6️⃣ Fluxo para Teste de API SaaS

Usa **HTTP Request** para gerar teste automático para o cliente.

[Baixar exemplo](exemplo_teste_whazing.json)

---

### 7️⃣ Fluxo de Boas-vindas Simples

Envia mensagem de boas-vindas e direciona o cliente para uma fila.

[Baixar exemplo](boas_vindas.json)

> Usa “Forçar executar condições” para simular uma resposta automática e avançar o fluxo.

---

### 8️⃣ Seleção de Fila por Palavra-chave

[Baixar exemplo](bot_por_palavra_chat.json)

Permite enviar o cliente para uma fila específica conforme a palavra digitada.
Com “Iniciar Integração ao transferir”, o sistema já ativa a integração automaticamente.

---

### 9️⃣ Consulta de CPF via API

[Baixar exemplo](consulta_cpf.json)

Usa a API pública [cpfhub.io](https://www.cpfhub.io/).

> O token do exemplo é limitado; recomenda-se gerar um novo para testes.

---

### 1️⃣ 0️⃣ Bot muda comportamento conforme horario

[Baixar exemplo](botporhorario.json)

Esse modelo apresenta diversos exemplos de como o bot interno pode ser utilizado.
De acordo com o horário em que o cliente entra em contato, ele envia automaticamente uma mensagem informando o horário de atendimento.
Se o cliente escolher a opção **“Retirar na loja”**, o bot envia a **localização da loja**.
Além disso, o bot solicita o **CNPJ do cliente** e salva o valor em uma **variável** — caso essa informação já exista, o atendimento é encaminhado diretamente para a equipe.