---
description: Suporte 2ª via de boletos e desbloqueio de confiança (TSMX SGP)
---

# TSMX SGP

Este tutorial explica, de forma **simples e passo a passo**, como configurar a integração do **TSMX SGP** no Whazing para:

* 📄 **2ª via de boletos**
* 🔓 **Desbloqueio de confiança**

São **duas integrações separadas**: **2 via boleto SGP TSMX** e **Desbloqueio confiança SGP TSMX**.

***

### 📌 O que você vai precisar

* Acesso ao **TSMX SGP** com permissão de API
* Dados de acesso à **API do SGP**
* **IP da VPS liberado** no sistema SGP
* Acesso ao **Whazing** com permissão para criar integrações (perfil Admin ou Supervisor)

***

### Passo 1: Configurar a Integração no Whazing

Acesse:

**Automação e Integrações → IA e Integrações**

Clique em **Adicionar** e selecione:

* **2 via boleto SGP TSMX** — para consulta e envio de boletos
* **Desbloqueio confiança SGP TSMX** — somente para desbloqueio

Siga o assistente (Nome → Configuração → Revisão) preenchendo os dados abaixo.

#### 🌐 URL da integração

* Informe a URL base da sua API SGP
* ❌ Não coloque `/` no final

#### 🧩 APP

* Preencha este campo com o valor:

```
chatbot
```

ℹ️ Conforme orientação do suporte do SGP, este campo deve sempre ser utilizado como `chatbot` para o funcionamento correto da integração.

#### 🔄 Fila de transferência (em caso de erro)

* Escolha uma fila para atendimento humano caso ocorra algum erro
* ❌ **Não utilize a mesma fila da integração**

#### 🔐 API Key

* Preencha os dados de acesso à **API do SGP**
* Libere o **IP da VPS** no sistema SGP, conforme as telas de configuração

#### 💬 Opções de interação

* **Desbloqueio de confiança** (somente na integração de boleto) — desbloqueia o cliente automaticamente ao consultar o boleto
* **Lista / Botões / Copiar e colar** — escolha conforme o canal utilizado
  * WhatsApp: suporta **listas e botões**
  * Telegram: **não suporta botões reply**

⚠️ Se ativar uma opção que o canal **não suporta**, a mensagem **não será entregue ao cliente**.

***

### Passo 2: Ativar a integração

Após criar, o sistema abre o assistente **"Vamos ativar sua integração"**:

1.  **Fila** — escolha a **Fila de Atendimento Humano** e clique em **Gerar Bot**. O sistema cria automaticamente:

    * A **fila da integração** (a opção **"Inicia Integração ao transferir"** fica desativada, pois a integração precisa do CPF/CNPJ antes);
    * Um **chatbot com menu**:

    ```
    1. Falar com Humano
    2. <Ação da integração> (ex.: 2 Via Boleto ou Desbloqueio Confiança)
    ```

    Ao escolher a opção 2, o cliente é transferido para a fila da integração com a mensagem pedindo o **CPF ou CNPJ**.
2. **Canais** — escolha em quais canais a integração será utilizada;
3. **Confirmação** — finalize.

> 💡 Quer usar seu próprio chatbot? Edite o fluxo do bot ou configure sua fila manualmente em **Cadastros → Filas** (campo **Integração**), transferindo o atendimento para ela **somente depois** de coletar o CPF/CNPJ.

***

### Passo 3: Funcionamento final (como o cliente vê)

1. O cliente conversa com o bot de identificação
2. Escolhe a opção da integração (2ª via de boleto ou desbloqueio)
3. O sistema solicita o **CPF ou CNPJ**
4. O cliente informa os dados
5. O sistema consulta o SGP automaticamente
6. Os boletos são listados
7. Se configurado, o cliente é **desbloqueado por confiança**

***

### Telas do TSMX SGP

As imagens abaixo mostram onde configurar as permissões no painel do SGP:

<figure><img src="../../../.gitbook/assets/image (5) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

***

#### Observações Importantes

* **CPF/CNPJ não informado** = a integração não retorna dados
* Confira a relação correta entre **botões, fila e integração**

***

✅ **Pronto!** A integração do **TSMX SGP** está configurada e funcionando.

🙏 **Agradecimento** Obrigado **André Alves Magalhães** pelo apoio.
