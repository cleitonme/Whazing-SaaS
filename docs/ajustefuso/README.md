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