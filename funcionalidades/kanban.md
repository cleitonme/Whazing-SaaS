# Kanban

O **Kanban** é uma forma visual de organizar seus atendimentos, como se fosse um quadro com colunas (etapas).

Cada contato vai passando por etapas como:

* Aguardando aprovação
* Aprovado
* Concluído
* (ou qualquer etapa que você criar)

<figure><img src="../.gitbook/assets/telakanban.png" alt=""><figcaption></figcaption></figure>

***

## 🧠 Como funciona o Kanban

* Cada **coluna (lane)** representa uma etapa
* Cada **card** representa um contato
* Você pode **arrastar o contato** entre as etapas

***

## 👥 Tipos de Kanban

Existem 2 modos:

#### 🔹 1. Compartilhado (Equipe inteira)

* Todos os usuários veem o mesmo Kanban
* Ideal para equipes

#### 🔹 2. Individual

* Cada usuário tem seu próprio Kanban
* Ideal para uso pessoal

***

## ⚙️ Configurações do Kanban

Vá em:

👉 **Configurações → Configurações**

Aqui você controla como o Kanban funciona:

***

### 🔧 Compartilha KANBAN entre todos usuários

✔ Ativado:

* Todos veem o mesmo Kanban

❌ Desativado:

* Cada usuário tem o seu

***

### 🔧 Listar contatos sem usuário no KANBAN

✔ Mostra contatos sem atendente atribuído

❌ Não mostra

💡 Útil para ver atendimentos “soltos”

***

### 🔧 Separar lista de lanes por usuário

✔ Ativado:

* Cada usuário tem suas próprias colunas

❌ Desativado:

* Colunas são compartilhadas
* Apenas admin pode editar

***

### 🔧 Listar contatos com ticket fechado

✔ Ativado:

* Mostra contatos já finalizados

❌ Desativado:

* Mostra apenas abertos/pendentes

***

### 🔧 Listar contatos sem ticket

✔ Ativado:

* Mostra todos contatos, mesmo sem atendimento

⚠️ Atenção:

* Pode deixar o sistema lento se tiver muitos contatos

<figure><img src="../.gitbook/assets/modulokanbanconfigu.png" alt=""><figcaption></figcaption></figure>

***

## 🏆 Lane de negociação ganha e perdida

Ao cadastrar ou editar uma **coluna (lane)** do Kanban, existem duas chaves liga/desliga que dão um **significado especial** à etapa:

| Chave | O que faz |
| --- | --- |
| **"Lane de negociação ganha"** | As negociações (contatos) que chegarem a essa etapa **passam a contar como ganhas** — o valor delas entra no resultado do mês no relatório [Meta de Vendas](relatorios/meta-de-vendas.md) e dispara o evento de status nos [webhooks do Kanban](../integracoes/webhooks/webhook-agenda-kanban-kanbanpro.md). A tela resume: _"As negociações que chegarem aqui contam no ganho do mês"_ |
| **"Lane de negociação perdida"** | As negociações que chegarem a essa etapa **saem do pipeline em aberto**, alimentando os indicadores de perda. A tela resume: _"As negociações que chegarem aqui saem do pipeline em aberto"_ |

**Como configurar:**

1. Abra o **Kanban**.
2. Crie uma nova coluna ("Nova lista") ou edite uma existente.
3. Ligue **"Lane de negociação ganha"** na etapa que representa o negócio fechado (ex.: "Venda concluída") e **"Lane de negociação perdida"** na etapa de negócio perdido (ex.: "Perdido").
4. Clique em **Salvar**.

> 💡 **Recomendação:** tenha **uma** etapa de ganho e **uma** de perdida no funil. É ela que o sistema usa para calcular vitórias/perdas — sem essa marcação, mover um contato para qualquer etapa é só organização visual, sem efeito nos relatórios.

> ⚠️ Se o seu Kanban é **compartilhado**, apenas o administrador consegue editar as colunas (conforme a configuração "Separar lista de lanes por usuário").

## 🧾 O que dá pra fazer no Kanban

Dentro de cada contato você pode:

* 📅 Definir data estimada
* 💰 Adicionar valor financeiro
* 📝 Escrever anotações

<figure><img src="../.gitbook/assets/edicaokanban.png" alt=""><figcaption></figcaption></figure>

***

### 📊 Relatórios do Kanban

Agora o sistema conta com relatórios completos para análise do seu Kanban.

📍 Localização:

👉 **Menu → Relatórios**

***

#### 📈 Relatório Geral do Kanban

* Visão completa de todos os cards no Kanban
* Quantidade por etapa (lane)
* Acompanhamento geral do funil

💡 Ideal para ter uma visão rápida do desempenho da equipe

<figure><img src="../.gitbook/assets/relatoriogeralkanban.png" alt=""><figcaption></figcaption></figure>

***

#### ⏰ Relatório de Vencimentos do Kanban

* Mostra contatos com **data estimada/vencimento**
* Identifica atrasos e pendências
* Ajuda no controle de prazos

💡 Muito útil para não perder negociações ou tarefas importantes

***

#### 🏷️ Relatório de Tags do Kanban

* Agrupa contatos por **tags**
* Permite análise por tipo de cliente, interesse ou origem

💡 Ideal para entender melhor o perfil dos atendimentos

***

#### 🔄 Relatório de Pipeline do Kanban

* Mostra o fluxo dos contatos entre etapas
* Permite analisar conversão entre fases
* Ajuda a identificar gargalos no processo

💡 Excelente para otimizar seu funil de vendas/atendimento

<figure><img src="../.gitbook/assets/pipelinekanban.png" alt=""><figcaption></figcaption></figure>

***

## 🔗 Onde mais posso alterar o Kanban

Você também pode mudar a etapa do contato em:

* Tela de atendimento
* Tela de edição do contato

<figure><img src="../.gitbook/assets/kanbanatendimento.png" alt=""><figcaption></figcaption></figure>

***

## 🔍 Filtros

Você pode filtrar contatos em alguns módulos e relatórios do sistema por etapa (lane):

👉 Exemplo:

* Ver só "Aprovados"
* Ver só "Aguardando"

***

## 📌 Importante

* O Kanban respeita regras da **carteira de atendimento**
* Nem todos contatos aparecem dependendo das configurações

***

## 🤖 Automação (Avançado)

⚠️ Funciona **somente com Kanban compartilhado ativado**

Você pode mover contatos automaticamente usando:

* API
* Typebot
* Bot interno
* Recepção inteligente

***

## 🔹 TYPEBOT (Mover contato automaticamente)

Adicione este comando no fluxo:

```
#{ "crmId": "1" }
```

👉 Troque o **1** pelo ID da coluna (lane)

***

## 🔹 API (Mover contato via sistema externo)

Endpoint:

```
POST /updatecrm
```

***

### 📲 Por número

```json
{
  "number": "5511999999999",
  "crm": 1
}
```

***

### 👤 Por contactId

```json
{
  "contactId": 3397,
  "crm": 8
}
```

***

### 🎫 Por ticketId

```json
{
  "ticketId": 2881,
  "crm": 19
}
```

***

### ❌ Remover do Kanban

Use:

```json
{
  "crm": 0
}
```

***

## ✅ Resumo rápido

* Kanban = organização visual dos atendimentos
* Pode ser individual ou compartilhado
* Dá pra automatizar via bot/API
* Evite listar contatos sem ticket (pode travar sistema)
