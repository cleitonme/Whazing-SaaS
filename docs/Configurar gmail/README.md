# Guia Simples para Configurar o Gmail e Lembrar a Senha no Whazing

Este guia explica de forma simples como configurar o envio de e-mails pelo Gmail usando o Whazing. Siga o passo a passo abaixo para evitar erros.

## 1. Criando uma Senha de App no Gmail
Para utilizar seu e-mail do Gmail em aplicativos de terceiros, como o Whazing, você precisa gerar uma "Senha de App".

### Como obter a Senha de App:
1. Acesse o link abaixo:
   [Criar senha de app no Google](https://support.google.com/accounts/answer/185833?hl=pt-BR)
2. Faça login na sua conta do Google.
3. Selecione a opção **"Senhas de App"**.
4. Escolha **"E-mail"** como aplicativo e **"Outro"** para nomear a senha (ex: "Whazing").
5. Clique em **Gerar** e anote a senha fornecida (será usada na configuração do Whazing).

## 2. Configuração no Whazing
Agora que você tem a senha de app, siga os passos para configurar o SMTP no Whazing.

### Configurações SMTP
- **Servidor SMTP:** `smtp.gmail.com`
- **Usuário SMTP:** `seuemail@gmail.com`  *(Substitua pelo seu e-mail do Gmail)*
- **Senha SMTP:** *(Senha de app gerada no passo anterior)*
- **From (Remetente):** `Recuperar Senha <seuemail@gmail.com>`
- **Porta SMTP:** `465`
- **Habilitar SSL/TLS:** ✅ Ativado

>![print](email.png)

## 3. Conferindo as Configurações
Após preencher todas as informações no Whazing:
1. Salve as configurações.
2. Faça um teste de envio de e-mail para verificar se está funcionando corretamente.

Caso tenha problemas, confira:
- Se a senha de app foi gerada corretamente.
- Se o e-mail e senha foram digitados sem erros.
- Se a opção "Acesso a apps menos seguros" está ativada na sua conta Google (caso necessário).

Pronto! Agora seu Whazing está configurado para enviar e-mails pelo Gmail. 🚀