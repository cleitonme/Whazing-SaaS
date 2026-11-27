---
icon: file-contract
---

# 📄 Orçamentos

O **orçamento** é uma **proposta**: ele mostra ao cliente o que será feito e quanto vai custar, mas **não é uma dívida**. Nada é cobrado enquanto o documento é um orçamento.

Quando o cliente aprova, você **converte** o orçamento em **cobrança** — aí sim nasce a fatura com vencimento e link de pagamento.

> 💡 **Em palavras simples:** orçamento = "quanto custa"; cobrança = "pague até tal dia".

***

## 📍 Onde encontrar

**Cobranças** (menu lateral) → aba **Orçamentos**.

A lista mostra: **Cliente**, **Descrição**, **Status**, **Válido até**, **Valor** e o menu de ações **⋮**.

No topo, os filtros são **Status**, **Cliente**, **De** e **Até**.

***

## ➕ Criar um orçamento

1. Abra a aba **Orçamentos** e clique em **Novo orçamento**;
2. escolha o **Cliente** (ou crie dentro do atendimento, na aba Cobranças → **Nova → Novo orçamento**);
3. preencha **Descrição** e os **Itens** — igual a uma cobrança (veja [Como criar e enviar uma cobrança](como-criar-e-enviar-uma-cobranca.md));
4. informe a **Validade**;
5. clique em **Salvar** ou **Salvar e enviar orçamento**.

### A diferença nos campos

| Campo | Cobrança | Orçamento |
| --- | --- | --- |
| **Vencimento** | Existe: é a data de pagar | **Não existe** — o vencimento nasce na conversão |
| **Válido até** | Não existe | Até quando **o preço** vale para o cliente |
| **Forma de pagamento** | Pode ser fixada | **Não existe** — é escolhida quando virar cobrança |

> 💡 A validade fala do **preço**, não do pagamento. É a resposta para "até quando você mantém esse valor?".

O desconto, o acréscimo e as notas internas funcionam igual aos da cobrança, e o total também é calculado pelo sistema.

***

## 📤 Enviar o orçamento

No menu **⋮** da linha, escolha **Enviar**.

A janela é a mesma do envio de cobrança, mas usa a **mensagem padrão do orçamento** (configurada em **Configurações → Envio**). Ela é separada de propósito: uma proposta não deve falar de pagamento nem de vencimento.

O envio **não abre cobrança** e **não gera dívida**: o documento continua sendo orçamento e ganha apenas o link da proposta.

> 💡 Se não houver atendimento aberto, vale a mesma regra da cobrança: o sistema avisa e devolve o link para você copiar.

***

## 👀 O que o cliente vê

A página pública do orçamento mostra a proposta com os itens, o total e a validade, com o aviso:

> _"Este é um orçamento, não uma cobrança: nada é cobrado por esta página."_

No fim da página o cliente escolhe:

* **Aprovar** — o sistema avisa a empresa;
* **Recusar** — o sistema avisa a empresa.

Antes de confirmar, o sistema avisa que **a resposta não pode ser alterada depois**.

> ⚠️ Se a validade vencer, a página informa que o orçamento expirou e pede para o cliente falar com a empresa para receber uma nova proposta.

***

## 🏷️ Status do orçamento

| Status | Quando aparece |
| --- | --- |
| **Orçamento** | Criado, ainda sem envio |
| **Aguardando resposta** | Enviado ao cliente, sem aprovação nem recusa |
| **Aprovado pelo cliente** | O cliente aprovou na página pública |
| **Recusado pelo cliente** | O cliente recusou na página pública |
| **Expirado** | Passou da validade sem resposta |
| **Cancelada** | Cancelado pela equipe |

> 💡 **Aguardando resposta** e **Expirado** são calculados na hora, a partir do envio e da validade.

***

## 🔄 Converter em cobrança

No menu **⋮** do orçamento, escolha **Converter em cobrança** (ou faça isso na aba Cobranças do atendimento, quando o cliente aprovar na conversa).

A janela pede:

| Campo | O que é |
| --- | --- |
| **Vencimento do pagamento** | **Obrigatório** — a data em que o cliente deve pagar |
| **Validade** | A validade do orçamento; pode ser estendida aqui |

Ao confirmar:

* a **cobrança nasce em aberto** e passa a receber lembretes a partir do vencimento;
* o documento muda de status na **mesma linha** — ele deixa de ser orçamento e vira cobrança, e passa a aparecer na aba **Cobranças**;
* a validade continua sendo a do orçamento.

### Se a validade já venceu

O sistema bloqueia a conversão e avisa: _"Este orçamento está expirado. Estenda a validade para poder converter."_ Basta informar uma nova validade na própria janela de conversão e confirmar de novo.

> ⚠️ Por que o vencimento é obrigatório? Uma cobrança sem vencimento nunca vence e não entra na régua de lembretes automáticos.

***

## 🚫 Cancelar um orçamento

No menu **⋮**, escolha **Cancelar**. O motivo é opcional e fica no histórico.

Orçamento cancelado não pode ser convertido nem recebe avisos.

***

## 🔔 Orçamento não recebe aviso de cobrança

Os avisos de cobrança (fatura gerada, lembrete, atraso, pagamento confirmado) são **só de fatura**. Se você tentar enviar um aviso para um orçamento, o sistema avisa: _"Este documento é um orçamento e não recebe avisos de cobrança. Converta em cobrança primeiro."_

Para cobrar o cliente, use o envio do orçamento ou converta em cobrança.

***

## 📊 Acompanhar o resultado

O relatório **Orçado vs realizado (Orçamentos)** mostra quanto foi orçado, quanto virou cobrança e quanto foi efetivamente recebido — veja [Relatórios de cobranças](relatorios-de-cobrancas.md).

***

## ❓ Perguntas frequentes

### O orçamento reserva o preço?

Ele registra o preço e a validade. Depois de convertido, é a cobrança que vale.

### Cliente aprovou na conversa, e agora?

Converta em cobrança informando o vencimento — pode ser pela aba Orçamentos ou pela aba Cobranças do atendimento.

### Posso editar um orçamento já enviado?

Sim, enquanto ele existir como orçamento. Depois da conversão, valem as regras de edição da cobrança.

### Orçamento aparece na lista de cobranças?

Não. A aba **Cobranças** esconde orçamentos; eles ficam na aba **Orçamentos** até a conversão.
