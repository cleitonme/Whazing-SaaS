# 📞 Campanha de Chamadas (áudio)

Este módulo faz **ligações de voz pelo WhatsApp** para uma lista de contatos e, quando a pessoa atende, **toca um áudio gravado**. Não existe conversa: a chamada apenas reproduz a gravação e encerra.

> ⚠️ **Disponível somente no WhatsApp Plus.** A própria tela informa: _"Funciona apenas em canais do tipo WhatsApp Plus."_

> 💡 **Em palavras simples:** você grava uma mensagem (por exemplo, um aviso de vencimento), escolhe para quem ligar e o sistema disca **um contato por vez**, tocando o áudio quando alguém atende.

---

## ✅ Requisitos

Antes de usar, a empresa precisa de:

| Requisito | O que significa |
| --- | --- |
| **Canal WhatsApp Plus conectado** | É o único tipo de canal que permite originar a chamada. Sem ele, a tela mostra **"Nenhum canal compatível"**, um botão **Configurar canais** e o botão de nova campanha fica desabilitado |
| **Recurso no plano ou adicional** | O recurso se chama **Campanhas de chamada de voz**. Se o plano não inclui, a tela fica bloqueada e oferece a contratação do adicional |
| **Usuário admin ou supervisor** | A tela e as rotas do módulo são restritas a esses perfis |

> 💡 **Ordem recomendada:** conecte primeiro o canal WhatsApp Plus e depois contrate o adicional. Sem um canal Plus, o sistema avisa: _"Conecte um canal do tipo WhatsApp Plus antes de comprar este adicional."_

> ℹ️ O card do menu só aparece quando o módulo de **Campanhas** está habilitado para a empresa.

---

## 📍 Onde encontrar

No menu lateral, acesse **Campanhas** e clique no card **Campanha de chamadas**.

* O botão **Campanhas de mensagem** leva ao outro módulo, de disparo de mensagens de texto.
* O botão de **atualizar** recarrega a lista.

---

## 🖥️ Tela inicial

No topo aparecem dois avisos fixos:

* **o que o módulo faz** — liga para cada contato da lista e toca um áudio quando a pessoa atende;
* **aviso de risco** — ligue somente para quem espera o contato e autorizou a ligação; chamadas em massa podem gerar reclamações e levar a restrições ou bloqueio do número.

Se algum canal ficou **aguardando confirmação** de uma chamada anterior, aparece também um aviso âmbar com o nome dos canais. Veja [Canal aguardando confirmação](#-canal-aguardando-confirmação).

### Tabela de campanhas

| Coluna | O que mostra |
| --- | --- |
| **Nome** | O nome que você deu à campanha |
| **Canal** | O primeiro canal da campanha. Se houver mais de um, aparece um selo **+N** com o total |
| **Situação** | Rascunho, Agendada, Em execução, Pausada, Cancelada, Concluída ou Erro de configuração |
| **Contatos** | Quantos contatos estão na campanha |
| **Progresso** | Barra com o percentual concluído |
| **Criada em** | Data e hora de criação |
| **Ações** | Botões de gerenciamento (veja abaixo) |

Quando a campanha é **pausada pelo sistema**, aparece a indicação **"Pausada pelo sistema"** com o motivo em uma dica (ícone de informação).

> 💡 Sem campanhas, a tela mostra **"Nenhuma campanha de chamada criada"** e a sugestão de criar uma para ligar para uma lista e tocar um áudio.

---

## ➕ Criar uma campanha

Clique em **Nova campanha de chamada**. O cadastro é um assistente com **6 etapas**.

> 💡 Cada campo tem um ícone de ajuda (**?**) com quatro explicações: **o que é**, **para que serve**, **como escolher** e **efeito no tempo**.

> ℹ️ **Avançar salva a campanha.** Ao passar da etapa 2 para a 3, o sistema salva o que já foi preenchido — é isso que permite escolher contatos. Você pode voltar e editar quando quiser. O botão **Salvar** também aparece em qualquer etapa.

### 1️⃣ Nome e início

| Campo | O que preencher |
| --- | --- |
| **Nome da campanha** | Um nome para você reconhecer a campanha. O contato **nunca vê** este nome. Até **120 caracteres** |
| **Quando começar** | **Assim que eu iniciar** ou **Programar data e hora** |

> 💡 A data escolhida define **quando a primeira chamada pode sair**. A campanha **não começa sozinha**: ela só é iniciada depois que você revisar e confirmar (veja [Revisar e iniciar](#-revisar-e-iniciar)).

> ⚠️ O nome é obrigatório. Se estiver vazio, o sistema não deixa avançar.

### 2️⃣ Canais

No campo **Canais que farão as ligações**, escolha **um ou mais canais** do tipo WhatsApp Plus.

* Cada opção mostra o **nome**, o **número** e um selo **Conectado** ou **Desconectado**.
* Escolher mais de um canal mostra o aviso: os canais se alternam **em rodízio**, mas as ligações continuam acontecendo **uma por vez, nunca em paralelo**.

> ⚠️ Escolha apenas números conectados e que você realmente usa para falar com esses contatos. Pelo menos um canal é obrigatório.

### 3️⃣ Contatos

> 💡 **Só contatos individuais entram nesta campanha.** Grupos e comunidades não podem receber chamadas e são recusados mesmo que apareçam na busca.

Se a campanha ainda não foi salva, a etapa mostra: **"Salve a campanha para poder escolher os contatos."** Ao avançar, o sistema salva automaticamente.

Depois de salva, a etapa mostra:

| Item | O que significa |
| --- | --- |
| **Vão receber a chamada** | Quantos contatos são elegíveis |
| **Ignorados** | Quantos ficaram de fora, com a lista de motivos |
| **Selecionar contatos** | Abre o seletor de contatos |
| **Ver lista completa** | Abre a tela de contatos da campanha |

Ao adicionar contatos, o sistema informa quantos entraram e, quando houver, quantos foram ignorados por:

* serem **grupos**;
* não terem **autorização** para receber campanhas (opt-out);
* estarem **sem número**;
* já estarem **repetidos** na lista.

### 4️⃣ Áudio

| Campo | O que preencher |
| --- | --- |
| **Arquivo de áudio (MP3, WAV ou OGG)** | A gravação que a pessoa ouve ao atender. A orientação da tela é **até 16 MB** |
| **Duração máxima da chamada** | Tempo máximo da ligação, em segundos. **0** (padrão) significa tocar o áudio até o fim |
| **Tempo de toque esperado** | Quanto tempo o telefone deve tocar antes de o sistema considerar que algo deu errado. Padrão **30 segundos**, mínimo **1** |
| **Duração estimada do áudio** | Só aparece quando **não foi possível ler a duração** do arquivo. Padrão **120 segundos**, mínimo **1** |

Depois do envio, o sistema mostra:

* a confirmação **"Áudio enviado"**;
* o **tipo** e o **tamanho** do arquivo;
* a **duração** em segundos — ou o aviso **"Não foi possível ler a duração deste arquivo"**;
* um **player** para ouvir a gravação antes de iniciar.

> ⚠️ **O áudio é obrigatório para iniciar a campanha.** Sem ele, a revisão bloqueia o botão de iniciar com a mensagem **"Nenhum áudio enviado"**.

> 💡 Grave uma mensagem **curta e direta**, dizendo quem está falando e o motivo da ligação. Quanto mais longo o áudio, mais tempo cada chamada ocupa.

### 5️⃣ Ritmo

O aviso da etapa explica: a campanha liga para **um contato por vez**; ao terminar uma ligação, espera o intervalo configurado e liga para o próximo.

| Campo | O que faz | Padrão |
| --- | --- | --- |
| **Intervalo entre as chamadas** | Faixa em segundos entre o fim de uma chamada e o início da próxima. O sistema **sorteia** um valor dentro da faixa a cada chamada | **60 a 120 segundos** |
| **Fazer pausas automáticas** | Depois de um número de chamadas, a campanha para por alguns minutos e continua sozinha | **Ligado** |
| **Pausar depois de** | Quantas chamadas acontecem antes de cada pausa (faixa) | **20 a 35 chamadas** |
| **Duração da pausa** | Quanto tempo cada pausa dura (faixa, em minutos) | **5 a 12 minutos** |
| **Horário permitido** | Faixa de horário em que a campanha pode ligar (começa às / termina às) | **08:00 às 18:00** |
| **Dias da semana permitidos** | Em quais dias pode ligar | **Todos os dias** |
| **Limite de chamadas por dia** | Máximo de chamadas por dia. **Vazio = sem limite** | Sem limite |
| **Margem de segurança após a chamada** | Folga depois do fim confirmado de uma ligação, antes de o canal ser usado de novo | **10 segundos** |
| **Liberar o canal automaticamente se o estado não for confirmado** | Veja abaixo | **Ligado** |

> ⚠️ **Dias:** é preciso deixar **pelo menos um dia marcado**. Sem nenhum dia, o sistema não deixa avançar.

> 💡 **Horário e dias empurram a campanha:** se o horário escolhido estiver fora da janela ou em um dia não permitido, a primeira chamada é adiada para o próximo momento válido — e a revisão avisa.

#### Liberação automática do canal

A opção **Liberar o canal automaticamente se o estado não for confirmado** vem **ligada** por padrão.

A própria ajuda explica:

* chamadas **atendidas e não atendidas** já são encerradas e liberadas sozinhas pelo tempo previsto, porque a integração não envia o evento de fim do áudio;
* esta opção vale apenas para o caso **ambíguo**, em que nem isso pôde ser confirmado:
  * **desligada:** a campanha pausa e espera você liberar o canal;
  * **ligada:** o canal é liberado depois do tempo máximo e o histórico registra que o estado não foi confirmado.

> ⚠️ Com a liberação automática, a campanha continua mesmo sem saber o que aconteceu com a chamada anterior. A tela avisa: use apenas se preferir velocidade à conferência manual.

### 6️⃣ Revisão

A revisão só aparece depois que a campanha foi salva. Se ainda não salvou, a etapa mostra **"Salve a campanha para ver a revisão."**

O resumo mostra:

* **Vão receber a chamada**, **Ignorados** e **Canais**;
* **Campanha** (nome) e **Canais que serão usados** (com selo de conectado/desconectado);
* **Áudio** (duração) e um player para ouvir;
* **Intervalo entre chamadas**, **Pausas automáticas**, **Horário permitido** (com os dias), **Limite por dia**;
* **Duração aproximada** e **Término aproximado**;
* **Primeira chamada prevista**;
* **Por que alguns contatos foram ignorados**, quando houver;
* os **avisos de risco** (veja [Riscos](#-riscos-importantes)).

> 💡 O botão **Recalcular previsão** atualiza os números depois de qualquer alteração.

> ⚠️ **A previsão é aproximada, não uma garantia.** Ela muda com chamadas não atendidas, ligações mais longas, falhas de rede, pausas e limites do serviço.

---

## ▶️ Revisar e iniciar

Na lista, clique no ícone de telefone (**Revisar e iniciar**). A janela de revisão abre com o resumo e uma **caixa de aceite**:

> _"Entendi os riscos e confirmo que tenho autorização para ligar para estes contatos."_

O botão **Revisar e iniciar** (na janela) só libera quando:

* existe um **áudio** enviado;
* há **pelo menos um contato elegível**; e
* a caixa de aceite está marcada.

Caso contrário, a dica explica o motivo: **"Nenhum áudio enviado"** ou **"Nenhum contato elegível"**.

Ao confirmar, a mensagem **"Campanha iniciada"** aparece e a lista é atualizada.

> ⚠️ Se você já aceitou os riscos antes, a caixa pode vir marcada — o aceite continua visível como parte da revisão.

---

## 🛠️ Ações da lista

| Ação | O que faz | Quando aparece |
| --- | --- | --- |
| 👥 **Contatos** | Abre a lista de contatos da campanha | Sempre |
| 📊 **Acompanhar** | Abre o andamento e o histórico | Sempre |
| ✏️ **Editar** | Abre o editor | Sempre, mas **desabilitado durante a execução** ("Pause a campanha para editá-la") |
| 📞 **Revisar e iniciar** | Abre a revisão final | Em rascunho, agendada, cancelada, concluída ou com erro de configuração |
| ⏸️ **Pausar** | Pausa a campanha | Em execução |
| ▶️ **Retomar** | Continua de onde parou | Pausada |
| ⏹️ **Cancelar** | Interrompe a campanha | Em execução ou pausada |
| 📄 **Duplicar** | Cria uma cópia | Sempre |
| 🗑️ **Excluir** | Apaga a campanha e o histórico | Quando **não** está em execução |

### Pausar

A chamada em andamento **segue até o fim**; nenhuma nova chamada é feita. A mensagem confirma: **"Campanha pausada"** — _"A chamada em andamento segue até o fim; nenhuma nova será feita."_

### Retomar

Continua a campanha de onde parou.

### Cancelar

Nenhuma nova chamada será feita. Para a ligação em andamento, o encerramento é **solicitado** à integração, mas a própria tela avisa que **a integração não confirma o encerramento de chamadas de saída**.

### Duplicar

A janela pergunta **o que copiar**:

* **Somente as configurações**; ou
* **Configurações e lista de contatos**.

> 💡 A cópia nasce como **rascunho** e o **aceite dos avisos de risco não é copiado**.

### Excluir

Pede confirmação e avisa que **a campanha e todo o histórico dela serão removidos**. A ação não pode ser desfeita.

---

## 👥 Contatos da campanha

A tela de contatos mostra:

* **Vão receber a chamada** e **Ignorados** (com os motivos);
* a lista de contatos, com **Carregar mais** quando houver mais páginas;
* os botões **Limpar lista**, **Selecionar contatos** e **Voltar**.

| Coluna | O que mostra |
| --- | --- |
| **Contato** | Nome do contato |
| **Número** | Telefone |
| **Situação** | Estado da chamada para aquele contato |
| **Canal usado** | Qual número fez a ligação |
| **Duração** | Duração da chamada (minutos:segundos) |
| **Atendida em** | Data e hora do atendimento |
| **Motivo** | Motivo de ter sido ignorado ou o último erro |
| **Ações** | Remover o contato da campanha |

### Situações do contato

| Situação | O que significa |
| --- | --- |
| **Aguardando** | Ainda não foi chamado |
| **Iniciando chamada** | A ligação está sendo originada |
| **Chamando** | O telefone está tocando |
| **Atendida** | A pessoa atendeu |
| **Encerrada** | A chamada terminou |
| **Não atendida** | Ninguém atendeu |
| **Recusada** | A chamada foi recusada |
| **Indisponível** | O contato estava indisponível |
| **Ignorada** | O contato ficou de fora (veja o motivo) |
| **Falha** | A chamada falhou |
| **Sem confirmação** | O estado final não foi confirmado pela integração |

> ⚠️ **Durante a execução** não é possível alterar a lista: os botões ficam desabilitados com a dica **"Pause a campanha para alterar a lista de contatos."**

### Limpar lista

Remove os contatos **que ainda não foram chamados** — é o que a confirmação da tela informa.

---

## 📊 Acompanhamento

Clique em **Acompanhar** para ver o andamento em tempo real. A tela se atualiza **a cada 10 segundos** enquanto a campanha está em execução ou pausada.

### Barra e motivo de pausa

Uma barra mostra o **percentual concluído**. Se a campanha foi pausada pelo sistema, o **motivo** aparece em um aviso logo abaixo.

### Contadores

| Contador | O que soma |
| --- | --- |
| **Total** | Todos os contatos da campanha |
| **Aguardando** | Ainda não chamados |
| **Em andamento** | Chamadas em curso |
| **Encerradas** | Chamadas concluídas |
| **Não atendidas** | Não atendidas + recusadas + indisponíveis |
| **Ignoradas** | Contatos fora da campanha |
| **Falhas** | Chamadas com falha |
| **Sem confirmação** | Chamadas sem estado final confirmado |

### Previsão

Mostra a **duração aproximada** (faixa mínima e máxima), o **término aproximado** e a **próxima chamada**. Quando a duração do áudio não pôde ser medida, um aviso âmbar explica que a previsão usa o limite estimado.

### Chamada em andamento

Cada chamada em curso mostra contato, situação, canal e uma **contagem regressiva** para a liberação do canal, indicando se o motivo é **fim do áudio** ou **toque esgotado**.

### Canais em uso

Lista os canais ocupados, com o horário previsto de liberação e o identificador da chamada, quando houver. O texto explica: o canal é liberado sozinho no prazo previsto — ao fim do áudio quando a chamada foi atendida, ou depois do tempo de toque quando ninguém atendeu.

### Canal aguardando confirmação

Quando a integração não informa o fim de uma chamada e não há como consultá-la, o canal continua **reservado** e a campanha **não envia novas chamadas por ele**.

A tela orienta a verificar a ligação no aparelho e usar **Liberar canal**.

> ⚠️ Ao confirmar a liberação: o contato será marcado como **falha**, **não será chamado de novo**, e a ação ficará registrada com **o seu nome e o horário**.

### Motivos de contatos ignorados

Uma lista mostra quantos contatos foram ignorados por motivo (grupo, sem autorização, sem número, repetido).

### Histórico

A tabela de histórico pode ser filtrada por situação:

* Agendada, Tentativa, Chamando, Atendida, Encerrada, Não atendida, Falha, Ignorada, Sem confirmação, Pausada, Retomada, Canal liberado.

Colunas:

| Coluna | O que mostra |
| --- | --- |
| **Quando** | Data e hora do evento |
| **Contato** | Nome ou número |
| **Situação** | Evento registrado |
| **Canal usado** | Qual número participou |
| **ID da chamada** | Identificador da chamada, quando houver |
| **Autor** | Quem executou a ação (quando aplicável) |
| **Detalhe** | Mensagem de erro ou detalhe do evento |

> 💡 **Sem conexão com o servidor:** aparece o aviso _"Sem conexão com o servidor. Os dados podem estar desatualizados."_ — os números continuam na tela até a próxima atualização.

---

## ⚠️ Riscos importantes

Antes de iniciar, a revisão lista os riscos. Eles são parte do aceite:

* **Bloqueio:** chamadas em massa podem gerar reclamações e levar a restrições ou bloqueio do número e da conta.
* **Consentimento:** ligue apenas para pessoas que esperam o seu contato e autorizaram a ligação.
* **Sem proteção garantida:** intervalos, pausas e alternância entre números **não garantem** proteção contra bloqueios e não substituem a autorização do contato.
* **Sem contornar limites:** a campanha não contorna limites da integração nem do WhatsApp e não ignora pedidos de quem não quer ser contatado.
* **Opt-out:** contatos marcados para não receber campanhas são ignorados automaticamente, com o motivo registrado.

> 💡 Além disso, o módulo não liga em paralelo: as chamadas saem **uma por vez**, mesmo com vários canais. Mais canais **não deixam a campanha mais rápida** — eles apenas se alternam.

---

## 🧾 Mensagens e erros comuns

| Mensagem | O que fazer |
| --- | --- |
| **Informe o nome da campanha.** | Preencha o nome na etapa 1 |
| **Selecione pelo menos um canal.** | Escolha ao menos um canal na etapa 2 |
| **Escolha a data e hora de início.** | Preencha a data quando escolher "Programar" |
| **Selecione pelo menos um dia da semana.** | Marque ao menos um dia na etapa 5 |
| **Nenhum canal compatível** | Conecte um canal WhatsApp Plus em **Configurar canais** |
| **Conecte um canal do tipo WhatsApp Plus antes de comprar este adicional.** | Conecte o canal antes de contratar o adicional |
| **Seu plano não inclui campanhas de chamada de voz. Contrate um adicional para liberar.** | Contrate o adicional ou ajuste o plano |
| **Nenhum áudio enviado** | Envie o áudio na etapa 4 |
| **Nenhum contato elegível** | Adicione contatos válidos na etapa 3 |
| **Não foi possível carregar as campanhas.** | Atualize a página e tente de novo |
| **Não foi possível carregar a campanha.** | Feche e abra a campanha novamente |
| **Não foi possível salvar a campanha.** | Revise os campos e tente de novo |
| **Não foi possível iniciar a campanha.** | Confira áudio, contatos e canais |
| **Não foi possível pausar/retomar/cancelar a campanha.** | Atualize a lista e tente de novo |
| **Não foi possível excluir/duplicar a campanha.** | Atualize a lista e tente de novo |
| **Não foi possível enviar o áudio.** | Confira o formato (MP3, WAV ou OGG) e o tamanho |
| **Não foi possível carregar os canais.** | Verifique a conexão e recarregue a tela |
| **Não foi possível carregar a revisão.** | Salve a campanha e abra a revisão de novo |
| **Não foi possível carregar o histórico.** | Use o botão de atualizar |
| **Não foi possível atualizar os contatos.** | Atualize a tela e tente de novo |
| **Não foi possível remover o contato.** | Atualize a lista e tente de novo |
| **Não foi possível limpar a lista.** | Atualize a lista e tente de novo |
| **Não foi possível liberar o canal.** | Tente de novo; a reserva continua ativa |
| **Sem conexão com o servidor. Os dados podem estar desatualizados.** | Verifique a internet e atualize |
| **Pause a campanha para editar/alterar a lista.** | Pause antes de editar ou mexer nos contatos |

---

## ❓ Perguntas frequentes

**A campanha toca o áudio e desliga sozinha?**
Sim. A chamada não tem conversa: quando a pessoa atende, o áudio é reproduzido e a ligação encerra. A duração máxima pode ser limitada na etapa 4 (0 = até o fim do áudio).

**Posso usar qualquer canal do WhatsApp?**
Não. O recurso é exclusivo de canais **WhatsApp Plus**.

**Preciso deixar a tela aberta?**
A tela é só de acompanhamento: as chamadas são feitas pelo sistema, não pelo navegador. Enquanto estiver aberta, ela se atualiza sozinha a cada 10 segundos; ao voltar depois, os dados são recarregados.

**A campanha começa na data que eu programar?**
A data define **quando a primeira chamada pode sair**, respeitando a janela de horário e os dias permitidos. A campanha ainda precisa ser **revisada e iniciada** por você.

**Posso ligar para grupos?**
Não. Grupos e comunidades são recusados; só contatos individuais entram.

**Quantos canais posso escolher?**
A tela permite selecionar vários canais. Eles se alternam em rodízio e as chamadas continuam **uma por vez**.

**Por que a campanha pausou sozinha?**
O motivo aparece em **"Pausada pelo sistema"** e no acompanhamento. Pode ser, por exemplo, um canal aguardando confirmação de uma chamada anterior.

**O que acontece se eu cancelar no meio de uma ligação?**
Nenhuma nova chamada é feita. O encerramento da ligação em andamento é solicitado à integração, mas a tela avisa que ela **não confirma** o encerramento de chamadas de saída.

**Posso editar uma campanha em execução?**
Não. Pause primeiro.

**Excluir a campanha apaga o histórico?**
Sim. A confirmação avisa que a campanha e todo o histórico serão removidos.

**Quanto custa cada ligação?**
O frontend **não informa** custo por chamada. Essa informação não está nos arquivos analisados.

**Existe limite de contatos?**
O frontend **não informa** um limite máximo de contatos. O que existe é o limite diário opcional e os controles de ritmo.

---

## 👣 Próximos passos

* [Campanhas de mensagem (WhatsApp não oficial)](campanha-whatsapp-nao-oficial.md)
* [Campanhas (visão geral)](README.md)
* [WhatsApp API PLUS](../../../canais-disponiveis/whatsapp-api-nao-oficial/whatsapp_api_plus/README.md)
* [Adicionais do SaaS](../../../modulo-saas/criacao-de-planos-financeiro/adicionais.md)
