# Google Agenda

A Agenda do Whazing pode conversar com o **Google Calendar** e com o **Outlook** — os calendários que muitas pessoas já usam no dia a dia. Chamamos isso de **sincronização**: fazer os dois calendários "conversarem" para que um saiba o que está acontecendo no outro.

> 💡 **Se você nunca ouviu falar em sincronização, pense assim:** em vez de digitar o mesmo compromisso em dois lugares, o sistema cuida disso. O compromisso feito num lado aparece no outro automaticamente.

> ⚠️ A sincronização precisa estar **habilitada nas configurações do sistema** (Google ou Microsoft). Se os botões de conexão não aparecerem, fale com o administrador — ele precisa configurar o OAuth da plataforma (veja o guia técnico: [Configurar OAuth do Google/Microsoft — E-mail + Agenda](../../modulo-saas/configurar-oauth-do-gmail-para-canal-email.md)).

## 🧩 As duas formas de sincronizar

Existem **dois usos diferentes**, e um profissional pode usar os dois ao mesmo tempo:

### 👤 1. Sincronização por profissional (calendário pessoal)

* Cadastra-se no **profissional** (aba **Profissionais**).
* **O que faz:** os **compromissos pessoais** que o profissional tem no Google/Outlook dele **bloqueiam horário na Agenda**. Assim, ninguém agenda sobre o dentista dele, a reunião de família ou o almoço.
* **Requisito:** o profissional precisa estar **vinculado a um usuário do sistema** (veja [Profissionais](profissionais.md#vínculo-com-usuário-do-sistema)).

### 🗓️ 2. Sincronização da agenda total (calendário)

* Cadastra-se no **calendário** da Agenda (dentro de **Configurações → Calendários**).
* **O que faz:** os **agendamentos feitos aqui são criados no calendário externo** — o compromisso aparece no Google Calendar/Outlook da conta conectada.

***

## 🔌 Como conectar

O caminho é o mesmo para os dois tipos — o que muda é **onde** você clica:

1. Para a **agenda total**: abra **Configurações da agenda** (⚙️) → aba **Calendários** → abra o calendário desejado (clique na seta).
2. Para o **profissional**: abra **Configurações da agenda** (⚙️) → aba **Profissionais** → abra o profissional desejado.
3. Pelo **Perfil** (autoatendimento): o profissional conectado pode conectar a própria agenda pelo menu **Perfil**, na mesma seção **"Sincronização com Google Calendar/Outlook"**.
4. Localize a seção **"Sincronização com Google Calendar/Outlook"**.
5. Clique em **"Conectar Google Calendar"** ou **"Conectar Outlook"** (o botão que aparece depende do que o administrador habilitou).
6. Uma **janela de login** abre pedindo a conta externa (Google ou Microsoft). Faça login e **autorize** o acesso.

Pronto! A seção passa a exibir **"Conectado como** seu@email\*\*"\*\*, indicando qual conta está vinculada.

> ⚠️ **A janela de login não abriu?** O navegador provavelmente bloqueou o pop-up. O próprio sistema avisa: _"Não consegui abrir a janela de login. Verifique se seu navegador está bloqueando pop-ups."_ Libere os pop-ups para o site do sistema e tente de novo.

***

## 🟢 Como saber se está conectado

A seção de sincronização mostra o estado direto no lugar:

* **🟢 Conectado:** aparece o ícone de check verde + **"Conectado como** conta@email\*\*"\*\* + o nome do serviço (Google Calendar ou Outlook) + botão **Desconectar**.
* **⚪ Não conectado:** aparecem os botões **Conectar Google Calendar** / **Conectar Outlook**.
* **🔴 Erro:** se houver problema na conexão (por exemplo, senha trocada ou permissão revogada), uma mensagem de erro aparece nessa mesma seção.

***

## ⚔️ O que acontece quando há conflito de horário

Na sincronização **por profissional** existe uma configuração extra: **"O que fazer quando tiver um compromisso pessoal no mesmo horário"** — ou seja, quando alguém tenta agendar na Agenda no mesmo horário de um compromisso pessoal do profissional no Google/Outlook.

| Opção                                        | O que acontece                                                                                                                              |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Bloquear o agendamento (padrão)**          | Não deixa agendar no horário conflitante                                                                                                    |
| **Permitir, mas avisar quem está agendando** | Permite o agendamento, mas mostra o aviso _"Atenção: o profissional tem um compromisso pessoal no calendário externo nesse mesmo horário."_ |
| **Ignorar e permitir sem avisar**            | Agenda normalmente, sem checar                                                                                                              |

Essa configuração fica logo abaixo da conexão, dentro do cadastro do **profissional**.

***

## 📅 E depois da sincronização?

* **Compromissos pessoais do profissional** aparecem na Agenda como eventos **listrados** chamados **"Compromisso pessoal — Nome do profissional"**. Eles bloqueiam o horário e **não podem ser editados por aqui** — só no Google/Outlook.
* **Agendamentos feitos na Agenda** (quando a sincronização da agenda total está ativa) são **criados no calendário externo** da conta conectada.
* O calendário principal passa a mostrar os dois tipos de evento juntos, cada um na sua cor.

***

## 🔴 Como desconectar

1. Abra a mesma seção **"Sincronização com Google Calendar/Outlook"** (no calendário ou no profissional).
2. Clique em **Desconectar**.
3. Confirme: _"Deseja realmente desconectar a sincronização de calendário deste profissional?"_.

A conta é desvinculada e os botões de conexão voltam a aparecer. Os agendamentos já criados **continuam** na Agenda — apenas deixa de haver a ponte com o calendário externo.
