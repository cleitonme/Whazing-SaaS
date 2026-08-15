# PgBouncer (banco de dados sobrecarregado): instalação e configuração

O PgBouncer é um **gerenciador de conexões do PostgreSQL**. Ele ajuda a evitar travamentos e melhora o desempenho do sistema.

***

### 📌 1. Verificar dados do banco

Antes de tudo, você precisa pegar os dados corretos do seu banco.

Abra o arquivo:

```
/home/deploy/whazing/backend/.env
```

Procure essas informações:

```
DB_DIALECT=postgres
DB_PORT=5432
POSTGRES_HOST=localhost
POSTGRES_USER=whazing
POSTGRES_PASSWORD=senhabanco
POSTGRES_DB=postgres
```

👉 **Importante:**\
Você vai usar esses dados no próximo passo.

***

### 🧠 2. Montar o comando do PgBouncer

Agora você precisa montar o comando com **os seus dados reais**.

#### 🔧 Comando base:

```
docker run -d \
  --name pgbouncer-whazing \
  --restart=always \
  --network host \
  -e DATABASES="postgres=host=127.0.0.1 port=5432 dbname=postgres user=whazing password=senhabanco" \
  -e POOL_MODE=transaction \
  -e LISTEN_PORT=6432 \
  pgbouncer/pgbouncer
```

***

#### ⚠️ O que você deve alterar:

Substitua dentro de `DATABASES`:

| Campo    | De onde vem         |
| -------- | ------------------- |
| dbname   | `POSTGRES_DB`       |
| user     | `POSTGRES_USER`     |
| password | `POSTGRES_PASSWORD` |

***

#### ✅ Exemplo preenchido:

Se seu `.env` for:

```
POSTGRES_DB=postgres
POSTGRES_USER=whazing
POSTGRES_PASSWORD=123456
```

Então fica:

```
-e DATABASES="postgres=host=127.0.0.1 port=5432 dbname=postgres user=whazing password=123456"
```

***

### ▶️ 3. Executar o PgBouncer

Depois de ajustar o comando, execute no servidor:

```
docker run -d \
  --name pgbouncer-whazing \
  --restart=always \
  --network host \
  -e DATABASES="SEU_COMANDO_AQUI" \
  -e POOL_MODE=transaction \
  -e LISTEN_PORT=6432 \
  pgbouncer/pgbouncer
```

***

### 🔁 4. Alterar a porta no sistema

Agora você precisa dizer ao sistema para usar o PgBouncer.

Abra novamente o `.env` e altere:

```
DB_PORT=6432
```

***

### 🔄 5. Reiniciar o backend

Execute:

```
docker container restart whazing-backend
```

***

### ✅ 6. Testar se está funcionando

* Acesse o sistema normalmente
* Veja se carrega sem erro

***

### 📋 7. Ver logs (muito importante)

#### 🔎 Logs do backend:

```
docker logs --tail 100 -f whazing-backend
```

***

#### 🔎 Logs do PgBouncer:

```
docker logs --tail 100 -f pgbouncer-whazing
```

***

### ⚠️ Possíveis problemas

* ❌ Erro de autenticação → senha errada
* ❌ Banco não conecta → nome do banco errado
* ❌ Sistema não abre → porta não alterada para 6432

***

### 🎯 Resumo rápido

1. Pegar dados no `.env`
2. Montar comando do PgBouncer
3. Subir container
4. Alterar porta para `6432`
5. Reiniciar backend
6. Testar sistema
7. Ver logs
