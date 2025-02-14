## Como Atualizar o Whazing

### Passo 1: Acessar o Usuário Root

1. Abra o terminal e mude para o usuário root:
   ```bash
   sudo su root
   ```

### Passo 2: Navegar até a Pasta do Instalador

1. Navegue até a pasta root:
   ```bash
   cd /root
   ```
2. Entre na pasta do instalador do Whazing:
   ```bash
   cd ./whazinginstalador
   ```

### Passo 3: Executar o Instalador do Whazing

1. Execute o script do instalador:
   ```bash
   sudo ./whazing
   ```

### Passo 4: Reiniciar o Whazing

1. Mude para o usuário deploy:
   ```bash
   su deploy
   ```
2. Reinicie todos os processos do Whazing:
   ```bash
   pm2 restart all
   ```