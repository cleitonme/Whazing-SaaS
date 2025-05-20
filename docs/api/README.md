# **Como USAR API DO WHAZING**

---

Atualmente api somente funciona canal whatsapp bayles

- externalkey - Esse é um valor para identificar mensagem, pode colocar qualquer valor, ele aparece no webook na apiConfig

---

## **1. Segue arquivo postman**

- Faça o [download do arquivo modelo](apiizing.json)

---

# Manual de Uso da API Whazing

![print](whazing.png)

## Índice
1. Autenticação
2. Endpoints Disponíveis
3. Exemplos de Uso
4. Códigos de Exemplo

## 1. Autenticação

Todas as requisições devem incluir o token Bearer no header de autenticação. Para o exemplo fornecido:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6MSwicHJvZmlsZSI6ImFkbWluIiwic2Vzc2lvbklkIjo0LCJpYXQiOjE3NDIxMzEyNDMsImV4cCI6MTgwNTIwMzI0M30.gXZNKw76z-5334NBMOr7ToBMLF0szIsqv8P_CK5T9js
```

## 2. Endpoints Disponíveis

Base URL: `https://testeapi.whazing.com.br/v1/api/external/d6747d15-7346-4047-97f4-247f6ce45585`

### 2.1 Envio de Mensagens

#### a) Enviar Mensagem de Texto
- **Endpoint**: `/`
- **Método**: POST
- **Content-Type**: application/json

```json
{
    "body": "Sua mensagem aqui",
    "number": "5511999999999",
    "externalKey": "ID_UNICO_SISTEMA"
}
```

#### b) Enviar Mensagem para Grupo
- **Endpoint**: `/`
- **Método**: POST
- **Content-Type**: application/json

```json
{
    "body": "Sua mensagem aqui",
    "number": "nome-do-grupo@grupo",
    "externalKey": "ID_UNICO_SISTEMA"
}
```

#### c) Enviar Arquivo
- **Endpoint**: `/`
- **Método**: POST
- **Content-Type**: multipart/form-data

Parâmetros:
- media (arquivo)
- body (texto)
- number (telefone ou grupo)
- externalKey (identificador único)

### 2.2 Consulta de Tickets

#### a) Consultar Ticket Específico
- **Endpoint**: `/showticket`
- **Método**: POST
```json
{
    "number": "5511999999999"
}
```

#### b) Consultar Todos os Tickets
- **Endpoint**: `/showallticket`
- **Método**: POST
```json
{
    "number": "5511999999999"
}
```

### 2.3 Gerenciamento de Tickets

#### a) Atualizar Tag
- **Endpoint**: `/updatetag`
- **Método**: POST
```json
{
    "ticketId": 1234,
    "tag": 1
}
```

#### b) Atualizar Fila
- **Endpoint**: `/updatequeue`
- **Método**: POST
```json
{
    "ticketId": 1234,
    "queueId": 1
}
```

#### c) Atualizar Informações do Ticket
- **Endpoint**: `/updateticketinfo`
- **Método**: POST
```json
{
    "ticketId": 1234,
    "status": "open",
    "userId": 1,
    "queueId": null
}
```

## 3. Exemplos de Código

### Python
```python
import requests
import json

class WhazingAPI:
    def __init__(self, base_url, token):
        self.base_url = base_url
        self.headers = {
            'Authorization': f'Bearer {token}',
            'Content-Type': 'application/json'
        }

    def send_message(self, number, body, external_key):
        payload = {
            'number': number,
            'body': body,
            'externalKey': external_key
        }
        response = requests.post(self.base_url, 
                               headers=self.headers, 
                               json=payload)
        return response.json()

    def send_file(self, number, file_path, body, external_key):
        files = {
            'media': open(file_path, 'rb'),
            'body': (None, body),
            'number': (None, number),
            'externalKey': (None, external_key)
        }
        headers = {'Authorization': f'Bearer {token}'}
        response = requests.post(self.base_url, 
                               headers=headers, 
                               files=files)
        return response.json()

# Exemplo de uso
api = WhazingAPI(
    'https://testeapi.whazing.com.br/v1/api/external/d6747d15-7346-4047-97f4-247f6ce45585',
    'seu-token-aqui'
)

# Enviar mensagem
result = api.send_message('5511999999999', 'Olá, mundo!', 'TEST123')
```

### Node.js
```javascript
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

class WhazingAPI {
    constructor(baseUrl, token) {
        this.baseUrl = baseUrl;
        this.token = token;
    }

    async sendMessage(number, body, externalKey) {
        try {
            const response = await axios.post(
                this.baseUrl,
                {
                    number,
                    body,
                    externalKey
                },
                {
                    headers: {
                        'Authorization': `Bearer ${this.token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async sendFile(number, filePath, body, externalKey) {
        const form = new FormData();
        form.append('media', fs.createReadStream(filePath));
        form.append('body', body);
        form.append('number', number);
        form.append('externalKey', externalKey);

        try {
            const response = await axios.post(
                this.baseUrl,
                form,
                {
                    headers: {
                        'Authorization': `Bearer ${this.token}`,
                        ...form.getHeaders()
                    }
                }
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

// Exemplo de uso
const api = new WhazingAPI(
    'https://testeapi.whazing.com.br/v1/api/external/d6747d15-7346-4047-97f4-247f6ce45585',
    'seu-token-aqui'
);

// Enviar mensagem
api.sendMessage('5511999999999', 'Olá, mundo!', 'TEST123')
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

### PHP
```php
<?php

class WhazingAPI {
    private $baseUrl;
    private $token;

    public function __construct($baseUrl, $token) {
        $this->baseUrl = $baseUrl;
        $this->token = $token;
    }

    public function sendMessage($number, $body, $externalKey) {
        $curl = curl_init();
        
        $data = [
            'number' => $number,
            'body' => $body,
            'externalKey' => $externalKey
        ];

        curl_setopt_array($curl, [
            CURLOPT_URL => $this->baseUrl,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => json_encode($data),
            CURLOPT_HTTPHEADER => [
                'Authorization: Bearer ' . $this->token,
                'Content-Type: application/json'
            ]
        ]);

        $response = curl_exec($curl);
        curl_close($curl);

        return json_decode($response, true);
    }

    public function sendFile($number, $filePath, $body, $externalKey) {
        $curl = curl_init();
        
        $data = [
            'media' => new CURLFile($filePath),
            'body' => $body,
            'number' => $number,
            'externalKey' => $externalKey
        ];

        curl_setopt_array($curl, [
            CURLOPT_URL => $this->baseUrl,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $data,
            CURLOPT_HTTPHEADER => [
                'Authorization: Bearer ' . $this->token
            ]
        ]);

        $response = curl_exec($curl);
        curl_close($curl);

        return json_decode($response, true);
    }
}

// Exemplo de uso
$api = new WhazingAPI(
    'https://testeapi.whazing.com.br/v1/api/external/d6747d15-7346-4047-97f4-247f6ce45585',
    'seu-token-aqui'
);

// Enviar mensagem
$result = $api->sendMessage('5511999999999', 'Olá, mundo!', 'TEST123');
print_r($result);
```


Este manual fornece uma visão geral da API Whazing. Para casos específicos ou dúvidas adicionais, consulte a documentação completa ou entre em contato com o suporte.