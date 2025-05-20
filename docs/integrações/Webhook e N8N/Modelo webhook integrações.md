# Será enviado metodo POST cada vez receber uma nova mensagem ou enviada, segue abaixo estrutura enviada, se tiver alguma sugestao de mais alguma informação que deve ser enviada solicite um "issues"

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
	
	
	
apiConfig essa informação quando você usa api e preenche campo "externalKey": "ID_UNICA_DO_SISTEMA_CLIENTE_PARA_EXECUTAR_UMA_ACAO_COM_WEBHOOK"