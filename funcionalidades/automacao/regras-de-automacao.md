# Regras de Automação

A partir da **versão 3.0**, o Whazing possui um novo sistema de **Regras de Automação** para executar ações automaticamente nos Tickets.

Com esse recurso, você pode criar regras para:

* Fechar Tickets automaticamente;
* Avisar o cliente antes de fechar;
* Reabrir Tickets;
* Transferir Tickets para outra fila;
* Colocar Tickets como pendentes;
* Remover ou adicionar atendentes;
* Adicionar ou remover etiquetas;
* Enviar mensagens para o cliente;
* Enviar mensagens no chat interno;
* Criar regras específicas para determinados canais, filas, horários e condições.

O sistema possui **modelos prontos**, para facilitar a configuração, e também uma opção de **Regra avançada**, para criar automações personalizadas.

***

## 📍 Onde encontrar

Existem duas áreas principais:

#### ⚙️ Criar e gerenciar regras

Acesse:

**Configurações de Atendimento → Regras de Automação**

É nessa tela que você cria, edita, ativa ou desativa suas automações.

#### 📜 Consultar execuções

Para verificar o que aconteceu com suas automações, acesse:

**Configurações de Atendimento → Histórico de Automações**

Nessa área você poderá consultar os registros das execuções.

***

## 🚀 Nova automação

Ao clicar em:

**Nova automação**

o sistema apresenta modelos prontos para as situações mais comuns.

Isso permite criar uma automação sem precisar configurar todas as condições manualmente.

***

## 🧩 Modelos prontos

### 🔔 Fechar por inatividade — com aviso

Utilize quando quiser avisar o cliente antes de fechar o Ticket.

O funcionamento é:

**Atendente responde**

↓

**Cliente não responde durante o período configurado**

↓

**Sistema envia um aviso**

↓

**Após o tempo configurado, o Ticket é fechado**

Essa automação não afeta Tickets que estão **pendentes aguardando um atendente**.

#### Exemplo

O atendente responde:

> "Olá! Podemos ajudar em mais alguma coisa?"

O cliente não responde.

Depois do período configurado, o sistema pode enviar:

> "Como não recebemos uma resposta, este atendimento será encerrado."

Depois, o Ticket é fechado.

***

## 🔒 Fechar por inatividade — direto

Funciona de maneira semelhante ao modelo anterior, mas **sem enviar um aviso antes**.

O sistema verifica:

* Ticket aberto;
* Atendente já respondeu;
* Cliente não respondeu pelo período configurado.

Depois do período determinado, o Ticket é fechado automaticamente.

Também não afeta Tickets pendentes aguardando um atendente.

***

## ⏳ Colocar Tickets pendentes

Esse modelo é indicado para situações em que o:

**Cliente enviou uma mensagem**

e o:

**Atendente demora para responder.**

Depois do tempo configurado, o Ticket pode voltar para **Pendente**, ficando novamente disponível na fila para outro atendente.

#### Exemplo

Cliente envia uma mensagem.

O Ticket fica aguardando resposta do atendente.

Se o atendente não responder dentro do período configurado:

→ Ticket volta para **Pendente**.

Isso pode ajudar a evitar que atendimentos fiquem parados com um único atendente.

***

## 🔄 Transferir sem atendente

Esse modelo permite transferir automaticamente o Ticket quando **não houver atendente online na fila**.

#### Exemplo

Ticket está na fila:

**Suporte**

Não existe nenhum atendente disponível.

A automação pode transferir automaticamente para:

**Atendimento Geral**

Isso ajuda a evitar que clientes fiquem esperando em uma fila sem atendentes disponíveis.

***

## 💬 Avisar cliente — sem encerrar

Esse modelo permite enviar uma mensagem automaticamente quando o cliente está sem responder.

A diferença é que o Ticket **continua aberto**.

#### Exemplo

Após determinado período sem resposta, o sistema envia:

> "Olá! Estamos aguardando sua resposta para continuar o atendimento."

O Ticket permanece aberto.

***

## 🛠️ Regra avançada

Se nenhum dos modelos prontos atender sua necessidade, utilize:

**Regra avançada**

Ela permite criar uma automação completamente personalizada.

Você pode definir:

* Quando a regra será executada;
* Fila;
* Canal;
* Prioridade;
* Tempo de espera;
* Condições adicionais;
* Várias ações;
* Tempo individual para cada ação.

***

## 📝 Criando uma Regra Avançada

Ao criar uma regra avançada, você encontrará campos como:

#### Nome

Digite um nome para identificar a automação.

Exemplo:

**Fechar atendimento sem resposta**

#### Descrição

Campo opcional para explicar o objetivo da regra.

Exemplo:

**Fecha Tickets após 2 horas sem resposta do cliente.**

#### Ativa

Deixe ativado para que a automação possa ser executada.

***

## 🎯 Aplicar em

Você pode limitar onde a automação será executada.

### Fila

Escolha uma fila específica.

Se deixar vazio:

**Todas as filas**

serão consideradas.

### Canal

Escolha um canal específico.

Se deixar vazio:

**Todos os canais**

serão considerados.

#### Exemplo

Você pode criar uma regra que funcione somente:

**Fila: Suporte**

**Canal: WhatsApp**

***

## 🔢 Prioridade

Defina a prioridade da automação.

O valor padrão é:

**0**

Quando existem várias regras, a prioridade ajuda a organizar a ordem de processamento.

> 💡 Recomendamos utilizar nomes claros e prioridades organizadas quando houver muitas regras.

***

## ⏱️ Quando

A automação precisa definir quando deve ser executada.

Um dos gatilhos disponíveis é:

**Cliente não responder por**

Informe o tempo desejado.

#### Exemplo

**120 minutos**

Nesse caso, a regra poderá ser aplicada quando o cliente não responder durante o período configurado.

> ⚠️ Essa condição considera Tickets abertos nos quais o atendente já respondeu e está aguardando o cliente. Tickets pendentes aguardando um atendente não entram nessa condição.

***

## 🔎 Condições extras

Além da condição principal, você pode adicionar várias condições extras.

Isso permite criar regras muito específicas.

As condições disponíveis incluem:

* Etiqueta;
* Status do Ticket;
* Dia da semana;
* Horário;
* Origem do Ticket;
* Quantidade mínima de mensagens.

***

## 🏷️ Etiqueta

Permite executar a regra somente para contatos que possuem determinada etiqueta.

#### Exemplo

**Etiqueta: Cliente VIP**

A automação será aplicada somente aos contatos com essa etiqueta.

***

## 📂 Status do Ticket

Permite verificar o status atual do Ticket.

Exemplo:

**Status: Aberto**

A regra somente será executada para Tickets abertos.

***

## 📅 Dia da semana

Você pode restringir a automação para determinados dias.

Exemplo:

**Domingo**

ou outro dia disponível.

Isso é útil quando o comportamento deve ser diferente durante finais de semana.

***

## 🕐 Horário

Também é possível definir um intervalo de horário.

Exemplo:

**08:00 até 18:00**

A regra somente será executada dentro desse período.

#### Exemplo prático

Você pode criar uma regra para responder automaticamente somente durante o horário comercial.

***

## 🔗 Origem do Ticket

Permite limitar a automação de acordo com a origem do atendimento.

Exemplo:

**Direto**

Isso permite criar comportamentos diferentes dependendo da origem registrada no Ticket.

***

## 💬 Quantidade mínima de mensagens

Você também pode definir uma quantidade mínima de mensagens.

Exemplo:

**1 mensagem**

A regra somente será considerada quando o Ticket possuir pelo menos a quantidade configurada.

***

## ➕ Combinar várias condições

Uma das principais vantagens das Regras de Automação é poder **combinar várias condições na mesma regra**.

Por exemplo:

**Status:** Aberto

**Dia:** Domingo

**Horário:** 08:00–18:00

**Origem:** Direto

**Quantidade mínima:** 1 mensagem

Isso significa que a regra somente será executada quando as condições configuradas forem atendidas.

***

## ⚡ Ações

Depois de definir as condições, você escolhe o que o sistema deve fazer.

É possível adicionar **várias ações na mesma automação**.

Entre as ações disponíveis estão:

* Enviar mensagem;
* Alterar status;
* Reabrir Ticket;
* Transferir para fila;
* Remover atendente;
* Adicionar etiqueta;
* Remover etiqueta;
* Enviar mensagem no chat interno.

***

## 💬 Enviar mensagem

Permite enviar uma mensagem automaticamente para o cliente.

Você pode utilizar variáveis.

Exemplos disponíveis:

`{{name}}`

Nome do contato.

`{{fila}}`

Nome da fila.

`{{user}}`

Nome do atendente.

`{{protocol}}`

Número do protocolo.

`{{greeting}}`

Saudação.

#### Exemplo

Você pode configurar:

> Olá \{{name\}}, estamos aguardando seu retorno para continuar o atendimento.

***

## 🔒 Alterar status

Permite alterar automaticamente o status do Ticket.

Exemplo:

**Status: Fechado**

Isso pode ser utilizado depois de um período de inatividade.

***

## 🔓 Reabrir Ticket

Permite reabrir automaticamente um Ticket.

Isso pode ser utilizado em fluxos onde o sistema precisa voltar o atendimento para um estado ativo.

***

## 📂 Transferir para fila

Permite enviar o Ticket para outra fila.

Exemplo:

**Fila atual:** Suporte

↓

**Fila destino:** Comercial

***

## 👤 Remover atendente

Remove o atendente atualmente associado ao Ticket.

Isso pode ser útil quando você deseja devolver o atendimento para a fila.

***

## 🏷️ Adicionar etiqueta

Adiciona automaticamente uma etiqueta ao contato.

Exemplo:

**Etiqueta: Inativo**

***

## 🏷️ Remover etiqueta

Remove uma etiqueta existente.

Exemplo:

**Remover: Em atendimento**

***

## 💬 Enviar mensagem no chat interno

Permite enviar uma mensagem para o **chat interno da equipe**.

Você pode configurar:

* Mensagem;
* Remetente;
* Destinatários.

Isso pode ser utilizado para avisar outros usuários ou equipes sobre uma situação ocorrida no Ticket.

#### Exemplo

Quando um Ticket for fechado:

> "O atendimento do cliente \{{name\}} foi encerrado automaticamente."

A mensagem pode ser enviada internamente para os responsáveis.

***

## ⏱️ Tempo de cada ação

Cada ação pode possuir seu próprio tempo de execução.

Por exemplo:

**Enviar mensagem**

→ imediatamente

Depois de **30 minutos**

**Alterar status → Fechado**

Depois de mais **30 minutos**

**Reabrir Ticket**

Isso permite criar sequências automáticas.

***

## 🧩 Exemplo completo

Imagine que você deseja criar uma automação de inatividade.

#### Quando

**Cliente não responder por: 120 minutos**

#### Condições

* Status: **Aberto**
* Dia: **Domingo**
* Horário: **08:00–18:00**
* Origem: **Direto**
* Quantidade mínima: **1 mensagem**

#### Ações

**1. Enviar mensagem**

Avisar o cliente que o atendimento está aguardando retorno.

**2. Depois de 30 minutos**

Alterar status para:

**Fechado**

**3. Depois de 30 minutos**

Reabrir o Ticket, caso essa seja a estratégia desejada.

**4. Depois de 30 minutos**

Transferir para uma fila.

**5. Depois de 30 minutos**

Remover o atendente.

**6. Depois de 30 minutos**

Adicionar uma etiqueta.

**7. Depois de 30 minutos**

Remover outra etiqueta.

**8. Depois de 30 minutos**

Enviar uma mensagem no chat interno.

***

## 📋 Resumo da automação

O sistema apresenta um resumo da regra configurada.

Exemplo:

**Todos os canais e filas**

#### Condições

* Etiqueta: —
* Status do Ticket: **Aberto**
* Dia da semana: **Domingo**
* Horário: **08:00–18:00**
* Origem do Ticket: **Direto**
* Qtd. mínima de mensagens: **1**

#### Quando

**Cliente não responder por 120 minutos**

#### Então

→ Enviar mensagem

→ Alterar status — Fechado (+30 min)

→ Reabrir Ticket (+30 min)

→ Transferir para fila (+30 min)

→ Remover atendente (+30 min)

→ Adicionar etiqueta (+30 min)

→ Remover etiqueta (+30 min)

→ Enviar mensagem no chat interno (+30 min)

→ Enviar mensagem no chat interno (+30 min)

***

## 📜 Histórico de Automações

Depois de criar suas regras, você pode verificar o que realmente foi executado.

Acesse:

**Configurações de Atendimento → Histórico de Automações**

Essa área funciona como um **log das execuções das automações**.

Ela é especialmente útil para descobrir:

* Se uma automação foi executada;
* Quando foi executada;
* Qual Ticket foi afetado;
* Qual regra foi acionada;
* Quais ações foram realizadas.

> 💡 Quando uma automação não estiver funcionando como esperado, o primeiro lugar para verificar é o **Histórico de Automações**.

***

## 🔍 Como testar uma automação

Para evitar problemas, recomendamos testar novas regras com uma situação controlada.

#### Exemplo

Se você criou uma regra para:

**Fechar após 120 minutos**

Faça um teste utilizando um período menor, quando possível, e acompanhe o **Histórico de Automações**.

Verifique:

1. Se o Ticket atende às condições;
2. Se o tempo configurado foi atingido;
3. Se a automação aparece no histórico;
4. Se a ação esperada foi executada.

Depois do teste, ajuste o tempo definitivo.

***

## ⚠️ Alteração importante na versão 3.0

A partir da **versão 3.0**, algumas configurações antigas foram substituídas pela nova estrutura de **Regras de Automação**.

A configuração existente diretamente no canal para:

**Fechar Ticket automaticamente**

e

**Voltar Ticket para Pendente**

foi **descontinuada**.

Agora essas ações devem ser configuradas através das:

**Configurações de Atendimento → Regras de Automação**

Isso centraliza as automações em um único local e permite criar regras muito mais completas.

***

## 🔄 Antes e depois

#### Versões anteriores

Algumas automações eram configuradas diretamente no canal.

Exemplo:

**Canal → Fechar Ticket automaticamente**

***

#### Versão 3.0+

Agora você pode acessar:

**Configurações de Atendimento → Regras de Automação**

e criar uma regra com:

**Condições**

*

**Tempo**

*

**Ações**

Isso permite muito mais possibilidades.

***

## 💡 Por que utilizar as Regras de Automação?

O novo sistema permite criar automações muito mais personalizadas.

Você pode combinar:

**Quem?**

→ Etiqueta

**Qual Ticket?**

→ Status / Origem

**Quando?**

→ Tempo / Dia / Horário

**Onde?**

→ Fila / Canal

**Quantas mensagens?**

→ Quantidade mínima

E então executar:

→ Mensagem

→ Fechar

→ Reabrir

→ Transferir

→ Adicionar etiqueta

→ Remover etiqueta

→ Remover atendente

→ Avisar equipe pelo chat interno

***

## 🚀 Resumo

Para criar uma automação:

**Configurações de Atendimento → Regras de Automação**

↓

**Nova automação**

↓

Escolha um **modelo pronto** ou **Regra avançada**

↓

Defina quando a automação deve funcionar

↓

Adicione uma ou várias condições

↓

Adicione uma ou várias ações

↓

Configure os tempos

↓

Confira o resumo

↓

**Salve e ative**

Depois, acompanhe as execuções em:

**Configurações de Atendimento → Histórico de Automações**

> 💡 **Dica para iniciantes:** comece utilizando os modelos prontos. Quando precisar de um comportamento mais específico, utilize a **Regra avançada**, que permite combinar várias condições e executar várias ações em sequência.
