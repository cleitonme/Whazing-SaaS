---
icon: info
---

# Introdução e Autenticação

ALGUNS ENDPOINTS NOVOS PODEM NÃO ESTAR NA DOCUMENTAÇÃO SEMPRE BAIXE MODELO POSTMAN

Para fazer download acessa configurações - canais/api

Na aba API, clique adicionar selecione canal quer usar e depois aparece botão postman para baixar

### Autenticação

Todas as requisições devem incluir o token Bearer no header:

```http
Authorization: Bearer seu-token-aqui
```

### Observações Importantes

1. Todos os números devem estar no formato DDI+DDD+NÚMERO (ex: 5511999999999)
2. O token de autenticação deve ser mantido em segurança
3. Para mensagens em grupo, use o formato "id\_grupo@grupo" no campo id seria campo number
4. Os templates devem ser previamente aprovados pelo WhatsApp
5. Mantenha o externalKey único para cada mensagem para rastreamento
6. Certifique-se de que os arquivos enviados estejam em formatos suportados pelo WhatsApp
7. Para endpoints que aceitam status, os valores possíveis são: "pending", "open", "closed"
8. Os IDs de fila (queueId) e usuário (userId) devem existir no sistema

Para casos específicos ou dúvidas adicionais, consulte a documentação completa ou entre em contato com o suporte.
