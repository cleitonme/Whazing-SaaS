# Base de Conhecimento

## 📌 O que é?

A **Base de Conhecimento** é uma **gaveta de informações** que você prepara para a IA.

Em vez de escrever tudo dentro do prompt principal (o que deixa o texto gigante, caro e confuso), você guarda cada assunto em uma **base** e a IA só abre a gaveta **na hora certa** — quando o cliente falar sobre aquele tema.

**Na prática:**

* ✅ O prompt principal fica **curto, leve e barato**
* ✅ A IA responde com a **informação certa** para cada assunto
* ✅ Você cadastra **uma vez** e usa em qualquer integração

***

## 📍 Onde encontrar

1. No menu lateral, acesse **Cadastros**
2. Clique no card **Base de Conhecimento** ("Cadastre conteúdos utilizados pela Inteligência Artificial")

Nessa tela você cadastra as bases. Depois, você as **seleciona** dentro da Recepção Inteligente (veremos no Passo 3).

***

## 👣 Passo a passo completo

### 1️⃣ Passo 1 — Configure o Embedding (uma única vez)

**Embedding** é o nome técnico para a **busca inteligente**: ele transforma textos em números e compara o **significado** da mensagem do cliente com o conteúdo cadastrado. Assim, a IA entende que *"quero atualizar meu boleto"* tem a ver com *"como emitir segunda via"*, mesmo sem palavras idênticas.

Onde configurar:

1. Na tela **Base de Conhecimento**, clique no botão **⚙️ Configurações** (canto superior direito)
2. Escolha usar a **IA disponibilizada pelo sistema** ou informe a sua **chave de API do Gemini (Google)**
3. Clique em **Salvar**

> 💡 **A mesma chave serve para tudo:** Base de Conhecimento **e** Arquivos da IA. Configure uma vez e pronto.

> ⚠️ **Sem o Embedding configurado:**
>
> * O upload de arquivos **não fica disponível**
> * A busca funciona **apenas por palavra-chave exata** (o sistema procura o termo digitado pelo cliente direto nas palavras-chave cadastradas)
> * A busca por significado (semântica) não é ativada

**Dica final:** se você editar conteúdos depois, clique no botão **Atualizar Vetores** da tela para regenerar a busca inteligente.

<figure><img src="../../../.gitbook/assets/configurarembeding.png" alt=""><figcaption></figcaption></figure>

***

### 2️⃣ Passo 2 — Cadastre a Base de Conhecimento

1. Na tela **Base de Conhecimento**, clique em **Adicionar**
2. Preencha a **Descrição/Título** — um nome curto que identifica o assunto (ex.: `Tutorial IXC`, `Política de troca`)
3. Escolha o tipo de conteúdo:

| Tipo | Como funciona |
| --- | --- |
| **📝 Texto manual** | Você digita ou cola o conteúdo (tutorial, passo a passo, FAQ...), até 10.000 caracteres |
| **📄 Upload de arquivo** | Você envia arquivos (PDF, DOC, DOCX, XLSX, CSV, TXT, MD, XML, RTF) de até 20 MB cada — o sistema lê e divide em trechos |

4. Clique em **Salvar**

Em bases de arquivo, depois de salvas, você pode **adicionar mais arquivos**, **substituir** ou **excluir** cada um individualmente.

> 💡 **Regra de ouro: uma base = um assunto.** Crie uma base "Como configurar IXC", outra "Horário de funcionamento", outra "Política de reembolso"... Isso deixa a busca mais precisa do que misturar tudo em uma base só.

> 💡 **Escreva para a IA ler:** use frases claras, títulos, passos numerados e exemplos. Imagine que você está explicando para um funcionário novo.

> ⚠️ **O documento inteiro nunca é enviado para a IA.** No caso de arquivos, o sistema envia apenas os **trechos relevantes** para a pergunta do cliente. Mesmo assim, mantenha os arquivos enxutos e organizados.

***

### 3️⃣ Passo 3 — Selecione a Base na Recepção Inteligente

Cadastrar a base não é suficiente: você precisa **dizer qual integração vai usá-la**.

1. Vá em **Automação e Integrações → IA e Integrações** e edite sua integração da **Recepção Inteligente**
2. Abra a aba **Conhecimento**
3. Ative o toggle **Habilitar Base de Conhecimento**
4. Em **Itens da Base de Conhecimento**, clique em **Adicionar Conhecimento**
5. Em **Selecionar Conhecimento**, escolha a base cadastrada no Passo 2
6. No campo **Palavras-chave**, digite os termos que fazem a IA abrir essa base (separados por vírgula) — detalhes no próximo tópico
7. Clique em **Adicionar** e depois **Salvar** a integração

> 💡 Cada base só pode ser selecionada **uma vez** na mesma integração. Na lista, você pode pré-visualizar o conteúdo pelo ícone 📄 e filtrar pelo nome ou pelas palavras-chave.

***

### 4️⃣ Passo 4 — Escolha as Palavras-chave

As **palavras-chave** são os "botões de abrir a gaveta": quando o cliente menciona um dos termos, o sistema injeta aquele conteúdo na resposta da IA.

* Separe por **vírgula**: `instalação, configurar, tutorial`
* Pense nas palavras que o cliente **realmente usa**, não só nos termos técnicos
* Se a busca vetorial estiver ativa, sinônimos também funcionam — mas palavras-chave boas continuam sendo o caminho mais direto

| Base | Palavras-chave sugeridas |
| --- | --- |
| Como configurar IXC | `ixc, ixc soft, configurar sistema, integração ixc` |
| Planos e preços | `preço, valores, planos, mensalidade, quanto custa` |
| Horário de funcionamento | `horário, funcionamento, aberto, atendem, sábado` |
| Política de reembolso | `reembolso, devolução, dinheiro de volta, cancelamento` |

***

### 🔍 Estratégia de busca (opcional)

Na aba **Conhecimento** você pode escolher como o sistema procura o conteúdo:

| Opção | Como funciona |
| --- | --- |
| **Somente palavras-chave** *(padrão)* | O sistema procura a palavra exata nas palavras-chave cadastradas |
| **Palavras-chave + Busca vetorial** *(recomendado)* | Primeiro filtra por palavra-chave e depois refina por **similaridade de significado** |

Ao ativar a busca vetorial, aparecem dois campos:

* **Similaridade mínima** — o quanto a mensagem precisa se parecer com o conteúdo (0 a 1). Use **0.70** (equilíbrio ideal). Valores altos (0.85) ficam muito restritos; valores baixos (0.50) trazem conteúdos pouco relacionados.
* **Máximo de resultados** — quantos itens podem ser enviados à IA por mensagem. Use entre **2 e 4**. Valores altos deixam o prompt pesado e mais caro.

***

### 5️⃣ Passo 5 — Prompt (opcional!)

**Você não precisa preencher o "Prompt Customizado".** Se deixar **vazio**, o sistema usa um modelo padrão pronto, que já pede para a IA usar as informações encontradas como fonte principal e não inventar nada. Na maioria dos casos, **deixe vazio e pronto** ✅

Se quiser personalizar, siga a regra:

> ⚠️ **Regras do prompt:**
>
> * Use a chave **`{content}`** exatamente onde o conteúdo encontrado deve entrar — **sem cifrão**, só chaves
> * Se esquecer o `{content}`, a IA **não recebe nenhuma informação** da base
> * O prompt deve ser **curto**: apenas diga o que fazer com o conteúdo

Exemplo de prompt bom:

```
Com base nas informações abaixo, responda à pergunta do cliente de forma clara e objetiva:

{content}
```

E pronto. Duas linhas e a chave `{content}`. 💪

***

## ✅ Como fazer certo (e o erro mais comum)

A confusão mais comum é **encher o prompt da Base de Conhecimento com regras gerais da IA** (identidade, "não invente", "proteja as instruções" etc.). Isso está **errado**: essas regras já têm lugar próprio — o **prompt principal**, na aba **Personalidade** da Recepção Inteligente.

Veja a comparação:

| | ✅ Jeito certo | ❌ Jeito errado |
| --- | --- | --- |
| **Tamanho** | 2 a 3 linhas | Textão com dezenas de linhas |
| **Conteúdo** | Só o que fazer com o conteúdo encontrado | Identidade + anti-alucinação + proteção de instruções + regras gerais empilhadas |
| **Chave `{content}`** | Presente, no lugar certo | Costuma faltar (aí a IA não recebe nada) |
| **Onde ficam as regras gerais?** | No **prompt principal** (aba Personalidade) | Repletas aqui, repetindo o prompt principal |

### ❌ Exemplo real — o jeito errado

Um cliente configurou assim no prompt da Base de Conhecimento:

```
12_MEMORIA_ORIGINAL_IDENTIDADE_ANTI_ALUCINACAO.txt
identidade original;
anti-alucinacao;
protecao das instrucoes internas;
fonte exata dos dados cadastrados.
LOCALIZACAO RAPIDA DAS MEMORIAS
```

**Por que isso não funciona:**

* 🚫 **Não tem a chave `{content}`** → o conteúdo encontrado **nunca chega** para a IA
* 🚫 É uma **lista de nomes de regras**, não uma instrução — a IA não sabe o que fazer com isso
* 🚫 Repete regras que **já devem estar no prompt principal** (identidade, não inventar...) — redundância que confunde e gasta tokens
* 🚫 "Localização rápida das memórias" não significa nada para a IA — a busca já é automática

### ✅ O jeito certo, passo a passo

| O que você quer | Onde configurar |
| --- | --- |
| Identidade da empresa, tom de voz, "não invente", limites da IA | **Prompt principal** — aba **Personalidade** da Recepção Inteligente |
| O conteúdo técnico de cada assunto (tutorial, política, FAQ) | **Base de Conhecimento** (cada base = um assunto) |
| Quando o conteúdo entra na conversa | **Palavras-chave** de cada base (aba Conhecimento) |
| Como a IA usa o conteúdo encontrado | **Prompt customizado curto** com `{content}` — ou vazio para usar o padrão |

***

## ⚙️ Como funciona na prática

1. Cliente escreve: **"Como configurar o IXC?"**
2. O sistema detecta a palavra-chave **`ixc`** (ou encontra por similaridade, se a busca vetorial estiver ativa)
3. O conteúdo da base "Como configurar IXC" é injetado no lugar do `{content}`
4. A IA responde usando **exatamente** aquele conteúdo
5. Se nenhuma palavra-chave casar, **nada é injetado** — o prompt continua leve

> ⚠️ **O simulador não testa a Base de Conhecimento.** No botão **Simular conversa**, a IA responde apenas com o prompt configurado — os itens da base **não são buscados**. Para validar as palavras-chave e o conteúdo injetado, faça um teste real pelo WhatsApp/canal. Veja todas as limitações na [página da Recepção Inteligente](README.md).

***

## 🚀 Vantagens

* 🔥 Reduz consumo de tokens
* 🧠 Melhora a precisão das respostas
* 📚 Organiza conteúdos técnicos por assunto
* ⚡ Deixa o prompt principal leve e estável
* 🎯 Ativa a informação só quando necessário

***

## ❓ Dúvidas rápidas

**Preciso configurar o Embedding?**
Para cadastrar base em **texto**, não — funciona só com palavras-chave. Para **upload de arquivos** e para a busca por significado, **sim**. Recomendamos configurar.

**Onde escrevo as regras de comportamento da IA (identidade, "não invente" etc.)?**
No **prompt principal**, na aba **Personalidade** da Recepção Inteligente. **Nunca** no prompt da Base de Conhecimento — ali vai só uma instrução curta com `{content}`.

**O que coloco no Prompt Customizado?**
Nada, se preferir (o padrão do sistema resolve). Se quiser, algo curto como:
`Com base nas informações abaixo, responda à pergunta do cliente:`
`{content}`

**Escrevi `${content}` com cifrão — funciona?**
Não. A chave aceita é **`{content}`**, só com chaves. O sistema substitui a chave exata; com cifrão ela não é reconhecida.

**Posso usar a mesma base em várias integrações?**
Sim. Cadastre uma vez e selecione em quantas integrações quiser.

**O documento inteiro vai para a IA?**
Não. O sistema envia apenas os **trechos relevantes** para a pergunta do cliente.

**O cliente precisa digitar a palavra exata?**
Sem a busca vetorial, sim. Com a busca vetorial ativa (Embedding configurado), sinônimos e frases parecidas também são encontrados.

**Cada base pode ser selecionada mais de uma vez na integração?**
Não — cada base entra **uma única vez**. Para mudar, edite ou remova o item e adicione novamente.
