# Rodízio Automático de Atendimentos

Sim 👍 É possível utilizar o sistema de **rodízio automático de atendimentos**, onde as conversas são distribuídas automaticamente entre os consultores da equipe.

***

#### ⚙️ Como funciona <a href="#como-funciona" id="como-funciona"></a>

O rodízio **não funciona sozinho** — ele depende de um **Chatbot configurado** para encaminhar o atendimento para uma fila.

👉 Ou seja: O chatbot é responsável por direcionar o cliente, e a fila é responsável pela distribuição entre os atendentes.

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

⚠️ **Importante:** Essa fila deve conter **todos os atendentes que participarão do rodízio**.

***

**3️⃣ Ativar a distribuição automática**

Dentro das configurações do chatbot, ative a opção:

➡️ **Auto Distribuir Atendimento**

***

#### 🔀 Tipos de distribuição <a href="#tipos-de-distribuicao" id="tipos-de-distribuicao"></a>

Você pode escolher como o sistema irá distribuir os atendimentos:

* **Não** Distribuição automática desativada.
* **Aleatória** O sistema escolhe um atendente de forma randômica entre os usuários da fila.
* **Balanceada** O sistema envia o atendimento para o **usuário com menos atendimentos ativos**, equilibrando a carga da equipe.

***

#### ⚠️ Regras importantes <a href="#regras-importantes" id="regras-importantes"></a>

* Apenas usuários com perfil **"Usuário"** participam do rodízio
* O atendente precisa estar **online** para receber atendimentos
* Administradores e Supervisores **não entram** na distribuição automática
* A fila deve estar corretamente configurada com os atendentes

***

#### ✅ Resumo prático <a href="#resumo-pratico" id="resumo-pratico"></a>

1. Cliente entra no chatbot
2. Chatbot direciona para uma fila
3. A fila contém os atendentes
4. O sistema distribui automaticamente conforme o tipo configurado

#### Abaixo exemplo fluxo <a href="#resumo-pratico" id="resumo-pratico"></a>

Somente abrir boas vindas ir em condições e escolher fila que será encaminhada atendimentos. No fluxo tem força condições que faz automaticamente verificar sem esperar resposta do cliente.

{% file src="../../../.gitbook/assets/modelorodizio.json" %}
