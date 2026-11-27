# Configurações do Atendimento

As **Configurações do Atendimento** definem como o módulo de atendimento funciona para os usuários da empresa: o que aparece na tela, quem pode ver cada conversa, quais permissões os atendentes têm e como o sistema se comporta em grupos, filas, carteiras e canais oficiais.

> **Importante:** algumas opções alteram diretamente o que os usuários podem visualizar ou fazer. Revise as configurações de acordo com a organização da sua equipe antes de ativá-las.

***

## Onde encontrar

No menu do sistema, acesse **Configurações → Atendimento**.

A página abre com o título **Configurações do Atendimento** e é restrita a **administradores e supervisores**.

### Como a tela está organizada

* **Busca no topo** — digite parte do nome da opção (ex.: "grupo", "carteira", "assinar") e a página mostra apenas as opções que combinam. Durante a busca, cada aba exibe um contador com a quantidade de resultados.
* **Abas à esquerda** (no celular, um seletor) — **Exibição**, **Quem vê o quê**, **Permissões**, **Carteira**, **Grupos do WhatsApp**, **Mensagens**, **WhatsApp oficial** e **Limites**.
* **Chaves de liga/desliga** — as opções são **salvas automaticamente ao alternar**. Não existe botão "Salvar" nesta tela.
* **Selo Avançado** — aparece nas opções que exigem mais cuidado (por exemplo, auditoria e espiar ticket).
* **Aba Grupos do WhatsApp** — só aparece quando o plano da empresa libera o recurso de grupos.

> 💡 Se você não encontra uma opção, use a busca ou confira se ela está em outra aba.

***

## Exibição

Opções que mudam o que aparece na tela de atendimento.

### Habilitar guia de atendimento de Chatbots

Cria uma aba exclusiva para os atendimentos que estão com chatbot, Typebot ou IA. Ajuda a separar o atendimento humano do automático.

### Ocultar guia de atendimento sem tickets

Quando ativada, só aparecem as abas que têm tickets — a tela fica mais limpa, sem categorias vazias.

### Exibir conexões desconectadas na tela de atendimento

Mostra, na parte inferior da lista de atendimento, as conexões que estão desconectadas. Útil para identificar rapidamente um número que precisa ser reconectado.

### Exibir nome do canal na lista de atendimento

Mostra o nome da conexão (por exemplo, "WhatsApp Vendas") ao lado de cada atendimento. Recomendado para empresas com vários números ou canais.

### Exibir botão de respostas rápidas na conversa

Mostra, acima do campo de mensagem, as **respostas rápidas favoritas** (em Respostas Rápidas, a estrela de cada uma define quais aparecem ali).

Ao desativar, **nenhuma resposta é apagada**: todas continuam disponíveis ao digitar **/** na conversa.

### Ocultar número de telefone para os usuários

Esconde o telefone dos contatos dos usuários comuns. Apenas **administradores** e **supervisores gerais** veem o número completo.

> 💡 Se a empresa usa **WavoIP**, o número pode aparecer durante a ligação mesmo com esta opção ativada.

### Lista tickets fechados: exibir somente o último ticket do contato

Na lista de tickets fechados, mostra apenas o ticket fechado mais recente de cada contato. Útil para empresas com muito histórico e que querem a lista de fechados mais organizada.

***

## Quem vê o quê

Opções de privacidade e visibilidade dos atendimentos.

### Não visualizar Tickets Privados já atribuídos a outros usuários

Quando ativada, só o responsável pelo ticket privado e os administradores conseguem vê-lo.

### Ocultar Tickets Encerrados atribuídos a outros usuários

Quando ativada, o histórico de tickets **encerrados** atribuídos a outros atendentes também fica oculto.

> 💡 Esta opção **depende da anterior**: é preciso ter "Não visualizar Tickets Privados já atribuídos a outros usuários" ativada. Desativada por padrão, todos da fila podem consultar os tickets fechados, independentemente de quem atendeu.

### Não visualizar Tickets no ChatBot

Quando ativada, somente administradores veem tickets que estão interagindo com **ChatBot**, **Typebot** ou **IA**. Evita que atendentes interfiram em conversas que ainda estão sendo processadas automaticamente.

### Visualizar apenas mensagens das filas que o usuário pertence

Quando ativada, o usuário vê somente mensagens das filas das quais participa.

**Exemplo:** um usuário das filas **Vendas** e **Suporte** não vê mensagens da fila **Financeiro**.

### Somente administradores podem acessar a lista de contatos

Restringe a lista geral de contatos a administradores. Os demais usuários não têm acesso à listagem completa.

### Administradores e Supervisores em modo auditoria

Tickets acessados por administradores ou supervisores **não são marcados automaticamente como lidos**. Assim, a supervisão acompanha os atendimentos sem alterar o status de leitura do atendente responsável.

### Usuários podem espiar ticket

Permite que os usuários leiam as mensagens de um ticket **antes de iniciar o atendimento**.

Quando desativada, somente administradores conseguem ver as mensagens antes do início do atendimento.

**Quando usar:** para impedir que atendentes acompanhem conversas que ainda não foram assumidas.

***

## Permissões

### Permitir que usuário desabilite a assinatura

Quando ativada, os usuários podem desligar a assinatura das mensagens enviadas pelo sistema.

A assinatura identifica qual atendente realizou o envio:

> **João**
>
> Olá, como posso ajudar?

Sem assinatura, a mensagem sai apenas com o texto.

### Usuários podem reabrir ticket

Quando ativada, os usuários podem reabrir tickets fechados. Quando desativada, somente administradores reabrem tickets.

### Permitir ingressar automaticamente como participante

Quando ativada, um usuário pode entrar como colaborador em um ticket já atribuído a outro usuário, sem precisar da aprovação do responsável.

**Exemplo:** o ticket está com João; Maria precisa ajudar e entra como participante diretamente.

### Permitir assumir tickets bloqueados

Disponibiliza ações em tickets bloqueados por **outra fila**, **ChatBot** ou **regras de automação** — como transferir, participar ou assumir o atendimento.

> **Atenção:** esta opção permite intervenção em tickets que normalmente seriam controlados por filas, ChatBots ou automações. Avalie as permissões da equipe antes de ativá-la.

***

## Carteira

As configurações de carteira controlam quais usuários podem visualizar e atender contatos vinculados a determinadas carteiras.

### Forçar atendimento via Carteira

Quando ativada, se o contato tem uma carteira vinculada, o atendimento vai somente para os responsáveis pela carteira. Nesse cenário, **o Bot não é acionado**.

**Exemplo:** o cliente João pertence à carteira do vendedor Carlos. Quando João entrar em contato, o atendimento será direcionado conforme a carteira.

### Exibir contatos da carteira apenas para usuários autorizados

Contatos vinculados a uma carteira aparecem somente para:

* Responsável pela carteira
* Supervisor
* Administrador

Contatos sem carteira continuam visíveis conforme as outras permissões do sistema.

### Ocultar contatos sem carteira

Quando ativada, os usuários não visualizam contatos que não estejam vinculados a nenhuma carteira.

**Exceção:** supervisores e administradores continuam podendo ver esses contatos.

**Quando usar:** para empresas que trabalham obrigatoriamente com carteira de clientes.

***

## Grupos do WhatsApp

> 💡 Esta aba só aparece quando o plano da empresa libera **grupos**. Para liberar o recurso, veja [Liberar Grupos WhatsApp](../whatsapp/liberar_grupos_whatsapp.md).

### Ignorar Mensagens de Grupo

Quando ativada, o sistema **não abre tickets** para mensagens recebidas de grupos.

**Exemplo:** se um número conectado participa de um grupo e alguém envia uma mensagem, o sistema não cria atendimento.

**Quando usar:** para empresas que usam os números principalmente para atendimento individual.

### Habilitar notificações de grupos

Permite receber notificações relacionadas às mensagens de grupos. Útil para acompanhar a atividade dos grupos.

### Permitir fechar e transferir tickets de grupos para todos os usuários

Quando ativada, **usuários comuns** também podem **fechar** e **transferir** atendimentos de grupos. Afeta **somente grupos** — atendimentos individuais seguem as regras atuais.

**Sem a opção (padrão):** só administradores e supervisores encerram ou transferem o ticket de um grupo.

**Com a opção ativada:** qualquer atendente resolve o grupo, sem depender de um admin.

> 💡 **Bot em grupos:** o chatbot também pode atender grupos — veja [Atendimento em grupos](../automacao/chatbotinterno-1/README.md#atendimento-em-grupos). Se o canal estiver com **Ignorar Mensagens de Grupo** ativada, o bot não responde nos grupos, mesmo com a configuração dele habilitada.

***

## Mensagens

Opções que mudam como as mensagens aparecem na conversa.

### Agrupar mensagens de tickets diferentes

Quando ativada, as mensagens de diferentes tickets do mesmo contato aparecem como se fossem do mesmo atendimento — útil para ver todo o histórico do contato de forma unificada.

### Reações aparecem como resposta

As reações feitas nas mensagens também aparecem no atendimento como uma mensagem de resposta, facilitando identificar reações de contatos e usuários.

### Pacote de Arquivos no Chat

Quando o cliente ou o atendente envia **duas ou mais mídias em sequência** (fotos, PDFs, vídeos etc.), a conversa mostra um **cartão de download** no lugar de vários arquivos soltos:

* **Pacote de Arquivos** — informa quantos arquivos foram enviados e os nomes dos primeiros;
* botão **"Baixar todos em ZIP"** — salva tudo em um único arquivo compactado.

**Ligada (padrão):** o cartão aparece e a equipe baixa todas as mídias de uma vez.

**Desligada:** o cartão deixa de existir e cada arquivo volta a aparecer sozinho, com o próprio botão de baixar. Nada é perdido.

### Marcador de mensagens não lidas

Ao abrir um atendimento com **mensagens novas do cliente**, a conversa mostra uma linha **"Mensagens não lidas"** antes da primeira mensagem que você ainda não viu — e rola direto para esse ponto, em vez de ir para o fim.

**Ligada (padrão):**

* abrir um atendimento com mensagens novas → a conversa para na linha "Mensagens não lidas";
* mensagem nova chegando com a conversa aberta → a primeira também recebe o marcador.

**Desligada:** sem a linha de marcador e a conversa sempre rola para o fim.

**Quando usar:** para equipes com muitas mensagens, que precisam ver **a partir de onde** pararam de ler. Desligue se preferir abrir sempre na mensagem mais recente.

### Avisar sobre palavra monitorada

Quando uma **palavra monitorada** aparece em uma conversa, o sistema avisa **administradores e supervisores** na hora.

Desligada, a ocorrência continua sendo registrada no relatório — apenas o aviso imediato deixa de aparecer.

### Alinhar mensagens por remetente em grupos

Em tickets de grupo, alinha as mensagens **do atendente logado à direita** e as **dos demais atendentes à esquerda**. Assim fica fácil saber quem da equipe escreveu cada mensagem.

* **Ligada:** cada atendente vê as próprias mensagens à direita e as dos colegas à esquerda.
* **Desligada (padrão):** todo o conteúdo enviado pela equipe aparece à direita, independentemente de quem escreveu.
* **Não afeta** canais oficiais (WABA/Hub) nem tickets individuais.

***

## WhatsApp oficial

Opções relacionadas à janela de atendimento de 24 horas da API oficial do WhatsApp (WABA/Hub).

### Permitir envio sem template

Quando ativada, permite enviar mensagens mesmo **fora da janela de 24 horas**.

Quando desativada, o sistema avisa que é necessário usar um **template aprovado** para realizar o envio.

> **Atenção:** o funcionamento dessa regra depende do canal utilizado e das políticas da plataforma.

### Concatenador de Mensagens

Junta **mensagens de texto enviadas em sequência pelo atendente** em uma única mensagem, para **reduzir a quantidade de mensagens cobradas pela API Oficial**.

Ao ativar, você escolhe:

* o **Modo** — **Simples** ou **Com IA**;
* quantos **segundos** o sistema aguarda antes de enviar (**2 a 15**).

Abaixo da opção, o próprio sistema mostra a **"Economia de mensagens"** do mês: mensagens agrupadas, economizadas e o percentual.

> 📄 Guia completo: [Concatenador de Mensagens](../../canais-disponiveis/api-oficial/concatenador-de-mensagens.md).

### Modo alternativo (chat externo por link)

Permite que o cliente continue o atendimento (WABA/Hub WhatsApp) por um **link de chat parecido com o WhatsApp**, sem usar mensagem oficial.

Ao ativar, você pode:

* **pedir uma senha de acesso** (os 4 últimos números do telefone do cliente);
* personalizar o **texto da mensagem** do link;
* personalizar o **texto do botão** do link.

> 📄 Guia completo: [Chat externo por link](../../canais-disponiveis/api-oficial/chat-externo-por-link.md).

***

## Limites

Controla quantos tickets são carregados inicialmente na tela de atendimento. Valores menores deixam a tela mais leve em empresas com grande volume de atendimentos.

### Tickets abertos

Quantidade de tickets **abertos** carregados inicialmente.

**Exemplo:** `100` — carrega inicialmente 100 tickets abertos.

### Tickets pendentes

Quantidade de tickets **pendentes** carregados inicialmente.

**Exemplo:** `100`.

### Tickets fechados

Quantidade de tickets **fechados** carregados inicialmente.

**Exemplo:** `30`.

> **Dica:** se a tela demora para abrir, reduza esses valores. As conversas continuam disponíveis — basta carregar mais.

***

## Recomendação de configuração

Não existe uma configuração única ideal para todas as empresas. A recomendação depende de como a empresa organiza os atendimentos.

#### Empresa pequena

Pode manter a maioria das opções desativadas e usar configurações mais simples, permitindo que os usuários tenham maior visibilidade dos atendimentos.

#### Empresa com vários setores

É recomendado utilizar:

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

> **Importante:** altere as configurações gradualmente e faça um teste com um usuário comum após mudanças de permissão. Isso confirma que cada usuário vê e acessa somente o que deveria.

> 💡 Para entender como cada opção aparece no dia a dia, veja a [Tela Atendimento](../atendimento/tela-atendimento.md).
