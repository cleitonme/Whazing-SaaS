# Abertura Chamado

***

## 📌 O que você vai precisar

* Acesso ao **painel da Atlaz** (usaremos o painel demo como exemplo)
* Acesso ao **Whazing** com permissão para criar integrações, filas e bot

***

## 1️⃣ Acessando o painel da Atlaz

Para este exemplo, utilizaremos o painel demo da Atlaz.

No painel da Atlaz, siga o caminho:

**Painel → Configurações → Recursos**

<figure><img src="../../../.gitbook/assets/image (2) (1).png" alt=""><figcaption></figcaption></figure>

### 🔑 Copiar o Token da API

* Localize o **Token da API**
* Copie esse token
* Guarde, pois ele será utilizado na configuração do Whazing

***

## 2️⃣ Criando a integração no Whazing

Agora vamos configurar a integração dentro do Whazing.

Acesse o menu:

**Cadastro → Filas - Integrações → Integrações**

Clique em **Adicionar** e selecione:

👉 **Criar chamado Atlaz**

***

## 3️⃣ Preenchendo os dados da integração

Preencha os campos abaixo com atenção:

### 📝 Nome da integração

* Escolha um nome para identificar essa integração no sistema
* Exemplo: `Chamado Atlaz`

### 🌐 URL da integração

* No painel demo, utilize:

[**https://demo.atlaz.com.br**](https://demo.atlaz.com.br)

⚠️ **Muito importante:**

* **Não** coloque `/` no final da URL
* **Não** adicione nenhum outro caminho

### 🔄 Fila de transferência (em caso de erro)

* Escolha uma fila para atendimento humano caso ocorra algum erro
* ❌ **Não utilize a mesma fila da integração**

### 🔐 API Key

* Cole aqui o **token da API** copiado do painel da Atlaz

***

### ⏱️ Configurações de tempo

Essas opções controlam como e quando o cliente pode abrir novos chamados:

* **Intervalo de horas para novo chamado** Define quantas horas o assinante deve aguardar para abrir outro chamado.
* **Tempo permitido entre registros de chamados** Evita abertura excessiva de chamados em curto período.
* **Intervalo (ms) entre mensagens** Tempo entre o envio de mensagens automáticas.
*   **Tempo de espera para unir mensagens do cliente** Se o cliente digitar a mensagem em partes (mensagem “picotada”), o sistema aguarda esse tempo para **juntar tudo em um único chamado**.

    👉 Recomendado: **15000 ms (15 segundos)** — valor mínimo indicado.

***

## 4️⃣ Opções adicionais da integração

Algumas opções podem ser ativadas conforme o canal utilizado.

### 💬 Tipo de interação (botões)

* Depende do canal/API utilizada
* Exemplos:
  * WhatsApp: suporta botões e listas
  * Telegram: **não suporta botões reply**

⚠️ Se ativar uma opção que o canal **não suporta**, a mensagem **não será entregue ao cliente**.

<figure><img src="../../../.gitbook/assets/image (73).png" alt=""><figcaption></figcaption></figure>

***

## 5️⃣ Criando a fila da integração

Agora vamos criar a fila que será responsável pela abertura do chamado.

1. Crie uma nova **Fila**
2. Marque a opção **Usar integração**
3. Selecione a integração criada anteriormente

⚠️ Importante:

* Deixe **desativada** a opção:

**“Inicia integração ao transferir”**

<figure><img src="../../../.gitbook/assets/image (4) (1).png" alt=""><figcaption></figcaption></figure>

***

## 6️⃣ Configurando o bot para enviar o cliente à fila

No fluxo do seu bot:

* Configure para **transferir o atendimento** para a fila da integração
* Defina uma mensagem solicitando:

👉 **CPF ou CNPJ do cliente**

Exemplo de mensagem:

> “Para abrir seu chamado, por favor informe seu CPF ou CNPJ.”

<figure><img src="../../../.gitbook/assets/image (5) (1).png" alt=""><figcaption></figcaption></figure>

***

## 7️⃣ Arquivo de exemplo do bot

Você pode utilizar o arquivo abaixo como base para a configuração do bot:

{% file src="../../../.gitbook/assets/boletoatlaz.json" %}

***

## 8️⃣ Funcionamento final (como o cliente vê)

O fluxo funciona da seguinte forma:

1. O cliente é direcionado para a fila da integração
2. Informa o **CPF ou CNPJ**
3. O sistema valida os dados na Atlaz
4. O cliente responde às perguntas necessárias
5. O chamado é aberto automaticamente

<figure><img src="../../../.gitbook/assets/image (74).png" alt=""><figcaption></figcaption></figure>

***

✅ **Pronto!** A integração de **Abertura de Chamado Atlaz** está funcionando corretamente.

Você pode personalizar mensagens, filas e regras de tempo conforme o seu fluxo de atendimento.
