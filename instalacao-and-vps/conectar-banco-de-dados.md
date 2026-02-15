---
icon: database
---

# Banco de Dados

## 🔑 Como descobrir a senha do banco no Whazing

Em sistemas baseados no **Whazing**, a senha do banco de dados não fica visível no painel.

Ela está salva no arquivo:

```

.env

```

---

## 📂 Localização do arquivo `.env`

Em servidores Ubuntu (instalação padrão):

```

/home/deploy/whazing/backend/.env

````

Esse arquivo contém:

- DB_HOST
- DB_PORT
- DB_USER
- DB_PASS
- DB_NAME

Para visualizar via SSH:

```bash
nano /home/deploy/whazing/backend/.env
````

ou

```bash
cat /home/deploy/whazing/backend/.env
```

---

# 🔐 Formas de Conexão com o Banco

Você pode acessar o PostgreSQL de duas formas:

## ✅ 1. Via SSH (RECOMENDADO)

Mais seguro.
Não precisa abrir a porta 5432 no servidor.

## ⚠️ 2. Acesso Direto (abrindo porta 5432)

Necessário configurar o firewall (não recomendado para produção).

---

# 🔥 Configuração do Firewall (UFW)

## Verificar se o firewall está ativo

```bash
sudo ufw status
```

---

## 🔓 Abrir Porta 5432

```bash
sudo ufw allow 5432/tcp
```

Confirmar:

```bash
sudo ufw status
```

---

## 🔒 Liberar apenas seu IP (RECOMENDADO)

Substitua SEU_IP:

```bash
sudo ufw allow from SEU_IP to any port 5432 proto tcp
```

Exemplo:

```bash
sudo ufw allow from 189.10.10.10 to any port 5432 proto tcp
```

---

## 🚫 Desativar o Firewall (NÃO RECOMENDADO)

```bash
sudo ufw disable
```

Para reativar:

```bash
sudo ufw enable
```

⚠️ Desativar o firewall deixa o servidor exposto.

---

# 💻 Acessando o Banco com DBeaver

## 1. Baixar o DBeaver

🔗 [https://dbeaver.io/download/](https://dbeaver.io/download/)

---

## 2. Criar Conexão PostgreSQL

1. Abra o DBeaver
2. Clique em **Nova Conexão**
3. Escolha **PostgreSQL**

---

## 3. Preencher Dados

### 🔹 Se abriu porta 5432

* Host: IP da VPS
* Porta: 5432
* Banco: postgres
* Usuário: whazing
* Senha: (do .env)

### 🔹 Se for usar SSH (RECOMENDADO)

Na aba **SSH**:

* Marcar “Usar túnel SSH”
* Host SSH: IP da VPS
* Porta: 22
* Usuário: deploy

Na aba principal:

* Host: localhost
* Porta: 5432
* Banco: postgres
* Usuário: whazing
* Senha: (do .env)

---

# 🖼️ Exemplos Visuais

## Configuração do Banco

<figure>
<img src="../.gitbook/assets/image (81).png" alt="">
<figcaption></figcaption>
</figure>

---

## Configuração SSH

<figure>
<img src="../.gitbook/assets/image (82).png" alt="">
<figcaption></figcaption>
</figure>

---

# 🔐 Recuperação de Senha de Usuário

## Passo 1 – Acessar a Tabela Users

No DBeaver:

```
Schemas → public → Tables → Users
```

Botão direito → **Visualizar Dados → Todas as Linhas**

![](https://atendecloud.gitbook.io/atendecloud/~gitbook/image?url=https%3A%2F%2F1785706021-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FplOSacHdPLoVZCJ1gEqO%252Fuploads%252FspUtRcMdLEw8A32SsN4k%252Fimage.png%3Falt%3Dmedia%26token%3Dc63090f1-5f71-476b-8fe5-4edda4e7476d)

---

## Passo 2 – Abrir Console SQL

Botão direito no banco →
**SQL Editor → New SQL Script**

![](https://atendecloud.gitbook.io/atendecloud/~gitbook/image?url=https%3A%2F%2F1785706021-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FplOSacHdPLoVZCJ1gEqO%252Fuploads%252FQIr3EH507hUiPxUqL3SM%252Fimage.png)

---

## Passo 3 – Redefinir Senha

```sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;

UPDATE public."Users"
SET "passwordHash" = crypt('Suasenhanova', gen_salt('bf'))
WHERE "email" = 'adm@gmail.com';
```

⚠️ Substitua:

* 'Suasenhanova'
* '[adm@gmail.com](mailto:adm@gmail.com)'

Execute o script ▶️

---

## Passo 4 – Confirmar Alteração

```sql
SELECT "email", "passwordHash"
FROM public."Users"
WHERE "email" = 'adm@gmail.com';
```

Se retornar o novo hash, a senha foi atualizada com sucesso.

---

# ✅ Resultado Final

Senha redefinida com sucesso.
O usuário já pode acessar o sistema normalmente.

---

# 🔐 Recomendações de Segurança

* ✅ Prefira sempre SSH
* ❌ Evite deixar 5432 aberta permanentemente
* 🔒 Libere apenas seu IP
* 🔁 Após usar acesso direto, feche a porta:

```bash
sudo ufw delete allow 5432/tcp
```