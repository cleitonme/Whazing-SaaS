# Atualizar o PostgreSQL do WuzAPI para a versão 17.12

Este tutorial explica como atualizar o PostgreSQL da versão **17.2 para 17.12** usando o arquivo `/home/deploy/wuzapi.yaml`.

> Faça o backup antes de começar. Não apague nem altere os volumes ou pastas de dados do PostgreSQL.

### 1. Acessar a VPS e conferir o arquivo

Abra o terminal da VPS e verifique quais serviços estão configurados no YAML:

```bash
docker compose -f /home/deploy/wuzapi.yaml config --services
```

Se a lista mostrar um serviço de PostgreSQL, continue este tutorial. Se não mostrar, esse arquivo não configura o banco; não adicione um serviço de PostgreSQL por conta própria.

### 2. Fazer backup do banco

Se o container do banco se chama `postgresql`, execute:

```bash
docker exec -t postgreswuzapi pg_dumpall -U whazing > /home/deploy/backup-postgresqlwuzapi.sql
```

Confirme que o arquivo foi criado:

```bash
ls -lh /home/deploy/backup-postgresqlwuzapi.sql
```

Guarde uma cópia do backup em outro local seguro. Como precaução adicional, usuários avançados podem criar um snapshot da VPS pelo painel do provedor antes de continuar.

### 3. Alterar a versão no YAML

Abra o arquivo:

```bash
nano /home/deploy/wuzapi.yaml
```

Localize o serviço do PostgreSQL e procure uma linha semelhante a:

```yaml
image: postgres:17.2
```

Altere **somente a versão da imagem**:

```yaml
image: postgres:17.12
```

Mantenha as outras configurações do serviço como estão, especialmente `volumes`, usuário, senha e porta.

Para salvar no Nano, pressione `Ctrl+O`, depois `Enter`. Para sair, pressione `Ctrl+X`.

### 4. Baixar a imagem e atualizar

Execute:

```bash
docker compose -f /home/deploy/wuzapi.yaml pull
docker compose -f /home/deploy/wuzapi.yaml up -d
```

O banco pode ficar indisponível por um breve período enquanto o container é recriado. Não interrompa o processo nem apague volumes ou pastas de dados.

### 5. Conferir o resultado

Veja se os serviços estão ativos:

```bash
docker compose -f /home/deploy/wuzapi.yaml ps
```

Confirme a versão do banco:

```bash
docker exec -it postgreswuzapi psql -U wuzapi -c "SELECT version();"
```

A saída deve indicar PostgreSQL **17.12**. Depois, confirme que o WuzAPI está funcionando e conectando ao banco.

#### Responsabilidade e suporte técnico <a href="#responsabilidade-e-suporte-tecnico" id="responsabilidade-e-suporte-tecnico"></a>

A atualização pode ser feita pelo cliente seguindo este procedimento. Caso prefira que a equipe realize o serviço, a execução é feita mediante contratação de **hora técnica**.

Para solicitar atendimento, acesse [o cadastro do cliente no gestor Whazing](https://gestor.whazing.com.br/products/client/detail/14).

Consulte também a [documentação de backup da VPS](https://doc.whazing.com.br/instalacao-and-vps/instalacao-and-vps/backup).
