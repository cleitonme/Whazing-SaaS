## **Guia para Configurar e Acompanhar Logs no Sistema**

### **Objetivo**

Monitorar os logs do sistema, ativando a visualização completa dos eventos. Você pode ativar dois tipos de logs:
1. **Logs da Plataforma**.
2. **Logs do Baileys**.

Para ativar ambos os tipos de log, utilize as seguintes configurações no arquivo `.env`:

```bash
# Log da plataforma
LOG_LEVEL=trace

# Log do Baileys
BAILEYS_LOG_LEVEL=trace
```

---

### **Configuração Utilizando o Bitvise (Exemplo no Linux)**

1. **Conectando ao Servidor**:
   - Use um aplicativo como o **Bitvise** para acessar o sistema Linux.
   - Faça login com o usuário **deploy** (ideal para evitar problemas de permissão).

2. **Editando o Arquivo .env**:
   - Abra o "New SFTP Window" no Bitvise e navegue até o diretório `/home/deploy/whazing/backend`.
   - Localize o arquivo chamado `.env`, clique com o botão direito e selecione **Editar**.
   - Adicione as configurações para ativação de logs:

```bash
# Log da plataforma
LOG_LEVEL=trace

# Log do Baileys
BAILEYS_LOG_LEVEL=trace
```

   - **Nota**: Caso utilize um proxy, configure-o corretamente e use credenciais seguras.

3. **Salvando e Reiniciando os Serviços**:
   - Após editar o arquivo `.env`, salve as alterações.
   - Reinicie os serviços executando este comando no terminal:

```bash
docker container restart whazing-backend
```

---

### **Método Direto pelo Terminal**

1. **Editando o Arquivo .env**:
   - Acesse o terminal e utilize este comando para abrir o arquivo `.env`:

```bash
nano /home/deploy/whazing/backend/.env
```

   - Inclua as configurações de ativação dos logs:

```bash
# Log da plataforma
LOG_LEVEL=trace

# Log do Baileys
BAILEYS_LOG_LEVEL=trace
```

   - **Dica**: Caso utilize um proxy, ajuste os valores das configurações de acordo com o serviço usado.

2. **Salvando as Alterações**:
   - Pressione as teclas `Ctrl + X`, depois `Y` para confirmar e `Enter` para finalizar.

3. **Reiniciando os Serviços**:
   - No terminal, reinicie os serviços com o seguinte comando:

```bash
docker container restart whazing-backend
```

---

### **Como Visualizar os Logs**

1. **Visualização em Tempo Real**:
   - Execute o seguinte comando no terminal para ver os logs em tempo real - ultimas 100 linhas:

```bash
docker logs --tail 100 -f whazing-backend
```

2. **Download dos Logs**:
   - Os arquivos de logs estão armazenados na pasta:

```bash
/home/deploy/whazing/backend/logs/
```

   - Use o "New SFTP Window" para acessar a pasta e abrir os arquivos.
