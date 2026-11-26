---
icon: file-invoice-dollar
---

# Cobranças

O módulo **Cobranças** permite criar e acompanhar **cobranças**, **orçamentos**, **avisos** e **recorrências** (mensalidades) pela API — o mesmo recurso da área de cobranças do sistema.

> 💡 **Em palavras simples:** uma **cobrança** é uma fatura com itens e valor; o **orçamento** (`quote`) é uma versão que ainda não vale como fatura; o **aviso** é a mensagem enviada ao cliente (criada, lembrete, vencida, paga); e a **recorrência** gera faturas automaticamente de tempos em tempos.

> 🔐 Autenticação igual aos demais endpoints: token no cabeçalho `Authorization: Bearer` (veja [Introdução e Autenticação](../introducao-e-autenticacao.md)).

***

## 🧾 Antes de começar: como a cobrança funciona

### Situação (status) de uma cobrança

| Status | Em palavras simples |
| --- | --- |
| `draft` | **Rascunho** — em montagem, ainda não é uma fatura |
| `quote` | **Orçamento** — proposta para o cliente |
| `open` | **Em aberto** — aguardando pagamento |
| `paid` | **Paga** |
| `canceled` | **Cancelada** |

Além do status gravado, a API devolve um `displayStatus`, que pode trazer **`overdue`** (vencida) e **`expired`** (expirada) — esses dois são **calculados na leitura**, não ficam gravados.

### Regras gerais confirmadas nos arquivos

* O **total é sempre calculado pelo backend** a partir dos itens; um `total` enviado por você é **ignorado**.
* `internalNotes` (anotações internas) aparece **apenas no detalhe**; a listagem omite o campo.
* `gatewayData` e `payerSnapshot` **nunca são expostos** pela API.
* O `publicUrl` (link da página pública) **é uma credencial de acesso** — não registre em logs.
* Para usar o módulo, o recurso de cobranças precisa estar no plano: sem ele (ou com usuário do token inativo, ou sem permissão), a resposta é `403`.

***

## 1. Listar cobranças

* **Método:** `GET`
* **Endpoint:** `/charges`

Todos os parâmetros são **opcionais**:

| Parâmetro (query) | Para que serve |
| --- | --- |
| `status` | Filtra por `draft`, `quote`, `open`, `paid`, `canceled`, `overdue` ou `expired` |
| `excludeQuote` | `true` esconde os orçamentos (padrão `false`) |
| `contactId` | Filtra pelo contato |
| `number` | Filtra pelo telefone do contato existente (**ignorado** quando `contactId` é enviado) |
| `ticketId` | Filtra pelo atendimento |
| `recurrenceId` | Filtra pela recorrência |
| `createdByUserId` | Filtra por quem criou |
| `from` / `to` | Período (datas) |
| `periodField` | Qual data o período usa: `createdAt` (padrão), `dueDate` ou `paidAt` |
| `page` | Página (padrão 1) |
| `rowsPerPage` | Itens por página (padrão 20, **máximo 100**) |
| `sortBy` | `createdAt` (padrão), `dueDate`, `total` ou `paidAt` |
| `descending` | `true` (padrão) para ordem decrescente |

> 💡 Quando o número informado **não existe**, a resposta é uma **lista vazia** (não é erro).

**Resposta:** `{ "data": [...], "total": 1, "page": 1, "rowsPerPage": 20 }`.

***

## 2. Criar cobrança

* **Método:** `POST`
* **Endpoint:** `/charges`

A cobrança nasce em **`draft`** (padrão) ou **`quote`**. Criar **não** abre pagamento nem gera link — para isso use `payment-link`, `send` ou `convert`.

**Você precisa informar o cliente de uma destas formas:** `contactId`, `number` ou `ticketId`.

| Campo | Tipo | O que é |
| --- | --- | --- |
| `contactId` | número | Id do contato |
| `number` | texto | Telefone do contato (ex.: `5511999999999`) |
| `ticketId` | número | Atendimento (a cobrança fica vinculada a ele) |
| `status` | texto | `draft` (padrão) ou `quote` |
| `description` | texto | Descrição da cobrança (ex.: "Serviço de manutenção") |
| `dueDate` | data | Vencimento (`AAAA-MM-DD`) |
| `validUntil` | data | Validade do orçamento (`AAAA-MM-DD`) |
| `internalNotes` | texto | Anotação interna (não vai ao cliente) |
| `items` | lista | **Obrigatório** — os itens da cobrança (veja abaixo) |
| `discount` | número | Desconto |
| `surcharge` | número | Acréscimo |
| `fixedProvider` | texto | Força um provedor de pagamento (ex.: `asaas`) |
| `fixedMethod` | texto | Força uma forma (ex.: `pix`) |

**Cada item (`items[]`)** exige `description`; `quantity`, `unitPrice` e `catalogItemId` são opcionais.

```json
{
  "contactId": 1,
  "status": "draft",
  "description": "Serviço de manutenção",
  "dueDate": "2026-11-10",
  "validUntil": "2026-11-05",
  "internalNotes": "Cliente pediu boleto",
  "items": [
    { "description": "Peça de reposição", "quantity": 1, "unitPrice": 150 }
  ]
}
```

**Resposta de sucesso:** `201` com o objeto da cobrança.

***

## 3. Detalhar, editar e cancelar

| Ação | Método e endpoint | O que faz |
| --- | --- | --- |
| Detalhar | `GET /charges/{chargeId}` | Traz a cobrança com **itens** e `internalNotes`; cobrança de outra empresa responde `404` |
| Editar | `PUT /charges/{chargeId}` | `items` é obrigatório; os demais campos são os mesmos da criação (sem `contactId`/`number`/`ticketId`) |
| Cancelar | `POST /charges/{chargeId}/cancel` | Aceita `draft`, `quote` e `open`; body opcional `{ "reason": "Cliente desistiu" }`. **O link público passa a responder 404** |
| Dar baixa manual | `POST /charges/{chargeId}/settle` | Marca uma cobrança **`open`** como paga; a baixa é **sempre integral**. Body opcional: `paidAt` (data), `method` (ex.: `pix`), `note` |
| Converter orçamento | `POST /charges/{chargeId}/convert` | Transforma o orçamento em cobrança; body opcional `dueDate` e `validUntil` |

```json
{
  "paidAt": "2026-10-29",
  "method": "pix",
  "note": "Recebido por PIX manual"
}
```

***

## 4. Formas de pagamento disponíveis

* **Método:** `GET`
* **Endpoint:** `/charges/payment-options`
* **Parâmetro opcional:** `baseTotal` (ex.: `"100.00"`) — valor base para calcular o acréscimo de cada forma

Devolve as formas habilitadas na empresa, com o acréscimo calculado. **Não devolve credencial, webhookToken nem estado do webhook.** Requer permissão `create`.

```json
[
  {
    "provider": "asaas",
    "method": "pix",
    "label": "PIX",
    "baseTotal": 100,
    "feeAmount": 1.99,
    "total": 101.99,
    "requiresPayerDocument": false
  }
]
```

> ⚠️ **Como o acréscimo é calculado** (percentual, faixa, etc.) **não é informado nos arquivos de referência** — a API apenas devolve o valor já calculado.

***

## 5. Gerar o link de pagamento

* **Método:** `POST`
* **Endpoint:** `/charges/{chargeId}/payment-link`

Gera o link público **sem enviar mensagem** ao cliente.

* **Orçamento (`quote`):** apenas **publica o link para leitura**.
* **Rascunho ou cobrança aberta:** abre para pagamento, com as mesmas regras do envio manual (gateway e formas de pagamento), **sem disparar WhatsApp**.
* Com **várias formas habilitadas**, a cobrança no gateway nasce no **primeiro clique do cliente** na página pública.

**Resposta:** `charge`, `publicUrl` e `paymentOptions[]`.

> ⚠️ O `publicUrl` **é uma credencial** — não registre em logs. O formato/validade do link **não é informado nos arquivos de referência**.

***

## 6. Enviar a cobrança pelo WhatsApp

* **Método:** `POST`
* **Endpoint:** `/charges/{chargeId}/send`

| Campo | Tipo | O que é |
| --- | --- | --- |
| `message` | texto | Mensagem enviada junto com o link |
| `useButton` | booleano | Enviar como botão |
| `ctaButtonText` | texto | Texto do botão (ex.: "Ver fatura") |

**Resposta:** `charge`, `publicUrl` e `messageSent`.

> 💡 `messageSent: false` significa que **não havia atendimento aberto/pendente**; nesse caso o link é devolvido para você entregar por conta própria.

***

## 7. Eventos e tentativas de pagamento

| Ação | Método e endpoint | O que traz |
| --- | --- | --- |
| Eventos | `GET /charges/{chargeId}/events` | **Linha do tempo** da cobrança, mais recente primeiro, **até 200 eventos**. Não expõe IP nem payload bruto de webhook |
| Pagamentos | `GET /charges/{chargeId}/payments` | **Tentativas** criadas no gateway, mais recentes primeiro, **até 200** |

Cada tentativa traz `provider`, `method`, `baseAmount`, `feeAmount`, `totalAmount`, `status` (`pending`, `paid`, `canceled`, `failed`), `externalId` e `payUrl`.

***

## 8. Avisos de cobrança

Os avisos são as mensagens automáticas de cobrança. Existem **quatro tipos** (`kind`):

| `kind` | Quando é usado |
| --- | --- |
| `invoice_created` | Cobrança criada |
| `reminder` | Lembrete |
| `overdue` | Cobrança vencida |
| `payment_confirmed` | Pagamento confirmado |

### Prévia do aviso

* **Método:** `GET`
* **Endpoint:** `/charges/{chargeId}/notices/preview`
* **Parâmetro obrigatório:** `kind` (query)

Mostra **a mensagem que seria enviada** e o que precisa ser corrigido antes do envio. A resposta traz `body`, `buttons[]`, `variables`, `whatsappId`/`whatsappName`/`whatsappType`, `enabled` e `issues[]`.

**Problemas que impedem o envio (`issues`):** `canceled`, `quote`, `not_paid`, `no_channel`, `no_link`, `no_content`. Já `disabled` significa apenas que **a automação está desligada**.

### Enviar o aviso

* **Método:** `POST`
* **Endpoint:** `/charges/{chargeId}/notices`
* **Body obrigatório:** `{ "kind": "reminder" }`

**Resposta:** `sent`, `reason`, `error`, `whatsappId` e `preview`.

> 💡 **Reenvio no mesmo minuto** devolve `reason: duplicate` **sem enviar** de novo.

***

## 9. Recorrências (mensalidades)

### Listar e detalhar

| Ação | Método e endpoint | Observação |
| --- | --- | --- |
| Listar | `GET /charges/recurrences` | Filtros opcionais `status` (`active`, `paused`, `finished`), `contactId` e `number` |
| Detalhar | `GET /charges/recurrences/{recurrenceId}` | — |
| Faturas geradas | `GET /charges/recurrences/{recurrenceId}/charges` | Cobranças criadas pela recorrência |

### Criar recorrência

* **Método:** `POST`
* **Endpoint:** `/charges/recurrences`

**Informe o cliente** por `contactId` **ou** `number`. Obrigatórios: `items`, `frequency` e `startDate`.

| Campo | Tipo | O que é |
| --- | --- | --- |
| `items` | lista | Itens (cada um exige `description`) |
| `frequency` | texto | Frequência: `weekly`, `biweekly`, `monthly`, `quarterly`, `semiannual` ou `annual` |
| `startDate` | data | Início (`AAAA-MM-DD`) |
| `endDate` | data | Fim (opcional) |
| `maxOccurrences` | número | Número máximo de faturas |
| `generationDay` | número | Dia de geração |
| `dueDay` | número | Dia de vencimento |
| `dueOffsetDays` | número | Deslocamento do vencimento (em dias) |
| `requirePreviousPaid` | booleano | Só gera a próxima se a anterior estiver paga |
| `generateAs` | texto | Gerar como `open` ou `draft` |
| `autoSend` | booleano | Enviar automaticamente |
| `whatsappId` | número | Canal usado no envio automático |
| `description` | texto | Descrição (ex.: "Mensalidade") |
| `internalNotes` | texto | Anotação interna |
| `discount` / `surcharge` | número | Desconto / acréscimo |
| `fixedProvider` / `fixedMethod` | texto | Forçar provedor / forma de pagamento |

```json
{
  "contactId": 5,
  "description": "Mensalidade",
  "items": [{ "description": "Plano mensal", "quantity": 1, "unitPrice": 100 }],
  "frequency": "monthly",
  "startDate": "2026-11-01",
  "generationDay": 1,
  "dueDay": 10,
  "generateAs": "open",
  "autoSend": true
}
```

**Resposta:** a recorrência criada, com `status`, `occurrencesCount`, `nextGenerationDate`, `nextDueDate` e `lastGeneratedAt`.

### Editar, pausar, reativar e encerrar

| Ação | Método e endpoint | O que acontece |
| --- | --- | --- |
| Editar | `PUT /charges/recurrences/{recurrenceId}` | Mesmos campos da criação (`items`, `frequency` e `startDate` obrigatórios) |
| Pausar | `POST /charges/recurrences/{recurrenceId}/pause` | Status passa a `paused` |
| Reativar | `POST /charges/recurrences/{recurrenceId}/resume` | **Pula as gerações do período pausado** |
| Encerrar | `POST /charges/recurrences/{recurrenceId}/finish` | **Definitivo**; as faturas já geradas continuam como histórico |

***

## 10. Erros

| Código | Quando acontece |
| --- | --- |
| `400` | Requisição inválida — dados do pedido, data, status, tipo (`kind`) ou valor |
| `401` | Token não informado ou inválido |
| `403` | Token válido, mas **sem permissão para a ação**, **sem o recurso de cobranças no plano** ou com **usuário do token inativo** |
| `404` | Cobrança, recorrência, contato, atendimento ou canal não encontrado nesta empresa |
| `409` | **Conflito** — mudança de status inválida, valor bloqueado pelo gateway ou recorrência já encerrada |

O corpo do erro segue `{ "error": "ERR_CHARGE_NOT_FOUND" }` (o código varia conforme o caso).

***

## 11. Exemplo completo: cobrança simples por PIX

1. **Crie a cobrança:**
   `POST /charges` com `contactId`, `items` e `dueDate` → guarde o `id` devolvido.
2. **Veja as formas disponíveis:** `GET /charges/payment-options?baseTotal=150.00`.
3. **Gere o link:** `POST /charges/{id}/payment-link` → guarde `publicUrl`.
4. **Envie pelo WhatsApp:** `POST /charges/{id}/send` com `message` e `useButton: true`.
5. **Acompanhe:** `GET /charges/{id}/events` para a linha do tempo e `GET /charges/{id}/payments` para as tentativas.
6. **Se o cliente pagar fora do gateway:** `POST /charges/{id}/settle`.
7. **Se desistir:** `POST /charges/{id}/cancel`.

***

## ❓ Perguntas frequentes

### Posso escolher o valor total?

**Não.** O total é calculado pelo backend a partir dos itens; `total` enviado por você é ignorado.

### Qual a diferença entre `status` e `displayStatus`?

`status` é o que está gravado (`draft`, `quote`, `open`, `paid`, `canceled`). `displayStatus` acrescenta `overdue` e `expired`, calculados na hora da leitura.

### A baixa manual aceita valor parcial?

**Não.** A baixa é **sempre integral**.

### O cliente recebe mensagem ao gerar o link?

**Não.** `payment-link` só gera o link; quem envia mensagem é o endpoint `send`.

### O que acontece com o link quando cancelo?

O link público **passa a responder 404**.

### Consigo pausar uma recorrência sem perder as faturas já geradas?

Sim. Pausar não apaga nada; ao reativar, **as gerações do período pausado são puladas**. Encerrar é definitivo e as faturas emitidas continuam como histórico.

### Quais permissões cada rota exige?

Os arquivos de referência só citam a permissão `create` para `/charges/payment-options`; **as demais permissões por rota não são informadas**.

***

## 👣 Próximos passos

* [Catálogo](catalogo.md) — produtos e vitrine;
* [Contatos](contatos.md) — criar e atualizar clientes;
* [Introdução e Autenticação](../introducao-e-autenticacao.md) — token e códigos de erro.
