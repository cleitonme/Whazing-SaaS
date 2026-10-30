# Configurando Provedor de IA Personalizado (OpenAI Compatível)

A **Recepção Inteligente** permite integrar diferentes provedores de IA usando o padrão compatível com a API da OpenAI.

Isso significa que você não precisa usar apenas os disponíveis no sistema  — é possível utilizar:

* Provedores externos (ex: OpenRouter, etc.)
* Ou até mesmo rodar sua própria IA localmente (ex: Ollama)

***

### ⚠️ Importante (IA local)

Caso você opte por rodar sua própria IA (como com o Ollama), é altamente recomendado:

* Utilizar um **servidor dedicado**
* Ter uma **GPU** (placa de vídeo) para desempenho aceitável
* Não rodar no mesmo servidor do sistema principal (para evitar lentidão)

***

## 🌐 Exemplo prático com OpenRouter

Neste tutorial, vamos usar o OpenRouter como exemplo, pois ele já é compatível com o padrão OpenAI.

***

### 🔎 Passo 1 — Verificar compatibilidade com OpenAI

A primeira coisa é confirmar que o provedor é compatível com OpenAI.

No caso do OpenRouter, isso está documentado aqui:

👉 [https://openrouter.ai/docs/guides/community/openai-sdk](https://openrouter.ai/docs/guides/community/openai-sdk)

✔️ O ponto mais importante é identificar o:

* **Base URL (URL base da API)**

<figure><img src="../../../.gitbook/assets/sdkopenai.png" alt=""><figcaption></figcaption></figure>

No OpenRouter:

```
https://openrouter.ai/api/v1
```

***

### 🧠 Passo 2 — Escolher o modelo (Model ID)

Agora você precisa escolher qual modelo de IA será utilizado.

Lista de modelos:

👉 [https://openrouter.ai/models](https://openrouter.ai/models)

Exemplos de modelos:

* `openai/gpt-4o`
* `anthropic/claude-3-haiku`
* `mistralai/mistral-7b`

✔️ O valor que você precisa copiar é o **Model ID**

<figure><img src="../../../.gitbook/assets/modelocustom.png" alt=""><figcaption></figcaption></figure>

***

### 🔑 Passo 3 — Criar a API Key

Você precisa de uma chave de acesso (API Key).

Crie aqui:

👉 [https://openrouter.ai/workspaces/default/keys](https://openrouter.ai/workspaces/default/keys)

***

### ⚙️ Passo 4 — Configurar no Whazing

Na integração (**Automação e Integrações → IA e Integrações**), escolha a opção:

**Utilizar minha própria API**

No card **Utilizar minha própria API** da aba **Geral**, preencha os campos do provedor:

#### Campos (nesta ordem):

* **Serviço de IA** — escolha o provedor pronto (OpenAI, Groq, Gemini, etc.) ou **Custom (URL própria)** para usar qualquer serviço compatível com o formato OpenAI

* **URL Base da API** — aparece quando o Serviço de IA é **Custom (URL própria)**; o campo avisa que deve ser *compatível com formato OpenAI*

```
https://openrouter.ai/api/v1
```

* **Modelo**

```
(ex: openai/gpt-4o)
```

* **API Key**

```
(sua chave gerada no OpenRouter)
```

<figure><img src="../../../.gitbook/assets/whazingcustomurl.png" alt=""><figcaption></figcaption></figure>

***

#### 🔌 Testar conexão

Depois de preencher, clique no botão **Testar conexão**:

* ✅ **Conectado** — tudo certo, o Whazing está se comunicando com o seu provedor.
* ❌ **Erro na conexão** — revise a API Key, o modelo e a URL base.

***### ✅ Resultado

Após configurar corretamente, a Recepção Inteligente já estará utilizando o provedor de IA escolhido.

*** 

### 💡 Dicas Extras

* Se der erro:
  * Verifique se a **API Key está correta**
  * Confirme se o **modelo existe**
  * Confira se a **URL base está exata (sem /extra)**
* Nem todos os modelos têm o mesmo custo ou velocidade — teste opções diferentes

**Por que o erro "400 status code (no body)" ocorre?**

Esse erro acontece quando o provedor de IA rejeita a solicitação, geralmente devido a:

1. **Limite de taxa (rate limit)** — A maioria dos provedores limita o número de requisições por minuto/hora. Quando excedido, retornam 400 sem body.
2. **Concurrent requests excessivas** — Muitas requisições simultâneas podem ser bloqueadas.
3. **Modelo esgotado ou descontinuado** — Alguns modelos ficam indisponíveis temporariamente.

**Soluções:**

* **Aguardar e tentar novamente** — o sistema já tenta 3 vezes antes de transferir para a fila de fallback.
* **Reduzir a frequência de chamadas** — configure um intervalo mínimo entre mensagens na aba Comportamento para evitar excessos.
* **Usar fila de fallback** — configure uma fila de reserva para quando a IA ficar indisponível.

---

### 🔄 Melhores Provedores para Recepção Inteligente

O sistema é compatível com qualquer provedor API OpenAI compatível. No entanto, recomendamos:

| Provedor | Modelo sugerido | Pontos fortes | Limitações |
|----------|-----------------|--------------|------------|
| **OpenAI (ChatGPT)** | `gpt-4o`, `gpt-4.1-mini` | Melhor qualidade, menor latência, fewer rate limit issues para uso moderado | Custo mais alto por token |
| **Anthropic (Claude)** | `claude-4-haiku`, `claude-4-sonnet` | Ótimo equilíbrio custo/performance, boa capacidade de follow instructions, limites generosos | Latência ligeiramente maior que GPT-4o |

⚠️ **Não recomendamos Gemini na Recepção Inteligente** devido a muitas limitações e baixa qualidade de resposta em cenários de atendimento ao cliente. Os provedores acima oferecem muito melhor desempenho para esse caso de uso.

**Configuração recomendada:**

* **Modelo:** `gpt-4o` ou `claude-4-sonnet` para melhor qualidade
* **Modelo econômico:** `gpt-4.1-mini` ou `claude-4-haiku` para uso intensivo
* **Temperatura:** 0.1 a 0.3 para respostas mais objetivas e consistentes
* **Máximo de tokens:** 200 a 500 para respostas curtas e objetivas (ideal para WhatsApp)

