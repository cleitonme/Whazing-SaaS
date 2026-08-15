---
icon: square-up-right
---

# Webhook de Canal

## 📡 **Webhooks - Dados Enviados pelo WHAZING**

O WHAZING enviará requisições `POST` automaticamente para a **URL configurada no canal** (aba **Integrações por Canal**) toda vez que um dos **eventos marcados** acontecer.

Cada tipo de evento enviará uma estrutura JSON específica.\
Se desejar sugerir o envio de novas informações, abra uma **issue** no repositório!

> 💡 **Como funcionam os envios:**
> * Requisição `POST` com `Content-Type: application/json`;
> * Se um **Bearer Token / API Key** estiver configurado, ele vai no cabeçalho **`X-N8N-API-KEY`**;
> * O envio ocorre com um atraso de ~3 segundos e, em caso de falha, o sistema tenta **até 3 vezes** (com 3 minutos de intervalo entre as tentativas).

***

## 🆕 Evento: **Novo Ticket Criado pelo Usuário** (tipo `NewTicketUserCreate`)

Enviado quando um **usuário cria um novo ticket manualmente** (disparado pela opção **“Novo ticket”**).

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
    apiConfig: ticket.apiConfig
  },
  contact: ticket.contact ? {
    id: ticket.contact.id,
    name: ticket.contact.name,
    phoneNumber: ticket.contact.number,
    profilePicUrl: ticket.contact.profilePicUrl,
    email: ticket.contact.email,
    isGroup: ticket.contact.isGroup,
    pushname: ticket.contact.pushname,
    lid: ticket.contact.lid,
    kanbanId: ticket.contact.kanbanId,
    followupId: ticket.contact.tunelId
  } : null,
  whatsapp: {
    id: whatsapp.id,
    name: whatsapp.name
  }
};
```

***

## 🆕 Evento: **Novo Ticket** (tipo `NewTicket`)

Enviado quando **um novo ticket é aberto automaticamente** por uma mensagem recebida (disparado pela opção **“Novo ticket”**).

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
    apiConfig: ticket.apiConfig
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
    kanbanId: contact.kanbanId,
    followupId: contact.tunelId
  } : null,
  whatsapp: {
    id: whatsapp.id,
    name: whatsapp.name
  }
};
```

> 💡 **Diferença entre os dois eventos de “Novo ticket”:** o **`NewTicketUserCreate`** é enviado quando o ticket é criado **manualmente** por um usuário (com `messageBody` vazio). O **`NewTicket`** é enviado quando o ticket é **aberto automaticamente** ao receber uma mensagem (com o texto da mensagem em `messageBody`). Ambos são controlados pela mesma opção **“Novo ticket”** na tela.

***

## 🔀 Evento: **Ticket Transferido** (tipo `TransferTicket`)

Enviado quando **um ticket é transferido** para outro setor ou usuário (disparado pela opção **“Ticket transferido”**).

```javascript
const dataToSend = {
  Type: "TransferTicket",
  messageBody: ticket.lastMessage,
  ticket: {
    id: ticket.id,
    status: ticket.status,
    protocol: ticket.protocol,
    queueId: ticket.queueId,
    userId: ticket.userId,
    apiConfig: ticket.apiConfig
  },
  contact: ticket.contact ? {
    id: ticket.contact.id,
    name: ticket.contact.name,
    phoneNumber: ticket.contact.number,
    profilePicUrl: ticket.contact.profilePicUrl,
    email: ticket.contact.email,
    isGroup: ticket.contact.isGroup,
    pushname: ticket.contact.pushname,
    lid: ticket.contact.lid,
    kanbanId: ticket.contact.kanbanId,
    followupId: ticket.contact.tunelId
  } : null,
  whatsapp: {
    id: whatsapp.id,
    name: whatsapp.name
  }
};
```

***

## ✅ Evento: **Ticket Fechado** (tipo `ClosedTicket`)

Enviado quando **um ticket é finalizado/encerrado** (disparado pela opção **“Ticket fechado”**).

```javascript
const dataToSend = {
  Type: "ClosedTicket",
  messageBody: ticket.lastMessage,
  ticket: {
    id: ticket.id,
    status: "closed",
    protocol: ticket.protocol,
    queueId: ticket.queueId,
    userId: ticket.userId,
    apiConfig: ticket.apiConfig,
    closingReasonId: ticket.closingReasonId
  },
  contact: ticket.contact ? {
    id: ticket.contact.id,
    name: ticket.contact.name,
    phoneNumber: ticket.contact.number,
    profilePicUrl: ticket.contact.profilePicUrl,
    email: ticket.contact.email,
    isGroup: ticket.contact.isGroup,
    pushname: ticket.contact.pushname,
    lid: ticket.contact.lid,
    kanbanId: ticket.contact.kanbanId,
    followupId: ticket.contact.tunelId
  } : null,
  whatsapp: {
    id: whatsapp.id,
    name: whatsapp.name
  }
};
```

> 💡 No evento `ClosedTicket`, o campo `status` do ticket é sempre enviado como `"closed"`, e o campo `closingReasonId` traz o **motivo de encerramento** (quando informado).

***

## 💬 Evento: **Mensagem Recebida ou Enviada**

Enviado a cada **nova mensagem** (enviada ou recebida), respeitando os eventos marcados (**“Mensagem recebida”**, **“Mensagem enviada”**, **“Ticket em atendimento”**, **“Ticket pendente”**, **“Mensagens de grupo”** e **“Enviar mídia em base64”**).

> ⚠️ **Atenção:** diferente dos eventos de ticket acima, o evento de **mensagem não possui o campo `Type`** — a identificação do evento é feita pelos próprios campos (`fromMe`, `ticket.status`, etc.).

```javascript
const dataToSend = {
  messageId: message.messageId,         // ID único da mensagem
  messageBody: message.body,            // Texto da mensagem
  timestamp: message.timestamp,         // Data/hora da mensagem (timestamp UNIX)
  status: message.status,               // Status da mensagem (ex: "received", "sended")
  fromMe: message.fromMe,               // true = enviada por mim | false = recebida
  mediaType: message.mediaType,         // Tipo de mídia (ex: "image", "video", "audio", "document")
  mediaUrl: message.mediaUrl,           // URL para download da mídia (se aplicável)
  mediaBase64: mediaBase64,             // Conteúdo da mídia em base64 (somente se "Enviar mídia em base64" estiver ativado; caso contrário, null)
  isDeleted: message.isDeleted,         // true = mensagem apagada
  sendType: message.sendType,           // Tipo de envio (ex: "manual", "bot", "API")
  edited: message.edited,               // true = mensagem foi editada
  reactions: message.reactions,         // Reações associadas à mensagem (se houver)
  dataJson: message.dataJson,           // Dados brutos da mensagem (JSON)
  ticket: {                             // Informações do ticket associado
    id: ticket.id,
    status: ticket.status,
    protocol: ticket.protocol,
    queueId: ticket.queueId,
    apiConfig: ticket.apiConfig,        // Chave externa, caso configurada (ver abaixo)
    isGroup: ticket.isGroup             // true = ticket de grupo
  },
  contact: contact ? {                  // Informações do contato do ticket (remetente ou destinatário)
    id: contact.id,
    name: contact.name,
    phoneNumber: contact.number,
    profilePicUrl: contact.profilePicUrl,
    email: contact.email,
    isGroup: contact.isGroup,
    pushname: contact.pushname,
    lid: contact.lid,
    kanbanId: contact.kanbanId,
    followupId: contact.tunelId
  } : null,
  contactmessage:                       // Quem enviou a mensagem dentro de um GRUPO (somente quando o ticket é de grupo)
    contactmessage && ticket.isGroup
      ? {
          id: contactmessage.id,
          name: contactmessage.name,
          phoneNumber: contactmessage.number,
          profilePicUrl: contactmessage.profilePicUrl,
          email: contactmessage.email,
          isGroup: contactmessage.isGroup,
          pushname: contactmessage.pushname,
          lid: contactmessage.lid,
          kanbanId: contactmessage.kanbanId,
          followupId: contactmessage.tunelId
        }
      : null,
  user: user ? {                        // Informações do usuário (caso mensagem enviada manualmente)
    id: user.id,
    name: user.name,
    email: user.email
  } : null,
  whatsapp: {                           // Informações da conexão WhatsApp
    id: whatsapp.id,
    name: whatsapp.name
  }
};
```

> 💡 Em **mensagens de grupo**, o campo `contact` traz o contato do **ticket do grupo** e o campo `contactmessage` traz **quem realmente enviou a mensagem** dentro do grupo. Para conversas individuais, `contactmessage` é `null`.

***

## 🔑 Sobre o Campo `apiConfig`

* O campo `apiConfig` é preenchido quando você configura a opção `externalKey` no ticket (via API).
* Ele permite associar uma **ID única** do seu sistema para facilitar a automação via Webhooks.

Exemplo:

```json
{
  "externalKey": "ID_UNICA_DO_SISTEMA_CLIENTE_PARA_EXECUTAR_UMA_ACAO_COM_WEBHOOK"
}
```

***

## 🛠️ Observações

* Todos os dados são enviados no formato `application/json`, via requisição `POST`;
* O token configurado (opcional) é enviado no cabeçalho **`X-N8N-API-KEY`**;
* Em caso de falha, o sistema tenta **até 3 vezes** (atraso inicial de ~3s e intervalo de 3 minutos entre as tentativas);
* Recomendamos que o seu sistema esteja preparado para tratar os diferentes tipos de `Type` que serão recebidos;
* Novos tipos de eventos podem ser adicionados no futuro. Acompanhe o repositório para atualizações!

***

> Feito para tornar seu sistema ainda mais integrado com o WHAZING! 🚀
