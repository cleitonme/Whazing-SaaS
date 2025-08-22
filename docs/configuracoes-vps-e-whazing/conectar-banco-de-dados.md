# Conectar ao Banco de Dados PostgreSQL

## 🔑 Como descobrir a senha do banco no Whazing

Em sistemas baseados no **Whazing**, a senha do banco de dados não fica em um lugar visível no painel.\
Ela está salva em um **arquivo de configuração do sistema**, chamado `.env`.

***

### 📂 Onde fica o arquivo `.env`

No Ubuntu (servidores padrão de instalação), o arquivo está no caminho:

```
/home/deploy/whazing/backend/.env
```

Esse arquivo contém **todas as informações de conexão com o banco de dados** (usuário, senha, nome do banco e endereço do servidor).

***

## 1. Baixar o Programa para Acessar o Banco de Dados

Para acessar o PostgreSQL, usaremos o programa **DBeaver**.

🔗 [Baixar DBeaver](https://dbeaver.io/download/)

## 2. Criar uma Conexão com o PostgreSQL

1. Abra o **DBeaver**.
2. Clique em **Nova Conexão**.
3. Escolha a opção **PostgreSQL**.

### 3. Preencher os Dados de Conexão

* **Host**: IP da sua VPS
* **Porta**: `5432`
* **Banco de Dados**: `postgres`
* **Usuário**: `whazing`
* **Senha**:&#x20;

## 4. Exibir Todos os Bancos de Dados

Para visualizar todos os bancos disponíveis, ative a opção correspondente dentro do **DBeaver**.

## 5. Configurar Acesso via SSH (se necessário)

Se precisar acessar o banco de dados remotamente:

1. Vá até a aba **SSH**.
2. Marque a opção **Usar túnel SSH**.
3. Preencha os dados da sua VPS.

### Exemplos Visuais:

🖼️ **Configuração do Banco de Dados**

> <img src="../Conectar Banco de dados/dadosbanco.png" alt="print" data-size="original">

🖼️ **Configuração SSH**

> <img src="../Conectar Banco de dados/dadosssh.png" alt="print" data-size="original">

Agora você está pronto para acessar e gerenciar seu banco de dados PostgreSQL! 🚀
