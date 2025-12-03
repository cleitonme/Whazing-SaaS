---
icon: expeditedssl
---

# Problemas com SSL

### Comando Rápido para Atualizar o SSL

Para atualizar rapidamente o SSL com o Certbot e Nginx, execute o seguinte comando no terminal:

```bash
sudo certbot --nginx
```

## Opção 2 - Como Liberar SSL pelo Cloudflare

Se preferir usar o Cloudflare para gerenciar seu SSL, siga os passos abaixo:

### Passo 1: Atualizar Pacotes

1.  Abra o terminal e atualize os pacotes do sistema:

    ```bash
    sudo apt-get update
    ```

### Passo 2: Instalar Certbot e Plugins Necessários

1.  Instale o Certbot:

    ```bash
    sudo apt-get install certbot
    ```
2.  Instale o plugin do Certbot para o Cloudflare:

    ```bash
    sudo apt-get install python3-certbot-dns-cloudflare
    ```
3.  Instale o plugin do Certbot para o Nginx:

    ```bash
    sudo apt-get install python3-certbot-nginx
    ```

### Passo 3: Criar Arquivo de Configuração do Cloudflare

1.  Crie um arquivo de configuração chamado `cloudflare.ini` usando o editor de texto `nano`:

    ```bash
    nano cloudflare.ini
    ```
2.  No arquivo, adicione as seguintes linhas, substituindo com suas informações do Cloudflare:

    ```bash
    dns_cloudflare_email = seu_email@example.com
    dns_cloudflare_api_key = sua_api_key
    ```
3. Para salvar o arquivo no `nano`, pressione `Ctrl + X`, depois `Y`, e em seguida `Enter`.

### Passo 4: Mover Arquivo para a Pasta de Segredos

1.  Crie a pasta de segredos no diretório do seu usuário (substitua `deploy` pelo nome do seu usuário):

    ```bash
    mkdir -p /home/deploy/.secrets/certbot/
    ```
2.  Mova o arquivo `cloudflare.ini` para a pasta de segredos:

    ```bash
    mv cloudflare.ini /home/deploy/.secrets/certbot/
    ```

### Passo 5: Obter Certificado SSL

1.  Execute o comando abaixo para obter o certificado SSL usando as credenciais do Cloudflare. Substitua `frontend.seudominio.com.br` e `backend.seudominio.com.br` pelos seus domínios:

    ```bash
    sudo certbot certonly --dns-cloudflare --dns-cloudflare-credentials /home/seu_usuario/.secrets/certbot/cloudflare.ini -d frontend.seudominio.com.br -d backend.seudominio.com.br --dns-cloudflare-propagation-seconds 60
    ```

### Passo 6: Configurar o Nginx

1.  Após obter o certificado, configure o Nginx para usar o SSL com o comando:

    ```bash
    sudo certbot --nginx
    ```

Seguindo esses passos, você conseguirá configurar o SSL no seu servidor usando o Certbot com suporte ao Cloudflare.
