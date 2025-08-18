# 🔁 Trocar o Domínio da Instalação Whazing

> **Importante:** sempre use o usuário `deploy`.\
> Quando for editar arquivos do sistema, use `sudo`.

Existem **dois cenários possíveis**:

* 🟩 Se sua instalação usa **Caddy**
* 🟦 Se sua instalação é mais antiga (antes de **17/08/2025**) e usa **NGINX**

Escolha o cenário correto e siga os passos.

***

### 🟩 Cenário A — Instalações com **Caddy**

* [ ] **Abrir arquivo Caddyfile**

```bash
sudo nano /etc/caddy/Caddyfile
```

Edite os domínios do **backend** e do **frontend**. Salve e feche.

* [ ] **(Opcional) Validar configuração do Caddy**

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
```

* [ ] **Reiniciar Caddy**

```bash
sudo systemctl restart caddy
```

* [ ] **Editar arquivo `.env` do backend**

```bash
nano /home/deploy/whazing/backend/.env
```

Atualize:

```
BACKEND_URL=https://backend.novodominio.com.br
FRONTEND_URL=https://novodominio.com.br
```

* [ ] **Editar arquivo `.env` do frontend**

```bash
nano /home/deploy/whazing/frontend/.env
```

Atualize:

```
URL_API=https://backend.novodominio.com.br
```

* [ ] **Rodar atualização (escolher versão)**\
  Versão estável:

```bash
curl -sSL update.whazing.com.br | sudo bash
```

Versão beta:

```bash
curl -sSL beta.whazing.com.br | sudo bash
```

***

### 🟦 Cenário B — Instalações com **NGINX** (antes de 17/08/2025)

* [ ] **Editar configuração do backend**

```bash
sudo nano /etc/nginx/sites-available/whazing-backend
```

Exemplo de configuração:

```nginx
server {
  server_name backend.novodominio.com.br;

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

* [ ] **Editar configuração do frontend**

```bash
sudo nano /etc/nginx/sites-available/whazing-frontend
```

Exemplo de configuração:

```nginx
server {
  server_name novodominio.com.br;

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

* [ ] **Testar configuração**

```bash
sudo nginx -t
```

* [ ] **Reiniciar NGINX**

```bash
sudo service nginx restart
```

* [ ] **Gerar certificado SSL (HTTPS)**

```bash
sudo certbot --nginx
```

* [ ] **Editar `.env` do backend**

```bash
nano /home/deploy/whazing/backend/.env
```

Atualize com os novos domínios.

* [ ] **Editar `.env` do frontend**

```bash
nano /home/deploy/whazing/frontend/.env
```

Atualize com o novo backend.

* [ ] **Rodar atualização (escolher versão)**\
  Versão estável:

```bash
curl -sSL update.whazing.com.br | sudo bash
```

Versão beta:

```bash
curl -sSL beta.whazing.com.br | sudo bash
```

***

### ✅ Resultado final

Se seguiu todos os passos do seu cenário (Caddy ou NGINX):

* Os arquivos `.env` estão com os novos domínios.
* O servidor foi recarregado.
* O domínio do Whazing já está funcionando no novo endereço.
