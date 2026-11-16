---
description: >-
  Responder comentários do Instagram automaticamente e enviar Direct para quem
  comentou — começando pelo básico, sem IA.
---

# Automação de Comentários e Direct do Instagram

> **Em palavras simples:** quando alguém comenta em uma publicação, o Whazing pode **responder o comentário** sozinho e **mandar um Direct** para essa pessoa. Você pode usar uma **mensagem pronta** (o jeito mais simples) ou deixar uma **IA** escrever a resposta. Serve para quem atende redes sociais; não tem custo extra no Whazing.

> ✅ Funciona com: **Hub MultiAPIWA**, **Hub NotificaMe** e **Conexão direta Meta** (aplicativo com permissões aprovadas).
>
> ❌ **Não funciona com ConnectionHub** — ele faz somente Direct. Veja [O que cada hub faz](../../canais-disponiveis/recursos-por-hub.md).

***

## 🧭 Por onde começar

| Se você quer... | Vá para |
| --- | --- |
| Uma resposta **igual para todos**, sem complicação | [Parte 1 — Básico](#parte-1--básico-mensagem-pronta-sem-ia) |
| Respostas **diferentes para cada comentário**, escritas por IA | [Parte 2 — Avançado](#parte-2--avançado-respostas-com-ia) |

***

## 📍 Onde encontrar

**Automação e Integrações → Automação de Comentários e Direct**

***

## Passo 1 (para todos): escolher o canal

Ao abrir a página, escolha qual **canal do Instagram** será usado (ex.: `instagram (Instagram)`). A automação vale para os comentários e mensagens daquele canal.

***

## ⚙️ Fechar o atendimento automaticamente

A opção **"Fechar automaticamente tickets de comentários"** encerra o ticket logo depois de responder.

| Opção | O que acontece |
| --- | --- |
| **Ligada** | Comentário → resposta automática → ticket encerrado |
| **Desligada** | O ticket fica aberto para um atendente continuar |

> 💡 Se a sua equipe gosta de acompanhar os comentários um por um, deixe **desligada**.

***

# Parte 1 — Básico (mensagem pronta, sem IA)

Este é o caminho recomendado para começar: simples, previsível e sem custo de IA.

## 1. Ligar a resposta ao comentário

Ative **"Ativar resposta automática ao comentário"**.

## 2. Escolher "Mensagem fixa"

Na forma de responder, selecione **📝 Mensagem fixa** e escreva o texto.

> "Obrigado pelo seu comentário! 😊 Enviamos mais informações pelo Direct."

Todos recebem exatamente essa mensagem.

## 3. Ligar o Direct automático (opcional)

Ative **"Ativar mensagem automática via Direct"**, escolha **📝 Mensagem fixa** e escreva o texto.

> "Olá! 😊 Vi que você comentou na nossa publicação. Posso te ajudar com mais informações?"

## 4. Salvar e testar

Peça para alguém comentar em uma publicação e confira:

* o comentário recebeu a resposta pública;
* a pessoa recebeu o Direct;
* o ticket foi fechado ou permaneceu aberto, conforme a sua escolha.

> ⏰ **Regra das 24 horas:** o Direct só sai se a pessoa interagiu com você nas últimas 24 horas. O comentário abre essa janela.

***

# Parte 2 — Avançado (respostas com IA)

Use esta parte quando quiser respostas diferentes para cada comentário.

## 1. Escolha de onde vem a IA

| Opção | O que é |
| --- | --- |
| **IA compartilhada do sistema** | Já vem pronta, conforme o seu plano |
| **Utilizar minha própria API** | Você usa a sua conta de IA (OpenAI, Groq, Gemini, DeepSeek e outras) |
| **Personalizado (OpenAI Compatible)** | Qualquer serviço que fale "a mesma língua" da OpenAI: OpenRouter, Together AI, Mistral, Ollama, LM Studio, vLLM etc. |

Se o plano não incluir a IA compartilhada, o sistema avisa e oferece as outras opções.

## 2. Configurações da IA (só para API própria)

| Campo | Para que serve |
| --- | --- |
| **Base URL** | Endereço do serviço de IA (ex.: `http://localhost:20128/v1`) |
| **API Key** | Chave fornecida pelo seu provedor |
| **Modelo** | Qual modelo será usado |
| **Máximo de tokens na resposta** | Tamanho máximo do texto (ex.: `300`) |
| **Temperatura** | Quanto a resposta pode variar (ex.: `0,1` = mais previsível) |

## 3. Resposta ao comentário com IA

1. Ative **"Ativar resposta automática ao comentário"**.
2. Em vez de mensagem fixa, escolha **🤖 Inteligência Artificial**.
3. (Opcional) Ative **"Usar base de conhecimento"** e escolha as bases — ex.: *Manual*, *Mentoria*, *PC Gamer*.
4. Ajuste a **similaridade mínima** (padrão recomendado: `0,7`).
5. Escreva um **prompt personalizado**.

Exemplo de prompt:

> Você responde publicamente comentários de uma publicação do Instagram. Seja breve (1–2 frases), educado e simpático. Não use saudações longas nem se despeça.

## 4. Direct com IA

Repita a lógica no bloco do Direct:

1. Ative **"Ativar mensagem automática via Direct"** e escolha **🤖 Inteligência Artificial**.
2. Ative a **base de conhecimento**, se quiser (produtos, preços, horários, formas de pagamento, políticas).
3. Escreva o prompt do Direct.

Exemplo:

> Você envia a primeira mensagem privada (Direct) para alguém que acabou de comentar em uma publicação. Seja breve, acolhedor e convide a pessoa a continuar a conversa por aqui.

***

## 🔄 Como funciona na prática

```text
Pessoa vê a publicação
      ↓
Pessoa comenta: "Quero saber mais!"
      ↓
O sistema identifica o comentário
      ↓
Responde publicamente: "Claro! 😊 Confira seu Direct."
      ↓
Envia o Direct: "Olá! Vi que você comentou. Posso ajudar?"
      ↓
A conversa continua no atendimento
```

***

## ⭐ Configuração recomendada para começar

| Configuração | Sugestão |
| --- | --- |
| Canal | Seu Instagram |
| Encerramento automático | Conforme a sua operação |
| Resposta ao comentário | **Mensagem fixa** (troque para IA depois) |
| Base de conhecimento | Ativada, se usar IA |
| Similaridade | 0,7 |
| Prompt personalizado | Sim, se usar IA |
| Mensagem via Direct | Ativada |
| Direct | **Mensagem fixa** (troque para IA depois) |

***

## ⚠️ Cuidados com IA

* Cadastre informações **corretas** na Base de Conhecimento;
* Peça no prompt para a IA **não inventar** preços e condições;
* Teste antes de divulgar a publicação;
* Confira as primeiras respostas geradas.

***

## 🆘 Problemas comuns

### A tela não mostra meu Instagram

O canal não está conectado por um provedor compatível (veja a tabela no início) ou o tipo não está liberado no plano.

### A automação não responde

1. Confira se **"Ativar resposta automática ao comentário"** está ligada e salva.
2. Verifique se escolheu **mensagem fixa** com texto preenchido ou **IA** configurada.
3. Teste com um comentário real de outra conta.

### O comentário recebeu resposta, mas o Direct não chegou

A janela de 24 horas pode ter fechado, ou a conta da pessoa tem restrição de mensagens.

### A IA responde algo errado

Revise a Base de Conhecimento, diminua a **temperatura** e reforce no prompt que a IA deve usar **somente** as informações cadastradas.

### Erro de chave/limite na IA

Confira **Base URL**, **API Key**, **modelo** e se a conta do provedor tem créditos.

***

## ❓ Perguntas frequentes

#### Preciso de inteligência artificial?

**Não.** A **mensagem fixa** resolve a maioria dos casos e é mais fácil de controlar.

#### Posso responder o comentário e enviar o Direct ao mesmo tempo?

Sim — as duas automações podem ficar ligadas juntas.

#### Posso usar a Base de Conhecimento com mensagem fixa?

Não. A base só é usada quando a resposta é gerada por IA.

#### Funciona com comentários antigos?

O sistema acompanha os comentários a partir da conexão do canal.

***

## 📚 Veja também

* [Responder comentários do Instagram (manual)](../../canais-disponiveis/hub-instagram-facebook-tiktok/facebook-e-instagram-via-hub/responder-comentarios-instagram.md)
* [O que cada hub faz (comparativo)](../../canais-disponiveis/recursos-por-hub.md)
* [Agendamento de Publicações no Instagram](agendamento-de-publicacoes-no-instagram.md)
* [Resposta Automática a Comentários do TikTok](resposta-automatica-a-comentarios-do-tiktok.md)
* [Base de Conhecimento](../../integracoes/inteligencia-artificial/recepcao-inteligente/base-de-conhecimento.md)
