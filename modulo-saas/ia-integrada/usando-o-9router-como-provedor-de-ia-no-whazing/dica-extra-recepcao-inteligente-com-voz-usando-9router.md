# 🔊 Dica Extra — Recepção Inteligente com Voz usando 9Router

> **Disponível a partir da versão 3.0**

Você pode utilizar o **9Router** também para fornecer **respostas de voz na Recepção Inteligente do Whazing**, sem precisar contratar diretamente um serviço de Text-to-Speech para essa finalidade.

O 9Router possui uma área de **Provedores de Mídia → Text To Speech**, onde podem estar disponíveis provedores como:

* **Edge TTS**
* **Google TTS**

Esses provedores podem ser utilizados sem cadastro diretamente no serviço de TTS, dependendo da disponibilidade e das regras atuais do 9Router/provedor.

A ideia é:

**Recepção Inteligente → 9Router → Text-to-Speech → Áudio → Cliente**

***

## 🎯 O que vamos configurar?

Neste tutorial vamos conectar:

**Whazing**

⬇️

**Recepção Inteligente**

⬇️

**9Router**

⬇️

**Edge TTS ou Google TTS**

⬇️

**Áudio enviado ao cliente**

***

## 🧩 1. Verifique o Text To Speech no 9Router

Acesse o painel do 9Router.

Depois procure:

**Provedores de mídia → Text To Speech**

Nessa área ficam os provedores disponíveis para geração de voz.

Exemplos:

* Edge TTS
* Google TTS

***

## 🔊 2. Escolha o provedor de voz

Você pode utilizar, por exemplo:

#### Edge TTS

Algumas vozes disponíveis podem utilizar modelos como:

```
edge-tts/pt-BR-ThalitaMultilingualNeural
```

```
edge-tts/pt-BR-AntonioNeural
```

```
edge-tts/pt-BR-FranciscaNeural
```

#### Google TTS

Exemplo:

```
google-tts/pt
```

> 💡 A disponibilidade de vozes e modelos pode mudar. Utilize os nomes apresentados pelo seu próprio painel do 9Router.

***

## 🔎 3. Como descobrir o nome correto do modelo

Não é necessário decorar o nome do modelo.

No 9Router, acesse:

**Provedores de mídia → Text To Speech**

Depois:

1. Abra **Edge TTS** ou **Google TTS**.
2. Selecione o idioma desejado.
3. Procure a área de exemplo/requisição.
4. Localize o campo **model**.

O próprio exemplo de requisição mostrará o nome que deve ser utilizado no Whazing.

***

## 🤖 4. Configurar a Recepção Inteligente no Whazing

No Whazing acesse:

**Automação e Integrações → IA e Integrações**

Localize a sua **Recepção Inteligente**.

Clique no botão:

✏️ **Editar**

***

## 🔊 5. Acesse a aba Voz

Dentro da configuração da Recepção Inteligente, abra:

**Voz**

É nessa área que vamos configurar o Text-to-Speech.

***

## 🔌 6. Selecionar OpenAI Compatible

No tipo de provedor de voz, selecione:

**OpenAI Compatible**

Depois selecione o:

**Preset 9Router**

O preset facilita a configuração da integração.

***

## 🌐 7. Configurar a URL Base

Agora informe o endereço do seu 9Router.

Se o Whazing e o 9Router estiverem no mesmo servidor e a integração puder acessar diretamente a porta:

```
http://localhost:20128
```

Você também pode utilizar o endereço público:

```
https://9router.seusite.com.br
```

> ⚠️ **Importante:** nesse campo coloque somente a URL base.\
> **Não adicione `/v1`, `/audio/...` ou qualquer outro caminho depois do domínio.**

#### Exemplo correto:

```
https://9router.seusite.com.br
```

#### Evite colocar:

```
https://9router.seusite.com.br/v1
```

quando o campo do Whazing estiver solicitando a **URL Base** do preset 9Router.

***

## 🔑 8. API Key

No campo **API Key**, utilize a:

**Key do endpoint do 9Router**

Copie a chave disponibilizada pelo endpoint no painel do 9Router.

Cole no campo correspondente no Whazing.

***

## 🧠 9. Configurar o modelo

Agora informe o modelo de Text-to-Speech.

Exemplos:

#### Edge TTS — Thalita

```
edge-tts/pt-BR-ThalitaMultilingualNeural
```

#### Edge TTS — Antonio

```
edge-tts/pt-BR-AntonioNeural
```

#### Edge TTS — Francisca

```
edge-tts/pt-BR-FranciscaNeural
```

#### Google TTS

```
google-tts/pt
```

> 💡 Esses são exemplos. O ideal é sempre copiar o nome diretamente do exemplo de requisição exibido no painel do 9Router.

***

## 🗣️ 10. Exemplo completo

Imagine que você escolheu:

**Edge TTS**

Idioma:

**Português do Brasil**

Voz:

**Thalita**

A configuração ficará semelhante a:

| Campo    | Valor                                      |
| -------- | ------------------------------------------ |
| Tipo     | OpenAI Compatible                          |
| Preset   | 9Router                                    |
| URL Base | `https://9router.seusite.com.br`           |
| API Key  | Key do endpoint                            |
| Modelo   | `edge-tts/pt-BR-ThalitaMultilingualNeural` |

Depois salve a configuração.

***

## 🔄 11. Como funciona

Depois de configurado, o fluxo será:

```
Cliente envia mensagem
        ↓
Recepção Inteligente
        ↓
IA gera a resposta
        ↓
Whazing envia texto para o 9Router
        ↓
9Router utiliza Edge TTS / Google TTS
        ↓
Áudio é gerado
        ↓
Whazing recebe o áudio
        ↓
Cliente recebe a resposta em áudio
```

Assim, a Recepção Inteligente pode responder não apenas com texto, mas também com **voz**.

***

## 🎙️ 12. Testando

Depois de salvar:

1. Abra um atendimento de teste.
2. Envie uma mensagem para a Recepção Inteligente.
3. Aguarde a resposta.
4. Verifique se o sistema gera o áudio.
5. Confira se o áudio é enviado corretamente ao cliente.

Se funcionar, você deverá receber uma resposta em formato de áudio.

***

## 🛠️ 13. Se não gerar o áudio

Confira primeiro a URL.

Se estiver usando domínio público:

```
https://9router.seusite.com.br
```

Se estiver usando acesso local:

```
http://localhost:20128
```

Depois verifique:

#### 1. 9Router está funcionando?

```bash
docker ps
```

#### 2. Verifique os logs

```bash
docker logs --tail 100 9router
```

#### 3. Confira a API Key

Confirme se a **Key do endpoint** foi copiada corretamente.

#### 4. Confira o modelo

O nome precisa ser exatamente o modelo apresentado pelo 9Router.

Por exemplo:

```
edge-tts/pt-BR-ThalitaMultilingualNeural
```

#### 5. Confira a URL Base

Não acrescente caminhos adicionais quando o preset estiver esperando somente a URL base.

***

## 💡 Dica: escolha a voz no próprio 9Router

Uma das formas mais fáceis de configurar é:

**9Router**

→ **Provedores de mídia**

→ **Text To Speech**

→ **Edge TTS**

→ Escolha o idioma

→ Veja o exemplo de requisição

→ Copie o valor de `model`

→ Cole no Whazing.

Dessa forma você evita erros de digitação.

***

## ✅ Resultado

Com essa configuração você consegue utilizar o 9Router como uma camada de Text-to-Speech para a Recepção Inteligente.

A estrutura fica:

```
                    WHAZING
                       │
                       ▼
             Recepção Inteligente
                       │
                       ▼
                    9Router
                       │
              ┌────────┴────────┐
              ▼                 ▼
          Edge TTS          Google TTS
              │                 │
              └────────┬────────┘
                       ▼
                    Áudio
                       │
                       ▼
                    Cliente
```
