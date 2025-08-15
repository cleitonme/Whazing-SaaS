# Como instalar e atualizar

Existe 2 modelos de instalação pelo instalador automático disponível no endereço.&#x20;

**Opção 1 - Instalador automático**

### RODAR OS COMANDOS ABAIXO PARA INSTALAR

Para evitar erros, recomenda-se atualizar o sistema e reiniciar antes da instalação:

```bash
sudo su root
```

```bash
apt install software-properties-common
```

```bash
apt -y update && apt -y upgrade
reboot
```

Depois reiniciar seguir com a instalação

```bash
sudo su root
```

```bash
apt install git
```

```bash
cd /root
```

```bash
git clone https://github.com/cleitonme/Whazing-SaaS.instalador.git whazinginstalador
```

```bash
sudo chmod +x ./whazinginstalador/whazing
```

```bash
cd ./whazinginstalador
```

### Importante alterar senhas padrão para evitar ataques

Editar dados com seus dados, com nano para salvar aperta Ctrl + x Ou com acesso vps pelo aplicativo que preferir

* Use somente letras e números, não use caracteres especiais
* Não precisa alterar outros campos caso queria usar mesma senha todos serviços somente alterar primeira linha senha=AKwWM4Qu2GRppJ7
* Configure timezone se necessário

```bash
nano config
```

```bash
sudo ./whazing
```

**Opção 2 - Instalação Manual via Docker:**

#### ✅ **Como usar no Ubuntu 22 (instalação limpa)**

## Manual de Instalação do Whazing na VPS

#### Observações:

* Antes de iniciar a instalação, certifique-se de que os subdomínios necessários foram criados e estão apontados para o IP da VPS.
* A senha padrão utilizada é `sua_senha_segura`.
* Domínio Frontend: `whazing.seusite.com.br`
* Domínio Backend: `backend.seusite.com.br`
* Timezone: `America/Sao_Paulo`

1. **Instalar dependências principais**:

```bash
sudo apt update && sudo apt upgrade -y
```

```bash
sudo reboot
```

2. Adicionar o repositório do Docker

```bash
sudo apt-get install ca-certificates curl
```

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
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```bash
sudo apt-get update
```

3. Instalar Docker

```bash
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

4. instalar unzip

```bash
apt install unzip
```

5. Criar o usuário deploy

```bash
adduser deploy
```

6. Conceder permissões sudo ao usuário deploy

```bash
usermod -aG sudo deploy
```

7. Conceder permissões Docker ao usuário deploy

```bash
usermod -aG docker deploy
```

8. Alterar para o usuário deploy

```bash
su deploy
```

9. **Criar diretório do projeto e extrair arquivos**:

```bash
mkdir -p /home/deploy/whazing
cd /home/deploy
```

10. **Baixar arquivo zip repositorio**:

```bash
wget https://github.com/cleitonme/Whazing-SaaS/raw/refs/heads/main/docs/Instalacao_manual_docker/whazing.zip
```

4. **Baixar arquivo zip repositorio**:

```bash
unzip whazing.zip
sudo chown deploy.deploy /home/deploy/whazing/ -Rf
cd whazing
chmod 600 /home/deploy/whazing/traefik/acme.json
```

3. **Editar variáveis de ambiente**:

Abra o arquivo 'docker-compose.yaml' e '.env' da pasta backend e do frontend com seu editor favorito e ajuste os valores.

Troque os domínios, senhas e timezone conforme sua necessidade.

4. **Subir os serviços com Docker Compose**:

```bash
docker compose up -d
```

**Como atualizar para estavel**

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

### 🔁 COMO MUDAR PARA VERSÃO `beta`

1. **Edite o `docker-compose.yaml`:**

No serviço `backend`, mude:

```yaml
image: whazing/whazing-backend:beta
```

No serviço `frontend`, mude:

```yaml
image: whazing/whazing-frontend:beta
```

2. **Recrie os containers:**

```bash
docker compose up -d backend frontend
```

**Como atualizar versão beta**

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

**Limpar imagens não usadas**

```bash
docker system prune -a
```
