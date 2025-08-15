## **Como Configurar Proxy para Conexões do WhatsApp**

### **Objetivo**

O uso de um proxy nas conexões do WhatsApp pode aumentar a segurança e melhorar o controle das comunicações.

---

### **Passo a Passo para Configuração no Linux (Exemplo com o Bitvise)**

1. **Estabeleça a Conexão**:
   - Utilize um aplicativo como o **Bitvise** para se conectar ao Linux.
   - Faça login com o **usuário deploy** para evitar problemas relacionados a permissões.

2. **Configure o Arquivo .env**:
   - No Bitvise, abra o "New SFTP Window" e navegue até o diretório `/home/deploy/whazing/backend`.
   - Localize o arquivo `.env`, clique com o botão direito do mouse e selecione **Editar**.
   - Adicione as seguintes linhas ao arquivo:

```bash
# Configurar proxy para conexões do WhatsApp
PROXY_URL=socks5://127.0.0.1:9150
```

   - **Nota Importante**: Certifique-se de configurar corretamente o proxy e utilizar credenciais seguras, caso seja necessário.

3. **Salve e Reinicie os Serviços**:
   - Após editar o arquivo `.env`, salve as alterações.
   - Reinicie os serviços executando o comando abaixo no terminal:

```bash
docker container restart whazing-backend
```

---

### **Método Alternativo: Configuração Direta pelo Terminal**

1. **Edite o Arquivo .env**:
   - No terminal, utilize o comando abaixo para abrir o arquivo `.env`:

```bash
nano /home/deploy/whazing/backend/.env
```

   - Adicione as linhas de configuração do proxy:

```bash
# Configurar proxy para conexões do WhatsApp
PROXY_URL=socks5://127.0.0.1:9150
```

   - **Nota**: Ajuste os valores conforme a configuração específica do proxy utilizado.

2. **Salve as Alterações**:
   - Pressione `Ctrl + X`, confirme com `Y` e pressione `Enter` para salvar o arquivo.

3. **Reinicie os Serviços**:
   - Execute o seguinte comando para reiniciar todos os serviços:

```bash
docker container restart whazing-backend
```