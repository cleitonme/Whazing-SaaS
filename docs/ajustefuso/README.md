# ✅ **Como Ajustar o Fuso Horário no Whazing (Servidor e Banco de Dados)**

## 🛠️ 1. Ajustar Timezone no Backend Whazing

1. Acesse a pasta do backend (geralmente):

   ```bash
   cd /home/deploy/whazing
   ```

2. Edite o arquivo `.env`:

   ```bash
   nano .env
   ```

3. Localize a variável `DB_TIMEZONE` e ajuste conforme o fuso horário desejado:

   ```env
   DB_TIMEZONE=-3
   ```
   
4. Localize a variável `TZ` e ajuste conforme o fuso horário desejado:

   ```env
   TZ=America/Sao_Paulo
   ```

5. parar docker

   ```env
   docker stop whazing-backend
   ```

5. Remover docker

   ```env
   docker rm whazing-backend
   ```

5. Reinstalar docker, alterar fuso e se quer beta ou latest

   ```env
  docker run -d \
  --name whazing-backend \
  --network host \
  --restart=always \
  -e TZ=America/Sao_Paulo \
  -v /etc/localtime:/etc/localtime:ro \
  -v /home/deploy/whazing/backend/private:/app/private \
  -v /home/deploy/whazing/backend/public:/app/public \
  -v /home/deploy/whazing/backend/logs:/app/logs \
  -v /home/deploy/whazing/backend/.env:/app/.env \
  whazing/whazing-backend:beta
   ```

> 📌 **Dica:** Essa variável afeta o timezone usado nas conexões com o banco de dados.

---

## 🖥️ 2. Ajustar o Timezone do Sistema Linux (Ubuntu)

Execute o comando abaixo para definir o timezone correto no servidor:

```bash
sudo timedatectl set-timezone America/Sao_Paulo
```

> ✅ Verifique o timezone atual:

```bash
timedatectl
```

---

## 🌍 3. Timezones Comuns no Brasil

| Região              | Timezone            |
| ------------------- | ------------------- |
| Horário de Brasília | `America/Sao_Paulo` |
| Manaus              | `America/Manaus`    |
| Recife              | `America/Recife`    |
| Cuiabá              | `America/Cuiaba`    |
| Belém               | `America/Belem`     |

> 🧭 Use o comando abaixo para listar todos os timezones disponíveis:

```bash
timedatectl list-timezones
```