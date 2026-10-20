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
```

