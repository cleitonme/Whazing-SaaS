# Configurações do Atendimento

As **Configurações do Atendimento** permitem definir como o módulo de atendimento irá funcionar para os usuários da empresa.

Aqui você pode controlar a visualização dos tickets, permissões dos usuários, comportamento das filas, ChatBot, contatos, grupos e outras regras do atendimento.

### Onde encontrar

No menu do sistema, acesse:

**Configurações de Atendimento → Configurações do Atendimento**

Nesta tela estão disponíveis as configurações gerais do módulo **Atendimento**.

> **Importante:** algumas opções alteram diretamente o que os usuários podem visualizar ou fazer no sistema. Recomendamos revisar as configurações de acordo com a organização da sua equipe antes de ativá-las.

***

## Configurações gerais

### Agrupar mensagens de tickets diferentes

Quando ativada, as mensagens de diferentes tickets do mesmo contato serão exibidas como se pertencessem ao mesmo atendimento.

**Exemplo:**

Um contato possui vários tickets. Com essa opção ativada, as mensagens desses tickets poderão ser apresentadas de forma agrupada na visualização do atendimento.

**Quando usar:**\
Útil para empresas que preferem visualizar todo o histórico de conversas do contato de forma unificada.

***

### Visualizar apenas mensagens das filas que o usuário pertence

Quando ativada, o usuário poderá visualizar somente as mensagens relacionadas às filas das quais ele participa.

**Exemplo:**

Um usuário pertence às filas **Vendas** e **Suporte**. Ele não poderá visualizar mensagens de tickets da fila **Financeiro**.

**Quando usar:**\
Recomendado para empresas que precisam separar os atendimentos por setores ou departamentos.

***

### Reações aparecem como resposta

Quando ativada, as reações feitas nas mensagens serão exibidas no atendimento como se fossem uma mensagem de resposta.

Isso facilita a identificação das reações realizadas pelos contatos ou usuários.

***

### Administradores e Supervisores em modo auditoria

Quando ativada, tickets acessados por **Administradores** ou **Supervisores** não serão automaticamente marcados como lidos.

Isso permite que administradores e supervisores acompanhem os atendimentos sem alterar o status de leitura das mensagens para o atendente responsável.

**Quando usar:**\
Útil para supervisão, auditoria e acompanhamento da equipe.

***

## Privacidade e visualização de tickets

### Não visualizar Tickets Privados já atribuídos a outros usuários

Quando ativada, somente o usuário responsável pelo ticket privado e os administradores poderão visualizar esse atendimento.

**Exemplo:**

Um ticket privado está atribuído ao usuário João. Outros atendentes não poderão visualizar esse ticket.

***

### Não visualizar Tickets no ChatBot

Quando ativada, somente administradores poderão visualizar tickets que estejam interagindo com:

* ChatBot
* Typebot
* IA

Isso evita que atendentes visualizem ou interfiram em conversas que ainda estão sendo processadas automaticamente.

***

## ChatBot

### Habilitar guia de atendimento de Chatbots

Quando ativada, será adicionada uma guia exclusiva para visualizar os atendimentos relacionados aos ChatBots.

Isso facilita a separação entre:

* Atendimentos humanos
* Atendimentos automáticos
* Conversas em andamento no ChatBot

***

### Ocultar guia de atendimento sem tickets

Quando ativada, somente as guias de atendimento que possuem tickets serão exibidas.

Isso deixa a tela de atendimento mais organizada, evitando a exibição de categorias vazias.

***

## Conexões e identificação do canal

### Exibir conexões desconectadas na tela de atendimento

Quando ativada, as conexões que estiverem desconectadas serão exibidas na parte inferior da lista de atendimento.

**Quando usar:**\
Útil para administradores e supervisores identificarem rapidamente conexões que precisam ser reconectadas.

***

### Exibir nome do canal na lista de atendimento

Quando ativada, o nome do canal ou da conexão será exibido ao lado de cada ticket.

**Exemplo:**

Se a empresa possui duas conexões WhatsApp:

* WhatsApp Vendas
* WhatsApp Suporte

O nome da conexão será mostrado na lista de tickets.

**Quando usar:**\
Recomendado para empresas que possuem vários números ou canais.

***

## Mensagens e janela de 24 horas

### Permitir envio sem template

Essa configuração está relacionada principalmente aos canais que possuem regras de janela de atendimento, como a API oficial do WhatsApp.

Quando ativada, permite enviar mensagens mesmo fora da janela de 24 horas.

Quando desativada, o sistema exibirá um aviso informando que é necessário utilizar um **template aprovado** para realizar o envio.

> **Atenção:** o funcionamento dessa regra depende do canal utilizado e das políticas da plataforma.

***

## Privacidade do telefone

### Ocultar número de telefone para os usuários

Quando ativada, o número de telefone dos contatos ficará oculto para os usuários comuns.

Somente:

* Administradores
* Supervisores Gerais

poderão visualizar o telefone completo dos contatos.

#### Ligações WavoIP

Caso a empresa utilize WavoIP, o número poderá ser exibido durante a ligação, mesmo com essa configuração ativada.

**Quando usar:**\
Útil para empresas que desejam restringir o acesso dos atendentes aos números de telefone dos clientes.

***

## Lista de contatos

### Somente administradores podem acessar a lista de contatos

Quando ativada, somente administradores poderão acessar a lista geral de contatos do sistema.

Os demais usuários não terão acesso à listagem completa.

**Quando usar:**\
Recomendado quando a empresa deseja restringir o acesso à base de contatos.

***

## Carteira de clientes

As configurações de carteira permitem controlar quais usuários podem visualizar e atender contatos vinculados a determinadas carteiras.

### Forçar atendimento via Carteira

Quando ativada, caso um contato possua uma carteira vinculada, o sistema direcionará o atendimento somente para os responsáveis pela carteira do cliente.

Nesse cenário, o Bot não será acionado.

**Exemplo:**

O cliente João pertence à carteira do vendedor Carlos.

Quando João entrar em contato, o atendimento será direcionado conforme a carteira vinculada ao cliente.

***

### Exibir contatos da carteira apenas para usuários autorizados

Quando ativada, contatos vinculados a uma carteira serão exibidos somente para:

* Responsável pela carteira
* Supervisor
* Administrador

Contatos que não possuem carteira continuarão visíveis para os demais usuários, conforme as outras permissões do sistema.

***

### Ocultar contatos sem carteira

Quando ativada, os usuários não poderão visualizar contatos que não estejam vinculados a nenhuma carteira.

**Exceção:** Supervisores e Administradores continuarão podendo visualizar esses contatos.

**Quando usar:**\
Útil para empresas que trabalham obrigatoriamente com carteira de clientes.

***

## Grupos

### Ignorar Mensagens de Grupo

Quando ativada, o sistema não abrirá tickets para mensagens recebidas de grupos.

**Exemplo:**

Se um número conectado ao sistema participar de um grupo do WhatsApp e alguém enviar uma mensagem nesse grupo, o sistema não criará um atendimento.

**Quando usar:**\
Recomendado para empresas que utilizam os números principalmente para atendimento individual.

***

### Habilitar notificações de grupos

Quando ativada, o sistema permitirá receber notificações relacionadas às mensagens de grupos.

Essa configuração pode ser utilizada quando a empresa precisa acompanhar atividades realizadas em grupos.

***

## Assinatura de mensagens

### Permitir que usuário desabilite a assinatura

Quando ativada, os usuários poderão desativar a assinatura das mensagens enviadas pelo sistema.

A assinatura pode ser utilizada para identificar qual atendente realizou o envio.

**Exemplo:**

Com assinatura:

> **João**
>
> Olá, como posso ajudar?

Sem assinatura:

> Olá, como posso ajudar?

***

## Visualização antes do atendimento

### Usuários podem espiar ticket

Essa configuração controla se os usuários podem visualizar mensagens de um ticket antes de iniciarem o atendimento.

Quando desativada, somente administradores poderão visualizar as mensagens antes do início do atendimento.

**Quando usar:**\
Útil para empresas que desejam impedir que atendentes acompanhem conversas que ainda não foram atribuídas ou iniciadas.

***

## Reabertura de tickets

### Usuários podem reabrir ticket

Quando ativada, os usuários poderão reabrir tickets que foram fechados.

Quando desativada, somente administradores poderão reabrir tickets fechados.

**Quando usar:**\
Útil para empresas que desejam centralizar o controle de reabertura de atendimentos nos administradores.

***

## Limites de Tickets

Essa seção controla quantos tickets serão carregados inicialmente na tela de atendimento.

Esses valores ajudam a controlar a quantidade de informações carregadas ao abrir a tela.

### Tickets abertos

Define a quantidade de tickets **abertos** carregados inicialmente.

**Exemplo:** `100`

Nesse caso, serão carregados inicialmente 100 tickets abertos.

***

### Tickets pendentes

Define a quantidade de tickets **pendentes** carregados inicialmente.

**Exemplo:** `100`

***

### Tickets fechados

Define a quantidade de tickets **fechados** carregados inicialmente.

**Exemplo:** `30`

> **Dica:** valores menores podem ajudar a manter a tela mais leve em empresas com grande quantidade de atendimentos.

***

## Tickets fechados

### Lista tickets fechados: exibir somente o último ticket do contato

Quando ativada, na lista de tickets fechados será exibido somente o último ticket de cada contato.

**Exemplo:**

Um cliente possui 10 tickets fechados.

Com essa opção ativada, será exibido somente o ticket fechado mais recente desse cliente.

**Quando usar:**\
Recomendado para empresas que possuem muitos tickets históricos e querem manter a lista de fechados mais organizada.

***

## Participação em tickets

### Permitir ingressar automaticamente como participante

Quando ativada, um usuário poderá entrar como colaborador em um ticket que já esteja atribuído a outro usuário sem precisar da aprovação do responsável.

**Exemplo:**

O ticket está atribuído ao atendente João.

Maria precisa ajudar João nesse atendimento.

Com essa opção ativada, Maria poderá ingressar como participante diretamente.

**Quando usar:**\
Útil para equipes que trabalham de forma colaborativa.

***

## Tickets bloqueados

### Permitir assumir tickets bloqueados

Essa opção permite disponibilizar ações específicas em tickets que estejam bloqueados por:

* Outra fila
* ChatBot
* Regras de automação

Dependendo da situação, o usuário poderá realizar ações como:

* Transferir o ticket
* Participar do ticket
* Assumir o ticket

**Quando usar:**\
Recomendado para empresas onde supervisores ou atendentes precisam intervir manualmente em atendimentos que normalmente estariam bloqueados por regras automáticas.

> **Atenção:** habilitar essa opção pode permitir que usuários intervenham em tickets que normalmente seriam controlados por filas, ChatBots ou automações. Avalie as permissões da equipe antes de ativá-la.

***

## Recomendação de configuração

Não existe uma configuração única ideal para todas as empresas.

A recomendação depende da forma como a empresa organiza os atendimentos.

#### Empresa pequena

Pode manter a maioria das opções desativadas e utilizar configurações mais simples, permitindo que os usuários tenham maior visibilidade dos atendimentos.

#### Empresa com vários setores

É recomendado utilizar recursos como:

* Visualização por filas
* Nome do canal na lista de atendimento
* Carteira de clientes
* Permissões de visualização
* Auditoria para supervisores

#### Empresa com atendimento automatizado

Pode ser interessante utilizar:

* Guia de ChatBots
* Restrição de tickets em ChatBot
* Tickets bloqueados
* Participação em tickets
* Regras de visualização

#### Empresa que trabalha com informações sensíveis

Pode utilizar:

* Ocultar número de telefone
* Tickets privados
* Restrição da lista de contatos
* Carteira de clientes
* Restrição de visualização por fila

> **Importante:** altere as configurações gradualmente e faça um teste com um usuário comum após realizar mudanças de permissão. Isso ajuda a confirmar que cada usuário está visualizando e acessando somente aquilo que deveria.
