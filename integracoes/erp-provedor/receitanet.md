# ReceitaNET

## 📌 O que você vai precisar

* **Token da API ReceitaNET** 👉 Solicite esse token diretamente ao **suporte da ReceitaNET**
* Acesso ao **Whazing** com permissão para criar integrações (perfil Admin ou Supervisor)

***

## 1️⃣ Criando a integração no Whazing

Agora vamos configurar a integração dentro do Whazing.

Acesse o menu:

**Automação e Integrações → IA e Integrações**

Clique em **Adicionar** e selecione:

👉 **2 via boleto ReceitaNet - Erp Provedor**

***

## 2️⃣ Preenchendo os dados da integração

Siga o assistente (Nome → Configuração → Revisão) e preencha os campos com atenção:

### 📝 Nome da integração

* Escolha um nome para identificar essa integração no sistema
* Exemplo: `Boleto ReceitaNet`

### 🌐 URL da integração

Utilize exatamente a URL abaixo:

[**https://sistema.receitanet.net**](https://sistema.receitanet.net)

⚠️ **Muito importante:**

* **Não** coloque `/` no final da URL
* **Não** adicione nenhum outro caminho

### 🔄 Fila de transferência (em caso de erro)

* Escolha uma fila para atendimento humano caso ocorra algum erro
* ❌ **Não utilize a mesma fila da integração**

### 🔐 API Key

* Cole aqui o token da API ReceitaNET fornecido pelo suporte

### 🧩 APP

* Preencha este campo com o valor:

```
chatbot
```

ℹ️ Conforme orientação do suporte da ReceitaNET, este campo deve sempre ser utilizado como `chatbot` para funcionamento correto da integração.

***

## 3️⃣ Opções adicionais da integração

Algumas opções podem ser ativadas conforme o canal utilizado pelo cliente.

### 💬 Tipo de interação (lista, botões ou copiar/colar)

* Essa opção depende da API e do canal utilizado
* Exemplos:
  * WhatsApp: suporta listas e botões
  * Telegram: **não suporta botões reply**

⚠️ Se ativar uma opção que o canal **não suporta**, a mensagem **não será entregue ao cliente**.

<figure><img src="../../.gitbook/assets/image (75).png" alt=""><figcaption></figcaption></figure>

***

## 4️⃣ Ativar a integração

Após criar, o sistema abre o assistente **"Vamos ativar sua integração"**:

1. **Fila** — escolha a **Fila de Atendimento Humano** e clique em **Gerar Bot**. O sistema cria automaticamente:
   * A **fila da integração** (a opção **"Inicia Integração ao transferir"** fica desativada, pois a integração precisa do CPF/CNPJ antes);
   * Um **chatbot com menu**:

   ```
   1. Falar com Humano
   2. 2 Via Boleto
   ```

   Ao escolher a opção 2, o cliente é transferido para a fila da integração com a mensagem pedindo o **CPF ou CNPJ**.
2. **Canais** — escolha em quais canais a integração será utilizada;
3. **Confirmação** — finalize.

> 💡 Quer usar seu próprio chatbot? Edite o fluxo do bot ou configure sua fila manualmente em **Cadastros → Filas** (campo **Integração**), transferindo o atendimento para ela **somente depois** de coletar o CPF/CNPJ.

***

## 5️⃣ Funcionamento final (como o cliente vê)

O fluxo funciona da seguinte forma:

1. O cliente conversa com o bot de identificação
2. Escolhe a opção **2 Via Boleto**
3. O sistema solicita o **CPF ou CNPJ**
4. O cliente informa os dados
5. O sistema consulta automaticamente a ReceitaNET
6. Os boletos disponíveis são listados para o cliente

<figure><img src="../../.gitbook/assets/image (76).png" alt=""><figcaption></figcaption></figure>

***

✅ **Pronto!** A integração de **2ª via de boleto ReceitaNET** está funcionando corretamente.

Você pode personalizar mensagens, filas e regras conforme o seu fluxo de atendimento.
