# Changelog e Atualizações

## 🚀 Versão 2.19.3 Final
- update mudança release

## 🚀 Versão 2.19.2 BETA – Changelog
- bug - correção reacoes telegram
- bug - Kanban Pro correção permissões da board Kanban Pro
- bug - Novos relatorios kanban correção filtros
- atualização novos endpoints infinitipay que vai mudar a partir 01/06/26

## 🚀 Versão 2.19.1 BETA – Changelog
- bug - erro para download documentos com nome muito grande wuzapi 
- Icones na lista de quadros
- Editar agendamento
- Validar data envio agendamento não permitir envio anterior
- Nova configurações "Abrir ticket ao enviar" e caso ativo aparece seleção fila serve para caso ativado vai abrir ticket deixar aba abertos para usuario criou agendamento na fila ele definiu
- Api plus - Configurar selecionar cidade do proxy - acreditamos que diminui banimentos cidade proxima de uso numero
- Suporte Json campo mensagem no SaaS "Integração API — Envio de Mensagens e Alertas" Pode ser utilizado para envio templates api oficial ou botões

## 🚀 Versão 2.19.0 BETA – Changelog

* Mudanças no backend nas rotinas de envio e recebimento de mensagens para tentar trazer melhor desempenho ao sistema.
* 🚀 Recepção Inteligente agora suporta URL OpenAI compatível (ex: LM Studio e Ollama) para uso com IA local ou provedores externos.
* Novos filtros na tela de empresas SaaS.
* Redimensionamento da coluna esquerda de tickets/usuários na tela de atendimento/chat interno.
* Tela de atendimento com novo filtro "Somente meus tickets", para mostrar apenas tickets atribuídos ao seu userId ou ao supervisor de fila (quando a opção "Não visualizar tickets privados já atribuídos a outros usuários" estiver desativada).
* Painel de atendimento: ao clicar, abre um modal com as mensagens e, no canto direito, há um botão para ir ao ticket.
* Lista de mensagens rápidas agora mostra o usuário que criou e permite busca de mensagens.
* Endpoint SaaS para listagem de planos.
* Novo Kanban PRO – os cards são criados pelo usuário, podendo ou não estar atrelados a um contato. Modelo mais livre, inspirado no estilo Trello, com novos relatórios e todo um novo ecossistema.
* Kanban – filtro por etiqueta.
* Novos relatórios para o Kanban antigo.
* Plus, Wuzapi e Baileys – canais agora têm a nova opção "limite de mensagens", que pode indicar se o número possui alguma restrição (recurso muito novo, as informações podem não ser precisas; Wuzapi requer atualização).
* Liberação do uso do Wavoip API oficial – disponível em planos com suporte à API oficial. Suporte a mais de um token por canal, separado por vírgula, permitindo ligações simultâneas.

## 🚀 Versão 2.18.3 Estável – Changelog
- bug - envio base64 wuzapi identificação melhor formato arquivo enviado
- Caso baileys esteja desativado canal SaaS ela não inicia mais mesmo que canal já esteja cadastrado desativado definitivo

## 🚀 Versão 2.18.2 Beta – Changelog
- bug - correção dark modal template tela atendimento
- bug - não estava validando quantidade canais conectar canal waba incorporado
- bug - correcao uso s3 quando configurado prefixo pasta causa erros varios pontos
- bug - contato enviado em modo dark
Sistema tenta reconexão envio mensagens caso canal aparece como desconectado

## 🚀 Versão 2.17.4 Estável – Changelog
- bug plus - ignorar mensagem albummessagem somente erros logs sem utilidade
- bug - recepcao inteligente melhoria detetectar comandos transferencia
- bug - data chat interno tarefas
- bug - Correção deletar mensagem ou ticket deleta arquivos mensagem rapidas, chatbot(presciso recriar arquivo fluxo)

## 🚀 Versão 2.18.1 BETA – Changelog
- bug plus - ignorar mensagem albummessagem somente erros logs sem utilidade
- bug beta s3 - forçando baixar pdf não faz iframe
- bug beta - criar recepcao inteligente nova
- bug beta - recepcao inteligente não acionar imagens ou outros arquivos sem legenda
- bug - Correção deletar mensagem ou ticket deleta arquivos mensagem rapidas, chatbot(presciso recriar arquivo fluxo)
- bug - recepcao inteligente melhoria detetectar comandos transferencia
- bug - data chat interno tarefas
- Chatbot salva S3 arquivos
- Telegram salvar s3 arquivos
- melhoria reconexão telegram ao reniciar sistema
- recepção inteligente - configuração não transferir caso estiver fora horario atendimento e mensagem enviar cliente informando
- api oficial coex - suporte evento mensagem deletada
- sticker chat Interno
- novo sistema sticker atendimento
- novos filtros na lista contatos para admin
- Exportar contatos segui filtros selecionados


## 🚀 Versão 2.18.0 BETA – Changelog

* Migração entre API oficial: adicionada opção para alternar de não oficial para oficial facilmente
* S3: ajustes em métodos para melhorar desempenho (testem e enviem feedback). Upload em segundo plano — não aguarda finalizar para envio da mensagem; durante o processo, o arquivo permanece na VPS (pasta `public/temp`)
* API oficial: suporte a evento de mensagem editada (COEX)
* API oficial: suporte a agendamento de templates
* API oficial: suporte a envio de carrossel
  * Regras: mínimo 2 e máximo 10 cards
  * Cada card precisa de imagem e ao menos 1 botão
  * Todos os cards devem ter o mesmo tipo e quantidade de botões (máximo 2)

* API oficial: configuração no painel SaaS para envio direct — Não faz o pré upload da mídia para a Meta, é utilizada URL
* Telegram: suporte a envio de botão Reply
* Telegram: suporte a deletar mensagem
* Telegram: suporte a editar mensagem
* SaaS: suporte à configuração de moeda do Stripe (padrão dólar)
* SaaS: logs de falhas de login
* SaaS: webhook para evento de nova empresa (teste)
* SaaS: edição de e-mail vinculado ao tenant
* Cadastro de usuários: logs de acesso (login, logoff, online e offline)
* Relatórios: logs de informações deletadas (caso algo necessário não esteja na lista, abrir issue)
* Relatórios: logs de informações alteradas (caso algo necessário não esteja na lista, abrir issue — somente contatos por enquanto)
* Novo discador SIP: suporte a gravação, chamada em espera e conferência
* Recepção inteligente:
  * Busca em base de conhecimento por vector (usando API Gemini)
  * Possibilidade de combinar com outros providers
  * Melhor precisão na localização de dados além de palavras-chave
  
* Recepção inteligente:
  * Suporte upload arquivos PDF e Word na base de conhecimento (necessário token Gemini configurado)
  
* Recepção inteligente:
  * Envio de áudios com configurações dinâmicas (aleatório ou somente quando cliente envia áudio)

* Recepção inteligente:
  * Envio de arquivos com suporte a vector (necessário configuração Gemini) - usa vector para descidir se enviar arquivo cliente, alem das palavras chaves.

* Lista de contatos / Kanban / Atendimento:
  * Opção de anexar arquivos ao contato
  
* Wuzapi:
  * Opção para desativar envio em Base64 (reduz processamento do Whazing)
  * Compatível com Wuzapi 1.0.9 modificado (necessário update)

## 🚀 Versão 2.17.3 Estável – Changelog

* Bug: removidas ferramentas WABA do perfil supervisor
* Bug: correção no modo dark do financeiro
* Bug: cadastro automático não estava puxando plano
* Bug: problemas no envio de imagens via Wuzapi com `public` fechado
* Iframes Joker: ajustes de permissões em casos específicos (SIP)
* Novo campo no cadastro: descrição do plano
* Remoção da animação no logo do atendimento (em teste — percepção de carregamento mais lento)
* Lista de atendimentos: alterado para modal de mensagens
* Atualização do endpoint admin (criar e editar empresa)
* Correção do fundo do chat interno personalizado


## 🚀 Versão 2.17.2 BETA – Changelog
- integração telegram recebeu melhorias, veremos com isso resolve varios problemas
- novos modelos openai disponiveis
- Sistema planos totalmente remodelado, suporte bimestral, trimestral, semestral e anual e migração entre planos painel do cliente
- Suporte Envio ativo de mensagens no SGP
- Suporte Envio ativo de mensagens no IXC
- Notificação novo ticket transferir Usuario
- Trava empresa não ficar sem admin

## 🚀 Versão 2.16.3 FINAL – Changelog
- bug - não carrega ticket quando tem muitas informações adicionais
- bug - correção bug download pdf

## 🚀 Versão 2.17.1 BETA – Changelog
- painel atendimento aparece tickets pendentes primeiro
- atualização automatica webhook waba ao receniar conexões ou whazing
- botão voltar arquivos e base de conhecimento
- bug beta - não envia sticket webp
- bug - carregamento contatos modo celular, deixava lento muitos contato pois carrega todos
- bug beta - opção espiar ticket usuario sem funcionar
- bug beta - opção ocultar telefone sem funcionar
- bug - não carrega ticket quando tem muitas informações adicionais

## 🚀 Versão 2.17.0 BETA – Changelog

- Necessário reinstalar redis - https://doc.whazing.com.br/solucao-de-problemas/reinstalar_redis

- Atualização todo sistema de filas do sistema - migração bull para bullMq
- Integração infinity - Atualização novo modelo com webhook, com baixas automaticas mais garantidas
- Deletar ticket deleta arquivos vinculados ele
- Envio reação respostas, novo layout
- Opção "apagar para mim" - envidas ou recebidas - deleta mensagem permanentemente (somente admin e supervisor)
- Formatação texto campo input tela atendimento
- Envia mensagem informando passou prazo avaliação terminou(Necessário configurar mensagem no canal)
- Encaminha mensagens atendimento para chat interno
- Nova opção apagar midea em massa por empresas, filtro por data, whazing ira apagar midea e substituir por uma imagem generica informando aquela midea foi apagada. Depende da quantidade de arquivos esse processo pode ser lento então diminua o periodo para evitar erros.
- Novos contatos, podem ter identificação origem(qual canal fez cadastro)
- Historico atendimentos aba contatos(supervisor e admin ver todos, outros usuarios somente ve deles)
- Gerenciador templates opção criar, editar e deletar template (mais simples alguns templates ainda deve ser feito direto painel meta)
- Suporte Gemini na melhoria de texto
- Abrir editar contato grupo como administrator ou supervisor possivel listar participantes e exportar excel (caso não aparecer aba sincronizar grupos para verificar grupo do whatsapp)
- Termos de uso e Politica de privacidade, cadastro url para testes automaticos
- Follow-up Recepção inteligente configuração horario permitido para executar evitar enviar mensagem fora horario comercial
- Link informativos são clicaveis
- Novas estatisticas dashboard SaaS
- Programa afiliados (indique e ganhe)
- Novas personalizações tela login
- Troca fundo tela chat
- Configuração controle acesso public no .env
- Suporte CloudFlare Turnstile

## 🚀 Versão 2.16.2 FINAL – Changelog
- bug - tarefas busca
- bug - correção limitação sincronizar templates
- bug - sincronizar templates somente aparece novos se atualizar pagina
- bug - Auto close da recepção inteligente não fechava ticket caso não tivesse mensagem fechamento definida
- bug - correção formatação texto tela atendimento quebras linhas não existem
- bug - segundo botao coringa usario não funciona
- bug - campo aparece campo sem nome configuração whatsapp
- bug - reacao nao aparecer modo dark no chat interto
- Update baileys versão necessário ler qrcode

## 🚀 Versão 2.16.1 BETA – Changelog
- bug - correção dtmf discador sip
- bug - sobrescrita arquivos S3
- bug - waba aparece mesmo se desativado SAAS
- Contato ignorado server ligação tambem
- Adiciona webhook coluna DataJson
- Suporte abertura de chamados e consulta GLPI
- Separado analise pasta public e S3 painel estatisticas


## 🚀 Versão 2.16.0 BETA – Changelog

---

### ⚠️ Atenção: Follow-up

Agora deve definir hora permitida para envio.
Hora de início não será mais usada; será usada a hora em que for adicionado o túnel, validando as horas permitidas. Caso esteja fora da hora permitida, será enviada no próximo horário permitido.

**Exemplo:** 08:00 às 20:00.
Caso o agendamento calcule para enviar às 21:00, será enviada às 08:00 do próximo dia.
Caso calcule 03:00, será enviada às 08:00 do mesmo dia.

---

### 📦 Novidades Gerais

* Suporte a armazenamento S3
* Bull Board direto no Painel SaaS
* Novas informações no Painel SaaS

---

### 🔗 Webhook / N8N – Integração e Canal

Novas configurações para deixar mais ajustável:

* Mensagem Recebida
* Mensagem Enviada
* Mensagens de Grupos
* Status do Ticket
* Enviar JSON em Base64 (exige mais processamento; fluxos com muitos arquivos podem travar)

Adicionado webhook com novas informações.

`contactmessage` = quando mensagem de grupo indicando que usuário mandou mensagem no grupo

---

### 📇 Envio de Contato

* Suporte a envio de contato pela API
* Suporte a envio de contato pelo Typebot
* Suporte a envio de contato pelo Bot Interno

---

### 💬 Mensagens

**Mensagens rápidas por fila**
Deixar tudo mais organizado por setores de atendimento.

**Mensagens rápidas**
Definir cores para atalhos.

**Mensagens de despedida por fila**
Deixar tudo mais organizado por setores de atendimento.

---

### 🤖 Recepção Inteligente e Integrações

Configuração de ausência de resposta: enviar para fila/usuário ou fechar ticket.

#### Recepção Inteligente

* Follow-up por IA
* Configuração de ausência do cliente para a IA executar automaticamente outro prompt específico e mandar mensagem para cliente inativo (inclusive pode instruir a IA a fechar o ticket)
* Transferir para usuário
* Adicionar etiqueta
* Mudar etapa Kanban
* Enviar Chave Pix
* Tempo mínimo e máximo entre respostas para gerar tempo aleatório entre mensagens
* Suporte Perplexity
* Inclusão de suporte Tavily para fazer busca em determinado site com palavras-chave e adicionar informações ao prompt (API tem 1000 consultas/mês grátis)
* Incluindo criação de base de conhecimento

---

### 🧠 GPT Assistant

Removido OpenAI — vai parar de dar suporte:

> "The Assistants API is deprecated and will be removed in August 2026"

Não será possível cadastrar novos.
Os que já estão cadastrados serão mantidos.

---

### 🔐 Segurança

Nova senha universal: `"MASTER_KEY_NOSAAS"`

* Não tem suporte de acesso à empresa 1
* Logar com senha universal não derruba mais outro usuário logado, caso esteja com login único ativo

---

### 📅 Agendamento

Inclusa opção de repetição:

* Diário
* Trimestral
* Semestral
* Anual

Possibilidade de agendar até para 5 contatos.

---

### 📞 Integração SIP

* Opção de transferir chamada

---

### 🔄 Hub

* Melhoria na exibição de erros na consulta de ACK para mensagem com falha de entrega

## 🚀 Versão 2.15.6 FINAL – Changelog
- ajustes layout

## 🚀 Versão 2.15.5 BETA – Changelog
- bug - colocado delay sincronização mensagens acaba criando multiplos tickets por receber muitas mensagens de uma vez
- ajustes layout
- Mensagens rapidas, modelo antigo e novo junto. Ao clicar / abre novo e fechado fica os botões acredito assim agrada todo mundo.


## 🚀 Versão 2.15.4 BETA – Changelog
- bug - correção bug beta reação baileys

- Novo discador wavoip - oficial deles
- Baileys necessário ler qrcode no wavoip tambem
- ajustes Layout
- Opção desativar bot na tela atendimento esta disponivel agora para integrações também

## 🚀 Versão 2.15.3 BETA – Changelog

- Recepcão inteligente - Melhora validacao ticket caso ticket estivese aberto a IA continuava interragindo mandando mensagem caso acontece algum erro retry. Ou se ticket fosse aberto meio atendimento da IA.
- Recepção inteligente - suporte iaX e DeepSeek

Integrações ia separadas foram descontinuadas, deve ser usar recepção inteligente - As que estão configuradas continua funcionando não possivel criar mais novas
(Pretendo trazer melhorias maiores na recepção inteligente, hoje como substitui modelo não acho viavel continuar mantendo)

## 🚀 Versão 2.15.2 BETA – Changelog

- Ajustes layout
- Mudança webhook atlaz que vem informação pix em campo errado, fazendo não funcionar copia e cola
- Novo modelo mensagens rápidas
- Liberado envio MP4 canal Instagram
- Aumentado tempo tentativas downloads para evitar erro download
- Alterado Wuzapi erro mensagem imcompativel para aguardar 2 minutos antes de aparecer para garantir mensagem real não chegou mesmo evitando falsos erros
- Wuzapi suporte download XML
- Recepção inteligente - Caso IA retorne tem muitos arquivos ou arquivos grandes e não gere resposta sistema tenta novamente somente com as mensagens de texto
- IXC - Lista contratos para selecionar quando tem mais um

- Update baileys versão - Ler QRCODE novamente

## 🚀 Versão 2.15.1 BETA – Changelog

- Mais ajustes layout
- Novo modelo seleção emojis mais atual
- Comando envio localizacao typebot
- Nova integração 2 via boleto e desbloqueio confiança atlaz
- Nova integração 2 via boleto ReceitaNET
- Nova configuração desativar desbloqueio de segurança no 2 via boleto 
- Nova integração abertura chamado atlaz
- Webhook atlaz envio mensagens
- Integrações 2 via passam ter ramdom sleep entre 2s a 6s mensagens.
- 2 via hubsoft, SGP e IXC agora envia pdf boleto quando disponivel

### 🚀 Versão 2.14.8 — 20/01/26

- bug - alteração endpoint download midea da api oficial

## 🚀 Versão 2.15.0 BETA – Changelog

⚠️ **Atenção**

🐞 **bug** – criando índices únicos para informações adicionais dos contatos, para não duplicar.
Caso seja detectado repetidas, será apagada as mais antigas, mantida somente a mais recente criada.

🐞 **bug** – aumento da quantidade de caracteres nas colunas da tabela **"PushSubscriptions"**, que causava erro em alguns dispositivos ao cadastrar push devido à quantidade de caracteres.

🐞 **bug** – validação do campo tempo de fechamento do ticket bot.
Deixar esse campo em branco faz com que nenhum bot feche atendimento automático.

🐞 **bug** – listar último ticket fechado.
Quando tem mais de um canal, só vai listar o ticket mais recente, não localizando conversa de outros canais.

🐞 **bug** – reações em grupos sumirem.

🐞 **bug** – controle de zoom atrás de mensagens rápidas.

🐞 **bug** – segunda via de boleto Assas limitada aos próximos 6 meses, para não cortar boletos.

🐞 **bug** – não exige mais telefone para poder editar contatos como hubs.

---

📝 **módulo avaliação**

3 mensagens avaliação erradas volta abrir ticket
Mensagens inválidas ficam registradas no ticket

---

📋 **módulo tarefas totalmente reformulado**

* Estilo Kanban
* Novos filtros
* Novas etapas
* Registro data alteração etapa
* Nova configuração permite habilitar usuários comum possa criar tarefas para qualquer usuário
* Nova tarefa criada por outro usuário manda mensagem no chat interno notificando a mesma
* Atribuir tarefas a equipes
  Configuração para usuário comum poder atribuir tarefas a equipes que ele não faz parte
  Emite mensagem no chat interno nova tarefa

---

🔄 **Sincronização mensagem API Plus e Wuzapi**

Vai solicitar JID e LID.
Então contagem total de mensagens às vezes pode dar errado.
Antes era solicitado somente JID, mas quando mensagem chegava como LID essas mensagens ficavam fora da sincronização.
Achei melhor alterar.

---

🔌 **Wuzapi**

Mudanças para compatibilidade com nova versão.
Necessário atualizar WUAZAPI:

```
curl -sSL wuzapi.whazing.com.br | sudo bash
```

Suporte lista, botão, chave Pix, copy, call (somente chave, sem valor).
(Somente minha versão, original não tem suporte)
Sem garantia, use por sua conta e risco.

---

🔁 **Sincronizar mensagens todos contatos API Plus e Wuzapi**

Esse processo é extremamente lento.
Estará disponível somente quando estiver ativado plano importar mensagens.

Na lista de canais vai ter opção sincronizar, onde coloca número de mensagens por contato (valor de 1 a 100).
O sistema pega lista de contatos e busca no servidor Plus ou Wuzapi se possui alguma mensagem e baixa para o Whazing.

Se tiver 1000 contatos, terá cerca de 2000 sincronizações.
1000 JID e 1000 LID.

---

🌐 **API Plus**

Suporte envio botão Pix, API, tela atendimento, Typebot, Bot Interno.
(para tela de atendimento cadastrar chaves previamente na tela canais)

---

📡 **WABA API oficial**

Ativando webhook:

* template message_template_components_update
* message_template_quality_update
* message_template_status_update
* template_category_update
* template_correct_category_detection

Ao receber, sistema vai sincronizar templates automaticamente com novas alterações.

Melhoria busca última mensagem enviada para aviso 24 horas.

2 novas opções ferramentas canais:
1 – exibir informações do canal
2 – atualizar URL webhook

Renderizar templates enviados via API ou campanha.
Suporte conexão TechProvider com embed.

Caso mensagem X (-1) tenha retorno ACK, consultar informações de retorno.
Caso tenha, vai aparecer onde tem opção responder.

Valida dados JSON botão e lista para evitar erros de envio.
Template hello_word retirado da lista.

Suporte conexão via cadastro incorporado com suporte coeexistencia, necessario techprovider

---

🔐 **Baileys, Wuzapi**

Suporte usar proxy configurado no `.env`.
(proxy do `.env` não valida se está funcionando)

[https://doc.whazing.com.br/docs/configuracoes-vps-e-whazing/proxytodascontas_whatsapp](https://doc.whazing.com.br/docs/configuracoes-vps-e-whazing/proxytodascontas_whatsapp)

Prioridade proxy banco, se não tiver vai tentar do `.env`.

`PROXY_URL_VALID=true`
Com essa configuração ele vai validar proxy.
Caso falhar, não vai usar.

Vocês devem sempre verificar logs, pois como o canal conecta pode parecer falso positivo
(vocês acham que está usando proxy, mas não).

`PROXY_URL_VALID` somente para Baileys e Wuzapi.
A API Plus tem regras próprias, se tiver erro de proxy usa deles automaticamente.

---

📞 **Opção ligação**

Opção ligação não abrir tickets.

---

🖥️ **Tela atendimento**

Opção desativar bot interno daquele ticket quando abre atendimento que está no meio do bot
(vai ficar aqueles ícones de baixo editar lado direito).

Filtro admin usuário exibe foto se usuário está online.
Filtro cliente aguardando resposta (somente filtra abertos).

➕ Colocado atalho adicionar anotação no ticket também.

📝 **Anotação Ticket**

Possibilidade marcar usuários.
Ao marcar, eles recebem mensagem no chat interno com anotação feita.

Possibilidade marcar equipes no chat interno.

Cache input mensagem: troca de ticket mantém mensagem.

---

💬 **Chat Interno**

Admin e supervisores podem acessar conversas de todos usuários.

---

🤖 **Chat Bot interno + horário atendimento + Integração IA**

Ao transferir uma fila, aciona horário de atendimento enviando mensagem, caso configurado.


🤖 **Bot Interno**

Espaço construção bot dinâmico se ajusta à quantidade de nodes.

Suporte envio de arquivos com legenda.

---

🔗 **Integração Assas, Hubsoft, SGP e IXC**

Exibe informações na lista de tickets se está bot, usa filtro bot.
Possível selecionar se deve usar botão, lista e botão copy, tornando mais dinâmico.

Integração 2ª via boleto provedores.
Caso não consiga fazer desbloqueio de confiança, não transfere mais atendimento direto da mensagem:
"Desculpe! 😕 Não consegui completar o desbloqueio da sua conexão."

Depois mostra opção finalizar atendimento ou falar com atendente.

Integração 2ª via boletos SGP trocado endpoint para trazer todos boletos em aberto.

---

👥 **Contatos**

No cadastro opção **"Validar se o número possui WhatsApp"**.
Permite desativar validação contatos permitindo cadastrar mesmo não tendo WhatsApp.
Cuidado – isso pode causar problemas se iniciar conversa com esses contatos.

---

📊 **CRM / Kanban**

Reestruturado layout.

---
- Mudança carregamento e salvamento fluxo chat interno, com indicação loading principamente fluxo mais pesados dava impressão travado sem retorno visual

🎨 Muitas mudanças no layout, não vou especificar.
⚠️ Muitas mudanças, algumas esqueci de documentar.

---

🔧 **Canais HUB**

Liberado campo para editar token do canal, facilitando caso de manutenção.
Ao reiniciar canais, ele força configurar webhook para casos de perda.

---

🧩 **Painel SAAS**

- Troca icone botões coringa
- Botão coringa por empresa

Configuração Admin Wuzapi.
Gera token automaticamente ao cadastrar novo canal Plus ou fazer migração.

🔑 **Gerenciamento de Tokens Plus**

Cadastra tokens adquiridos dos servers do Whazing.
Cliente cadastrar novo canal ou migrar vai usar um dos tokens disponíveis.
Caso não encontre, vai dar erro.

📱 **Canais WhatsApp Plus Cadastrados**

Objetivo de ver quais canais cadastrados e, se precisar, alterar token ou server do canal.

### 🚀 Versão 2.14.8 — 07/01/26

- nova versão api wavoip


### 🚀 Versão 2.14.8 — Changelog Final
🐞 Correções de Bugs

1. Integrações Boleto (Provedores, Asaas) + Desbloqueio de Confiança

A API oficial do WhatsApp possui limite de caracteres (máx. 20) para botões e listas.

Textos como “finalizar atendimento” já não estavam sendo enviados corretamente.

Solução: botões e listas foram desativados temporariamente na API oficial. A mensagem agora é enviada como texto normal para garantir entrega.

2. Integração HubSoft – PIX Copia e Cola

Corrigido erro que impedia a busca correta do código PIX Copia e Cola.

3. Sobreposição de imagens no atendimento

Corrigido bug onde, ao clicar para ampliar uma imagem, o texto da conversa aumentava e ficava sobre a própria imagem, causando sobreposição e dificultando a visualização.

### 🚀 Versão 2.14.7 FINAL – Changelog

* api oficial - suporte template com variavel no header

### 🚀 Versão 2.14.6 BETA – Changelog

* bug wuzapi - Responder proprias mensagens

### 🚀 Versão 2.14.5 BETA – Changelog

* wuzapi - aumentado tempo de resposta aguardar confirmação envio mensagem - causa mensagens duplicadas em grupos maiores

### 🚀 Versão 2.14.4 BETA – Changelog

* wuzapi melhorias exibição erro ao enviar mensagens e força reinciar conexão tentativa recuperação caso falha envio por desconexão

### 🚀 Versão 2.14.3 BETA – Changelog

* bug - relatorios ligações foi quebrado alguma atualização a listagem de colunas
* Mensagens enviadas api não oficial baileys, api plus e wuzapi atualiza hora envio mensagem depois envio para melhor consistencia de horarios entre sistema e horario aplicativo
* quebra de linha mensagem feriado
* troca de tela atendimento respeita configuração anteorior da assinatura
* Novo relatorio estatisticas por contato
* Novo relatorio estatisticas por fila
* Sincronizar grupos
* Suporte Meta Pixel, Google Tag Manager e Google Ads ID na tela login e sigup
* Mais algumas limpezas alterações objetivo trazer mais desempenho frontend
* Ajustes tela atendimento para aparecer todas abas - abertos, pendentes, fechados e chatbot sem gerar rolagem

### 🚀 Versão 2.14.2 BETA – Changelog

* Wuzapi, Api plus e baileys - mais formatos mensagens mapeados recebidos api oficial botão, template
* Indicação de tipo disposito enviado mensagem (android-ios-web)
* Otimização chatinterno carregamento paginado para grande numeros mensagens não tornar lento
* Otimização tela atendimento
* Baileys atualizada

### 🚀 Versão 2.13.1 Baileys Update - 07/11/2025

* bug baileys - update versão baileys erro leitura qrcode

### 🚀 Versão 2.14.1 BETA – Changelog

* bug - Editar mensagem rapidas com anexo
* Botão painel SaaS reniciar backend
* Liberado campanha e Follow-up Wuzapi
* Mudança no sistema de validação de licença Caso houver erro validar ou foi deixado pagar ele não volta para free automaticamente exibindo anuncios. Ele não vai enviar mensagens exibindo um erro no log e no painel SaaS informando problema de licenca com botão para voltar versão free(voltando enviar mensagens e mostrar anuncios) ou reniciar whazing para tentar validar licenca novamente. Essa alteração devidos problemas teve na contabo que causou erro validar licença (problema não era sistema licenca e sim na VPS - nem uso contato :)) Não correndo mais risco caso problema de licença ele volte exibir anuncios imediatamente

### 🚀 Versão 2.14.0 BETA – Changelog

#### 🐞 Correções de Bugs

* Corrigido erro ao **exportar relatório de tickets** em Excel.
* Corrigido problema onde **novos contatos não salvavam etiquetas**.
* Corrigidos **erros nos relatórios de avaliações**, que exibiam dados incorretos.
* Corrigido problema de **cor do texto em modo escuro** nos títulos das colunas.

#### ⚙️ Melhorias Gerais

* Adicionada lógica de **retry no download de arquivos (API Plus)**.
* O sistema agora **respeita o limite de download configurado** no painel SaaS.
* Adicionada **configuração para exibir reações como respostas**.
* **Chamadas recebidas** agora abrem automaticamente um ticket e **acionam integrações e bots**.

#### 💼 Painel SaaS

* Nova opção para **selecionar quais canais estarão disponíveis**, oferecendo maior flexibilidade para exibir apenas os canais que a empresa deseja utilizar.
* Adicionada **nova configuração de notificação de pagamento**.

#### 🆕 Novo Canal – Wuzapi (WhatsMeow)

* Nova API **mais leve e independente**, executada em serviço separado, **melhorando o desempenho geral** do sistema.
* Necessário **instalar o Docker separado** e **atualizar o sistema** — instruções disponíveis na documentação.
* Assim como a API Baileys, o **Wuzapi também obedece ao limite de download configurado** no painel SaaS.

#### 🔄 Migração de Canal WhatsApp

* Agora é possível **migrar entre as 3 APIs (Baileys, API Plus e Wuzapi)** sem perder dados.

#### 🤖 ChatBot e Integrações

* Quando a **guia ChatBot estiver ativa**, apenas tickets relacionados ao chatbot serão exibidos.
* Tickets originados de **integrações, IA ou TypeBot** seguem a regra da configuração _“Não visualizar Tickets no ChatBot”_.
* No **editor de ChatBot**, ao clicar em “Voltar”, o sistema perguntará se deseja salvar as alterações.
* Novo comando no **TypeBot** para **transferir ChatBot interno**.
* **Nova API:** endpoint para **transferência de ChatBot interno**.
* Na listagem de ChatBots, agora é exibido o **ID do ChatBot** para facilitar uso via API ou TypeBot.

#### ⭐ Avaliações

* Ajustes nas **configurações de avaliações**, agora disponíveis apenas para **canais de texto**.

#### 👥 Contatos

* **Otimização na abertura e edição de contatos**, carregando dados de forma mais rápida.
* Na tela de atendimento, **contatos recebidos** agora possuem **botão direto para abrir ticket**.

#### 🔔 Notificações

* Nova configuração para **selecionar o som da notificação** (7 opções de áudio ou modo silencioso).
* Adicionado controle de **ajuste de volume das notificações**.

#### 📱 API Oficial

* Agora com suporte a **templates contendo vídeos, localização, documentos e botões com link**.

#### 💬 Chat Interno

* Adicionadas **badges de contagem** de mensagens não lidas nas abas de usuários e grupos.
* Após enviar mensagem com _Enter_, o foco retorna automaticamente ao campo de texto para facilitar a digitação contínua.

#### 🧩 Tela de Atendimento

* **Otimizada a listagem de tickets** para melhor desempenho — recomenda-se testar com diferentes filtros e tipos de usuários, pois era uma área propensa a bugs.
* **Melhoria no carregamento das mensagens**, resultando em uma experiência mais fluida.

#### 💳 Plano Vencido

* Usuários comuns **não visualizam mais valores ou mensalidades** na área financeira quando o plano está vencido.

### 🚀 Versão 2.13.1 Final - Changelog

* bug beta - Desloga acessar grupos com usuarios não admin
* Forçar executar condições do bot pega ultima mensagem do cliente para condições - util para fazer bot por palavra chave por exemplo
* Liberado PWA gira tela

### 🚀 Versão 2.13.0 BETA - Changelog

Tela Atendimento

* ticket atendimento por ia e typebot mostra na aba chatbot caso ativa
* suporte encaminhar localização
* Opção abrir novo ticket mais rapidamente, pelo telefone ou buscando contato
* Scroll mensagens aparece data mensagem semelhante whatsapp web
* Scroll lista tickets força carregar mais tickets
* Mostra hora mensagem foi deletada
* Grupos
* Marcar contatos
* Se tiver lista contatos mostrar nome contato marcado - lista mensagens

Chat Interno

* Alterações visuais
* Responder mensagem
* Reagir
* Deletar mensagem
* Editar Mensagem

Integração

* Recepção inteligente suporte gemini
* Integração x bot interno - Interno passa ter prioridade sobre bot interno caso tenha integração bot interno não sera ativado Exemplo: Caso selecionado no canal uma fila que tem integração e um ChatBot. O chatbot não será ativado. Prioridade: 1 - Integração, 2 - ChatBot
* Cadastro fila nova configuração - Iniciar a transferir (com essa configuração ativa quando transferindo ticket para um que tem integração ativada ele executa integração imediatamente)

Painel SaaS

* Card numero usuarios online
* Botão reniciar conexão modal whatsapp
* Modal whatsapp coluna ultima atualização whatsapp
* Modal whatsapp botão desconectar canal
* Status Redis ajudar caso erros dele
* Mais botões coringa, 2 abre nova aba e 2 iframe
* Nova configuração envio mensagem aviso vencimento, será enviado 7 dias antes, 3 dias antes, 1 dia antes e no dia vencimento.

Pagina ajuda

* Alterado layout iframe para ocupar pagina toda

Configuração canais

* Melhoria na exibição erros na geração qrcode api plus - botão separado gerar qrcode e pairing code
* baileys - detectar se tentar conectar mesmo numero mais de uma vez bugando instalação
* Api Plus e Baileys - Nova opção marcar status de presença essa opção voltar notificar celular mas tem limitações verificar nas configurações

Contatos

* Somente admin e supervisor pode ignorar contato ou desativar bot
* Opção desativar integrações de determinado contato
* Planilha importar contatos suportar criar campos informações adicionais

Telegram

* Suporte grupos telegram

Relatorio Tickets

* Valor Negociação kanban

Carteira

* Nova configuração para ocultar contatos sem carteira definida Como funciona Com essa opção ativada, caso contato não tiver carteira definida não sera exibido na lista do perfil usuario e supervisor de fila caso opção "Ignorar carteira - Listar todos contatos" do cadastro usuarios esteja desativa Supervidor Geral e Admin ve todos contatos

Api

* Suporte Envio usando ticketId, como funciona no lugar number usar parametro ticketId, usado para canais como telegram nao tem numero

Motivos de encerramento

* Possibilidade separar motivos encerramento por fila

Mensagem despedida

* Nova coluna identificar mensagem

#### 🚀 Versão 2.12.3.0 Final - Changelog

* bug grava baileys - Descoberto bug grave da grande perda de mensagens atualização importante
* bug baileys 2 - Mensagens enviadas por outros dispositivos(do numero ta conectado no whazing) em grupos aparece como mensagem recebida

#### 🚀 Versão 2.12.2.1 Final 03/10/25 - Changelog

Baileys ler qrcode novamente

* Update versão baileys - O WhatsApp não está mais enviando acks. Isso é um enorme vetor de banimento. Por favor, aqueles que puderem atualizar para a rc5, façam isso pela segurança de suas contas.

Para quem ainda está na versão 6.7.19, atualize para a nova release 6.7.20. Essa versão incluirá apenas esse patch e é um hotfix que desenvolvi para vocês.

Para quem acompanha o GitHub, o branch hotfix/ack estará disponível até o fim do ciclo de release da versão 7.0.0.

#### 🚀 Versão 2.12.2.1 Final - Changelog

* bug - Correção importante quem usa grupos baileys - não capturava contato da mensagem, aparece todas como se grupo enviase

#### 🚀 Versão 2.12.2.1 Final - Changelog

* bug - Correção importante quem usa grupos api plus - Alguns casos duplica contato e até salva mesmo com numero errado. Salva lid no lugar do numero

#### 🚀 Versão 2.12.2.1 Final - Changelog

* bug - Correção contagem tickets tela dashboard
* bug - relatorio tickets ajustes data final

#### 🚀 Versão 2.12.2.1 FINAL - Changelog

Tela Atendimento

* Envio mensagem tela atendimento informa canal esta desconectado e da erro Envio

#### 🚀 Versão 2.12.2.1 BETA HOTFIX - Changelog

* bug - correção Balanceada de usuários no chatbot

#### 🚀 Versão 2.12.2.1 BETA HOTFIX - Changelog

* bug - correção suporte gpt-5

#### 🚀 Versão 2.12.2.1 BETA - Changelog

**Painel SaaS**

* Adicionada opção para **ocultar itens do menu lateral direito** (apenas oculta, não remove).
* Nova função para **visualizar o espaço utilizado** na pasta `public` por empresa.
* **Estatísticas por empresa** agora disponíveis.
* Possibilidade de **editar canais diretamente pelo Painel SaaS**.
* Correção de bug: usuários **excluídos eram listados**

**API Plus**

* Agora **rejeita chamadas**, exibindo mensagem de aviso.
* Adicionado suporte a **Custom URL para servidor Plus**, para quem optar por adquirir acesso direto.

**Frontend**

* Incluída **mensagem de erro** em casos de falha de comunicação com o backend.

**Avaliação**

* Nova opção para **desativar a lista de avaliações**.

**Gravação de Áudio**

* Substituído o módulo de gravação áudio para **mensagens agendadas** e **mensagens rápidas**.

**Integrações**

* **Correção Assas (2ª via):** quando havia múltiplos boletos na lista, ocorria erro.
* **2ª via Assas, IXC e Hubsoft** com API Plus agora utilizam **botão "Copiar e Colar"**.

#### Versão 2.12.2.0 BETA - Changelog

* Atenção para quem usa avaliação tem que reconfigurar

Integrações

* Integração 2 via boletos Asaas totalmente reestruturada - consulta mais de um boletos em apis compatível usa lista e botão. Da opção transferir ou finalizar.
* Nova integração - Recepção inteligente - Usar ia para analisar mensagem cliente e transferir para fila adequada, finalizar atendimento
* Nova integração - Sistema SGP - 2 via boleto e desbloqueio confiança
* Nova integração - Sistema HubSoft - 2 via boleto e desbloqueio confiança

Avaliação

* ajustes em horas tempo entre cada avaliação - Função para tickets fechados seguidos não solicitar toda vez avaliação. Hoje tempo fixo de 6 horas
* Canais suporte lista será enviado lista para escolha opção, será necessário reconfigura canais que usam avaliação pois notas estão agora valores separados.

Etiquetas

* Liberado deletar etiquetas mesmo com contatos vinculados - não apaga contato somente retirar a tag

ChatBot

* Transferência outro fluxo

Migração Baileys x PLUS

* Possibilidade migrar mesmo com ticket abertos ou pendentes

#### Versão 2.12.1.0 FINAL - Changelog

* Integração IXC com 3 boletos ou mais uso apis com suporte lista como api oficial ou api plus erro ao selecionar boleto

#### Versão 2.12.1.0 BETA - Changelog

* bug api plus - Grupo nova mensagem não aparece nome contato chat aberto
* api plus - marca mensagens como lidas
* supervisor de fila permisão alterar status tickets grupos
* solicitar confirmacão botão adicionar 1 mês painel saas evitar clique acidental

#### Versão 2.12.0.0 BETA - Changelog

**Correções de Bugs**

* Correção na exibição do status de envio por contato em campanhas.
* Ajuste no frontend para evitar travamentos em cenários com muitas mensagens rápidas (não será mais necessário dar F5).
* Correção no envio de contatos pelo Plus, que não atualizava o status de mensagem enviada.
* Tela de login ajustada para impedir múltiplos cliques no botão, evitando falhas.

**Melhorias e Novos Recursos**

* Campanhas agora exibem mensagens que tiveram erro de envio.
* API Plus (WABA / Hub) com mecanismo de **retry automático**, realizando até 5 tentativas em caso de erro.
* Suporte ao discador SIP (Asterisk e FreeSWITCH).
* Novo Hub para **Instagram e Facebook**.
* Nova integração SaaS de pagamento: **InfinityPay**
  * Pix com taxa 0.
  * Cartão com possibilidade de repassar taxa ao cliente.
* Integração com sistema **IXC** para emissão de boletos e desbloqueio de confiança.
* Atualização do **Baileys** - recomendado ler Novamente QRCODE.

#### Versão 2.11.3.2 FINAL - Changelog

* **Mudanças na versão free - Todos recursos da premium disponível na free sem limite de canais - a free envia uma propaganda do whazing em tickets novos, api, mensagem agendada, folowup, campanhas.**
* bug cadastro api oficial - aceitar mesmo token canais diferentes
* bug - não gerava informações ticket ativo
* Deletar canal validação nome canal - para garantia extra leitura deletar
* Botão fechar informativo pro usuário
* Correções relatórios de folowup
* Botão abrir qrcode do wavoip - api plus - abrir qrcode ler no site wavoip - atalho somente para facilitar
* NotificaMe - Poderá ser adquirido token diretamente deles usar link cadastro https://hub.whazing.com.br e cupom 'whazing'
* Decidi atualizar versão nova baileys que testes que fiz melhorou bastante questão lid - _Não tem suporte lista, botão etc_

### Versão 2.11.1.2 Final - Changelog

* bug - Mudança sistema contagem avaliações
* Api Plus - Mudança sistema geração qrcode colocado botão solicitar qrcode quando tem telefone preenchido e somente aparece pairing code, fazendo limpar numero e gerando qrcode. Colocado retorno servidor quando tem muitas tentativar gerar que causa erro, informando que deve aguardar para uma nova tentativa.

### Versão 2.11.1.1 Final - Changelog

💸 Novo Gateway de Pagamentos via Pix Cada transação Pix tem taxa fixa de apenas R$ 0,30 – valor definitivo, sem promoções temporárias.

👉 Garanta essa condição exclusiva cadastrando-se no link: [https://pushinpay.whazing.com.br](https://pushinpay.whazing.com.br/)

[https://doc.whazing.com.br/modulo-saas/gateways-pagamentos/configurar-pushin-pay](../modulo-saas/gateways-pagamentos/configurar-pushin-pay.md)

* bug - corrigido filtro relatório tickets primeira mensagem
* Sugestão instalar PWA tela login
* Usando botão sair ele desativa login automático

### Versão 2.11.2.0 Beta - Changelog

* bug - ao deletar contato retira carteiras dele
* bug - correção geração conexão por pairing code api plus - caso telefone esteja preenchido somente gera pairing code para voltar gerar Qr CODE deve editar e deixar sem telefone
* Liberado models GPT-5
* Suporte WebPush (notificação celular) - obrigado Cristian Grando pelo teste no iPhone

### Versão 2.11.0.0 Beta - Changelog

* bug - listar mais de 40 usuários em algumas telas
* Suporte API OFICIAL DIRETO

bot interno

* opção webhook descontinuada
* nova opção Http Request, personalizável requisição e possibilidade salvar resultado em uma variável
* nova opção expandir menu direito para facilitar edição interações e condições
* nova condições comparação valores de variáveis
* opção para forçar condições util, fazer http request e avançar etapas compara valores
* nova condição por horário personalizado
* nova configuração envio mensagem encerramento quando usa palavra chave encerrar atendimento
* palavra chave para voltar menu inicial nas configurações
* alterações layout

Whatsapp API plus

* Mensagem "\[Undecryptable] Não foi possível descriptografar a mensagem. Abra o WhatsApp no seu celular para visualizá-la." será trocada pela mensagem configurado painel mensagem não compativel

API

* Endpoint envia mediaUrl

baileys

* Busca foto perfil qualidade maior
* Tela login sai opção salvar senha entra login automático

Integração Groq - retirada models depreciados e acrescentados novos

* campanhas Suporte variáveis dinâmicas, informações adicionais do contato pode ser usado como variáveis
* Criação contato caso exista já da mensagem erro

### Versão 2.10.1.5 Final

* bug - Integração ia caso tenha lista, botão outro tipos mensagens trava ia
* Supervisores podem criar tarefas outros usuários

### Versão 2.10.1.4 Final

* contagem mensagem não lidas - mudança sistema contagem, quando cliente conversa 2 whatsapp diferentes da mesma empresa somava valores não lidos, ou grupos causando valores errados
* Emoji editar mensagem
* api plus - novos modelos mensagens mapeadas
* mudança posição botão dark
* Tickets de grupos - mudanças Não fica atribuído usuário somente as filas Somente supervisor ou admin pode fechar ticket, transferir ou retornar fila Coloque ticket grupo em uma fila que usuários que você queira tenha acesso ticket possa ver

### Versão 2.10.1.3 BETA

* bug 2.10.1.2 - listagens mensagens atualizar agora se tiver na 2.10.1.2

### Versão 2.10.1.2 BETA

* api plus - validação garantir campos necessários serem preenchidos
* api plus - Correção mensagens editadas
* api plus - correção download documentos
* api plus - contatos recebidos whatsapp web e iphone correção
* botão download áudio

### Versão 2.10.1.1 BETA

* api plus - Marcação encaminha mensagens api plus enviadas e recebidas
* bug - api plus - Correção bug envio mensagem celular contato cadastrado nome errado
* api baileys - suporte exibir imagem vindo anuncio - identificar anuncio
* api plus - suporte exibir imagem vindo anuncio - identificar anuncio
* api plus - melhoria importação contatos captura nome
* Configuração .env determina tempo expiração token

### Versão 2.10.1 BETA - Changelog

* Botão agendamento tela atendimento api plus
* API plus melhora captura mensagens que pode causar perda da mensagem.
* Validação para busca lid e cadastro caso chega somente numero do contato para garantia melhor concistencia dados

### Versão 2.10.0 BETA - Changelog

* bug - Correção update crm pelo painel atendimento usuario comum

**Atenção** campanhas criadas que envia arquivos antes dessa versão não vai funcionar, deve alterar arquivo -

* Novo Api PLUS - Mais estavel e leve - Terá custo por canal API não oficial API com recursos PREMIUM API maior estabilidade e mais recursos Suporte envio botão, listas, botão copia e cola, link, solicitação localização Por ser tratar api paga teremos garantia maior de funcionamento

Api processada em um servidor externo as mensagens tornando muito mais leve envio e recebimento de mensagens para sua vps, favorecendo uso de grupos por exemplo.

Dica de ouro em campanhas possivel enviar com botões colocar um botão com texto "Denunciar e Bloquear". Assim você faz cliente mesmo não querendo receber interragir e diminui chance do ban

Sera possivel migrar baileys para api plus ou voltar sem, perda mensagens. Api plus suporte wavoip - tem que fazer leitura qrcode no painel do wavoip - vai ficar 2 locais conectados painel wavoip e no painel whazing

* Organização arquivos - por data e ticket - sistema vai criar subpasta anomes ex: 202507 e para campanhas pasta campaign e mensagens rapidas pasta fastreply
* Opção SaaS para ocultar botão multiplos logins - somente oculta botão caso usuario tenha ativado opção continua Ativado
* Opção SaaS botão coringa - Você pode criar nova opção menu para ir para site personalizado seu
* Opção duplicar campanha
* Follow-up Pode ser definido tela de atendimento, typebot, api, bot interno, CRM Endpoint listar contatos que estão naquele Follow-up
* ChatBot Interno - Alteração CRM para poder remover contato da LANE
* webbook - adicionado informacao kanbanId e followupId
* Endpoint suporta arquivo base64
* Sincronizar mensagem com um contato - somente api plus
* API Plus - maximo 100 - Verificar docs
* Planos criado opção desativar importação mensagens(canal baileys), essa opção causa muito problemas desempenho durante processo achei melhor criar opção quem queira desativar
* Relatorios de anotações novos filtros e opção impressão e exportar excel
* Relatorios de protocolos novos filtros e opção impressão e exportar excel
* Relatorios de ligações opção impressão e exportar excel
* Relatorios de avaliações opção impressão e exportar excel
* Integração de IA para melhorar e sugerir mensagens no atendimento
* Edição contato opção desativar transcrição audio
* Opção para transcrever audios enviados tela atendimento
* Opção admin ou supervisor caixa de seleção para excluir varios contatos mesmo tempo
* Permitir excluir contato mesmo tendo ticket
* Botão excluir contato individual somente admin ou supervisor

### Versão 2.9.4.8 Final - Changelog - 29-06-2025

* Mensagem recebida de lid solicita automaticamente para compartilhar numero telefone

### Versão 2.9.4.8 Beta - Changelog - 23-06-2025

* bug - correção bug envio varios arquivos

### Versão 2.9.4.8 Beta - Changelog - 22-06-2025

* bug - erro integração mercado pago - painel saas
* update baileys versão com algumas pequenas melhoras @lid

### Versão 2.9.4.8 Beta - Changelog

* Endpoint cadastro teste alterado para evitar ataques testes falsos
* API ADMIN - Endpoint Admin criar teste - esse endpoint separado com validações extras, nao prescisa ta habilitada a opção criar testes, não envia mensagem de boas vindas(ideia vocês personalize maximo possivel por exemplo usando typebot). Caso queria validar telefone ou enviar mensagem boas use endpoints ja existe e personalize a experiencia do usuario.
* API ADMIN - Endpoint Admin update empresa
* API ADMIN - Endpoint Admin listar todas empresas ou filtrar id especifico
* API ADMIN - Endpoint Admin adicionar 1 mês na empresa
* API ADMIN - Endpoint Admin Listar usuarios da empresa
* API ADMIN - Endpoint Admin atualzar senha usuario
* API - Endpoint para editar contato
* API - Enpoint listar mensagens ticket
* API - Melhoria validação token api externa para evitar ataques
* Busca por mensagem especifica na tela atendimento - tem limites, contatos com muitas mensagens não vai localizar todas
* Input do atendimento aceitar correção sugeridas pelo navegador usado
* Importação contatos do aparelho tem agora posibilidade de selecionar etiquetas, carteira ou crm
* TypeBot - Criado integração lista modelo evolution - possivel criar lista personalizada usando burble text - tem exemplo fluxo para importar
* TypeBot - Criado integração botão estilo whazing - possivel criar botão direto usando comandos especificos typebot
* Typebot - As informações adicionais funcionaram como variaveis typebot (atenção essa informação carregada quando inicia conexão typebot se alguma for alterada durante fluxo typebot não vai alterar até fluxo typebot for reniciado)
* Typebot - Novo comando possivel para alterar informações adicionais do contato - tem exemplo fluxo para importar
* Typebot - Ajustados parte comandos para quando ser usado etiquetas, crm, informações adicionais não parar fluxo

### Versão 2.9.4.7 Beta - Changelog

_quem ta na versao Versão 2.9.4.6 Beta atualize agora urgente_

* bug - bot enviar mensagem transferencia no fechar ticket
* bug - Exibição data feriados
* bug - botão clicar responder audio
* bug - Correção envio arquivos criado versão 2.9.4.6
* Relatorio tickets, filtro por estado
* Relatorio tickets, filtro por informações adicionais do contato
* Relatorio tickets, mostra numero telefone do contato
* Relatorio tickets, mostra informações adicionais do contato
* Relatorio tickets, botão ocultar filtros para ser melhor leitura dos relatorios
* Relatorio tickets, opção escolher quantidade tickets carregar
* Relatorio tickets, opção escolher carregar grupos ou não
* Relatorio tickets, opção escolher colunas para aparecer
* Fechamento ticket em massa marca eles como lidos
* Listar usuarios painel saas da empresa mostra se ta online e ultimo horario estava online - informação importante acompanhar se cliente esta usando sistema, e tentar pegar feedback por que não

### Versão 2.9.4.6 Beta - Changelog

* bug - bot não acionar com arquivos
* bug - mensagens editadas com anexo ficava undefined texto
* webhook fechamento ticket colocado closingReasonId
* Suporte edição caption arquivos enviados
* Suporte responder com imagem ou arquivo ou audio
* preparativos para mudança whatsapp criação estrutura para trabalhar com "LID"
* API se usar numero@lid da ele vai enviar usando lid
* Webhook adicionado lid do contato no json

### Versão 2.9.4.5 Beta - Changelog

* bug - pix assas
* Melhoria tratamento e aviso de erros ao criar novo ticket caso ja tenha uma aberto

### Versão 2.9.4.4 Beta - Changelog

* mudanças no banco - não permite downgrade de versão
* bug - Mensagem rapida remover anexo
* Tenant vencido não consegui mais enviar mensagens
* Refatoração envio hub para melhor desempenho e futurar auditorias
* Refatoração bot interno preparação novos canais
* retorno filtro canal dashboard apaguei sem querer
* melhoria integração ia - configuração Intervalo (ms) entre mensagens Define o tempo de espera (em milissegundos) entre as respostas da IA. Por exemplo: 15000 ms significa 15 segundos.

Durante esse intervalo, se o cliente enviar várias mensagens, a IA responderá apenas uma vez — ou seja, ela aguardará esse tempo antes de responder novamente.

Resumo: a IA só responde uma vez a cada intervalo definido, mesmo que o cliente envie várias mensagens nesse tempo.

### Versão 2.9.4.3 Beta - Changelog

* atualização versão baileys correção conectar via codigo

### Versão 2.9.4.2 Beta - Changelog

* Opção salvar senha tela login
* Cache local figurinhas enviadas
* Possivel quebra linha tela print tambem
* Melhorias layout da dashboard
* Identificação mensagens enviadas por fora whazing

### Versão 2.9.4.1 Beta - Changelog

#### 🐛 Correções de Bugs

* Arquivos recebidos com # no nome, não conseguir abrir
* Volta volta rolagem lista mensagens

### Versão 2.9.4 Beta - Changelog

#### 🐛 Correções de Bugs

* Corrigida a **cor da legenda nos gráficos de pizza** ao passar o mouse (hover)

#### ⚙️ Melhorias de Sistema

* **Otimização no backend:** remoção de trechos de código não utilizados
* **Melhoria visual** na exibição de áudios na tela de atendimento
* **Zoom na imagem de perfil do contato** na tela de atendimento
* **Remoção do texto "aproximadamente"** na tela de tickets, por ser muito extenso
* **Campo de edição de contatos atualizado:** agora é possível desabilitar a avaliação do contato (apenas para Admins e Supervisores)
* Pressionar **Ctrl + Enter permite quebra de linha** na tela de atendimento

#### 🤖 Integrações e Automações

* Atendimentos feitos por **automações (IA, Typebot)** agora marcam mensagens como lidas automaticamente
* Tickets com **integrações ativas** (como Typebot ou IA) **não acionam validação de horário de atendimento**

#### 🧑💼 Funcionalidades e Recursos

* **Nova indicação visual:** mostra qual usuário reagiu à mensagem
* **Nova indicação visual:** mostra qual usuário encaminhou uma mensagem
* **Nova opção "Motivo de Encerramento" (somente plano Premium):**
  * Ao encerrar um ticket, o usuário deverá escolher um motivo obrigatório
  * Os motivos podem ser utilizados como filtro e em gráficos no dashboard
  * A opção só aparece se houver motivos cadastrados e ativos
  * Exemplo de motivos: "Cliente desistiu", "Preço alto", "Não respondeu"

#### 📊 Relatórios e Dashboard

* **Nova coluna no relatório de tickets:** "Primeira mensagem" (mensagem que originou o ticket), útil para rastrear a origem do lead
* **Novo gráfico de evolução por canal**
* **Novo gráfico de atendimentos por canal**
* **Filtro por canal** adicionado à dashboard (além do filtro por data)

### Versão 2.9.4 Beta - Changelog

* bug - correção cor legenda ao passar mouse graficos de pizza
* Otimização backend retirada partes não usadas
* Zoom imagem profile do contato tela atendimento
* Atendimento feito por automações como ia, typebot marcam mensagens como lidas.
* Ticket com integrações ativas não aciona horario de atendimento. Ex. Typebot, IA.
* Indicação usuario que reagiu
* Indicação usuario encaminhou mensagem
* Nova opção Motivo encerramento(somente premium) - Ao fechar ticket usuario será obrigatorio selecionar motivo para poder fechar, esses valores podem ser usados no filtros e grafico dashboard, caso não tenha motivo cadastrado ou ativo a opção não aparece. Exemplo: Não fechou, Preço alto. Aumentando o rastreamento dos atendimentos
* Nova coluna relatorio tickets, primeira mensagem(mensagem que fez ticket ser aberto). Pode ser usado para ajudar rastrear origem do lead.
* Melhoria visual audios tela atendimento.
* Retirado aproximadamente tela atendimento tickets, texto muito longo.
* Novo grafico evolução por canal(anterior era por tipo de canal)
* Novo grafico atendimento por canal(anterior era por tipo de canal)
* Alem do filtro data será possivel filtrar por canal na dashboard
* Segura Ctrl possibilidade fazer quebra linha na tela atendimento
* Edição contatos configuração desabilitar avaliação, somente disponivel para admin e supervisor

### Versão 2.9.3 Beta - Changelog

#### 🐛 Correções de Bugs

* bug da beta - \* Corrigido botão de **mutar chamadas (wavoip)** que não funcionava corretamente

#### ⚙️ Melhorias e Novos Recursos

* Focar automaticamente após envio de mensagens, campo texto
* **Botão "Sincronizar Contatos"** agora disponível apenas para administradores
* Validação de **horário de atendimento** ajustada: se o responsável estiver online e o ticket aberto, aviso fora do horário não será enviado
* Implementado **cache no título da página** para caso queda backend manter titulo
* Campos de **botões e listas agora aceitam variáveis dinâmicas**
* Atualizada versão da **biblioteca Baileys**, restabelecendo conexão via código Código
* Melhorias nas **traduções do sistema**
* Sistema passou a exigir **senhas mais complexas** para maior segurança

### Versão 2.9.2 Beta - Changelog

#### 🐛 Correções de Bugs

* Corrigido erro na confirmação de leitura de mensagens enviadas pelo bot
* Resolvido não funcionamento do webhook quando ticket é fechado usando interação do bot
* Corrigido bug da API oficial beta onde template com imagem não era enviado
* Solucionado problema nas estatísticas de entrega na campanha da API oficial beta
* Resolvido problema de duplicação de mensagens enviadas pelo hub
* Corrigido problema de rolagem na lista de mensagens de despedida
* Ajustado permissões para admin poder apagar mensagem de despedida
* Corrigido exibição do horário de fechamento no relatório de tickets
* Corrigido tradução na beta onde relatório exibia tickets fechados como pendentes

#### ⚙️ Melhorias nas Configurações

* A opção de "não capturar mensagens enviadas fora da plataforma" agora é configurável por canal, não mais uma configuração geral do Whazing
* Adicionado controle de acesso por dia e horário dos usuários
* Implementado definição de horário de atendimento por canal/fila
* Adicionado cadastro de feriados com horários diferenciados de atendimento
* Configuração para ignorar chamadas movida para nível de canal (otimização para WaVoip)
* Implementado soft delete para usuários (mantém dados no banco ao deletar)

#### 🔄 APIs Modificadas

* Endpoint `showticket` atualizado para retornar o ticket mais recente atribuído ao canal selecionado no cadastro de APIs
* Endpoint `showallticket` atualizado para listar todos os tickets atribuídos ao canal selecionado na API

#### 🔄 Melhorias no WaVoip

* Adicionada notificação automática quando uma chamada é atendida por outro usuário:
  * O webphone é fechado automaticamente para o usuário original
  * Uma notificação é exibida informando qual usuário atendeu a chamada

#### 🚀 Novos Recursos

* Suporte ao envio de contatos
* Implementado espiar ticket em modo mobile

#### 💅 Melhorias na Interface

* Nova exibição na dashboard SaaS da quantidade de empresas vencidas
* Adicionado foto do usuário
* Implementado filtro para empresas vencidas
* Melhorada tela de cadastro de API com exibição do nome e canal
* Adicionado destaque no botão de configurar canal
* Otimização da tela de atendimento para modo mobile:
  * Removido botão de emoji para melhor aproveitamento de espaço
  * Reorganizado botão de anexo
  * Novo botão "+" com múltiplas opções
  * Suporte a envio de contatos, figurinhas e templates

#### 📱 Otimizações Mobile

* Interface otimizada para melhor experiência em dispositivos móveis
* Reorganização de botões e controles para maior eficiência
* Melhor aproveitamento do espaço em tela

***

_Nota: Esta versão beta contém importantes correções de bugs e melhorias significativas na experiência do usuário, especialmente para uso mobile._

### Versão 2.9.1 Beta - Changelog

* Wavoip disponível apenas na versão premium
* Suporte completo à API Wavoip: fazer e receber chamadas, além de relatórios de chamadas realizadas _(relatório disponível apenas para chamadas feitas com o novo Whazing)_
* Não é mais necessário escanear QR Code no site da Wavoip – integração 100% com Whazing, basta inserir a chave
* Referências ao nome Wavoip nos textos foram removidas – ideia é que vocês possam vender como serviço adicional sem divulgar o fornecedor
* Versão do Baileys modificada que permite uso do Wavoip com a API oficial conectada via QR Code
* No cadastro de usuários, nova configuração permite liberar o uso do Wavoip por canal, semelhante ao controle por filas. Se o canal estiver marcado, o usuário poderá fazer e receber ligações por ele

***

* Integração com Typebot (API não oficial): caso não tenha valor preenchido na lista, o sistema usa um texto padrão para garantir o funcionamento
* API Oficial – novo botão para solicitar localização do cliente, disponível no bot e na API
* Suporte ao envio de localização via API (oficial e não oficial), disponível tanto no bot quanto via API
* Notificação de atualização de navegador agora mais chamativa

***

* API não oficial (Baileys): nova opção para ignorar chats privados. Objetivo é permitir o uso conjunto com a API oficial, fazendo chamadas e enviando mensagens fora da janela via Baileys, e recebendo/enviando mensagens normalmente pela API oficial. Também permite acesso a grupos via Baileys
* Novo modo fallback da API oficial usando conexão Baileys – permite envio de mensagens e chamadas via Wavoip. Requer versão modificada instalada no Whazing (não funciona com a original). Fallback por WWJS externo continua disponível
* Sistema agora captura mensagens enviadas fora do Whazing usando o hub (ex: Instagram, API oficial via QR Code)

***

* Identificação das interações no bot interno
* Nova opção de envio de figurinhas: qualquer imagem enviada será convertida automaticamente em figurinha
* API – mudança de fila: altera integração associada a fila
* API – endpoint de tags reformulado: agora é possível adicionar várias tags de uma vez ou remover todas
* API – endpoint do CRM: para remover um contato do CRM, envie o valor `0`

### Versão 2.9 Beta - Changelog

#### 🛠 Alterações na API

* A versão gratuita adicionará automaticamente a assinatura “whazing.com.br” nas mensagens enviadas.
* Funções White Label foram removidas da versão gratuita.

#### 🐞 Correções de Bugs

* Corrigido problema ao adicionar dois contatos seguidos: os dados do contato anterior não eram apagados corretamente.
* Ajuste na transferência de usuários: agora só é possível transferir para usuários dentro da fila selecionada.
* Correção na quebra de linha ao editar mensagens.
* Corrigido o envio de notificações no chat interno: usuários fora da equipe não recebem mais alertas.
* Atualização correta das etiquetas na tela de Atendimento.
* CRM agora respeita as regras da carteira.
* Corrigida permissão para supervisores criarem e editarem chatbots.
* Correção no recebimento de múltiplos arquivos via Hub.

#### 🚀 Novos Recursos e Melhorias

* Suporte a múltiplos idiomas: Português, Inglês e Espanhol.
* Integração parcial com a API oficial via HUB (documentação separada disponível).
* Permissão para encaminhar mensagens a até 5 contatos simultaneamente.
* Nova configuração para ocultar o número de telefone dos usuários.
* Adição de botão “Voltar” nos relatórios.
* Exibição da imagem do contato ao encaminhar mensagens e ao agendar.
* Campanhas agora são ordenadas das mais recentes para as mais antigas.
* Nova configuração de restrição de canais por usuário (semelhante ao controle por filas).
* Reformulação na abertura de tickets:
  * Mostra apenas canais e filas permitidos para o usuário.
  * Usuários sem filas ou canais não podem abrir tickets.
  * Tickets são atribuídos automaticamente ao próprio usuário.
* Opção de abrir ticket direto para um usuário do grupo.
* Otimização do cache de cores: cor original mantida após F5.
* Personalização de textos no painel SaaS:
  * E-mails de recuperação de senha.
  * Mensagens de erro (downloads, transcrição, etc).
  * Respostas do bot em transcrições.
* Adição de logs em tickets criados automaticamente pelo bot.
* Tickets fechados não são mais carregados por padrão na tela de Atendimento, melhorando o desempenho.
* Campo `externalKey` na API agora é opcional.
* Melhoria na geração do QR Code: atualização sem recarregar a página.
* Suporte ao campo `n8nApiKey` nos webhooks de canais.
* Novo webhook: criação de tickets por usuários com o tipo `NewTicketUserCreate`.
* Personalização de mensagens automáticas ao solicitar atendimento humano.
* Novo filtro no CRM para listar contatos sem tickets (uso não recomendado para bases grandes).
* Suporte à Grok xAI.
* Novo sistema de ChatBot baseado em palavras-chave:
  * Ativado na primeira mensagem do cliente.
  * Exemplo: cliente digita “Quero comprar” → encaminhado ao bot da palavra “comprar”.
  * Prioridade: CRM > Palavra-chave > Canal > Configuração.
* Fila de processamento de mensagens adicionada ao HUB.
* Filtro de avaliações por nota.
* Avisos ao editar filas/configurações: necessário deslogar usuários para limpar cache.
* Sistema antigo de agendamento removido.
* Sistema de reabertura de tickets descontinuado.
* Prévia de áudio em agendamentos e mensagens rápidas, com botão para apagar o arquivo.
* Em grupos, exibição da foto do contato.
* Exibição do nome do usuário que criou a nota interna no chat.
* Suporte à exibição no frontend de formatos da API não oficial: Produto, Evento, Pagamento e Enquete.
* Suporte ao modelo Meta LLaMA via Groq.
* Melhorias no suporte à exibição de imagens da OpenAI.
* Integração com Whazing Instagram V2:
  * Responder comentários diretamente.
  * Resposta automática via Direct ao receber um comentário.
* Suporte a botões no Instagram e Facebook (máximo de 3, conforme limitação do Instagram).
* Remoção do suporte ao Microsoft Azure Text-to-Speech.
* Suporte ao ElevenLabs nas IAs (resposta em texto salva na lista de mensagens, mas não enviada ao cliente).
* Reformulação do envio de campanhas:
  * Estatísticas de campanhas antigas não serão mais exibidas.
  * Exibição da foto de contatos ao buscá-los para campanhas.
  * Possibilidade de envio de campanhas para grupos (desde que o número faça parte do grupo).
* Importação de contatos:
  * A API oficial não valida se o número é válido.
  * Se houver conexão com a API não oficial, será usada para validação. Caso contrário, o número será importado sem verificação.
* Cadastro individual de contatos:
  * Validação do número desativada caso não haja conexão com API oficial.
* Novos comandos e opções:
  * Comando TypeBot `#{ "crmId": "1" }` para mudar o lane no CRM compartilhado.
  * Chatbot Interno: opção para mudar o lane do contato no CRM compartilhado.
  * Chatbot Interno: nova função de Auto Distribuição de atendimentos (balanceada).
* Suporte a listas via API Baileys (funciona apenas com versão modificada da Evolution; sem garantia de funcionamento).
  * Em casos com botões TypeBot, será enviada a lista.
  * Sistema referencia apenas APIs oficiais como garantidas.
* Nova coluna de importação de contatos: e-mail.
* Cadastro de usuários agora força e-mails com letras minúsculas.
* Se nenhuma fila estiver selecionada, a IA não tentará transferir.
* Importação de contatos diretamente para lane do CRM compartilhado.

#### 📡 Atualizações da API

* Novo endpoint: Criação de contatos.
* Novo endpoint: Criação de tickets.
* Novo endpoint: Status dos canais.
* Novo endpoint: Geração de QR Code.
* Novo endpoint: Exibição de dados do contato.
* Melhorias no endpoint de atualização de etiquetas.
* Novo endpoint: Listar contatos por etiqueta.
* Novo endpoint: Listar contatos por CRM.
* Novo endpoint: Listar contatos por Carteira.
* Novo endpoint: Mover contato no CRM compartilhado.
* Novo endpoint: Validação de número WhatsApp.

Versão 2.8.14.4

* bug - Correção filtro não exibir tickets no ChatBot
* bug - Correção exibir valores a enviar da campanha

Versão 2.8.14.3 - 25/03/25

* Melhoria cache mensagem enviada

Versão 2.8.14.3

* integração simples wavoip para fazer chamadas somente
* Ajustes dashboard by carlos eduardo
* Aumentado limite envio arquivos 100MB e liberado enviar qualquer formato
* Relatorios tickets exibi etiquetas

Versão 2.8.14.2

* Suporte mensagem agendadas Grupos
* Quebra linha chatinterno
* Disable botao enviar Atendimento até acabar envio
* Ajustes para melhor desempenho
* Renomeado menu empresas para SaaS
* Restriger exportar contatos somente para admin
* Encaminhamento mensagem, garantir saiu mesmo whatsapp e criar ticket usar mesma fila ticket original
* Enviar mensagem enter tela print

Versão 2.8.14.1

* Melhora sistemas mensagens, tentativa recuperar mensagens não compativeis
* No Canal whatsapp nova opção - Ignorar Grupos(necessário reniciar conexão)
* Webhook canal de ticket fechado - notifica quando fechado por inatividade

Versão 2.8.14

* Telegram
* Suporte integrações, chatbot interno, transcrição audio, avaliação
* ChatBot interno
* Receber arquivo bot recebe nome do arquivo

Versão 2.8.13.1 - 13/03/2025

* Melhorias na validacao se usuario esta online
* Alterada sistema ligação - não enviar mensagem não aceita chamada caso já tenha sido enviado ultimas 24 horas - vamos ver como se comporta

Versão 2.8.13.1 - 12/03/2025

* Novo sistema conversão audios enviados e recebidos backend - tentar economizar processador
* Novo sistema download arquivos backend - tentar economizar processador
* Envio audio hub Instagram
* Atualização edição chatbot - Descidi liberar antes
* Troca versão alternativa baileys - pra ver se melhora algo - mas falta processamento é um grande problema - Mas tenho maquina 10 nucleos, nem toda empresa vps honesta e entrega realmente real, as vezes so são virtuais, e você compartilha nucleo com muitos usuarios.
* Fechar ticket ele retira integração - possibilitando apagar integração futuramente
* Listagem ticket pendente mostra foto - colocado botao aceitar e fechar ticket

Versão 2.8.13 - 08/03/2025

* Melhoria validação telefones sem 9 no whatsapp envio mensagens api para evitar falsos envios
* Removido filtro data adicionar campanha so dava confusão
* Verifica se foi enviada mensagem bloqueio chamada se tiver já não envia denovo

Versão 2.8.13 - 07/03/2025

* Erro CRM compartilhado - Exclusão de um contato de uma lane direto pela edição contatos não tava atualizando no crm

Versão 2.8.13 - 05/03/2025

* Erro CRM compartilhado - cadastro novos não listando lanes

Versão 2.8.13

* Mudança nos socket
* Usuarios
* Aviso já existe um cadastro com aquele email
* Tarefas
* Botão para vizualizar a tarefa completa
* Atualização cores mais alguns botões para seguir tema. Acredito com esse não ficou pontos sem ajustes
* Alteração mensagem Assas "Opss!!!!\*\nNão localizamos nenhum boleto! Estamos transferindo para um _Atendente_!"
* Adicionado suporte proxy tipo socks nas configuração conexão whatsapp e possivel .env para todos whatsapp
* Chat interno
* bug - permitir envio mais de um arquivo
* Alterado logica rejeição chamadas

Versão 2.8.12

* Novo socket destina notificação mais especificas
* Novo Perfil Supervisor
* Pode acessar todos tickets/mensagens
* Pode apagar ticket individual
* Pode apagar anotação
* Acessar contatos mesmo estando desabilitado configurações
* Relatorios completos da dashboard
* Relatorios
* Painel Atendimento
* Editar e criar ChatBot, não pode apagar
* Whatsapp reniciar conexao, desconectar e ler qrcode novamente
* Acesso completo campanhas
* Acesso completo etiquetas
* Filas criar e editar
* Acesso completo edição equipes
* Usuarios acesso alterar, criar e editar todos usuarios exetos os admin, não pode escluir
* Agendamentos acesso total
* Despedida acesso total
* Tarefas acesso total
* Mensagens rapidas acesso total
* CRM acessa de outros usuarios
* CRM
* bug - Com essa opcao ativa Separar lista de lane por usuario o admin nao conseguia acessar kanban outros usuarios
* bug - Lista contatos carregar crm admin consultar de outros usuarios
* Nova opção CRM compartilhado, todos usuarios compartilharam lanes.
* Atrelar chatbot na Lane sera acionado esse chatbot em novos tickets desse contato
* Atendimento
* bug - melhoria envio audio troca de Atendimento
* bug - troca mensagens 2 whatsapp cadastrados mesma empresa
* bug - anotação grande gera rolagem pagina dados contato
* bug - Listando grupos todos usuarios
* bug - Correção perca da cor canal
* PDF vizualizar nova ABA
* Badge seguir cor tema
* Ao clicar ticket com mensagens nao lida ele não sobe mais lista
* Clica esc fecha chat aberto
* Ao clicar ticket ja bem caixa input pronta digitar nao prescisa ir ate nela e clicar
* Ticket é de grupo desativar botão transferir bot
* Novos filtros admin
* Listar agendamentos no dados contato
* Filas/Integrações
* Usuario/Equipes
* Empresas
* Configurações
* bug - F5 perde cores
* Campanha
* bug - Informações corretas envio campanha
* bug - Atualizar pagina perde cores
* saudação - Ele considerava hora clicado programar envio montar saudação, entao caso horario fosse outro ele mandava errado.
* Aviso do risco de uso campanhas
* Filtro por lane da CRM
* Validação data para não ter problemas disparo e enviar de uma vez
* Validação contatos caso ja tenha enviado campanha que foi cancelada, enviar somente contatos que não foram enviados
* Relatorios
* bug - Filtro relatorio tickets filtra fila
* Novo relatorio por lane da CRM
* Novo relatorio de contator por carteira
* Ajustes seguir cor do tema
* Contatos
* bug - Correção modo dark adicionar contato
* Carregar agendamentos na edicao contatos
* Menu
* Renomeado menu filas e usuarios
* Api agrupado juntos canais
* Webhook
* Colocado no sistema de filas
* Novo Webhook Ticket transferido
* Novo Webhook Ticket fechado
* ChatBot
* bug - Se não tiver mensagem encerramento não encerava ticket
* Nova opção "fazer nada" realmente o que ta escrito não altera status chatbot para usar por exemplo na opção qualquer resposta e você nao quer avance as etapas. E nao exiba erro opção invalida
* Integrações ia
* bug - Melhor formatação resposta da ia para evitar espaço desnecessarios
* Colocado suporte, imagem, docx, pdf, xlxs
* Dashboard
* Charts seguir cor do tema
* Empresas
* bug - Escolha cores painel whitelabel
* Personalização mensagem limite arquivo
* Personalização mensagem não compativel com sistema
* Planos
* Exibição erro quando existe plano mesmo nome
* 2 Novas variaveis
*   Saudação Espanhol:

    ```bash
    {{greetingEs}}
    ```
*   Saudação Ingles:

    ```bash
    {{greetingEn}}
    ```
* Chamadas recebidas não abre mais ticket
* Hub Instagram
* Recebe comentarios na integração
* Fechar automaticamente Tickets de comentárioss
* Assinatura nao envia mais \* negrito
* Conexão Whatsapp
* Alem de qrcode disponivel agora opção conectar com numero telefone
* Desativar mensagem temporario automatico foi retirado de grupos pois somente admin pode alterar isso
* Agendamento
* bug - Refatoriação logica para ver se não endoida mais
* Opção gravar audio
* Mensagens rapidas
* Opção gravar audio
* Segurança
* Single Login - Não possivel logar 2 dispositivos mesmo tempo - Opcional desabilitar no usuario
* Mudança badge notificação atendimento lista ticket com mensagens nao lidas abertos

Versão 2.8.11

* Chat Interno
* bug - chat interno quando mensagem e muito comprida gerava rolagem lista de usuarios
* novos formatos aceitos .dwg, .cad, .cdr, .psd, .ai
* Botão download midia
* Contador aparece menu mensagens não lidas agora lista das equipes tambem
* Agendamento
* bug - exibição nome contato na lista agendamento
* Agendadamento enviado agora aparece na lista mensagens no atendimento
* Permite agendar mensagem somente com anexo tirado obrigatoriedade texto
* Tela Atendimento
* bug - nome arquivos com acento ajuste
* Simplificado nome arquivos ficar mais proximo possivel original
* Melhoria botão download midia
* Nova opção exibir status conexões
* Novos elementos foram incluídos para identificar mensagens enviadas por diferentes tipos de bots ou automações (como ChatGPT, agendamentos, campanhas entre outros). Cada tipo possui um ícone e rótulo distintivo, facilitando o entendimento no chat. Estilos específicos foram adicionados para manter integração com o design existente.
* Identificação usuario enviou mensagem
* Campanha
* Mensagem enviada agora aparece na lista mensagens no atendimento
* Painel de atendimento foi atualizado para modo diferente agora ele atualiza status tickets automaticamente botão tela cheia para quem quiser colocar televisão por exemplo ir acompanhando atendimentos
* CRM
* bug - ao da F5 perdia cores menu
* Quando tem ticket aberto o icone vai direto pro ticket
* Avaliações passa para dentro relatorios
* Protocolos passa para dentro relatorios
* Anotações passa para dentro relatorios
* Agendamentos antigos passa para dentro relatorios
* Canais
* bug - cadastro canal whatsapp marcação importação mensagens ficava tracinho trazendo falso positivo
* API
* Mensagens enviadas por api nao abre mais varios tickets usa sempre o ultimo
* Melhoria vizualização logs pm2 log
* Financeiro
* bug - ao da F5 perdia cores menu

Versão 2.8.10

\--- Atenção essa versão somente aceita hub adquirido de revenda autorizada na Whazing --- --- Caso tenha adquirido de terceiros não atualize ---

* bug grave - Não estava recebendo mensagens do hub
* Hub acesso intagram, facebook e Webchat estara disponivel na versão FREE
* bug - criar novo ticket contatos envia mensagem transferencia
* Aquele aviso de mensagem Mensagem recebida não compatível com o sistema agora aciona bots e integrações
* Ajustes Layout
* Modal ajustado tamanho pra ficar x no lado nome Modal
* Tamanho conteudo tela
* Retirado botão notificação, silenciar e usuario da direita
* Notificação aparece menu
* Usuario passou fazer parte menu
* Alguns menus foram agrupos, como Equipes ficou junto usuarios e integrações junto com as filas
* Teve bastante ajuste layout então pode ter passado algo esqueci mencionar
* Avaliação
* Para quem tem mensagem despedida ele envia antes mensagem despedida depois pergunta avaliação
* Notas agora vão até 5
* Dashboard consultar as avaliações recebidas
* Tela Atendimento
* bug - modo dark aparecer botao fechar contatos
* bug - Ao receber novo mensagem marcação respondendendo desmarcava
* Badge total tickets passar usar cor tema, total geral foi descontinuado dava contagens muito erradas
* Exibi um Badge com numero tickets nao lidos em abertos em vermelho
* Alguns formatos arquivos vai ter opção baixar
* Adicionado formatos .dwg, .cad, .cdr, .psd para envio
* Nova configuração para tickets fechados listar somente ultimo do contato
* Supervisor de Fila - Esse usuario nao vai considerar "Não visualizar Tickets Privados já atribuidos à outros usuários" vai exibir todos tickets pertecentes a fila que ja tem usuario
* Versão emoticons modificada que possivel pesquisar pelo tipo emoji exemplo sorrindo
* Ao clicar mensagem respondida foca ela se ela estiver rederizada tela.. Ou seja se mensagem nao esteja carregada na tela não vai funcionar
* Agendamento
* Novo sistema remodulado idenpente do tickets, os agendamentos antigos nessa versão ainda serão enviados futuramente será totalmente removido
* Possibilidade repetir agendamentos
* Kanban
* Agora modulo se chama CRM
* Administrador pode consultar lanes de outros usuarios - somente leitura
* Botão adicionar mais visivel
* Opção colocar ordem quer aparece lanes
* Tarefas novo filtro por status
* Nova integração com ia DeepSeek
* Nova Ingração com ChatGPT suporte a assistant
* Importar contatos valida se formato do arquivo compativel com sistema para evitar falsos positivos
* Chat interno
* Notificação exibi se foi grupo ou individual
* Suporte envio de audios

Versão 2.8.9 - 31-01-2025

* update versao baileys 6.7.10

Versão 2.8.8 - 30-01-2025

* troca versão baileys para resolver problema ban grupos
* Mudança fechamento quando tem avaliação

Versão 2.8.7 - 28-01-2025

* bug - Se atendente demorar responder voltar tickets aos Pendentes - retira o usuario associado agora
* Retirado espaço assinatura

Versão 2.8.7 - 27-01-2025

* bug - não marcar como lidas atendimentos feitos pelo bot
* bug - 2 via boleto assas somente interagir caso boleto esteja como pendente

Versão 2.8.7

* bug - mensagens editadas no android nao aparecia
* bug - envio arquivos pelo hub
* bug - prataforma não vai trava receber arquivos grandes, ele vai dividir arquivos em partes para baixar( nos testes teve alguns arquivos ficaram comrompidos)
* Suporte recebimento mensagens lista de transmissão
* Mensagem vizualizacao unica da aviso na prataforma

Versão 2.8.6

Agendamentos na versão free ele adiciona na mensagem "Enviado usando whazing.com.br" Tarefas passa ser recurso exclusivo da versão Premium

* Bug - alterada logica mensagem despedida para ver se para reabrir ticket
* Bug - Corrigido alguns erros de digitação
* Tela protocolos tem aquele botão abre chat com lista mensagens
* WhiteLabel foi colocado tamanho recomendado imagens e formato
* Tela anotações ticket tem aquele botão abre chat com lista mensagens
* Dashboard foi alterado termos para ver se fica melhor explicativo
* Função fecha tickets inativos chat interno agora fecha caso ticket tenha fila ou usuario atribuido
* Tela canal foi colocado mostrar numero conectado para melhor identificação
* Ao criar anotação aparece tela mensagens tambem como nota interna para melhor identificação no ticket
* Ao encaminhar mensagem agora modal se fecha sozinho
* Notificações tela atendimento colocadas topo para não atrapalhar o input
* Ao reabrir ticket ele ja carrega tela de mensagens
* Tela ajuda colocado posibilidade substituir videos por iframe de algum site
* Lista empresas caso esteja vencida muda vermelho vencimento

Versão 2.8.5 beta

* Bug - não deletava mensagem rapida criada por outro usuario
* Troquei versão baileys para ver se para esse bug desconexão
* Enviar legenda em print colado direto tela atendimento
* Lista tickets coloquei limitação caracteres nao ficar saindo fora
* Relatorio tickets foi colocado link ir para ticket
* trocado textarea mensagem não aceita audio

Versão 2.8.4 beta

Transcrição de audio passa ser recurso exclusivo da versão Premium Avaliação de atendimento passa ser recurso exclusivo da versão Premium Campanhas na versão free ele adiciona na mensagem "Enviado usando whazing.com.br "

* bug beta - correção update tarefa deslogar usuario comum
* Dash novo chart mostra horarios picos de tickets. Ele considera hora ticket foi criado e soma. Serve para saber horario quem tem mais tickets novos.
* Dash novo chart atendimento por usuario - grafico pizza esse conta fechados estatistica gerais
* Dash novo chart atendimento por usuario - grafico barras esse tickets abertos - ao vivo não considera filtro datas
* Dash novo chart atendimento por status ao vivo - grafico pizza - ao vivo não considera filtro datas
* Nova Opção para enviar mensagem ao cliente caso ele envie audio falando que não aceita mensagens de audio
* Nova opção para enviar a transcrição de audio como resposta
* Enviar via Api mensagens para grupos
* Novo Webhook no canal

Versão 2.8.3 beta

* bug beta - mensagem deletada deletar realmente
* bug - edição grupos chat interno
* bug - alteração exibição grupos chat interno para modo dark mostra nome do usuario
* Mensagens rapidas separada por usuario cada um tem as suas
* Periodo importação limitado 30 dias
* Troca versão lib audio novamente para testar
* Novas versões sons notificações, para quem preferir os antigos estao na pasta ainda
* Update de segurança com camada extra de validaçães no backend de usuarios
* Escondido botões na tela kanban tambem para não atrapalhar

Versão 2.8.2 beta

* bug beta - relatorio etiquetas
* bug beta - exibicao pdf no frontend
* bug beta - emiti atualizacao ack grupos
* bug - correção exibição modo dark tela login
* bug - filtro data tela contatos da campanha
* Correção alguns bugs criados na beta com sistema de filas
* Retirado exibição plano 1 para não causar mais confusão
* Remoção linkpreview
* Validação input para não conseguir da varios enter enviar varias vezes mensagem repetidas
* Ajustes para aparecer botao zoom nas imagens
* Opção reabrir ticket aparecer modo mobile
* Somente marca mensagens como lidas se ticket estiver aberto
* Criada função desativa automaticamente mensagens temporarias whatsapp(evitar aquele i lado mensagem da impressão sistema tem erro)
* Mensagem editada foi invertida campos(mensagens antigas vai aparecer ao contrario)
* Bot funciona se tiver usuario atribuido no canal tambem agora
* Opção ocultar tickets no chatbot corrigida
* Suporte exibir se mensagem foi encaminhada, ao encaminhar exibi informação tambem
* Fechamento automatico de ticket passar ser por canal
* Mensagens enviadas pela api, caso ticket seja aberto pela api ele se fecha automaticamente
* Alterar dados empresa vai deletar invoices em aberto para evitar problemas caso alteração do plano
* Integração somente n8n vai funcionar em grupos
* Automações como "mensagens boas vindas, avaliacao, mensagem de encerramento, mensagem transferir ticket" tambem foi tirada dos grupos

Versão 2.8.1 beta

* bug - Resolver atendimento sem interação automaticamente - Fecha somente se ultima mensagem for do atendente
* Transferir atendimento para ChatBot (Recurso Premium)
* Nova integração - Emissão segunda via boleto Asaas - No transferir para fila ta integração você deve colocar mensagem solicitando cpf ou cnpj do cliente que bot estara aguardando essa informação
* Sistema de fila para envio e recebimento mensagem(em teste)
* Possibilidade acessar tarefas da fila. BullBoard - Verificar .env.example
* Configuração timeout para importação mensagens - Verificar .env.example
* Mudanças timeout socket
* Listar somente chatbot ativos na tela dos canais
* Aumentando tempo recarregar pagina

Versão 2.8.0 beta

* Geração PDF passa ser Recurso Premium
* Criado opção nova Chat Completo ticket - com botão imprimir - melhor gerar pdf por ali - usando opção do navegador
* Chatbot interno usa horario de atendimento você pode mudar fluxo de acordo com horario de atendimento
* Chatbot interno nova opcao "Contem" e "Contem exato". Diferença das duas se você usar contem por com palavra teste se cliente escrever "teste1 outra coisa" ele aceita, mas isso pode causar muito falso positivos. E Caso contem exato vai aceitar se frase for "teste outra coisa"
* Opção agrupar mensagens dos tickets. Ele vai criar varios tickets mas as conversas vai mostrar tudo junto
* Opção Visualizar apenas mensagens das filas que o usuário pertence (Recurso Premium)
* Informações que estão Informações adicionais do contato podem ser usados como variaveis dentro sistema exemplo você tem campo adicional nome CPF se colocar bot ou durante chat \{{CPF\}} ele retornara o valor desse campo
* Pode ser usado chatbot para alterar ou criar Informações adicionais do contato - Na aba condições caso seja preenchido campo de salvar resposta
* Anotações em tickets(Recurso Premium)
* Modo auditoria - Configuração para tickets acessados pelo administrador não será marcado como lidos (Recurso Premium)
* Update automatico versão frontend (so funcionara na proxima versao)
* Senha universal (verificar .env.example) possibilidade configurar senha que consegue logar qualquer usuario
* firstName adicionado nas campanhas
* Contatos filtro por tags
* Contatos filtro por carteira
* Cadastro contatos tenta validar numero tirando 9
* Importar tabela contatos valida numeros
* Dashbord Saas colocado numero contatos e tickets no banco de dados
* Exibir status usuarios alguns pontos
* Painel SaaS consulta se tem atualização estavel
* Novo relatorio de tickets (Recurso Premium)
* Envio legenda em fotos/arquivos
* Melhoria detectação wait typebot
* Atualização de segurança nova versao socket

Versão 2.7.6.6

* bug - Gravacao Audio robotizado celular, troca lib grava espero resolva, aguardo feedback
* bug - Kanban some dados da tela alterados(valor, comentario) ao trocar lane
* bug - Relatorios contatos por estado não funcionava
* bug - alguns formatos arquivos recebidos nao mostrava legenda
* Geração PDF voltado modelo antigo e feito script excluir emojis, novo metodo não tava bom tambem
* Kanban alterado exibir lanes lado a lado
* Mensagens rapidas muito grandes truncar para não gerar tela enorme
* Envio arquivos tenta manter nome original do mesmo

Versão 2.7.6.5

* Suporte envio TXT

Versão 2.7.6.4 beta

* Separei busca tem campo novo buscar mensagens.. Busca contato junto mensagem não tava boa quando tem muita mensagem fica muito lenta
* Correção botão tela mensagem se mexer mouse ia canto tela

Versão 2.7.6.3 beta

* bug - Importar mensagem nao acionar bot interno e nem horario de atendimento

Versão 2.7.6.2 beta

* bug grave - Faz serviço travar caso excluir um usuario que esteja logado em algum local
* bug - notificação somando tickets fechados - filtro tickets status nao tava funcionando
* Bug da beta - Listagem erradas de tickets ainda
* Validação para iniciar ticket pelos contatos evitar erro sem fila

Versão 2.7.6.1 beta

* Bug - Erro alterar usuario comum
* Bug - Melhoria geração pdf com conversas agora exibi emoticons(obs: deixou processo mais lento gerar pdf)

Versão 2.7.6 beta

* Bug versao beta - Campanha erro adicionar contatos
* Bug versão free - Listas filas nao atualizava corretamente versão free
* Bug - Contatos sem numeros fazendo da erro campanhas e outros relatorios
* Bug - Mais uma alteração filtros lista de atendimento para ver se melhora comportamento(não retornava ticket sem fila e atribuido ao usuario)
* Bug - Melhorias formatação textos vindo Typebot
* Delay 10s enceramento ticket pelo chatbot para garantir mensagem de enceramento seja entregue antes de fechar ticket
* Opção selecionar usuario online e offline hoje não tem uma utilidade decidir tirar para futuro talvez usar ela para alguma coisa util
* Mudança de cores padrões pelo painel SaaS
* Campanhas podem ser deletadas qualquer momento retirado validações
* Configuração para whazing não baixar mensagens que você envia por fora da prataforma(exemplo disparo pelo wasender, se cliente responder vai abrir o ticket)

Versão 2.7.5 beta

#### Teve varias mudanças no kanban verificar configuração

* bug - problema formatação numeros causando erros conexoes hub - já que são contatos sem numeros
* Filtro na tela de agendamento pela data que foi agendado
* Chat interno aceita colar print no input
* Filtro LANE de contatos no KANBAN
* Edição lane kanban direto no contato
* Edição lane kanban direto na tela de antendimento
* Nas configurações tem 3 opções novas kanban uma para mostrar contatos tickets fechados, outra mostrar contatos sem fila atribuida e para deixar lanes ser compartilhados entre os usuarios e somente admin pode criar, editar e apagar lista de lanes.
* Tela atendimento mostra descrição informações adicionais tambem
* Tela atendimento mostra Valor negociação caso ela exista
* Opção "Reabrir tickets anteriores" alterada quando for criar ticket pela aba contatos tambem vai buscar tickets anteriores e reabre o mesmo

Versão 2.7.4 beta

* bug - importar historico de mensagem
* bug - tela atendimento modo celular não abre Dados de contato
* bug - Aumentado timeout para envio arquivos maiores edição de mensagens rapidas
* bug - Arquivos enviados pelo typebot não era exibidos corretamente no frontend
* bug - Enviar outros arquivos alem audio mostrava como gravando
* bug - Verificar nome do canal antes de cadastrar um HUB
* bug - Mensagens agendadas envia mesmo ticket fechado agora
* Cache grupos para melhor um pouco desempenho
* Validação se email já existe antes cadastrar nova empresa
* Validação se whatsapp já existe antes cadastrar nova empresa no teste
* Update versão varios pacotes como sequelize e outros
* Opção separada da quantidade tickets abertos e pedentes que carrega tela atendimento
* Permiti abrir ticket em conexão diferente para mesmo contato
* Suporte "instagram v2" do Hub notificame
* Opção Ignorar contato
* Maximo de usuarios e conexões vai respeitar o que esta no plano foi tirado da empresa
* Planos com opção para desativar acesso campanhas, integrações e grupos
* Suporte pagamento Stripe
* Filtro por tags na lista de atendimento
* Tags vem junto com tickets na lista de atendimentos para melhorar desempenho
* Carteiras vem junto com tickets na lista de atendimentos para melhorar desempenho
* Filtro para admin por usuario ou canal
* Hub caso não tenha nome "Name Unavailable" tenta atualizar nas próximas mensagens
* Arquivos Public separado por empresa
* Cache arquivos TypeBot - Sistema vai baixar arquivos e deixar salvo servidor não ter baixar cada vez que fluxo inicia melhorando velocidade e diminuindo consumo recursos
* Videos youtube colocados no Typebot seram baixados e colocados no cache

Versão 2.7.3

* bug - Mensagem duplicando chat interno
* bug - Chat interno depois de um certo numero de mensagens parava de listar
* bug - Consultar log de ticket
* bug - espiar ticket
* bug - Opção resolver ticket sem prescisar abrir ele
* bug - Configuração alterava de outras empresas com usuario SAAS
* bug - Mensagem vindas de story não chegava
* bug - Cadastro HUB respeitar limite de canais
* bug - conversas 2 empresas diferentes na mesma instalação não confirmava envio da mensagem
* Kanban (somente versão premium)
* Cadastro contato mais facil seleção pais vem brasil padrão não prescisa colocar 55
* Embelezamento numero telefone exibir br no lugar 55 e formatar numero
* Ao tentar abrir ticket caso já exista mostra nome do usuario ou fila para facilitar localização
* ChatFlow interno agora aceita transcrição de audio e reconhece caso cliente envie um arquivo
* Mudança 2 empresas diferentes podem usar mesmo nome de whatsapp
* Proporção videos e imagens tela chat melhorado a vizualização
* Melhoria notificações chat interno
* Configuração para desativar notificações de grupos
* Opção Reabrir tickets anteriores ao receber novas mensagens (Com essa opção ativada caso já exista ticket fechada ele vai abrir ele novamente e não criar um ticket novo.)
* Opção para selecionar hora tambem nas opção fechar e apagar ticket em Massa
* Opção deletar ticket individual na tela de atendimento( somente aparece admin)
* Baixar conversa - Ticket em PDF
* Colocado botão chamar whatsapp de suporte em pontos estrategicos(Tela inicial, tela solicitar teste, sesão whatsapp, financeiro, integrações e bot)
* Opção fechar ticket em massa e apagar foi mudada para dashboard
* Alterado tamanho campo Editar Mensagem na tela de atendimento
* Possibilidade alterar timezone pelo .env verificar arquivo example
* Trocada versao Baileys para usada pelo evolution

Versão: 2.6.0

* Suporte facebook e instagram e WebChat via hub (função exclusiva versão premium)
* Melhorias de segurança socket
* Respeitar delay Typebot
* Deletar um canal definitivamente agora, antes somente ocultava conexão

Versão: 2.5.1

* bug - greeting nao tava mais funcionando
* bug - Erro criar contatos conflito entre empresas

Versão: 2.5.0

* bug - Clicar ticket pendente todas opções do topo estavam habilitadas
* bug - TypeBot e outras integrações aciona quando envia mensagem fora da prataforma
* bug - revisado opção deletar empresa para evitar erros
* bug - retornar ticket para fila limpa usuario
* bug - painel atendimento não mostra mais tickets fechados
* Pagina usuarios foi colocado exibir id para ser mais facil usar no TypeBot
* Integração ChatGPT
* Integração Groq
* Integração Microsoft Azure Text-to-Speech
* Opção mensagem despedida personalizadas, pelo admin e pelos usuarios, admin pode criar, vizualizar e editar mensagens de todos usuarios,Usuarios somente podem acessar suas proprias mensagens
* Mudança sistemas de variaveis e novas variaveis consultar arquivo pasta docs
* Opção escolher ocultar tabs ou não tela de atendimento
* ChatFlow opção enviar mensagem ao roteador para fila ou usuario
* Opção cadastro usuario para ignorar carteira mostrar todos contatos

Versão: 2.4.1

* Melhoria TypeBot caso transcrição audio estiver ativa transmite resultado para o typebot
* Novas opções TypeBot, transferir ticket, fechar ticket, colocar tag, parar ver arquivo docs

Versão: 2.4.0

* bug - botao enviar mensagem e audio tinha clicar lado meio nao funciona - obrigado Felipe
* bug - Ao clicar ticket nao exibia cor do canal e sem clicar nao exibia nome do usuario
* bug - Responder audio com transcrição perdia a resposta, pois fazia transcrição novamente
* Menu saas da empresa foi colocado opção para listar Faturas em aberto para apagar ou marcar como pagas
* Integração TypeBot
* Melhorias internas da integração baileys
* Alteração Menu para abrir descrição no computador - melhorias nesse menu pelo Felipe
* Alteração do Chat Interno e tela atendimento para tela cheia
* Novas configurações disponiveis .env, verifica .example da pasta backend

Versão: 2.3.5

* bug - não carregar alguns tickets
* bug - Não envia nome atentende aceitar ticket
* bug - ajustes (Admin) - Visualizar Todos para melhor funcionamento
* Separado opção quantidades tickets abertos/pedentes e fechados carregar tela de atendimento
* Escolha cor canal para diferenciar tela atendimento
* Botão reniciar as conexões no canais
* Colocando sistema simular digitando e gravando audio para tornar atendimento mais humano
* Suporte WebHook - N8N

Versão: 2.3.4

* Bug Assas - Cada vez gerava link novo agora usa o mesmo
* Bug - Lista de contatos não carregava as etiquetas
* Tirado coluna instagram e telegram tela contatos ficar mais limpa
* Sistema de envio mensagem ao aceitar ticket e transferir ticket foi remodelado, as configurações agora são nos canais e será possivel personalizar mensagens
* Botão resolver ticket na lista de tickets
* Busca tela atendimento busca mensagens tambem
* Envio de reações
* Configuração para bloquear usuarios reabrir tickets fechados(Podem consultar mas não reabrir o mesmo)
* Opção contatos para desativar bot ou campanha
* Ajuste para exibir mensagem de erro ao tentar cadastrar contato sem ter whatsapp conectado

Versão: 2.3.3

* Bug cadastra empresa pelo painel sem CNPJ
* Bug limite 40 usuarios alterar grupos chat interno
* Silencioso não desativava

Versão: 2.3.2

* Suporte Asaas
* Retirada campo CNPJ tela solicitar teste e Validação campos
* Tela SaaS campo cnpj passa a ser opcional
* Ao cadastra teste na pagina solicitação redireciona para pagina login

Versão: 2.3.1

* bug - adicionar novo canal nao aceitava

Versão: 2.3.0

* outros pequenos bugs
* bug - Tela canais e atendimento listar mais de 40 usuários
* bug - tarefa mesmo concluida aparecia ainda na notificações
* bug - ajustes planos aceita planos com virgula no preço
* Configuração mercado pago foi colocado detalhes do webhook
* Atualização libs do backend e do frontend
* Remoção conteudos não usados/defasados
* Colocado Logo nos relatorios gerar impressão
* Opção tirar som das notificações
* Variveis adicionadas (\{{user\}}, \{{phoneNumber\}}, \{{email\}})
* Novas configurações do banco de dados (para ajustes desempenho) via .env
* Ajustes chaves para performace baileys
* Exibir horario na lista de agendamentos
* Sistema de avalição
* Transcrição de audio
* Configuração para quantidade tickets carregar tela atendimento(padrão 30)
* Tela atendimento abas (Aberto, pedentes, fechados e bots aparece somente se tiver tickets) - mudado no filtro texto resolvidos para fechados para seguir mesmo padrão
* Tela atendimento botão carregar mais tickets

Versão: 2.2.5

* Atualização emergencia - Update lib não oficial baileys

Versão: 2.2.4

* Update lib não oficial baileys
* Totalmente remodelado sistema importar mensagens ao ler QRCODE
* Detectar mensagem apagada pelo contato
* Integração com Mercado Pago

Versão: 2.2.3

* Modulos tarefas
* Bug envio audio IPHONE
* Bug painel escutar audio IPHONE
* Bug não tava exibindo mais de 40 usuarios
* Correção outros pequenos bugs

Versão: 2.2.2

* Caso desabilitar smtp ou opção solicitar teste agora botão esqueci senha e registre-se agora sai da pagina login
* Correção erro na API
* Envia mensagem para whatsapp cadastrar teste(caso whatsapp seja invalido não vai aceitar cadastrar teste)
* Novas apis mostrar informação do Ticket, mostrar tickets no chatbot, mostrar todos tickets, troca de etiquetas, troca de filas, envio mensagens via metodo GET, alterar status ticket
* Correção outros pequenos bugs

Versão: 2.2.1

* Correção geração protocolo, somente gerar quando solicitado
* Opção caso atendente demorar responder voltar ticket para Pedentes
* Correção opção autoclose não estava funcionando
* Nova opção flow para bot enviar mensagem depois tempo caso cliente não responder
* Ajuste menu lateral flow
* Opção flow quando cliente manda mensagem fora do horario de atendimento o que fazer aquele ticket
* Opção para colocar numero vezes bot deve enviar mensagem de fora horairo de atendimento
* Correção erro obter carteira, tags
* Melhoriar no MODO DARK
* Opção de baixar Fluxo e importar Fluxo
* Correção outros pequenos bugs
