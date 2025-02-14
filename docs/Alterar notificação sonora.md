## Como Alterar Notificação Sonora

### Passo 1: Acessar Pasta de Arquivos

1. Navegue até a pasta onde os arquivos de som estão localizados:
   ```bash
   /home/deploy/whazing/frontend/src/assets
   ```

### Passo 2: Alterar Arquivos de Som

Substitua os seguintes arquivos de som na pasta:
- `sound.mp3`
- `sound.ogg`
- `chatInterno.mp3`

### Passo 3: Rodar os Comandos

1. Mude para o usuário `deploy`:
   ```bash
   su deploy
   ```

2. Navegue até a pasta `frontend` do Whazing:
   ```bash
   cd /home/deploy/whazing/frontend
   ```

3. Execute o comando para construir o projeto:
   ```bash
   npm run build
   ```