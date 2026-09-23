# Configurar OAuth do Google/Microsoft (E-mail + Agenda)

O OAuth do Gmail permite que as empresas conectem uma conta de e-mail utilizando o botão **"Entrar com Google"** (ou **"Entrar com Microsoft"**), sem precisar informar a senha do Gmail.

> 💡 **Novidade:** essa mesma configuração agora também habilita a **sincronização com o Google Calendar e o Outlook na Agenda** — o profissional conecta o calendário pessoal dele e os compromissos pessoais bloqueiam horário na Agenda do sistema. Você **não precisa criar um segundo aplicativo** no Google: **o mesmo Client ID e Client Secret valem para os dois usos** — basta cadastrar **mais uma URL de retorno** (veja o passo 7).

> **Importante:** a configuração do OAuth é feita **uma única vez para toda a plataforma**, no painel SaaS. Não é necessário configurar o OAuth separadamente para cada empresa.

### O que a configuração habilita?

O OAuth é necessário para oferecer, em duas telas do sistema:

1. **Canal de e-mail** — o botão **Entrar com Google / Entrar com Microsoft** na conexão de caixas de e-mail.
2. **Agenda** — os botões **Conectar Google Calendar / Conectar Outlook** na sincronização de calendário (Google Calendar API / Outlook).

Se a empresa utilizar uma configuração tradicional com:

* IMAP
* SMTP
* Usuário
* Senha

não é necessário configurar o OAuth. E se a Agenda for usada sem sincronização externa, também não é necessário. **Sem essa configuração nada quebra** — as telas continuam funcionando do jeito manual.

***

## 1. Acessar a configuração no sistema

Entre no sistema com uma conta que tenha acesso ao **Painel SaaS**.

No menu, acesse:

**Painel SaaS → Integrações → Login com Google/Microsoft (OAuth)**

Nesta tela serão exibidas as configurações de autenticação para **Google** e **Microsoft**, junto com um aviso explicando que a configuração atende o **e-mail e a Agenda**.

Para configurar o Google, vamos utilizar a seção:

**Google**

Você encontrará os campos:

* **Client ID**
* **Client Secret**

Esses dados serão obtidos no Google Cloud.

> 💡 A tela mostra também as **4 URLs de retorno** que o sistema utiliza (E-mail e Agenda, para Google e Microsoft). Copie-as exatamente como aparecem — elas dependem do endereço (domínio) da sua instalação.

***

## 2. Criar um projeto no Google Cloud

Acesse o:

[Google Cloud Console](https://console.cloud.google.com)

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

## 3. Ativar as APIs: Gmail API e Google Calendar API

Depois de criar o projeto, abra o menu:

**APIs e serviços → Biblioteca**

### 3.1 Ativar a Gmail API

Pesquise por:

```
Gmail API
```

Clique em **Gmail API**.

Depois clique em:

**Ativar**

A API do Gmail precisa estar habilitada para que o aplicativo possa ler e enviar e-mails.

### 3.2 Ativar a Google Calendar API

Volte à **Biblioteca**, pesquise por:

```
Google Calendar API
```

Clique em **Google Calendar API**.

Depois clique em:

**Ativar**

> ⚠️ **Novidade importante:** a **Google Calendar API** precisa estar ativada no **mesmo projeto** para que a sincronização com a Agenda funcione. Se você só for usar OAuth para e-mail (e não pretende oferecer sincronização de Agenda), ativar apenas a Gmail API é suficiente.

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

## 7. Configurar as URLs de retorno

Esta é uma das configurações mais importantes.

Na seção:

**Authorized redirect URIs**

clique em:

**Add URI**

Cadastre **as URLs de retorno do E-mail e da Agenda** (copie exatamente como a tela de configuração do sistema mostra):

```
https://testeapi.whazing.com.br/email-oauth/google/callback
https://testeapi.whazing.com.br/calendar-sync-oauth/google/callback
```

Depois salve.

> **Atenção:** não altere as URLs, não coloque uma `/` no final e não utilize outros endereços. O endereço `testeapi.whazing.com.br` é um exemplo — **use o domínio da sua instalação**, exatamente como exibido na tela do sistema. Cada endereço cadastrado no Google precisa ser idêntico ao utilizado pelo sistema.

O Google exige que os URIs de redirecionamento utilizados pelo aplicativo estejam registrados nas credenciais OAuth.

> 💡 Se você também configurar o **Microsoft** para e-mail e Agenda, o mesmo raciocínio vale no Azure: cadastre as URLs de retorno de **e-mail** (`/email-oauth/microsoft/callback`) **e de Agenda** (`/calendar-sync-oauth/microsoft/callback`).

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

**Painel SaaS → Integrações → Login com Google/Microsoft (OAuth)**

Na seção **Google**:

1. Certifique-se de que a chave **Google** está **ativada**.
2. Em **Client ID**, cole o valor copiado do Google Cloud.
3. Em **Client Secret**, cole o valor copiado do Google Cloud.

Exemplo:

```
Client ID:
123456789012-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com

Client Secret:
GOCSPX-xxxxxxxxxxxxxxxxxxxxxxxx
```

Depois clique em **Salvar** (ou aguarde a confirmação de "Configuração alterada").

> 💡 **O mesmo Client ID/Secret vale para e-mail e Agenda** — não crie um aplicativo separado. A configuração é por provedor (Google e Microsoft são independentes entre si).

***

## 10. Testar a conexão (e-mail)

Depois de salvar o OAuth, entre em uma empresa que tenha acesso à configuração de e-mail.

Acesse a configuração de e-mail e escolha:

**Google**

Depois clique em:

**Entrar com Google**

O Google abrirá uma nova tela.

Selecione a conta Gmail que deseja conectar.

***

## 11. Autorizar o aplicativo

O Google mostrará as permissões solicitadas pelo sistema (as permissões incluem e-mail e, se o app tiver a Google Calendar API ativada, também calendário).

Confira as informações e clique em:

**Permitir**

Depois da autorização, o Google retornará automaticamente para o sistema.

A conta Gmail deverá aparecer como conectada.

***

## 12. Testar a sincronização da Agenda

Para testar a parte da Agenda (Google Calendar/Outlook):

1. Abra a **Agenda** do sistema → **Configurações da agenda** (⚙️) → aba **Profissionais** (ou aba **Calendários**).
2. Abra um profissional (ou calendário) e localize a seção **"Sincronização com Google Calendar/Outlook"**.
3. Clique em **Conectar Google Calendar** (ou **Conectar Outlook**).
4. Faça login na conta externa e **autorize** o acesso.
5. A seção deve exibir **"Conectado como"** o e-mail da conta.

> 💡 O profissional também pode conectar a própria agenda sozinho: **Perfil** (menu do usuário) → seção **"Sincronização com Google Calendar/Outlook"** (só aparece se o OAuth estiver habilitado no painel SaaS e o profissional estiver vinculado ao usuário).

Guia completo do uso no dia a dia: [Google Agenda](../funcionalidades/agenda/google-agenda.md)

***

## 13. Configuração da URL utilizada pelo sistema

Para o Google, o sistema utiliza **duas** URLs de retorno:

| Uso | URL de retorno |
| --- | --- |
| **E-mail** | `https://SEU-DOMINIO/email-oauth/google/callback` |
| **Agenda (Google Calendar)** | `https://SEU-DOMINIO/calendar-sync-oauth/google/callback` |

Essas URLs devem estar cadastradas no Google Cloud em:

**Google Auth Platform → Clients → seu aplicativo → Authorized redirect URIs**

Para a Microsoft, as URLs seguem o mesmo padrão (`/email-oauth/microsoft/callback` e `/calendar-sync-oauth/microsoft/callback`).

***

## Problemas comuns

### Erro de URI de redirecionamento

Se aparecer um erro relacionado a:

```
redirect_uri_mismatch
```

verifique se **as duas URLs** (E-mail **e** Agenda) estão cadastradas no Google exatamente como o sistema exibe:

* `https`
* domínio correto da sua instalação
* `/email-oauth/google/callback` (e-mail) e `/calendar-sync-oauth/google/callback` (Agenda)
* ausência de espaços
* ausência de `/` adicional no final

> 💡 Um erro muito comum: a conexão de **e-mail funciona**, mas a da **Agenda dá erro** — normalmente é porque a URL da Agenda (`/calendar-sync-oauth/google/callback`) não foi cadastrada no Google.

***

### Client ID ou Client Secret inválido

Volte em:

**Painel SaaS → Integrações → Login com Google/Microsoft (OAuth)**

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

### A Agenda não conecta

* **Botão não aparece:** o OAuth do Google/Microsoft precisa estar **habilitado e ativado** no Painel SaaS (chave **Google** ou **Microsoft** ligada). Para profissionais, a seção também só aparece quando o profissional está **vinculado a um usuário do sistema**.
* **Dá erro ao conectar:** verifique se a **Google Calendar API** está **ativada** no mesmo projeto do Google Cloud (passo 3.2) e se a URL de retorno da Agenda (`/calendar-sync-oauth/google/callback`) está cadastrada.
* **Janela de login não abre:** o navegador pode estar bloqueando pop-ups — libere-os para o site do sistema e tente de novo.

***

## Configuração para Microsoft

A configuração do Microsoft OAuth também está disponível na mesma tela:

**Painel SaaS → Integrações → Login com Google/Microsoft (OAuth)**

Para Microsoft, utilize o Azure Portal e cadastre as URLs de retorno:

```
https://SEU-DOMINIO/email-oauth/microsoft/callback
https://SEU-DOMINIO/calendar-sync-oauth/microsoft/callback
```

A configuração do Google e Microsoft é independente.

***

## Resumo

Para configurar o Google (e-mail + Agenda):

1. Acesse **Painel SaaS → Integrações → Login com Google/Microsoft (OAuth)**.
2. Abra o **Google Cloud Console**.
3. Crie um projeto.
4. Ative a **Gmail API** **e a Google Calendar API**.
5. Configure a tela de consentimento OAuth.
6. Crie um cliente OAuth do tipo **Web application**.
7. Cadastre as **duas** URLs de retorno (E-mail e Agenda).
8. Copie o **Client ID**.
9. Copie o **Client Secret**.
10. Volte ao sistema.
11. Acesse **Painel SaaS → Integrações → Login com Google/Microsoft (OAuth)**.
12. Ative a chave **Google** e cole o **Client ID** e **Client Secret**.
13. Clique em **Salvar**.
14. Teste o **e-mail** com **Entrar com Google** e a **Agenda** com **Conectar Google Calendar**.

> **Esta configuração é única para a plataforma.** Depois de configurada, não é necessário criar um novo aplicativo OAuth para cada empresa — e o mesmo aplicativo atende o e-mail e a Agenda.
