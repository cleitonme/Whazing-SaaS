# Instalar N8N mesma VPS WHAZING

## CRIAR SUBDOMINIO E APONTAR PARA O IP DA SUA VPS

Exemplo:
n8n.webconfiavel.com.br

## CHECAR PROPAGAÇÃO DO DOMÍNIO

https://dnschecker.org/

## Acesso Portainer

Acesse URL do Portainer: http://seuip:9000/

Caso seja primeira vez tem que gerar senha conforme instruções abaixo

## Acesso Portainer gerar senha
"Your Portainer instance timed out for security purposes. To re-enable your Portainer instance, you will need to restart Portainer."

Executar no terminal
```bash
docker container restart portainer
```

Depois acesse novamente url http://seuip:9000/

# Continuando

- Vai "Home" - "Live Connect" - "Stacks" - "Add Stack"

- Name - postgresql-n8n

- Web editor - Coloque conteudo abaixo

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

- Clique em Deploy the stack - Aguarde demora um pouco

- Vai "Home" - "Live Connect" - "Stacks" - "Add Stack"

- Name - n8n

- Web editor - Coloque conteudo abaixo

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

. Criar e editar o arquivo n8n com o comando abaixo e prencher com os dados do proximo item

```bash
sudo nano /etc/nginx/sites-available/n8n
```

. Editar os dados abaixo com a URL que será usada para acessar o minio api.

```bash
server {
  server_name n8n.webconfiavel.com.br;

  location / {
    proxy_pass http://127.0.0.1:5678;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_cache_bypass $http_upgrade;
  }

}
```

. Criar link simbólico para o arquivo minioapi

```bash
sudo ln -s /etc/nginx/sites-available/n8n /etc/nginx/sites-enabled/
```

. Testar as configurações do nginx

```bash
sudo nginx -t
```

. Restartar o nginx

```bash
sudo service nginx restart
```

. Gerar certificado

```bash
sudo certbot --nginx
```

- Você tera liberar rede nova no firewall no ponteiner acesse Network - vai ter rede 	n8n_rede copie coluna IPV4 vai ter valor parecido 172.18.0.0/16 com essa informacao coloque comando abaixo
- Comando digitar terminal altere conforme dados acima
```bash
sudo iptables -t nat -A POSTROUTING ! -o docker0 -s 172.18.0.0/16 -j MASQUERADE
```

- Criar pasta para um script executar comando inicializacao
```bash
sudo mkdir /etc/iptables
```

- Criar um script executar comando inicializacao
```bash
sudo nano /etc/iptables/rules.sh
```

- crie arquivo como exemplo abaixo coloque todas linhas necessarias pode ter mais de uma se tiver varios doccker como exemplo abaixo
```bash
#!/bin/bash

# Regras NAT
iptables -t nat -A POSTROUTING ! -o docker0 -s 172.17.0.0/16 -j MASQUERADE
iptables -t nat -A POSTROUTING ! -o docker0 -s 172.18.0.0/16 -j MASQUERADE
iptables -t nat -A POSTROUTING ! -o docker0 -s 172.19.0.0/16 -j MASQUERADE
iptables -t nat -A POSTROUTING ! -o docker0 -s 172.20.0.0/16 -j MASQUERADE
```

- tornar arquivo executavel
```bash
sudo chmod +x /etc/iptables/rules.sh
```

- Executar script
```bash
sudo /etc/iptables/rules.sh
```

- Configurar o Script para Executar na Inicialização
```bash
sudo nano /etc/rc.local
```

- Adiciona no rc.local como exemplo
```bash
#!/bin/bash
sudo /etc/iptables/rules.sh
```

- tonar executavel
```bash
sudo chmod +x /etc/rc.local
```

- vericar status rc.local
```bash
sudo systemctl status rc-local
```

- Caso nao tenha rc.local ativado verificar abaixo.
https://www.lw92.me/index.php/archives/550

- create a systemd service
```bash
sudo nano /etc/systemd/system/rc-local.service
```

- Colocar dados abaixo no arquivo acima
```bash
[Unit]
Description=Local Startup Script

[Service]
Type=simple
ExecStart=/etc/rc.local

[Install]
WantedBy=multi-user.target
```

- Tornar executavel
```bash
sudo chmod 644 /etc/systemd/system/rc-local.service
```

- Ativar
```bash
sudo systemctl enable rc-local.service
```

- Iniciar
```bash
sudo systemctl start rc-local.service
```

- Verificar Status
```bash
sudo systemctl status rc-local.service
```

- Errei ou quero alterar algo so alterar dados na stack na opcao editor e escolher update stack 