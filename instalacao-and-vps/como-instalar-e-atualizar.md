# 🚀 Guia de Instalação Whazing (Ubuntu 22)

### 🔹 Antes de começar

1. Crie **dois subdomínios** e aponte-os para o **IP da sua VPS**:
   * Frontend → `bot.seusite.com.br`
   * Backend → `api.seusite.com.br`
2. **Verifique a propagação do domínio** em [dnschecker.org](https://dnschecker.org).
   * Se usar **Cloudflare**, desative o **proxy (nuvem laranja)**.
   * O IP da sua VPS deve aparecer em todas as validações.

*bot e api sugestão podes colocar endereço que achar melhor

⚠️ Só continue quando os subdomínios estiverem resolvendo corretamente.

***

### 🔹 Requisitos mínimos

* Ubuntu 22 (instalação limpa)
* 8 GB de memória RAM
* 2 subdomínios configurados (frontend e backend)

***

### 🔹 Instalação Automática (Recomendada)

#### 1. Acessar como root

```bash
sudo su -
```

#### 2. Instalar dependências iniciais

```bash
apt install software-properties-common
```

#### 3. Atualizar pacotes

```bash
apt -y update
```

```bash
apt -y upgrade
```

#### 4. Reiniciar a VPS

```bash
reboot
```

#### 5. Instalador Whazing automaticamente

```bash
curl -sSL instalar.whazing.com.br | sudo bash
```

#### Caso passo 5 apresentar erro baixar instalador manualmente

1 - acessar pasta root
```bash
cd /root/
```

2 - baixar git

```bash
apt install git
```

3 - baixar instalador
```bash
git clone https://github.com/cleitonme/Whazing-SaaS.instalador.git whazinginstalador
```

4 - Da permisão
```bash
sudo chmod +x ./whazinginstalador/whazing
```

5 - Acessar pasta
```bash
cd ./whazinginstalador
```

6 - Executar
```bash
./whazing
```

A opção 1 que faz instalação so seguir instruções da tela

***

### 🔹 Instalação Manual via Docker

#### 1. Atualizar pacotes

```bash
sudo apt update
```

```bash
sudo apt upgrade -y
```

#### 2. Reiniciar a VPS

```bash
sudo reboot
```

#### 3. Instalar pacotes básicos

```bash
sudo apt-get install -y ca-certificates
```

```bash
sudo apt-get install -y curl
```

```bash
sudo apt-get install -y unzip
```

#### 4. Configurar repositório Docker

```bash
sudo install -m 0755 -d /etc/apt/keyrings
```

```bash
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
```

```bash
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```bash
sudo apt-get update
```

#### 5. Instalar Docker e Docker Compose

```bash
sudo apt install -y docker-ce
```

```bash
sudo apt install -y docker-ce-cli
```

```bash
sudo apt install -y containerd.io
```

```bash
sudo apt install -y docker-buildx-plugin
```

```bash
sudo apt install -y docker-compose-plugin
```

#### 6. Criar usuário `deploy`

```bash
adduser deploy
```

```bash
usermod -aG sudo deploy
```

```bash
usermod -aG docker deploy
```

```bash
su deploy
```

#### 7. Baixar projeto Whazing

```bash
mkdir -p /home/deploy/whazing
```

```bash
cd /home/deploy
```

```bash
wget https://github.com/cleitonme/Whazing-SaaS/raw/refs/heads/main/docs/Instalacao_manual_docker/whazing.zip
```

```bash
unzip whazing.zip
```

```bash
sudo chown deploy.deploy /home/deploy/whazing/ -Rf
```

```bash
cd whazing
```

```bash
chmod 600 traefik/acme.json
```

#### 8. Configurar variáveis de ambiente

* Edite os arquivos:
  * `backend/.env`
  * `frontend/.env`
  * `docker-compose.yaml`

⚙️ Ajuste os valores: domínios, senha padrão (`sua_senha_segura`) e timezone (`America/Sao_Paulo`).

#### 9. Subir os serviços

```bash
docker compose up -d
```

***

### 🔄 Atualizações

#### Atualizar para versão estável

```bash
docker pull whazing/whazing-backend:latest
```

```bash
docker pull whazing/whazing-frontend:latest
```

```bash
docker compose up -d --no-deps --build backend
```

```bash
docker compose up -d --no-deps --build frontend
```

#### Migrar para versão Beta

Edite `docker-compose.yaml` e troque as imagens:

```yaml
image: whazing/whazing-backend:beta
```

```yaml
image: whazing/whazing-frontend:beta
```

Recriar containers:

```bash
docker compose up -d backend frontend
```

#### Atualizar versão Beta

```bash
docker pull whazing/whazing-backend:beta
```

```bash
docker pull whazing/whazing-frontend:beta
```

```bash
docker compose up -d --no-deps --build backend
```

```bash
docker compose up -d --no-deps --build frontend
```

***

### 🧹 Manutenção

#### Limpar imagens antigas e não usadas

```bash
docker system prune -a
```
