---
icon: receipt
---

# 💸 Despesas

A aba **Despesas** registra o dinheiro que **sai**: contas de infraestrutura, marketing, impostos, serviços, pessoal e outras.

Ela não tem relação com a cobrança do cliente — serve para você enxergar o **resultado real** da empresa: o que entrou (cobranças recebidas) menos o que saiu (despesas pagas).

> 💡 **Em palavras simples:** cobrança é dinheiro a receber; despesa é dinheiro a pagar.

***

## 📍 Onde encontrar

**Cobranças** (menu lateral) → aba **Despesas**.

No topo, os filtros são:

| Filtro | Para que serve |
| --- | --- |
| **Status** | Em aberto, Vencida, Paga ou Cancelada |
| **Categoria** | Infraestrutura, Marketing, Pessoal, Impostos, Serviços ou Outros |
| **De / Até** | Período |
| **Buscar descrição ou fornecedor** | Busca livre por texto |

A lista mostra **Descrição**, **Categoria**, **Fornecedor**, **Vencimento**, **Pagamento**, **Valor** e **Status**, além do menu de ações **⋮**.

> 💡 Na coluna Descrição podem aparecer dois ícones:
> * 🔄 **Despesa recorrente** — esta é a despesa **original**, que gera as repetições;
> * 📄 **Lançamento N de uma despesa recorrente** — esta linha foi **gerada** pela repetição.

***

## ➕ Nova despesa

Clique em **Nova despesa** e preencha:

| Campo | O que é |
| --- | --- |
| **Descrição** | O que é a despesa (obrigatório) |
| **Categoria** | Infraestrutura, Marketing, Pessoal, Impostos, Serviços ou Outros |
| **Valor** | Quanto foi gasto — precisa ser **maior que zero** |
| **Fornecedor** | Com quem foi gasto (opcional) |
| **Data da despesa** | Quando o gasto aconteceu |
| **Vencimento** | Quando ela deve ser paga |
| **Data do pagamento** | Preencha se já estiver paga; em branco, ela fica em aberto |
| **Observações** | Anotação livre |

Clique em **Salvar**. O sistema responde **"Despesa salva"**.

> 💡 O status **Vencida** é calculado: é uma despesa em aberto cujo vencimento já passou.

***

## 🔁 Repetir esta despesa

Para contas que se repetem (aluguel, internet, assinaturas), ligue **Repetir esta despesa**. Os campos são:

| Campo | O que é |
| --- | --- |
| **Periodicidade** | De quanto em quanto tempo a despesa se repete |
| **Dia do lançamento** | O dia do mês do lançamento. Em branco, usa o dia da data da despesa |
| **Repetir até** | Data final da repetição |
| **Máximo de lançamentos** | Quantas vezes ela se repete, **contando esta despesa**. Em branco, repete sem fim |

> ⚠️ Cada lançamento gerado é uma **despesa própria**, que pode ser paga ou cancelada separadamente. Nesses lançamentos aparece o aviso: _"Esta despesa foi gerada por uma repetição. A periodicidade é alterada na despesa original."_ Ou seja: para mudar a regra, edite a **despesa original**.

***

## ✅ Pagar uma despesa

1. No menu **⋮** da linha, escolha **Pagar**;
2. confirme a **Data do pagamento**;
3. clique em **Confirmar pagamento**.

O sistema registra que a despesa foi paga **fora do sistema** — é um registro, não um pagamento de verdade.

> ⚠️ O pagamento é **sempre integral** — não existe pagamento parcial.

Se a data do pagamento for posterior ao vencimento, a janela avisa: _"Venceu em ...: será registrada como paga com atraso."_ O aviso é informativo; a despesa é marcada como paga normalmente.

***

## 🚫 Cancelar uma despesa

No menu **⋮**, escolha **Cancelar** e confirme. O motivo é opcional.

A despesa cancelada **sai dos totais do relatório financeiro** — ela continua na lista, para histórico, mas não soma valores.

> 💡 Só é possível pagar, editar ou cancelar despesas **em aberto** ou **vencidas**. Despesa paga ou cancelada fica fechada.

***

## 📊 Onde as despesas aparecem nos relatórios

As despesas alimentam dois relatórios:

* **Financeiro da Empresa** — despesas por status, por categoria e por mês, junto com as cobranças;
* **Recorrências e previsão** — despesas recorrentes e a sugestão de despesas "A marcar".

Veja [Relatórios de cobranças](relatorios-de-cobrancas.md).

***

## ❓ Perguntas frequentes

### Despesa paga pode ser alterada?

Não. Paga ou cancelada, a despesa fica fechada. Cancele e lance outra se precisar corrigir.

### A repetição gera todas as despesas de uma vez?

Não. Cada lançamento nasce no seu ciclo — a repetição é uma regra, não um lote.

### Posso mudar a periodicidade de um lançamento?

Não. A periodicidade se altera na **despesa original** (a que tem o ícone 🔄).

### Despesa entra no cálculo do cliente?

Não. Despesas são da empresa e não aparecem para o cliente em nenhum momento.
