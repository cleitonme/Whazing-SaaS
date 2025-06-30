# 📡 **Webhooks - Dados Enviados pelo WHAZING**

O WHAZING enviará requisições `POST` automaticamente toda vez que uma nova mensagem for **recebida** ou **enviada**.

Cada tipo de evento enviará uma estrutura JSON específica.  
Se desejar sugerir o envio de novas informações, abra uma **issue** no repositório!

---

## 🆕 Evento: **Novo Ticket Criado pelo Usuário**

Enviado quando um **usuário cria um novo ticket**.

```javascript
const dataToSend = {
  Type: "NewTicketUserCreate",
  messageBody: "",
  ticket: {
    id: ticket.id,
    status: ticket.status,
    protocol: ticket.protocol,
    queueId: ticket.queueId,
    userId: ticket.userId,
    apiConfig: ticket.apiConfig,
  },
  contact: ticket.contact ? {
    id: ticket.contact.id,
    name: ticket.contact.name,
    phoneNumber: ticket.contact.number,
    profilePicUrl: ticket.contact.profilePicUrl,
    email: ticket.contact.email,
    isGroup: ticket.contact.isGroup,
    pushname: ticket.contact.pushname,
	lid: contact.lid,
  } : null,
  whatsapp: {
    id: whatsapp.id,
    name: whatsapp.name,
  },
};
```

---

## 🆕 Evento: **Novo Ticket**

Enviado quando **um novo ticket é aberto**.

```javascript
const dataToSend = {
  Type: "NewTicket",
  messageBody: mensagem,
  ticket: {
    id: ticket.id,
    status: ticket.status,
    protocol: ticket.protocol,
    queueId: ticket.queueId,
    userId: ticket.userId,
    apiConfig: ticket.apiConfig,
  },
  contact: contact ? {
    id: contact.id,
    name: contact.name,
    phoneNumber: contact.number,
    profilePicUrl: contact.profilePicUrl,
    email: contact.email,
    isGroup: contact.isGroup,
    pushname: contact.pushname,
	lid: contact.lid,
  } : null,
  whatsapp: {
    id: whatsapp.id,
    name: whatsapp.name,
  },
};
```

---

## 🔀 Evento: **Ticket Transferido**

Enviado quando **um ticket é transferido** para outro setor ou usuário.

```javascript
const dataToSend = {
  Type: "TransferTicket",
  messageBody: mensagem,
  ticket: {
    id: ticket.id,
    status: ticket.status,
    protocol: ticket.protocol,
    queueId: ticket.queueId,
    userId: ticket.userId,
    apiConfig: ticket.apiConfig,
  },
  contact: contact ? {
    id: contact.id,
    name: contact.name,
    phoneNumber: contact.number,
    profilePicUrl: contact.profilePicUrl,
    email: contact.email,
    isGroup: contact.isGroup,
    pushname: contact.pushname,
	lid: contact.lid,
  } : null,
  whatsapp: {
    id: whatsapp.id,
    name: whatsapp.name,
  },
};
```

---

## ✅ Evento: **Ticket Fechado**

Enviado quando **um ticket é finalizado/encerrado**.

```javascript
const dataToSend = {
  Type: "ClosedTicket",
  messageBody: mensagem,
  ticket: {
    id: ticket.id,
    status: ticket.status,
    protocol: ticket.protocol,
    queueId: ticket.queueId,
    userId: ticket.userId,
    apiConfig: ticket.apiConfig,
	closingReasonId: ticket.closingReasonId
  },
  contact: contact ? {
    id: contact.id,
    name: contact.name,
    phoneNumber: contact.number,
    profilePicUrl: contact.profilePicUrl,
    email: contact.email,
    isGroup: contact.isGroup,
    pushname: contact.pushname,
	lid: contact.lid,
  } : null,
  whatsapp: {
    id: whatsapp.id,
    name: whatsapp.name,
  },
};
```

---

## 💬 Evento: **Mensagem Recebida ou Enviada**

Enviado a cada **nova mensagem** (enviada ou recebida).

```javascript
const dataToSend = {
  messageId: message.messageId,
  messageBody: message.body,
  timestamp: message.timestamp,
  status: message.status,
  fromMe: message.fromMe,
  mediaType: message.mediaType,
  mediaUrl: message.mediaUrl,
  isDeleted: message.isDeleted,
  sendType: message.sendType,
  edited: message.edited,
  reactions: message.reactions,
  ticket: {
    id: ticket.id,
    status: ticket.status,
    protocol: ticket.protocol,
    queueId: ticket.queueId,
    apiConfig: ticket.apiConfig,
  },
  contact: contact ? {
    id: contact.id,
    name: contact.name,
    phoneNumber: contact.number,
    profilePicUrl: contact.profilePicUrl,
    email: contact.email,
    isGroup: contact.isGroup,
    pushname: contact.pushname,
	lid: contact.lid,
  } : null,
  user: user ? {
    id: user.id,
    name: user.name,
    email: user.email,
  } : null,
  whatsapp: {
    id: whatsapp.id,
    name: whatsapp.name,
  },
};
```

---

## 🔑 Sobre o Campo `apiConfig`

- O campo `apiConfig` é preenchido quando você configura a opção `externalKey` no ticket.
- Ele permite associar uma **ID única** do seu sistema para facilitar a automação via Webhooks.

Exemplo:

```json
{
  "externalKey": "ID_UNICA_DO_SISTEMA_CLIENTE_PARA_EXECUTAR_UMA_ACAO_COM_WEBHOOK"
}
```

---

# 🛠️ Observações

- Todos os dados são enviados no formato `application/json`.
- Recomendamos que o seu sistema esteja preparado para tratar os diferentes tipos de `Type` que serão recebidos.
- Novos tipos de eventos podem ser adicionados no futuro. Acompanhe o repositório para atualizações!

---

> Feito para tornar seu sistema ainda mais integrado com o WHAZING! 🚀