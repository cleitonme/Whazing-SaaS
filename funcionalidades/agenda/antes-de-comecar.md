# Antes de começar

A Agenda só funciona bem quando os **cadastros-base** estão prontos. Esta página mostra **o que precisa existir antes** dos primeiros agendamentos e a **ordem recomendada** de configuração — uma configuração depende da outra, então seguir a ordem evita travar no meio do caminho.

> 💡 Você não precisa configurar tudo de uma vez: monte o básico (calendário, serviços e profissionais), teste um agendamento pela tela principal e só depois ative os recursos extras (lembretes, Google Agenda, link público, chatbot etc.).

## ✅ O que precisa estar configurado

| Item | Obrigatório? | Para que serve |
| --- | --- | --- |
| **Calendário** | ✅ Sim | É a "agenda" em si, onde os horários são guardados |
| **Serviços** | ✅ Sim | Define o que pode ser agendado e a duração de cada item |
| **Profissionais** | ✅ Sim | Define quem realiza os atendimentos |
| **Horários de disponibilidade** | ✅ Sim | Sem isso, nenhum dia/hora ficará disponível para agendamento |
| **Vínculo profissional ↔ calendário** | ✅ Sim | O profissional só atende nos calendários a que estiver vinculado |
| **Vínculo profissional ↔ serviços** | 🔶 Opcional | Restringe quais serviços cada profissional pode fazer |
| **Membros com acesso ao calendário** | 🔶 Opcional | Libera usuários comuns (que não são admin/supervisor) para usar a agenda |
| **Lembretes por WhatsApp** | 🔶 Opcional | Avisa o cliente antes do atendimento e permite confirmar/cancelar |
| **Google Agenda / Outlook** | 🔶 Opcional | Bloqueia compromissos pessoais dos profissionais e espelha agendamentos |
| **Link público / Embed** | 🔶 Opcional | Cliente agenda sozinho pelo WhatsApp ou pelo seu site |
| **Chatbot (ChatFlow)** | 🔶 Opcional | O bot agenda e cancela pelo WhatsApp |
| **Recepção Inteligente** | 🔶 Opcional | A IA agenda e cancela durante a conversa |
| **Aba Agenda no Atendimento** | 🔶 Opcional* | Atendentes agendam pela tela de conversa |

\\* Funciona automaticamente para admin/supervisor; para liberar outros usuários, configure [membros do calendário](calendarios-e-permissoes.md).

***

## 🧭 Ordem recomendada de configuração

1. **Crie o calendário** — [Calendários e Permissões](calendarios-e-permissoes.md)
2. **Cadastre os serviços** — [Serviços](servicos.md)
3. **Cadastre os profissionais** — [Profissionais](profissionais.md)
4. **Vincule os serviços a cada profissional** — [Profissionais](profissionais.md#serviços-realizados-pelo-profissional)
5. **Defina os horários de disponibilidade (e as exceções)** — [Profissionais](profissionais.md#horários-de-atendimento)
6. **Vincule os profissionais ao calendário** — [Calendários e Permissões](calendarios-e-permissoes.md#vinculando-profissionais-ao-calendário)
7. **Configure quem pode usar a agenda (membros)** — [Calendários e Permissões](calendarios-e-permissoes.md#quem-tem-acesso-ao-calendário)
8. **Configure os lembretes** — [Lembretes](lembretes.md)
9. **Conecte o Google Agenda/Outlook, se quiser** — [Google Agenda](google-agenda.md)
10. **Libere o agendamento por link público, Embed, Chatbot ou Recepção Inteligente** — conforme sua necessidade

> ⚠️ **Por que essa ordem importa:**
>
> * O **serviço só pode ser vinculado a um profissional** depois de cadastrado — e apenas serviços **ativos** aparecem na lista de vínculo.
> * O **profissional só pode ser vinculado ao calendário** depois de cadastrado na aba **Profissionais**.
> * A **disponibilidade é definida por profissional** — sem ela, o sistema não tem horários para oferecer a ninguém.
> * O **link público**, o **chatbot** e a **Recepção Inteligente** só têm sentido depois que existem serviços, profissionais e horários configurados.

***

## 🗺️ Onde fica cada configuração

Todas as configurações da Agenda ficam concentradas em **um só lugar**, dentro da própria Agenda:

1. Acesse o menu **Agenda** no sistema.
2. Clique no botão de engrenagem ⚙️ no canto superior direito da tela — **"Configurações da agenda"**.
3. Nessa janela existem **4 abas**:

| Aba | O que você configura |
| --- | --- |
| **Calendários** | Criar/editar calendários, vincular profissionais, membros com acesso, lembretes e sincronização |
| **Profissionais** | Cadastro, vínculo com usuário do sistema, serviços realizados e sincronização |
| **Serviços** | Cadastro de serviços, duração e ativar/desativar |
| **Disponibilidade** | Horários de atendimento e exceções de cada profissional |

> **📸 Sugestão de print:** Janela "Configurações da agenda" mostrando as 4 abas.
