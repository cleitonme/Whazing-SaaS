# Webhook e N8N

## 🌐 **WebHook - Visão Geral**

O sistema Whazing oferece suporte a WebHooks de duas maneiras:

**Fila**

**Cadastro - Filas/integrações - Integrações**

**Adiciona tipo N8N/Webhook, preencha nome identificar, url tipo post e N8N API KEY. Apos salve agora clique em filas edite uma ou crie uma nova, integração marque a que você acabou criar e caso queira webhook seja acionado imediamente ao transferir aquela fila pelo bot ou atendimento manual marque opção "**&#x49;nicia Integração ao transferir", caso não marca evento será enviado na próxima mensagem recebida ou enviada quando ticket fizer parte daquela fila.

C**anal - Configurações - Canais/API - Configurações do canal**

**Marcar** Ativar Webhook

Colocar url do N8N deve ser url tipo POST e marcar tipo de evento será enviado caso não marcar nenhum nao será enviado nenhum evento. N8N API KEY opcional util para validar origem do webhook evitar falsos webhook em caso descoberta url publica



***

### 🔔 O que é um WebHook?

Um **WebHook** é uma funcionalidade que permite que sistemas externos recebam **notificações automáticas** sempre que determinados eventos ocorrem no **Whazing** — como a criação de tickets, envio ou recebimento de mensagens, e muito mais.

Em vez de você precisar consultar o Whazing periodicamente para saber se algo mudou, o Whazing envia essas atualizações em **tempo real** diretamente para o seu servidor.

**Exemplos de eventos enviados:**

* Nova mensagem recebida
* Nova mensagem enviada
* Criação de ticket
* Transferência de ticket
* Fechamento de ticket

***

### 🔄 Diferença entre WebHook e API

* **WebHook**:\
  Serve para **receber informações** do Whazing assim que elas acontecem, sem precisar fazer solicitações manuais.\
  ➔ **Exemplo**: Seu sistema é avisado automaticamente quando um novo ticket é criado.
* **API**:\
  Deve ser utilizada sempre que for necessário **alterar informações** no Whazing.\
  ➔ **Exemplo**: Enviar uma mensagem, alterar o status de um ticket ou atualizar dados de um contato.

***

## 🚀 Resumo

| Recurso     | Função                           | Exemplo de Uso                           |
| ----------- | -------------------------------- | ---------------------------------------- |
| **WebHook** | Receber notificações automáticas | Ser avisado sobre mensagens ou mudanças  |
| **API**     | Realizar alterações no sistema   | Enviar mensagens, mudar status de ticket |

***

> 📢 **Importante:** Para utilizar WebHooks e APIs corretamente, é necessário configurar os endpoints no seu sistema para receber os dados enviados pelo Whazing.

## Modelos para estudo

* [Baixe e importe o exemplo de fluxo compatível com o Whazing](../../integra%C3%A7%C3%B5es/Webhook%20e%20N8N/Modelo_Whazing_n8n.json).
* [Baixe e importe o exemplo de fluxo compatível com o Whazing](../../integra%C3%A7%C3%B5es/Webhook%20e%20N8N/modelo_com_alguns_endpoints.json).

Obrigado Elizeu Garcez e Ricardo Schonfelder Filho por compartilhar modelos

**NODE WHAZING PARA N8N**

Atenção sempre bom da conferida documentação da api pode não ter todos endpoints no node

[https://www.npmjs.com/package/n8n-nodes-whazing](https://www.npmjs.com/package/n8n-nodes-whazing)

{% embed url="https://youtu.be/To1x6wZAI1s" %}

<figure><img src="../../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>
