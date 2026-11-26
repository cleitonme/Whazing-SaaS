---
icon: instagram
---

# Instagram

Página dos endpoints de **ações em comentários do Instagram** e do evento de webhook que avisa quando chega um comentário novo.

> 🔐 Autenticação igual aos demais endpoints: token no cabeçalho `Authorization: Bearer` (veja [Introdução e Autenticação](../introducao-e-autenticacao.md)). O **canal usado é o que está amarrado ao token** (a configuração de API escolhida) — por isso nenhuma rota pede o id do canal.

## 🧭 Antes de começar

* O comentário precisa ter chegado **por este canal**: ele é criado quando o **webhook do Instagram** recebe o comentário. Sem isso, as respostas abaixo devolvem `404`.
* O **`commentId`** usado nas chamadas é o mesmo `comment.id` do evento de webhook.

***

## 1. Responder um comentário (resposta pública)

* **Método:** `POST`
* **Endpoint:** `/instagram/comment/reply`

Publica uma resposta **no próprio comentário**, visível para todos. A resposta aparece no atendimento do comentário, como se o atendente tivesse respondido.

| Campo | Tipo | Obrigatório? | O que é |
| --- | --- | --- | --- |
| `commentId` | texto | ✅ Sim | Id do comentário (o mesmo `comment.id` do webhook) |
| `message` | texto | ✅ Sim | Texto da resposta pública |

```json
{
  "commentId": "9000000000000002",
  "message": "Obrigado pelo comentário!"
}
```

**Resposta de sucesso:** `200`.

**Erro:** `404` — comentário não encontrado neste canal (`ERR_IG_COMMENT_NOT_FOUND`).

***

## 2. Enviar mensagem privada a quem comentou

* **Método:** `POST`
* **Endpoint:** `/instagram/comment/private-reply`

Envia **UMA mensagem no Direct** para quem comentou (a "private reply" da Meta). A mensagem aparece no atendimento do comentário.

| Campo | Tipo | Obrigatório? | O que é |
| --- | --- | --- | --- |
| `commentId` | texto | ✅ Sim | Id do comentário |
| `message` | texto | ✅ Sim | Texto da mensagem privada |

```json
{
  "commentId": "9000000000000002",
  "message": "Te mandei os detalhes aqui no Direct!"
}
```

### ⚠️ Regras da Meta (importantes)

* O Instagram aceita **apenas uma mensagem privada por comentário**.
* O prazo é de **até 7 dias** depois do comentário.
* Essa mensagem **não abre a janela de 24 horas**: a janela só abre quando a pessoa **responde**, e conta a partir da resposta dela.
* Depois que a pessoa responder, use o **envio normal de mensagem do atendimento** (`POST /v1/api/external/{apiId}`) para continuar a conversa.

**Erros próprios:**

| Código | Código de erro | O que significa |
| --- | --- | --- |
| `404` | `ERR_IG_COMMENT_NOT_FOUND` | Comentário não encontrado neste canal |
| `409` | `ERR_IG_PRIVATE_REPLY_ALREADY_SENT` | A mensagem privada deste comentário **já foi usada** (inclusive pela automação da tela) |
| `409` | `ERR_IG_PRIVATE_REPLY_WINDOW` | Passaram-se **mais de 7 dias** do comentário |

***

## 3. Evento de webhook: comentário novo

Quando chega um comentário, o sistema dispara o evento **`instagram.comment.created`** para o endereço configurado em **Webhooks/Integrações → aba Comentários do Instagram**.

* É um **POST** no seu endpoint, com `Authorization: Bearer <token>` e `X-N8N-API-KEY`.
* São **3 tentativas**, mantendo o mesmo `eventId` entre elas (assim você consegue ignorar duplicados).

**Formato do corpo (resumido):**

```json
{
  "event": "instagram.comment.created",
  "eventId": "e2f1c6b4-...",
  "timestamp": "2026-11-16T12:00:04.000Z",
  "tenantId": 1,
  "channel": { "id": 12, "name": "Perfil Loja", "type": "instagram" },
  "comment": {
    "id": "9000000000000002",
    "text": "Top",
    "parentId": null,
    "isTopLevel": true,
    "permalink": "https://www.instagram.com/reel/...",
    "createdAt": "2026-11-16T12:00:04.000Z"
  },
  "contact": { "id": 44, "name": "perfil.exemplo" },
  "ticket": { "id": 91, "status": "pending", "protocol": "..." },
  "privateReply": { "available": true, "used": false, "expiresAt": "2026-11-23T12:00:04.000Z" }
}
```

| Campo | O que informa |
| --- | --- |
| `eventId` | Identificador estável do evento (igual nas 3 tentativas) |
| `channel` | Canal do Instagram que recebeu o comentário |
| `from` | Quem comentou (id, usuário e nome) |
| `comment` | Dados do comentário — use `comment.id` nas chamadas acima |
| `media` | Publicação comentada (id, tipo, legenda, link) |
| `contact` / `ticket` | Contato e atendimento criados/relacionados |
| `privateReply` | Se a mensagem privada está **disponível**, se já foi **usada** e até quando (`expiresAt`) |
| `automation` | O que o próprio sistema fará com o comentário (`off`, `fixed`, `ai` ou `keyword`) — útil para **não responder em dobro** |
| `raw` | Envelope original da Meta, para quem já lê esse formato |

> 💡 O payload completo, com todos os campos, está no `openapi.yaml` (tag **Instagram**). Para configurar o recebimento do webhook, veja a seção [Webhooks](../../webhooks/README.md).

> ⚠️ Em canal do **Hub** (`hub_instagram`), `media`, `comment.permalink` e `raw` vêm **nulos**: o webhook do Hub não entrega id de publicação nem o envelope da Meta.

***

## 4. Cuidados importantes

* **Não responda duas vezes:** se `automation.commentReply` ou `automation.directReply` já estiver ativo, o sistema responde sozinho.
* Cada comentário só permite **uma** mensagem privada — guarde o resultado de `privateReply.used`.
* Resposta pública e mensagem privada são coisas diferentes: a primeira aparece no comentário para todos; a segunda é uma conversa no Direct.

***

## ❓ Perguntas frequentes

### Preciso informar o canal nas chamadas?

**Não.** O canal é o que está amarrado ao token da API.

### Por que recebo `404` ao responder?

O comentário não chegou por este canal (o webhook não o criou aqui) ou o id está errado.

### Posso mandar mais de uma mensagem privada no mesmo comentário?

**Não.** O Instagram aceita uma; a segunda chamada recebe `409` com `ERR_IG_PRIVATE_REPLY_ALREADY_SENT`.

### Limite de caracteres da resposta?

**Não informado nos arquivos de referência.**
