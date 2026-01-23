# 2ª Via de Boleto (ReceitaNET)

## 📌 O que você vai precisar

* **Token da API ReceitaNET**
  👉 Solicite esse token diretamente ao **suporte da ReceitaNET**
* Acesso ao **Whazing** com permissão para criar integrações, filas e bot

---

## 1️⃣ Criando a integração no Whazing

Agora vamos configurar a integração dentro do Whazing.

Acesse o menu:

**Cadastro → Filas - Integrações → Integrações**

Clique em **Adicionar** e selecione:

👉 **2ª via boleto ReceitaNet - ERP Provedor**

---

## 2️⃣ Preenchendo os dados da integração

Preencha os campos com atenção:

### 📝 Nome da integração

* Escolha um nome para identificar essa integração no sistema
* Exemplo: `Boleto ReceitaNet`

### 🌐 URL da integração

Utilize exatamente a URL abaixo:

**[https://sistema.receitanet.net](https://sistema.receitanet.net)**

⚠️ **Muito importante:**

* **Não** coloque `/` no final da URL
* **Não** adicione nenhum outro caminho

### 🔄 Fila de transferência (em caso de erro)

* Escolha uma fila para atendimento humano caso ocorra algum erro
* ❌ **Não utilize a mesma fila da integração**

### 🔐 API Key

* Cole aqui o **token da API ReceitaNET** fornecido pelo suporte

---

## 3️⃣ Opções adicionais da integração

Algumas opções podem ser ativadas conforme o canal utilizado pelo cliente.

### 💬 Tipo de interação (lista, botões ou copiar/colar)

* Essa opção depende da API e do canal utilizado
* Exemplos:

  * WhatsApp: suporta listas e botões
  * Telegram: **não suporta botões reply**

⚠️ Se ativar uma opção que o canal **não suporta**, a mensagem **não será entregue ao cliente**.

<figure><img src="../../.gitbook/assets/image (75).png" alt=""><figcaption></figcaption></figure>

---

## 4️⃣ Criando a fila da integração

Agora vamos criar a fila que será responsável pela consulta dos boletos.

1. Crie uma nova **Fila**
2. Marque a opção **Usar integração**
3. Selecione a integração criada anteriormente

⚠️ Importante:

* Deixe **desativada** a opção:

**“Inicia integração ao transferir”**

<figure><img src="../../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

---

## 5️⃣ Configurando o bot para enviar o cliente à fila

No fluxo do seu bot:

* Configure para **transferir o atendimento** para a fila da integração
* Defina uma mensagem solicitando:

👉 **CPF ou CNPJ do cliente**

Exemplo de mensagem:

> “Para localizar seus boletos, por favor informe seu CPF ou CNPJ.”

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

---

## 6️⃣ Arquivo de exemplo do bot

Você pode utilizar o arquivo abaixo como base para a configuração do bot:

{% file src="../../.gitbook/assets/boletoatlaz.json" %}

---

## 7️⃣ Funcionamento final (como o cliente vê)

O fluxo funciona da seguinte forma:

1. O cliente chega na fila da integração
2. Digita o **CPF ou CNPJ**
3. O sistema consulta automaticamente a ReceitaNET
4. Os boletos disponíveis são listados para o cliente

<figure><img src="../../.gitbook/assets/image (76).png" alt=""><figcaption></figcaption></figure>

---

✅ **Pronto!** A integração de **2ª via de boleto ReceitaNET** está funcionando corretamente.

Você pode personalizar mensagens, filas e regras conforme o seu fluxo de atendimento.
