---
description: Relatórios de Meta Ads — conversas vindas de anúncios, ranking e comparação de anúncios e conversões automáticas do WhatsApp
icon: chart-simple
---

# 📣 Meta Ads Analytics

O **Meta Ads Analytics** reúne os relatórios que mostram **o retorno dos seus anúncios da Meta no WhatsApp**: quantas conversas os anúncios geraram, quantas foram atendidas, quais anúncios performam melhor — e, no WhatsApp API Oficial, as **conversões automáticas** que a Meta envia diretamente.

> 💡 **De onde vêm os dados?** Cada atendimento iniciado por um clique em anúncio da Meta é marcado com origem **"anúncio da Meta"** (leadSource `META_AD`), via **ctwa_clid** — o identificador que a Meta envia junto da conversa clicando no botão do anúncio.

## 📍 Onde encontrar

**Relatórios** → seção **Marketing** → **"Meta Ads Analytics"** (admin e supervisor).

O relatório abre com **4 abas**:

| Aba                                            | O que mostra                                                        |
| ---------------------------------------------- | ------------------------------------------------------------------- |
| **Visão Geral**                                | Resumo do período: KPIs, funil e gráficos gerais                    |
| **Anúncios**                                   | Ranking dos anúncios que geraram conversas                          |
| **Comparar**                                   | Comparação lado a lado de 2 a 4 anúncios                            |
| **Conversões automáticas do WhatsApp** (WABA)  | Eventos automáticos que a Meta envia (leads e compras)              |

## 🎯 Filtros

Os relatórios usam os mesmos filtros de sempre: **período inicial e final**, **canal**, **fila** e **usuário**. Na busca, dá para localizar um anúncio por **nome ou ID**.

---

## 👁️ Visão Geral

| Indicador                    | O que mostra                                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Conversas**                | Tickets com origem em anúncio da Meta criados no período selecionado                                               |
| **Contatos únicos**          | Quantos contatos **diferentes** iniciaram uma conversa vinda de anúncio                                            |
| **Atendidos**                | Tickets de anúncio que **sairam do status pendente** no período                                                     |
| **Anúncios ativos**          | Quantos anúncios **distintos** geraram ao menos uma conversa no período                                             |
| **Melhor anúncio do período** | O destaque entre os anúncios                                                                                      |

### Gráficos da aba

* **Funil de atendimento** — de Conversas para Atendidas: quanto das conversas de anúncio foram realmente atendidas;
* **Conversas por período** — evolução ao longo das datas;
* **Conversas por dia da semana** — os melhores dias para veicular;
* **Mapa de calor (dia x horário)** — em que momentos as conversas acontecem;
* **Motivos de encerramento** e **tipo de origem** — como esses atendimentos terminaram.

---

## 🏆 Anúncios

Ranking dos anúncios no período: **nome**, **ID**, **criativo** (imagem do anúncio) e **última conversa**. De cada linha dá para abrir **os detalhes** ou o **anúncio na Meta**.

---

## ⚖️ Comparar

Selecione **de 2 a 4 anúncios** e clique em **Comparar** para ver os indicadores lado a lado e decidir onde investir.

---

## 💬 Conversões automáticas do WhatsApp (aba de eventos)

Recurso do **WhatsApp API Oficial (WABA)**: quando a Meta detecta um evento nos anúncios — alguém **enviou um lead** (`LeadSubmitted`) ou **completou uma compra** (`Purchase`) — ela envia um `automatic_event` que fica registrado aqui.

### KPIs da aba

| Indicador                 | O que mostra                                                                                                            |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Total de eventos**      | Eventos automáticos recebidos da Meta no período e filtros selecionados                                                  |
| **Leads**                 | Eventos `LeadSubmitted` — a Meta identificou um **lead** (não representa uma venda)                                      |
| **Compras**               | Eventos `Purchase` — a Meta identificou uma **compra**                                                                   |
| **Taxa de atribuição**    | % de eventos associados a um ticket pelo **ctwa_clid**                                                                   |
| **Sem atribuição**        | Eventos sem ticket relacionado (o ctwa_clid não veio ou não corresponde a nenhuma conversa)                              |
| **Não mapeados**          | Eventos com nome ainda sem mapeamento no sistema — são gravados, mas não contam como lead nem compra                      |
| **Processados**           | Eventos com nome conhecido, normalizados e gravados com sucesso                                                          |

### Colunas da tabela e detalhes

Cada evento mostra **data do evento**, **recebido em**, **WABA/Conexão**, **contato**, **campanha**, **anúncio**, **ticket**, se está **atribuído** e o **ctwa_clid** (clique para copiar o valor completo). No detalhamento: **origem da atribuição**, **ID na Meta**, **ID interno**, **nome original recebido**, **status** (Processado, Duplicado, Falhou, Ignorado, Inválido, Não mapeado), **motivo do erro** quando houver e **data de processamento**.

### Filtros e exportação

* **Tipo de evento**, **campanha**, **status** e **atribuição** (todos, somente atribuídos ou somente não atribuídos);
* Busca por **ID do evento** ou **ctwa_clid**;
* **Exportação** — exporta os eventos filtrados (a exportação pode ser limitada aos primeiros eventos do filtro; refine o período para o restante).

### Gráficos

* **Eventos por dia**, **por campanha** e **Atribuídos x não atribuídos**.

---

## 🆘 Problemas comuns

**"A aba Conversões automáticas está vazia."**
Os eventos aparecem quando a Meta envia `automatic_events` para as conexões **WABA** da empresa. Se a campanha não utiliza a API Oficial ou a função não está habilitada na conta, a aba permanece vazia — os dados das Conversas/Anúncios continuam válidos.

**"Um evento aparece como Não mapeado."**
A Meta enviou um tipo de evento que o sistema ainda não mapeia. Ele é gravado para histórico/auditoria, mas **não contam** como lead nem compra até receber mapeamento.

**"A conversa do anúncio não aparece no relatório."**
Confira o **período** e se o ticket realmente teve origem em anúncio (tipo de origem). Um contato que falou com você por outros botões fora do anúncio não entra na contagem.
