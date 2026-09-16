---
icon: clock
---

# Agendamentos

**Agendar** é deixar a mensagem pronta para ser enviada **no futuro**, em uma data e hora que você escolher — sem precisar de ninguém clicando no momento do envio.

> 💡 **Para que serve?** Lembretes de consulta, confirmações de pedido, avisos de vencimento, follow-ups de venda... qualquer mensagem que precise chegar "depois".

## 🕐 Agendamentos × Agenda: qual é a diferença?

Existem **dois grupos** com nomes parecidos — não confunda:

| | **Agendamentos** (esta página) | **Agenda** ([ver página](agenda.md)) |
|---|---|---|
| O que é | O envio futuro de uma **mensagem** (texto, template, botões, mídia) | Um **compromisso** no calendário do sistema (com profissional, serviço e horário) |
| Exemplo | "Envie amanhã 14h: *seu pedido saiu para entrega*" | "Marcação do cliente com a profissional Ana, dia 25 às 14h30" |
| O que dispara | O sistema envia a mensagem no horário marcado | O compromisso aparece na Agenda; sincroniza com Google/Outlook se configurado |

***

## 📋 Os 4 endpoints

| # | Para que serve | Método | Endereço |
|---|---|---|---|
| 1 | **Criar** um agendamento de mensagem | `POST` | `/schedule` |
| 2 | **Listar** agendamentos (com filtros) | `GET` | `/schedules` |
| 3 | **Consultar** um agendamento pelo ID | `GET` | `/schedule/{id}` |
| 4 | **Cancelar** um agendamento pendente | `DELETE` | `/schedule/{id}` |

> 📮 A referência técnica completa de cada um está no arquivo **OpenAPI** — abaixo vão as informações essenciais em linguagem simples.

***

## 1️⃣ Criar um agendamento

**Método:** `POST` · **Endereço:** `/schedule`

### O que preciso enviar

| Campo | Obrigatório? | Para que serve |
|---|---|---|
| `number` | ✅ Sim | Destinatário: número com DDI (`5511999999999`), grupo (`id@grupo`) ou `@lid` |
| `body` | ✅ Sim (para texto) | O texto da mensagem |
| `scheduledAt` | ✅ Sim | **Data e hora do envio**, sempre com fuso horário: `2026-08-25T14:30:00-03:00` |
| `messageType` | Opcional | Tipo de conteúdo: `text` (padrão), `template` (oficial) ou `buttons` (botões) |
| `openTicket` + `queueId` | Opcional | Se `true`, abre um ticket na fila informada no momento do disparo |
| arquivo `media` | Opcional | Mídia enviada por **upload direto** (multipart/form-data) — não há suporte a `mediaUrl` em agendamento |
| header `Idempotency-Key` | Opcional | Valor único por tentativa: se a requisição for repetida (ex.: retry por timeout), **não duplica** o agendamento |

### Regras importantes

* `scheduledAt` deve ser uma data **futura**, com **no mínimo 5 minutos** de antecedência;
* Sempre envie a data **com fuso horário** (offset) — datas sem timezone não são convertidas;
* **Grupo** e **@lid** precisam **já existir como contato** no sistema — nunca são criados automaticamente (números puros criam o contato sozinhos);
* Template oficial usa os mesmos `templateComponents` da API Oficial; mensagem com botões aceita **no máximo 3 escolhas**.

### Exemplo simples (texto)

```json
{
  "number": "5511999999999",
  "body": "Olá! Este é um lembrete agendado.",
  "scheduledAt": "2026-08-25T14:30:00-03:00"
}
```

### Resposta e erros

* **201** — agendamento criado; a resposta traz `id`, `status` (**PENDENTE**), `scheduledAt`, destinatário, conteúdo e mais;
* **400** — dados inválidos (campo faltando, data no passado, botões/template malformados);
* **401 / 403** — token ausente/inválido ou não corresponde à conexão configurada;
* **404** — número não é um WhatsApp válido, ou grupo/@lid não existe como contato.

> ⏱️ O disparo acontece automaticamente pelo próprio sistema (verificação a cada ~1 minuto) — **não há diferença de comportamento** entre uma mensagem agendada pela tela do sistema e uma agendada pela API.

***

## 2️⃣ Listar agendamentos

**Método:** `GET` · **Endereço:** `/schedules`

Lista os agendamentos da conexão autenticada, **40 por página**, do mais recente para o mais antigo.

Filtros opcionais (parâmetros na URL):

| Filtro | Para que serve |
|---|---|
| `number` | Localiza pelo destinatário (número, grupo ou @lid) — busca local; sem correspondência, retorna **lista vazia**, não erro |
| `status` | `PENDENTE`, `ENVIADA` ou `CANCELADO` |
| `scheduledFrom` / `scheduledTo` | Intervalo da data agendada (com fuso horário) |
| `page` | Página da listagem |

***

## 3️⃣ Consultar um agendamento

**Método:** `GET` · **Endereço:** `/schedule/{id}`

Retorna os dados atuais de um agendamento (status, data, destinatário etc.). Funciona **também para agendamentos já enviados ou cancelados** — útil para conferir o resultado depois do horário de disparo.

* **200** — dados do agendamento;
* **404** — não existe (ou pertence a outra empresa/conexão — os dados de terceiros nunca são retornados).

***

## 4️⃣ Cancelar um agendamento

**Método:** `DELETE` · **Endereço:** `/schedule/{id}`

Cancela um agendamento que ainda **não foi enviado** (status PENDENTE). O registro **não é apagado** — o status muda para **CANCELADO** e continua consultável.

* **200** — cancelado;
* **404** — não encontrado;
* **409** — já foi enviado (ENVIADA) ou já está cancelado — não pode mais cancelar.

***

## 🧪 Exemplo prático

> Uma clínica quer lembrar os pacientes da consulta 24h antes. O sistema da clínica, ao marcar cada consulta, chama `POST /schedule` com o número do paciente, o texto do lembrete e a data/hora de 24h antes (com `Idempotency-Key` = código da consulta, para nunca duplicar). No horário marcado, o Whazing envia a mensagem automaticamente — e a clínica pode conferir o status depois com `GET /schedule/{id}`.

***

## 🆘 Problemas comuns

* **"Erro 400 ao criar"** — confira se `scheduledAt` está no futuro (mín. 5 minutos) e **com fuso horário**; se `messageType` é `template`/`buttons`, revise os campos próprios do tipo;
* **"Erro 404 ao criar para um grupo"** — o grupo/@lid precisa já existir como contato no sistema;
* **"Erro 409 ao cancelar"** — a mensagem já foi enviada ou o agendamento já estava cancelado;
* **"Não apareceu na listagem"** — a listagem é da conexão autenticada; confira o token e os filtros (`number`, `status`, período).
