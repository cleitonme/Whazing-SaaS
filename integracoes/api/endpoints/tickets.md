---
icon: tickets-simple
---

# Tickets

**1. Criar Ticket**

* **Método**: POST
* **Endpoint**: `/createticket`

```json
{
  "number": "5511999999999",
  "status": "pending",
  "queueId": 4,
  "userId": null
}
```

**2. Consulta ultimo Ticket atribuido ao canal**

* **Método**: POST
* **Endpoint**: `/showticket`

```json
{
  "number": "5511999999999"
}
```

**3. Consultar Ticket ChatBot**

* **Método**: POST
* **Endpoint**: `/showticketchatbot`

```json
{
  "number": "5511999999999"
}
```

**4. Consultar Todos os Tickets atribuidos ao canal**

* **Método**: POST
* **Endpoint**: `/showallticket`

```json
{
  "number": "5511999999999"
}
```

**5. Atualizar Ticket**

* **Método**: POST
* **Endpoint**: `/updateticketinfo`

```json
{
  "ticketId": 1003,
  "status": "open",
  "userId": 1,
  "queueId": null
}
```

**6. Atualizar Fila do Ticket**

* **Método**: POST
* **Endpoint**: `/updatequeue`

```json
{
  "ticketId": 4,
  "queueId": 1
}
```

**7. Listar todas mensagens do ticket**

* **Método**: GET
* **Endpoint**: `/ticket/{ticketId}`

**8. Atualizar Fila do Ticket**

* **Método**: POST
* **Endpoint**: `/updatechatbot`

```json
{
  "ticketId": 4,
  "chatbotId": 1
}
```
