# Criar e ativar sua integração (passo a passo)

> 💡 A criação da **Recepção Inteligente** ficou mais simples: no primeiro cadastro, o sistema exibe um **wizard guiado** com poucos passos, ideal para quem está começando.

## 📍 Onde acessar

Acesse:

**Automação e Integrações → IA e Integrações**

Clique em **Nova integração Smart Reception** para começar.

***

## ✨ Passo 1 — Nome

**Como deseja chamar esta integração?**

* Ex.: **Atendimento Geral**, **Recepção Clínica**, **Suporte IA**, **Financeiro**

***

## 🧩 Passo 2 — Modelo

Escolha um **modelo pronto** para começar, ou personalize do zero.

* **Personalizado** — comece do zero e escreva sua própria personalidade de atendimento.
* Modelos prontos por segmento (preenchem o **prompt principal** automaticamente):

| Modelo | Para quem é |
| ------ | ----------- |
| **Atendimento Geral** | Primeiro atendimento cordial, profissional e eficiente para qualquer empresa |
| **Clínica Médica** | Clínicas — atendimento acolhedor, agendamentos e triagem de pacientes |
| **Advocacia** | Escritórios de advocacia — triagem ética e profissional de clientes |
| **SaaS / Software** | Empresas de software — atendimento consultivo, demonstrações e planos |
| **Pet Shop** | Pet shops — agendamentos, produtos e cuidados com o pet |
| **Farmácia** | Farmácias — atendimento rápido e seguro, produtos e receitas |
| **Academia** | Academias — atendimento motivador, planos e aulas experimentais |

> 💡 Você pode **trocar de modelo a qualquer momento** depois, na edição da integração (aba **Personalidade**).

***

## 🤖 Passo 3 — IA

Escolha qual IA vai atender seus clientes.

* **Utilizar IA disponibilizada pelo sistema** — pronto para usar, incluído no seu plano. **Recomendado.**
* **Utilizar minha própria API** — use sua própria chave de API (OpenAI, Groq, Gemini etc.).

Se precisar, abra as **Configurações avançadas**.

***

## 🎭 Passo 4 — Personalidade

Este é o **prompt principal**: as instruções que definem como sua IA se comporta, o que ela pode e não pode fazer e como ela conversa com seus clientes.

Exemplo:

```
Você é um assistente virtual especializado em atendimento ao cliente. Seja sempre educado e prestativo.
Somente responda o que estiver prompt, transfira para setor conforme palavras chaves.
```

* **Prompt secundário (opcional)** — complemente o comportamento da IA se quiser.

> 💡 Prefere partir de um modelo pronto? Você pode trocar a qualquer momento.

***

## ⚙️ Passo 5 — Ações Automáticas

* **Transferência por palavras-chave** — quer transferir automaticamente para alguma fila com base em palavras-chave? Você pode configurar agora ou pular e fazer depois na edição.
* **Automação de Kanban** — escolha qual sistema de Kanban a IA deve usar e como ela deve decidir quando mover ou criar cards. Ative a **movimentação automática** se desejar.

> 💡 Também é possível configurar **transferência por usuário**, **chatbot** e **automação avançada de Kanban** depois, na tela de edição da integração.

***

## 📚 Passo 6 — Fonte de Informações

Sua IA pode consultar uma **base de conhecimento** para responder melhor. Isso é opcional.

* **Habilitar Base de Conhecimento** — depois de habilitar, você adiciona os itens da base na tela de edição. A **busca na web** também pode ser configurada lá.
* **Configuração de Arquivos** — selecione arquivos ou imagens que a IA pode enviar automaticamente quando o assunto combinar com as palavras-chave.

***

## ✅ Passo 7 — Revisão

Confira tudo antes de criar sua integração:

* Nome
* Modelo
* IA
* Personalidade

Clique em **criar** para finalizar.

***

## 🚀 Ativando sua integração

Após criar, o sistema abre o wizard **"Vamos ativar sua integração"**:

### 1. Fila

* Se for a primeira vez, o sistema **cria automaticamente uma fila** para esta integração.
* Se já existir uma fila configurada, ela será reutilizada.

### 2. Canais

Agora escolha em quais **canais** esta integração será utilizada (ex.: WhatsApp Plus, API Oficial, WuzAPI, Instagram, WebChat, Telegram, TikTok etc.).

### 3. Confirmação

A partir de agora, os **novos atendimentos** destes canais utilizarão a sua integração.

***

## ✏️ Depois de criar

Na lista de integrações você encontra:

* **Ativar** — reabre o wizard de ativação (fila, canais, confirmação) para ativar ou alterar os canais.
* **Editar** — abre as **informações avançadas** com as abas:

### 📋 Aba Geral

A aba **Geral** mostra as informações da integração:

* **Tipo** — Inteligência Artificial – Recepção Inteligente
* **Nome da Integração** — o nome definido no cadastro
* **Status** — "Sua integração está 100% pronta" com o resumo (IA compartilhada do sistema · Fila · canais vinculados)
* **IA** — escolha entre **Utilizar IA disponibilizada pelo sistema** (recomendado) ou **Utilizar minha própria API**
* **Testar integração** — botão para validar o funcionamento

Resumo da integração:

* IA compartilhada do sistema
* Prompt principal preenchido
* Base de conhecimento utilizada ou não
* PIX utilizado ou não

***

### 🗂️ Abas de configuração

| Aba | O que configura | Documentação |
| --- | --- | --- |
| **Geral** | Tipo, nome, IA (compartilhada do sistema ou própria) e teste | — |
| **Personalidade** | Modelo de atendimento e prompt principal/secundário | [Instruções eficientes](como-criar-instrucoes-eficientes-para-atendimento-automatico-com-ia.md) |
| **Comportamento** | Histórico de atendimentos anteriores e tempo de espera para resposta | — |
| **Automação** | Transferência por filas/palavras-chave, usuários, chatbot, etiquetas, Kanban, arquivos e chave PIX | [Etiquetas e Kanban](etiquetas-automaticas-e-kanban-com-ia.md) · [Arquivos](envio-de-arquivos-via-ia.md) · [PIX](botao-pix-automatico-no-atendimento.md) |
| **Conhecimento** | Base de conhecimento, busca na web, MCP e correspondência semântica | [Base de conhecimento](base-de-conhecimento.md) · [Busca na web](busca-na-web.md) · [MCP](mcp-e-ferramentas-de-ia.md) · [Busca semântica](busca-semantica.md) |
| **Voz** | Respostas por áudio (provedor, modelo e quando enviar áudio) | [Resposta por áudio](configuracao-de-resposta-por-audio.md) |
| **Followup** | Follow-up automático e ausência de resposta | [Follow-up](follow-up-recepcao-inteligente.md) |
| **Avançado** | Parâmetros técnicos (tokens, temperatura) e Command Analyzer (IA 2) | [Provedor personalizado](configurando-provedor-de-ia-personalizado-openai-compativel.md) |

### 🤖 Command Analyzer (IA 2)

Na aba **Avançado**, além dos **Parâmetros Técnicos** (máximo de tokens na resposta e temperatura), existe o **Command Analyzer (IA 2)**:

* É uma **segunda IA** que analisa a resposta da IA 1 e o histórico/palavras-chave do cliente e decide ações de sistema (transferir para fila/usuário, enviar arquivo, PIX, encerrar).
* A IA 1 **autoriza** a ação; a IA 2 **escolhe o destino**.
* É **subordinada à IA 1** — em dúvida, não executa.

> 💡 A IA 2 decide a ação com base na resposta da IA 1 (autorização) + histórico/palavras-chave do cliente (roteamento), e o backend valida/executa. **Padrão recomendado.**

***

## ✅ Pronto!

A partir de agora, sempre que chegar uma **nova mensagem** nos canais vinculados, o primeiro atendimento será feito automaticamente pela **Recepção Inteligente**, conforme o prompt e as regras configuradas.
