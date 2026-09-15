# Cancelamento de agendamentos

Um agendamento pode ser cancelado de várias formas — pelo **próprio cliente**, pelo **chatbot**, pela **IA**, pelo **atendente** ou pelo **painel da Agenda**. Esta página reúne **todas as formas que existem**, para você saber exatamente onde cada uma acontece e o que acontece depois.

## ⚠️ Cancelar não é o mesmo que excluir

| Ação | O que acontece |
| --- | --- |
| **Cancelar** | O agendamento **continua no calendário**, marcado como **Cancelado** (aparece riscado e esmaecido) e com o horário liberado. O histórico fica preservado |
| **Excluir** | O agendamento **some do calendário**. O sistema avisa que *"Esta ação não pode ser desfeita."* |

> 💡 Na dúvida, **cancele** — o histórico continua e dá para conferir o que houve depois.

***

## 👤 Cancelamento pelo cliente (resposta ao lembrete)

Quando o **[lembrete](lembretes.md)** está configurado com a opção **"Permitir cancelamento respondendo a mensagem"**, o cliente cancela **respondendo à mensagem do lembrete** com a **palavra-chave de cancelamento** definida pelo estabelecimento (ex.: **NÃO**).

1. O cliente recebe o lembrete no WhatsApp dentro da antecedência configurada.
2. Ele responde com a palavra-chave (ex.: "NÃO").
3. O sistema **cancela o agendamento** e envia a **mensagem de resposta ao cancelamento** configurada.
4. O horário volta a ficar **disponível** para outros clientes.

Opcionalmente, se **"Fechar o ticket automaticamente após cancelar/confirmar"** estiver ativa, o atendimento é encerrado sozinho após o cancelamento.

> ⚠️ Esta forma de cancelamento só existe **via lembrete**. O **[link público](link-publico-e-embed.md)** não oferece botão de cancelar ao cliente — para cancelar, ele precisa falar com a empresa (WhatsApp, chatbot ou IA).

***

## 🤖 Cancelamento pelo Chatbot

No **ChatFlow**, o bloco **"Gerenciar Agendamento"** (categoria **Agendamento**) permite o cliente cancelar conversando com o bot — passo a passo completo em [Agendamento pelo Chatbot](agendamento-pelo-chatbot.md#bloco-gerenciar-agendamento--como-o-cliente-cancela).

Resumindo:

1. O cliente chega ao bloco no fluxo (por um menu como "2 - Cancelar atendimento").
2. O bot **lista os agendamentos futuros** dele; se houver só um, vai direto à confirmação.
3. O bot mostra o resumo e pergunta, com botões **"Sim, cancelar"** e **"Não, manter"**.
4. Confirmado, o agendamento é cancelado e o bot responde *"Pronto! Seu agendamento foi cancelado."*
5. No fluxo, você direciona cada saída: **Cancelado**, **Mantido**, **Sem agendamento** e **Falha**.

***

## 🧠 Cancelamento pela Recepção Inteligente

Na **Recepção Inteligente**, ative a opção **"Permitir que a IA consulte e cancele agendamentos do cliente"** dentro do card **"Agendamento pela IA"** (aba **Automação**) — detalhes em [Agendamento pela Recepção Inteligente](agendamento-pela-recepcao-inteligente.md#7-cancelamento-pela-ia).

* O cliente simplesmente **pede na conversa**: *"quero cancelar minha consulta de amanhã"*.
* A IA **localiza o agendamento** do cliente e **cancela**.
* Se o cancelamento não puder ser concluído, a IA envia a **"Mensagem quando o cancelamento falhar"**.

***

## 💬 Cancelamento pela tela de Atendimento

O atendente cancela direto no **painel do cliente**, sem sair da conversa — passo a passo em [Agendamento pela tela de Atendimento](agendamento-pelo-atendimento.md):

1. Abra a aba **Agenda** no painel do cliente.
2. Clique no agendamento (nas listas **Próximos** ou **Anteriores**).
3. Na janela que abre, clique em **Cancelar**.
4. Confirme: *"Deseja realmente cancelar este agendamento?"*.

O status muda para **Cancelado** e o cliente continua na conversa, sem ninguém precisar trocar de tela.

***

## 📅 Cancelamento pelo painel da Agenda

Qualquer usuário com permissão de **Editor** (ou superior) no calendário cancela pela tela principal — passo a passo em [Como usar a Agenda](como-usar-a-agenda.md):

1. No menu **Agenda**, **clique no agendamento** no calendário.
2. Na janela, clique em **Cancelar**.
3. Confirme a ação.

O agendamento fica com status **Cancelado** (riscado no calendário). Não há botão de cancelar para itens já **Concluídos** ou **Cancelados**.

***

## 🔁 O que acontece depois do cancelamento

* **Status e visual:** o agendamento passa a **Cancelado** — vermelho e riscado no calendário.
* **Horário liberado:** o período volta a ficar **disponível** para novos agendamentos (link público, chatbot, IA e painel).
* **Lembretes:** não há mais motivo para lembrete de um agendamento cancelado.
* **Histórico:** os agendamentos cancelados continuam nas listas (ex.: aba **Anteriores/Próximos** do Atendimento) para consulta.
