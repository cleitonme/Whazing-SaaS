---
description: Suporte à 2ª via de boletos e desbloqueio de confiança (HubSoft)
---

# HubSoft

Este tutorial explica, de forma **simples e passo a passo**, como configurar a integração do **HubSoft** no Whazing para:

* 📄 **2ª via de boletos**
* 🔓 **Desbloqueio de confiança**

São **duas integrações separadas**: **2 via boleto HubSoft** e **Desbloqueio confiança HubSoft**.

***

### 📌 O que você vai precisar

* Acesso ao **HubSoft** com permissão para API
* **Credenciais OAuth** da API do HubSoft (Client ID, Client Secret, usuário, senha e Grant Type)
* Usuário criado no HubSoft para integração
* Acesso ao **Whazing** com permissão para criar integrações (perfil Admin ou Supervisor)

***

### 1️⃣ Configurar a Integração no Whazing

No Whazing, acesse:

**Automação e Integrações → IA e Integrações**

Clique em **Adicionar** e selecione a integração do **HubSoft**:

* **2 via boleto HubSoft** — para consulta e envio de boletos
* **Desbloqueio confiança HubSoft** — somente para desbloqueio

Siga o assistente (Nome → Configuração → Revisão) preenchendo os dados abaixo.

#### 🔐 Credenciais da API HubSoft (OAuth)

Preencha os dados de acesso à **API do HubSoft**:

| Campo                                       | O que informar                                                                     |
| ------------------------------------------- | ---------------------------------------------------------------------------------- |
| **URL Integração**                          | URL base da sua API HubSoft (sem `/` no final)                                     |
| **Fila transferir caso ocorrer algum erro** | Fila de atendimento humano para casos de erro (não use a mesma fila da integração) |
| **Client ID**                               | Gerado no painel do HubSoft                                                        |
| **Client Secret**                           | Gerado no painel do HubSoft                                                        |
| **Username**                                | Usuário da API no HubSoft                                                          |
| **Password**                                | Senha da API no HubSoft                                                            |
| **Grant Type**                              | Tipo de concessão OAuth informado pelo HubSoft                                     |
| **Dias de desbloqueio**                     | Quantos dias o desbloqueio por confiança fica liberado                             |

> 💡 Essas informações são geradas dentro do painel do HubSoft.

***

### 2️⃣ Opções da Integração (muito importante)

Essas opções definem como a integração irá se comportar:

#### 🔓 Ativar Desbloqueio de Confiança (somente na integração de boleto)

* Quando ativado:
  * Ao solicitar o boleto, o cliente é **automaticamente desbloqueado por confiança** no HubSoft
  * O campo **Dias de desbloqueio** define por quanto tempo

#### 💬 Tipo de interação (Lista / Botões / Copiar e colar)

* Escolha conforme o canal utilizado
* Exemplos:
  * WhatsApp: suporta **listas e botões**
  * Telegram: **não suporta botões reply**

⚠️ Se selecionar uma opção que o canal não suporta, a mensagem **não será entregue** ao cliente.

***

### 3️⃣ Ativar a integração

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

### 4️⃣ Funcionamento final (como o cliente vê)

O fluxo funciona da seguinte forma:

1. O cliente conversa com o bot de identificação
2. Escolhe a opção da integração (2ª via de boleto ou desbloqueio)
3. O sistema solicita o **CPF ou CNPJ**
4. O cliente informa os dados
5. O sistema consulta o HubSoft automaticamente
6. Os boletos são listados
7. Se configurado, o cliente é **desbloqueado por confiança**

***

### 🖥️ Telas de configuração no HubSoft

As imagens abaixo mostram como criar usuário e configurar a API no HubSoft:

#### ➕ Criar usuário

<figure><img src="../../.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

#### 📝 Preencher os dados do usuário

<figure><img src="../../.gitbook/assets/image (2) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

#### ⚙️ Configuração da API

<figure><img src="../../.gitbook/assets/image (3) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

***

✅ **Pronto!** A integração do **HubSoft** está configurada e funcionando corretamente.

Você pode ajustar mensagens, tipo de interação e regras de desbloqueio conforme o seu fluxo de atendimento.

🙏 **Agradecimento especial** a **Adroaldo Ortolan** pelo apoio.
