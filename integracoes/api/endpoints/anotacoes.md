---
icon: pen-to-square
---

# Anotações

Grupo **Anotações** da API: criação, consulta, listagem e exclusão de **anotações internas vinculadas a tickets** — o mesmo recurso da aba **Anotações** da tela de atendimento (a nota não é enviada ao cliente; ao criar, também é gerada a mensagem interna correspondente no ticket e as notificações de menção, igual no painel).

> 🔐 Autenticação igual aos demais endpoints: token no cabeçalho `Authorization: Bearer` (veja [Introdução e Autenticação](../introducao-e-autenticacao.md)). O **autor da anotação é o usuário vinculado ao token** da API. Todas as operações retornam apenas anotações da mesma empresa (tenant) do token — registro de outra empresa retorna `404`.

## 1. Criar anotação em um ticket

* **Método:** `POST`
* **Endpoint:** `/ticketnote`
* **Resposta de sucesso:** `201` com objeto `ticketNote` (`id`, `note`, `ticketId`, `contactId`, `userId`, `messageId`, `tenantId`, `createdAt`, `updatedAt`)

**Corpo (JSON):**

| Campo | Tipo | Obrigatório? | Descrição |
| --- | --- | --- | --- |
| `note` | string | ✅ Sim | Texto da anotação (**mínimo de 3 caracteres**). Menções (`@usuário`/`@equipe`) são adicionadas automaticamente pelo sistema |
| `ticketId` | number | Condicional | ID do ticket. **Use `ticketId` OU `number`, nunca os dois ao mesmo tempo** |
| `number` | string | Condicional | Número do contato. A nota vai para o **último ticket do contato na conexão (canal) do token** — igual ao comportamento do endpoint `/showticket` |
| `userIdNotification` | array de string | ❌ Opcional | IDs (como **string**) dos usuários a mencionar — gera mensagem no Chat Interno e notificação push. Ex.: `["5"]` |
| `equipeIdNotification` | array de string | ❌ Opcional | IDs (como **string**) das equipes/grupos a mencionar — gera mensagem no Chat Interno e log no ticket. Ex.: `["2"]` |

```json
{
  "ticketId": 2881,
  "note": "Cliente pediu retorno amanhã"
}
```

**Variante por número (sem ticketId):**

```json
{
  "number": "551198985414",
  "note": "Cliente pediu retorno amanhã"
}
```

**Com menções:**

```json
{
  "ticketId": 2881,
  "note": "Preciso de ajuda neste atendimento",
  "userIdNotification": ["5"],
  "equipeIdNotification": ["2"]
}
```

**Respostas de erro:**

| Status | Quando |
| --- | --- |
| `400` | `note` ausente ou com menos de 3 caracteres; ou `ticketId` e `number` enviados **juntos** |
| `404` | Ticket não encontrado (não existe, é de outra empresa ou não há ticket para o número na conexão do token) |

## 2. Consultar uma anotação

* **Método:** `GET`
* **Endpoint:** `/ticketnote/{id}`
* **Path:** `id` (integer) — ID da anotação
* **Resposta de sucesso:** `200` com o objeto `ticketNote` (texto, autor, ticket, contato, datas)

```json
{
  "success": true,
  "ticketNote": {
    "id": 741,
    "note": "Cliente pediu retorno amanhã",
    "userId": 3,
    "contactId": 3397,
    "ticketId": 2881,
    "tenantId": 1,
    "messageId": "e0c0b1f4-1d2b-4f3a-9a2b-6c7d8e9f0a1b",
    "updatedAt": "2026-09-23T12:00:00.000Z",
    "createdAt": "2026-09-23T12:00:00.000Z"
  }
}
```

**Respostas de erro:** `404` — anotação não encontrada (não existe ou é de outra empresa).

## 3. Apagar uma anotação

* **Método:** `DELETE`
* **Endpoint:** `/ticketnote/{id}`
* **Path:** `id` (integer) — ID da anotação
* **Comportamento:** remove a anotação **e a mensagem interna correspondente no ticket** (mesmo comportamento da exclusão pelo painel), registrando log de deleção
* **Resposta de sucesso:** `200`

```json
{
  "message": "Anotação removida"
}
```

**Respostas de erro:** `404` — anotação não encontrada (não existe ou é de outra empresa).

## 4. Listar anotações de um ticket

* **Método:** `GET`
* **Endpoint:** `/ticketnote/ticket/{id}`
* **Path:** `id` (integer) — ID do ticket
* **Resposta de sucesso:** `200` com `ticketNotes` — todas as anotações do ticket, **da mais recente para a mais antiga**, com o nome do autor

```json
{
  "success": true,
  "ticketNotes": [
    {
      "id": 741,
      "note": "Cliente pediu retorno amanhã",
      "userId": 3,
      "user": { "name": "Maria Silva" },
      "contactId": 3397,
      "ticketId": 2881,
      "tenantId": 1,
      "updatedAt": "2026-09-23T12:00:00.000Z",
      "createdAt": "2026-09-23T12:00:00.000Z"
    }
  ]
}
```

**Respostas de erro:** `404` — ticket não encontrado (não existe ou é de outra empresa).

## 5. Listar anotações de um contato

* **Método:** `GET`
* **Endpoint:** `/ticketnote/contact/{id}`
* **Identificação do contato:** pelo `contactId` no path **ou** pelo `number` na query string (`/ticketnote/contact/?number=551198985414`)
* **Resposta de sucesso:** `200` com `ticketNotes` — **todas as anotações dos tickets do contato**, da mais recente para a mais antiga. Contato sem anotações retorna **lista vazia**

**Respostas de erro:**

| Status | Quando |
| --- | --- |
| `400` | Nenhum identificador informado (faltou `contactId` no path e `number` na query) |

***

> 💡 Não existe endpoint de **edição**: para alterar o texto de uma anotação, apague (`DELETE /ticketnote/{id}`) e crie novamente com o texto atualizado.
