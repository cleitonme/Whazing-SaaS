---
description: Suporte à 2ª via de boletos e desbloqueio de confiança (IXC Soft)
---

# IXC Soft

Este tutorial explica, de forma **simples e passo a passo**, como configurar a integração do **IXC Soft** no Whazing para:

* 📄 **2ª via de boletos**
* 🔓 **Desbloqueio de confiança**

São **duas integrações separadas**: uma de **2ª via de boleto IXC** e outra somente de **Desbloqueio de confiança IXC**.

***

### 📌 O que você vai precisar

* Acesso ao **IXC Soft** com permissão de API
* Dados de acesso à **API do IXC** (token)
* IP da VPS liberado no IXC
* Acesso ao **Whazing** com permissão para criar integrações (perfil Admin ou Supervisor)

***

### 1️⃣ Configurar a Integração no Whazing

No Whazing, acesse:

**Automação e Integrações → IA e Integrações**

Clique em **Adicionar** e selecione a integração do **IXC Soft**:

* **2 via boleto IXC** — para consulta e envio de boletos
* **Desbloqueio confiança IXC** — somente para desbloqueio

Siga o assistente (Nome → Configuração → Revisão) preenchendo os dados abaixo.

#### 🌐 URL da integração

⚠️ Atenção total neste ponto (erro comum):

Exemplo de domínio do IXC:

```
https://ixc.whazing.com.br/webservice/v1
```

Na **URL da integração**, preencha **somente**:

```
https://ixc.whazing.com.br
```

* ❌ Não inclua `/webservice/v1`
* ❌ Não coloque `/` no final

#### 🔄 Fila de transferência (em caso de erro)

* Escolha uma fila para atendimento humano caso ocorra algum erro
* ❌ **Não utilize a mesma fila da integração**

#### 🔐 API Key

* Preencha o **token de acesso da API do IXC**
* No painel do IXC, libere o **IP da sua VPS** para acesso à API

(As telas abaixo mostram onde configurar isso no IXC. Em caso de dúvidas, entre em contato com o suporte do IXC.)

<figure><img src="../../../.gitbook/assets/image (17).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (16).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (18).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (19).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (20).png" alt=""><figcaption></figcaption></figure>

***

### 2️⃣ Opções da Integração (muito importante)

Essas opções controlam o comportamento da integração:

#### 🔓 Ativar Desbloqueio de Confiança (somente na integração de boleto)

* Quando ativado:
  * Ao solicitar o boleto, o cliente é **automaticamente desbloqueado por confiança** no IXC

#### 💬 Tipo de interação (Lista / Botões / Copiar e colar)

* Defina conforme o canal utilizado
* Exemplos:
  * WhatsApp: suporta **listas e botões**
  * Telegram: **não suporta botões reply**

⚠️ Se selecionar uma opção que o canal não suporta, a mensagem **não será entregue**.

***

### 3️⃣ Ativar a integração

Após criar, o sistema abre o assistente **"Vamos ativar sua integração"**:

1. **Fila** — escolha a **Fila de Atendimento Humano** e clique em **Gerar Bot**. O sistema cria automaticamente:
   * A **fila da integração** (a opção **"Inicia Integração ao transferir"** fica desativada, pois a integração precisa do CPF/CNPJ antes);
   * Um **chatbot com menu**:

   ```
   1. Falar com Humano
   2. <Ação da integração> (ex.: 2 Via Boleto ou Desbloqueio Confiança)
   ```

   Ao escolher a opção 2, o cliente é transferido para a fila da integração com a mensagem pedindo o **CPF ou CNPJ**.
2. **Canais** — escolha em quais canais a integração será utilizada;
3. **Confirmação** — finalize.

> 💡 Quer usar seu próprio chatbot? O bot criado na ativação pode ser substituído: basta editar o fluxo do chatbot ou configurar sua fila manualmente em **Cadastros → Filas** (campo **Integração**), transferindo o atendimento para ela **somente depois** de coletar o CPF/CNPJ.

***

### 4️⃣ Funcionamento final (como o cliente vê)

O fluxo funciona da seguinte forma:

1. O cliente conversa com o bot de identificação
2. Escolhe a opção da integração (2ª via de boleto ou desbloqueio)
3. O sistema solicita o **CPF ou CNPJ**
4. O cliente informa os dados
5. O sistema consulta o IXC automaticamente
6. Os boletos são listados
7. Se configurado, o cliente é **desbloqueado por confiança**

***

✅ **Pronto!** A integração do **IXC Soft** está configurada e funcionando.

Você pode ajustar mensagens, tipo de interação e regras de desbloqueio conforme o seu fluxo de atendimento.

🙏 **Agradecimento especial** a **André Alves Magalhães** pelo apoio.
