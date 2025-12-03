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
