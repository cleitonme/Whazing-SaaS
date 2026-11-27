---
icon: chart-line
---

# 📊 Relatórios de cobranças

Os números do módulo ficam em **Relatórios**, na seção **Financeiro**. São quatro relatórios:

| Relatório | Para que serve |
| --- | --- |
| **Relatório Financeiro da Empresa** | Quanto entrou, quanto está em aberto, quanto venceu e quanto saiu em despesas |
| **Orçado vs realizado (Orçamentos)** | Quanto foi proposto, quanto virou cobrança e quanto foi recebido |
| **Recorrências e previsão** | Quanto as mensalidades vão render (e custar) nos próximos meses |
| **Produtos em faturas e orçamentos** | Quais produtos foram faturados, em que quantidade e quanto foi pago |

> 💡 Para abrir: menu lateral **Relatórios** → seção **Financeiro** → clique no cartão do relatório. Veja também o guia geral de [Relatórios](../relatorios/README.md).

***

## 💵 Relatório Financeiro da Empresa

É o retrato do caixa no período.

### Filtros

| Filtro | O que é |
| --- | --- |
| **Início / Final** | O período. Vem preenchido com o mês atual |
| **Categoria** | Opcional: filtra as despesas por categoria |

### Indicadores

| Indicador | O que mostra |
| --- | --- |
| **Recebidos** | Total recebido no período, com a quantidade |
| **Em aberto** | Faturas aguardando pagamento |
| **Vencidos** | Faturas em aberto com vencimento passado |
| **Despesas** | Total de despesas lançadas |
| **Previsto** | Despesas lançadas e ainda não pagas |
| **Realizado** | Despesas efetivamente pagas, com o percentual sobre o previsto e a diferença |
| **Líquido do caixa** | O resultado do período |

> 💡 No **Realizado**, gastar **menos** do que o previsto é o resultado bom — por isso a seta é positiva quando a diferença é negativa.

### Gráfico

**Recebido e despesas por mês** — dá para alternar entre barras, barras empilhadas, linha e área.

### Tabelas

* **Cobranças**: Recebidos no período, Em aberto, Vencidos e Cancelados, com quantidade e valor;
* **Despesas**: Total, Pagas, Em aberto, Vencidas e Canceladas (as canceladas aparecem só na contagem);
* **Despesas por categoria**: Pagas, Em aberto, Vencidas e Total de cada categoria.

> 💡 **Como as datas são lidas:** os **recebidos** contam pela **data do pagamento**; **em aberto** e **vencidos**, pelo **vencimento**.

### Exportar

O botão de exportação gera um arquivo Excel com três abas: **Resumo**, **Por categoria** e **Por mês**.

***

## 🧮 Orçado vs realizado (Orçamentos)

Mostra o que a empresa propôs e o que realmente aconteceu.

### Filtros

**Início** e **Final** (o período; vem com o mês atual).

### Indicadores

| Indicador | O que mostra |
| --- | --- |
| **Orçado** | Total dos orçamentos emitidos no período |
| **Convertido** | Total que virou cobrança, com a taxa de conversão |
| **Recebido** | Total efetivamente recebido |
| **Diferença** | Recebido menos orçado, com o percentual |
| **Aguardando resposta** | Orçamentos enviados sem resposta |
| **Expirados** | Orçamentos que passaram da validade |
| **Perdidos** | Cancelados sem conversão |

### Gráfico

**Orçado, convertido e recebido por mês**.

### Tabela de documentos

Cada linha é um orçamento, com: **#**, **Cliente**, **Emissão**, **Validade**, **Conversão**, **Status**, **Orçado**, **Faturado**, **Recebido** e **Diferença** (com percentual). As colunas podem ser ordenadas.

> ⚠️ A tabela mostra os **500 orçamentos mais recentes** do período. Os totais e o gráfico consideram **o período inteiro**.

> 💡 O **status** do documento muda na mesma linha quando ele é convertido. O valor "orçado" é o do **momento da conversão** — por isso a diferença só aparece se a cobrança foi editada depois.

### Exportar

Excel com três abas: **Resumo**, **Orçamentos do período** e **Por mês**.

***

## 📈 Recorrências e previsão

Projeta a receita e a despesa **recorrente** para os próximos meses.

### Filtro

**Previsão** — horizonte de **3, 6, 12 ou 24 meses**.

### Indicadores

| Indicador | O que mostra |
| --- | --- |
| **Receita prevista no mês** | Quanto as recorrências devem gerar no mês, com o número de recorrências ativas |
| **Despesa prevista no mês** | Quanto as despesas recorrentes devem custar no mês |
| **Saldo previsto no mês** | Receita prevista menos despesa prevista |
| **Já recebido das recorrências** | Faturas geradas e pagas, em todo o histórico |

### Gráfico

**Previsão de receita e despesa recorrente**, com três séries: receita recorrente, despesa recorrente e despesa estimada (a marcar).

### Tabelas

**Receita recorrente** — Cliente, Descrição, Status, Periodicidade, Valor por ocorrência, Próxima geração, Próximo vencimento, Recebido, Em aberto e Vencido.

**Despesa recorrente** — Descrição, Categoria, Fornecedor, Periodicidade, Valor por ocorrência, Próxima geração, Próximo vencimento, Lançado e Pago.

**A marcar** — sugestões de despesas que se repetem: Descrição, Categoria, Fornecedor, Meses, Valor médio e Último lançamento.

> ⚠️ **A tabela "A marcar" é uma sugestão**, calculada pela repetição de **descrição, categoria e fornecedor nos últimos 6 meses** — não é uma recorrência cadastrada. A série "estimada" do gráfico usa a média dessas despesas e serve para você **marcá-las como recorrentes**, não como valor confirmado.

> 💡 A previsão usa o **valor do molde** e as **mesmas datas** que a geração automática vai usar. Ela **não desconta inadimplência**, e uma recorrência configurada para **só gerar com a anterior paga** pode não gerar a ocorrência prevista.

### Exportar

Excel com quatro abas: **Previsão**, **Receitas**, **Despesas** e **A marcar**.

***

## 📦 Produtos em faturas e orçamentos

Mostra o desempenho de cada produto do catálogo nos documentos do período.

### Filtros

| Filtro | O que é |
| --- | --- |
| **Início / Final** | O período |
| **Situação** | Rascunho, Orçamento, Em aberto, Paga ou Cancelada |

### Totais do topo

* **Produtos no período** — quantos produtos diferentes apareceram;
* **Total faturado** — soma dos valores;
* **Total pago** — soma do que já foi pago.

### Tabela

**Produto**, **Código**, **Categoria**, **Qtd.**, **Qtd. paga**, **Faturado**, **Pago**, **Documentos** e **Último uso**. As colunas de produto, quantidade, faturado e documentos podem ser ordenadas.

Clique na seta da linha para **ver os documentos** daquele produto: número do documento, cliente, situação, quantidade, valor e data de criação.

> 💡 Sem produtos no período, a tela avisa: _"Nenhum produto do catálogo foi usado no período."_

### Exportar

O Excel traz **todos** os produtos do filtro, não só a página visível.

***

## ❓ Perguntas frequentes

### Por que os números do relatório não batem com a lista de cobranças?

Confira o **período** e o **campo de data** usado. No Financeiro da Empresa, recebidos contam pela **data do pagamento** e em aberto/vencidos pelo **vencimento**. A lista de cobranças, por padrão, filtra pela **data de criação**.

### As despesas canceladas entram nos totais?

Não. Elas aparecem apenas na **contagem**, para você saber que existiram.

### O relatório de orçamentos mostra todos os orçamentos do período?

A tabela mostra os **500 mais recentes**; os indicadores e o gráfico usam o período inteiro. O Excel exporta o que está na tabela.

### A previsão considera clientes que não pagam?

Não. A previsão é bruta: usa o valor e as datas do molde.

### Preciso de permissão especial para ver os relatórios?

Os relatórios ficam em **Relatórios**, que é uma área administrativa. As ações dentro do módulo (criar, editar, dar baixa) continuam dependendo das permissões de Cobranças.

***

## 👣 Próximos passos

* [Recorrências](recorrencias.md) — ajustar o que a previsão vai calcular;
* [Despesas](despesas.md) — lançar as contas que entram no relatório financeiro;
* [Relatórios](../relatorios/README.md) — os demais relatórios do sistema.
