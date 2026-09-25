---
icon: calendar-clock
---

# Webhook da Agenda, Kanban e Kanban Pro

Além dos webhooks de **canal** e de **fila** (que avisam sobre mensagens e atendimentos), o Whazing também pode avisar outro sistema quando algo acontece na **Agenda**, no **Kanban** e no **Kanban Pro**:

* Um **agendamento** foi criado, remarcado ou cancelado;
* Um **card** mudou de etapa, foi ganho ou perdeu a negociação.

Ou seja: seu sistema externo (N8N, CRM, planilha automatizada, faturamento...) fica sabendo **em tempo real**, sem precisar consultar o Whazing.

> 💡 **Nunca configurou um webhook?** Comece pela página [Webhooks](README.md) — a lógica é a mesma: o sistema envia uma requisição `POST` em formato `JSON` para a **URL** que você informar, toda vez que um evento marcado acontecer.

## 📍 Onde configurar

1. Acesse **Automação e Integrações → Webhooks/N8N**.
2. Escolha a aba:
   * **Webhook da Agenda** — eventos de agendamento;
   * **Webhook do Kanban** — eventos dos cards do Kanban;
   * **Webhook do Kanban Pro** — eventos dos cards do Kanban Pro.
3. Clique em **"Novo Webhook..."**.

***

## ⚙️ O formulário (igual para os três)

Os três escopos usam **exatamente o mesmo formulário** — o que muda são os eventos disponíveis e um filtro específico de cada um:

| Campo | O que faz |
| --- | --- |
| **Integração Ativada** | Liga/desliga o envio de eventos sem apagar a configuração |
| **Nome da integração** | Para você identificar na lista (ex.: "N8N - Faturamento") |
| **URL do Webhook/N8N** | O endereço que vai receber os eventos |
| **Calendários** _(só na Agenda)_ | Opcional. **Deixe em branco para receber eventos de todos os calendários** — ou escolha apenas de onde quer receber |
| **Quadros** _(só no Kanban Pro)_ | Opcional. **Deixe em branco para receber eventos de todos os quadros** — ou escolha apenas de onde quer receber |
| **Eventos** | Marque os eventos que devem ser enviados (listas abaixo) |
| **Bearer Token / API Key** _(em "Mostrar configurações avançadas")_ | Opcional. Enviado no cabeçalho `Authorization` da requisição — para o destino que exige autenticação |

> 💡 **O Kanban tradicional não tem filtro por quadro** porque, nele, o card é o próprio contato — não existe a figura de "quadro" como no Kanban Pro.

### Como salvar, testar e acompanhar

1. Preencha o formulário e clique em **Salvar**.
2. Clique em **"Testar integração"** — o teste é feito **pelo servidor**, com o mesmo cabeçalho de autenticação do uso real, e mostra o resultado (status HTTP e duração). Nos três escopos, o teste só fica disponível **depois de salvar** (o token não volta para a tela).
3. Na lista de webhooks, use o ícone de **"Últimos envios"** (relógio) para ver o histórico de cada envio: evento, data/hora, tentativa, status HTTP e mensagem de erro, quando houver.

***

## 📅 Agenda — eventos disponíveis

| Evento | Quando é enviado |
| --- | --- |
| **Agendamento criado** | Um novo agendamento foi feito (pela tela, link, chatbot, Recepção Inteligente ou API) |
| **Agendamento alterado** | As informações de um agendamento foram editadas |
| **Agendamento remarcado** | O horário/data do agendamento mudou |
| **Agendamento cancelado** | O agendamento foi cancelado (inclusive pelo cliente respondendo o lembrete) |
| **Agendamento excluído** | O agendamento foi apagado da Agenda |
| **Mudança de status** | O status mudou — ex.: de **Agendado** para **Confirmado** ou **Concluído** |

***

## 📊 Kanban — eventos disponíveis

| Evento | Quando é enviado |
| --- | --- |
| **Card criado** | Um contato entrou no Kanban (ganhou uma etapa) |
| **Card alterado** | Informações do contato/card mudaram |
| **Card movido de etapa** | O contato passou de uma etapa para outra |
| **Card excluído** | O contato saiu do Kanban |
| **Mudança de status (etapa ganha)** | O contato chegou a uma etapa marcada como **"Lane de negociação ganha"** — ou deixou de estar nela |
| **Mudança de responsável** | A carteira do contato mudou de atendente |

> ⚠️ No Kanban tradicional, o card **é o contato**: a etapa fica no cadastro dele e o "status de ganho" é estar numa etapa marcada como **negociação ganha**. Por isso, "mudança de status" significa **ganho/não ganho** e "mudança de responsável" significa **troca de carteira**.

***

## 📈 Kanban Pro — eventos disponíveis

| Evento | Quando é enviado |
| --- | --- |
| **Card criado** | Um card foi criado num quadro |
| **Card alterado** | Informações do card mudaram |
| **Card movido de etapa** | O card passou de uma etapa para outra |
| **Card excluído** | O card foi removido |
| **Mudança de status (ganho ou arquivado)** | O card chegou a uma etapa marcada como **"Etapa de negociação ganha"** — ou foi arquivado |
| **Mudança de responsável** | O responsável pelo card mudou |

### Kanban e Kanban Pro: o que é igual e o que é diferente

* **Igual:** os dois usam o mesmo formulário, têm os mesmos 6 tipos de evento e o mesmo funcionamento (escolha a aba certa, crie o webhook, marque os eventos, salve e teste).
* **Diferente:**
  * O filtro de origem é **Quadros** no Kanban Pro (o Kanban tradicional não tem quadros);
  * O evento de status considera **ganho ou arquivado** no Kanban Pro, e **etapa ganha** no Kanban;
  * No Kanban Pro, "mudança de responsável" é o responsável **do card**; no Kanban, é a **carteira do contato**.

> 💡 Os nomes das etapas que marcam ganho/perda são configurados por você — veja [Lane de negociação ganha e perdida](../../funcionalidades/kanban.md#️-lane-de-negociação-ganha-e-perdida) e a seção de etapas do [Kanban Pro](../../funcionalidades/kanban-pro/etapas-colunas.md).

***

## 🔔 O que chega no sistema externo

Cada envio é uma requisição `POST` em `application/json`, com os dados do evento (identificação do evento, informações do agendamento ou do card, calendário/quadro de origem, contato, datas etc.). O token configurado vai no cabeçalho `Authorization`.

**Sugestão de print:** tela **Webhooks** com a aba **Webhook da Agenda** aberta, mostrando a lista de webhooks criados.

**Onde colocar:** logo após "Onde configurar".

**Objetivo:** mostrar que os três novos escopos aparecem como abas no mesmo lugar dos webhooks conhecidos.

**Sugestão de print:** formulário de criação do webhook com a lista de **Eventos** da Agenda visível (6 opções marcáveis).

**Onde colocar:** na seção do formulário, junto do campo "Eventos".

**Objetivo:** esclarecer a dúvida mais comum — onde se escolhe exatamente quais eventos são enviados.

***

> Automatize agenda e pipeline em tempo real: o Whazing avisa seu sistema a cada agendamento e a cada card que avança. 🚀
