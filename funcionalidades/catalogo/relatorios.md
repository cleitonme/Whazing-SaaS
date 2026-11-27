# Relatórios do Catálogo

O catálogo aparece em **dois relatórios** e em uma **aba dentro do atendimento**. Esta página explica cada um.

---

## 🛍️ Vendas da Recepção Inteligente

Mostra **cada produto que o cliente escolheu** durante o atendimento da IA, se a venda foi encaminhada a um atendente e o que ainda está em aberto.

### 📍 Onde encontrar

Menu **Relatórios** → seção **Atendimento** → cartão **Vendas da Recepção Inteligente**.

### 🔎 Filtros

| Filtro | O que faz |
| --- | --- |
| **Início** e **Final** | Período analisado (vem preenchido com o mês atual) |
| **Fila** | Mostra só as vendas de uma fila |
| **Situação** | **Em aberto**, **Atendida** ou **Perdida** |
| **Transferência** | **Encaminhada** (foi para um atendente) ou **Sem atendente** |

Ao mudar um filtro, o relatório é recarregado automaticamente.

### 📋 Colunas

| Coluna | O que mostra |
| --- | --- |
| **Data e hora** | Quando a escolha aconteceu |
| **Cliente** | Nome e telefone do contato |
| **Produto** | Produto escolhido |
| **Qtd** | Quantidade |
| **Valor** | Preço do produto na moeda cadastrada |
| **Fila** | Fila do atendimento |
| **Encaminhamento** | Se foi encaminhada, com o atendente ou a fila de destino; senão, **Sem atendente** |
| **Situação** | Em aberto, atendida ou perdida — e quem tratou |
| **Ações** | Abrir o atendimento, marcar como atendida, marcar como perdida ou voltar para em aberto |

As colunas **Data e hora**, **Produto**, **Valor** e **Situação** podem ser ordenadas.

### ⚠️ Aviso de vendas em aberto

No topo aparece um aviso quando existem vendas **em aberto**, com a quantidade e a soma dos valores:

> _"X venda(s) em aberto, somando R$ … Ninguém assumiu esses atendimentos ainda."_

Use esse aviso para priorizar o contato com esses clientes.

### ✅ Marcar o resultado da venda

* **Marcar como atendida** — o cliente comprou (ou a venda foi concluída);
* **Marcar como perdida** — o cliente desistiu;
* **Voltar para em aberto** — reabre a venda.

Ao marcar, o relatório é recarregado e o total em aberto é recalculado.

### 📤 Exportar para Excel

O botão de exportação gera uma planilha com **todas as páginas do filtro atual** (até 20 mil linhas). O arquivo inclui também telefone, quem tratou e o número do atendimento.

> 💡 Se não houver vendas no período, a tabela mostra **"Nenhuma venda no período escolhido"**.

> 🔐 No backend, este relatório é restrito a **administradores e supervisores**.

---

## 💬 Aba Vendas no atendimento

A venda escolhida pela IA também aparece **dentro do atendimento**, no painel do contato.

### 📍 Onde encontrar

Abra um atendimento e clique na aba **Vendas** no painel lateral do contato.

> 💡 A aba só aparece quando existe venda registrada pela IA e o usuário tem a permissão **Registrar venda**.

### O que ela mostra

Para cada venda:

* **produto** e **situação** (Em aberto, Atendida ou Perdida);
* **valor**;
* **quem confirmou** e **quando**;
* campo de **quantidade** (de 1 a 9.999);
* botões **Comprou** e **Cancelou**;
* botão para **voltar a venda para em aberto**;
* **histórico** das alterações, quando existir.

No topo, o botão **Gerar cobrança** aparece para quem tem permissão de cobranças e abre o formulário de cobrança vinculado ao **contato** e ao **atendimento**.

> 💡 As ações são registradas no histórico — inclusive quando alguém reabre uma venda que já tinha sido marcada.

---

## 🧾 Produtos em faturas e orçamentos

Mostra **quanto cada produto do catálogo saiu em faturas e orçamentos** no período, quanto já foi pago e em quais documentos ele foi usado.

> ℹ️ Este relatório vem das **cobranças** (faturas e orçamentos). Ele **não** é o mesmo relatório de vendas da IA.

### 📍 Onde encontrar

Menu **Relatórios** → seção **Financeiro** → cartão **Produtos em faturas e orçamentos**.

### 🔎 Filtros

| Filtro | O que faz |
| --- | --- |
| **Início** e **Final** | Período analisado (vem preenchido com o mês atual) |
| **Situação** | **Rascunho**, **Orçamento**, **Em aberto**, **Pago** ou **Cancelado** |

### 🔢 Cartões de totais

| Cartão | O que mostra |
| --- | --- |
| **Produtos no período** | Quantos produtos diferentes foram usados |
| **Total faturado** | Soma dos valores dos itens no período |
| **Total pago** | Parte já paga |

### 📋 Colunas

| Coluna | O que mostra |
| --- | --- |
| **Produto** | Nome do produto |
| **Código** | SKU do produto |
| **Categoria** | Categoria cadastrada |
| **Qtd.** | Quantidade usada |
| **Qtd. paga** | Quantidade em documentos pagos |
| **Faturado** | Valor total dos itens |
| **Pago** | Valor já pago |
| **Documentos** | Quantidade de faturas/orçamentos em que o produto aparece |
| **Último uso** | Data do uso mais recente |

As colunas **Produto**, **Qtd.**, **Faturado** e **Documentos** podem ser ordenadas.

### 🔍 Ver os documentos de um produto

Clique na seta ao lado do produto para abrir o **histórico** com os documentos em que ele foi usado:

* número do documento;
* cliente;
* situação (com **vencida** e **expirado** quando for o caso);
* quantidade;
* valor;
* data de criação.

> 💡 O histórico é carregado na hora, apenas para o produto que você abrir.

### 📤 Exportar para Excel

O botão de exportação gera uma planilha com **todas as páginas do filtro atual**.

> 💡 Se nenhum produto do catálogo foi usado no período, a tabela mostra **"Nenhum produto do catálogo foi usado no período."**

---

## ❓ Perguntas frequentes

**Qual a diferença entre os dois relatórios?**
O de **Vendas da Recepção Inteligente** mostra o que o cliente escolheu durante a conversa com a IA. O de **Produtos em faturas e orçamentos** mostra o que foi efetivamente usado em cobranças.

**Por que a aba Vendas não aparece no atendimento?**
Porque não há venda registrada pela IA para aquele contato ou o seu usuário não tem a permissão **Registrar venda**.

**O relatório de vendas da IA mostra vendas de qualquer período?**
Não. Ele usa o período dos filtros **Início** e **Final**.

**Posso exportar tudo?**
Sim, o Excel inclui todas as páginas do filtro atual, respeitando o limite de linhas da exportação.

**O valor da venda pode ter outra moeda?**
Sim. Cada linha usa a moeda do produto. No aviso de vendas em aberto, a soma usa a moeda da primeira linha — por isso, relatórios com moedas misturadas devem ser lidos com atenção.

**Quem pode ver o relatório de vendas da IA?**
No backend, apenas **administradores e supervisores**. A aba Vendas do atendimento depende da permissão **Registrar venda**.

---

## 👣 Próximos passos

* [Relatórios (visão geral)](../relatorios/README.md)
* [Catálogo na Recepção Inteligente](../../integracoes/inteligencia-artificial/recepcao-inteligente/catalogo-na-recepcao-inteligente.md)
* [Produtos e Coleções](produtos-e-colecoes.md)
