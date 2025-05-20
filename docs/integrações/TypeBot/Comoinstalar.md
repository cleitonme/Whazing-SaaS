# Instalar Typebot mesma VPS WHAZING
Tutorial com muitos detalhes então preste bastante atenção e veja o video que me baseado pra fazer o mesmo, para ajudar entender melhor os passos. Lembrando no video ele usa traefik e alteramos usar nginx para ser compativel mesma vps whazing

Baseado tutorial alterado para usar com ngnix: https://rwebtec.com.br/instalar-typebot-portainer-lucrar-vendendo-assinaturas/ 

## CRIAR SUBDOMINIO E APONTAR PARA O IP DA SUA VPS

Exemplo:
chatbot.webconfiavel.com.br
chatbotapi.webconfiavel.com.br
minios3.webconfiavel.com.br
s3.webconfiavel.com.br

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

- Name - postgresql-typebot

- Web editor - Coloque conteudo abaixo

```bash
version: "3.7"

services:
  postgres:
    container_name: postgresqltypebot
    image: postgres:latest
    restart: always
    environment:
      - POSTGRES_PASSWORD=Admin33Admin77
    networks:
      - typebot_rede
    #ports:
    #  - 5432:5432
    volumes:
      - postgres_typebot:/var/lib/postgresql/data
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
  postgres_typebot:
    external: false
    name: postgres_typebot

networks:
  typebot_rede:
    external: false
    name: typebot_rede
```

- Clique em Deploy the stack - Aguarde demora um pouco

- Vai "Home" - "Live Connect" - "Stacks" - "Add Stack"

- Name - minio-typebot

- Web editor - Coloque conteudo abaixo

```bash
version: "3.7"

services:
  minio:
    container_name: miniotypebot
    image: minio/minio
    restart: always
    command: server /data --console-address ":9001"
    networks:
      - typebot_rede
    ports:
      - 32771:9000
      - 32772:9001
    volumes:
      - minio_data:/data
    environment:
      - MINIO_ROOT_USER=rodnei
      - MINIO_ROOT_PASSWORD=Admin33Admin77
      - MINIO_BROWSER_REDIRECT_URL=https://minios3.webconfiavel.com.br
      - MINIO_SERVER_URL=https://s3.webconfiavel.com.br
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints:
          - node.role == manager
volumes:
  minio_data:
    external: false
    name: minio_data

networks:
  typebot_rede:
    external: false
    name: typebot_rede
```

. Criar e editar o arquivo minioweb com o comando abaixo e prencher com os dados do proximo item

```bash
sudo nano /etc/nginx/sites-available/minioweb
```

. Editar os dados abaixo com a URL que será usada para acessar o minio browser.

```bash
server {
  server_name minios3.webconfiavel.com.br;

  location / {
    proxy_pass http://127.0.0.1:32772;
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

. Criar link simbólico para o arquivo minioweb

```bash
sudo ln -s /etc/nginx/sites-available/minioweb /etc/nginx/sites-enabled/
```

. Criar e editar o arquivo minioweb com o comando abaixo e prencher com os dados do proximo item

```bash
sudo nano /etc/nginx/sites-available/minioapi
```

. Editar os dados abaixo com a URL que será usada para acessar o minio api.

```bash
server {
  server_name s3.webconfiavel.com.br;

  location / {
    proxy_pass http://127.0.0.1:32771;
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
sudo ln -s /etc/nginx/sites-available/minioapi /etc/nginx/sites-enabled/
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

. Agora acesse url minio "minios3.webconfiavel.com.br"
      - MINIO_ROOT_USER=rodnei
      - MINIO_ROOT_PASSWORD=Admin33Admin77
	  
- Dentro do minio siga instruções abaixo
	  
- Buckets - 

- Bucket Name - typebot

- Create Bucket

- Clica bucket criado typebot alterar "Access Policy" Public

- Access Keys - Create Access Key

- Copia o Access Key - Secret Key

- Agora vamos voltar Portainer - "Stacks" - "Add Stack" - typebot_viewer

- Web editor - Coloque conteudo abaixo - alterar com dados email etc para funcionar - no campos S3 vai colocar dados que você gerou acima

```bash
version: "3.7"

services:
  typebot_viewer:
    container_name: typebotviewer
    image: baptistearno/typebot-viewer:latest
    restart: always
    networks:
      - typebot_rede
    ports:
      - 8081:3000
    environment:
      - DATABASE_URL=postgresql://postgres:Admin33Admin77@postgres:5432/postgres
      - ENCRYPTION_SECRET=7Rl2NKGhkMUHRV0dtRg8hD2YNopCrAeH
      - DEFAULT_WORKSPACE_PLAN=UNLIMITED
      - NEXTAUTH_URL=https://chatbot.webconfiavel.com.br
      - NEXT_PUBLIC_VIEWER_URL=https://chatbotapi.webconfiavel.com.br
      - NEXTAUTH_URL_INTERNAL=http://localhost:3000
      - DISABLE_SIGNUP=true
      - ADMIN_EMAIL=sourodmil@gmail.com
      - NEXT_PUBLIC_SMTP_FROM='RWeb Tec' <sourodmil@gmail.com>
      - SMTP_AUTH_DISABLED=false
      - SMTP_USERNAME=sourodmil@gmail.com
      - SMTP_PASSWORD=pfuvqidfkyhtaxtx
      - SMTP_HOST=smtp.gmail.com
      - SMTP_PORT=465
      - SMTP_SECURE=false
      # Configurações do Typebot e Google Cloud
      #- GOOGLE_CLIENT_ID=
      #- GOOGLE_CLIENT_SECRET=
      # Configurações do Typebot e Minio
      - S3_ACCESS_KEY=0euO7HOE7NTM6PmS6loK
      - S3_SECRET_KEY=kGED9FHLuBFYLzFGwRkHy1SLAh7oSuKcfXzCfeyt
      - S3_BUCKET=typebot
      - S3_ENDPOINT=s3.webconfiavel.com.br
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints:
          - node.role == manager
      resources:
        limits:
          cpus: "1"
          memory: 1024M

networks:
  typebot_rede:
    external: false
    name: typebot_rede
```

- Agora vamos voltar Portainer - "Stacks" - "Add Stack" - typebot_builder
- Web editor - Coloque conteudo abaixo - alterar com dados email, semelhante o que você fez antes etc para funcionar - no campos S3 vai colocar dados que você gerou acima

```bash
version: "3.7"

services:
  typebot_builder:
    container_name: typebotbuilder
    image: baptistearno/typebot-builder:latest
    restart: always
    networks:
      - typebot_rede
    ports:
      - 8080:3000
    environment:
      - DATABASE_URL=postgresql://postgres:Admin33Admin77@postgres:5432/postgres
      - ENCRYPTION_SECRET=7Rl2NKGhkMUHRV0dtRg8hD2YNopCrAeH
      - DEFAULT_WORKSPACE_PLAN=UNLIMITED
      - NEXTAUTH_URL=https://chatbot.webconfiavel.com.br
      - NEXT_PUBLIC_VIEWER_URL=https://chatbotapi.webconfiavel.com.br
      - NEXTAUTH_URL_INTERNAL=http://localhost:3000
      - DISABLE_SIGNUP=true
      - ADMIN_EMAIL=sourodmil@gmail.com
      - NEXT_PUBLIC_SMTP_FROM='RWeb Tec' <sourodmil@gmail.com>
      - SMTP_AUTH_DISABLED=false
      - SMTP_USERNAME=sourodmil@gmail.com
      - SMTP_PASSWORD=pfuvqidfkyhtaxtx
      - SMTP_HOST=smtp.gmail.com
      - SMTP_PORT=465
      - SMTP_SECURE=false
      # Configurações do Typebot e Google Cloud
      #- GOOGLE_CLIENT_ID=
      #- GOOGLE_CLIENT_SECRET=
      # Configurações do Typebot e Minio
      - S3_ACCESS_KEY=0euO7HOE7NTM6PmS6loK
      - S3_SECRET_KEY=kGED9FHLuBFYLzFGwRkHy1SLAh7oSuKcfXzCfeyt
      - S3_BUCKET=typebot
      - S3_ENDPOINT=s3.webconfiavel.com.br
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints:
          - node.role == manager
      resources:
        limits:
          cpus: "1"
          memory: 1024M
networks:
  typebot_rede:
    external: false
    name: typebot_rede
```

. Criar e editar o arquivo typebotviewer com o comando abaixo e prencher com os dados do proximo item

```bash
sudo nano /etc/nginx/sites-available/typebotviewer
```

. Editar os dados abaixo com a URL que será usada para acessar o minio browser.

```bash
server {
  server_name chatbot.webconfiavel.com.br;

  location / {
    proxy_pass http://127.0.0.1:8080;
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

. Criar link simbólico para o arquivo minioweb

```bash
sudo ln -s /etc/nginx/sites-available/typebotviewer /etc/nginx/sites-enabled/
```

. Criar e editar o arquivo minioweb com o comando abaixo e prencher com os dados do proximo item

```bash
sudo nano /etc/nginx/sites-available/typebotbuilder
```

. Editar os dados abaixo com a URL que será usada para acessar o minio api.

```bash
server {
  server_name chatbotapi.webconfiavel.com.br;

  location / {
    proxy_pass http://127.0.0.1:8081;
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
sudo ln -s /etc/nginx/sites-available/typebotbuilder /etc/nginx/sites-enabled/
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

- Você tera liberar rede nova no firewall no ponteiner acesse Network - vai ter rede 	typebot_rede copie coluna IPV4 vai ter valor parecido 172.18.0.0/16 com essa informacao coloque comando abaixo
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