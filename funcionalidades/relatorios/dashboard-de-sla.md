---
icon: timer
---

# Dashboard de SLA

O **Dashboard de SLA** ajuda você a acompanhar **os tempos do seu atendimento**: quanto tempo a equipe leva para dar a **primeira resposta** e quanto tempo leva para **resolver** cada atendimento — e se esses tempos estão **dentro das metas** que você definiu.

> 💡 **O que é SLA?** É a sigla (em inglês) para o **acordo de nível de serviço**: uma **promessa de prazo**. Ex.: "todo atendimento recebe a primeira resposta em até 5 minutos" e "todo atendimento é resolvido em até 2 horas". O dashboard mostra se a equipe está cumprindo essa promessa — sem precisar de nada técnico para entender.

## 📍 Onde encontrar

São dois lugares que trabalham juntos:

1. **Metas:** menu **Configurações → Configurações** → seção **"Metas de SLA"** — é onde você define os prazos.
2. **Acompanhamento:** menu **Relatórios** → seção **Atendimento** → **"Dashboard de SLA"** — é onde você vê os resultados.

***

## 🎯 Metas de atendimento (como configurar)

Na seção **"Metas de SLA"**, clique em **"Nova regra"** e preencha:

| Campo | O que é |
| --- | --- |
| **Aplicar a** | Para quem vale a regra: **"Toda a empresa"**, **"Uma fila"** ou **"Um canal"**. Ao escolher fila ou canal, aparece a lista para selecionar |
| **Primeira resposta** | Prazo máximo (em **minutos**) para alguém responder o cliente pela primeira vez |
| **Resolução** | Prazo máximo (em **minutos**) para **resolver** o atendimento |
| **Alerta** | Percentual do prazo a partir do qual o atendimento entra **"Em alerta"** (ex.: `80` = quando o atendimento já consumiu 80% do prazo e continua aberto) |
| **Contar apenas o horário comercial** | Ligado: o prazo **só corre no expediente e feriados já configurados** no sistema (a noite e o fim de semana não contam). Desligado: o prazo corre em tempo real, 24 horas por dia |
| **Ativa** | Liga/desliga a regra |

1. Acesse **Configurações → Configurações → Metas de SLA**.
2. Clique em **"Nova regra"**.
3. Escolha **a quem vale**, defina os **prazos** e o **alerta**, e decida se conta **só o horário comercial**.
4. Clique em **Salvar** (a tela confirma: **"Meta salva"**).

### Como várias regras se combinam

Você pode criar quantas regras quiser. Quando mais de uma serve para o mesmo atendimento, **a mais específica prevalece**: primeiro a regra da **fila**, depois a do **canal**, e por fim a geral da **empresa**.

> ⚠️ **Atenção:** atendimentos abertos **antes** do cadastro de uma regra **não recebem prazo** — as metas valem para os atendimentos que abrirem a partir daí. No relatório, esses aparecem como **"Sem meta definida"** (fora dos percentuais, sem contar como atraso).

**Sugestão de print:** modal **"Nova regra"** de Metas de SLA com todos os campos visíveis.

**Onde colocar:** logo após a tabela de campos.

**Objetivo:** mostrar visualmente onde o usuário configura cada prazo — a dúvida mais comum é onde as metas são definidas.

***

## 📊 O relatório: como acompanhar

Abra **Relatórios → Atendimento → Dashboard de SLA**, escolha o **período** e os filtros (**filas**, **canais**, **usuários** e o **percentual de alerta**) e clique em **Gerar/Excel** para atualizar ou exportar para Excel.

### Cartões de resumo (topo da tela)

| Indicador | O que mostra |
| --- | --- |
| **Atendimentos** | Quantos atendimentos entram no período |
| **Tempo de 1ª resposta** | Tempo **médio** que a equipe levou para responder pela primeira vez |
| **Tempo de resolução** | Tempo **médio** para resolver os atendimentos |
| **1ª resposta no prazo** | **Percentual** dentro da meta de primeira resposta (e, embaixo, "X de Y" atendimentos) |
| **Resolução no prazo** | **Percentual** resolvido dentro da meta (e "X de Y") |
| **Resolução fora do prazo** | Percentual que **estourou** a meta de resolução |
| **Em alerta** | Atendimentos **ainda abertos** que passaram do percentual de alerta — a chance de dar tempo está acabando |
| **Sem meta definida** | Atendimentos do período que **não tinham meta** quando abriram (aviso, não atraso) |

### As três situações de um atendimento

* 🟢 **Dentro do prazo** — cumpriram a meta.
* 🟠 **Em alerta** — passou do percentual de alerta e continua aberto.
* 🔴 **Fora do prazo** — a meta foi estourada.

### Gráficos e detalhamento

* **SLA por fila**, **SLA por atendente** e **SLA por canal** — barras empilhadas (dentro / em alerta / fora) mostrando onde o atendimento cumpre ou não as metas.
* **Evolução do SLA** — linha com o **percentual diário no prazo**, para ver se o time está melhorando ao longo do mês.
* **Detalhamento por atendente** — tabela com total, tempo médio de 1ª resposta, tempo médio de resolução, quantos dentro/fora e o **% no prazo** de cada pessoa.

> 💡 **Como ler na prática:** comece pelo card **"Resolução fora do prazo"** — se estiver alto, olhe o gráfico **por fila** para achar o setor mais sobrecarregado e a tabela **por atendente** para apoiar quem precisa. O card **"Em alerta"** é o seu radar do dia: quem está ali ainda dá tempo de atender dentro da meta.

> ⚠️ **Detalhes do cálculo:** o atendimento é contado para o **responsável atual** (nem sempre quem deu a primeira resposta) e atendimentos de **grupos não entram** no cálculo.

**Sugestão de print:** Dashboard de SLA completo (cartões de resumo + gráficos).

**Onde colocar:** no início da seção "O relatório".

**Objetivo:** dar a visão geral da tela nova — onde ficam os indicadores, gráficos e a tabela — antes de explicar cada um.

***

> 💡 **Dica de uso:** defina metas **realistas** primeiro (observe os tempos médios atuais), ative **"Contar apenas o horário comercial"** quando a equipe não atende fora do expediente, e acompanhe a **Evolução do SLA** semanalmente em vez de todos os dias — tendência vale mais que número isolado.
