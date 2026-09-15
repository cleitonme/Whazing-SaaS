# Dúvidas e problemas comuns

Reunimos aqui as situações mais comuns no uso da Agenda e o que verificar em cada caso. Tudo baseado no funcionamento real do sistema.

## 🧑‍⚕️ Profissional

### O profissional não aparece na lista "Adicionar profissional" do calendário

* Ele ainda **não foi cadastrado** — crie-o na aba **Profissionais** (o próprio sistema avisa: *"Nenhum profissional disponível. Cadastre um na aba Profissionais."*).
* Ele **já está vinculado** a este calendário — a lista mostra somente quem ainda não foi vinculado.
* Você é **usuário comum** e não é admin/supervisor do sistema — a aba Profissionais só existe para esses perfis.

### O profissional não aparece no link público / chatbot / Recepção Inteligente

* No **link público**: ele não foi incluído em **"Profissionais que aparecem no link"** (ou, se a lista está vazia, ele não está **vinculado ao calendário** do link).
* No **chatbot**: ele não está na seleção de **Profissionais** do bloco (quando o modo é "Selecionar").
* Ele pode estar **desativado** — ligue a chave do profissional na aba **Profissionais**.

### O profissional não tem nenhum horário disponível

* **Falta cadastrar a disponibilidade** — nenhum profissional tem horário por padrão. Configure na aba **Disponibilidade** (veja [Profissionais](profissionais.md#horários-de-atendimento)).
* O dia pode estar em uma **exceção** (folga/feriado) — confira a lista de exceções do profissional.
* O compromisso pode conflitar com um **compromisso pessoal** do profissional no Google/Outlook, se a sincronização estiver ativa.

***

## 🛠️ Serviços

### O serviço não aparece para vincular ao profissional

* Só aparecem serviços **ativos** — se o serviço estiver desativado, ligue a chave dele na aba **Serviços** (e ative "Mostrar serviços desativados" para localizá-lo).

### Aparece o aviso de nome já existente ao cadastrar serviço

* **Já existe um serviço ativo** com esse nome — escolha outro nome ou edite o existente.
* **Existe um serviço desativado** com esse nome — o sistema mostra o serviço antigo **destacado na lista**; em vez de criar outro, **reative** ligando a chave. (Sim: a lista não aceita nomes repetidos, nem com itens desativados.)

### O serviço não aparece no agendamento/link público

* No **agendamento pelo painel**: se o **profissional escolhido** tiver serviços vinculados, só esses aparecem — vincule o serviço ao profissional ou remova a restrição.
* No **link público**: confira **"Serviços que aparecem no link"** — vazio significa "todos que os profissionais escolhidos oferecem".

***

## 📆 Horários e disponibilidade

### Nenhum horário aparece para o dia (link público, chatbot ou IA)

Verifique, nesta ordem:

1. **O profissional tem disponibilidade cadastrada** para aquele dia da semana?
2. **A duração do serviço cabe** no expediente? Ex.: serviço de 2 horas com expediente até 18h não gera horário que começa 17h30.
3. **Existe exceção** (dia todo indisponível) para aquela data?
4. **Todos os horários já foram ocupados** por outros agendamentos?
5. No caso da **IA** e do **chatbot**, o dia está dentro da **janela de busca** ("Dias pra procurar disponibilidade")?

### O horário desapareceu / não consigo remarcar para uma data

* Pode ser um **compromisso pessoal** do profissional no Google/Outlook bloqueando o período (eventos listrados no calendário).
* O comportamento de **conflito** configurado no profissional pode estar **"Bloquear o agendamento (padrão)"** — em caso de recusa ao mover, o evento volta para o horário original.

***

## 🔴 Google Agenda / Outlook

### A janela de login do Google/Outlook não abre

* O navegador **bloqueou o pop-up**. O próprio sistema avisa: *"Não consegui abrir a janela de login. Verifique se seu navegador está bloqueando pop-ups."* Libere pop-ups para o site do sistema e clique em conectar novamente.

### O botão "Conectar Google Calendar / Conectar Outlook" não aparece

* A sincronização precisa estar **habilitada nas configurações do sistema** pelo administrador (Google ou Microsoft). Sem isso, a seção nem aparece.
* Para conectar **por profissional**, o profissional precisa estar **vinculado a um usuário do sistema**.

### Aparece uma mensagem de erro na sincronização

* A seção mostra o erro quando a conexão tem problema (ex.: autorização revogada ou senha trocada). Desconecte e **conecte novamente** para refazer a autorização.

***

## 🔐 Acesso e permissões

### O menu/aba da Agenda não aparece para um usuário

* **Sem o adicional contratado:** se o plano não inclui a Agenda, a tela mostra *"Recurso indisponível"* com o aviso para **contratar o adicional** (veja [Disponibilidade do módulo](README.md#disponibilidade-do-módulo)).
* **Usuário comum sem acesso aos calendários:** usuários comuns só veem calendários em que foram adicionados como **membros**. Admins e supervisores veem sempre.

### Aparece "Você só tem acesso de visualização a esta agenda"

* Você é **Visualizador** daquele calendário — consegue ver os agendamentos, mas não criar/editar/cancelar. Peça ao administrador para mudar seu papel para **Editor** (ou **Admin**).

### No Atendimento, a aba "Agenda" não aparece no painel do cliente

* Ela só é exibida para **admin/supervisor** ou usuários com **acesso a pelo menos um calendário**. Libere o usuário como membro de um calendário.

***

## 🔔 Lembretes

### O lembrete não foi enviado

Verifique:

1. A opção **"Enviar lembrete por WhatsApp"** está **ligada** no calendário do agendamento?
2. O agendamento tem **cliente vinculado** (com WhatsApp)? Agendamento sem cliente não recebe lembrete.
3. Está dentro das **horas de antecedência** configuradas?
4. Um **canal de envio** está disponível (canal do WhatsApp conectado)? Se o campo estiver em branco, o sistema usa o canal vinculado ao cliente.
5. Em canais **oficiais**, o lembrete precisa de **template aprovado** — e lembretes **não aceitam template com cabeçalho de mídia** (imagem/vídeo/documento). Em **botões** (Plus/Wuzapi), a mensagem **não pode ter imagem de cabeçalho**.

### O cliente respondeu a palavra-chave e nada aconteceu

* Confirme se a opção correspondente está **ativa** na aba **"Respostas do cliente"** e se a palavra-chave digitada **bate exatamente** com a configurada (confirmação, cancelamento ou atendente).

***

## 🔗 Link público

### A página do cliente mostra "Link de agendamento indisponível"

* O link pode estar **Inativo** — reative na lista de links (ação **Ativar**), ou foi **excluído**.

### O cliente escolhe a data e aparece "Nenhum horário disponível nesta data"

* Vale tudo da seção **[Nenhum horário aparece para o dia](#horários-e-disponibilidade)** acima: disponibilidade, duração, exceções, ocupação.

### Não consigo trocar o calendário do link

* O calendário **não pode ser trocado depois de criado** — o sistema avisa disso na edição. Se precisar mudar, **exclua o link e crie outro** (ou duplique o atual antes).

***

## 🤖 Chatbot e Recepção Inteligente

### O bloco "Agendamento" não encontra horários no teste

* O **simulador** é uma simulação: a conversa funciona de ponta a ponta, mas **não cria agendamento real**. Para testar de verdade, faça um teste com um número real (ou verifique a disponibilidade configurada).
* Confira se o **calendário** escolhido no bloco tem profissionais com **horários** cadastrados e se a **janela de dias** está adequada.

### A IA da Recepção Inteligente não agenda

* A chave **"Permitir que a IA consulte a agenda e agende horários"** está ligada?
* O **calendário** foi escolhido no card "Agendamento pela IA"? (é obrigatório)
* Profissionais/serviços marcados em **"Selecionar"** podem estar limitando demais as opções.
* A janela **"Dias pra procurar disponibilidade"** cobre a data pedida pelo cliente?

***

## 💡 Outras dúvidas rápidas

* **"Agenda" e "Agendamento" são o mesmo módulo?** Não! O **Agendamento** (em Cadastros) serve para **enviar mensagens programadas**. A **Agenda** é o módulo de horários descrito nesta documentação.
* **Posso ter dois calendários com o mesmo nome?** O sistema não impede, mas evite: nomes iguais dificultam identificar os agendamentos (que usam a cor de cada calendário para se diferenciar).
* **Onde vejo todos os agendamentos de um cliente?** No **Atendimento**, aba **Agenda** do painel do cliente — ou no painel da Agenda, buscando pelo nome dele no campo **Cliente** ao criar/editar um agendamento.
