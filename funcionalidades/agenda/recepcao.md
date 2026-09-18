# 🏥 Módulo Recepção

O **Recepção** é uma tela da Agenda feita para acompanhar **os agendamentos do dia em tempo real** e movimentar cada cliente conforme a situação: se **já chegou**, se está **aguardando** ou se **já foi atendido**.

> 💡 **Pense assim:** imagine que existem 10 clientes agendados para hoje. Pela tela de Recepção a equipe da recepção vê, de relance, quem já chegou, quem está esperando há quanto tempo e quem já terminou o atendimento — sem precisar perguntar nada a ninguém.

---

## 📍 Onde encontrar

1. Acesse o menu **Agenda**.
2. No topo da tela, clique no botão **Recepção** (ao lado dos outros botões da barra superior).
3. A tela abre mostrando os agendamentos **do dia atual**.

> 💡 Do Recepção também dá para voltar ao calendário a qualquer momento: use o botão **Calendário** no topo.

**📸 Sugestão de print:** tela do módulo Recepção mostrando o quadro com as colunas de situação.

---

## 🖥️ O que aparece na tela

A tela é organizada como um **quadro com colunas**. Cada coluna é uma **situação** do cliente no dia:

| Coluna             | O que significa                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| **Agendados**      | Clientes com horário marcado que ainda **não chegaram**                                            |
| **Aguardando**     | Clientes que **já chegaram** e estão esperando a vez                                                |
| **Em atendimento** | Clientes que estão **sendo atendidos agora**                                                        |
| **Concluído**      | Atendimentos que **já terminaram**                                                                  |
| **Cancelado**      | Agendamentos cancelados do dia                                                                      |

> 💡 A coluna **Agendados** e a **Cancelado** são a base do fluxo e sempre existem. As colunas do meio podem ser **renomeadas, coloridas e até ampliadas** pela empresa — veja [Personalizando as colunas](#-personalizando-as-colunas) mais abaixo.

Cada **cartão** (quadradinho) representa um agendamento e mostra:

* **Horário** do atendimento (ex.: 14:00—14:30);
* **Nome do cliente** (ou "Sem cliente vinculado");
* **Serviço** e **profissional**;
* Etiqueta colorida com o **status** (Agendado, Confirmado, Concluído, Cancelado);
* Ícones de **telefone** e **observação** (passe o mouse para ver);
* **Avisos de tempo**, que ajudam a recepção a agir:
  * ⚠️ **"Atrasado X min"** — o horário do agendamento já passou e o cliente não chegou;
  * ⏳ **"Aguardando há X min"** — quanto tempo o cliente está esperando (fica destacado a partir de 20 minutos);
  * 🩺 **"Em atendimento há X min"** — há quanto tempo o atendimento começou;
  * ✅ **"Finalizado às HH:MM"** e 📣 **"Chamado às HH:MM"** — registro do que já aconteceu.

**📸 Sugestão de print:** cartão da Recepção com o aviso "Aguardando há X min" em destaque.

---

## 🔁 Como movimentar um cliente (as etapas do dia)

O dia de um cliente flui assim:

**Agendados → Aguardando (chegou) → Em atendimento → Concluído**

Você pode avançar cada etapa de **duas formas**:

### Jeito 1 — Botão de ação rápida no cartão

Cada cartão mostra um botão com **a próxima ação da fila**:

| O cliente está em... | O botão mostra...          | O que acontece ao clicar                     |
| -------------------- | -------------------------- | -------------------------------------------- |
| **Agendados**        | **Cliente chegou**         | O cartão vai para a coluna **Aguardando**    |
| **Aguardando**       | **Iniciar atendimento**    | O cartão vai para **Em atendimento**         |
| **Em atendimento**   | **Finalizar**              | O cartão vai para **Concluído**              |

### Jeito 2 — Arrastando o cartão

Arraste o cartão de uma coluna para outra. Ao soltar, a situação é atualizada.

### Jeito 3 — Menu do cartão

Clique nos **três pontinhos** do cartão e escolha **Alterar status** → a situação desejada. Nesse mesmo menu há também **Ver / editar**, que abre o agendamento completo.

> ⚠️ **Regras do quadro:**
> * Um agendamento **cancelado não muda de etapa** — o sistema avisa: _"Este agendamento está cancelado e não pode mudar de etapa."_
> * Se você arrastar um cartão para **Cancelado**, o sistema pede confirmação antes de cancelar o agendamento.
> * Para movimentar um agendamento é preciso ter **permissão de edição naquele calendário**. Sem permissão, aparece: _"Você não tem permissão para alterar este agendamento."_

**📸 Sugestão de print:** sequência dos botões "Cliente chegou" → "Iniciar atendimento" → "Finalizar".

---

## 📣 Chamar próximo

O botão **Chamar próximo** (no topo da tela) serve para a recepção **chamar o próximo cliente da fila** quando um profissional fica livre.

1. Clique em **Chamar próximo**.
2. O sistema mostra **quem está aguardando**, com o horário agendado e se está **além do horário** (ex.: "15 min além do horário agendado").
3. Clique em **Chamar cliente** para confirmar.
4. O sistema registra a chamada: o cartão do cliente ganha o aviso 📣 **"Chamado às HH:MM"** e fica **destacado por alguns segundos**.
5. Quando o cliente chegar até o profissional, clique em **Iniciar atendimento** no cartão dele para avançar a etapa.

> 💡 O sistema também avisa se **todos os profissionais estão ocupados** no momento ("Todos os profissionais estão em atendimento no momento.") e permite **chamar mesmo assim** quando necessário. E, se um cliente já foi chamado mas ainda está aguardando, o cartão mostra o botão **Chamar novamente**.

---

## 🔍 Busca e filtros

No topo da tela você pode refinar o que aparece:

* **Data** — por padrão mostra hoje, mas dá para consultar outro dia (com o botão **Hoje** para voltar);
* **Calendário** — mostra só um calendário (agenda) ou todos;
* **Profissional** e **Serviço** — filtram os cartões;
* **Buscar** — campo para procurar por **cliente, telefone, serviço ou profissional**;
* **Atualizar** 🔄 — recarrega os dados na hora (útil para ver novidades sem esperar a atualização automática).

No **celular**, o quadro vira **abas** (Agendados, Aguardando, etc.) para navegar situação por situação.

---

## 📊 Indicadores do dia

A tela mostra **números do dia** para a recepção acompanhar o movimento:

* **Agendamentos hoje** — quantos horários estão marcados;
* **Comparecimento** — a porcentagem de clientes que chegaram;
* **Tempo médio de espera** — quanto tempo os clientes estão esperando em média;
* **Tempo médio de atendimento** — a duração média dos atendimentos.

---

## 🎨 Personalizando as colunas

Quem tem permissão pode **ajustar as colunas à realidade da empresa** clicando no ícone de colunas 🗂️ no topo da tela:

* **Renomear** uma coluna (ex.: trocar "Aguardando" por "Na sala de espera");
* **Mudar a cor** de cada coluna;
* **Desativar** uma coluna que não usa;
* **Criar novas etapas** extras (ex.: "Em preparação", "Pagamento").

> ⚠️ As colunas **Agendados** e **Cancelado** não podem ser desativadas nem excluídas — são a base do fluxo. Se uma coluna criada pela empresa for excluída, os agendamentos que estavam nela **voltam para "Agendados"**.

**📸 Sugestão de print:** janela "Colunas da Recepção".

---

## 🖨️ Imprimindo a agenda do dia

No topo da tela há o botão da **impressora** 🖨️, que abre o relatório **"Agenda do dia (imprimir)"**: uma lista do dia com horário, cliente, profissional e a situação na recepção, pronta para imprimir ou salvar em PDF. Veja detalhes em [Relatórios da Agenda](relatorios-da-agenda.md).

---

## 👥 Permissões: quem pode o quê

| Ação                                       | Quem pode                                                     |
| ------------------------------------------ | ------------------------------------------------------------- |
| **Ver a Recepção**                         | Quem tem acesso ao módulo Agenda (recurso vendido como adicional do plano) |
| **Movimentar clientes e chamar próximo**   | Usuários com papel **Editor** ou **Admin** no calendário       |
| **Personalizar colunas**                   | **Administrador**, **Supervisor** ou admin de pelo menos um calendário |

> 💡 Papéis do calendário (Visualizador, Editor, Admin) são explicados em [Calendários e Permissões](calendarios-e-permissoes.md).

---

## ✅ Para que serve na prática

* **Recepção organizada:** saber quem já chegou sem perguntar um por um;
* **Fila visível:** ver quem está esperando há quanto tempo e chamar a próxima pessoa no momento certo;
* **Atendimento com histórico:** o registro das etapas e dos horários fica salvo e alimenta os indicadores e relatórios;
* **Menos fila desorganizada:** o botão **Chamar próximo** indica exatamente quem é a vez.

---

## ❓ Problemas comuns

**"O botão Chamar próximo não aparece."**
Ele aparece apenas para quem pode **editar** pelo menos um calendário. Quem só tem acesso de visualização não o vê.

**"Não consigo arrastar o cartão para outra coluna."**
Confira se você tem papel **Editor** ou **Admin** no calendário do agendamento. Também não é possível mover um agendamento **cancelado**.

**"Movimentei o cliente por engano."**
Basta arrastar o cartão de volta para a coluna anterior — o sistema atualiza o registro e os horários (chegada, início, fim) da etapa correspondente.

**"A tela não mostra o dia que quero."**
Use o seletor de **Data** no topo. Por padrão a tela abre no dia atual.

---

> 📄 Veja também: [Como usar a Agenda](como-usar-a-agenda.md) · [Calendários e Permissões](calendarios-e-permissoes.md) · [Relatórios da Agenda](relatorios-da-agenda.md)
