# Desbloqueio de Confiança

Este tutorial explica, de forma **simples e passo a passo**, como configurar a integração de **Desbloqueio de Confiança** da **Atlaz** no Whazing.

***

## 📌 O que você vai precisar

* Acesso ao **painel da Atlaz** (usaremos o painel demo como exemplo)
* Acesso ao **Whazing** com permissão para criar integrações (perfil Admin ou Supervisor)

***

## 1️⃣ Acessando o painel da Atlaz

Para este exemplo, utilizaremos o painel demo:

No painel da Atlaz, siga o caminho:

**Painel → Configurações → Recursos**

<figure><img src="../../../.gitbook/assets/image (2) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

### 🔑 Copiar o Token da API

* Localize o **Token da API**
* Copie esse token
* Guarde, pois ele será usado no Whazing

***

## 2️⃣ Criando a integração no Whazing

Agora vamos configurar a integração dentro do Whazing.

Acesse:

**Automação e Integrações → IA e Integrações**

Clique em **Adicionar** e selecione:

👉 **Desbloqueio confiança Atlaz**

***

## 3️⃣ Preenchendo os dados da integração

Siga o assistente (Nome → Configuração → Revisão) e preencha os campos com atenção:

### 📝 Nome da integração

* Escolha um nome para identificar essa integração no sistema
* Exemplo: `Desbloqueio Confiança Atlaz`

### 🌐 URL da integração

* No painel demo, utilize:

[**https://demo.atlaz.com.br**](https://demo.atlaz.com.br)

⚠️ **Muito importante:**

* **Não** coloque `/` no final da URL
* **Não** adicione nenhum outro caminho

### 🔄 Fila de transferência (em caso de erro)

* Escolha uma fila para atendimento humano caso ocorra erro
* ❌ **Não utilize a mesma fila da integração**

### 🔐 API Key

* Cole aqui o **token da API** que você copiou no painel da Atlaz

***

## 4️⃣ Opções adicionais da integração

Algumas opções podem ser ativadas conforme o canal utilizado.

### 💬 Tipo de interação (botões)

* Essa opção depende da API/canal utilizado
* Exemplos:
  * WhatsApp: geralmente suporta listas e botões
  * Telegram: **não suporta botões reply**

⚠️ Se ativar uma opção que o canal **não suporta**, a mensagem **não será entregue**.

<figure><img src="../../../.gitbook/assets/image (69).png" alt=""><figcaption></figcaption></figure>

***

## 5️⃣ Ativar a integração

Após criar, o sistema abre o assistente **"Vamos ativar sua integração"**:

1. **Fila** — escolha a **Fila de Atendimento Humano** e clique em **Gerar Bot**. O sistema cria automaticamente:
   * A **fila da integração** (a opção **"Inicia Integração ao transferir"** fica desativada, pois a integração precisa do CPF/CNPJ antes);
   * Um **chatbot com menu**:

   ```
   1. Falar com Humano
   2. Desbloqueio Confiança
   ```

   Ao escolher a opção 2, o cliente é transferido para a fila da integração com a mensagem pedindo o **CPF ou CNPJ**.
2. **Canais** — escolha em quais canais a integração será utilizada;
3. **Confirmação** — finalize.

> 💡 Quer usar seu próprio chatbot? Edite o fluxo do bot ou configure sua fila manualmente em **Cadastros → Filas** (campo **Integração**), transferindo o atendimento para ela **somente depois** de coletar o CPF/CNPJ.

***

## 6️⃣ Arquivo de exemplo do bot

Você pode usar o arquivo abaixo como base para configuração do bot:

{% file src="../../../.gitbook/assets/boletoatlaz.json" %}

***

## 7️⃣ Funcionamento final (como o cliente vê)

1. O cliente conversa com o bot de identificação
2. Escolhe a opção **Desbloqueio Confiança**
3. O sistema solicita o **CPF ou CNPJ**
4. O cliente informa os dados
5. O sistema consulta automaticamente a Atlaz
6. O sistema tenta fazer o desbloqueio da internet

<figure><img src="../../../.gitbook/assets/image (71).png" alt=""><figcaption></figcaption></figure>

***

✅ **Pronto!** Sua integração de **Desbloqueio de confiança** está funcionando.

Se quiser, você pode adaptar mensagens, filas e regras conforme o seu fluxo de atendimento.
