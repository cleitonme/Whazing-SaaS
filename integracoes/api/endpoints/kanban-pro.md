---
icon: table-columns
---

# Kanban Pro

Página do módulo **Kanban Pro** pela API: consultar quadros (boards) e colunas, criar e mover cards, listar cards do quadro/contato, arquivar cards e trabalhar com os **checklists** dos cards.

> 🔐 Autenticação igual aos demais endpoints: token no cabeçalho `Authorization: Bearer` (veja [Introdução e Autenticação](../introducao-e-autenticacao.md)). Toda operação enxerga apenas os dados da empresa do token — card de outra empresa responde `403`.

> 💡 **Em palavras simples:** **board** é o quadro; **column** é a coluna/etapa do funil; **card** é o cartão do cliente dentro de uma coluna. Toda alteração feita pela API é registrada no histórico do card com a marca **[API]**.

***

## 1. Listagens

| Ação | Método e endpoint | O que traz |
| --- | --- | --- |
| Listar boards | `GET /kanbanpro/boards` | Todos os **boards ativos**, com `id`, `name`, `description`, `color`, `icon` e `sortOrder` |
| Listar colunas | `GET /kanbanpro/boards/{boardId}/columns` | As colunas (etapas) de um board |
| Listar cards do board | `GET /kanbanpro/boards/{boardId}/cards` | Cards do board, com filtros |
| Detalhe do card | `GET /kanbanpro/cards/{id}` | Um card específico |
| Cards de um contato | `GET /kanbanpro/contact/{contactId}/cards` | Todos os cards daquele contato |

**Filtros do board (todos opcionais):**

| Parâmetro (query) | Para que serve |
| --- | --- |
| `columnId` | Filtra por coluna |
| `priority` | `none`, `low`, `medium`, `high` ou `urgent` |
| `contactId` | Filtra por contato |
| `search` | Busca no título e na descrição |
| `includeArchived` | `true` inclui os cards arquivados |

> 💡 Os campos devolvidos por colunas e cards **não estão detalhados nos arquivos de referência** (o `openapi.yaml` descreve as respostas apenas para boards).

***

## 2. Criar ou manipular um card

* **Método:** `POST`
* **Endpoint:** `/kanbanpro/card`

Cria um card para o contato. **Se o contato já tiver um card ativo no mesmo board**, aplica a `action` escolhida.

| `action` | O que faz |
| --- | --- |
| `create_or_move` *(padrão)* | Cria ou **move** para a coluna informada |
| `create_or_update` | Cria ou atualiza dados **sem mover** de coluna |
| `create_only` | **Sempre** cria um novo card |
| `move_only` | Só move se já existir; **ignora** se não existir |

| Campo | Tipo | O que é |
| --- | --- | --- |
| `action` | texto | Uma das ações acima |
| `boardId` | número | Quadro |
| `columnId` | número | Coluna de destino |
| `contactId` | número | Contato dono do card |
| `ticketId` | número | Atendimento relacionado (opcional) |
| `title` | texto | Título do card |
| `priority` | texto | `none`, `low`, `medium`, `high` ou `urgent` |
| `note` | texto | Observação que vai para o histórico |

```json
{
  "action": "create_or_move",
  "boardId": 1,
  "columnId": 5,
  "contactId": 10,
  "note": "Proposta enviada, aguardando retorno",
  "priority": "high"
}
```

**Resposta de sucesso:** `200`.

***

## 3. Atualizar e arquivar um card

### Atualizar

* **Método:** `PUT`
* **Endpoint:** `/kanbanpro/card/{id}`

Atualiza campos **sem** usar a lógica de bot. **Todos os campos são opcionais** — envie só o que muda:

`title`, `description`, `priority`, `columnId` (move de coluna), `assigneeId` (responsável), `contactId`, `ticketId`, `teamId`, `labelIds`, `customFields`, `dealValue`, `coverColor`, `startDate`, `dueDate`, `estimatedHours`, `loggedHours`, `note`.

```json
{
  "columnId": 6,
  "note": "Contrato assinado, movendo para Fechado"
}
```

### Arquivar

* **Método:** `DELETE`
* **Endpoint:** `/kanbanpro/card/{id}`

Arquiva o card (**soft delete** — pode ser restaurado depois) e registra histórico com `[API]`.

> ⚠️ Com `?permanent=true` o card é **deletado permanentemente**.

***

## 4. Checklists do card

| Ação | Método e endpoint | Campos / observação |
| --- | --- | --- |
| 1. Listar itens | `GET /kanbanpro/cards/{card_id}/checklists` | Ordenados por posição; não precisa de body |
| 2. Criar item | `POST /kanbanpro/cards/{card_id}/checklists` | `text` **obrigatório**; `assigneeId` e `dueDate` opcionais. O item **sempre nasce como não concluído** |
| 3. Atualizar item | `PUT /kanbanpro/checklists/{item_id}` | Todos opcionais: `text`, `done`, `assigneeId`, `dueDate`. Ao marcar `done: true`, o sistema registra **quem** e **quando** concluiu |
| 4. Deletar item | `DELETE /kanbanpro/checklists/{item_id}` | Remove **permanentemente** |
| 5. Reordenar | `POST /kanbanpro/cards/{card_id}/checklists/reorder` | Body `{ "itemIds": [14, 12] }` — **todos** os ids na nova ordem |

```json
{
  "text": "Revisar proposta comercial",
  "assigneeId": 3,
  "dueDate": "2026-06-30"
}
```

**Concluir um item:**

```json
{ "done": true }
```

***

## 5. Erros

| Código | Quando acontece |
| --- | --- |
| `400` | Dados inválidos — ex.: `text` ausente ao criar item de checklist, `itemIds` inválido no reordenamento |
| `403` | Card pertence a **outra empresa** (tenant) ou acesso negado |
| `404` | Card ou item não encontrado |

As respostas de checklist trazem mensagens como `{ "message": "Item removido com sucesso", "success": true }`.

***

## 6. Cuidados importantes

* Use o **`boardId`/`columnId` corretos** da empresa do token: os ids vêm das listagens.
* `create_only` **sempre** cria um card novo — em automações repetidas isso pode gerar vários cards para o mesmo contato.
* Arquivar **não exclui**; para apagar de vez, use `?permanent=true`.
* Em `PUT`, `note` é registrada no histórico do card.

***

## ❓ Perguntas frequentes

### Qual a diferença entre Kanban Pro e o CRM (Kanban clássico)?

Este é o módulo **Kanban Pro** (boards, colunas, cards e checklists). As **lanes do CRM clássico** ficam em `GET /crm` — veja [Outros](outros.md).

### Preciso criar o board pela API?

**Não há endpoint de criação de board/coluna** nos arquivos de referência — eles são configurados no sistema. A API cria e movimenta **cards**.

### O que acontece se eu mover um card para uma coluna inexistente?

O `openapi.yaml` não detalha esse caso; os erros citados são `400`, `403` e `404`.

### A API mostra o histórico do card?

As operações são registradas com `[API]` no histórico, mas **não há endpoint de histórico do card** nos arquivos de referência.

***

## 👣 Próximos passos

* [Contatos](contatos.md) — atualizar dados do cliente que aparece no card;
* [Outros](outros.md) — lanes do CRM clássico e validação de número;
* [Introdução e Autenticação](../introducao-e-autenticacao.md) — token e códigos de erro.
