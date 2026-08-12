# Configurar OAuth do Gmail para Canal EMAIL

**Disponível a partir da versão 3.0.0**

O OAuth do Gmail permite que as empresas conectem uma conta de e-mail utilizando o botão **"Entrar com Google"**, sem precisar informar a senha do Gmail.

> **Importante:** a configuração do OAuth é feita **uma única vez para toda a plataforma**, no painel SaaS. Não é necessário configurar o OAuth separadamente para cada empresa.

### Quando preciso configurar o OAuth?

Você precisa configurar o OAuth somente se quiser permitir que seus clientes conectem e-mails através de:

**Entrar com Google**

Se a empresa utilizar uma configuração tradicional com:

* IMAP
* SMTP
* Usuário
* Senha

não é necessário configurar o OAuth.

***

## 1. Acessar a configuração no sistema

Entre no sistema com uma conta que tenha acesso ao **Painel SaaS**.

No menu, acesse:

**Painel SaaS → Integrações → E-mail (OAuth)**

Nesta tela serão exibidas as configurações de autenticação para Google e Microsoft.

Para configurar o Gmail, vamos utilizar a seção:

**Google**

Você encontrará os campos:

* **Client ID**
* **Client Secret**

Esses dados serão obtidos no Google Cloud.

***

## 2. Criar um projeto no Google Cloud

Acesse o:

[Google Cloud Console](https://console.cloud.google.com/?utm_source=chatgpt.com)

Faça login com uma conta Google que será responsável pelo aplicativo OAuth.

No topo da página, clique em:

**Selecionar projeto**

Depois clique em:

**Novo projeto**

Informe um nome para o projeto.

Exemplo:

```
Whazing Gmail
```

Clique em **Criar**.

***

## 3. Ativar a Gmail API

Depois de criar o projeto, abra o menu:

**APIs e serviços → Biblioteca**

Pesquise por:

```
Gmail API
```

Clique em **Gmail API**.

Depois clique em:

**Ativar**

A API do Gmail precisa estar habilitada para que o aplicativo possa utilizar os recursos do Gmail.

***

## 4. Configurar a tela de consentimento

Agora precisamos configurar a tela que será apresentada ao usuário quando ele clicar em **Entrar com Google**.

No Google Cloud, acesse:

**Google Auth Platform → Branding**

Caso o Google apresente o botão **Começar**, clique nele.

Preencha:

#### Nome do aplicativo

Utilize o nome da sua plataforma.

Exemplo:

```
Whazing
```

#### E-mail de suporte

Informe um e-mail válido.

Depois avance para as próximas configurações.

O Google utiliza essa configuração para definir as informações apresentadas ao usuário durante a autorização.

***

## 5. Configurar o público do aplicativo

Na configuração do aplicativo, procure por:

**Audience / Público-alvo**

Selecione:

**Externo**

Essa opção permite que contas Google de clientes possam utilizar a autenticação.

> Se você selecionar **Interno**, normalmente o aplicativo ficará restrito às contas da organização Google Workspace.

***

## 6. Criar o cliente OAuth

Agora precisamos criar as credenciais que serão colocadas no sistema.

No Google Cloud, acesse:

**Google Auth Platform → Clients**

Clique em:

**Create Client**

Em tipo de aplicativo, selecione:

**Web application**

Dê um nome para identificar a configuração.

Exemplo:

```
Whazing Gmail OAuth
```

O Google recomenda o tipo **Web application** para esse tipo de fluxo OAuth no servidor.

***

## 7. Configurar a URL de retorno

Esta é uma das configurações mais importantes.

Na seção:

**Authorized redirect URIs**

clique em:

**Add URI**

Informe exatamente:

```
https://testeapi.whazing.com.br/email-oauth/google/callback
```

Depois salve.

> **Atenção:** não altere a URL, não coloque uma `/` no final e não utilize outra URL. O endereço cadastrado no Google precisa ser exatamente o mesmo utilizado pelo sistema.

O Google exige que o URI de redirecionamento utilizado pelo aplicativo esteja registrado nas credenciais OAuth.

***

## 8. Copiar o Client ID e Client Secret

Depois de criar o cliente OAuth, o Google mostrará as credenciais.

Você precisará de dois dados:

#### Client ID

Será parecido com:

```
123456789012-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com
```

#### Client Secret

Será uma chave gerada pelo Google.

> **Importante:** não compartilhe o Client Secret publicamente.

O Google permite consultar posteriormente o **Client ID** e o **Client Secret** nas credenciais OAuth criadas.

***

## 9. Colocar os dados no sistema

Volte para o sistema.

Acesse:

**Painel SaaS → Integrações → E-mail (OAuth)**

Na seção **Google**, preencha:

#### Client ID

Cole o valor copiado do Google Cloud.

#### Client Secret

Cole o valor copiado do Google Cloud.

Exemplo:

```
Client ID:
123456789012-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com

Client Secret:
GOCSPX-xxxxxxxxxxxxxxxxxxxxxxxx
```

Depois clique em:

**Salvar**

***

## 10. Testar a conexão

Depois de salvar o OAuth, entre em uma empresa que tenha acesso à configuração de e-mail.

Acesse a configuração de e-mail e escolha:

**Google**

Depois clique em:

**Entrar com Google**

O Google abrirá uma nova tela.

Selecione a conta Gmail que deseja conectar.

***

## 11. Autorizar o aplicativo

O Google mostrará as permissões solicitadas pelo sistema.

Confira as informações e clique em:

**Permitir**

Depois da autorização, o Google retornará automaticamente para o sistema.

A conta Gmail deverá aparecer como conectada.

***

## 12. Configuração da URL utilizada pelo sistema

Para o Google, a URL de retorno utilizada pelo sistema é:

```
https://testeapi.whazing.com.br/email-oauth/google/callback
```

Essa URL deve estar cadastrada no Google Cloud em:

**Google Auth Platform → Clients → seu aplicativo → Authorized redirect URIs**

***

## Problemas comuns

### Erro de URI de redirecionamento

Se aparecer um erro relacionado a:

```
redirect_uri_mismatch
```

verifique se a URL cadastrada no Google está exatamente assim:

```
https://testeapi.whazing.com.br/email-oauth/google/callback
```

Confira principalmente:

* `https`
* domínio
* `/email-oauth/google/callback`
* ausência de espaços
* ausência de `/` adicional no final

***

### Client ID ou Client Secret inválido

Volte em:

**Painel SaaS → Integrações → E-mail (OAuth)**

e confira se os dados foram copiados corretamente.

O **Client ID** e o **Client Secret** precisam pertencer ao mesmo aplicativo OAuth criado no Google Cloud.

***

### Gmail não conecta

Verifique se a:

**Gmail API**

está ativada no projeto correto do Google Cloud.

Também confirme se o aplicativo OAuth foi criado como:

**Web application**

e se a URL de retorno está cadastrada corretamente.

***

## Configuração para Microsoft

A configuração do Microsoft OAuth também está disponível na mesma tela:

**Painel SaaS → Integrações → E-mail (OAuth)**

Para Microsoft, utilize o Azure Portal e a URL de retorno:

```
https://testeapi.whazing.com.br/email-oauth/microsoft/callback
```

A configuração do Google e Microsoft é independente.

***

## Resumo

Para configurar o Gmail:

1. Acesse **Painel SaaS → Integrações → E-mail (OAuth)**.
2. Abra o **Google Cloud Console**.
3. Crie um projeto.
4. Ative a **Gmail API**.
5. Configure a tela de consentimento OAuth.
6. Crie um cliente OAuth do tipo **Web application**.
7.  Cadastre a URL:

    ```
    https://testeapi.whazing.com.br/email-oauth/google/callback
    ```
8. Copie o **Client ID**.
9. Copie o **Client Secret**.
10. Volte ao sistema.
11. Acesse **Painel SaaS → Integrações → E-mail (OAuth)**.
12. Cole o **Client ID** e **Client Secret** nos campos do Google.
13. Clique em **Salvar**.
14. Teste conectando uma conta através de **Entrar com Google**.

> **Esta configuração é única para a plataforma.** Depois de configurada, não é necessário criar um novo aplicativo OAuth para cada empresa.
