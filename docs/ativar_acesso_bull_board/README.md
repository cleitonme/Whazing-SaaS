## **Como Habilitar o Acesso ao BullBoard**

### **Objetivo**

O BullBoard permite monitorar as tarefas executadas no sistema, ajudando a identificar possíveis erros.

---

### **Passo a Passo para Configuração no Linux (Exemplo com o Bitvise)**

1. **Estabeleça a Conexão**:
   - Utilize um aplicativo como o **Bitvise** para se conectar ao Linux.
   - Faça login com o **usuário deploy** para evitar problemas de permissão.

2. **Configure o Arquivo .env**:
   - No Bitvise, abra o "New SFTP Window" e navegue até o diretório `/home/deploy/whazing/backend`.
   - Localize o arquivo `.env`, clique com o botão direito e selecione **Editar**.
   - Acrescente as seguintes linhas ao arquivo:

```bash
# Ativar o BullBoard - URL: urlbackend/admin/queues/
BULL_BOARD=true
BULL_USER=admin
BULL_PASS=123456
```

   - **Importante**: Substitua `admin` e `123456` por um nome de usuário e uma senha fortes e seguros.

3. **Salve e Reinicie os Serviços**:
   - Salve o arquivo após a edição.
   - No terminal, execute o seguinte comando para reiniciar os serviços:

```bash
docker container restart whazing-backend
```

---

### **Método Alternativo: Configuração Direta pelo Terminal**

1. **Edite o Arquivo .env**:
   - No terminal, insira o comando abaixo para abrir o arquivo `.env`:

```bash
nano /home/deploy/whazing/backend/.env
```

   - Adicione as seguintes linhas:

```bash
# Ativar o BullBoard - URL: urlbackend/admin/queues/
BULL_BOARD=true
BULL_USER=admin
BULL_PASS=123456
```

   - **Nota**: Substitua `admin` e `123456` por um nome de usuário e senha seguros.

2. **Salve as Alterações**:
   - Pressione `Ctrl + X`, confirme com `Y` e pressione `Enter` para salvar o arquivo.

3. **Reinicie os Serviços**:
   - Execute o comando abaixo no terminal:

```bash
docker container restart whazing-backend
```

---

Após essas etapas, o acesso ao BullBoard estará disponível através da URL: `urlbackend/admin/queues/`.
