---
icon: calendar
---

# Agenda

A **Agenda** é a agenda de compromissos do sistema (a mesma tela que sua equipe usa no painel). Pela API você pode **criar, consultar, listar, atualizar e cancelar compromissos** — e também listar os **calendários**, **profissionais** e **serviços** cadastrados.

> 💡 **Para que serve?** Integrar outro sistema de marcações ao Whazing: um site de agendamento, um sistema da clínica, um formulário — cada marcação feita lá pode virar um compromisso aqui, com verificação de horário e sincronização com Google/Outlook quando configurado.

## 🕐 Agenda × Agendamentos: qual é a diferença?

| | **Agenda** (esta página) | **Agendamentos** ([ver página](agendamentos.md)) |
|---|---|---|
| O que é | **Compromisso** no calendário (profissional + serviço + horário) | Envio futuro de uma **mensagem** |
| Exemplo | "Cliente João com a profissional Ana, dia 25 às 14h30" | "Envie amanhã 14h: lembrete da consulta" |
| Validações | Conflito de horário e disponibilidade do profissional | Data futura (mín. 5 minutos) |

***

## 📋 Os 8 endpoints (na ordem de uso)

### 🔍 Passo 1 — Descubra os IDs válidos

Antes de criar um compromisso, você precisa saber **quais IDs** existem no sistema. Três endpoints de consulta servem exatamente para isso (método `GET`):

| Endpoint | O que lista | Parâmetro opcional |
|---|---|---|
| `/agenda/calendars` | **Calendários** ativos (id, nome, cor) | — |
| `/agenda/professionals` | **Profissionais** ativos (id, nome) | `calendarId` — só os vinculados àquele calendário |
| `/agenda/services` | **Serviços** ativos (id, nome, duração em minutos) | `professionalId` — só os que aquele profissional realiza |

### ✍️ Passo 2 — Crie e gerencie compromissos

| # | Para que serve | Método | Endereço |
|---|---|---|---|
| 1 | **Criar** um compromisso | `POST` | `/agenda` |
| 2 | **Listar** compromissos (com filtros e paginação) | `GET` | `/agenda` |
| 3 | **Consultar** um compromisso pelo ID | `GET` | `/agenda/{id}` |
| 4 | **Atualizar** um compromisso (parcial — só os campos que quer mudar) | `PUT` | `/agenda/{id}` |
| 5 | **Cancelar** um compromisso | `DELETE` | `/agenda/{id}` |

> 📮 A referência técnica completa está no arquivo **OpenAPI** — abaixo vão as informações essenciais.

***

## 1️⃣ Criar um compromisso

**Método:** `POST` · **Endereço:** `/agenda`

### O que preciso enviar

| Campo | Obrigatório? | Para que serve |
|---|---|---|
| `calendarId` | ✅ Sim | Em qual calendário marcar (use `/agenda/calendars` para descobrir) |
| `professionalId` | ✅ Sim | Qual profissional atenderá (use `/agenda/professionals`) |
| `startAt` | ✅ Sim | Data e hora de início, **sempre com fuso horário**: `2026-08-25T14:30:00-03:00` |
| `endAt` | Depende | Hora de fim — **dispensado se você informar `calendarServiceId`** (nesse caso o fim é calculado pela duração do serviço) |
| `calendarServiceId` | Opcional | O serviço prestado (use `/agenda/services`) — define a duração automaticamente |
| `contactId` **ou** `number` | Opcional | O cliente: informe o ID do contato **ou** o telefone (o contato é localizado/criado automaticamente; se enviar os dois, `contactId` vence) |
| `title`, `notes` | Opcional | Título e anotações do compromisso |

### Regras importantes

* `startAt` **não pode estar no passado** e `endAt` deve ser **maior** que `startAt`;
* O profissional **não pode ter outro compromisso no mesmo horário** — nem ficar fora da disponibilidade cadastrada, quando houver;
* A API tem acesso a **toda a Agenda da empresa** (equivalente a admin/supervisor no painel) — sem restrição por calendário de usuário;
* A resposta traz os dados completos, incluindo calendário, profissional, contato e serviço embutidos — e o aviso `externalConflictWarning` quando o horário colide com um evento de calendário externo configurado como "warn".

### Exemplo simples (com serviço — horário de fim automático)

```json
{
  "calendarId": 1,
  "professionalId": 3,
  "calendarServiceId": 2,
  "number": "5511999999999",
  "startAt": "2026-08-25T14:30:00-03:00",
  "notes": "Cliente prefere confirmação por WhatsApp."
}
```

### Resposta e erros

* **201** — compromisso criado;
* **400** — dados inválidos (campo faltando, data sem fuso, fim antes do início, início no passado, fora da disponibilidade);
* **401 / 403** — token ausente/inválido ou não corresponde à conexão configurada;
* **404** — `calendarId`, `professionalId`, `contactId`, `calendarServiceId` ou `originTicketId` informado não existe;
* **409** — **conflito de horário**: o profissional já tem outro compromisso nesse intervalo.

***

## 2️⃣ Listar compromissos

**Método:** `GET` · **Endereço:** `/agenda`

Sem o parâmetro `page`, retorna **todos** os compromissos do período informado (mesmo comportamento da tela da Agenda). Com `page`, pagina em blocos de `limit` (padrão **50**).

Filtros opcionais: `startDate` / `endDate` (período, com fuso), `calendarId`, `professionalId`, `contactId`, `status` (`scheduled`, `confirmed`, `completed`, `cancelled`) e **`number`** — para localizar compromissos **pelo telefone do cliente**, sem saber o `contactId` (busca local; sem correspondência, retorna lista vazia).

***

## 3️⃣ Consultar um compromisso

**Método:** `GET` · **Endereço:** `/agenda/{id}`

Retorna os dados completos do compromisso (com calendário, profissional, contato e serviço embutidos). Compromisso de **outra empresa** retorna 404 — os dados de terceiros nunca são expostos.

***

## 4️⃣ Atualizar um compromisso

**Método:** `PUT` · **Endereço:** `/agenda/{id}`

Atualização **parcial**: envie só os campos que quer alterar. As mesmas validações da criação se aplicam (conflito, disponibilidade, horários) — **exceto** quando você marca o status como `cancelled`, caso em que as checagens são puladas.

Exemplos: reagendar (`startAt` + `endAt` novos) ou marcar como concluído (`status: "completed"`). Trocar o profissional remove a sincronização com o calendário externo antigo (uma nova é criada para o profissional atual).

* **200** — atualizado; **400** — dados inválidos; **404** — compromisso ou ID informado não existe; **409** — conflito de horário.

***

## 5️⃣ Cancelar um compromisso

**Método:** `DELETE` · **Endereço:** `/agenda/{id}`

Cancela o compromisso (status muda para `cancelled`). O registro **não é apagado** — continua consultável e **para de ocupar a disponibilidade** do profissional.

* **200** — cancelado; **404** — não encontrado; **409** — já está cancelado ou concluído.

***

## 🧪 Exemplo prático

> Um site de estética marca horários pelo próprio formulário. Ao receber a marcação, o site chama `/agenda/calendars` e `/agenda/professionals` (uma vez ao dia, para manter os IDs), verifica o `calendarServiceId` do serviço escolhido e cria o compromisso com `POST /agenda` informando o telefone da cliente. Se o horário estiver ocupado, a API responde **409** e o site oferece outro horário. O compromisso aparece na Agenda do Whazing — e, com o calendário externo configurado, também no Google Agenda da profissional.

***

## 🆘 Problemas comuns

* **"Erro 400: data sem fuso"** — envie sempre `2026-08-25T14:30:00-03:00`, nunca `2026-08-25T14:30:00` sem o `-03:00`;
* **"Erro 404 ao criar"** — algum dos IDs (`calendarId`, `professionalId`, `calendarServiceId`, `contactId`) não existe; liste com os endpoints do Passo 1;
* **"Erro 409 ao criar/atualizar"** — o profissional já tem compromisso nesse horário; escolha outro intervalo;
* **"Erro 409 ao cancelar"** — o compromisso já estava cancelado ou concluído;
* **"Listagem vazia"** — confira o período (`startDate`/`endDate`) e os filtros; a busca por `number` é local (não valida ao vivo no WhatsApp).
