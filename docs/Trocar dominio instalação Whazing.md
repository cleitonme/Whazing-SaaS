## Como Trocar Domínio da Instalação Whazing

Este guia passo a passo ajudará você a trocar o domínio da instalação Whazing. Siga as instruções cuidadosamente.

### Passo 1: Editar Configuração do Backend

Abra o arquivo de configuração do backend com o comando abaixo:
```bash
sudo nano /etc/nginx/sites-available/whazing-backend
```
Substitua o conteúdo do arquivo com os dados do item 2. Para salvar, pressione `Ctrl + X`, depois `Y` e `Enter`.

### Passo 2: Configurar URL do Backend

Edite os dados abaixo substituindo `backend.seusite.com.br` pela URL que será usada para acessar o backend:
```nginx
server {
  server_name backend.seusite.com.br;

  location / {
    proxy_pass http://127.0.0.1:3000;
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

### Passo 3: Editar Configuração do Frontend

Abra o arquivo de configuração do frontend com o comando abaixo:
```bash
sudo nano /etc/nginx/sites-available/whazing-frontend
```
Substitua o conteúdo do arquivo com os dados do item 4. Para salvar, pressione `Ctrl + X`, depois `Y` e `Enter`.

### Passo 4: Configurar URL do Frontend

Edite os dados abaixo substituindo `whazing.seusite.com.br` pela URL que será usada para acessar o frontend:
```nginx
server {
  server_name whazing.seusite.com.br;

  location / {
    proxy_pass http://127.0.0.1:3333;
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

### Passo 5: Testar Configurações do Nginx

Verifique se as configurações do Nginx estão corretas com o comando:
```bash
sudo nginx -t
```

### Passo 6: Reiniciar o Nginx

Reinicie o Nginx para aplicar as novas configurações:
```bash
sudo service nginx restart
```

### Passo 7: Gerar Certificado SSL

Gere o certificado SSL utilizando o Certbot:
```bash
sudo certbot --nginx
```

### Passo 8: Editar Arquivo .env do Backend

Abra o arquivo `.env` do backend para edição:
```bash
nano /home/deploy/whazing/backend/.env
```
Preencha as variáveis `BACKEND_URL` e `FRONTEND_URL` com os novos dados. Para salvar, pressione `Ctrl + X`, depois `Y` e `Enter`.

### Passo 9: Reiniciar Serviços PM2

Reinicie todos os serviços gerenciados pelo PM2:
```bash
pm2 restart all
```

### Passo 10: Editar Arquivo .env do Frontend

Abra o arquivo `.env` do frontend para edição:
```bash
nano /home/deploy/whazing/frontend/.env
```
Preencha a variável `URL_API` com o novo backend. Para salvar, pressione `Ctrl + X`, depois `Y` e `Enter`.

### Passo 11: Rodar Build do Frontend

Navegue até o diretório do frontend e rode o comando de build:
```bash
cd /home/deploy/whazing/frontend/
npm run build
```

Seguindo esses passos, você terá trocado com sucesso o domínio da instalação Whazing.