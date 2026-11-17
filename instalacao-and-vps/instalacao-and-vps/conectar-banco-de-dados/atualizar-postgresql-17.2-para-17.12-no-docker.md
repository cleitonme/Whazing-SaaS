# Atualizar PostgreSQL 17.2 para 17.12 no Docker

Este procedimento atualiza o PostgreSQL instalado em Docker para a versão **17.12**, que corrige a falha de segurança **CVE-2026-6460**. Segundo o PostgreSQL, as versões 17 anteriores à 17.12 são afetadas; a correção foi publicada em 12 de novembro de 2026.

> **Importante:** faça o backup antes de começar. Não apague nem altere a pasta `/data`, pois ela contém o banco de dados.

### Antes de começar

Tenha acesso ao terminal da VPS e identifique:

* A senha do banco: consulte `/home/deploy/whazing/backend/.env` e procure o campo `POSTGRES_PASSWORD`.
* O fuso horário usado pelo servidor. Por exemplo: `America/Sao_Paulo`.

Mantenha a senha em segredo: em chamados ou em capturas de tela.

### 1. Fazer backup do banco

Execute na VPS:

```bash
docker exec -t postgresql pg_dumpall -U whazing > /home/deploy/backup-postgresql.sql
```

O arquivo de backup será criado em:

```
/home/deploy/backup-postgresql.sql
```

Confirme que o arquivo existe e não está vazio:

```bash
ls -lh /home/deploy/backup-postgresql.sql
```

Guarde uma cópia do backup em um local seguro. Se possível, baixe-o para outro equipamento ou armazenamento que não seja a própria VPS.

### 2. Backup adicional para usuários avançados

Como precaução adicional, usuários avançados podem criar um **snapshot da VPS** pelo painel do provedor antes da atualização.

Um snapshot é uma cópia da VPS que pode ajudar a restaurar o servidor caso ocorra algum problema. Para maior segurança, faça-o conforme as instruções do provedor e confirme que o snapshot foi concluído antes de continuar.

### 3. Baixar a imagem atualizada

```bash
docker pull postgres:17.12
```

### 4. Parar e remover o container antigo

Os comandos abaixo removem o container, **não os dados armazenados em `/data`**:

```bash
docker stop postgresql
docker rm postgresql
```

Não execute comandos para apagar a pasta `/data`.

### 5. Criar novamente o container

Troque `COLOQUE_A_SENHA_AQUI` pela senha do campo `POSTGRES_PASSWORD` do arquivo `.env`. Preencha também o fuso horário; no exemplo abaixo, foi usado `America/Sao_Paulo`.

```bash
docker run --name postgresql \
  -e POSTGRES_USER=whazing \
  -e POSTGRES_PASSWORD='COLOQUE_A_SENHA_AQUI' \
  -e TZ='America/Sao_Paulo' \
  -p 5432:5432 \
  --restart=always \
  -v /data:/var/lib/postgresql/data \
  -d postgres:17.12
```

Se o fuso horário do servidor for outro, substitua `America/Sao_Paulo` pelo fuso correto.

### 6. Conferir se o banco iniciou

Veja os registros de inicialização:

```bash
docker logs -f postgresql
```

Para sair da visualização dos registros, pressione `Ctrl+C`. Isso não para o container.

Confira a versão:

```bash
docker exec -it postgresql psql -U whazing -c "SELECT version();"
```

A saída deve indicar PostgreSQL **17.12**. Depois, confirme que a aplicação está conectando ao banco normalmente.

### Se ocorrer algum problema

Não apague nem modifique `/data`. Consulte os registros do container:

```bash
docker logs postgresql
```

Mantenha o arquivo de backup até confirmar que a aplicação está funcionando e que os dados estão corretos. Se precisar restaurar o banco usando o backup, solicite apoio técnico.

#### Aviso: Collation Version Mismatch após a atualização

Após atualizar o PostgreSQL de 17.2 para 17.12 no Docker, pode aparecer um aviso semelhante a este nos registros:

```
WARNING: database "postgres" has a collation version mismatch

DETAIL: The database was created using collation version 2.36,
but the operating system provides version 2.41.
```

**Por que isso acontece?**

A nova imagem do PostgreSQL pode utilizar uma versão mais recente das bibliotecas do sistema operacional, como a `glibc`.

O PostgreSQL registra a versão da biblioteca de ordenação de textos (collation) utilizada quando o banco foi criado. Quando essa versão muda, ele identifica a divergência e emite o aviso.

Isso não significa necessariamente que houve perda de dados ou falha na atualização do PostgreSQL.

#### Como corrigir

**Importante:** antes de executar os procedimentos, faça um backup do banco de dados. Recomenda-se realizar essa manutenção em horário de baixo movimento, pois a reconstrução dos índices pode bloquear operações no banco.

**1. Identificar os bancos afetados**

Execute:

```
docker exec -it postgresql psql -U whazing -d postgres
```

Dentro do PostgreSQL, execute:

```
SELECT
    datname,
    datcollversion AS versao_anterior,
    pg_database_collation_actual_version(oid) AS versao_atual
FROM pg_database
WHERE datallowconn = true
AND datcollversion IS DISTINCT FROM
    pg_database_collation_actual_version(oid);
```

A consulta apresenta os bancos que possuem divergência na versão da collation.

**2. Reconstruir os índices**

Para cada banco identificado na consulta, é necessário reconstruir os índices antes de atualizar a versão registrada.

No caso do aviso apresentado no banco `postgres`, execute:

```
REINDEX DATABASE postgres;
```

Aguarde a conclusão do procedimento.

**3. Atualizar a versão da collation**

Depois que a reconstrução dos índices terminar, execute:

```
ALTER DATABASE postgres REFRESH COLLATION VERSION;
```

Esse comando atualiza a versão registrada no PostgreSQL para corresponder à versão atualmente disponibilizada pelo sistema operacional.

**Atenção:** o comando `REFRESH COLLATION VERSION` sozinho não reconstrói índices. Por isso, não deve ser executado antes do `REINDEX DATABASE`.

**4. Repetir nos demais bancos, se necessário**

Se a consulta inicial identificar outros bancos afetados, repita o procedimento para cada um deles.

Exemplo para um banco chamado `whazing`:

```
REINDEX DATABASE whazing;

ALTER DATABASE whazing REFRESH COLLATION VERSION;
```

Substitua o nome pelo banco identificado na consulta.

**5. Conferir se a divergência foi resolvida**

Execute novamente a consulta do primeiro passo.

Se nenhum banco for retornado, não existem divergências de versão da collation detectadas nessa consulta.

Também é possível consultar os registros do container:

```
docker logs --tail 100 postgresql
```

#### Observações importantes

* Esse procedimento não exige apagar ou recriar o container.
* Não apague nem altere a pasta `/data`, onde ficam armazenados os dados do PostgreSQL.
* A reconstrução dos índices não apaga os registros das tabelas, mas pode exigir bloqueios e espaço adicional em disco.
* Não execute o procedimento indiscriminadamente em bancos que não apresentam divergência.
* Mantenha o backup até confirmar que o sistema está funcionando normalmente.

Se não tiver familiaridade com comandos SQL ou administração do PostgreSQL, solicite auxílio técnico antes de realizar o procedimento.

### Responsabilidade e suporte técnico

A atualização pode ser feita pelo cliente seguindo este procedimento. Caso prefira que a equipe realize o serviço, a execução é feita mediante contratação de **hora técnica**.

Para solicitar atendimento, acesse [o cadastro do cliente no gestor Whazing](https://gestor.whazing.com.br/products/client/detail/14).

Consulte também a [documentação de backup da VPS](https://doc.whazing.com.br/instalacao-and-vps/instalacao-and-vps/backup).
