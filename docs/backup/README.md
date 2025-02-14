## Backup pelo terminal Banco de dados

Comando abaixo pegar CONTAINER ID do docker do postgresql 

```bash
docker ps
```

Comando abaixo modelo alterar com seus dados

```bash
docker exec -i iddocker /bin/bash -c "PGPASSWORD=senha pg_dump --username=whazing --dbname=postgres" > dump.sql
```

## Restaurar

Comando abaixo pegar CONTAINER ID do docker do postgresql 

```bash
docker ps
```

- Restauração deve ser feita em um banco de dados vazio na duvida acesso banco dados e cria banco novo antes, depois somente altere .env do backend com novo banco e renicie whazing

Comando abaixo modelo alterar com seus dados

```bash
docker exec -i iddocker /bin/bash -c "PGPASSWORD=senha psql --username=whazing --dbname=postgres" < dump.sql
```

## Compactar banco

```bash
gzip dump.sql
```

## Descompactar banco

```bash
gunzip dump.sql.gz
```

## Copiar para outra vps

```bash
scp dump.sql.gz deploy@ip:/home/deploy/
```


## Backup pelo terminal Pasta Public exemplo script copiar arquivos novos dia e enviar outro vps alterar com seus dados

```bash
#!/bin/bash

# Diretório onde estão os arquivos
DIR="/home/deploy/whazing/backend/public/"

# Diretório de destino do backup
BACKUP_DIR="/home/deploy/whazing/backup/"

# Nome do arquivo de backup
BACKUP_FILE="backup_$(date +%Y%m%d%H%M%S).tar.gz"

# Tempo em horas (25 horas no caso)
TIME_LIMIT="25"

# Verifica se o diretório de backup existe, se não, cria o diretório
mkdir -p "$BACKUP_DIR"

# Compacta os arquivos modificados nas últimas 25 horas
find "$DIR" -type f -mmin -$((TIME_LIMIT * 60)) | tar -czf "$BACKUP_DIR$BACKUP_FILE" -T -


scp "$BACKUP_DIR$BACKUP_FILE" deploy@ipvps:/home/deploy/backup

rm "$BACKUP_DIR$BACKUP_FILE"
```

## Exemplo Script backup banco de dados e copiar para outra vps

```bash
#!/bin/bash


echo "INICIANDO BACKUP BANCO"

DATA=`date +%d-%m-%Y`


docker exec -i iddocker /bin/bash -c "PGPASSWORD=senha pg_dump --username=whazing --dbname=postgres" > "$DATA".whazing.sql

gzip "$DATA".whazing.sql

scp "$DATA".whazing.sql.gz deploy@ipvps:/home/deploy/backup

rm "$DATA".whazing.sql.gz

```

## Agendar tarefa backup

- crie arquivo com comandos backup como exemplos acima por exemplo crio arquivo pasta deploy com nome backup.sh entao arquivo vai ficar em /home/deploy/backup.sh
 
 ```bash
chmod +x /home/deploy/backup.sh
```

- colocar no crontab para executar
 ```bash
crontab -e
```

- comando abaixo executa script as 2 da manhã
 ```bash
0 2 * * * /home/deploy/backup.sh
```

## Como fazer acesso outro vps sem prescisar senha

- Comando abaixo vai permitir acessar outro vps sem senha permitindo backups automaticos
 ```bash
cat ~/.ssh/id_rsa.pub | ssh deploy@edereço_IP_remoto "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

## Duvidas use chatgpt ele sera belo aliado para fazer esses comandos