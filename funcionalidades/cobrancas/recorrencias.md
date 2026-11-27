---
icon: arrows-rotate
---

# 🔁 Recorrências (mensalidades)

A **recorrência** é um **molde de cobrança**: você cadastra uma vez o que cobrar e de quanto em quanto tempo, e o sistema **gera as faturas sozinho** a cada ciclo.

É o recurso ideal para mensalidades, planos, assinaturas de serviço e aluguéis.

> 💡 **Em palavras simples:** a recorrência não é uma fatura — é a **regra** que cria faturas. Cada fatura gerada é uma cobrança normal, que pode ser enviada, paga ou cancelada como qualquer outra.

***

## 📍 Onde encontrar

**Cobranças** (menu lateral) → aba **Recorrências**.

A lista mostra: **Cliente**, **Descrição**, **Valor**, **Periodicidade**, **Próxima geração**, **Próximo vencimento** e **Status**, além do menu **⋮**.

No topo, filtre por **Status** (Ativa, Pausada, Encerrada) e por **Cliente**.

> 💡 O **Valor** da lista é o valor de **cada fatura**, calculado a partir dos itens da recorrência (menos desconto, mais acréscimo).

***

## ➕ Criar uma recorrência

Clique em **Nova recorrência**. O formulário tem **três abas**.

### Aba 1 — O que cobrar

São os mesmos campos de uma cobrança, porque é o **molde** da fatura que será gerada:

| Campo | O que é |
| --- | --- |
| **Cliente** | Quem vai receber as faturas. **Na edição não pode ser trocado** — mudaria o destinatário das faturas já geradas |
| **Descrição** | Resumo da cobrança (ex.: "Mensalidade do plano") |
| **Itens** | Descrição, quantidade e valor unitário; pode incluir produtos do catálogo |
| **Desconto / Acréscimo** | Ajustes aplicados em **cada** fatura (permissão de ajustar) |
| **Forma de pagamento** | Fixar uma forma, ou deixar o cliente escolher em cada fatura |
| **Notas internas** | Anotação da equipe, não aparece para o cliente |

O **Total** exibido é o valor previsto de cada ocorrência.

### Aba 2 — Quando gerar

| Campo | O que é |
| --- | --- |
| **Periodicidade** | Semanal, Quinzenal, Mensal, Trimestral, Semestral ou Anual |
| **Primeira geração** | A data de início. A partir dela o sistema calcula os ciclos |
| **Dia da geração** | O dia do mês em que a fatura é criada. Em branco, usa o dia da data de início; em mês mais curto, cai no último dia. Nas periodicidades **semanais** não aparece: a geração segue o **dia da semana** da data de início |

**Vencimento da fatura** — escolha uma das três regras:

| Regra | Como funciona |
| --- | --- |
| **No dia da geração** | A fatura vence no mesmo dia em que foi criada |
| **Em um dia fixo do mês** | Você informa o dia (ex.: todo dia 10). Dia anterior ao da geração vence no mês seguinte |
| **Em um prazo após a geração** | Você informa quantos dias até o vencimento, contados da data de geração |

**Término** — quando a recorrência para:

| Opção | O que acontece |
| --- | --- |
| **Sem término** | Gera indefinidamente até você pausar ou encerrar |
| **Em uma data** | Para de gerar depois da data informada |
| **Após um número de faturas** | Para depois de gerar a quantidade escolhida |

### Aba 3 — Como gerar

| Campo | O que é |
| --- | --- |
| **Aberta, pronta para pagamento** | A fatura já nasce **Em aberto**, com link e pronta para o cliente pagar |
| **Preliminar (rascunho)** | A fatura nasce como **Rascunho**, para você revisar e enviar à mão |
| **Só gerar a próxima quando a anterior estiver paga** | Com a fatura anterior em aberto, a geração espera o pagamento |
| **Enviar a fatura automaticamente** | Usa o modelo de mensagem configurado em **Configurações → Automação** |
| **Canal de envio** | Qual número/ canal envia a fatura. Em branco, usa o canal do último atendimento do cliente |

> ⚠️ **Fatura preliminar não é enviada**: o envio automático fica desligado enquanto a geração for **rascunho**, porque ela precisa ser revisada antes. O próprio formulário avisa isso.

> 💡 Esses três últimos campos são **padrões**: a aba **Automação** das configurações define o que já vem marcado nas recorrências novas, e cada recorrência pode decidir diferente.

### Salvar

Clique em **Salvar**. O sistema responde **"Recorrência salva"** e a lista é atualizada.

***

## 📋 A lista e o progresso

Na coluna **Status** aparece o selo da recorrência e, quando há limite de faturas, o progresso:

> _"3 de 12 faturas"_

As colunas **Próxima geração** e **Próximo vencimento** mostram as datas que o sistema vai usar no próximo ciclo.

***

## 🧾 Ver as faturas geradas

No menu **⋮**, escolha **Ver faturas**. A janela lista todas as faturas criadas por aquela recorrência, com:

* **Nº**, **Gerada em**, **Vencimento**, **Valor** e **Status**;
* o ícone de **Histórico**, que abre a linha do tempo daquela fatura (inclusive os envios automáticos).

> 💡 Se ainda não houver fatura, aparece _"Nenhuma fatura gerada ainda"_.

***

## ⏸️ Pausar, reativar e encerrar

| Ação | O que acontece |
| --- | --- |
| **Pausar** | A recorrência para de gerar faturas enquanto estiver pausada |
| **Reativar** | Volta a gerar. **As gerações do período em que ficou pausada são puladas** — não são emitidas de uma vez |
| **Encerrar** | Para **definitivamente**. As faturas já geradas continuam existindo como histórico, mas a recorrência **não pode ser reativada** |

Ao encerrar, o sistema pede confirmação explicando que a recorrência deixa de gerar faturas e não poderá ser reativada.

> 💡 Pausar é a opção para "dar uma pausa e continuar depois". Encerrar é para "acabou".

***

## 🏷️ Status da recorrência

| Status | Significado |
| --- | --- |
| **Ativa** | Gerando faturas normalmente |
| **Pausada** | Parada temporariamente |
| **Encerrada** | Finalizada; não pode ser reativada nem editada |

> ⚠️ Recorrência **encerrada não pode ser alterada**.

***

## ✏️ Editar

No menu **⋮**, escolha **Editar** (disponível enquanto a recorrência não estiver encerrada). As três abas voltam preenchidas com o que está salvo.

A alteração vale para as **próximas** faturas: as já geradas não mudam.

***

## 💡 Boas práticas

* Use **descrição clara** (ex.: "Mensalidade — Plano Pro"): ela aparece na fatura e nos relatórios;
* Se o cliente precisa pagar antes de receber o próximo ciclo, ligue **Só gerar a próxima quando a anterior estiver paga**;
* Para revisar cada fatura antes de cobrar, gere como **preliminar** e envie à mão;
* Confira o **canal de envio** quando a empresa tem mais de um número conectado.

***

## ❓ Perguntas frequentes

### A recorrência gera a fatura mesmo se o cliente estiver devendo a anterior?

Sim, **a menos** que a opção **"Só gerar a próxima quando a anterior estiver paga"** esteja ligada.

### Pausei por dois meses. Vou receber as faturas atrasadas ao reativar?

Não. As gerações do período pausado são **puladas**.

### Posso mudar o cliente de uma recorrência?

Não. O cliente é fixo depois de criado — para outro cliente, crie outra recorrência.

### Encerrei por engano. Dá para voltar?

Não. O encerramento é definitivo. Crie uma nova recorrência para o mesmo cliente.

### Onde vejo quanto as recorrências vão render?

No relatório **Recorrências e previsão** — veja [Relatórios de cobranças](relatorios-de-cobrancas.md).

***

## 👣 Próximos passos

* [Avisos e lembretes](avisos-e-lembretes.md) — as mensagens enviadas quando a fatura é gerada, vence ou é paga;
* [Despesas](despesas.md) — a versão "do outro lado": contas que se repetem;
* [Relatórios de cobranças](relatorios-de-cobrancas.md) — previsão de receita e despesa recorrente.
