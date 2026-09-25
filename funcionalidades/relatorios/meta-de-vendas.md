---
icon: target
---

# Meta de Vendas

O relatório **Meta de Vendas** mostra, mês a mês, **quanto sua equipe ganhou** comparado com a **meta definida**: o valor ganho, o **percentual atingido**, quanto **falta** para bater a meta — e uma radiografia completa do funil comercial.

> 💡 **De onde vêm os valores?** Das **negociações do Kanban**: cada contato/card com um **valor** cadastrado é uma negociação, e quando ela chega à etapa marcada como **"ganha"**, o valor dela entra na contagem do mês. Por isso, para o relatório funcionar bem, o Kanban precisa ter valores e as etapas de ganho/perda corretamente configuradas.

## 📍 Onde encontrar

**Relatórios** → seção **Financeiro** → **"Meta de Vendas"**.

***

## 📅 A página (mês e ano)

No topo, escolha o **Mês** e o **Ano** — tudo na tela se atualiza para o período selecionado.

### 🎯 Definir a meta

Só **administradores** veem o botão **"Definir meta"**:

1. Clique em **"Definir meta"**.
2. Confirme o **mês** e o **ano**.
3. Informe o **"Valor da meta"**.
4. Clique em **Salvar** (confirmação: **"Meta salva"**).

Na mesma janela aparece a lista das metas já cadastradas, cada uma com botão de **excluir** (com confirmação). Definir uma meta para um mês que já tem meta **atualiza** o valor.

### 📈 O progresso do mês

O cartão no topo mostra a situação da meta:

* Com meta definida: **Ganho / Meta** (ex.: R$ 35.000 / R$ 50.000), o **percentual atingido**, uma **barra de progresso** colorida (laranja até 50%, azul até 99%, verde quando atinge 100%) e a frase **"Faltam {valor} para atingir a meta"** — ou **"Meta atingida"** 🎉 quando a barra completa.
* Sem meta cadastrada: aviso **"Nenhuma meta cadastrada para este mês"** — e, mesmo assim, mostra o valor **ganho no mês**.

### 📌 Indicadores (cartões de resumo)

| Indicador | O que mostra |
| --- | --- |
| **Meta** | O valor definido para o mês |
| **Ganho** | Soma dos valores das negociações **ganhas** no mês |
| **Atingido** | Percentual da meta alcançado |
| **Restante** | Quanto falta para bater a meta |
| **Negociações ganhas** | **Quantidade** de negociações que chegaram à etapa ganha |

### 🗂️ Ganho por kanban

Separa o valor ganho por origem: **Kanban Pro** e **Kanban CRM** (o Kanban dos contatos), cada um com valor e quantidade de negociações — útil quando a empresa usa os dois.

***

## 🚀 Performance comercial (recorte do mês)

* **Ranking de vendedores** — tabela com cada vendedor, quantas negociações **ganhas** e o **valor ganho**. Negociação sem responsável aparece como **"Sem responsável"**.
* **Origem dos leads** — de onde vieram os clientes que geraram ganhos (WhatsApp, Instagram, TikTok...), com quantidade e valor. O sistema considera o canal do primeiro atendimento do contato; negociações sem atendimento aparecem como **"Sem origem"**.

## 🧭 Pipeline (posição atual)

Uma foto de **como está o funil hoje**, no período selecionado:

* **Valor por etapa** — cada etapa do Kanban com quantidade de negociações, valor total, quantas estão **abertas** e o valor em aberto. As etapas marcadas como ganha/perdida ganham a etiqueta **"Ganha"** 🟢 ou **"Perdida"** ⬜ — é ali que você confere se a configuração do funil está certa.
* **Abertos por vendedor** — negociações **ainda em aberto** por vendedor (quantidade e valor), para saber com quem está cada oportunidade e prever o faturamento dos próximos meses.

***

## ⚙️ Como o relatório se conecta ao Kanban

Três configurações do Kanban alimentam este relatório:

1. **Valor da negociação** — o valor em dinheiro cadastrado no contato/card (no Kanban, o campo de valor da negociação; veja [Kanban](../kanban.md)).
2. **Etapa de negociação ganha** — quando uma negociação **chega a essa etapa**, o valor dela **passa a contar para o resultado do mês**. Veja como marcar em [Lane de negociação ganha e perdida](../kanban.md#️-lane-de-negociação-ganha-e-perdida) (Kanban) e em [Etapas do Kanban Pro](../kanban-pro/etapas-colunas.md#etapa-de-negociação-ganha-ou-perdida).
3. **Etapa de negociação perdida** — as negociações que chegam lá **saem do pipeline em aberto** e alimentam os indicadores de perda do Kanban.

> ⚠️ **Importante:** o mês contabilizado é o da **vitória** (quando a negociação chega à etapa ganha), não o da criação. Uma negociação criada em março e ganha em abril entra no resultado de **abril**.

**Sugestão de print:** topo do relatório **Meta de Vendas** com o cartão de progresso (Ganho/Meta, percentual e barra) e os cartões de indicadores.

**Onde colocar:** logo após "A página (mês e ano)".

**Objetivo:** mostrar o resultado visual mais importante do relatório — quanto falta para a meta e como o sistema apresenta isso.

***

> 💡 **Rotina sugerida:** defina a meta no começo do mês, acompanhe o percentual **semanalmente** com o ranking de vendedores e use **"Abertos por vendedor"** para prever o mês seguinte — quem tem muito valor em aberto pode bater a meta se bem acompanhado.
