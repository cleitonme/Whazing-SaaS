# Base de Conhecimento

## 📚 Base de Conhecimento para Reduzir Prompt e Tokens

Para deixar o prompt:

* ✅ Mais simples
* ✅ Menor
* ✅ Mais estável
* ✅ Com menor consumo de tokens

Você pode utilizar a **Base de Conhecimento** integrada à Recepção Inteligente.

Assim, a IA só recebe informações extras **quando necessário**, em vez de manter tudo fixo no prompt principal.

***

## 🎯 Qual o objetivo?

Evitar prompts longos que podem:

* Confundir a IA
* Aumentar consumo de tokens
* Gerar respostas inconsistentes
* “Fazer a IA enlouquecer” 😅

Com a Base de Conhecimento:

* O prompt principal fica enxuto
* Informações específicas são adicionadas apenas quando a palavra-chave é detectada

***

## 🛠️ Como Funciona na Prática

#### 1️⃣ Criar uma Base de Conhecimento

Exemplo:

Criar base chamada:

```
IXC
```

Dentro dela, você cadastra:

* Como configurar IXC
* Passo a passo
* Requisitos
* Links importantes
* Informações técnicas

***

#### 2️⃣ Configurar na Recepção Inteligente

Na configuração:

* Selecione a base criada
* Defina a palavra-chave:

```
ixc
```

***

#### 3️⃣ O que acontece quando o cliente falar “ixc”?

Se o cliente escrever algo como:

> “Como configurar o IXC?”

O sistema automaticamente:

* Detecta a palavra-chave
* Injeta o conteúdo da base no prompt da IA
* Envia junto com as instruções

***

## 🧠 Modelo Padrão de Injeção da Base

Quando ativada, o sistema adiciona ao prompt algo como:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📚 BASE DE CONHECIMENTO ATIVADA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

As seguintes informações foram encontradas na base de conhecimento e devem ser usadas para responder:

${content}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ INSTRUÇÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. USE as informações acima como fonte primária
2. Siga os passos EXATAMENTE como descritos
3. Seja natural - NÃO mencione "consultei a base de conhecimento"
4. Se precisar de mais informações além do que está acima, seja honesto
5. NÃO invente - use APENAS o que foi fornecido
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

A variável:

```
${content}
```

Contém exatamente o texto salvo na Base de Conhecimento.

***

## ✏️ Personalizando o Próprio Prompt

Você também pode criar seu próprio modelo de injeção.

⚠️ Importante:\
Sempre inclua a variável:

```
{content}
```

Ela é responsável por inserir o conteúdo da Base de Conhecimento dentro do prompt.

Se esquecer essa variável, a IA não receberá o conteúdo.

***

## 🚀 Vantagens

* 🔥 Reduz consumo de tokens
* 🧠 Melhora precisão das respostas
* 📚 Organiza conteúdos técnicos
* ⚡ Deixa o prompt principal mais leve
* 🎯 Ativa informação apenas quando necessário

***

## ✅ Resultado Final

Com essa configuração:

1. Cliente menciona palavra-chave
2. Sistema injeta automaticamente o conteúdo relacionado
3. IA responde com base correta
4. Prompt permanece limpo e otimizado

Isso torna o atendimento **mais inteligente, econômico e estável** 🚀
