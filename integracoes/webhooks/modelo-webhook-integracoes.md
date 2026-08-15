---
icon: square-up-right
---

# Webhook de Integrações

## 📬 **Webhook - Integrações por Fila (N8N)**

Este modelo de dados corresponde aos webhooks configurados na aba **Integrações por Fila** da tela **Webhooks** (integrações do tipo **N8N**, vinculadas a uma fila).

A cada **nova mensagem recebida ou enviada** em um ticket que esteja na **fila vinculada** à integração, o WHAZING dispara automaticamente uma requisição `POST` para o seu endpoint configurado — respeitando os eventos marcados (**“Mensagem recebida”**, **“Mensagem enviada”**, **“Ticket em atendimento”**, **“Ticket pendente”**, **“Mensagens de grupo”** e **“Enviar mídia em base64”**).

Se desejar sugerir o envio de novos campos, abra uma **issue** no repositório!

> 💡 **Como funcionam os envios:**
> * Requisição `POST` com `Content-Type: application/json`;
> * Se um **Bearer Token / API Key** estiver configurado na integração, ele vai no cabeçalho **`X-N8N-API-KEY`**;
> * O envio ocorre com um atraso de ~3 segundos e, em caso de falha, o sistema tenta **até 3 vezes** (com 3 minutos de intervalo entre as tentativas).

> ⚠️ **Diferença em relação ao Canal:** a integração por **fila** envia **apenas eventos de mensagem**. Ela **não possui** os eventos de ciclo de vida do ticket (Novo ticket, Ticket transferido, Ticket fechado) — esses existem somente no **Webhook de Canal**.

***

## 📦 Estrutura dos Dados Enviados

> ⚠️ **Atenção:** assim como no evento de mensagem do canal, o webhook de fila **não possui o campo `Type`** — a identificação é feita pelos próprios campos (`fromMe`, `ticket.status`, etc.).

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

> 💡 A estrutura acima é **a mesma** do evento de mensagem do **Webhook de Canal** — a diferença está apenas em **quando** ela é enviada: na fila, apenas para tickets que estejam na **fila vinculada** à integração, e sem os filtros de eventos de ticket.

***

## ⚙️ Como os eventos da fila filtram os envios

| Evento na tela | Regra aplicada antes de enviar |
| --- | --- |
| **Mensagem recebida** | Só envia se a mensagem foi **recebida** (`fromMe = false`). |
| **Mensagem enviada** | Só envia se a mensagem foi **enviada** (`fromMe = true`). |
| **Ticket em atendimento** | Só envia mensagens de tickets com status **Aberto** (`open`). |
| **Ticket pendente** | Só envia mensagens de tickets com status **Pendente** (`pending`). |
| **Mensagens de grupo** | Se desligado, mensagens de **grupos** não geram envio. |
| **Enviar mídia em base64** | Se ligado, inclui o conteúdo da mídia em `mediaBase64` (quando houver mídia). |

> ⚠️ Se **“Ticket em atendimento”** e **“Ticket pendente”** estiverem **desligados**, nenhuma mensagem será enviada, mesmo com “Mensagem recebida”/“Mensagem enviada” ativadas.

***

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

***

## 🛠️ Observações Importantes

* Os dados são enviados no formato `application/json`, via requisição `POST`;
* O token configurado (opcional) é enviado no cabeçalho **`X-N8N-API-KEY`**;
* Todos os webhooks ocorrem em tempo real (com atraso inicial de ~3s e até 3 tentativas em caso de falha);
* Esteja preparado para receber múltiplos eventos em sequência;
* Novos campos podem ser adicionados futuramente — recomendamos manter o parser do seu sistema flexível!

***

> Conecte suas mensagens, tickets e automações em tempo real com o WHAZING! 🚀
