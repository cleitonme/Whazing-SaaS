# Abertura Chamado

Este tutorial explica, de forma **simples e passo a passo**, como configurar a integração de **Abertura de Chamado** da **Atlaz** no Whazing.

***

## 📌 O que você vai precisar

* Acesso ao **painel da Atlaz** (usaremos o painel demo como exemplo)
* Acesso ao **Whazing** com permissão para criar integrações (perfil Admin ou Supervisor)

***

## 1️⃣ Acessando o painel da Atlaz

Para este exemplo, utilizaremos o painel demo da Atlaz.

No painel da Atlaz, siga o caminho:

**Painel → Configurações → Recursos**

<figure><img src="../../../.gitbook/assets/image (2) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

### 🔑 Copiar o Token da API

* Localize o **Token da API**
* Copie esse token
* Guarde, pois ele será utilizado na configuração do Whazing

***

## 2️⃣ Criando a integração no Whazing

Agora vamos configurar a integração dentro do Whazing.

Acesse o menu:

**Automação e Integrações → IA e Integrações**

Clique em **Adicionar** e selecione:

👉 **Criar Chamado Atlaz**

***

## 3️⃣ Preenchendo os dados da integração

Siga o assistente (Nome → Configuração → Revisão) e preencha os campos abaixo com atenção:

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

* **Intervalo de horas para que o assinante possa criar um novo chamado** — define quantas horas o assinante deve aguardar para abrir outro chamado. Evita abertura excessiva de chamados em curto período.
* **Intervalo (ms) entre mensagens** — tempo entre o envio de mensagens automáticas. Se o cliente digitar a mensagem em partes (mensagem "picotada"), o sistema aguarda esse tempo para **juntar tudo em um único chamado**.

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

## 5️⃣ Ativar a integração

Após criar, o sistema abre o assistente **"Vamos ativar sua integração"**:

1. **Fila** — escolha a **Fila de Atendimento Humano** e clique em **Gerar Bot**. O sistema cria automaticamente:
   * A **fila da integração** (a opção **"Inicia Integração ao transferir"** fica desativada, pois a integração precisa do CPF/CNPJ antes);
   * Um **chatbot com menu**:

   ```
   1. Falar com Humano
   2. Abrir chamado
   ```

   Ao escolher a opção 2, o cliente é transferido para a fila da integração com a mensagem pedindo o **CPF ou CNPJ**.
2. **Canais** — escolha em quais canais a integração será utilizada;
3. **Confirmação** — finalize.

> 💡 Quer usar seu próprio chatbot? Edite o fluxo do bot ou configure sua fila manualmente em **Cadastros → Filas** (campo **Integração**), transferindo o atendimento para ela **somente depois** de coletar o CPF/CNPJ.

***

## 6️⃣ Arquivo de exemplo do bot

Você pode utilizar o arquivo abaixo como base para a configuração do bot:

{% file src="../../../.gitbook/assets/boletoatlaz.json" %}

***

## 7️⃣ Funcionamento final (como o cliente vê)

O fluxo funciona da seguinte forma:

1. O cliente conversa com o bot de identificação
2. Escolhe a opção **Abrir chamado**
3. O sistema solicita o **CPF ou CNPJ**
4. O cliente informa os dados
5. O sistema valida os dados na Atlaz
6. O cliente responde às perguntas necessárias
7. O chamado é aberto automaticamente

<figure><img src="../../../.gitbook/assets/image (74).png" alt=""><figcaption></figcaption></figure>

***

✅ **Pronto!** A integração de **Abertura de Chamado Atlaz** está funcionando corretamente.

Você pode personalizar mensagens, filas e regras de tempo conforme o seu fluxo de atendimento.
