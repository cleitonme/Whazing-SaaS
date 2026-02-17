---
icon: message
---

# Mensagens

#### Mensagens

**1. Enviar Mensagem de Texto**

* **Método**: POST
* **Endpoint**: `/`
* **Content-Type**: application/json

```json
{
    "body": "Sua mensagem aqui",
    "number": "5511999999999",
    "externalKey": "ID_UNICO_SISTEMA"
}
```

* Pode ser usado numero ticket em canais que não tem número telefone como instagram
* **Método**: POST
* **Endpoint**: `/`
* **Content-Type**: application/json

```json
{
    "body": "Sua mensagem aqui",
    "ticketId": "123",
    "externalKey": "ID_UNICO_SISTEMA"
}
```

**2. Enviar Arquivo**

* **Método**: POST
* **Endpoint**: `/`
* **Content-Type**: multipart/form-data

```json
{
    "media": "(arquivo)",
    "body": "Texto da mensagem",
    "number": "5511999999999",
    "externalKey": "ID_UNICO_SISTEMA"
}
```

* Pode ser usado numero ticket em canais que não tem número telefone como instagram
* **Método**: POST
* **Endpoint**: `/`
* **Content-Type**: multipart/form-data

```json
{
    "media": "(arquivo)",
    "body": "Texto da mensagem",
    "ticketId": "123",
    "externalKey": "ID_UNICO_SISTEMA"
}
```

**3. Enviar Sticker**

* **Método**: POST
* **Endpoint**: `/`
* **Content-Type**: multipart/form-data

```json
{
    "media": "(arquivo)",
    "body": "sticker",
    "number": "5511999999999",
    "externalKey": "ID_UNICO_SISTEMA",
    "sticker": "true"
}
```

**4. Enviar Localização**

* **Método**: POST
* **Endpoint**: `/location`

```json
{
  "number": "5511999999999",
  "contents": {
    "type": "location",
    "longitude": -27.2842864,
    "latitude": -48.9243959,
    "name": "Nome do Local",
    "address": "Endereço Completo"
  }
}
```

**5. Enviar Mensagem via Parâmetros**

* **Método**: GET
* **Endpoint**: `/params`

```
/params/?body=Mensagem&number=5511999999999&externalKey=ID_UNICO&bearertoken=seu-token
```

**6. Enviar arquivo Base64**

* **Método**: POST
* **Endpoint**: `/`
* **Content-Type**: application/json

```json
{
  "body": "Mensagem de teste 2",
  "number": "{{number}}",
  "externalKey": "externalKeydd211",
  "mediaMessage": {
    "mediaType": "application/pdf",
    "fileName": "documento.pdf",
    "media": "JVBERi0xLjMKJcfsj6... [base64 completo do arquivo] ..."
  }
}
```

**7. Enviar Arquivo mediaurl**

* **Método**: POST
* **Endpoint**: `/`
* **Content-Type**: application/json

```json
{
  "body": "Mensagem de teste 2",
  "number": "{{number}}",
  "externalKey": "externalKeydd211",
  "mediaUrl": "https://img.freepik.com/psd-gratuitas/ilustracao-de-renderizacao-3d-isolada-do-icone-do-google_47987-9777.jpg"
}
```

**8. Enviar Contato**

* **Método**: POST
* **Endpoint**: `/sendcontact`
* **Content-Type**: application/json

```json
{
  "number": "{{number}}",
  "contents": {
    "type": "contact",
    "displayName": "nome do contato",
    "telephone": "551195248458"
  }
}
```

#### Mensagens Interativas

**1. Mensagem com Botões**

* **Método**: POST
* **Endpoint**: `/apioficial`

```json
{
    "number": "5511999999999",
    "contents": {
        "type": "button",
        "body": {
            "text": "Texto principal"
        },
        "action": {
            "buttons": [
                {
                    "type": "reply",
                    "reply": {
                        "id": "1",
                        "title": "Botão 1"
                    }
                }
            ]
        }
    }
}
```

**2. Mensagem com Lista**

* **Método**: POST
* **Endpoint**: `/apioficial`

```json
{
  "number": "5511999999999",
  "contents": {
    "type": "list",
    "header": {
      "type": "text",
      "text": "Título"
    },
    "body": {
      "text": "Descrição"
    },
    "action": {
      "sections": [
        {
          "title": "Seção 1",
          "rows": [
            {
              "id": 1,
              "title": "Item 1",
              "description": "Descrição do item 1"
            }
          ]
        }
      ],
      "button": "Clique aqui"
    }
  }
}
```

**3. Mensagem com Link (CTA)**

* **Método**: POST
* **Endpoint**: `/apioficial`

```json
{
    "number": "5511999999999",
    "contents": {
        "type": "cta_url",
        "header": {
            "type": "text",
            "text": "Título"
        },
        "body": {
            "text": "Descrição"
        },
        "footer": {
            "text": "Rodapé"
        },
        "action": {
            "name": "cta_url",
            "parameters": {
                "display_text": "Ver Mais",
                "url": "SEU_LINK"
            }
        }
    }
}
```

**4. Solicitar Localização**

* **Método**: POST
* **Endpoint**: `/apioficial`

```json
{
    "number": "5511999999999",
    "contents": {
        "type": "location_request_message",
        "body": {
            "text": "Por favor compartilhe sua localização"
        },
        "action": {
            "name": "send_location"
        }
    }
}
```
