---
description: >-
  A Recepção Inteligente é um recurso que utiliza IA (Inteligência Artificial)
  para realizar um pré-atendimento automático aos clientes.
icon: bots
---

# Recepção inteligente

***

## 📌 Recepção Inteligente

\
Ela pode:

* Responder clientes de forma automática com base em prompts configurados.
* Encaminhar a conversa para a **fila/setor adequado** (financeiro, suporte, comercial etc.) conforme palavras-chave identificadas.
* Finalizar o atendimento automaticamente, quando for o caso.

Esse recurso ajuda a reduzir a carga da equipe, garantindo que o cliente seja direcionado corretamente antes de falar com um atendente humano.

***

### ⚙️ Configurações

#### 1. Escolha do Serviço de IA

Você pode escolher qual provedor de IA utilizar:

* **Groq**
* **ChatGPT (OpenAI)**
* **Gemini (Google)**
* **Perplexity**
* **DeepSeek**
* **Grok xAI**

Também é possível selecionar o **modelo de linguagem** desejado.

***

#### 2. Definir API KEY

Informe a chave de API do serviço escolhido (Groq, ChatGPT ou Gemini).

***

#### 3. Prompt Principal

É aqui que você **define as instruções** que a IA deve seguir.\
Exemplo de prompt:

```
Você é um assistente virtual especializado em atendimento ao cliente. 
Seja sempre educado e prestativo. 
Somente responda o que estiver no prompt e transfira para o setor adequado conforme as palavras-chave. 
Se identificar que o atendimento deve ser finalizado, faça isso automaticamente
```

***

#### 4. Prompt Adicional

Você pode complementar o comportamento da IA.\
Exemplo:

```
Responda de forma clara e objetiva. 
Se não souber algo, seja honesto sobre isso.
```

***

#### 5. Parâmetros Avançados

* **Máximo de tokens da resposta** → Limita o tamanho das respostas da IA.
* **Temperatura da IA** → Define a criatividade da resposta (0 = respostas mais objetivas, 1 = respostas mais criativas). Dica: Use 0.1 a 0.3 quanto mais baixo menor chance da ia sair do script e inventar respostas.
* **Histórico de mensagens** → Número de mensagens passadas que a IA deve considerar (recomendado: até 10).
* **Intervalo entre mensagens** → Define quanto tempo a IA deve esperar para responder quando o cliente envia mensagens “picadas” (ex: primeiro manda "bom dia", depois manda o assunto).

***

#### 6. Transferência para Filas

A IA pode direcionar a conversa para uma **fila/setor** com base em palavras-chave.

📌 **Exemplo de configuração de fila com palavras-chave**:

* **Fila Financeiro** → boleto, contas a pagar, vencimento, fatura.
* **Fila Suporte Técnico** → erro, não conecta, problema, travando.
* **Fila Comercial** → orçamento, proposta, preços, plano.

***

#### 7. Verificação de Usuários Online

Você pode configurar se a IA deve verificar se existem atendentes disponíveis na fila antes de transferir.

* **Se tiver usuários online** → A IA transfere normalmente.
* **Se não tiver usuários online** → A IA pode usar uma **fila de fallback** ou enviar uma mensagem personalizada para o cliente.

***

#### 8. Fila de Fallback

Caso a IA identifique uma fila mas não haja atendentes disponíveis, você pode definir uma fila alternativa (**fallback**) ou uma mensagem automática.

📌 **Exemplo**:

* Cliente pede “segunda via do boleto”.
* Fila padrão seria **Financeiro**.
* Se não houver usuários online e a opção estiver marcada, a IA transfere para uma **fila de automação** que pede o **CPF** e gera a 2ª via automaticamente.

***

#### 9. Mensagens Personalizadas por Fila

Você pode definir mensagens específicas que serão enviadas de acordo com a situação da fila.

📌 **Exemplo 1 (fila com usuários online):**

> “Estamos transferindo você para o setor financeiro. Aguarde um momento.”

📌 **Exemplo 2 (fila sem usuários online):**

> “No momento, não há atendentes disponíveis. Informe seu CPF para que possamos enviar a segunda via do boleto automaticamente.”

***

### ✅ Sugestões para Melhor Uso

* Use **prompts curtos e objetivos**, evitando instruções confusas.
* Configure **palavras-chave variadas** (ex: boleto, fatura, conta) para melhorar a identificação.
* Sempre defina uma **fila de fallback** para evitar que o cliente fique sem resposta.
* Ajuste o **intervalo entre mensagens** para evitar que a IA responda mensagens curtas isoladamente (“oi”, “bom dia”).
* Teste diferentes **temperaturas** para encontrar o equilíbrio entre objetividade e naturalidade.

***

### 🚀 Como Usar a Recepção Inteligente

1. **Cadastre a integração**
   * Vá até o menu de **Integrações** e crie uma nova configuração de **Recepção Inteligente**.
   * Defina o provedor de IA (Groq ou ChatGPT), informe a **API KEY** e configure o **prompt** e demais parâmetros.
2. **Associe a integração a uma fila**
   * No menu de **Filas**, escolha ou crie a fila desejada (ex: recepcao).
   * Defina que essa fila utilizará a integração da **Recepção Inteligente** cadastrada.
3. **Vincule a fila ao canal**
   * No menu de **Canais**, selecione o canal de atendimento (ex: WhatsApp, Instagram, Facebook).
   * Configure para que as **novas conversas recebidas** nesse canal sejam direcionadas para a fila que contém a integração.
4. **Pronto!**
   * A partir de agora, sempre que chegar uma **nova mensagem nesse canal**, o primeiro atendimento será feito automaticamente pela **Recepção Inteligente**.
   * A IA responderá o cliente conforme o prompt definido, podendo **finalizar o atendimento** ou **transferir para a fila/setor correto**.

***

📌 **Exemplo prático de fluxo**:

* Cliente envia mensagem pelo WhatsApp: _“Quero a segunda via do boleto”_.
* O canal está vinculado à fila **Financeiro**, que usa a integração da **Recepção Inteligente**.
* A IA identifica a palavra-chave “boleto” e automaticamente:
  * transfere para a fila **Financeiro** se houver atendente online, ou
  * envia a mensagem: _“Informe seu CPF para gerar a segunda via do boleto”_ se não houver atendente disponível.

***
