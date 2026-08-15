---
icon: desktop
---

# Sistema lento: como diagnosticar o servidor (Linux com Docker)

Se o sistema estiver **lento, travando ou demorando para responder**, é importante verificar alguns pontos no servidor:

* Uso de **CPU**
* Uso de **Memória RAM**
* **Carga do servidor**
* **Espaço em disco**
* **Containers Docker**
* **Logs de erro**

Este guia mostra como identificar rapidamente possíveis problemas.

***

## 1️⃣ Verificar tempo que o servidor está ligado e carga

Execute:

```bash
uptime
```

Exemplo:

```
17:45:21 up 3 days,  4:12,  1 user,  load average: 0.85, 0.92, 1.05
```

#### Significado

| Campo        | Descrição                        |
| ------------ | -------------------------------- |
| up           | tempo que o servidor está ligado |
| load average | carga média do servidor          |

#### Interpretando o Load Average

Regra geral:

* valor **igual ao número de CPUs** → carga normal
* valor **muito maior que CPUs** → servidor sobrecarregado

Exemplo:

Servidor com **2 CPUs**

```
load average: 6.50
```

Isso indica **sobrecarga no processador**.

***

## 2️⃣ Verificar consumo de CPU e memória em tempo real

Execute:

```bash
top
```

Esse comando mostra:

* uso de CPU
* uso de memória
* processos ativos

Exemplo:

```
PID USER %CPU %MEM COMMAND
2451 root 80.2  5.1 node
1310 root 15.0  2.8 postgres
```

#### Campos importantes

| Campo   | Descrição          |
| ------- | ------------------ |
| %CPU    | uso do processador |
| %MEM    | uso da memória     |
| COMMAND | processo executado |

Se algum processo estiver com **CPU muito alto**, pode indicar problema.

Para sair:

```
CTRL + C
```

***

## 3️⃣ Listar processos que mais usam CPU

```bash
ps aux --sort=-%cpu | head
```

Exemplo:

```
USER       PID %CPU %MEM COMMAND
root      2451 92.0  5.2 node
postgres  1310 10.5  3.0 postgres
```

Esse comando mostra **os processos que mais utilizam CPU**.

***

## 4️⃣ Listar processos que mais usam memória

```bash
ps aux --sort=-%mem | head
```

Isso mostra os processos que estão consumindo mais **RAM**.

***

## 5️⃣ Verificar uso total de memória

```bash
free -h
```

Exemplo:

```
              total        used        free
Mem:           8Gi        6.4Gi        1.0Gi
Swap:          2Gi        0.2Gi        1.8Gi
```

#### Interpretação

| Campo | Significado       |
| ----- | ----------------- |
| total | memória total     |
| used  | memória utilizada |
| free  | memória livre     |

Se a memória estiver **quase totalmente utilizada**, o servidor pode ficar lento.

***

## 6️⃣ Verificar espaço em disco

```bash
df -h
```

Exemplo:

```
Filesystem      Size  Used Avail Use%
/dev/vda1        80G   70G   10G  88%
```

⚠️ Se o disco chegar próximo de **100%**, o sistema pode parar de funcionar.

***

## 7️⃣ Verificar containers Docker

Para listar containers ativos:

```bash
docker ps
```

Exemplo:

```
CONTAINER ID   NAME        STATUS
a8f8e2c1       backend     Up 3 days
c7e1b9e2       postgres    Up 3 days
d2a7c1e4       redis       Up 3 days
```

***

## 8️⃣ Ver consumo de CPU e memória dos containers

Execute:

```bash
docker stats
```

Exemplo:

```
NAME        CPU %     MEM USAGE
backend     85.20%    600MiB
postgres    10.30%    400MiB
redis        1.00%     50MiB
```

#### Interpretação

| Situação              | Possível causa                |
| --------------------- | ----------------------------- |
| CPU muito alto        | loop ou processamento intenso |
| memória crescendo     | vazamento de memória          |
| container reiniciando | erro na aplicação             |

Para sair:

```
CTRL + C
```

***

## 9️⃣ Verificar logs de containers

Se algum serviço estiver com erro:

```bash
docker logs nome_container
```

Exemplo:

```bash
docker logs backend
```

Para acompanhar em tempo real:

```bash
docker logs -f backend
```

***

## 🔟 Verificar containers reiniciando

Containers reiniciando indicam erro na aplicação.

Execute:

```bash
docker ps -a
```

Se aparecer algo como:

```
Restarting (1) 5 seconds ago
```

Significa que o container está **entrando em loop de erro**.

***

## 1️⃣1️⃣ Verificar uso de recursos do Docker

Para ver quanto espaço o Docker está usando:

```bash
docker system df
```

Exemplo:

```
TYPE            TOTAL     ACTIVE    SIZE
Images          12        4         3.2GB
Containers      5         5         200MB
Volumes         6         6         1.1GB
```

***

## 1️⃣2️⃣ Verificar logs do sistema

Alguns erros aparecem nos logs do sistema:

```bash
journalctl -xe
```

Ou logs recentes:

```bash
journalctl -n 100
```

***

## 1️⃣3️⃣ Verificar rede e conexões

Se o sistema estiver lento para responder API:

```bash
ss -tulnp
```

Mostra portas abertas e conexões.

***

## 1️⃣4️⃣ Verificar carga do banco de dados

Se usar Postgres dentro de Docker:

```bash
docker exec -it postgres psql -U postgres
```

Depois:

```sql
SELECT * FROM pg_stat_activity;
```

Isso mostra **consultas em execução**.

***

## 🚨 Problemas mais comuns

#### CPU muito alta

Possíveis causas:

* loop infinito em aplicação
* automações executando sem controle
* filas de processamento
* consultas pesadas no banco

***

#### Memória alta

Possíveis causas:

* vazamento de memória
* containers acumulando cache
* muitas conexões abertas

***

#### Disco cheio

Possíveis causas:

* logs acumulados
* uploads
* backups antigos

***

#### Container reiniciando

Possíveis causas:

* erro na aplicação
* variável de ambiente incorreta
* banco indisponível
* erro de conexão API

***

## 📋 Informações importantes para diagnóstico

Se o sistema estiver lento, envie:

```bash
uptime
```

```bash
top
```

```bash
free -h
```

```bash
df -h
```

```bash
docker ps
```

```bash
docker stats
```

Essas informações ajudam a identificar rapidamente o problema.

***

💡 **Dica para suporte técnico**

Sempre verifique:

* containers reiniciando
* CPU acima de **80%**
* memória acima de **90%**
* disco acima de **90%**

Esses são os **principais motivos de lentidão em sistemas SaaS rodando em Docker**.
