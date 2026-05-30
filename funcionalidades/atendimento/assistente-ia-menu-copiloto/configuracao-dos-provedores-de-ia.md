# Configuração dos Provedores de IA

### Provedores Disponíveis

#### Groq

Opção recomendada para quem busca alta velocidade e baixo custo.

Obter chave de API:

[https://console.groq.com/keys](https://console.groq.com/keys)

Modelos recomendados:

* llama-3.3-70b-versatile
* llama-3.1-8b-instant
* meta-llama/llama-4-scout-17b-16e-instruct

#### OpenAI (ChatGPT)

Obter chave de API:

[https://platform.openai.com/settings/organization/api-keys](https://platform.openai.com/settings/organization/api-keys)

Modelos recomendados:

* gpt-4.1-mini
* gpt-4.1
* gpt-4o-mini

#### Google Gemini

Obter chave de API:

[https://aistudio.google.com/api-keys](https://aistudio.google.com/api-keys)

Modelos recomendados:

* gemini-2.5-flash
* gemini-2.5-pro

Importante: além dos recursos de IA, a chave Gemini também é necessária para habilitar a busca semântica da Base de Conhecimento.

### Provedor Personalizado (OpenAI Compatible)

Também é possível utilizar provedores compatíveis com a API OpenAI.

Exemplos:

* OpenRouter
* DeepSeek
* Together AI
* Mistral AI
* Ollama
* LM Studio
* vLLM
* Outros provedores compatíveis

Para utilizar:

1. Selecione "Personalizado (OpenAI Compatible)".
2. Informe a Base URL do provedor.
3. Informe sua chave de API.
4. Informe o modelo desejado.

### Temperatura

Controla o nível de criatividade das respostas.

Recomendação:

0.1

Valores baixos tornam as respostas mais consistentes e previsíveis, reduzindo a chance da IA ignorar instruções dos prompts configurados.

### Máximo de Tokens

Define o tamanho máximo da resposta gerada pela IA.

Recomendação:

1000

Valores maiores permitem respostas mais extensas, porém aumentam o consumo de processamento e custos da API.
