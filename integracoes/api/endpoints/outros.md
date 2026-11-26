---
icon: angles-right
---

# Outros

**1. Validar Número WhatsApp**

* **Método**: POST
* **Endpoint**: `/valid-whatsapp-number`

```json
{
  "number": "5511999999999"
}
```

**2. Status do Canal**

* **Método**: GET
* **Endpoint**: `/statuschannel`

**3. QR Code**

* **Método**: POST
* **Endpoint**: `/qrcode`

```json
{
  "number": null
}
```

**4. Listar Contatos por Filtro**

* **Método**: GET
* **Por Tag**: `/contacts/tag/{tagId}`
* **Por CRM**: `/contacts/crm/{crmId}`
* **Por Carteira**: `/contacts/wallet/{walletId}`

**5. Listar lanes do CRM (Kanban)**

* **Método**: GET
* **Endpoint**: `/crm`

Retorna as **lanes (colunas/etapas) do CRM clássico** da empresa autenticada (somente lanes **ativas**). Os IDs retornados são os mesmos usados em:

* `POST /updatecrm` → body `{ "crm": <id> }`
* `GET /contacts/crm/{id}` → id da lane no path

Exemplo de resposta:

```json
{
  "success": true,
  "total": 1,
  "lanes": [
    {
      "id": 1,
      "name": "Funil de vendas",
      "color": "#5690F0",
      "order": 1,
      "isWon": false,
      "isLost": false,
      "tunelId": 1,
      "isActive": true
    }
  ]
}

**6. Listar Grupos**

* **Método**: GET
* **Endpoint**: `/grupos`

Lista os **grupos da conexão WhatsApp vinculada ao token** da API externa. Não recebe parâmetros adicionais.

Compatível com **Baileys, Plus e Wuzapi**. A lista pode vir **vazia** (conexão sem grupos).

Exemplo de resposta:

```json
{
  "groups": [
    {
      "name": "Grupo Exemplo",
      "id": "120363000000000000",
      "address": "120363000000000000@g.us"
    }
  ],
  "count": 1
}
```

**O que cada campo significa:**

| Campo | O que é |
| --- | --- |
| `name` | Nome do grupo |
| `id` | Id do grupo no provedor |
| `address` | Endereço canônico do grupo (JID, terminado em `@g.us`) — é o formato aceito no campo `number` das mensagens para grupo |
| `count` | Quantos grupos foram encontrados |

**Erros:**

| Código | Código de erro | Quando acontece |
| --- | --- | --- |
| `400` | `ERR_CHANNEL_NOT_SUPPORTED_GROUPS` | Canal não compatível com listagem de grupos |
| `403` | `ERR_SESSION_NOT_AUTH_TOKEN` / `ERR_WAPP_NOT_INITIALIZED` | Token inválido ou conexão WhatsApp **offline / não inicializada** |
| `404` | `ERR_NO_WHATSAPP_FOUND` | Conexão não encontrada para a empresa |
| `502` | `ERR_FETCH_WAPP_GROUPS` | Falha ao consultar os grupos no provedor WhatsApp |

> 💡 Para enviar mensagem a um grupo, use o `address` devolvido aqui no campo `number` — veja [Mensagens](mensagens.md).
```

