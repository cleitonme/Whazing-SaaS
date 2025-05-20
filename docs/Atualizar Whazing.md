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
   
## Seu atualizador esta versão antiga? Como baixar versão nova

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
   
2. Apague pasta do instalador antigo:
   ```bash
   rm whazinginstalador/ -Rf
   ```
   
3. Apague pasta do instalador antigo:
   ```bash
   git clone https://github.com/cleitonme/Whazing-SaaS.instalador.git whazinginstalador
   ```
   
--- Pronto instalador atulizado