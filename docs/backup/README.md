Aqui está uma versão revisada do seu manual, com explicações mais claras para iniciantes, passos numerados e exemplos bem destacados.  

---

# **Manual de Backup e Restauração para Banco de Dados PostgreSQL no Docker**  

Este guia explica como fazer backup e restaurar um banco de dados PostgreSQL rodando em um container Docker. Também abordamos a compactação, transferência para outro servidor (VPS) e agendamento automático de backups.  

---

## **1. Identificar o ID do Container do PostgreSQL**  
Antes de qualquer operação, precisamos do **ID do container** onde o PostgreSQL está rodando. Para listar os containers ativos, use:  

```bash
docker ps
```

Anote o **CONTAINER ID** correspondente ao PostgreSQL, pois será necessário nos próximos comandos.  

---

## **2. Fazer Backup do Banco de Dados**  

### **Comando para gerar o backup**  
Substitua **iddocker** pelo ID do seu container e **senha** pela senha correta do PostgreSQL.  

```bash
docker exec -i iddocker /bin/bash -c "PGPASSWORD=senha pg_dump --username=whazing --dbname=postgres" > dump.sql
```

Isso criará um arquivo **dump.sql** contendo o backup do banco de dados.  

---

## **3. Restaurar o Banco de Dados**  

### **Importante:**  
- A restauração deve ser feita em um **banco de dados vazio**.  
- Caso precise, crie um novo banco antes de restaurar.  
- Depois, atualize o arquivo **.env** do backend para apontar para o novo banco e reinicie o sistema.  

### **Comando para restaurar o backup**  

```bash
docker exec -i iddocker /bin/bash -c "PGPASSWORD=senha psql --username=whazing --dbname=postgres" < dump.sql
```

---

## **4. Compactar e Descompactar o Backup**  

### **Compactar o arquivo para economizar espaço**  
```bash
gzip dump.sql
```
Isso criará um arquivo **dump.sql.gz**.  

### **Descompactar quando precisar restaurar**  
```bash
gunzip dump.sql.gz
```
Isso trará o backup de volta para **dump.sql**.  

---

## **5. Transferir o Backup para Outra VPS**  

Se quiser copiar o backup para outro servidor, substitua **deploy@ip** pelo usuário e IP da VPS de destino:  

```bash
scp dump.sql.gz deploy@ip:/home/deploy/
```

---

## **6. Backup de Arquivos da Pasta "Public" e Envio para Outra VPS**  

O script abaixo copia apenas os arquivos **modificados nas últimas 25 horas** e os envia para outra VPS.  

### **Criação do Script**  
Crie um arquivo chamado **backup_pasta.sh** e cole o código abaixo:  

```bash
#!/bin/bash

# Diretório de origem
DIR="/home/deploy/whazing/backend/public/"

# Diretório de destino do backup
BACKUP_DIR="/home/deploy/whazing/backup/"

# Nome do arquivo de backup com data e hora
BACKUP_FILE="backup_$(date +%Y%m%d%H%M%S).tar.gz"

# Tempo limite para considerar arquivos novos (em horas)
TIME_LIMIT="25"

# Criar diretório de backup se não existir
mkdir -p "$BACKUP_DIR"

# Compactar arquivos alterados nas últimas 25 horas
find "$DIR" -type f -mmin -$((TIME_LIMIT * 60)) | tar -czf "$BACKUP_DIR$BACKUP_FILE" -T -

# Transferir o backup para outra VPS
scp "$BACKUP_DIR$BACKUP_FILE" deploy@ipvps:/home/deploy/backup

# Remover o arquivo local após envio
rm "$BACKUP_DIR$BACKUP_FILE"
```

---

## **7. Backup do Banco de Dados e Transferência para Outra VPS**  

Esse script faz o backup do banco, compacta e envia automaticamente para outra VPS.  

### **Criação do Script**  
Crie um arquivo chamado **backup_db.sh** e cole o código abaixo:  

```bash
#!/bin/bash

echo "INICIANDO BACKUP DO BANCO DE DADOS..."

# Data atual no formato dd-mm-YYYY
DATA=`date +%d-%m-%Y`

# Criar o backup
docker exec -i iddocker /bin/bash -c "PGPASSWORD=senha pg_dump --username=whazing --dbname=postgres" > "$DATA".whazing.sql

# Compactar o arquivo
gzip "$DATA".whazing.sql

# Transferir para a outra VPS
scp "$DATA".whazing.sql.gz deploy@ipvps:/home/deploy/backup

# Remover o backup local após o envio
rm "$DATA".whazing.sql.gz

echo "BACKUP CONCLUÍDO!"
```

---

## **8. Agendar Backup Automático (Cronjob)**  

### **Passo 1: Tornar o script executável**  
Se criou o arquivo **backup.sh** na pasta `/home/deploy/`, torne-o executável:  

```bash
chmod +x /home/deploy/backup.sh
```

### **Passo 2: Configurar o agendamento no Cron**  
Abra o agendador de tarefas:  

```bash
crontab -e
```

Adicione a linha abaixo para executar o backup **todos os dias às 2h da manhã**:  

```bash
0 2 * * * /home/deploy/backup.sh
```

---

## **9. Acesso a Outra VPS sem Senha (Para Backups Automáticos)**  

Para evitar que o sistema peça senha ao transferir arquivos via **scp**, use este comando:  

```bash
cat ~/.ssh/id_rsa.pub | ssh deploy@endereco_IP_remoto "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

Isso permitirá conexões automáticas entre os servidores.  

---

## **10. Dúvidas?**  

Se precisar de mais detalhes, use o **ChatGPT** como aliado para entender melhor esses comandos! 🚀  

---