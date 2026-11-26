# Rodízio Automático de Atendimentos

Sim 👍 É possível utilizar o sistema de **rodízio automático de atendimentos**, onde as conversas são distribuídas automaticamente entre os consultores da equipe.

> 📖 Para entender como montar o fluxo do chatbot (etapas, interações, condições e roteamento para fila), consulte o guia completo: [CHATBOT 3.0 (ChatFlow)](./).

***

#### ⚙️ Como funciona <a href="#como-funciona" id="como-funciona"></a>

O rodízio **não funciona sozinho**: ele precisa de dois ingredientes.

1. O atendimento precisa **chegar a uma fila** — normalmente o chatbot é quem encaminha o cliente para ela.
2. Essa fila precisa estar com a **Distribuição Automática** ativada.

Em outras palavras: o **chatbot** direciona o cliente; a **fila** decide qual atendente recebe o atendimento.

> 💡 **Também funciona sem Chatbot:** a [Distribuição Automática](../../gestao/distribuicao-automatica.md) atua direto na fila, para os atendimentos que caem nela sem passar por um fluxo.

> ⚙️ **Quem participa (🔄 alterado):** agora os perfis que podem receber são escolhidos **na configuração da fila** — Administrador, Supervisor Geral, Supervisor de Fila e/ou Usuário. Não vale mais a regra antiga de "somente o perfil Usuário", e administradores/supervisores deixaram de ficar de fora por padrão.

> ⚠️ **Mudou no editor do chatbot:** a opção **"Auto Distribuir Atendimento"** não aparece mais no nó **Configurações** do fluxo — ela foi substituída pela configuração da própria fila (Central de Configurações → Atendimento → Distribuição Automática). Fluxos antigos que ainda guardam esse campo no JSON continuam funcionando: o que vale é a configuração da fila.

***

#### 🧩 Configuração necessária <a href="#configuracao-necessaria" id="configuracao-necessaria"></a>

**1️⃣ Criar ou editar um Chatbot**

Acesse:

**Configurações → Chatbot**

Crie um novo fluxo ou edite um já existente.

***

**2️⃣ Configurar condição para envio à fila**

Nas **condições do fluxo do chatbot**, adicione uma ação para:

➡️ **Encaminhar o atendimento para uma fila específica**

⚠️ **Importante:** essa fila deve conter **todos os atendentes que participarão do rodízio** — só usuários vinculados à fila entram na distribuição.

***

**3️⃣ Ativar a distribuição na fila**

A ativação é feita na fila, e não mais no chatbot:

1. Abra **Central de Configurações → Atendimento → Distribuição Automática**.
2. Em **"Selecione a fila"**, escolha a fila usada pelo chatbot.
3. Escolha o modo (veja abaixo) e ajuste as demais opções.
4. Clique em **Salvar**.

***

#### 🔀 Tipos de distribuição <a href="#tipos-de-distribuicao" id="tipos-de-distribuicao"></a>

| Modo | O que faz |
| ---- | --------- |
| **Não** | Distribuição automática desativada — os atendimentos ficam na fila. |
| **Aleatória** | Sorteia um atendente entre os elegíveis. |
| **Balanceada** | Escolhe o elegível com **menos atendimentos em aberto**. |
| **Porcentagem** | Divide os atendimentos entre **vendedores específicos**, conforme a porcentagem de cada um (ex.: 30% e 70%). |
| **Rodízio por ordem de cadastro** 🆕 | Entrega um atendimento para cada usuário, seguindo a ordem de cadastro; no fim da lista, volta ao primeiro. |

> 💡 Quem é considerado "elegível" depende de três cartões da tela: **Perfis que podem receber**, **Quem pode receber** (incluir offline/indisponíveis) e **Quando ninguém estiver disponível**. Cada um está explicado em [Distribuição Automática](../../gestao/distribuicao-automatica.md).

***

#### 🥧 Divisão por porcentagem <a href="#divisao-por-porcentagem" id="divisao-por-porcentagem"></a>

Ao escolher o modo **Porcentagem**, aparece o card **"Divisão por vendedor"**:

* A lista mostra **somente os usuários vinculados àquela fila**.
* Use **"Adicionar vendedor"** para incluir cada vendedor e informe a **porcentagem** dele (0 a 100).
* Ao adicionar, o sistema já preenche o que falta para fechar 100% — depois você reparte como quiser (por exemplo, 30% e 70%).
* A soma precisa ser **exatamente 100%**: o total aparece em um selo e a tela avisa quanto falta ou quanto passou.
* O botão **Salvar** fica bloqueado até a soma fechar em 100%.
* Se um vendedor da divisão perder o vínculo com a fila, ele continua na lista marcado como _"Fora da fila — não participará da divisão"_ até ser removido.

> 💡 **Só o que a tela informa:** o modo é descrito como "divide os novos atendimentos entre vendedores específicos, na porcentagem que você definir". O cálculo interno de como cada atendimento é escolhido entre as porcentagens **não é exibido no frontend** — para conferir o que aconteceu em cada caso, use o histórico de distribuição (abaixo).

#### 🧑‍💼 Clientes recorrentes e carteira

No card **"Clientes recorrentes"** existem duas opções:

| Opção | O que faz |
| ----- | --------- |
| **Enviar o atendimento para o vendedor da carteira do contato** | Se o contato **já tem vendedor na carteira**, o atendimento vai direto para ele e **não entra na divisão por porcentagem** (nem nas demais regras da fila). Só quem **não tem carteira** é distribuído. |
| **Guardar o cliente na carteira de quem receber** | Ao distribuir, o contato é **registrado na carteira do vendedor escolhido**, para que os próximos atendimentos voltem para ele. Se o contato **já tiver** vendedor na carteira, essa associação **não é alterada**. |

> ⚠️ A primeira opção é uma configuração **da empresa**: somente um **administrador** consegue alterá-la. Para os demais perfis, o interruptor aparece bloqueado com o aviso _"Somente um administrador pode alterar esta opção."_

#### 🤝 Se ninguém da divisão estiver disponível

Ainda no modo **Porcentagem**, o card **"Se ninguém da divisão estiver disponível"** oferece a opção **"Distribuir pelo modo balanceado"**:

* **Ligada:** se nenhum vendedor da divisão estiver elegível no momento, o atendimento é distribuído pelo critério de **menos atendimentos em aberto** entre os **perfis selecionados**.
* **Desligada:** o atendimento fica **sem responsável** e segue o fluxo normal da fila.

> 💡 Por isso, no modo Porcentagem, o card de perfis só aparece quando essa reserva está ligada — eles valem apenas para ela.

***

#### 🔁 Rodízio por ordem de cadastro 🆕 <a href="#rodizio-por-ordem" id="rodizio-por-ordem"></a>

No modo **Rodízio por ordem de cadastro**, o atendimento vai para **um usuário por vez**:

* A ordem segue o **número de cadastro (ID)** de cada usuário, do menor para o maior.
* A cada novo atendimento entra o **próximo da lista**; ao chegar no último, o ciclo **recomeça no primeiro**.
* Só participam os usuários que estiverem **disponíveis no momento do atendimento** (conforme as opções de presença/disponibilidade da fila) — quem não está tem a vez pulada.

> 💡 O próprio cartão do modo explica: _"A ordem segue o número de cadastro (ID) de cada usuário, do menor para o maior. A cada novo atendimento entra o próximo da lista; ao chegar no último, o ciclo recomeça no primeiro. Só participam os usuários que estiverem disponíveis no momento do atendimento."_

***

#### 📋 Histórico de distribuição (logs) 🆕 <a href="#logs" id="logs"></a>

Para **entender e auditar** as decisões — inclusive as do rodízio — existe um relatório próprio.

**Onde fica:** na tela de Distribuição Automática, o botão **"Ver histórico de distribuição"** (ao lado de **Salvar**) abre **Relatórios → Auditoria → Distribuição Automática**.

**Filtros:**

* **Início** e **Fim** (o período — por padrão, o mês atual);
* **Fila**;
* **Regra usada** (Aleatória, Balanceada, Porcentagem, Rodízio por ordem de cadastro);
* **Resultado** ("Entregue a alguém" ou "Ninguém disponível");
* **Usuário**;
* **"Só os que ignoraram presença"**.

**Colunas da lista:**

| Coluna | O que mostra |
| ------ | ------------ |
| **Data e hora** | Quando a decisão aconteceu |
| **Fila** | A fila do atendimento |
| **Regra usada** | O modo que decidiu |
| **Quem recebeu** | "Entregue" + nome do atendente, ou **"Ninguém disponível"** |
| **Por que** | O motivo da decisão (veja os motivos abaixo) |
| **Na fila / Online / Ocupados / Disponíveis** | Os quatro números do momento da decisão |
| **Atendimento** | O número do ticket (clique para abrir) |

**Motivos exibidos:**

* _"Era a vez desse usuário no rodízio"_
* _"Sorteado entre quem estava disponível"_
* _"Tinha menos atendimentos em aberto"_
* _"Porcentagem definida para esse usuário"_
* _"Nenhum vendedor da divisão estava disponível, então valeu o critério de menos atendimentos"_
* _"Ninguém estava disponível e o atendimento ficou na fila"_

Quando o sistema precisou **ignorar presença** para escolher alguém, a linha mostra um ícone com a dica **"Distribuído ignorando presença"**.

**Detalhes da decisão** (ícone de lupa): abre um resumo com data e hora, fila, canal, regra, motivo, quem recebeu, o ticket e o **responsável atual**, além dos contadores do momento. Abaixo, o **retrato da fila**: cada usuário vinculado, com perfil, se estava **online**, se estava **disponível**, se estava **no perfil ou na divisão**, se **podia receber**, quantos **atendimentos em aberto** tinha e se **recebeu**.

> 💡 No rodízio, o detalhe mostra também **"Último a receber antes desta vez"** — se a ordem parecer estranha, é esse o dado para conferir. A lista pode ser ordenada clicando no título das colunas e exportada em **Excel**.

***

#### ⚠️ Regras importantes <a href="#regras-importantes" id="regras-importantes"></a>

* O atendimento precisa **chegar a uma fila** com a Distribuição Automática ativada (modo diferente de "Não").
* Só participam **usuários vinculados à fila** e que sejam dos **perfis marcados** na tela da fila.
* Participam usuários **online e disponíveis**, conforme as opções "Quem pode receber" e "Quando ninguém estiver disponível".
* Se o atendimento **já chegar com responsável definido** — usuário escolhido no chatbot, integração, canal privado ou carteira do contato (com a opção ligada) — a distribuição **não o move**.
* No modo **Porcentagem**, a soma precisa ser **exatamente 100%** e a divisão só considera os vendedores configurados.
* Cada fila tem a **sua própria** configuração.

***

#### ✅ Resumo prático <a href="#resumo-pratico" id="resumo-pratico"></a>

1. Cliente entra no chatbot
2. Chatbot direciona para uma fila
3. A fila tem a Distribuição Automática ativada e os atendentes vinculados
4. O sistema distribui automaticamente conforme o modo configurado
5. O resultado fica registrado no **histórico de distribuição**

#### Abaixo exemplo fluxo <a href="#resumo-pratico" id="resumo-pratico"></a>

Somente abrir boas vindas ir em condições e escolher fila que será encaminhada atendimentos. No fluxo tem força condições que faz automaticamente verificar sem esperar resposta do cliente.

{% file src="../../../.gitbook/assets/modelorodizio.json" %}
