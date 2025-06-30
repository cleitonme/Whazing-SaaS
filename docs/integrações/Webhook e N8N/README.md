# 🌐 **WebHook - Visão Geral**

O sistema Whazing oferece suporte a WebHooks de duas maneiras: **por fila** ou **por canal**.

---

## 🔔 O que é um WebHook?

Um **WebHook** é uma funcionalidade que permite que sistemas externos recebam **notificações automáticas** sempre que determinados eventos ocorrem no **Whazing** — como a criação de tickets, envio ou recebimento de mensagens, e muito mais.

Em vez de você precisar consultar o Whazing periodicamente para saber se algo mudou, o Whazing envia essas atualizações em **tempo real** diretamente para o seu servidor.

**Exemplos de eventos enviados:**
- Nova mensagem recebida
- Nova mensagem enviada
- Criação de ticket
- Transferência de ticket
- Fechamento de ticket

---

## 🔄 Diferença entre WebHook e API

- **WebHook**:  
  Serve para **receber informações** do Whazing assim que elas acontecem, sem precisar fazer solicitações manuais.  
  ➔ **Exemplo**: Seu sistema é avisado automaticamente quando um novo ticket é criado.

- **API**:  
  Deve ser utilizada sempre que for necessário **alterar informações** no Whazing.  
  ➔ **Exemplo**: Enviar uma mensagem, alterar o status de um ticket ou atualizar dados de um contato.

---

# 🚀 Resumo

| Recurso | Função | Exemplo de Uso |
|:-------|:------|:--------------|
| **WebHook** | Receber notificações automáticas | Ser avisado sobre mensagens ou mudanças |
| **API** | Realizar alterações no sistema | Enviar mensagens, mudar status de ticket |

---

> 📢 **Importante:** Para utilizar WebHooks e APIs corretamente, é necessário configurar os endpoints no seu sistema para receber os dados enviados pelo Whazing.


# Modelos para estudo

- [Baixe e importe o exemplo de fluxo compatível com o Whazing](Modelo_Whazing_n8n.json).

- [Baixe e importe o exemplo de fluxo compatível com o Whazing](modelo_com_alguns_endpoints.json).

Obrigado Elizeu Garcez e Ricardo Schonfelder Filho por compartilhar modelos