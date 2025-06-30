# 📘 Documentação da API - **Whazing ADMIN**

**Descrição**: Esta API permite criar e atualizar empresas (tenants) no sistema Whazing.

Dados podem ser obtidos no painel SaaS na aba api, para funcionar api tem que estar habilitada

Segue modelo postman

- Faça o [download do arquivo modelo](API_SaaS.json)

Segue exemplo de um bot no typebot para criar Empresa

- Faça o [download do arquivo modelo](modelo_cadastro_teste.json)

Você pode usar esses endpoints para integrar diretamente com seu sistema, criar bots que criam testes, renova planos, altera senhas.

---

## 🔐 Autenticação

Todos os endpoints utilizam **Bearer Token** para autenticação.  
Você deve incluir o cabeçalho abaixo em todas as requisições:

```
Authorization: Bearer {{TOKEN_ADMIN}}
```

---

## 📌 Variáveis Globais

| Nome           | Descrição                                |
|----------------|-----------------------------------------------|
| `{{URL_ADMIN}}`  | URL base do servidor da API                |
| `{{API_ID}}`      | Versão ou ID do grupo de endpoints da API |
| `{{TOKEN_ADMIN}}` | Token de autenticação do administrador     |

---

## 🔄 Endpoints Disponíveis

### 📤 1. Criar Empresa

- **Método:** `POST`
- **URL:** `{{URL_ADMIN}}/{{API_ID}}/createtenant`
- **Descrição:** Cria uma nova empresa/tenant no sistema.

#### Headers
```
Content-Type: application/json
Authorization: Bearer {{TOKEN_ADMIN}}
```

#### Corpo da Requisição
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "mudar123",
  "tenantName": "Test Company",
  "phone": "55555555555",
  "plano": "1",
  "timetest": "3"
}
```

### 📤 2. Atualizar Empresa

- **Método:** `POST`
- **URL:** `{{URL_ADMIN}}/{{API_ID}}/updatetenant`
- **Descrição:** Atualiza os dados de uma empresa/tenant existente.

#### Headers
```
Content-Type: application/json
Authorization: Bearer {{TOKEN_ADMIN}}
```

#### Corpo da Requisição
```json
{
  "tenantId": "23",
  "email": "test@example.com",
  "tenantName": "Test Company",
  "phone": "55555555555",
  "plano": "1",
  "dueDate": "2025-07-17T20:58"
}
```

### 📋 3. Listar Todas as Empresas

- **Método:** `GET`
- **URL:** `{{URL_ADMIN}}/{{API_ID}}`
- **Descrição:** Retorna a lista de todas as empresas.

### 👥 4. Listar Usuários da Empresa

- **Método:** `GET`
- **URL:** `{{URL_ADMIN}}/{{API_ID}}/users/{tenantId}`
- **Descrição:** Retorna a lista de usuários de uma empresa específica.

### 🔑 5. Alterar Senha do Usuário

- **Método:** `POST`
- **URL:** `{{URL_ADMIN}}/{{API_ID}}/users`

#### Corpo da Requisição
```json
{
  "userId": "10",
  "password": "novasenha"
}
```

### 📊 6. Listar Empresa Específica

- **Método:** `GET`
- **URL:** `{{URL_ADMIN}}/{{API_ID}}`

### ⏰ 7. Renovar por 1 Mês

- **Método:** `POST`
- **URL:** `{{URL_ADMIN}}/{{API_ID}}/addMonth`

#### Corpo da Requisição
```json
{
  "tenantId": "34"
}
```

---

## ✅ Exemplo de Requisição (cURL)

### Criar Empresa
```bash
curl -X POST "{{URL_ADMIN}}/{{API_ID}}/createtenant" \
  -H "Authorization: Bearer {{TOKEN_ADMIN}}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "mudar123",
    "tenantName": "Test Company",
    "phone": "55555555555",
    "plano": "1",
    "timetest": "3"
  }'
```

### Atualizar Empresa
```bash
curl -X POST "{{URL_ADMIN}}/{{API_ID}}/updatetenant" \
  -H "Authorization: Bearer {{TOKEN_ADMIN}}" \
  -H "Content-Type: application/json" \
  -d '{
    "tenantId": "23",
    "email": "test@example.com",
    "tenantName": "Test Company",
    "phone": "55555555555",
    "plano": "1",
    "dueDate": "2025-07-17T20:58"
  }'
```
