# 📊 Relatórios da Agenda

A Agenda tem **4 relatórios próprios** que transformam os agendamentos em informação: quem compareceu, quanto tempo foi agendado, quais serviços são mais procurados e onde estão as faltas e esperas longas.

**Para acessar:**

1. Acesse o menu **Relatórios** do sistema.
2. Na seção **Agenda**, escolha um dos relatórios abaixo.

> 💡 O relatório **Agenda do Dia** tem um atalho extra: o botão da impressora 🖨️ dentro da própria tela de [Recepção](recepcao.md).

---

## 🖨️ 1. Agenda do Dia

### O que é
A lista dos **agendamentos de um dia**, com a situação de cada cliente na recepção, pronta para **imprimir**.

### Para que serve
Deixar na recepção (ou no profissional) uma **folha do dia**: quem chega, em que horário, com quem e em que situação está. Também funciona como lista de conferência manual.

### Como usar
1. Abra o relatório **Agenda do Dia** (ou clique na impressora dentro da Recepção).
2. Escolha a **data** (o botão **Hoje** volta rápido para o dia atual).
3. Filtre, se quiser, por **calendário**, **profissional** e **serviço**.
4. Use a **busca** por cliente ou telefone para achar alguém rápido.
5. Clique em **imprimir** para gerar a folha do dia.

### O que aparece em cada linha
* **Hora** — horário do atendimento;
* **Cliente** e **telefone**;
* **Profissional** e **serviço**;
* **Situação na recepção** — chegada, início do atendimento, fim do atendimento e observações, quando registrados;
* **Status** do agendamento (Agendado, Confirmado, Concluído, Cancelado).

No topo, **indicadores do dia**: **Total**, **Chegaram**, **Aguardando**, **Finalizados**, **Não compareceram** e a taxa de **Comparecimento**.

**📸 Sugestão de print:** relatório Agenda do Dia com os indicadores do topo.

---

## 📅 2. Agendamentos

### O que é
A **lista completa de agendamentos por período**, com filtros e **exportação para Excel**.

### Para que serve
Consultar o histórico: "quais agendamentos tivemos em setembro?", "quanto o cliente X agendou?", "quais foram cancelados?". É o relatório para conferências e para jogar no Excel e trabalhar por fora.

### Como usar
1. Abra o relatório **Agendamentos**.
2. Escolha o **período** (data inicial e final).
3. Refine pelos filtros: **calendário**, **profissional**, **serviço** e **status**.
4. Veja a lista na tela ou clique em **Excel** para baixar a planilha.

### O que aparece
Cada linha é um agendamento, com **data e horário, cliente, telefone, profissional, serviço, duração e status** — os mesmos campos que você configurou na Agenda.

> 💡 **Interpretando:** status **Cancelado** em volume alto pode indicar problema de agenda, confirmação fraca ou lembretes desligados — vale revisar os [Lembretes](lembretes.md).

---

## 👤 3. Agenda por profissional e serviço

### O que é
O relatório de **produtividade**: quantos agendamentos, em quais status e **quanto tempo foi agendado** para cada **profissional** e para cada **serviço**.

### Para que serve
Responder perguntas de gestão: quem atende mais? qual serviço ocupa mais a agenda? quanto tempo de agenda cada profissional consumiu no período?

### Como usar
1. Abra o relatório **Agenda por profissional e serviço**.
2. Escolha o **período** e filtre por **calendário**, **profissional** e **serviço**.
3. Compare os resumos:
   * **Por profissional** — quantidade de agendamentos, **status** de cada um (agendados, concluídos, cancelados etc.) e o **Tempo agendado**;
   * **Por serviço** — os **Serviços mais agendados** e o tempo que cada um consumiu.

### Como interpretar
* **Tempo agendado alto + poucos concluídos** pode indicar muitos cancelamentos ou faltas;
* Profissional com agenda cheia e fila de espera é candidato a mais horários disponíveis;
* Serviços pouco agendados podem precisar de divulgação (ou não valem o espaço que ocupam).

**📸 Sugestão de print:** resumo "Por profissional" com tempo agendado.

---

## 📈 4. Estatísticas da Agenda

### O que é
O raio-x do comportamento da agenda no período: **comparecimento, faltas, tempos de espera** e a **distribuição dos agendamentos por dia e por hora**.

### Para que serve
Descobrir os **melhores e piores horários**, medir se os clientes estão aparecendo e onde sobra ou falta agenda.

### Como usar
1. Abra o relatório **Estatísticas da Agenda**.
2. Escolha o **período** e filtre por **calendário**, **profissional** e **serviço**.
3. Analise os painéis:
   * **Indicadores de comparecimento** — quantos chegaram e quantos **não compareceram**;
   * **Espera média** e **Atendimento médio** — tempo médio que o cliente esperou e quanto durou o atendimento;
   * **Agendamentos por dia** — os dias da semana mais cheios;
   * **Agendamentos por horário** — os horários mais disputados;
   * **Serviços mais agendados** e **Profissionais** mais procurados.

### Como interpretar
* **Faltas altas em determinado horário?** Considere lembretes automáticos ou confirmação prévia;
* **Espera média acima de 15–20 minutos?** A agenda do dia está apertada — dê mais respiro entre horários;
* **Horários vazios recorrentes?** São as melhores janelas para promoções ou remanejamento de equipe.

**📸 Sugestão de print:** gráficos "Agendamentos por dia" e "Agendamentos por horário".

---

## 👥 Quem pode usar

Os relatórios da Agenda aparecem para quem tem acesso ao módulo **Relatórios** e ao módulo **Agenda** (recurso vendido como adicional). Na prática, **administradores e supervisores** enxergam a visão completa; o dia a dia de conferir "quem chegou" fica na tela de [Recepção](recepcao.md), que não exige relatório.

---

## ❓ Problemas comuns

**"O relatório aparece vazio."**
Confira o **período** selecionado e os filtros (calendário/profissional/serviço). O sistema avisa: _"Nenhum dado encontrado para os filtros selecionados."_

**"Não achei o relatório da Agenda."**
Ele fica na seção **Agenda** dentro do menu **Relatórios** — veja a página [Relatórios](../relatorios/README.md) para entender a organização da tela.

**"Preciso enviar os dados para a contabilidade/gerência."**
Use a exportação **Excel** no relatório **Agendamentos**.

---

> 📄 Veja também: [Recepção](recepcao.md) · [Como usar a Agenda](como-usar-a-agenda.md) · [Relatórios (visão geral)](../relatorios/README.md)
