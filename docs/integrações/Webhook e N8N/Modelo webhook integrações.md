# 📬 **Webhook - Mensagens Recebidas ou Enviadas**

A cada **nova mensagem recebida ou enviada**, o WHAZING dispara automaticamente uma requisição `POST` para o seu endpoint configurado.

Se desejar sugerir o envio de novos campos, abra uma **issue** no repositório!

---

## 📦 Estrutura dos Dados Enviados

```javascript
const dataToSend = {
  messageId: message.messageId,         // ID único da mensagem
  messageBody: message.body,             // Texto da mensagem
  timestamp: message.timestamp,          // Data/hora da mensagem (timestamp UNIX)
  status: message.status,                // Status da mensagem (ex: "delivered", "read")
  fromMe: message.fromMe,                // true = enviada por mim | false = recebida
  mediaType: message.mediaType,          // Tipo de mídia (ex: "image", "video", "audio", "document")
  mediaUrl: message.mediaUrl,            // URL para download da mídia (se aplicável)
  isDeleted: message.isDeleted,          // true = mensagem apagada
  sendType: message.sendType,            // Tipo de envio (ex: "manual", "bot", "API")
  edited: message.edited,                // true = mensagem foi editada
  reactions: message.reactions,          // Reações associadas à mensagem (se houver)
  
  ticket: {                              // Informações do ticket associado
    id: ticket.id,
    status: ticket.status,
    protocol: ticket.protocol,
    queueId: ticket.queueId,
    apiConfig: ticket.apiConfig,          // Chave externa, caso configurada (ver abaixo)
  },
  
  contact: contact ? {                   // Informações do contato (remetente ou destinatário)
    id: contact.id,
    name: contact.name,
    phoneNumber: contact.number,
    profilePicUrl: contact.profilePicUrl,
    email: contact.email,
    isGroup: contact.isGroup,
    pushname: contact.pushname,
	lid: contact.lid,
	kanbanId: contact.kanbanId,
	followupId: contact.followupId
  } : null,

  user: user ? {                         // Informações do usuário (caso mensagem enviada manualmente)
    id: user.id,
    name: user.name,
    email: user.email,
  } : null,

  whatsapp: {                            // Informações da conexão WhatsApp
    id: whatsapp.id,
    name: whatsapp.name,
  },
};
```

---

## 🔑 Sobre o Campo `apiConfig`

O campo `apiConfig` é utilizado para identificar o ticket em **sistemas externos**.  

Ele é preenchido automaticamente quando você informa um valor no campo `externalKey` ao criar o ticket via API.

**Exemplo de configuração:**

```json
{
  "externalKey": "ID_UNICA_DO_SISTEMA_CLIENTE_PARA_EXECUTAR_UMA_ACAO_COM_WEBHOOK"
}
```

Esse campo é extremamente útil para vincular o ticket a alguma operação ou registro no seu sistema próprio.

---

# 🛠️ Observações Importantes

- Os dados são enviados no formato `application/json`.
- Todos os webhooks ocorrem em tempo real.
- Esteja preparado para receber múltiplos eventos em sequência.
- Novos campos podem ser adicionados futuramente — recomendamos manter o parser do seu sistema flexível!

---

> Conecte suas mensagens, tickets e automações em tempo real com o WHAZING! 🚀
