## Como Liberar SSL pelo Cloudflare Alternativa

### Passo 1: Atualizar Pacotes

1. Abra o terminal e atualize os pacotes:
   ```bash
   sudo apt-get update
   ```

### Passo 2: Instalar Certbot

1. Instale o Certbot:
   ```bash
   sudo apt-get install certbot
   ```

2. Instale o plugin do Certbot para o Cloudflare:
   ```bash
   sudo apt-get install python3-certbot-dns-cloudflare
   ```

3. Instale o plugin do Certbot para o Nginx:
   ```bash
   sudo apt-get install python3-certbot-nginx
   ```

### Passo 3: Criar Arquivo de Configuração do Cloudflare

1. Crie o arquivo `cloudflare.ini` com os dados abaixo. Use o editor de texto nano:
   ```bash
   nano cloudflare.ini
   ```

2. No arquivo, adicione as seguintes linhas (substitua com suas informações):
   ```bash
   dns_cloudflare_email = teu email
   dns_cloudflare_api_key = tua api
   ```

3. Para salvar o arquivo no nano, pressione `Ctrl + X`, depois `Y`, e em seguida `Enter`.

### Passo 4: Mover Arquivo para a Pasta de Segredos

1. Crie a pasta de segredos (exemplo usando o usuário `deploy`. Se for outro usuário, substitua `deploy` pelo nome do seu usuário):
   ```bash
   mkdir -p /home/deploy/.secrets/certbot/
   ```

2. Mova o arquivo `cloudflare.ini` para a pasta de segredos:
   ```bash
   mv cloudflare.ini /home/deploy/.secrets/certbot
   ```

### Passo 5: Obter Certificado SSL

1. Execute o comando para obter o certificado SSL usando as credenciais do Cloudflare:
   ```bash
   sudo certbot certonly --dns-cloudflare --dns-cloudflare-credentials /home/deploy/.secrets/certbot/cloudflare.ini -d frontend.seudominio.com.br -d backend.seudominio.com.br --dns-cloudflare-propagation-seconds 60
   ```

### Passo 6: Configurar o Nginx

1. Execute o comando para configurar o Nginx com o Certbot:
   ```bash
   sudo certbot --nginx
   ```