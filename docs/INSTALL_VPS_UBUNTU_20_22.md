# Manual de Instalação do Whazing na VPS

### Observações:
- Antes de iniciar a instalação, certifique-se de que os subdomínios necessários foram criados e estão apontados para o IP da VPS.
- Este guia foi desenvolvido para Ubuntu 20.
- Utilizaremos Docker, pois a versão do PostgreSQL do repositório do Ubuntu 20 apresenta problemas com o Whazing.
- A senha padrão utilizada é `123@mudar`.
- Domínio Frontend: `whazing.seusite.com.br`
- Domínio Backend: `backend.seusite.com.br`

================================================

1. Alterar para o usuário root

```bash
sudo su root
```

2. Configurar o fuso horário para São Paulo e atualizar o sistema

```bash
timedatectl set-timezone America/Sao_Paulo && apt update && apt upgrade -y
```

3. Reiniciar o sistema para atualizar o kernel

```bash
reboot
```

4. Após reiniciar, conectar no servidor novamente e alterar para root

```bash
sudo su root
```

5. Instalar pacotes necessários

```bash
apt install -y ffmpeg fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 apt-transport-https ca-certificates software-properties-common curl libgbm-dev wget unzip fontconfig locales gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils python2-minimal build-essential libxshmfence-dev nginx
```

6. Adicionar o repositório do Docker

```bash
# Adicionar a chave GPG oficial do Docker:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Adicionar o repositório às fontes do Apt:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

7. Instalar Docker

```bash
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

8. Limpar pacotes não utilizados

```bash
apt autoremove -y
```

9. Instalar PostgreSQL no Docker

```bash
docker run --name postgresql -e POSTGRES_USER=whazing -e POSTGRES_PASSWORD=123@mudar -e TZ="America/Sao_Paulo" -p 5432:5432 --restart=always -v /data:/var/lib/postgresql/data -d postgres
```

10. Instalar Redis no Docker

```bash
docker run --name redis-whazing -e TZ="America/Sao_Paulo" -p 6379:6379 --restart=always -d redis:latest redis-server --appendonly yes --requirepass "123@mudar"
```

11. Instalar Portainer no Docker

```bash
docker run -d --name portainer -p 9000:9000 -p 9443:9443 --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
```

12. Remover arquivo padrão do Nginx

```bash
rm /etc/nginx/sites-enabled/default
```

13. Criar o usuário deploy

```bash
adduser deploy
```

14. Conceder permissões sudo ao usuário deploy

```bash
usermod -aG sudo deploy
```

15. Conceder permissões Docker ao usuário deploy

```bash
usermod -aG docker deploy
```

16. Alterar para o usuário deploy

```bash
su deploy
```

17. Realizar o download do Node.js 22.x

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
```

18. Instalar Node.js

```bash
sudo apt-get install -y nodejs
```

19. Acessar o diretório raiz

```bash
cd ~
```

20. Baixar o repositório do Whazing

```bash
git clone https://github.com/cleitonme/Whazing-SaaS.git whazing
```

21. Acessar a pasta do repositório

```bash
cd whazing
```

22. Descompactar arquivos

```bash
unzip -o whazing.zip
```

23. Garantir permissões das pastas

```bash
chmod 775 /home/deploy/whazing/ -Rf
```

24. Descompactar logos

```bash
unzip -o logos.zip
```

25. Garantir permissões das pastas

```bash
chmod 775 /home/deploy/whazing/ -Rf
```

26. Voltar para o diretório anterior

```bash
cd ..
```

27. Copiar o arquivo .env de exemplo para o backend

```bash
cp whazing/backend/.env.example whazing/backend/.env
```

28. Rodar o comando abaixo duas vezes para gerar `JWT_SECRET` e `JWT_REFRESH_SECRET`

```bash
openssl rand -base64 32
```

29. Editar os dados abaixo e colar os valores gerados no item 28.

```bash
# ambiente
NODE_ENV=dev

# URL do backend para construção dos hooks
BACKEND_URL=https://backend.seusite.com.br

# URL do front para liberação do cors
FRONTEND_URL=https://whazing.seusite.com.br

# Porta utilizada para proxy com o serviço do backend
PROXY_PORT=443

# Porta que o serviço do backend deverá ouvir
PORT=3000

# conexão com o banco de dados
DB_DIALECT=postgres
DB_TIMEZONE=-03:00
DB_PORT=5432
POSTGRES_HOST=localhost
POSTGRES_USER=whazing
POSTGRES_PASSWORD=123@mudar
POSTGRES_DB=postgres

# Chaves para criptografia do token jwt
JWT_SECRET=gerado no passo 28
JWT_REFRESH_SECRET=gerado no passo 28

# Dados de conexão com o REDIS
IO_REDIS_SERVER=localhost
IO_REDIS_PORT='6379'
IO_REDIS_DB_SESSION='2'
IO_REDIS_PASSWORD=123@mudar

# tempo para randomização da mensagem de horário de funcionamento
MIN_SLEEP_BUSINESS_HOURS=10000
MAX_SLEEP_BUSINESS_HOURS=20000

# tempo para randomização das mensagens do bot
MIN_SLEEP_AUTO_REPLY=4000
MAX_SLEEP_AUTO_REPLY=6000

# tempo para randomização das mensagens gerais
MIN_SLEEP_INTERVAL=2000
MAX_SLEEP_INTERVAL=5000

# dados do RabbitMQ / Para não utilizar, basta comentar a var AMQP_URL
RABBITMQ_DEFAULT_USER=admin
RABBITMQ_DEFAULT_PASS=123@mudar
#AMQP_URL='amqp://admin:123@mudar@localhost:5672?connection_attempts=5&retry_delay=5'

# api oficial (integração em desenvolvimento)
API_URL_360=https://waba-sandbox.360dialog.io

# usado para mostrar opções não disponíveis normalmente.
ADMIN_DOMAIN=whazing.io

# Dados para utilização do canal do facebook
VUE_FACEBOOK_APP_ID=3237415623048660
FACEBOOK_APP_SECRET_KEY=3266214132b8c98ac59f3e957a5efeaaa13500

# Limitar Uso do whazing Usuario e Conexões
USER_LIMIT=99
CONNECTIONS_LIMIT=99
```

30. Abrir para edição o arquivo `.env` com o comando abaixo e preencher com os dados acima. Para salvar, use `Ctrl + X`

```bash
nano whazing/backend/.env
```

31. Acessar o backend

```bash
cd whazing/backend
```

32. Instalar as dependências

```bash
npm install --force
```

33. Reiniciar Docker

```bash
docker container restart portainer
docker container restart postgresql
docker container restart redis-whazing
```

34. Criar as tabelas no banco de dados

```bash
npx sequelize db:migrate
```

35. Inserir dados em algumas tabelas do banco de dados

```bash
npx sequelize db:seed:all
```

36. Instalar o PM2

```bash
sudo npm install -g pm2
```

37. Iniciar o backend com PM2

```bash
pm2 start dist/server.js --name whazing-backend
```

38. Gerar o Startup

```bash
pm2 startup ubuntu -u deploy
```

39. Gerar o status parte 2

```bash
sudo env PATH=$PATH:/usr/bin pm2 startup ubuntu -u deploy --hp /home/deploy
```

40. Acessar o frontend

```bash
cd ../frontend
```

41. Copiar o arquivo `.env` do exemplo

```bash
cp .env.example .env
```

42. Editar o arquivo `.env` com o comando abaixo e preencher com os dados do item 40. Para salvar, use `Ctrl + X`

```bash
nano .env
```

43. Dados do arquivo `.env` do frontend

```bash
URL_API='https://backend.seusite.com.br'
FACEBOOK_APP_ID='23156312477653241'
```

44. Criar arquivo `server.js` com os dados do item 46. Para salvar, use `Ctrl + X`

```bash
nano server.js
```

45. Dados para gerar o `server.js`

```bash
// simple express server to run frontend production build;
const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'dist/pwa')))
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/pwa', 'index.html'))
})
app.listen(3333)
```

46. Instalar as dependências

```bash
npm install --force
```

47. Instalar Quasar

```bash
npm i @quasar/cli
```

48. Atualizar a lista de navegadores

```bash
npx update-browserslist-db@latest
```

49. Construir o frontend

```bash
npm run build
```

50. Iniciar o frontend com PM2

```bash
pm2 start server.js --name whazing-frontend
```

51. Salvar os serviços iniciados pelo PM2

```bash
pm2 save
```

52. Listar os serviços iniciados pelo PM2

```bash
pm2 list
```

53. Editar os dados abaixo com a URL que será usada para acessar o frontend.

```bash
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

54. Criar e editar o arquivo `whazing-frontend` com o comando abaixo e preencher com os dados do item 53. Para salvar, use `Ctrl + X`

```bash
sudo nano /etc/nginx/sites-available/whazing-frontend
```

55. Editar os dados abaixo com a URL que será usada para acessar o backend.

```bash
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

56. Criar e editar o arquivo `whazing-backend` com o comando abaixo e preencher com os dados do item 55. Para salvar, use `Ctrl + X`

```bash
sudo nano /etc/nginx/sites-available/whazing-backend
```

57. Criar link simbólico para o arquivo `whazing-frontend`

```bash
sudo ln -s /etc/nginx/sites-available/whazing-frontend /etc/nginx/sites-enabled/
```

58. Criar link simbólico para o arquivo `whazing-backend`

```bash
sudo ln -s /etc/nginx/sites-available/whazing-backend /etc/nginx/sites-enabled/
```

59. Editar o arquivo de configuração do Nginx com o comando abaixo e preencher com os dados do item 62. Adicionar antes de `# server_tokens off;`. Para salvar, use `Ctrl + X`

```bash
sudo nano /etc/nginx/nginx.conf
```

60. Adicionar antes de `# server_tokens off;`

```bash
underscores_in_headers on;    
client_max_body_size 100M;
large_client_header_buffers 16 5120k;
```

61. Testar as configurações do Nginx

```bash
sudo nginx -t
```

62. Reiniciar o Nginx

```bash
sudo service nginx restart
```

63. Instalar o suporte a pacotes Snap

```bash
sudo apt-get install snapd
```

64. Instalar o pacote do Certbot (SSL)

```bash
sudo snap install --classic certbot
```

65. Gerar certificado

```bash
sudo certbot --nginx
```

66. Reiniciar serviços Docker

```bash
docker container restart portainer
```

67. Reiniciar serviços Docker

```bash
docker container restart postgresql
```

68. Reiniciar serviços Docker

```bash
docker container restart redis-whazing
```

Pronto! O sistema está instalado. Acesse o frontend em `whazing.seusite.com.br`.

Usuário padrão para acesso:

- Usuário: `admin@admin.com`
- Senha: `123456`

## Erros

"Internal server error: SequelizeConnectionError: could not open file \"global/pg_filenode.map\": Permission denied"

```bash
docker container restart postgresql
```

```bash
docker exec -u root postgresql bash -c "chown -R postgres:postgres /var/lib/postgresql/data"
```

```bash
docker container restart postgresql
```

## Acesso ao Portainer para gerar senha

"Your Portainer instance timed out for security purposes. To re-enable your Portainer instance, you will need to restart Portainer."

```bash
docker container restart portainer
```

Depois, acesse novamente a URL `http://seuip:9000/`.

## Atualizar

1. Use o usuário deploy

```bash
su deploy
```

2. Acesse a pasta de instalação

```bash
cd /home/deploy/whazing
```

3. Atualizar repositório

```bash
git pull
```

4. Descompactar arquivos

```bash
unzip -o whazing.zip
```

5. Garantir permissões corretas

```bash
chmod 775 /home/deploy/whazing/ -Rf
```

6. Acessar a pasta backend

```bash
cd /home/deploy/whazing/backend
```

7. Instalar as dependências

```bash
npm install --force
```

8. Atualizar as tabelas no banco de dados

```bash
npx sequelize db:migrate
```

9. Acessar a pasta frontend

```bash
cd /home/deploy/whazing/frontend
```

10. Instalar as dependências

```bash
npm install --force
```

11. Atualizar a lista de navegadores

```bash
npx update-browserslist-db@latest
```

12. Construir o frontend

```bash
npm run build
```

13. Reiniciar serviços PM2

```bash
pm2 restart all
```