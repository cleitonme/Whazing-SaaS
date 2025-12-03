---
icon: database
---

# Banco de Dados

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
* **Senha**:

## 4. Exibir Todos os Bancos de Dados

Para visualizar todos os bancos disponíveis, ative a opção correspondente dentro do **DBeaver**.

## 5. Configurar Acesso via SSH (se necessário)

Se precisar acessar o banco de dados remotamente:

1. Vá até a aba **SSH**.
2. Marque a opção **Usar túnel SSH**.
3. Preencha os dados da sua VPS.

### Exemplos Visuais:

🖼️ **Configuração do Banco de Dados**

> <img src="/broken/files/64NXMzlrofA0OhwM7KKl" alt="print" data-size="original">

🖼️ **Configuração SSH**

> <img src="/broken/files/IxUVkLlrJXYJgjWWURoh" alt="print" data-size="original">

Agora você está pronto para acessar e gerenciar seu banco de dados PostgreSQL! 🚀

### 🔐 Manual para Recuperação de Senha de Usuário no Banco de Dados (DBeaver + PostgreSQL) <a href="#manual-para-recuperacao-de-senha-de-usuario-no-banco-de-dados-dbeaver--postgresql" id="manual-para-recuperacao-de-senha-de-usuario-no-banco-de-dados-dbeaver--postgresql"></a>

Passo 1 – Acessar a Tabela de Usuários

* No DBeaver, expanda a conexão do banco de dados no painel à esquerda.
* Vá até **Schemas → public → Tables → Users**.

![](https://atendecloud.gitbook.io/atendecloud/~gitbook/image?url=https%3A%2F%2F1785706021-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FplOSacHdPLoVZCJ1gEqO%252Fuploads%252FspUtRcMdLEw8A32SsN4k%252Fimage.png%3Falt%3Dmedia%26token%3Dc63090f1-5f71-476b-8fe5-4edda4e7476d\&width=768\&dpr=4\&quality=100\&sign=e22e6fdb\&sv=2)

**Clique com o botão direito do mouse sobre a tabela Users e selecione “Visualizar Dados” → “Todas as Linhas” (**_**View Data → All Rows**_**).**

![](https://atendecloud.gitbook.io/atendecloud/~gitbook/image?url=https%3A%2F%2F1785706021-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FplOSacHdPLoVZCJ1gEqO%252Fuploads%252Fg0LqJnsxeb1ALJpvuv7J%252Fimage.png%3Falt%3Dmedia%26token%3Dbb1e78b8-e53b-45f4-a50b-57c92f85f5a2\&width=768\&dpr=4\&quality=100\&sign=bee9c7ab\&sv=2)

Encontre o usuário que deseja **redefinir a senha**.

📘 **Exemplo:** Vamos redefinir a senha do usuário **adm**, cujo e-mail é **adm@gmail.com**.

![](https://atendecloud.gitbook.io/atendecloud/~gitbook/image?url=https%3A%2F%2F1785706021-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FplOSacHdPLoVZCJ1gEqO%252Fuploads%252FSim1XW9tVovriqFadQ2E%252Fimage.png%3Falt%3Dmedia%26token%3Dc171a8c5-50f8-4d73-8b32-3b2da4f2b6ec\&width=768\&dpr=4\&quality=100\&sign=4dc85b54\&sv=2)

### Passo 2 – Abrir o Console SQL <a href="#passo-2-abrir-o-console-sql" id="passo-2-abrir-o-console-sql"></a>

* Clique com o **botão direito** sobre o banco de dados.
* Selecione **“SQL Editor” → “Nova Janela SQL”** (_SQL Editor → New SQL Script_).
* Um editor será aberto para você executar comandos SQL diretamente.

![](https://atendecloud.gitbook.io/atendecloud/~gitbook/image?url=https%3A%2F%2F1785706021-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FplOSacHdPLoVZCJ1gEqO%252Fuploads%252FQIr3EH507hUiPxUqL3SM%252Fimage.png%3Falt%3Dmedia%26token%3D4de6a521-5a2c-478c-9f4c-4a3ec1a39317\&width=768\&dpr=4\&quality=100\&sign=deab78fe\&sv=2)

### Passo 3 – Redefinir a Senha do Usuário <a href="#passo-3-redefinir-a-senha-do-usuario" id="passo-3-redefinir-a-senha-do-usuario"></a>

Cole o comando abaixo no editor SQL, **alterando o e-mail e a senha conforme o usuário desejado**:

Copiar

```
CREATE EXTENSION IF NOT EXISTS pgcrypto;

UPDATE public."Users"
SET "passwordHash" = crypt('Suasenhanova', gen_salt('bf'))
WHERE "email" = 'adm@gmail.com';
```

✅ **Atenção:**

* Substitua `'Suasenhanova'` pela nova senha que deseja definir.
* Substitua `'adm@gmail.com'` pelo e-mail do usuário que quer atualizar.

Depois de editar, clique no ícone ▶️ (**Executar Script**).

Execute o script

![](https://atendecloud.gitbook.io/atendecloud/~gitbook/image?url=https%3A%2F%2F1785706021-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FplOSacHdPLoVZCJ1gEqO%252Fuploads%252F1AvhKMsQuilcGgxqO2Un%252Fimage.png%3Falt%3Dmedia%26token%3D6a9f65fe-67f0-4129-86f4-2980be40bcef\&width=768\&dpr=4\&quality=100\&sign=9aca7f72\&sv=2)

### Passo 4 – Confirmar a Alteração <a href="#passo-4-confirmar-a-alteracao" id="passo-4-confirmar-a-alteracao"></a>

Para verificar se a senha foi atualizada, execute o comando abaixo (alterando apenas o e-mail):

Copiar

```
SELECT "email", "passwordHash"
FROM public."Users"
WHERE "email" = 'adm@gmail.com';
```

Se o comando retornar um registro com o **novo hash**, a alteração foi feita com sucesso.

![](https://atendecloud.gitbook.io/atendecloud/~gitbook/image?url=https%3A%2F%2F1785706021-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FplOSacHdPLoVZCJ1gEqO%252Fuploads%252FyTMpDvS7tLrcjGJ36fFv%252Fimage.png%3Falt%3Dmedia%26token%3Dae0d582a-9da7-4a42-9fd6-46817f7fd47c\&width=768\&dpr=4\&quality=100\&sign=d7872248\&sv=2)

***

**✅ Resultado Final**

A senha do usuário foi **redefinida com sucesso**. O usuário já pode acessar o sistema utilizando a **nova senha configurada**.
