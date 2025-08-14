## Versão 2.10.1.5 Final

- bug - Integração ia caso tenha lista, botão outro tipos mensagens trava ia
- Supervisores podem criar tarefas outros usuarios

## Versão 2.10.1.4 Final

- contagem mensagem não lidas - mudança sistema contagem, quando cliente conversa 2 whatsapp diferentes da mesma empresa somava valores não lidos, ou grupos causando valores errados
- Emoji editar mensagem

- api plus - novos modelos mensagens mapeadas

- mudança posição botão dark

- Tickets de grupos - mudanças
 Não fica atribuido usuario somente as filas
 Somente supervisor ou admin pode fechar ticket, transferir ou retornar fila
 Coloque ticket grupo em uma fila que usuarios que você queira tenha acesso ticket possa ver

## Versão 2.10.1.3 BETA

- bug 2.10.1.2 - listagens mensagens atualizar agora se tiver na 2.10.1.2

## Versão 2.10.1.2 BETA

- api plus - validação garantir campos necessarios serem preenchidos
- api plus - Correção mensagens editadas
- api plus - correção download documentos
- api plus - contatos recebidos whatsapp web e iphone correção
- botão download audio

## Versão 2.10.1.1 BETA

- api plus - Marcação encaminha mensagens api plus enviadas e recebidas
- bug - api plus - Correção bug envio mensagem celular contato cadastrado nome errado
- api baileys - suporte exibir imagem vindo anuncio - identificar anuncio
- api plus - suporte exibir imagem vindo anuncio - identificar anuncio
- api plus - melhoria importação contatos captura nome
- Configuração .env determina tempo expiração token

## Versão 2.10.1 BETA - Changelog

- Botão agendamento tela atendimento api plus
- API plus melhora captura mensagens que pode causar perda da mensagem.
- Validação para busca lid e cadastro caso chega somente numero do contato para garantia melhor concistencia dados

## Versão 2.10.0 BETA - Changelog

- bug - Correção update crm pelo painel atendimento usuario comum

**Atenção** campanhas criadas que envia arquivos antes dessa versão não vai funcionar, deve alterar arquivo -

- Novo Api PLUS - Mais estavel e leve - Terá custo por canal
API não oficial
API com recursos PREMIUM
API maior estabilidade e mais recursos
Suporte envio botão, listas, botão copia e cola, link, solicitação localização
Por ser tratar api paga teremos garantia maior de funcionamento

Api processada em um servidor externo as mensagens tornando muito mais leve envio e recebimento de mensagens para sua vps, favorecendo uso de grupos por exemplo.

Dica de ouro em campanhas possivel enviar com botões colocar um botão com texto "Denunciar e Bloquear". Assim você faz cliente mesmo não querendo receber interragir e diminui chance do ban

Sera possivel migrar baileys para api plus ou voltar sem, perda mensagens.
Api plus suporte wavoip - tem que fazer leitura qrcode no painel do wavoip - vai ficar 2 locais conectados painel wavoip e no painel whazing

- Organização arquivos - por data e ticket - sistema vai criar subpasta anomes ex: 202507 e para campanhas pasta campaign e mensagens rapidas pasta fastreply 

- Opção SaaS para ocultar botão multiplos logins - somente oculta botão caso usuario tenha ativado opção continua Ativado

- Opção SaaS botão coringa - Você pode criar nova opção menu para ir para site personalizado seu

- Opção duplicar campanha

- Follow-up
Pode ser definido tela de atendimento, typebot, api, bot interno, CRM
Endpoint listar contatos que estão naquele Follow-up

- ChatBot Interno - Alteração CRM para poder remover contato da LANE

- webbook - adicionado informacao kanbanId e followupId

- Endpoint suporta arquivo base64

- Sincronizar mensagem com um contato - somente api plus
-  API Plus - maximo 100 - Verificar docs

- Planos criado opção desativar importação mensagens(canal baileys), essa opção causa muito problemas desempenho durante processo achei melhor criar opção quem queira desativar

- Relatorios de anotações novos filtros e opção impressão e exportar excel
- Relatorios de protocolos novos filtros e opção impressão e exportar excel
- Relatorios de ligações opção impressão e exportar excel
- Relatorios de avaliações opção impressão e exportar excel

- Integração de IA para melhorar e sugerir mensagens no atendimento

- Edição contato opção desativar transcrição audio

- Opção para transcrever audios enviados tela atendimento

- Opção admin ou supervisor caixa de seleção para excluir varios contatos mesmo tempo

- Permitir excluir contato mesmo tendo ticket

- Botão excluir contato individual somente admin ou supervisor

## Versão 2.9.4.8 Final - Changelog - 29-06-2025

- Mensagem recebida de lid solicita automaticamente para compartilhar numero telefone

## Versão 2.9.4.8 Beta - Changelog - 23-06-2025

- bug - correção bug envio varios arquivos

## Versão 2.9.4.8 Beta - Changelog - 22-06-2025

- bug - erro integração mercado pago - painel saas
- update baileys versão com algumas pequenas melhoras @lid


## Versão 2.9.4.8 Beta - Changelog

- Endpoint cadastro teste alterado para evitar ataques testes falsos

- API ADMIN - Endpoint Admin criar teste - esse endpoint separado com validações extras, nao prescisa ta habilitada a opção criar testes, não envia mensagem de boas vindas(ideia vocês personalize maximo possivel por exemplo usando typebot). Caso queria validar telefone ou enviar mensagem boas use endpoints ja existe e personalize a experiencia do usuario.
- API ADMIN -  Endpoint Admin update empresa
- API ADMIN - Endpoint Admin listar todas empresas ou filtrar id especifico
- API ADMIN - Endpoint Admin adicionar 1 mês na empresa
- API ADMIN - Endpoint Admin Listar usuarios da empresa
- API ADMIN - Endpoint Admin atualzar senha usuario

- API - Endpoint para editar contato
- API - Enpoint listar mensagens ticket
- API - Melhoria validação token api externa para evitar ataques

- Busca por mensagem especifica na tela atendimento - tem limites, contatos com muitas mensagens não vai localizar todas
- Input do atendimento aceitar correção sugeridas pelo navegador usado
- Importação contatos do aparelho tem agora posibilidade de selecionar etiquetas, carteira ou crm

- TypeBot - Criado integração lista modelo evolution - possivel criar lista personalizada usando burble text  - tem exemplo fluxo para importar
- TypeBot - Criado integração botão estilo whazing - possivel criar botão direto usando comandos especificos typebot
- Typebot - As informações adicionais funcionaram como variaveis typebot (atenção essa informação carregada quando inicia conexão typebot se alguma for alterada durante fluxo typebot não vai alterar até fluxo typebot for reniciado)
- Typebot - Novo comando possivel para alterar informações adicionais do contato - tem exemplo fluxo para importar
- Typebot - Ajustados parte comandos para quando ser usado etiquetas, crm, informações adicionais não parar fluxo

## Versão 2.9.4.7 Beta - Changelog

 *quem ta na versao Versão 2.9.4.6 Beta atualize agora urgente*

- bug - bot enviar mensagem transferencia no fechar ticket
- bug - Exibição data feriados
- bug - botão clicar responder audio
- bug - Correção envio arquivos criado versão 2.9.4.6

- Relatorio tickets, filtro por estado
- Relatorio tickets, filtro por informações adicionais do contato
- Relatorio tickets, mostra numero telefone do contato
- Relatorio tickets, mostra informações adicionais do contato
- Relatorio tickets, botão ocultar filtros para ser melhor leitura dos relatorios
- Relatorio tickets, opção escolher quantidade tickets carregar
- Relatorio tickets, opção escolher carregar grupos ou não
- Relatorio tickets, opção escolher colunas para aparecer
- Fechamento ticket em massa marca eles como lidos
- Listar usuarios painel saas da empresa mostra se ta online e ultimo horario estava online - informação importante acompanhar se cliente esta usando sistema, e tentar pegar feedback por que não

## Versão 2.9.4.6 Beta - Changelog

- bug - bot não acionar com arquivos
- bug - mensagens editadas com anexo ficava undefined texto

- webhook fechamento ticket colocado closingReasonId
- Suporte edição caption arquivos enviados
- Suporte responder com imagem ou arquivo ou audio

- preparativos para mudança whatsapp criação estrutura para trabalhar com "LID"
- API se usar numero@lid da ele vai enviar usando lid
- Webhook adicionado lid do contato no json

## Versão 2.9.4.5 Beta - Changelog

- bug - pix assas

- Melhoria tratamento e aviso de erros ao criar novo ticket caso ja tenha uma aberto

## Versão 2.9.4.4 Beta - Changelog

- mudanças no banco - não permite downgrade de versão

- bug - Mensagem rapida remover anexo

- Tenant vencido não consegui mais enviar mensagens
- Refatoração envio hub para melhor desempenho e futurar auditorias
- Refatoração bot interno preparação novos canais
- retorno filtro canal dashboard apaguei sem querer
- melhoria integração ia - configuração Intervalo (ms) entre mensagens
Define o tempo de espera (em milissegundos) entre as respostas da IA.
Por exemplo: 15000 ms significa 15 segundos.

Durante esse intervalo, se o cliente enviar várias mensagens, a IA responderá apenas uma vez — ou seja, ela aguardará esse tempo antes de responder novamente.

Resumo: a IA só responde uma vez a cada intervalo definido, mesmo que o cliente envie várias mensagens nesse tempo.

## Versão 2.9.4.3 Beta - Changelog

- atualização versão baileys correção conectar via codigo

## Versão 2.9.4.2 Beta - Changelog

- Opção salvar senha tela login
- Cache local figurinhas enviadas
- Possivel quebra linha tela print tambem
- Melhorias layout da dashboard
- Identificação mensagens enviadas por fora whazing

## Versão 2.9.4.1 Beta - Changelog

### 🐛 Correções de Bugs

- Arquivos recebidos com # no nome, não conseguir abrir
- Volta volta rolagem lista mensagens

## Versão 2.9.4 Beta - Changelog

### 🐛 Correções de Bugs

* Corrigida a **cor da legenda nos gráficos de pizza** ao passar o mouse (hover)

### ⚙️ Melhorias de Sistema

* **Otimização no backend:** remoção de trechos de código não utilizados
* **Melhoria visual** na exibição de áudios na tela de atendimento
* **Zoom na imagem de perfil do contato** na tela de atendimento
* **Remoção do texto "aproximadamente"** na tela de tickets, por ser muito extenso
* **Campo de edição de contatos atualizado:** agora é possível desabilitar a avaliação do contato (apenas para Admins e Supervisores)
* Pressionar **Ctrl + Enter permite quebra de linha** na tela de atendimento

### 🤖 Integrações e Automações

* Atendimentos feitos por **automações (IA, Typebot)** agora marcam mensagens como lidas automaticamente
* Tickets com **integrações ativas** (como Typebot ou IA) **não acionam validação de horário de atendimento**

### 🧑💼 Funcionalidades e Recursos

* **Nova indicação visual:** mostra qual usuário reagiu à mensagem
* **Nova indicação visual:** mostra qual usuário encaminhou uma mensagem
* **Nova opção "Motivo de Encerramento" (somente plano Premium):**

  * Ao encerrar um ticket, o usuário deverá escolher um motivo obrigatório
  * Os motivos podem ser utilizados como filtro e em gráficos no dashboard
  * A opção só aparece se houver motivos cadastrados e ativos
  * Exemplo de motivos: "Cliente desistiu", "Preço alto", "Não respondeu"

### 📊 Relatórios e Dashboard

* **Nova coluna no relatório de tickets:** "Primeira mensagem" (mensagem que originou o ticket), útil para rastrear a origem do lead
* **Novo gráfico de evolução por canal**
* **Novo gráfico de atendimentos por canal**
* **Filtro por canal** adicionado à dashboard (além do filtro por data)

## Versão 2.9.4 Beta - Changelog

- bug - correção cor legenda ao passar mouse graficos de pizza

- Otimização backend retirada partes não usadas
- Zoom imagem profile do contato tela atendimento
- Atendimento feito por automações como ia, typebot marcam mensagens como lidas.
- Ticket com integrações ativas não aciona horario de atendimento. Ex. Typebot, IA.
- Indicação usuario que reagiu
- Indicação usuario encaminhou mensagem
- Nova opção Motivo encerramento(somente premium) - Ao fechar ticket usuario será obrigatorio selecionar motivo para poder fechar, esses valores podem ser usados no filtros e grafico dashboard, caso não tenha motivo cadastrado ou ativo a opção não aparece. Exemplo: Não fechou, Preço alto. Aumentando o rastreamento dos atendimentos
- Nova coluna relatorio tickets, primeira mensagem(mensagem que fez ticket ser aberto). Pode ser usado para ajudar rastrear origem do lead.
- Melhoria visual audios tela atendimento.
- Retirado aproximadamente tela atendimento tickets, texto muito longo.
- Novo grafico evolução por canal(anterior era por tipo de canal)
- Novo grafico atendimento por canal(anterior era por tipo de canal)
- Alem do filtro data será possivel filtrar por canal na dashboard
- Segura Ctrl possibilidade fazer quebra linha na tela atendimento
- Edição contatos configuração desabilitar avaliação, somente disponivel para admin e supervisor

## Versão 2.9.3 Beta - Changelog

### 🐛 Correções de Bugs

- bug da beta - * Corrigido botão de **mutar chamadas (wavoip)** que não funcionava corretamente

### ⚙️ Melhorias e Novos Recursos

* Focar automaticamente após envio de mensagens, campo texto
* **Botão "Sincronizar Contatos"** agora disponível apenas para administradores
* Validação de **horário de atendimento** ajustada: se o responsável estiver online e o ticket aberto, aviso fora do horário não será enviado
* Implementado **cache no título da página** para caso queda backend manter titulo
* Campos de **botões e listas agora aceitam variáveis dinâmicas**
* Atualizada versão da **biblioteca Baileys**, restabelecendo conexão via código Código
* Melhorias nas **traduções do sistema**
* Sistema passou a exigir **senhas mais complexas** para maior segurança

## Versão 2.9.2 Beta - Changelog

### 🐛 Correções de Bugs
- Corrigido erro na confirmação de leitura de mensagens enviadas pelo bot
- Resolvido não funcionamento do webhook quando ticket é fechado usando interação do bot
- Corrigido bug da API oficial beta onde template com imagem não era enviado
- Solucionado problema nas estatísticas de entrega na campanha da API oficial beta
- Resolvido problema de duplicação de mensagens enviadas pelo hub
- Corrigido problema de rolagem na lista de mensagens de despedida
- Ajustado permissões para admin poder apagar mensagem de despedida
- Corrigido exibição do horário de fechamento no relatório de tickets
- Corrigido tradução na beta onde relatório exibia tickets fechados como pendentes

### ⚙️ Melhorias nas Configurações
- A opção de "não capturar mensagens enviadas fora da plataforma" agora é configurável por canal, não mais uma configuração geral do Whazing
- Adicionado controle de acesso por dia e horário dos usuários
- Implementado definição de horário de atendimento por canal/fila
- Adicionado cadastro de feriados com horários diferenciados de atendimento
- Configuração para ignorar chamadas movida para nível de canal (otimização para WaVoip)
- Implementado soft delete para usuários (mantém dados no banco ao deletar)


### 🔄 APIs Modificadas
- Endpoint `showticket` atualizado para retornar o ticket mais recente atribuído ao canal selecionado no cadastro de APIs
- Endpoint `showallticket` atualizado para listar todos os tickets atribuídos ao canal selecionado na API

### 🔄 Melhorias no WaVoip
- Adicionada notificação automática quando uma chamada é atendida por outro usuário:
  - O webphone é fechado automaticamente para o usuário original
  - Uma notificação é exibida informando qual usuário atendeu a chamada

### 🚀 Novos Recursos
- Suporte ao envio de contatos
- Implementado espiar ticket em modo mobile

### 💅 Melhorias na Interface
- Nova exibição na dashboard SaaS da quantidade de empresas vencidas
- Adicionado foto do usuário
- Implementado filtro para empresas vencidas
- Melhorada tela de cadastro de API com exibição do nome e canal
- Adicionado destaque no botão de configurar canal
- Otimização da tela de atendimento para modo mobile:
  - Removido botão de emoji para melhor aproveitamento de espaço
  - Reorganizado botão de anexo
  - Novo botão "+" com múltiplas opções
  - Suporte a envio de contatos, figurinhas e templates

### 📱 Otimizações Mobile
- Interface otimizada para melhor experiência em dispositivos móveis
- Reorganização de botões e controles para maior eficiência
- Melhor aproveitamento do espaço em tela

---
*Nota: Esta versão beta contém importantes correções de bugs e melhorias significativas na experiência do usuário, especialmente para uso mobile.*

## Versão 2.9.1 Beta - Changelog

* Wavoip disponível apenas na versão premium
* Suporte completo à API Wavoip: fazer e receber chamadas, além de relatórios de chamadas realizadas *(relatório disponível apenas para chamadas feitas com o novo Whazing)*
* Não é mais necessário escanear QR Code no site da Wavoip – integração 100% com Whazing, basta inserir a chave
* Referências ao nome Wavoip nos textos foram removidas – ideia é que vocês possam vender como serviço adicional sem divulgar o fornecedor
* Versão do Baileys modificada que permite uso do Wavoip com a API oficial conectada via QR Code
* No cadastro de usuários, nova configuração permite liberar o uso do Wavoip por canal, semelhante ao controle por filas. Se o canal estiver marcado, o usuário poderá fazer e receber ligações por ele

---

* Integração com Typebot (API não oficial): caso não tenha valor preenchido na lista, o sistema usa um texto padrão para garantir o funcionamento
* API Oficial – novo botão para solicitar localização do cliente, disponível no bot e na API
* Suporte ao envio de localização via API (oficial e não oficial), disponível tanto no bot quanto via API
* Notificação de atualização de navegador agora mais chamativa

---

* API não oficial (Baileys): nova opção para ignorar chats privados. Objetivo é permitir o uso conjunto com a API oficial, fazendo chamadas e enviando mensagens fora da janela via Baileys, e recebendo/enviando mensagens normalmente pela API oficial. Também permite acesso a grupos via Baileys
* Novo modo fallback da API oficial usando conexão Baileys – permite envio de mensagens e chamadas via Wavoip. Requer versão modificada instalada no Whazing (não funciona com a original). Fallback por WWJS externo continua disponível
* Sistema agora captura mensagens enviadas fora do Whazing usando o hub (ex: Instagram, API oficial via QR Code)

---

* Identificação das interações no bot interno
* Nova opção de envio de figurinhas: qualquer imagem enviada será convertida automaticamente em figurinha
* API – mudança de fila: altera integração associada a fila
* API – endpoint de tags reformulado: agora é possível adicionar várias tags de uma vez ou remover todas
* API – endpoint do CRM: para remover um contato do CRM, envie o valor `0`


## Versão 2.9 Beta - Changelog

### 🛠 Alterações na API
- A versão gratuita adicionará automaticamente a assinatura “whazing.com.br” nas mensagens enviadas.
- Funções White Label foram removidas da versão gratuita.

### 🐞 Correções de Bugs
- Corrigido problema ao adicionar dois contatos seguidos: os dados do contato anterior não eram apagados corretamente.
- Ajuste na transferência de usuários: agora só é possível transferir para usuários dentro da fila selecionada.
- Correção na quebra de linha ao editar mensagens.
- Corrigido o envio de notificações no chat interno: usuários fora da equipe não recebem mais alertas.
- Atualização correta das etiquetas na tela de Atendimento.
- CRM agora respeita as regras da carteira.
- Corrigida permissão para supervisores criarem e editarem chatbots.
- Correção no recebimento de múltiplos arquivos via Hub.

### 🚀 Novos Recursos e Melhorias
- Suporte a múltiplos idiomas: Português, Inglês e Espanhol.
- Integração parcial com a API oficial via HUB (documentação separada disponível).
- Permissão para encaminhar mensagens a até 5 contatos simultaneamente.
- Nova configuração para ocultar o número de telefone dos usuários.
- Adição de botão “Voltar” nos relatórios.
- Exibição da imagem do contato ao encaminhar mensagens e ao agendar.
- Campanhas agora são ordenadas das mais recentes para as mais antigas.
- Nova configuração de restrição de canais por usuário (semelhante ao controle por filas).
- Reformulação na abertura de tickets:
  - Mostra apenas canais e filas permitidos para o usuário.
  - Usuários sem filas ou canais não podem abrir tickets.
  - Tickets são atribuídos automaticamente ao próprio usuário.
- Opção de abrir ticket direto para um usuário do grupo.
- Otimização do cache de cores: cor original mantida após F5.
- Personalização de textos no painel SaaS:
  - E-mails de recuperação de senha.
  - Mensagens de erro (downloads, transcrição, etc).
  - Respostas do bot em transcrições.
- Adição de logs em tickets criados automaticamente pelo bot.
- Tickets fechados não são mais carregados por padrão na tela de Atendimento, melhorando o desempenho.
- Campo `externalKey` na API agora é opcional.
- Melhoria na geração do QR Code: atualização sem recarregar a página.
- Suporte ao campo `n8nApiKey` nos webhooks de canais.
- Novo webhook: criação de tickets por usuários com o tipo `NewTicketUserCreate`.
- Personalização de mensagens automáticas ao solicitar atendimento humano.
- Novo filtro no CRM para listar contatos sem tickets (uso não recomendado para bases grandes).
- Suporte à Grok xAI.
- Novo sistema de ChatBot baseado em palavras-chave:
  - Ativado na primeira mensagem do cliente.
  - Exemplo: cliente digita “Quero comprar” → encaminhado ao bot da palavra “comprar”.
  - Prioridade: CRM > Palavra-chave > Canal > Configuração.
- Fila de processamento de mensagens adicionada ao HUB.
- Filtro de avaliações por nota.
- Avisos ao editar filas/configurações: necessário deslogar usuários para limpar cache.
- Sistema antigo de agendamento removido.
- Sistema de reabertura de tickets descontinuado.
- Prévia de áudio em agendamentos e mensagens rápidas, com botão para apagar o arquivo.
- Em grupos, exibição da foto do contato.
- Exibição do nome do usuário que criou a nota interna no chat.
- Suporte à exibição no frontend de formatos da API não oficial: Produto, Evento, Pagamento e Enquete.
- Suporte ao modelo Meta LLaMA via Groq.
- Melhorias no suporte à exibição de imagens da OpenAI.
- Integração com Whazing Instagram V2:
  - Responder comentários diretamente.
  - Resposta automática via Direct ao receber um comentário.
- Suporte a botões no Instagram e Facebook (máximo de 3, conforme limitação do Instagram).
- Remoção do suporte ao Microsoft Azure Text-to-Speech.
- Suporte ao ElevenLabs nas IAs (resposta em texto salva na lista de mensagens, mas não enviada ao cliente).
- Reformulação do envio de campanhas:
  - Estatísticas de campanhas antigas não serão mais exibidas.
  - Exibição da foto de contatos ao buscá-los para campanhas.
  - Possibilidade de envio de campanhas para grupos (desde que o número faça parte do grupo).
- Importação de contatos:
  - A API oficial não valida se o número é válido.
  - Se houver conexão com a API não oficial, será usada para validação. Caso contrário, o número será importado sem verificação.
- Cadastro individual de contatos:
  - Validação do número desativada caso não haja conexão com API oficial.
- Novos comandos e opções:
  - Comando TypeBot `#{ "crmId": "1" }` para mudar o lane no CRM compartilhado.
  - Chatbot Interno: opção para mudar o lane do contato no CRM compartilhado.
  - Chatbot Interno: nova função de Auto Distribuição de atendimentos (balanceada).
- Suporte a listas via API Baileys (funciona apenas com versão modificada da Evolution; sem garantia de funcionamento).
  - Em casos com botões TypeBot, será enviada a lista.
  - Sistema referencia apenas APIs oficiais como garantidas.
- Nova coluna de importação de contatos: e-mail.
- Cadastro de usuários agora força e-mails com letras minúsculas.
- Se nenhuma fila estiver selecionada, a IA não tentará transferir.
- Importação de contatos diretamente para lane do CRM compartilhado.

### 📡 Atualizações da API
- Novo endpoint: Criação de contatos.
- Novo endpoint: Criação de tickets.
- Novo endpoint: Status dos canais.
- Novo endpoint: Geração de QR Code.
- Novo endpoint: Exibição de dados do contato.
- Melhorias no endpoint de atualização de etiquetas.
- Novo endpoint: Listar contatos por etiqueta.
- Novo endpoint: Listar contatos por CRM.
- Novo endpoint: Listar contatos por Carteira.
- Novo endpoint: Mover contato no CRM compartilhado.
- Novo endpoint: Validação de número WhatsApp.

Versão 2.8.14.4
- bug - Correção filtro não exibir tickets no ChatBot
- bug - Correção exibir valores a enviar da campanha

Versão 2.8.14.3 - 25/03/25
- Melhoria cache mensagem enviada

Versão 2.8.14.3
 - integração simples wavoip para fazer chamadas somente
 - Ajustes dashboard by carlos eduardo
 - Aumentado limite envio arquivos 100MB e liberado enviar qualquer formato
 - Relatorios tickets exibi etiquetas

Versão 2.8.14.2

- Suporte mensagem agendadas Grupos
- Quebra linha chatinterno
- Disable botao enviar Atendimento até acabar envio
- Ajustes para melhor desempenho
- Renomeado menu empresas para SaaS
- Restriger exportar contatos somente para admin
- Encaminhamento mensagem, garantir saiu mesmo whatsapp e criar ticket usar mesma fila ticket original
- Enviar mensagem enter tela print

Versão 2.8.14.1

- Melhora sistemas mensagens, tentativa recuperar mensagens não compativeis
- No Canal whatsapp nova opção - Ignorar Grupos(necessário reniciar conexão)
- Webhook canal de ticket fechado - notifica quando fechado por inatividade

Versão 2.8.14

- Telegram
- Suporte integrações, chatbot interno, transcrição audio, avaliação

- ChatBot interno
- Receber arquivo bot recebe nome do arquivo 

Versão 2.8.13.1 - 13/03/2025

- Melhorias na validacao se usuario esta online
- Alterada sistema ligação - não enviar mensagem não aceita chamada caso já tenha sido enviado ultimas 24 horas - vamos ver como se comporta

Versão 2.8.13.1 - 12/03/2025

- Novo sistema conversão audios enviados e recebidos backend - tentar economizar processador
- Novo sistema download arquivos backend - tentar economizar processador
- Envio audio hub Instagram
- Atualização edição chatbot - Descidi liberar antes
- Troca versão alternativa baileys - pra ver se melhora algo - mas falta processamento é um grande problema - Mas tenho maquina 10 nucleos, nem toda empresa vps honesta e entrega realmente real, as vezes so são virtuais, e você compartilha nucleo com muitos usuarios.
- Fechar ticket ele retira integração - possibilitando apagar integração futuramente
- Listagem ticket pendente mostra foto - colocado botao aceitar e fechar ticket

Versão 2.8.13 - 08/03/2025

- Melhoria validação telefones sem 9 no whatsapp envio mensagens api para evitar falsos envios
- Removido filtro data adicionar campanha so dava confusão
- Verifica se foi enviada mensagem bloqueio chamada se tiver já não envia denovo

Versão 2.8.13 - 07/03/2025

- Erro CRM compartilhado - Exclusão de um contato de uma lane direto pela edição contatos não tava atualizando no crm

Versão 2.8.13 - 05/03/2025

- Erro CRM compartilhado - cadastro novos não listando lanes

Versão 2.8.13

- Mudança nos socket

- Usuarios
- Aviso já existe um cadastro com aquele email

- Tarefas
- Botão para vizualizar a tarefa completa

- Atualização cores mais alguns botões para seguir tema. Acredito com esse não ficou pontos sem ajustes

- Alteração mensagem Assas "Opss!!!!*\nNão localizamos nenhum boleto! Estamos transferindo para um *Atendente*!"

- Adicionado suporte proxy tipo socks nas configuração conexão whatsapp e possivel .env para todos whatsapp

- Chat interno
- bug - permitir envio mais de um arquivo

- Alterado logica rejeição chamadas

Versão 2.8.12

- Novo socket destina notificação mais especificas

- Novo Perfil Supervisor
- Pode acessar todos tickets/mensagens
- Pode apagar ticket individual
- Pode apagar anotação
- Acessar contatos mesmo estando desabilitado configurações
- Relatorios completos da dashboard
- Relatorios
- Painel Atendimento
- Editar e criar ChatBot, não pode apagar
- Whatsapp reniciar conexao, desconectar e ler qrcode novamente
- Acesso completo campanhas
- Acesso completo etiquetas
- Filas criar e editar
- Acesso completo edição equipes
- Usuarios acesso alterar, criar e editar todos usuarios exetos os admin, não pode escluir
- Agendamentos acesso total
- Despedida acesso total
- Tarefas acesso total
- Mensagens rapidas acesso total
- CRM acessa de outros usuarios

- CRM 
- bug - Com essa opcao ativa Separar lista de lane por usuario o admin nao conseguia acessar kanban outros usuarios
- bug - Lista contatos carregar crm admin consultar de outros usuarios
- Nova opção CRM compartilhado, todos usuarios compartilharam lanes.
- Atrelar chatbot na Lane sera acionado esse chatbot em novos tickets desse contato

- Atendimento
- bug - melhoria envio audio troca de Atendimento
- bug - troca mensagens 2 whatsapp cadastrados mesma empresa
- bug - anotação grande gera rolagem pagina dados contato
- bug - Listando grupos todos usuarios
- bug - Correção perca da cor canal
- PDF vizualizar nova ABA
- Badge seguir cor tema
- Ao clicar ticket com mensagens nao lida ele não sobe mais lista
- Clica esc fecha chat aberto
- Ao clicar ticket ja bem caixa input pronta digitar nao prescisa ir ate nela e clicar
- Ticket é de grupo desativar botão transferir bot
- Novos filtros admin
- Listar agendamentos no dados contato

- Filas/Integrações
- Usuario/Equipes
- Empresas
- Configurações
- bug - F5 perde cores

- Campanha
- bug - Informações corretas envio campanha
- bug - Atualizar pagina perde cores
- saudação - Ele considerava hora clicado programar envio montar saudação, entao caso horario fosse outro ele mandava errado.
- Aviso do risco de uso campanhas
- Filtro por lane da CRM
- Validação data para não ter problemas disparo e enviar de uma vez
- Validação contatos caso ja tenha enviado campanha que foi cancelada, enviar somente contatos que não foram enviados

- Relatorios
- bug - Filtro relatorio tickets filtra fila
- Novo relatorio por lane da CRM
- Novo relatorio de contator por carteira
- Ajustes seguir cor do tema

- Contatos
- bug - Correção modo dark adicionar contato
- Carregar agendamentos na edicao contatos

- Menu
- Renomeado menu filas e usuarios
- Api agrupado juntos canais

- Webhook
- Colocado no sistema de filas
- Novo Webhook Ticket transferido
- Novo Webhook Ticket fechado

- ChatBot
- bug - Se não tiver mensagem encerramento não encerava ticket
- Nova opção "fazer nada" realmente o que ta escrito não altera status chatbot para usar por exemplo na opção qualquer resposta e você nao quer avance as etapas. E nao exiba erro opção invalida

- Integrações ia
- bug - Melhor formatação resposta da ia para evitar espaço desnecessarios
- Colocado suporte, imagem, docx, pdf, xlxs

- Dashboard
- Charts seguir cor do tema

- Empresas
- bug - Escolha cores painel whitelabel
- Personalização mensagem limite arquivo
- Personalização mensagem não compativel com sistema

- Planos
- Exibição erro quando existe plano mesmo nome

- 2 Novas variaveis
- Saudação Espanhol:
   ```bash
   {{greetingEs}}
   ```
- Saudação Ingles:
   ```bash
   {{greetingEn}}
   ```
   
- Chamadas recebidas não abre mais ticket

- Hub Instagram
- Recebe comentarios na integração
- Fechar automaticamente Tickets de comentárioss
- Assinatura nao envia mais * negrito

- Conexão Whatsapp
- Alem de qrcode disponivel agora opção conectar com numero telefone

- Desativar mensagem temporario automatico foi retirado de grupos pois somente admin pode alterar isso

- Agendamento
- bug - Refatoriação logica para ver se não endoida mais
- Opção gravar audio

- Mensagens rapidas
- Opção gravar audio

- Segurança
- Single Login - Não possivel logar 2 dispositivos mesmo tempo - Opcional desabilitar no usuario

- Mudança badge notificação atendimento lista ticket com mensagens nao lidas abertos

Versão 2.8.11

- Chat Interno
- bug - chat interno quando mensagem e muito comprida gerava rolagem lista de usuarios
- novos formatos aceitos  .dwg, .cad, .cdr, .psd, .ai
- Botão download midia
- Contador aparece menu mensagens não lidas agora lista das equipes tambem

- Agendamento
- bug - exibição nome contato na lista agendamento
- Agendadamento enviado agora aparece na lista mensagens no atendimento 
- Permite agendar mensagem somente com anexo tirado obrigatoriedade texto

- Tela Atendimento
- bug - nome arquivos com acento ajuste
- Simplificado nome arquivos ficar mais proximo possivel original
- Melhoria botão download midia
- Nova opção exibir status conexões
- Novos elementos foram incluídos para identificar mensagens enviadas por diferentes tipos de bots ou automações (como ChatGPT, agendamentos, campanhas entre outros). Cada tipo possui um ícone e rótulo distintivo, facilitando o entendimento no chat. Estilos específicos foram adicionados para manter integração com o design existente.
- Identificação usuario enviou mensagem

- Campanha
- Mensagem enviada agora aparece na lista mensagens no atendimento 

- Painel de atendimento foi atualizado para modo diferente agora ele atualiza status tickets automaticamente botão tela cheia para quem quiser colocar televisão por exemplo ir acompanhando atendimentos

- CRM
- bug - ao da F5 perdia cores menu
- Quando tem ticket aberto o icone vai direto pro ticket

- Avaliações passa para dentro relatorios
- Protocolos passa para dentro relatorios
- Anotações passa para dentro relatorios
- Agendamentos antigos passa para dentro relatorios

- Canais
- bug - cadastro canal whatsapp marcação importação mensagens ficava tracinho trazendo falso positivo

- API
- Mensagens enviadas por api nao abre mais varios tickets usa sempre o ultimo

- Melhoria vizualização logs pm2 log

- Financeiro
- bug - ao da F5 perdia cores menu

Versão 2.8.10

--- Atenção essa versão somente aceita hub adquirido de revenda autorizada na Whazing ---
--- Caso tenha adquirido de terceiros não atualize ---

- bug grave - Não estava recebendo mensagens do hub

- Hub acesso intagram, facebook e Webchat estara disponivel na versão FREE

- bug - criar novo ticket contatos envia mensagem transferencia
- Aquele aviso de mensagem Mensagem recebida não compatível com o sistema agora aciona bots e integrações

- Ajustes Layout
- Modal ajustado tamanho pra ficar x no lado nome Modal
- Tamanho conteudo tela
- Retirado botão notificação, silenciar e usuario da direita
- Notificação aparece menu
- Usuario passou fazer parte menu
- Alguns menus foram agrupos, como Equipes ficou junto usuarios e integrações junto com as filas
- Teve bastante ajuste layout então pode ter passado algo esqueci mencionar

- Avaliação
- Para quem tem mensagem despedida ele envia antes mensagem despedida depois pergunta avaliação
- Notas agora vão até 5
- Dashboard consultar as avaliações recebidas

- Tela Atendimento
- bug - modo dark aparecer botao fechar contatos
- bug - Ao receber novo mensagem marcação respondendendo desmarcava
- Badge total tickets passar usar cor tema, total geral foi descontinuado dava contagens muito erradas
- Exibi um Badge com numero tickets nao lidos em abertos em vermelho
- Alguns formatos arquivos vai ter opção baixar
- Adicionado formatos .dwg, .cad, .cdr, .psd para envio
- Nova configuração para tickets fechados listar somente ultimo do contato
- Supervisor de Fila - Esse usuario nao vai considerar "Não visualizar Tickets Privados já atribuidos à outros usuários" vai exibir todos tickets pertecentes a fila que ja tem usuario
- Versão emoticons modificada que possivel pesquisar pelo tipo emoji exemplo sorrindo
- Ao clicar mensagem respondida foca ela se ela estiver rederizada tela.. Ou seja se mensagem nao esteja carregada na tela não vai funcionar

- Agendamento
- Novo sistema remodulado idenpente do tickets, os agendamentos antigos nessa versão ainda serão enviados futuramente será totalmente removido
- Possibilidade repetir agendamentos

- Kanban
- Agora modulo se chama CRM
- Administrador pode consultar lanes de outros usuarios - somente leitura
- Botão adicionar mais visivel
- Opção colocar ordem quer aparece lanes

- Tarefas novo filtro por status

- Nova integração com ia DeepSeek
- Nova Ingração com ChatGPT suporte a assistant

- Importar contatos valida se formato do arquivo compativel com sistema para evitar falsos positivos

- Chat interno
- Notificação exibi se foi grupo ou individual
- Suporte envio de audios

Versão 2.8.9 - 31-01-2025

- update versao baileys 6.7.10

Versão 2.8.8 - 30-01-2025

- troca versão baileys para resolver problema ban grupos
- Mudança fechamento quando tem avaliação

Versão 2.8.7 - 28-01-2025

- bug - Se atendente demorar responder voltar tickets aos Pendentes - retira o usuario associado agora
- Retirado espaço assinatura

Versão 2.8.7 - 27-01-2025

- bug - não marcar como lidas atendimentos feitos pelo bot
- bug - 2 via boleto assas somente interagir caso boleto esteja como pendente

Versão 2.8.7

- bug - mensagens editadas no android nao aparecia
- bug - envio arquivos pelo hub
- bug - prataforma não vai trava receber arquivos grandes, ele vai dividir arquivos em partes para baixar( nos testes teve alguns arquivos ficaram comrompidos)
- Suporte recebimento mensagens lista de transmissão
- Mensagem vizualizacao unica da aviso na prataforma

Versão 2.8.6


Agendamentos na versão free ele adiciona na mensagem "Enviado usando whazing.com.br"
Tarefas passa ser recurso exclusivo da versão Premium

- Bug - alterada logica mensagem despedida para ver se para reabrir ticket
- Bug - Corrigido alguns erros de digitação
- Tela protocolos tem aquele botão abre chat com lista mensagens
- WhiteLabel foi colocado tamanho recomendado imagens e formato
- Tela anotações ticket tem aquele botão abre chat com lista mensagens
- Dashboard foi alterado termos para ver se fica melhor explicativo
- Função fecha tickets inativos chat interno agora fecha caso ticket tenha fila ou usuario atribuido
- Tela canal foi colocado mostrar numero conectado para melhor identificação
- Ao criar anotação aparece tela mensagens tambem como nota interna para melhor identificação no ticket
- Ao encaminhar mensagem agora modal se fecha sozinho
- Notificações tela atendimento colocadas topo para não atrapalhar o input
- Ao reabrir ticket ele ja carrega tela de mensagens
- Tela ajuda colocado posibilidade substituir videos por iframe de algum site
- Lista empresas caso esteja vencida muda vermelho vencimento

Versão 2.8.5 beta
- Bug - não deletava mensagem rapida criada por outro usuario
- Troquei versão baileys para ver se para esse bug desconexão
- Enviar legenda em print colado direto tela atendimento
- Lista tickets coloquei limitação caracteres nao ficar saindo fora
- Relatorio tickets foi colocado link ir para ticket
- trocado textarea mensagem não aceita audio


Versão 2.8.4 beta

Transcrição de audio passa ser recurso exclusivo da versão Premium
Avaliação de atendimento passa ser recurso exclusivo da versão Premium
Campanhas na versão free ele adiciona na mensagem "Enviado usando whazing.com.br "

- bug beta - correção update tarefa deslogar usuario comum
- Dash novo chart mostra horarios picos de tickets. Ele considera hora ticket foi criado e soma. Serve para saber horario quem tem mais tickets novos.
- Dash novo chart atendimento por usuario - grafico pizza esse conta fechados estatistica gerais
- Dash novo chart atendimento por usuario - grafico barras esse tickets abertos - ao vivo não considera filtro datas
- Dash novo chart atendimento por status ao vivo - grafico pizza - ao vivo não considera filtro datas
- Nova Opção para enviar mensagem ao cliente caso ele envie audio falando que não aceita mensagens de audio
- Nova opção para enviar a transcrição de audio como resposta
- Enviar via Api mensagens para grupos
- Novo Webhook no canal

Versão 2.8.3 beta
- bug beta - mensagem deletada deletar realmente
- bug - edição grupos chat interno
- bug - alteração exibição grupos chat interno para modo dark mostra nome do usuario
- Mensagens rapidas separada por usuario cada um tem as suas
- Periodo importação limitado 30 dias
- Troca versão lib audio novamente para testar
- Novas versões sons notificações, para quem preferir os antigos estao na pasta ainda
- Update de segurança com camada extra de validaçães no backend de usuarios
- Escondido botões na tela kanban tambem para não atrapalhar


Versão 2.8.2 beta
- bug beta - relatorio etiquetas
- bug beta - exibicao pdf no frontend
- bug beta - emiti atualizacao ack grupos
- bug - correção exibição modo dark tela login
- bug - filtro data tela contatos da campanha
- Correção alguns bugs criados na beta com sistema de filas
- Retirado exibição plano 1 para não causar mais confusão
- Remoção linkpreview
- Validação input para não conseguir da varios enter enviar varias vezes mensagem repetidas
- Ajustes para aparecer botao zoom nas imagens
- Opção reabrir ticket aparecer modo mobile
- Somente marca mensagens como lidas se ticket estiver aberto
- Criada função desativa automaticamente mensagens temporarias whatsapp(evitar aquele i lado mensagem da impressão sistema tem erro)
- Mensagem editada foi invertida campos(mensagens antigas vai aparecer ao contrario)
- Bot funciona se tiver usuario atribuido no canal tambem agora
- Opção ocultar tickets no chatbot corrigida
- Suporte exibir se mensagem foi encaminhada, ao encaminhar exibi informação tambem
- Fechamento automatico de ticket passar ser por canal
- Mensagens enviadas pela api, caso ticket seja aberto pela api ele se fecha automaticamente
- Alterar dados empresa vai deletar invoices em aberto para evitar problemas caso alteração do plano
- Integração somente n8n vai funcionar em grupos
- Automações como "mensagens boas vindas, avaliacao, mensagem de encerramento, mensagem transferir ticket" tambem foi tirada dos grupos

Versão 2.8.1 beta
- bug - Resolver atendimento sem interação automaticamente - Fecha somente se ultima mensagem for do atendente
- Transferir atendimento para ChatBot (Recurso Premium)
- Nova integração - Emissão segunda via boleto Asaas - No transferir para fila ta integração você deve colocar mensagem solicitando cpf ou cnpj do cliente que bot estara aguardando essa informação
- Sistema de fila para envio e recebimento mensagem(em teste)
- Possibilidade acessar tarefas da fila. BullBoard - Verificar .env.example
- Configuração timeout para importação mensagens - Verificar .env.example
- Mudanças timeout socket
- Listar somente chatbot ativos na tela dos canais
- Aumentando tempo recarregar pagina

Versão 2.8.0 beta

- Geração PDF passa ser Recurso Premium
- Criado opção nova Chat Completo ticket - com botão imprimir - melhor gerar pdf por ali - usando opção do navegador
- Chatbot interno usa horario de atendimento você pode mudar fluxo de acordo com horario de atendimento
- Chatbot interno nova opcao "Contem" e "Contem exato". Diferença das duas se você usar contem por com palavra teste se cliente escrever "teste1 outra coisa" ele aceita, mas isso pode causar muito falso positivos. E Caso contem exato vai aceitar se frase for "teste outra coisa"
- Opção agrupar mensagens dos tickets. Ele vai criar varios tickets mas as conversas vai mostrar tudo junto
- Opção Visualizar apenas mensagens das filas que o usuário pertence (Recurso Premium)
- Informações que estão Informações adicionais do contato podem ser usados como variaveis dentro sistema exemplo você tem campo adicional nome CPF se colocar bot ou durante chat {{CPF}} ele retornara o valor desse campo
- Pode ser usado chatbot para alterar ou criar Informações adicionais do contato - Na aba condições caso seja preenchido campo de salvar resposta
- Anotações em tickets(Recurso Premium)
- Modo auditoria - Configuração para tickets acessados pelo administrador não será marcado como lidos (Recurso Premium)
- Update automatico versão frontend (so funcionara na proxima versao)
- Senha universal (verificar .env.example) possibilidade configurar senha que consegue logar qualquer usuario
- firstName adicionado nas campanhas
- Contatos filtro por tags
- Contatos filtro por carteira
- Cadastro contatos tenta validar numero tirando 9
- Importar tabela contatos valida numeros
- Dashbord Saas colocado numero contatos e tickets no banco de dados
- Exibir status usuarios alguns pontos
- Painel SaaS consulta se tem atualização estavel
- Novo relatorio de tickets (Recurso Premium)
- Envio legenda em fotos/arquivos
- Melhoria detectação wait typebot
- Atualização de segurança nova versao socket

Versão 2.7.6.6
- bug - Gravacao Audio robotizado celular, troca lib grava espero resolva, aguardo feedback
- bug - Kanban some dados da tela alterados(valor, comentario) ao trocar lane
- bug - Relatorios contatos por estado não funcionava
- bug - alguns formatos arquivos recebidos nao mostrava legenda
- Geração PDF voltado modelo antigo e feito script excluir emojis, novo metodo não tava bom tambem
- Kanban alterado exibir lanes lado a lado
- Mensagens rapidas muito grandes truncar para não gerar tela enorme
- Envio arquivos tenta manter nome original do mesmo

Versão 2.7.6.5
- Suporte envio TXT

Versão 2.7.6.4 beta
- Separei busca tem campo novo buscar mensagens.. Busca contato junto mensagem não tava boa quando tem muita mensagem fica muito lenta
- Correção botão tela mensagem se mexer mouse ia canto tela

Versão 2.7.6.3 beta
- bug - Importar mensagem nao acionar bot interno e nem horario de atendimento

Versão 2.7.6.2 beta
- bug grave - Faz serviço travar caso excluir um usuario que esteja logado em algum local
- bug - notificação somando tickets fechados - filtro tickets status nao tava funcionando
- Bug da beta - Listagem erradas de tickets ainda
 - Validação para iniciar ticket pelos contatos evitar erro sem fila

Versão 2.7.6.1 beta
- Bug - Erro alterar usuario comum
- Bug - Melhoria geração pdf com conversas agora exibi emoticons(obs: deixou processo mais lento gerar pdf)

Versão 2.7.6 beta
- Bug versao beta - Campanha erro adicionar contatos
- Bug versão free - Listas filas nao atualizava corretamente versão free
- Bug - Contatos sem numeros fazendo da erro campanhas e outros relatorios
- Bug - Mais uma alteração filtros lista de atendimento para ver se melhora comportamento(não retornava ticket sem fila e atribuido ao usuario)
- Bug - Melhorias formatação textos vindo Typebot
- Delay 10s enceramento ticket pelo chatbot para garantir mensagem de enceramento seja entregue antes de fechar ticket
- Opção selecionar usuario online e offline hoje não tem uma utilidade decidir tirar para futuro talvez usar ela para alguma coisa util
- Mudança de cores padrões pelo painel SaaS
- Campanhas podem ser deletadas qualquer momento retirado validações
- Configuração para whazing não baixar mensagens que você envia por fora da prataforma(exemplo disparo pelo wasender, se cliente responder vai abrir o ticket)

Versão 2.7.5 beta

### Teve varias mudanças no kanban verificar configuração ####

- bug - problema formatação numeros causando erros conexoes hub - já que são contatos sem numeros
- Filtro na tela de agendamento pela data que foi agendado
- Chat interno aceita colar print no input
- Filtro LANE de contatos no KANBAN
- Edição lane kanban direto no contato
- Edição lane kanban direto na tela de antendimento
- Nas configurações tem 3 opções novas kanban uma para mostrar contatos tickets fechados, outra mostrar contatos sem fila atribuida e para deixar lanes ser compartilhados entre os usuarios e somente admin pode criar, editar e apagar lista de lanes.
- Tela atendimento mostra descrição informações adicionais tambem
- Tela atendimento mostra Valor negociação caso ela exista
- Opção "Reabrir tickets anteriores" alterada quando for criar ticket pela aba contatos tambem vai buscar tickets anteriores e reabre o mesmo

Versão 2.7.4 beta

- bug - importar historico de mensagem
- bug - tela atendimento modo celular não abre Dados de contato
- bug - Aumentado timeout para envio arquivos maiores edição de mensagens rapidas
- bug - Arquivos enviados pelo typebot não era exibidos corretamente no frontend
- bug - Enviar outros arquivos alem audio mostrava como gravando
- bug - Verificar nome do canal antes de cadastrar um HUB
- bug - Mensagens agendadas envia mesmo ticket fechado agora
- Cache grupos para melhor um pouco desempenho
- Validação se email já existe antes cadastrar nova empresa
- Validação se whatsapp já existe antes cadastrar nova empresa no teste
- Update versão varios pacotes como sequelize e outros
- Opção separada da quantidade tickets abertos e pedentes que carrega tela atendimento
- Permiti abrir ticket em conexão diferente para mesmo contato
- Suporte "instagram v2" do Hub notificame
- Opção Ignorar contato
- Maximo de usuarios e conexões vai respeitar o que esta no plano foi tirado da empresa
- Planos com opção para desativar acesso campanhas, integrações e grupos
- Suporte pagamento Stripe
- Filtro por tags na lista de atendimento
- Tags vem junto com tickets na lista de atendimentos para melhorar desempenho
- Carteiras vem junto com tickets na lista de atendimentos para melhorar desempenho
- Filtro para admin por usuario ou canal
- Hub caso não tenha nome "Name Unavailable" tenta atualizar nas próximas mensagens
- Arquivos Public separado por empresa
- Cache arquivos TypeBot - Sistema vai baixar arquivos e deixar salvo servidor não ter baixar cada vez que fluxo inicia melhorando velocidade e diminuindo consumo recursos
- Videos youtube colocados no Typebot seram baixados e colocados no cache

Versão 2.7.3

- bug - Mensagem duplicando chat interno
- bug - Chat interno depois de um certo numero de mensagens parava de listar
- bug - Consultar log de ticket
- bug - espiar ticket
- bug - Opção resolver ticket sem prescisar abrir ele
- bug - Configuração alterava de outras empresas com usuario SAAS
- bug - Mensagem vindas de story não chegava
- bug - Cadastro HUB respeitar limite de canais
- bug - conversas 2 empresas diferentes na mesma instalação não confirmava envio da mensagem
- Kanban (somente versão premium)
- Cadastro contato mais facil seleção pais vem brasil padrão não prescisa colocar 55
- Embelezamento numero telefone exibir br no lugar 55 e formatar numero
- Ao tentar abrir ticket caso já exista mostra nome do usuario ou fila para facilitar localização
- ChatFlow interno agora aceita transcrição de audio e reconhece caso cliente envie um arquivo
- Mudança 2 empresas diferentes podem usar mesmo nome de whatsapp
- Proporção videos e imagens tela chat melhorado a vizualização
- Melhoria notificações chat interno
- Configuração para desativar notificações de grupos
- Opção Reabrir tickets anteriores ao receber novas mensagens (Com essa opção ativada caso já exista ticket fechada ele vai abrir ele novamente e não criar um ticket novo.)
- Opção para selecionar hora tambem nas opção fechar e apagar ticket em Massa
- Opção deletar ticket individual na tela de atendimento( somente aparece admin)
- Baixar conversa - Ticket em PDF
- Colocado botão chamar whatsapp de suporte em pontos estrategicos(Tela inicial, tela solicitar teste, sesão whatsapp, financeiro, integrações e bot)
- Opção fechar ticket em massa e apagar foi mudada para dashboard
- Alterado tamanho campo Editar Mensagem na tela de atendimento
- Possibilidade alterar timezone pelo .env verificar arquivo example
- Trocada versao Baileys para usada pelo evolution

Versão: 2.6.0

- Suporte facebook e instagram  e WebChat via hub (função exclusiva versão premium)
- Melhorias de segurança socket
- Respeitar delay Typebot
- Deletar um canal definitivamente agora, antes somente ocultava conexão


Versão: 2.5.1

- bug - greeting nao tava mais funcionando
- bug - Erro criar contatos conflito entre empresas

Versão: 2.5.0

- bug - Clicar ticket pendente todas opções do topo estavam habilitadas
- bug - TypeBot e outras integrações aciona quando envia mensagem fora da prataforma
- bug - revisado opção deletar empresa para evitar erros
- bug - retornar ticket para fila limpa usuario
- bug - painel atendimento não mostra mais tickets fechados
- Pagina usuarios foi colocado exibir id para ser mais facil usar no TypeBot
- Integração  ChatGPT
- Integração Groq
- Integração Microsoft Azure Text-to-Speech
- Opção mensagem despedida personalizadas, pelo admin e pelos usuarios, admin pode criar, vizualizar e editar mensagens de todos usuarios,Usuarios somente podem acessar suas proprias mensagens 
- Mudança sistemas de variaveis e novas variaveis consultar arquivo pasta docs
- Opção escolher ocultar tabs ou não tela de atendimento
- ChatFlow opção enviar mensagem ao roteador para fila ou usuario
- Opção cadastro usuario para ignorar carteira mostrar todos contatos

Versão: 2.4.1

- Melhoria TypeBot caso transcrição audio estiver ativa transmite resultado para o typebot
- Novas opções TypeBot, transferir ticket, fechar ticket, colocar tag, parar ver arquivo docs


Versão: 2.4.0

- bug - botao enviar mensagem e audio tinha clicar lado meio nao funciona - obrigado Felipe
- bug - Ao clicar ticket nao exibia cor do canal e sem clicar nao exibia nome do usuario
- bug - Responder audio com transcrição perdia a resposta, pois fazia transcrição novamente
- Menu saas da empresa foi colocado opção para listar Faturas em aberto para apagar ou marcar como pagas
- Integração TypeBot
- Melhorias internas da integração baileys
- Alteração Menu para abrir descrição no computador - melhorias nesse menu pelo Felipe
- Alteração do Chat Interno e tela atendimento para tela cheia
- Novas configurações disponiveis .env, verifica .example da pasta backend

Versão: 2.3.5

- bug - não carregar alguns tickets
- bug - Não envia nome atentende aceitar ticket
- bug - ajustes (Admin) - Visualizar Todos para melhor funcionamento
- Separado opção quantidades tickets abertos/pedentes e fechados carregar tela de atendimento
- Escolha cor canal para diferenciar tela atendimento
- Botão reniciar as conexões no canais
- Colocando sistema simular digitando e gravando audio para tornar atendimento mais humano
- Suporte WebHook - N8N

Versão: 2.3.4

- Bug Assas - Cada vez gerava link novo agora usa o mesmo
- Bug - Lista de contatos não carregava as etiquetas
- Tirado coluna instagram e telegram tela contatos ficar mais limpa
- Sistema de envio mensagem ao aceitar ticket e transferir ticket foi remodelado, as configurações agora são nos canais e será possivel personalizar mensagens
- Botão resolver ticket na lista de tickets
- Busca tela atendimento busca mensagens tambem
- Envio de reações
- Configuração para bloquear usuarios reabrir tickets fechados(Podem consultar mas não reabrir o mesmo)
- Opção contatos para desativar bot ou campanha
- Ajuste para exibir mensagem de erro ao tentar cadastrar contato sem ter whatsapp conectado

Versão: 2.3.3

- Bug cadastra empresa pelo painel sem CNPJ
- Bug limite 40 usuarios alterar grupos chat interno
- Silencioso não desativava

Versão: 2.3.2

- Suporte Asaas
- Retirada campo CNPJ tela solicitar teste e Validação campos
- Tela SaaS campo cnpj passa a ser opcional
- Ao cadastra teste na pagina solicitação redireciona para pagina login

Versão: 2.3.1

- bug - adicionar novo canal nao aceitava

Versão: 2.3.0

- outros pequenos bugs
- bug - Tela canais e atendimento listar mais de 40 usuários
- bug - tarefa mesmo concluida aparecia ainda na notificações
- bug - ajustes planos aceita planos com virgula no preço
- Configuração mercado pago foi colocado detalhes do webhook
- Atualização libs do backend e do frontend
- Remoção conteudos não usados/defasados
- Colocado Logo nos relatorios gerar impressão
- Opção tirar som das notificações
- Variveis adicionadas ({{user}}, {{phoneNumber}}, {{email}})
- Novas configurações do banco de dados (para ajustes desempenho) via .env
- Ajustes chaves para performace baileys
- Exibir horario na lista de agendamentos
- Sistema de avalição
- Transcrição de audio
- Configuração para quantidade tickets carregar tela atendimento(padrão 30)
- Tela atendimento abas (Aberto, pedentes, fechados e bots aparece somente se tiver tickets) - mudado no filtro texto resolvidos para fechados para seguir mesmo padrão
- Tela atendimento botão carregar mais tickets

Versão: 2.2.5

- Atualização emergencia - Update lib não oficial baileys

Versão: 2.2.4

- Update lib não oficial baileys
- Totalmente remodelado sistema importar mensagens ao ler QRCODE
- Detectar mensagem apagada pelo contato
- Integração com Mercado Pago

Versão: 2.2.3

- Modulos tarefas
- Bug envio audio IPHONE
- Bug painel escutar audio IPHONE
- Bug não tava exibindo mais de 40 usuarios
- Correção outros pequenos bugs

Versão: 2.2.2

- Caso desabilitar smtp ou opção solicitar teste agora botão esqueci senha e registre-se agora sai da pagina login
- Correção erro na API
- Envia mensagem para whatsapp cadastrar teste(caso whatsapp seja invalido não vai aceitar cadastrar teste)
- Novas apis mostrar informação do Ticket, mostrar tickets no chatbot, mostrar todos tickets, troca de etiquetas, troca de filas, envio mensagens via metodo GET, alterar status ticket
- Correção outros pequenos bugs

Versão: 2.2.1

- Correção geração protocolo, somente gerar quando solicitado
- Opção caso atendente demorar responder voltar ticket para Pedentes
- Correção opção autoclose não estava funcionando
- Nova opção flow para bot enviar mensagem depois tempo caso cliente não responder
- Ajuste menu lateral flow
- Opção flow quando cliente manda mensagem fora do horario de atendimento o que fazer aquele ticket
- Opção para colocar numero vezes bot deve enviar mensagem de fora horairo de atendimento
- Correção erro obter carteira, tags
- Melhoriar no MODO DARK
- Opção de baixar Fluxo e importar Fluxo
- Correção outros pequenos bugs
