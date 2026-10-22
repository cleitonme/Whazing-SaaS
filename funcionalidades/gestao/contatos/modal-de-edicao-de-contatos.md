---
description: Guia simples do modal de cadastro e edição de contatos no WHAZING
icon: address-card
---

# Modal de Edição de Contatos

O **modal de contatos** é a janela que abre quando você cadastra ou edita um contato no sistema. É nela que ficam todas as informações do cliente: nome, telefone, e-mail, etiquetas, carteira, dados de CRM, anotações e muito mais — tudo organizado em **abas** para facilitar a navegação.

> 💡 **Dica:** o título da janela muda sozinho — **"Adicionar contato"** quando é um cadastro novo e **"Editar contato"** quando você abriu um contato que já existe. No topo também aparece a **foto do perfil** (quando o contato tem uma) e o nome dele.

## 🕹️ Como navegar nas abas

* 💻 **Computador e tablet:** as abas aparecem na parte de cima do modal, em uma linha. Se houver muitas abas, surgem **setas ( ← → )** nas bordas para deslizar e ver todas.
* 📱 **Celular:** a linha de abas vira um **seletor (menu de lista)** na parte de cima. Toque nele e escolha a aba que quer abrir.

As abas que aparecem variam: algumas só existem depois que o contato já está salvo (anotações, atendimentos etc.) e outras só aparecem em **grupos** ou para administradores/supervisores.

## 🚪 O que significam os ícones no topo

Quando o contato já conversou com a empresa, o cabeçalho mostra os **logotipos dos canais** por onde ele chegou:

| Ícone | Canal |
| ----- | ----- |
| WhatsApp | Número de WhatsApp |
| Telegram | Telegram |
| Instagram | Instagram (direto ou via HUB) |
| Facebook / Messenger | Messenger |
| WebChat (ou outro nome de canal) | Chat do site ou outro canal do HUB |

Assim você identifica de onde vem o lead sem precisar abrir a aba de dados.

***

## 📋 Aba **Dados do contato**

É a aba principal, onde ficam as informações básicas:

* 🌱 **Origem do lead:** uma faixa no topo mostra por **qual canal** o contato foi cadastrado (ex.: "WhatsApp da Loja"), com a cor configurada daquele canal.
* 👤 **Nome:** obrigatório (até 50 caracteres).
* 📞 **Número:** campo de telefone com bandeira do país (padrão Brasil), que **formata o número automaticamente**. Em grupos, esse campo vira o **ID do grupo** (somente leitura) e o sistema mostra um código `...@g.us` para usar o grupo via API.
* ✉️ **E-mail:** validado pelo sistema; se digitar um e-mail inválido, o aviso aparece no campo.
* 🧾 **Documento (CPF/CNPJ):** usado pelos **gateways de cobrança** (Asaas, Mercado Pago etc.). O sistema verifica o dígito verificador e salva só os números.
* ✔️ **Validar WhatsApp:** botão de ativação que indica que o número tem WhatsApp válido. Em grupos, ele fica desativado automaticamente.
* Extras que aparecem **durante a edição** (não no cadastro): **@username** (Telegram/Instagram) e **código do país**.

### 🔒 Número escondido (configuração HideNumber)

Se o administrador ativou a opção **HideNumber** nas configurações, o campo de telefone fica **escondido dos usuários comuns**. Só administradores e supervisores continuam vendo/editando o número.

### 🤖 Preferências e automações

Na mesma aba, logo abaixo, ficam os botões de ativação que controlam o comportamento do sistema **para aquele contato**:

| Opção | Para que serve |
| ----- | -------------- |
| **Desabilitar bot** | Impede que o chatbot responda a esse contato (só admin/supervisor) |
| **Integrações desabilitadas** | Desliga integrações (Typebot, N8N etc.) para o contato |
| **Desabilitar campanha** | Tira o contato das campanhas de WhatsApp |
| **Desabilitar campanha de e-mail** | Tira o contato das campanhas por e-mail |
| **Desabilitar CRM (Kanban)** | Não mostra o contato no quadro Kanban |
| **Ignorar contato** | Faz o sistema tratar o contato como "ignorado" (só admin/supervisor) |
| **Desabilitar avaliação** | Não envia a pesquisa de avaliação ao encerrar (só admin/supervisor) |
| **Desabilitar transcrição** | Não transcreve os áudios enviados por esse contato |

***

## 📊 Aba **CRM**

Conecta o contato a um quadro do CRM (Kanban):

* 🗂️ **Quadro (Kanban):** selecione em qual coluna/quadro o contato está — a lista mostra a cor de cada quadro.
* 📅 **Data:** prazo ou data de referência.
* 💰 **Valor:** campo de dinheiro **na moeda conforme o idioma** do sistema (Real no português, dólar em inglês/espanhol).
* 💬 **Comentário/observações:** texto livre para anotações de venda.

***

## 🃏 Aba **KanbanPro**

Mostra os **cards do Kanban Pro** ligados a esse contato. Só aparece para contatos **já cadastrados** (não no cadastro novo). Detalhes em [Kanban Pro](../../kanban-pro/README.md).

***

## 👛 Aba **Carteira**

Define o **responsável** pelo contato:

* Toque no campo e escolha um **usuário** — a lista mostra a **foto do atendente** e uma bolinha indicando se ele está **online ou offline** no momento.
* Pode-se escolher **apenas 1 responsável** por vez.

> 💡 Quando a carteira está ativa, os atendimentos desse contato vão **direto para o responsável**.

***

## 🏷️ Aba **Etiquetas**

Classifique o contato com **rótulos coloridos** (ex.: VIP, Pendente):

* Pode escolher **quantas etiquetas quiser** — cada uma aparece com sua cor.
* Se nenhuma etiqueta estiver cadastrada, o aviso "Sem opções" aparece na lista.
* Em caso de dúvida, veja o [Glossário — Etiqueta](../../../glossario.md).

***

## ℹ️ Aba **Informações adicionais**

Campos livres para qualquer informação extra do cliente (ex.: "empresa", "cidade", "aniversário"). Cada item tem um **nome** e um **valor**, e você pode adicionar ou remover quantos quiser. *(É aqui que as colunas extras da [importação de contatos](importarcontatos.md) ficam salvas.)*

***

## 📝 Aba **Anotações**

Histórico de notas sobre o contato:

* Vê todas as anotações já criadas nos atendimentos.
* 💬 **Ver chat:** abre a conversa onde a anotação foi criada.
* 🗑️ **Excluir:** apaga a nota, mas primeiro o sistema pede **confirmação** ("Tem certeza?").

***

## ⏰ Aba **Mensagens agendadas**

Mostra as mensagens **pendentes** que serão enviadas a esse contato no futuro:

* Lista os agendamentos com status **PENDENTE**.
* 🗑️ É possível **excluir** um agendamento — com confirmação antes de apagar.
* Quer saber como criar? Veja a doc de agendamentos/[Agenda](../../agenda/README.md).

***

## 🎧 Aba **Atendimentos**

Histórico completo de **tickets** do contato (todas as conversas anteriores):

* Mostra cada atendimento com seu protocolo/situação.
* 🔎 **Visualizar chat:** abre a conversa completa, igual à tela de atendimento, sem sair do modal.

***

## 🤖 Aba **IA**

Registra as **ações que a Inteligência Artificial** já realizou com esse contato (respostas automáticas, classificações etc. — dependendo dos recursos de IA habilitados). Útil para auditar o que o robô falou ao cliente.

***

## 👥 Aba **Participantes** (só para grupos)

Aparece apenas quando o contato é um **grupo** e você é **administrador ou supervisor** (e o grupo está em um canal WhatsApp):

* Lista todas as pessoas que participam do grupo (nome, número, LID).
* 🔄 **Atualizar:** busca novamente a lista mais recente.
* 📤 **Exportar Excel:** baixa a lista dos participantes em planilha `.xlsx` (o nome do arquivo leva o nome do grupo).

***

## 💾 Salvando o contato

1. Clique em **Salvar** no rodapé.
2. O sistema verifica os campos obrigatórios — se faltar o **nome** ou o **e-mail** for inválido, aparece um aviso em cima e nada é salvo.
3. Com tudo certo, o contato é gravado junto com **etiquetas** e **quadro CRM**, e uma notificação confirma a ação.
4. **Cancelar** fecha o modal **sem salvar** nada.

> ⚠️ **Erros comuns ao salvar:** "contato já existe" (o número já está cadastrado), "nenhum canal conectado" (não há WhatsApp/conexão ativa) ou "campo duplicado" (duas informações adicionais com o mesmo nome). Em grupos, cuidar do aviso de contato duplicado pelo LID.

***

## ✅ Resumo rápido

| Quero... | Onde |
| -------- | ---- |
| Cadastrar/editar nome, telefone, e-mail | **Dados do contato** |
| Bloquear bot / campanhas / IA para um cliente | **Dados do contato → Preferências** |
| Colocar o contato em um Kanban de vendas | **CRM** |
| Ver cards do Kanban Pro | **KanbanPro** |
| Definir responsável | **Carteira** |
| Etiquetar/classificar | **Etiquetas** |
| Informações extras | **Informações adicionais** |
| Ver o que já foi anotado | **Anotações** |
| Mensagens que serão enviadas depois | **Mensagens agendadas** |
| Histórico de conversas | **Atendimentos** |
| O que a IA fez | **IA** |
| Ver quem está no grupo | **Participantes** |
