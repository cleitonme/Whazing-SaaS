---
description: >-
  O Portainer é uma interface gráfica para gerenciar containers Docker. Com ele,
  você pode criar, parar e monitorar serviços de forma simples, direto pelo
  navegador.
icon: container-storage
---

# Portainer

Este guia vai te mostrar como **acessar e configurar o Portainer em um servidor Ubuntu 22**, mesmo que você nunca tenha feito isso antes.

***

### 🔑 1. Criando a senha de acesso

Na **primeira vez** que acessar o Portainer, ele vai pedir para você criar uma senha de administrador.

👉 Basta abrir o endereço de acesso e cadastrar a senha desejada.\
Essa senha será usada todas as vezes que você entrar no painel.

***

### ⏱️ 2. Mensagem de timeout

Se aparecer a mensagem:

```
Your Portainer instance timed out for security purposes. 
To re-enable your Portainer instance, you will need to restart Portainer.
```

Isso significa que o Portainer **entrou em modo de segurança por inatividade**.\
Para resolver, reinicie o container:

```bash
docker container restart portainer
```

***

### 🌐 3. Acesso direto pelo navegador

O Portainer roda, por padrão, na porta **9000**.

Então, basta acessar no navegador:

```
http://IP_DO_VPS:9000
```

***

### 🔒 4. Configurando acesso com domínio e SSL

Por padrão, o acesso é feito via IP, mas o ideal é acessar pelo **seu domínio com HTTPS (SSL)**.

Existem **dois cenários possíveis** de instalação no Ubuntu 22:

* **Caddy** (proxy reverso automático com SSL)
* **Nginx** (proxy reverso manual + Certbot)

Você precisa primeiro identificar qual deles está ativo no seu servidor.

***

#### 🔍 4.1 Como identificar se usa Caddy ou Nginx

No terminal, execute:

```bash
systemctl status caddy
```

* Se aparecer como **active (running)** → sua VPS usa **Caddy**.
* Se aparecer erro, teste:

```bash
systemctl status nginx
```

* Se aparecer como **active (running)** → sua VPS usa **Nginx**.

***

### 🚀 5. Caso 1 — Configurando no **Caddy**

O **Caddy** é o servidor web mais simples de configurar, pois ele gera automaticamente o certificado SSL (HTTPS).

#### 📂 Arquivo de configuração do Caddy

No Ubuntu 22, o arquivo principal fica em:

```
/etc/caddy/Caddyfile
```

#### 🛠️ Passos para configurar:

1. Abra o arquivo para edição:

```bash
nano /etc/caddy/Caddyfile
```

2. Adicione no final do arquivo o bloco para o Portainer:

```caddy
portainer.seudominio.com {
    reverse_proxy 127.0.0.1:9000
}
```

3. Salve e feche (`CTRL + O`, `ENTER`, `CTRL + X`).
4. Reinicie o Caddy para aplicar:

```bash
systemctl restart caddy
```

***

### 🚀 6. Caso 2 — Configurando no **Nginx**

O **Nginx** também pode ser usado como proxy reverso, mas nele você precisa **criar a configuração manualmente** e gerar o SSL com o **Certbot**.

#### 📂 Estrutura de arquivos do Nginx

* Configurações disponíveis: `/etc/nginx/sites-available/`
* Configurações ativas: `/etc/nginx/sites-enabled/`

#### 🛠️ Passos para configurar:

1. Crie o arquivo de configuração do Portainer:

```bash
nano /etc/nginx/sites-available/portainer.conf
```

2. Adicione o conteúdo abaixo:

```nginx
server {
    server_name portainer.seudominio.com;

    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

3. Ative a configuração criando o link simbólico:

```bash
ln -s /etc/nginx/sites-available/portainer.conf /etc/nginx/sites-enabled/
```

4. Teste se não há erro de sintaxe:

```bash
nginx -t
```

5. Recarregue o Nginx:

```bash
systemctl reload nginx
```

6. Instale o **Certbot** (se ainda não tiver):

```bash
apt update && apt install certbot python3-certbot-nginx -y
```

7. Gere o certificado SSL:

```bash
certbot --nginx -d portainer.seudominio.com
```

***
