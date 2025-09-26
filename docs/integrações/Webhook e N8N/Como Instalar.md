# Como Instalar

## Instalar N8N mesma VPS WHAZING

### CRIAR SUBDOMINIO E APONTAR PARA O IP DA SUA VPS

Exemplo: n8n.webconfiavel.com.br

### CHECAR PROPAGAÇÃO DO DOMÍNIO

https://dnschecker.org/

### Acesso Portainer

Acesse URL do Portainer: http://seuip:9000/

Caso seja primeira vez tem que gerar senha conforme instruções abaixo

### Acesso Portainer gerar senha

"Your Portainer instance timed out for security purposes. To re-enable your Portainer instance, you will need to restart Portainer."

Executar no terminal

```bash
docker container restart portainer
```

Depois acesse novamente url http://seuip:9000/

## Continuando

* Vai "Home" - "Live Connect" - "Stacks" - "Add Stack"
* Name - postgresql-n8n
* Web editor - Coloque conteudo abaixo

```bash
version: "3.7"

services:
  postgres:
    container_name: postgresqln8n
    image: postgres:latest
    restart: always
    environment:
      - POSTGRES_PASSWORD=Admin33Admin77
    networks:
      - n8n_rede
    #ports:
    #  - 5432:5432
    volumes:
      - postgres_n8n:/var/lib/postgresql/data
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints:
          - node.role == manager
      resources:
        limits:
          cpus: "0.5"
          memory: 1024M

volumes:
  postgres_n8n:
    external: false
    name: postgres_n8n

networks:
  n8n_rede:
    external: false
    name: n8n_rede
```

* Clique em Deploy the stack - Aguarde demora um pouco
* Vai "Home" - "Live Connect" - "Stacks" - "Add Stack"
* Name - n8n
* Web editor - Coloque conteudo abaixo

```bash
version: "3.7"

services:
  n8n:
    container_name: n8n
    image: n8nio/n8n
    restart: always
    networks:
      - n8n_rede
    ports:
      - 5678:5678
    volumes:
      - n8n_data:/data
    environment:
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_USER=postgres
      - DB_POSTGRESDB_PASSWORD=Admin33Admin77
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_DATABASE=postgres
      - DB_POSTGRESDB_HOST=postgres
      - PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
      - NODE_ENV=production
      - N8N_RELEASE_TYPE=stable
      - WEBHOOK_URL=https://n8n.webconfiavel.com.br
      - N8N_HOST=https://n8n.webconfiavel.com.br/
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints:
          - node.role == manager
volumes:
  n8n_data:
    external: false
    name: n8n_data

networks:
  n8n_rede:
    external: false
    name: n8n_rede
```

. Editar arquivo caddy&#x20;

```bash
sudo nano /etc/caddy/Caddyfile
```

. Acrecentar a dados do N8N

```bash
n8n.webconfiavel.com.br {
    reverse_proxy 127.0.0.1:5678
    request_body {
        max_size 200MB
    }
}
```

.&#x20;

Reiniciar o caddy

```bash
sudo systemctl restart caddy
```

Adicionar N8N rede principal

```bash
docker network connect bridge n8n
```
