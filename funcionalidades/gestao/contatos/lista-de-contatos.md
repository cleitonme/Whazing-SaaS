---
description: Como usar a tela de Contatos do WHAZING — busca, filtros, colunas e ações
icon: list
---

# Lista de Contatos

A tela **Contatos** mostra, em uma tabela, todos os clientes cadastrados na sua empresa. É o ponto de partida para buscar um contato, abrir uma conversa, editar os dados, importar uma lista ou organizar vários contatos de uma vez.

> 💡 **Dica:** o número ao lado do título **Contatos** é a quantidade total de contatos encontrados com os filtros atuais.

***

## 🧭 Como chegar

No menu lateral, clique em **Contatos**. A página abre com a lista já carregada.

> 🔐 Em empresas que ativaram a restrição de acesso à tela de contatos, somente **administradores** e **supervisores** conseguem abrir esta página. Os demais perfis veem um aviso de acesso negado.

***

## 🔎 Busca e filtros

Na parte de cima da tela ficam os filtros. Todos podem ser combinados.

| Campo | O que faz |
| ----- | --------- |
| **Localizar** | Busca por **nome** ou **número** do contato. A lista é atualizada enquanto você digita. |
| **Filtrar por etiqueta** | Mostra apenas contatos com a etiqueta escolhida. A lista exibe a cor de cada etiqueta; se não houver nenhuma cadastrada, aparece “Sem opções”. |
| **Filtrar por Carteira** | Mostra apenas contatos de um responsável. A lista traz a foto do atendente. |
| **Canais** | Mostra apenas contatos de um canal específico (ex.: um número de WhatsApp). |
| **Localize Informações Adicionais** | Procura dentro das **informações adicionais** do contato (empresa, cidade, cargo etc.). |
| **Filtros adicionais** | Disponível para **administradores e supervisores**. Permite marcar situações como desabilitar bot, ignorar contato, desabilitar avaliação, integrações desabilitadas, desabilitar campanha, desabilitar campanha de e-mail, desabilitar CRM (Kanban) e desabilitar transcrição — além de **Apenas Grupos** e **Apenas Contatos**. |

* **Apenas Grupos** e **Apenas Contatos** não podem ficar marcados ao mesmo tempo: ao escolher um, o outro é removido.
* Cada filtro ativo aparece como um **chip** abaixo dos campos. Clique no **x** do chip para removê-lo ou use **Limpar filtros** para limpar tudo de uma vez.

***

## 🧱 Colunas da tabela

Algumas colunas são fixas e outras podem ser ligadas/desligadas:

* **Sempre visíveis:** foto do contato, **Nome**, **WhatsApp** e a coluna de **ações**.
* **Opcionais:** Carteira, Etiquetas, Email, BOT, Campanha, Tipo (Grupo ou Contato), Canal e Data de Cadastro.

Clique em **Colunas** e marque ou desmarque as opções desejadas. A escolha fica salva **para o seu usuário** — cada pessoa pode montar a própria visualização.

> 🔒 Se a opção **HideNumber** estiver ativa nas configurações, usuários que não são administradores nem supervisores veem o número **mascarado** na lista.

***

## ⚡ Ações de cada contato

Na coluna de ações, cada ícone faz uma coisa:

| Ícone | Ação |
| ----- | ---- |
| WhatsApp | Abre (ou inicia) o atendimento pelo WhatsApp. Aparece quando o contato tem número ou identificador LID. |
| Telegram | Abre o atendimento pelo Telegram, quando o contato tem Telegram. |
| Instagram | Abre o atendimento pelo Instagram, quando o contato veio desse canal. |
| Facebook / Messenger | Abre o atendimento pelo Messenger, quando o contato veio desse canal. |
| WebChat | Indica que o contato veio do chat do site. |
| SMS | Abre o atendimento por SMS. Aparece apenas se a empresa tiver um canal de SMS. |
| E-mail | Abre o atendimento por e-mail. Aparece quando o contato tem e-mail cadastrado — inclusive os contatos importados **só com e-mail**. |
| 📁 Pasta | Abre os [Arquivos do Contato](arquivos-do-contato.md). |
| 🖼️ Imagens | Abre o [Histórico de Mídias](historico-de-midias-por-contato.md). |
| ✏️ Lápis | Abre o [Modal de Edição de Contatos](modal-de-edicao-de-contatos.md). |
| 🗑️ Lixeira | Exclui o contato. Disponível apenas para administradores e supervisores, e o sistema pede confirmação. |

> 💡 Ao clicar em um dos canais, o sistema abre o atendimento. Se já existir uma conversa em andamento com esse contato, ele avisa e pergunta se você quer abrir a conversa existente.

***

## 📤 Menu Importar / Exportar

O botão **Importar / Exportar** reúne as rotinas de entrada e saída de contatos. Alguns itens aparecem apenas para **administradores**.

| Item | Para que serve | Quem vê |
| ---- | -------------- | ------- |
| **Sincronizar Contatos** | Lê a agenda de um WhatsApp conectado e traz os contatos para o sistema. Permite escolher o canal e já aplicar etiquetas, carteira, Kanban ou Kanban Pro. | Administradores |
| **Sincronizar Grupos** | Atualiza a lista de grupos dos canais de WhatsApp. Pede confirmação antes de começar e pode demorar. | Administradores |
| **Importar do Grupo** | Importa os participantes de um grupo. Escolha o canal, o grupo e, se quiser, etiquetas, carteira, Kanban e Kanban Pro. Ao final, mostra novos contatos, atualizados e erros. | Administradores |
| **Importar** | Abre a importação por planilha CSV. Veja o passo a passo em [Importar Contatos](importarcontatos.md). | Quem tem acesso à tela |
| **Exportar** | Gera uma planilha `.xlsx` com os contatos **conforme os filtros atuais** e baixa o arquivo. | Administradores |

> 💡 A importação por planilha é o único caminho para cadastrar um contato **somente com e-mail**, sem telefone.

***

## ☑️ Ações em massa

Disponíveis para **administradores e supervisores**. Marque a caixa ao lado dos contatos desejados (ou a caixa do cabeçalho para selecionar a página) e use o botão **Ações em massa**.

* O aviso azul mostra quantos contatos estão selecionados e oferece **Selecionar todos os contatos filtrados** — útil quando a lista tem várias páginas.
* **Limpar seleção** desmarca tudo.

As ações disponíveis são:

| Ação | O que faz |
| ---- | --------- |
| **Adicionar etiqueta** / **Remover etiqueta** | Aplica ou retira uma etiqueta dos contatos selecionados. |
| **Definir carteira** / **Remover carteira** | Atribui um responsável ou deixa os contatos sem carteira. |
| **Definir Kanban** / **Remover do Kanban** | Move os contatos para uma etapa do Kanban ou os retira do funil. |
| **Definir Kanban Pro** / **Remover do Kanban Pro** | Cria/move os cards em um quadro e etapa do Kanban Pro, ou remove os cards. |
| **Validar número WhatsApp** | Confere os números no WhatsApp e corrige número, LID e foto quando o contato existe. Limitado a **300 contatos** por vez, porque a consulta é feita um a um. |
| **Atualizar foto do contato** | Busca novamente a foto de perfil no WhatsApp. Também limitado a **300 contatos**. |
| **Desativar bot** | Impede o chatbot de responder a esses contatos. |
| **Desativar campanhas** | Tira os contatos das campanhas. |
| **Desativar Kanban** | Remove os contatos do Kanban. |
| **Excluir contatos** | Apaga os contatos selecionados, com confirmação. |

> ⚠️ As ações em massa pedem confirmação e mostram o resultado ao final. Revise a seleção antes de aplicar.

***

## 🧾 Ordem e carregamento da lista

A lista carrega os contatos conforme você rola a página (não é preciso clicar em “próxima página”). O rodapé mostra quantos contatos já foram carregados em relação ao total encontrado.

Quando um contato é criado, editado ou excluído em outra aba, a lista se atualiza sozinha.

***

## ✅ Resumo rápido

| Quero... | Onde |
| -------- | ---- |
| Encontrar um contato | Campo **Localizar** |
| Ver só contatos de uma etiqueta, carteira ou canal | Filtros da parte superior |
| Procurar por empresa ou cidade | **Localize Informações Adicionais** |
| Abrir uma conversa | Ícone do canal na coluna de ações |
| Editar o cadastro | Ícone de lápis |
| Ver arquivos ou mídias | Ícones de pasta e de imagens |
| Importar uma planilha | **Importar / Exportar → Importar** |
| Organizar vários contatos de uma vez | **Ações em massa** |
| Escolher quais colunas aparecem | Botão **Colunas** |
