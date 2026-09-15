---
icon: shuffle-variant
---

# Distribuição Automática

## O que é a Distribuição Automática?

A **Distribuição Automática** faz com que o sistema escolha **automaticamente um usuário** para receber cada novo atendimento de uma fila — **sem precisar escolher usuário por usuário**.

É assim que o sistema descreve esse recurso:

> *"Quando ativada numa fila, o sistema escolhe automaticamente um usuário elegível (online, disponível e de um dos perfis selecionados) para receber cada novo atendimento — sem precisar escolher usuário por usuário."*

Em linguagem simples: em vez de os atendimentos ficarem parados na fila esperando que alguém os aceite, o sistema **entrega cada atendimento diretamente para um atendente** que esteja disponível, seguindo o critério que você escolher (aleatório ou balanceado).

### 🧑‍💼 Antes de continuar: o que é uma fila?

Uma **fila** é um grupo de atendimento usado para organizar os tickets de uma área ou equipe — por exemplo, uma fila **Vendas**, uma fila **Suporte** e uma fila **Financeiro**. Se você ainda não conhece bem esse conceito, veja [Organização de Atendimentos, Filas e Permissões de Usuários](organizacao-de-atendimentos-filas-e-permissoes-de-usuarios.md).

A Distribuição Automática é configurada **por fila**: cada fila pode ter seu próprio modo de distribuição e seus próprios perfis participantes.

***

## 🤖 Preciso criar um Chatbot?

**Não.** A Distribuição Automática funciona **diretamente na fila** — não é necessário criar nenhum fluxo no Chatbot para encaminhar o atendimento.

Entenda a diferença:

### Usando o Chatbot

Você cria um fluxo que recebe o cliente, envia mensagens (boas-vindas, menus etc.) e, em algum momento, **encaminha o atendimento para uma fila**. Com a distribuição ativada, o atendimento é então entregue a um atendente.

### Com a Distribuição Automática

O atendimento vai para a fila **sem passar por nenhum fluxo**, e o sistema já o entrega automaticamente a um atendente disponível.

> 💡 **Quando o Chatbot ainda faz sentido?** Se você quer que o cliente passe por menus, perguntas ou respostas automáticas **antes** de chegar a um atendente, o Chatbot continua sendo a ferramenta certa. A Distribuição Automática é a alternativa para quem quer que o atendimento vá **direto para a equipe**, sem essa etapa.

Se a mesma fila for alcançada por um Chatbot que também tenha o **"Auto Distribuir Atendimento"** configurado, **a configuração do bot prevalece**. Isso está avisado na própria tela do recurso:

> *"A distribuição desta fila é usada quando o atendimento ainda não tiver um responsável definido por uma regra anterior, como um chatbot, uma integração, o canal privado ou a carteira do contato. Se esta fila também for alcançada por um chatbot com Auto Distribuir Atendimento configurado, a configuração do bot prevalece."*

> **📸 Sugestão de print:** Tela principal da Distribuição Automática, mostrando a descrição do recurso e a seleção da fila.

***

## 📥 O que acontece quando chega um atendimento?

Quando um novo atendimento chega:

1. O sistema verifica **qual é a fila** daquele atendimento.
2. Se a fila estiver com a Distribuição Automática **ativada**, o sistema procura os **usuários elegíveis**: de um dos **perfis selecionados**, **online** e **disponíveis**.
3. O atendimento é **entregue automaticamente** a um desses usuários, seguindo o modo configurado (**Aleatória** ou **Balanceada**).

### Situações em que a distribuição não acontece

* Se o atendimento **já tem um responsável definido** por uma regra anterior — como um Chatbot, uma integração, o canal privado ou a carteira do contato — a distribuição automática da fila **não o move**.
* Se não houver **nenhum usuário elegível** no momento (nenhum atendente dos perfis selecionados online e disponível), o atendimento permanece na fila, como de costume.

### Transferências

Por padrão, a distribuição automática age apenas em **atendimentos novos**. Se você ativar a opção **"Distribuir também em transferências"**, ela também entra em ação quando uma **transferência** mover o atendimento para a fila **sem escolher um atendente** — seja uma transferência manual ou feita por uma integração, como a Recepção Inteligente.

> ⚠️ **Transferências que já escolhem um usuário específico nunca são sobrescritas** — o sistema entrega o atendimento para o usuário escolhido, como sempre.

***

## 🧑‍💼 Quem pode receber os atendimentos?

Os candidatos são os usuários que atendem aos **três requisitos** ao mesmo tempo:

1. Ter um dos **perfis selecionados** na configuração (veja abaixo os perfis disponíveis);
2. Estar **online** no sistema;
3. Estar **disponível** para receber atendimentos (não marcado como indisponível).

### Como o sistema escolhe entre os elegíveis?

* **Aleatória:** sorteia entre os usuários elegíveis que estiverem online e disponíveis.
* **Balanceada:** escolhe o usuário elegível, online e disponível **com menos atendimentos em aberto** naquele momento. Se houver empate, o sistema sorteia entre os empatados.

> 💡 No modo **Balanceada**, a contagem considera os atendimentos em aberto do usuário **em toda a empresa** — não apenas naquela fila. Assim, a carga da equipe fica equilibrada de verdade.

***

## 🧭 Como configurar — passo a passo

> 📌 A tela de configuração fica na **Central de Configurações**, na área de **Atendimento**, com o nome **"Distribuição Automática"**. Ela pode ser utilizada por usuários **administrador** e **supervisor**.

### 1. Acesse a configuração

Abra a **Central de Configurações** e localize o card **"Distribuição Automática"** — identificado pela descrição *"Configure, por fila, quais perfis participam da distribuição automática de novos atendimentos (Aleatória ou Balanceada)."*

### 2. Selecione a fila

No card **"Fila"**, escolha no campo **"Selecione a fila"** qual fila você quer configurar.

> 💡 Não existe nenhuma fila cadastrada ainda? A própria tela avisa: *"Nenhuma fila cadastrada ainda. Cadastre uma fila para configurar a distribuição automática."* Nesse caso, cadastre a fila primeiro (veja [Organização de Atendimentos, Filas e Permissões de Usuários](organizacao-de-atendimentos-filas-e-permissoes-de-usuarios.md)).

Ao selecionar a fila, o restante das opções aparece na tela, já preenchido com a configuração atual daquela fila.

### 3. Escolha o modo de distribuição

No card **"Distribuição Automática"**, clique em um dos três cartões de modo:

* **Não** — desativado: os novos atendimentos da fila **não** são distribuídos automaticamente (comportamento padrão).
* **Aleatória** — sorteia entre os usuários elegíveis que estiverem online e disponíveis.
* **Balanceada** — distribui priorizando o usuário elegível, online e disponível **com menos atendimentos**.

O cartão selecionado ganha uma marca de ✓.

### 4. Escolha os perfis que podem receber

No card **"Perfis que podem receber"**, marque os perfis que poderão receber os atendimentos distribuídos:

| Perfil | O que é |
| --- | --- |
| **Administrador** | Usuário com acesso total ao sistema |
| **Supervisor Geral** | Usuário que supervisiona a operação |
| **Supervisor de Fila** | Usuário que supervisiona filas específicas |
| **Usuário** | O atendente comum do atendimento |

O sistema explica: *"Os atendimentos serão distribuídos entre usuários dos perfis selecionados que estiverem online e disponíveis. Não é necessário selecionar usuários individualmente."* — ou seja, você configura por **perfil**, e todos os usuários daquele perfil participam.

> ⚠️ **Selecione ao menos um perfil.** Se nenhum for escolhido, a tela avisa: *"Selecione ao menos um perfil, ou a distribuição automática não terá nenhum candidato."* — e o botão **Salvar** fica desabilitado até você escolher um.

### 5. (Opcional) Distribuir também em transferências

Ative o interruptor **"Distribuir também em transferências"** se quiser que a distribuição funcione também quando uma **transferência** chegar à fila **sem atendente definido**. Por padrão, essa opção fica **desligada**.

Lembre-se: transferências que já escolhem um usuário específico **nunca** são sobrescritas.

### 6. Salve

Clique em **"Salvar"**. Ao concluir, o sistema confirma:

> *"Configuração de distribuição automática salva com sucesso."*

A configuração passa a valer **na hora**, para os próximos atendimentos da fila.

> **📸 Sugestão de print:** Configuração pronta, com o modo e os perfis selecionados e o botão "Salvar".

### 7. Teste

Para confirmar que está funcionando:

1. Envie uma nova mensagem para o canal cujos atendimentos entram na fila configurada (por exemplo, mande uma mensagem de outro WhatsApp para o número atendido).
2. Abra o atendimento gerado e verifique se ele **já aparece atribuído a um usuário**.
3. Repita algumas vezes: no modo **Aleatória**, os responsáveis devem variar; no modo **Balanceada**, o usuário com menos atendimentos em aberto deve receber o próximo.

***

## 📝 Cada campo explicado

### Fila — "Selecione a fila"

**Para que serve?** Escolher **qual fila** você está configurando — a distribuição automática é sempre configurada **por fila**.

**O que devo escolher?** A fila cujos atendimentos você quer distribuir automaticamente.

**O que acontece depois?** As opções de configuração abaixo são carregadas com os valores atuais daquela fila.

### Modo — "Distribuição Automática"

**Para que serve?** Definir **como** o sistema escolhe quem recebe cada atendimento.

**O que devo escolher?**

* **Não** — para desativar a distribuição automática na fila.
* **Aleatória** — para sortear entre os elegíveis.
* **Balanceada** — para entregar ao elegível com menos atendimentos em aberto.

**O que acontece depois?** Os novos atendimentos da fila (sem responsável definido) passam a ser entregues conforme o modo escolhido.

### "Perfis que podem receber"

**Para que serve?** Definir **quem** pode receber os atendimentos distribuídos — por perfil de usuário, sem precisar marcar pessoa por pessoa.

**O que devo escolher?** Um ou mais perfis (Administrador, Supervisor Geral, Supervisor de Fila e/ou Usuário).

**O que acontece depois?** Somente usuários dos perfis marcados — online e disponíveis — entram no sorteio/distribuição. Perfis não marcados nunca recebem pela distribuição automática.

### "Distribuir também em transferências"

**Para que serve?** Estender a distribuição automática para **transferências** que chegam à fila sem atendente definido (manuais ou de integrações, como a Recepção Inteligente).

**O que devo escolher?** Ligar ou desligar o interruptor — por padrão, **desligado**.

**O que acontece depois?** Ligado: transferências sem usuário escolhido passam a ser distribuídas automaticamente. Desligado: a distribuição vale apenas para atendimentos novos. Em ambos os casos, transferências que já escolhem um usuário específico são respeitadas.

### Botão "Salvar"

**Para que serve?** Gravar a configuração da fila.

**O que acontece depois?** O sistema exibe a confirmação *"Configuração de distribuição automática salva com sucesso."* e a regra passa a valer para os próximos atendimentos.

***

## 🔘 Como desativar

1. Acesse a tela **"Distribuição Automática"**.
2. No campo **"Selecione a fila"**, escolha a fila desejada.
3. No modo de distribuição, clique em **"Não"**.
4. Clique em **"Salvar"**.

Depois de salvar, os novos atendimentos da fila **voltam a ficar na fila** sem entrega automática — o comportamento padrão do sistema. Cada fila é desativada individualmente.

***

## 🧪 Exemplos práticos

### Exemplo 1 — Empresa de vendas

A empresa possui uma fila chamada **Vendas**. O administrador seleciona essa fila na tela, escolhe o modo **Balanceada** e mantém apenas o perfil **Usuário** selecionado.

A partir dali, todo novo atendimento que chegar **direto** para a fila Vendas — sem chatbot, sem integração e sem responsável definido antes — é entregue automaticamente ao atendente **online e disponível** com menos atendimentos em aberto.

### Exemplo 2 — Várias filas

A empresa tem as filas **Vendas**, **Suporte** e **Financeiro**. Como a configuração é **por fila**, o administrador define regras diferentes para cada uma:

* **Vendas** — modo **Balanceada**, perfis: **Usuário**;
* **Suporte** — modo **Aleatória**, perfis: **Usuário**;
* **Financeiro** — modo **Balanceada**, perfis: **Usuário** e **Supervisor de Fila**.

Cada fila distribui entre os seus próprios perfis participantes, independentemente das outras.

> **📸 Sugestão de print:** Cartões de modo (Não / Aleatória / Balanceada) e o card "Perfis que podem receber" com perfis marcados.

***

## 📱 Canais

A Distribuição Automática **não é configurada por canal** — ela é configurada **por fila**.

Isso significa que ela funciona para **qualquer canal** cujos atendimentos entrem na fila configurada: WhatsApp (nas APIs não oficiais e na Oficial), Instagram, Facebook e os demais canais do sistema se comportam da mesma forma. Não existe tela de distribuição dentro do cadastro de canais, nem restrição de tipo de canal — o que define a distribuição é a **fila** em que o atendimento cai.

***

## ⚠️ Conflitos com outras automações

Outras configurações do sistema também podem definir **quem atende**. A regra confirmada é: **quem define o responsável primeiro, ganha**.

* **Chatbot:** se o fluxo transfere o atendimento para um **usuário** específico, ele é respeitado. Se a fila também tiver "Auto Distribuir Atendimento" configurada no bot, **a configuração do bot prevalece** sobre a da fila.
* **Integrações (como a Recepção Inteligente):** se a integração escolher um usuário, a escolha é respeitada; se definir apenas a fila, a distribuição automática entra em ação quando a opção **"Distribuir também em transferências"** estiver ligada.
* **Canal privado e carteira do contato:** atendimentos que já têm responsável por esses motivos nunca são redistribuídos.
* **Entre filas:** não existe conflito — cada fila tem sua própria configuração, que vale apenas para os atendimentos dela.

> 💡 **Resumo:** se um atendimento chegar à fila **sem responsável definido** e **sem nenhuma regra anterior** que o atribua, a Distribuição Automática atua. Se alguma regra anterior já definiu o responsável, ela tem prioridade.

***

## 🆘 Problemas comuns

### "Configurei a fila, mas o atendimento não foi distribuído"

Verifique, nesta ordem:

1. **O atendimento já tinha um responsável definido por uma regra anterior?** (Chatbot, integração, canal privado ou carteira do contato.) Nesse caso, a distribuição automática não atua — quem definiu primeiro, ganha.
2. **Havia alguém elegível no momento?** É preciso ter, pelo menos, um usuário dos **perfis selecionados** **online** e **disponível**. Se nenhum estiver, o atendimento fica na fila.
3. **O modo estava "Não"?** Só distribui quem estiver em **Aleatória** ou **Balanceada**.

### "O atendimento foi para outro usuário que eu não esperava"

* Se a fila também é alcançada por um **Chatbot com "Auto Distribuir Atendimento"**, a configuração do **bot prevalece**.
* Se o atendimento veio por **transferência com usuário já escolhido**, a escolha é sempre respeitada.

### "Não aparece nenhuma fila para selecionar"

Nenhuma fila foi cadastrada ainda — a tela avisa: *"Nenhuma fila cadastrada ainda. Cadastre uma fila para configurar a distribuição automática."* Cadastre a fila primeiro.

### "Não encontro a Distribuição Automática"

Ela fica na **Central de Configurações**, na área de **Atendimento**. Lembre-se de que apenas usuários **administrador** e **supervisor** acessam essa tela.

### "Posso mudar a fila depois?"

Sim — basta selecionar **outra fila** no campo **"Selecione a fila"**. A tela sempre mostra a configuração atual da fila escolhida, e você pode ajustar e salvar quantas filas quiser na mesma visita.

### "Posso desativar?"

Sim — selecione a fila, escolha o modo **"Não"** e clique em **"Salvar"**.

***

## ❓ Perguntas frequentes

### O que é Distribuição Automática?

É a configuração que faz o sistema **escolher automaticamente um usuário** (online, disponível e de um dos perfis selecionados) para receber cada novo atendimento de uma fila.

### Preciso criar um Chatbot?

**Não.** A distribuição funciona direto na fila. O Chatbot continua sendo útil quando você quer menus e respostas automáticas antes do atendimento humano.

### Para qual fila o atendimento será enviado?

A configuração **não envia** o atendimento para a fila — ela atua na fila **em que o atendimento já caiu**. O caminho até a fila continua sendo definido pelo canal e pelas demais regras do sistema.

### Posso alterar a fila?

Sim. Selecione outra fila no campo **"Selecione a fila"**, ajuste as opções e salve. Cada fila tem configuração própria.

### Posso desativar?

Sim. Selecione a fila, escolha o modo **"Não"** e salve.

### Funciona para todos os canais?

Sim. A configuração é **por fila**, não por canal — qualquer canal cujos atendimentos entrem na fila configurada funciona da mesma forma.

### Posso ter mais de uma configuração?

Sim. **Cada fila** tem sua própria configuração de modo e perfis — por exemplo, Vendas, Suporte e Financeiro podem ter regras diferentes.

### O que acontece quando chega um novo atendimento?

Se a fila estiver com a distribuição ativada e o atendimento **não tiver responsável definido**, o sistema entrega o atendimento a um usuário elegível (perfil selecionado, online e disponível), conforme o modo escolhido. Se ninguém estiver elegível, o atendimento permanece na fila.

### O Chatbot continua funcionando normalmente?

Sim. Nada muda no Chatbot. A única regra de convivência: se o bot também tiver "Auto Distribuir Atendimento" configurado para a mesma fila, **a configuração do bot prevalece**. E se o atendimento já tiver responsável definido pelo bot, a distribuição da fila não o move.

***

## 👣 Próximos passos

* Ainda não conhece filas e permissões? Comece por [Organização de Atendimentos, Filas e Permissões de Usuários](organizacao-de-atendimentos-filas-e-permissoes-de-usuarios.md).
* Usa Chatbot e quer distribuir no fim do fluxo? Veja [CHATBOT 3.0 (ChatFlow)](../automacao/chatbotinterno-1/README.md) e o [Rodízio Automático de Atendimentos](../automacao/chatbotinterno-1/rodizio-automatico-de-atendimentos.md).
