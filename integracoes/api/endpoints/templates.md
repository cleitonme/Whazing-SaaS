# Templates

**1. Template Simples**

* **Método**: POST
* **Endpoint**: `/apioficial`

```json
{
    "number": "5511999999999",
    "contents": {
        "name": "nome_do_template",
        "components": [{
            "type": "body",
            "parameters": []
        }],
        "language": {
            "code": "pt_BR"
        }
    }
}
```

**2. Template com Parâmetros**

* **Método**: POST
* **Endpoint**: `/apioficial`

```json
{
    "number": "5511999999999",
    "contents": {
        "name": "nome_do_template",
        "components": [
            {
                "type": "header",
                "parameters": [{
                    "type": "image",
                    "image": {
                        "link": "link_da_imagem"
                    }
                }]
            },
            {
                "type": "body",
                "parameters": [
                    {
                        "type": "text",
                        "parameter_name": "nome_do_parametro",
                        "text": "texto_do_parametro"
                    }
                ]
            },
            {
                "type": "button",
                "sub_type": "tipo_do_botão",
                "index": "index_do_botão",
                "parameters": []
            }
        ],
        "language": {
            "code": "pt_BR"
        }
    }
}
```
