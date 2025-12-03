# Contatos

**1. Criar Contato**

* **Método**: POST
* **Endpoint**: `/createcontact`

```json
{
  "name": "Nome do Contato",
  "number": "5511999999999",
  "email": "email@exemplo.com",
  "extraInfo": [
    {
      "name": "Campo Extra",
      "value": "Valor"
    }
  ],
  "wallets": [],
  "disableBot": false,
  "disableCampaign": false,
  "commentary": "Observações",
  "deadline": "2025-12-31T23:59:59Z",
  "disableKanban": false,
  "kanbanPrice": "1500",
  "ignore": false
}
```

**2. Buscar Contato**

* **Método**: POST
* **Endpoint**: `/contact`

Por número:

```json
{
  "number": "5511999999999"
}
```

Por ID:

```json
{
  "contactId": 123
}
```

**3. Atualizar CRM do Contato**

* **Método**: POST
* **Endpoint**: `/updatecrm`

Por número:

```json
{
  "number": "5511999999999",
  "crm": 1
}
```

Por contactId:

```json
{
  "contactId": 3397,
  "crm": 8
}
```

Por ticketId:

```json
{
  "ticketId": 2881,
  "crm": 19
}
```

Para retirar contato do crm use valor 0

**4. Atualizar Tags do Contato**

* **Método**: POST
* **Endpoint**: `/updatetag`

Por número:

```json
{
  "number": "5511999999999",
  "tags": [25, 26]
}
```

Por contactId:

```json
{
  "contactId": 3649,
  "tags": [25]
}
```

Por ticketId:

```json
{
  "ticketId": 3183,
  "tags": []
}
```

Caso usar \[] vai retirar tags. Esse valor altera para tags que você colocar no endpoint tags anteriores são removidas.

**5. Editar Contato**

* **Método**: POST
* **Endpoint**: `/updatecontact`

Pode ser usado "number": "5511999999999" ou "contactId": "5219" para localizar contato a ser alterado

```json
{
  "name": "Nome do Contato",
  "number": "5511999999999",
  "email": "email@exemplo.com",
  "extraInfo": [
    {
      "name": "Campo Extra",
      "value": "Valor"
    }
  ],
  "wallets": [],
  "disableBot": false,
  "disableCampaign": false,
  "commentary": "Observações",
  "deadline": "2025-12-31T23:59:59Z",
  "disableKanban": false,
  "kanbanPrice": "1500",
  "ignore": false
}
```
