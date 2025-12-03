---
icon: code
---

# Exemplos de Código

#### Python

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
        headers = {'Authorization': f'Bearer {self.headers["Authorization"]}'}
        response = requests.post(self.base_url, 
                               headers=headers, 
                               files=files)
        return response.json()
```

#### Node.js

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
```

#### PHP

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
```
