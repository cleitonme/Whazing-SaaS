---
description: >-
  Responder comentários do Instagram automaticamente, enviar Direct, usar
  palavras-chave e definir automações diferentes por publicação.
---

# Automação de Comentários e Direct do Instagram

> **Em palavras simples:** quando alguém comenta em uma publicação, o Whazing pode **responder o comentário** sozinho e **mandar um Direct** para essa pessoa. Você pode usar uma **mensagem pronta**, deixar uma **IA** escrever a resposta ou, no Direct, escolher a mensagem por **palavra-chave**. Também dá para definir uma automação **diferente para cada publicação**. Serve para quem atende redes sociais.

> ✅ Funciona com: **Hub MultiAPIWA**, **Hub NotificaMe** e **Conexão direta Meta** (aplicativo com permissões aprovadas).
>
> ❌ **Não funciona com ConnectionHub** — ele faz somente Direct. Veja [O que cada hub faz](../../canais-disponiveis/hubs/recursos-por-hub.md).

***

## 🧭 Por onde começar

| Se você quer... | Vá para |
| --- | --- |
| Uma resposta **igual para todos**, sem complicação | [Parte 1 — Básico](#parte-1--básico-mensagem-pronta-sem-ia) |
| Respostas **diferentes para cada comentário**, escritas por IA | [Parte 2 — Avançado](#parte-2--avançado-respostas-com-ia) |
| Mandar no Direct uma mensagem **conforme a palavra usada no comentário** | [Palavras-chave no Direct](#-palavras-chave-no-direct) |
| Uma automação **diferente para uma publicação específica** | [Automação por publicação](#-automação-por-publicação) |

***

## 📍 Onde encontrar

**Automação e Integrações → Automação de Comentários e Direct**

***

## Passo 1 (para todos): escolher o canal

Ao abrir a página, o sistema usa os canais do Instagram compatíveis com esta automação.

* Se houver **apenas um** perfil compatível, ele já vem selecionado e aparece com a indicação **"Único perfil do Instagram conectado"**.
* Se houver **mais de um**, escolha no campo **Canal do Instagram**.

A automação vale para os comentários e mensagens daquele canal.

> 💡 Se nenhum canal aparecer, a tela mostra **"Nenhum canal compatível foi encontrado."** Confira se o Instagram está conectado por um provedor compatível (tabela no início) e se o canal está liberado no plano.

***

## ⚙️ Fechar o atendimento automaticamente

A opção **"Fechar automaticamente tickets de comentários"** encerra o ticket logo depois de responder.

Ela fica dentro de **"Opções avançadas"**, no fim da página.

| Opção | O que acontece |
| --- | --- |
| **Ligada** | Comentário → resposta automática → ticket encerrado |
| **Desligada** | O ticket fica aberto para um atendente continuar |

> 💡 Se a sua equipe gosta de acompanhar os comentários um por um, deixe **desligada**.

***

# Parte 1 — Básico (mensagem pronta, sem IA)

Este é o caminho recomendado para começar: simples, previsível e sem custo de IA.

## 1. Ligar a resposta ao comentário

Na seção **"2. Responder no próprio comentário"**, ative **"Ativar resposta automática ao comentário"**.

## 2. Escolher "Mensagem fixa"

Na pergunta **"Como deseja responder?"**, selecione **📝 Mensagem fixa** e escreva o texto no campo **"Mensagem de resposta ao comentário"**.

> "Obrigado pelo seu comentário! 😊 Enviamos mais informações pelo Direct."

Todos recebem exatamente essa mensagem.

## 3. Ligar o Direct automático (opcional)

Na seção **"3. Enviar uma mensagem no Direct"**, ative **"Ativar mensagem automática via Direct"**, escolha **📝 Mensagem fixa** e escreva o texto.

> "Olá! 😊 Vi que você comentou na nossa publicação. Posso te ajudar com mais informações?"

## 4. Salvar e testar

Clique em **"Salvar Configuração"**. O botão fica desabilitado quando não há alterações para salvar.

Peça para alguém comentar em uma publicação e confira:

* o comentário recebeu a resposta pública;
* a pessoa recebeu o Direct;
* o ticket foi fechado ou permaneceu aberto, conforme a sua escolha.

> ⏰ **Regra do Direct:** o Instagram permite **uma única mensagem privada por comentário, até 7 dias depois dele**. Para enviar outras mensagens, a pessoa precisa responder — é a resposta dela que abre a **janela de 24 horas**.

> 💡 **Vários canais?** Se a empresa tem mais de um canal compatível, o botão **"Copiar para outros canais"** aplica a mesma configuração a outros perfis. Veja [Copiar para outros canais](#-copiar-para-outros-canais).

***

# Parte 2 — Avançado (respostas com IA)

Use esta parte quando quiser respostas diferentes para cada comentário.

## 1. Escolha de onde vem a IA

O seletor de provedor aparece quando a **resposta ao comentário** ou o **Direct** está no modo **Inteligência Artificial**.

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

Os ajustes de prompt, base de conhecimento e similaridade ficam em **"Ajustes avançados da inteligência artificial"**, uma seção que abre dentro do bloco de resposta.

## 3. Resposta ao comentário com IA

1. Ative **"Ativar resposta automática ao comentário"**.
2. Em vez de mensagem fixa, escolha **🤖 Inteligência Artificial**.
3. (Opcional) Abra **"Ajustes avançados da inteligência artificial"**, ative **"Usar base de conhecimento"** e escolha as bases — ex.: *Manual*, *Mentoria*, *PC Gamer*.
4. Ajuste a **similaridade mínima** (padrão recomendado: `0,7`).
5. Escreva um **prompt personalizado**.

> 💡 Na resposta ao comentário existem apenas dois modos: **Mensagem fixa** e **Inteligência Artificial**. Palavra-chave é exclusiva do Direct.

Exemplo de prompt:

> Você responde publicamente comentários de uma publicação do Instagram. Seja breve (1–2 frases), educado e simpático. Não use saudações longas nem se despeça.

## 4. Direct com IA

Repita a lógica no bloco do Direct:

1. Ative **"Ativar mensagem automática via Direct"** e escolha **🤖 Inteligência Artificial**.
2. Abra os ajustes avançados e ative a **base de conhecimento**, se quiser (produtos, preços, horários, formas de pagamento, políticas).
3. Escreva o prompt do Direct.

> 💡 Cada bloco tem seus próprios **Ajustes avançados da inteligência artificial**: o prompt e a base de conhecimento do comentário são separados dos do Direct. A IA também recebe a legenda da publicação para entender o contexto.

Exemplo:

> Você envia a primeira mensagem privada (Direct) para alguém que acabou de comentar em uma publicação. Seja breve, acolhedor e convide a pessoa a continuar a conversa por aqui.

***

## 🔑 Palavras-chave no Direct

Este modo só existe no **Direct**. A resposta pública ao comentário continua com **Mensagem fixa** ou **Inteligência Artificial**.

A ideia é simples: cada regra tem uma ou mais palavras-chave e uma mensagem. Quando o comentário contém uma dessas palavras, o sistema envia a mensagem daquela regra.

> ⚠️ **Só uma mensagem é enviada.** A lista é lida de cima para baixo e vale **a primeira regra que combinar**. As regras de baixo não são usadas naquele comentário.

### Como configurar

1. Na seção **"3. Enviar uma mensagem no Direct"**, ative **"Ativar mensagem automática via Direct"**.
2. Em **"Como deseja responder?"**, escolha **🔑 Palavra-chave**.
3. Clique em **"Adicionar regra"**.
4. No campo **"Palavras-chave"**, digite uma palavra e pressione **Enter**. Repita para incluir outras palavras na mesma regra.
   * A própria tela informa: **não diferencia maiúsculas, acentos nem espaços extras**.
5. No campo **"Mensagem enviada por Direct"**, escreva o que será enviado quando aquela regra combinar.
6. Use as setas **para cima** e **para baixo** para mudar a prioridade da regra e a lixeira para removê-la.
7. Escolha o que fazer **"Quando nenhuma palavra-chave corresponder"**.
8. Clique em **"Salvar Configuração"**.

### Quando nenhuma palavra-chave corresponder

| Opção | O que acontece |
| --- | --- |
| **Não enviar nada** | O comentário não recebe Direct |
| **Enviar mensagem padrão** | Envia o texto do campo **"Mensagem padrão (usada quando nenhuma palavra-chave corresponder)"** |
| **Responder com Inteligência Artificial** | A IA escreve a mensagem usando o prompt e a base de conhecimento configurados |

> ⚠️ Para salvar no modo palavra-chave, é preciso ter **pelo menos uma regra com palavra-chave e mensagem preenchidas**. Se escolher **"Enviar mensagem padrão"**, o campo da mensagem padrão também precisa estar preenchido.

### Exemplo prático

| Ordem | Palavras-chave | Mensagem |
| --- | --- | --- |
| 1 | `preço`, `valor`, `quanto custa` | "Olá! O valor e as formas de pagamento estão aqui: [seu link]" |
| 2 | `curso`, `aula` | "Olá! Seguem as informações do curso: [seu link]" |
| 3 | `endereço`, `onde fica` | "Olá! Nosso endereço é: [seu endereço]" |

Se o comentário disser "qual o valor do curso?", a **primeira regra** combina e só ela responde.

> 💡 Use palavras que as pessoas realmente escrevem nos comentários. Uma regra com várias palavras aumenta as chances de combinar, sem precisar criar uma regra para cada variação.

***

## 🖼️ Automação por publicação

Use esta seção quando **cada publicação precisar de uma resposta diferente** — por exemplo, enviar no Direct o link de compra do produto daquela publicação.

> 📌 **Onde aparece:** somente em canais de **Conexão direta Meta** (o canal do tipo *Instagram (direto)*). Nos hubs, esta seção não é exibida.

Publicação **sem configuração** aqui continua usando a automação geral configurada acima.

### Como adicionar uma publicação

1. Clique em **"Adicionar publicação"**.
2. Escolha a publicação no campo **"Publicação"**:
   * a lista mostra as publicações da conta e permite **buscar pela legenda ou pelo código**;
   * publicações que já têm configuração não aparecem na lista.
3. Se a lista não estiver disponível, a tela avisa **"Não foi possível listar as publicações desta conta"** e você pode informar o **"Código da publicação"**.
   * O código deve ter **somente números**. É o código que a Meta envia junto do comentário.
4. (Opcional) Preencha **"Nome para identificar"**, com até **120 caracteres**. Esse nome aparece só na lista, para você reconhecer a publicação.
5. Defina o que fazer em **"Resposta pública ao comentário nesta publicação"**.
6. Defina o que fazer em **"Mensagem no Direct nesta publicação"**.
7. Clique em **"Salvar"** no diálogo.
8. Clique em **"Salvar Configuração"** na página para gravar de verdade.

> ⚠️ **O diálogo não salva sozinho.** Ele apenas adiciona ou edita a publicação na lista. Se você fechar a página sem clicar em **"Salvar Configuração"**, a alteração é perdida.

### Modos disponíveis em cada bloco

| Modo | Comentário | Direct |
| --- | --- | --- |
| **Herdar da configuração geral** | ✅ | ✅ |
| **Mensagem fixa** | ✅ | ✅ |
| **Inteligência Artificial** | ✅ | ✅ |
| **Palavra-chave** | ❌ | ✅ |
| **Não responder** | ✅ | ✅ |

Cada bloco é independente: você pode, por exemplo, manter o comentário herdando a configuração geral e trocar apenas o Direct daquela publicação.

### O que cada modo faz

* **Herdar da configuração geral** — usa exatamente o que está configurado nas seções 2 e 3. A tela mostra qual é o modo geral atual.
* **Mensagem fixa** — mostra um campo de texto para a mensagem daquela publicação.
* **Inteligência Artificial** — não tem campo próprio: usa o prompt e a base de conhecimento configurados na seção geral (no bloco correspondente), mais a **legenda da publicação**.
* **Palavra-chave** (só Direct) — abre o mesmo editor de regras, prioridade e fallback descrito acima.
* **Não responder** — naquela publicação o sistema não responde, mesmo com a automação geral ligada.

### Regras e validações

* Pelo menos **um dos dois blocos** precisa ser diferente de **"Herdar da configuração geral"**. Se os dois ficarem herdando, a tela avisa: **"Mude ao menos um dos dois modos"**.
* **Mensagem fixa** não pode ficar vazia.
* O **código da publicação** é obrigatório e deve ter somente números.
* Uma publicação **já configurada** não pode ser adicionada de novo. Para mudar, edite a configuração existente.
* No modo **Palavra-chave** por publicação, se não houver nenhuma regra utilizável, escolha um fallback diferente de **"Não enviar nada"**; se escolher **"Enviar mensagem padrão"**, ela precisa estar preenchida.

### Editar e remover

Na lista de publicações configuradas, cada item mostra:

* a miniatura (quando disponível), o **nome** e o **código** da publicação;
* o link **"Ver publicação"**, quando houver;
* os modos atuais, nos selos **Comentário** e **Direct**;
* os botões de **editar** (lápis) e **remover** (lixeira).

Ao editar, a publicação não pode ser trocada — só o nome e os modos. Ao remover, a publicação volta a usar a automação geral **depois que você clicar em "Salvar Configuração"**.

> 💡 A cópia para outros canais **não** leva as automações por publicação. Veja o próximo tópico.

***

## 📋 Copiar para outros canais

O botão **"Copiar para outros canais"** aparece ao lado de **"Salvar Configuração"** e só habilita quando existe **mais de um canal compatível**.

Na janela, selecione os canais que devem receber a mesma configuração.

**O que é copiado:**

* a resposta automática ao comentário (ativação, modo e mensagem);
* o Direct automático (ativação, modo, mensagem e regras de palavra-chave);
* o fechamento automático de tickets.

**O que não é copiado:**

* as automações por publicação;
* as demais configurações do canal.

> 💡 A própria janela avisa que a cópia afeta apenas esses itens. Depois de copiar, confira o resultado em cada canal.

***

## 🔗 Ligar a outras ferramentas

Cada comentário novo também pode ser enviado como **evento de webhook** para outras ferramentas, como o n8n.

Na seção **"Ligar a outras ferramentas"**, clique em **"Abrir webhooks e integrações"** — a tela abre na aba do Instagram. Pela integração, é possível responder ao comentário ou enviar a mensagem privada.

***

## 🔄 Como funciona na prática

```text
Pessoa vê a publicação
      ↓
Pessoa comenta: "Quero saber mais!"
      ↓
Existe configuração para esta publicação?
      ├── Sim → usa os modos definidos nela
      └── Não → usa a automação geral do canal
      ↓
Responde publicamente (se ativado)
      ↓
Envia o Direct (se ativado):
   • mensagem fixa
   • texto da regra de palavra-chave que combinou
   • resposta da IA
      ↓
A conversa continua no atendimento
```

> 💡 No modo palavra-chave, se nenhuma regra combinar e o fallback for **"Não enviar nada"**, o Direct não sai — mas a resposta pública ao comentário, se estiver ligada, continua normal.

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
| Direct | **Mensagem fixa** (troque para IA ou palavra-chave depois) |
| Automação por publicação | Só quando o produto ou o assunto mudar de uma publicação para outra |

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

1. Confira se **"Ativar resposta automática ao comentário"** (ou o Direct) está ligado e salvo.
2. Verifique se escolheu **mensagem fixa** com texto preenchido, **IA** configurada ou **palavra-chave** com regra válida.
3. Se houver automação por publicação, confira se ela não está em **"Não responder"**.
4. Teste com um comentário real de outra conta.

### O comentário recebeu resposta, mas o Direct não chegou

* No modo **palavra-chave**, nenhuma regra pode ter combinado e o fallback pode estar em **"Não enviar nada"**. Confira as palavras e a ordem das regras.
* O comentário pode já ter recebido a mensagem privada permitida — o Instagram libera **uma por comentário**.
* A janela de 24 horas pode ter fechado, ou a conta da pessoa tem restrição de mensagens.

### Não vejo a seção "Automação por publicação"

Ela só aparece em canais de **Conexão direta Meta**. Canais conectados por hub não exibem esta seção.

### Configurei uma publicação, mas nada mudou

O diálogo apenas monta a lista. É preciso clicar em **"Salvar Configuração"** na página para gravar. O mesmo vale para remover uma publicação.

### Não consigo adicionar a mesma publicação duas vezes

Cada publicação aceita uma única configuração. Use o lápis para editar a existente.

### Erros ao salvar palavra-chave ou publicação

| Mensagem | O que fazer |
| --- | --- |
| **Cadastre ao menos uma regra com palavra-chave e mensagem preenchidas.** | Preencha pelo menos uma regra completa |
| **Preencha a mensagem padrão ou escolha outro comportamento para quando nenhuma palavra-chave corresponder.** | Preencha a mensagem padrão ou troque o fallback |
| **Escolha uma publicação na lista ou informe o código dela.** | Selecione a publicação ou digite o código |
| **O código da publicação deve ter somente números.** | Remova letras, espaços e símbolos |
| **Preencha a mensagem do modo "Mensagem fixa".** | Preencha a mensagem do bloco que está em mensagem fixa |
| **Esta publicação já tem uma configuração. Edite a configuração existente.** | Use o lápis na publicação já configurada |
| **Mude ao menos um dos dois modos: como está, esta publicação não muda nada.** | Troque o modo do comentário ou do Direct |

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

#### Posso usar palavra-chave na resposta pública ao comentário?

**Não.** Palavra-chave é exclusiva do Direct. No comentário, escolha entre **Mensagem fixa** e **Inteligência Artificial**.

#### Várias regras podem responder ao mesmo comentário?

**Não.** Vale apenas a **primeira regra da lista que combinar**; uma única mensagem é enviada.

#### A palavra-chave diferencia maiúsculas ou acentos?

A própria tela informa que **não** diferencia maiúsculas, acentos nem espaços extras.

#### Posso usar a Base de Conhecimento com mensagem fixa?

Não. A base só é usada quando a resposta é gerada por IA — inclusive no fallback de palavra-chave que usa IA.

#### Como funciona a automação por publicação?

Você escolhe uma publicação e define, para ela, o modo do comentário e do Direct. O que ficar em **"Herdar da configuração geral"** usa a configuração das seções 2 e 3.

#### A automação por publicação funciona em qualquer canal?

Não. Ela só aparece em canais de **Conexão direta Meta**. Nos hubs, use a automação geral.

#### As configurações por publicação foram salvas?

Só depois de clicar em **"Salvar Configuração"** na página. O **"Salvar"** do diálogo apenas adiciona a publicação à lista.

#### A cópia para outros canais leva as configurações por publicação?

**Não.** A cópia leva a resposta ao comentário, o Direct (com as regras de palavra-chave) e o fechamento automático de tickets.

#### Quantas mensagens privadas o Instagram permite por comentário?

**Uma**, até **7 dias** depois do comentário. Para enviar outras, a pessoa precisa responder — isso abre a janela de 24 horas.

#### Funciona com comentários antigos?

O sistema acompanha os comentários a partir da conexão do canal.

***

## 📚 Veja também

* [Responder comentários do Instagram (manual)](../../canais-disponiveis/hubs/responder-comentarios-instagram.md)
* [O que cada hub faz (comparativo)](../../canais-disponiveis/hubs/recursos-por-hub.md)
* [Agendamento de Publicações no Instagram](agendamento-de-publicacoes-no-instagram.md)
* [Resposta Automática a Comentários do TikTok](resposta-automatica-a-comentarios-do-tiktok.md)
* [Base de Conhecimento](../../integracoes/inteligencia-artificial/recepcao-inteligente/base-de-conhecimento.md)
