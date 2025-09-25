# ❗ Erro no sistema: \[ioredis] Unhandled error event: Error: connect ECONNREFUSED

Esse erro significa que o Redis (parte importante do sistema) não está funcionando corretamente ou não está aceitando conexões. Vamos resolver isso reinstalando o Redis.

***

## ✅ Passo a passo para reinstalar o Redis

### 1. Acesse sua VPS como **usuário root**

Se estiver usando SSH, conecte assim (substitua `IP_DA_SUA_VPS`):

```bash
ssh root@IP_DA_SUA_VPS
```

***

### 2. Pare o sistema Whazing

```bash
docker stop whazing-backend
```

***

### 3. Pare o Redis atual

```bash
docker stop redis-whazing
```

***

### 4. Remova o Redis atual

```bash
docker rm redis-whazing
```

***

### 5. Limpe imagens antigas do Docker

```bash
docker image prune -f
```

***

### 6. Pegue a senha do Redis

Abra o arquivo `.env` com seu editor de texto preferido:

```bash
nano /home/deploy/whazing/backend/.env
```

Procure a linha que começa com:

```
IO_REDIS_PASSWORD=
```

Copie **apenas o valor** depois do `=`, pois vamos usar esse valor no próximo passo.

***

### 7. Reinstale o Redis

Execute este comando (substitua `senhacopiada` pela senha que você copiou no passo 6):

```bash
docker run --name redis-whazing \
  -e TZ=America/Sao_Paulo \
  -p 6383:6379 \
  --restart=always \
  -d redis:latest redis-server \
    --requirepass "senhacopiada" \
    --maxclients 2000 \
    --tcp-keepalive 60 \
    --maxmemory-policy allkeys-lru \
    --save "" \
    --appendonly yes \
    --appendfsync everysec
```

✅ **Dica**: Se estiver em outro fuso horário, troque `America/Sao_Paulo` pelo seu.

***

### 8. Inicie novamente o sistema Whazing

```bash
docker start whazing-backend
```

***

Pronto! O Redis foi reinstalado e o sistema deve funcionar normalmente.
