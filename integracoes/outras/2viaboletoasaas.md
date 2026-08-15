---
icon: barcode
---

# Asaas - 2ª Via Boleto

## 📌 O que você vai precisar

* **API Key do Asaas** 👉 Obtenha no site do [Asaas](https://www.asaas.com/customerApiAccessToken/index)
* Acesso ao **Whazing** com permissão para criar integrações (perfil Admin ou Supervisor)

***

## Passo 1: Criar a integração no Whazing

Acesse:

**Automação e Integrações → IA e Integrações**

Clique em **Adicionar** e selecione:

👉 **2 via boleto Asaas**

Siga o assistente (Nome → Configuração → Revisão):

<figure><img src="../../.gitbook/assets/image (4) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

### 📝 Campos da integração

* **Nome da integração** — ex.: `Boleto Asaas`
* **Fila transferir caso ocorrer algum erro** — fila de atendimento humano para casos de erro (não use a mesma fila da integração)
* **API Key** — cole o token da API do Asaas

### 💬 Opções de interação

* **Lista / Botões / Copiar e colar** — escolha conforme o canal utilizado
  * WhatsApp: suporta **listas e botões**
  * Telegram: **não suporta botões reply**

⚠️ Se ativar uma opção que o canal **não suporta**, a mensagem **não será entregue ao cliente**.

***

## Passo 2: Ativar a integração

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

## Passo 3: Funcionamento final (como o cliente vê)

1. O cliente conversa com o bot de identificação
2. Escolhe a opção **2 Via Boleto**
3. O sistema solicita o **CPF ou CNPJ**
4. O cliente informa os dados
5. O sistema consulta o Asaas automaticamente
6. Os boletos disponíveis são listados para o cliente

***

✅ **Pronto!** A integração de **2ª via de boleto Asaas** está funcionando.
