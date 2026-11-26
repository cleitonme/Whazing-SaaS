---
description: >-
  Como definir a política de verificação em duas etapas, liberar os métodos,
  configurar o e-mail do código e recuperar o acesso de um cliente.
---

# 🔐 Verificação em Duas Etapas

> 🆕 **Recurso novo:** esta tela passou a existir nesta versão.

> **Em palavras simples:** com a verificação em duas etapas, **a senha sozinha não entra mais**. Depois de digitar a senha, o usuário precisa informar um **código extra**, gerado por um aplicativo no celular ou enviado por e-mail. Assim, se alguém descobrir a senha, ainda falta o código.

> 👤 **Quem usa esta tela:** o **administrador do SaaS**, que define a regra **para todas as empresas**. Cada empresa **não** altera este nível.

***

## 📍 Onde fica

```text
Painel SaaS → Segurança → Verificação em duas etapas
```

A tela tem **três blocos**:

1. **Política da verificação em duas etapas** — o nível de exigência e os métodos liberados;
2. **E-mail do código de verificação** — o servidor de e-mail usado para enviar o código;
3. **Recuperar o acesso de um cliente** — o roteiro para quando alguém perde o celular.

> ℹ️ **As alterações são gravadas na hora.** Não existe botão "Salvar": ao mudar uma opção, aparece o aviso **"Configuração alterada"**. Se a gravação falhar, a chave **volta sozinha** para o estado anterior, para a tela não mostrar algo que não foi salvo.

***

## 🎚️ Política: o padrão para as empresas

A opção **"Padrão para as empresas"** tem três níveis:

| Nível | O que acontece |
| --- | --- |
| **Desligado** | Ninguém é incentivado nem obrigado. Quem quiser ativa no próprio perfil |
| **Sugerir aos usuários** | Mostra um **aviso dispensável** no sistema, sem bloquear ninguém |
| **Obrigatório para todos** | No **próximo login**, o usuário configura a verificação **antes** de usar o sistema |

> 💡 **Sugestão:** comece com **"Sugerir aos usuários"** e passe para **"Obrigatório"** quando a equipe já estiver acostumada. O modo sugerido mostra um aviso com contagem regressiva — o usuário pode ativar na hora ou continuar depois de alguns segundos.

***

## 🧩 Métodos liberados

Você escolhe **quais métodos** os usuários podem usar:

| Método | Como funciona | Observação |
| --- | --- | --- |
| **Permitir aplicativo autenticador** | Google Authenticator e similares, no celular | Funciona **sem internet** no celular no momento do código |
| **Permitir código por e-mail** | O sistema envia um código de 6 dígitos para o e-mail do usuário | Mais simples para usuário leigo, porém **depende do e-mail funcionar** |

### Atenção: nenhum método liberado

Se você desligar **os dois** métodos, aparece um aviso vermelho:

> **"Nenhum método está liberado, então a verificação em duas etapas fica desligada. Libere pelo menos um."**

Ou seja: a política **não funciona** sem pelo menos um método. Mantenha ao menos o **aplicativo autenticador** liberado.

***

## 📧 E-mail do código de verificação

Este bloco só importa para quem usa o método **código por e-mail**.

### Usar o mesmo e-mail da recuperação de senha

* **Recomendado** e vem ligado;
* aproveita o servidor **já configurado** no módulo de recuperação de senha;
* quando ligado, os campos abaixo **ficam escondidos**.

### Servidor dedicado (quando a opção acima está desligada)

Ao desligar a opção de reaproveitar, aparecem os campos:

| Campo | Para que serve |
| --- | --- |
| **Servidor SMTP** | Endereço do servidor de saída, informado pelo seu provedor de e-mail (ex.: `smtp.seuprovedor.com`) |
| **Porta** | **587** para TLS (mais comum) ou **465** para SSL |
| **Usuário** | Usuário de autenticação do servidor |
| **Senha** | Senha do usuário. Em Gmail e Outlook com duas etapas, use uma **senha de aplicativo** |
| **E-mail remetente** | Endereço que aparece como remetente. Em branco, usa o usuário acima |
| **Usar SSL** | Ligue **apenas** para a porta 465. Para 587, deixe desligado |

### Botão — Testar envio de e-mail

Envia um e-mail de teste para confirmar que o servidor está funcionando. **Faça o teste antes de obrigar todo mundo a usar o código por e-mail** — se o envio falhar, ninguém consegue entrar.

***

## 🆘 Recuperar o acesso de um cliente

Quando um usuário perde o celular — e também os códigos de backup — ele fica sem conseguir entrar. O roteiro que a tela mostra é:

1. **Confirme com quem está pedindo** que a pessoa é mesmo quem diz ser (ligue para o contato cadastrado);
2. **Pergunte se ela ainda tem os códigos de backup** — eles resolvem sozinhos;
3. **Sem os códigos**, abra a empresa em **Empresas**, veja a lista de usuários e **desative a verificação daquele usuário**.

O botão **Ir para Empresas** leva direto para a lista de empresas.

### Como desativar na prática

Na lista de usuários da empresa (o botão de usuários na tela da empresa):

* a coluna de verificação mostra **Ativa** (verde) ou **Inativa** (cinza). Passando o mouse em "Ativa", você vê se o método é **aplicativo** ou **e-mail**;
* no usuário com verificação ativa, existe um botão com ícone de **escudo cortado** — **"Desativar a verificação em duas etapas deste usuário"**;
* é preciso confirmar a ação.

> 📝 **Auditoria:** toda desativação feita assim fica registrada em **Segurança → Logs de tentativas**, com o usuário afetado e quem executou.

> ⚠️ Depois de desativar, o usuário **reconfigura no próximo login** — o que é bom: ele volta a ter proteção, agora com o celular novo.

***

## 🪜 Passo a passo recomendado

1. Abra **Painel SaaS → Segurança → Verificação em duas etapas**.
2. Deixe **"Permitir aplicativo autenticador"** ligado (e o e-mail também, se quiser dar opção).
3. Escolha a política: **Sugerir aos usuários**.
4. Se for usar código por e-mail, confirme **"Usar o mesmo e-mail da recuperação de senha"** e clique em **Testar envio de e-mail**.
5. Avise a equipe e, depois de um tempo, mude para **Obrigatório para todos**.
6. Teste com uma conta de teste: sair e entrar novamente.

> ✅ Deu certo quando o usuário de teste é convidado a configurar a verificação (ou é obrigado a configurar) no login seguinte.

***

## 💾 O que acontece ao mudar a política

* Vale **para todas as empresas** — as empresas não alteram este nível;
* em **Obrigatório**, o usuário é levado a configurar **no próximo login**, antes de usar o sistema;
* em **Sugerir**, aparece um aviso dispensável (com contagem regressiva) — **ninguém é bloqueado**;
* usuários que já ativaram **continuam ativados** mesmo se você mudar o nível;
* desligar um **método** impede **novas** ativações por ele; usuários que já usam aquele método **devem ser conferidos** caso a caso.

### Códigos de backup

Quem ativa a verificação recebe uma lista de **códigos de backup** para usar quando perder o celular. A tela de perfil do usuário mostra **quantos códigos ainda restam** e permite **gerar uma nova lista** — o que **invalida os códigos antigos**.

***

## 🆘 Problemas comuns

### O usuário não recebe o código por e-mail

1. Confirme que **"Permitir código por e-mail"** está ligado;
2. clique em **Testar envio de e-mail**;
3. se o teste falhar, o problema está no SMTP (servidor, porta, senha ou SSL);
4. em Gmail/Outlook com duas etapas, use **senha de aplicativo**.

### A tela aceita mas o login não pede o código

* Confira a **política**: em "Desligado", ninguém é obrigado;
* o usuário pode ter ativado no próprio perfil — nesse caso o código é pedido;
* em "Sugerir", o aviso pode ter sido dispensado.

### Preciso liberar um usuário específico sem desligar a política

Não há exceção por usuário nesta tela. A alternativa documentada é **desativar a verificação daquele usuário** na lista de usuários da empresa.

### O usuário trocou de celular e perdeu os códigos

Siga o roteiro de **Recuperar o acesso de um cliente** acima. A ação fica registrada nos logs.

***

## ❓ Perguntas frequentes

#### A empresa pode mudar a política?

Não. **Só o administrador do SaaS** define este nível, e ele vale para todas as empresas.

#### Posso usar só o e-mail, sem aplicativo?

Sim, desde que o método **código por e-mail** esteja liberado e o SMTP funcione. Lembre que isso depende do e-mail chegar.

#### O que acontece se eu desligar todos os métodos?

A verificação em duas etapas **fica desligada**, e a tela avisa em vermelho.

#### Quem já ativou perde a proteção se eu mudar a política?

Não. Mudar o nível **não desativa** quem já configurou.

#### Existe limite de tentativas do código?

A tela de login trata excesso de tentativas, mas **quantidade e tempo de bloqueio não são configuráveis aqui** e não foi possível confirmar os valores.

***

## ❔ O que não é possível confirmar

* Os **valores exatos** de validade do código, tentativas e bloqueios (não aparecem nesta tela);
* se a **validade dos códigos de backup** é limitada;
* se os aplicativos autenticadores aceitos têm alguma **restrição de fabricante** — a tela cita "Google Authenticator e similares";
* se existe **relatório** de quantos usuários já ativaram a verificação.

***

## 📚 Veja também

* [🔐 Segurança](README.md)
* [Logs de tentativas de acesso](logs-de-tentativas.md)
* [Exigir troca de senha no próximo login](../exigir-troca-de-senha.md)
* [Guia Simples para Configurar o Gmail](../configurar-gmail.md)
* [Alertas de segurança](alertas-de-seguranca.md)
