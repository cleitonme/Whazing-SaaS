# 🎫 GLPI

A integração do **Whazing com o GLPI** permite:

* ✅ **Abertura automática de chamados**
* 🔎 **Consulta de chamados em aberto**
* 🔁 Integração via fila de atendimento

---

## ⚙️ Onde configurar no Whazing

Acesse:

> **Cadastro → Filas → Integrações**

Clique em **Adicionar**.

Você verá duas opções:

* 🆕 **Criar Chamado GLPI**
* 🔍 **Consultar Chamado GLPI**

---

## 🆕 Criar Chamado GLPI

Ao selecionar essa opção, haverá a configuração:

### ⏱ Intervalo entre Mensagens (ms)

**Tempo de espera para unir mensagens do cliente**

Se o cliente enviar várias mensagens em sequência (mensagens “picotadas”), o sistema aguarda esse tempo para **unificar tudo em um único chamado no GLPI**.

👉 **Recomendado: 15000 ms (15 segundos)**
Este é o valor mínimo indicado para evitar múltiplos chamados desnecessários.

---

## 🔐 Dados necessários do GLPI

Para configurar a integração, você precisará informar:

* 🌐 **URL da Integração**
* 🔑 **APP TOKEN**
* 👤 **USER TOKEN**

---

# 🌐 Obtendo a URL da Integração e APP TOKEN

No **GLPI**, acesse:

> **Configurar → Geral → API**

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

### ✅ Ativar a API

Após ativar a API, cadastre no Whazing no seguinte formato:

```
https://seudominio.com.br/glpi/apirest.php
```

⚠️ **Importante:**
Não coloque `/` no final da URL.

---

## 🔑 Gerar APP TOKEN

1. Clique em **Adicionar Cliente de API**

<figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

2. Deixe o campo **IP em branco**
   (ou informe o IP da sua VPS)
3. Marque como **Ativo**
4. Marque **Re-gerar**
5. Clique em **Adicionar**

Depois:

* Vá em **Clientes de API**
* Clique no cliente recém-criado
* Copie o campo **Token da Aplicação**

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

---

# 👤 Gerar USER TOKEN

O usuário precisa ter permissão para **criar chamados nas empresas desejadas**.

Acesse:

> **Administração → Usuários**

1. Abra o usuário que será utilizado
2. No final da página, localize **API Token**
3. Clique em **Re-gerar**
4. Salve

O token será exibido para uso no campo **User_token** no Whazing.

![](<../../.gitbook/assets/image (7).png>)

---

# 👥 Regras Importantes de Usuário

Para que o chamado seja criado corretamente:

* O usuário deve ter **e-mail cadastrado ou telefone**
* O sistema irá:

  1. 🔍 Buscar pelo **WhatsApp do cliente**
  2. Caso não encontre, buscar pelo **e-mail**
  3. Se não existir, irá cadastrar automaticamente

⚠️ No usuário, a **Entidade padrão** deve estar configurada corretamente com a empresa correspondente.

---

# 🎯 Configurando a Fila

Defina uma fila para quando o cliente solicitar atendimento humano.

<figure><img src="../../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

Depois:

1. Crie uma fila
2. Vincule a integração GLPI
3. Marque a opção **Iniciar ao transferir**

<figure><img src="../../.gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>

---

## 🚀 Como funciona na prática

Basta o **bot transferir o atendimento para essa fila**.

Ao transferir:

* A integração será iniciada automaticamente
* O chamado será criado no GLPI
* O número do chamado poderá ser retornado ao cliente