---
icon: key-round
description: Esqueci meu e-mail de acesso e/ou minha senha — todas as formas de recuperar o acesso ao sistema
---

# 🔑 Esqueci meu usuário e/ou senha

Perdeu o acesso ao sistema? Existem **três formas de recuperar**, dependendo de quem é você e do que tem em mãos:

| Sua situação | Melhor solução |
| --- | --- |
| Sei meu e-mail e o sistema envia e-mails (o login tem o link "Esqueci a senha") | **1. Recuperar pelo e-mail** |
| Sei meu e-mail, sou o administrador/dono do servidor e não consigo receber o e-mail | **2. Senha Universal** |
| Sou o dono do servidor e tenho acesso ao servidor | **3. Redefinir pelo Banco de Dados** |
| Não sei qual é o meu usuário (e-mail) | Veja a seção **Não sei meu usuário** abaixo |

> 💡 O **usuário** do sistema é sempre o **e-mail** cadastrado. Se você não lembra a senha, mas sabe o e-mail, basta seguir uma das soluções abaixo.

***

## 1. Recuperar pelo e-mail ("Esqueci a senha")

Essa é a forma mais prática e serve para **qualquer usuário** do sistema, incluindo atendentes.

**Onde fica:** na **tela de login**, logo abaixo do campo de senha, existe o link **"Esqueci a senha"**.

> ⚠️ Esse link **só aparece quando o envio de e-mails (SMTP) está habilitado** na instalação. Se o link não aparece para você, pule para a **solução 2** (Senha Universal) ou fale com o administrador do sistema.

### Passo a passo

1. Abra a **tela de login** do sistema;
2. Clique em **"Esqueci a senha"**;
3. Vai abrir a janela **"Recuperar Senha"**. Digite o **seu e-mail de acesso** e clique em **"Enviar Email"**;
4. O sistema mostrará **"Email enviado com sucesso!"** e a janela vai ganhar campos novos;
5. Abra a sua **caixa de e-mail** e localize o código de verificação enviado pelo sistema;
6. De volta ao sistema, preencha:
   * **Código de Verificação** — o código que você recebeu por e-mail;
   * **Nova Senha** — a senha que você quer usar;
   * **Confirmar Nova Senha** — a mesma senha, de novo;
7. Clique em **"Redefinir Senha"**;
8. Se tudo estiver certo, aparecerá **"Senha redefinida com sucesso"**. Volte à tela de login e entre com o **e-mail + senha nova**.

### Regras da senha

A senha precisa seguir estas regras (o sistema mostra as mesmas ao cadastrar um usuário):

* Mínimo de **6 caracteres**;
* Pelo menos **uma letra maiúscula**;
* Pelo menos **uma letra minúscula**;
* Pelo menos **um número**.

### Mensagens que podem aparecer

| Mensagem | O que significa |
| --- | --- |
| "Email enviado com sucesso!" | O código foi enviado para o seu e-mail. Siga com os passos 5 a 8. |
| "Email não encontrado" | Esse e-mail não está cadastrado no sistema. Confira se digitou certo, ou veja a seção **Não sei meu usuário**. |
| "As senhas não correspondem" | Os campos **Nova Senha** e **Confirmar Nova Senha** estão diferentes. Digite a mesma senha nos dois. |
| "Erro ao redefinir senha" | O código está errado/expirado ou houve falha na conexão. Solicite um novo código repetindo o passo 3 e tente de novo. |

> 💡 Se o **código de verificação não chegar**, verifique a pasta de spam/lixo eletrônico do seu e-mail. Se ainda assim não chegar, é sinal de que o envio de e-mails do servidor não está funcionando — fale com o administrador (ele pode usar a **Senha Universal** para liberar seu acesso).

***

## 2. Senha Universal

**O que é:** uma senha mestre configurada no servidor pelo administrador/dono do sistema. Com ela, é possível **entrar em qualquer conta cadastrada usando o e-mail do usuário + a senha universal**, mesmo sem saber a senha antiga.

**Quando usar:** quando o link **"Esqueci a senha"** não existe (SMTP desabilitado), quando o código de verificação não chega, ou quando você é o próprio administrador e perdeu a sua senha.

### Como usar

1. Faça login **normalmente** na tela de login: digite o **e-mail do usuário** no campo de e-mail e a **senha universal** no campo de senha;
2. Pronto — você entrará na conta como se fosse o dono dela;
3. Recomendado: já **defina uma senha nova** para o usuário:
   * Entre em **Usuários**;
   * Encontre o usuário e clique em **Editar**;
   * No campo **Senha**, digite a nova senha (respeitando as regras da seção 1);
   * Salve e informe a senha nova ao usuário.

> ⚠️ A senha universal é configurada **no servidor** (arquivo de configuração da instalação), por quem administra a VPS. É uma chave muito poderosa: use uma senha longa e difícil, e jamais compartilhe com clientes ou atendentes.

> 💡 Atendentes **não** têm acesso ao servidor. Se você é atendente e não consegue recuperar pelo e-mail, **solicite ao administrador** que utilize a senha universal ou defina uma senha nova no seu cadastro.

📄 **Guia técnico completo de configuração:** [Senha Universal](../../instalacao-and-vps/ativar_senha_universal.md)

***

## 3. Redefinir pelo Banco de Dados

**O que é:** a última opção, destinada a **quem administra o servidor**. A senha de todos os usuários fica gravada (de forma criptografada) no banco de dados do sistema, e é possível gravar uma nova senha diretamente lá.

**Quando usar:** quando a senha universal não está configurada e o envio de e-mails do servidor não funciona — um cenário comum em instalações novas, onde o próprio administrador perdeu a senha inicial.

**Resumo do processo:**

1. Acessar o banco de dados da instalação (ex.: com o programa **DBeaver**);
2. Localizar a tabela de **usuários** e o registro do e-mail desejado;
3. Executar o comando que define uma **senha nova** para esse e-mail;
4. Entrar no sistema normalmente com o e-mail + senha nova.

📄 **Guia técnico completo, com os comandos prontos:** [Banco de Dados → Recuperação de Senha de Usuário](../../instalacao-and-vps/conectar-banco-de-dados.md)

***

## Não sei meu usuário (e-mail)

O login do sistema é sempre o **e-mail cadastrado**. Para descobrir qual é:

* **Se você é atendente:** pergunte ao **administrador/supervisor** da sua empresa — no cadastro de **Usuários** eles veem o e-mail de cada pessoa e podem corrigir se estiver errado;
* **Se você é o administrador:** no próprio sistema, o menu **Usuários** lista o e-mail de todos os usuários;
* **Se você é o dono do servidor e não consegue entrar:** no **Banco de Dados**, a lista de e-mails aparece na tabela de usuários (veja o guia técnico linkado acima).

> 💡 Se o seu e-mail mudou (ex.: trocou de empresa), o administrador pode **editar seu cadastro** em **Usuários** e atualizar o e-mail — você então fará login com o e-mail novo.

***

## Problemas comuns

**O link "Esqueci a senha" não aparece na tela de login.**
Ele só existe quando o **envio de e-mails (SMTP) está habilitado** na instalação. Sem isso, o sistema não consegue enviar o código de verificação. Nesse caso, use a **Senha Universal** (administrador) ou solicite ao administrador que defina uma senha nova no seu cadastro.

**Digitou um e-mail e apareceu "Email não encontrado".**
O e-mail não existe no sistema. Verifique erros de digitação (espaços, `.com` vs `.com.br`). Se você realmente não sabe qual e-mail usa, veja a seção **Não sei meu usuário**.

**O código de verificação não chega.**
Confira o **spam/lixo eletrônico**. Se não chegar, o envio de e-mails do servidor pode estar com problema — o administrador deve verificar o SMTP. Enquanto isso, ele pode liberar seu acesso com a **Senha Universal**.

**"Erro ao redefinir senha" ao tentar salvar.**
O código de verificação pode ter sido digitado errado ou ter expirado. Clique em **"Enviar Email"** novamente para gerar um código novo e refazer os campos.

**A senha nova foi recusada.**
Ela precisa ter **6 ou mais caracteres, uma letra maiúscula, uma letra minúscula e um número**. Exemplo válido: `Vendas2026`.

**Sou atendente e não tenho acesso a nada disso.**
A recuperação técnica é responsabilidade do **administrador**. Solicite a ele: usar a senha universal ou simplesmente **editar seu usuário em Usuários e digitar uma senha nova** — leva menos de um minuto e você já volta a acessar.

***

## 👣 Depois de recuperar o acesso

1. Faça login com o **e-mail + senha nova**;
2. Se o campo **"Login automático"** estiver marcado, o navegador guardará suas credenciais — evite usá-lo em computadores compartilhados;
3. Perdeu o acesso novamente no futuro? Esta página é o caminho: **[Acesso e Licença](README.md)**.
