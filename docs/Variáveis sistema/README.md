---
description: >-
  As variáveis permitem personalizar mensagens automaticamente, utilizando
  informações do contato, do ticket ou do usuário. Existem três tipos principais
  de variáveis: Dinâmicas, Fixas e TypeBOT.
---

# 📌 Variáveis do Sistema

### 🔹 Tela de Atendimento - BOT INTERNO

#### 🔄 Variáveis Dinâmicas

Essas variáveis utilizam os valores cadastrados em **Informações Adicionais do Contato**.

📷 _Exemplo de cadastro:_\
![](<informacoesadicionais (1).jpg>)

**Exemplos**

*   Se o contato tiver `CPF = 0985786468528`:

    ```bash
    {{CPF}}
    ```

    ➝ Retorno: `0985786468528`
*   Se o contato tiver `plano = Premium`:

    ```bash
    {{plano}}
    ```

    ➝ Retorno: `Premium`
*   Se o contato tiver `endereco = Rua Marechal Deodoro, 11`:

    ```bash
    {{endereco}}
    ```

    ➝ Retorno: `Rua Marechal Deodoro, 11`

**Exemplo prático**

Mensagem configurada:

```bash
Por favor, confirme se seu endereço é {{endereco}}?
1 - Sim
2 - Não
```

Mensagem recebida pelo cliente:

```bash
Por favor, confirme se seu endereço é Rua Marechal Deodoro, 11?
1 - Sim
2 - Não
```

***

#### ✏️ Alterar Variáveis Dinâmicas pelo Chatbot

No **chatbot**, é possível salvar automaticamente a resposta do cliente como valor de uma variável.

📷 _Exemplo de configuração:_\
![](<alterardados (1).jpg>)

📂 Arquivo de exemplo disponível:\
Clique botão direito coloque salvar link como

{% file src="exemplo_fluxo_usando_novas_variaveis (1).json" %}

***

#### 🔒 Variáveis Fixas

Essas variáveis já estão disponíveis no sistema e não precisam ser cadastradas manualmente.

* Primeiro nome do contato → `{{firstName}}`
* Nome completo do contato → `{{name}}`
* Número do contato → `{{phoneNumber}}`
* E-mail do contato → `{{email}}`
* Saudação (PT) → `{{greting}}`
* Saudação (ES) → `{{greetingEs}}`
* Saudação (EN) → `{{greetingEn}}`
* Saudação (alternativa) → `{{ms}}`
* ID do ticket → `{{ticket_id}}`
* Protocolo → `{{protocol}}`
* Hora → `{{hour}}`
* Data → `{{date}}`
* Fila → `{{fila}}`
* Nome do usuário → `{{user}}`
* E-mail do usuário → `{{userEmail}}`

***

### 🔹 Campanhas

As campanhas também suportam variáveis para personalizar mensagens em massa.

Variáveis disponíveis:

* Saudação (PT) → `{{greting}}`
* Saudação (ES) → `{{greetingEs}}`
* Saudação (EN) → `{{greetingEn}}`
* Primeiro nome → `{{firstName}}`
* Nome completo → `{{name}}`
* Número → `{{phoneNumber}}`
* E-mail → `{{email}}`

***

### 🔹 Variáveis TypeBOT

No **TypeBOT**, algumas variáveis seguem um formato diferente:

* Número → `number`
* Nome do push → `pushName`
* Nome → `nome`
* E-mail → `email`
* ID do ticket → `ticketId`
* Protocolo → `protocol`
* Ticket → `ticket`
* Remote JID → `remoteJid`

As informações adicionais podem ser usadas como variáveis (atenção essa informação carregada quando inicia conexão typebot se alguma for alterada durante fluxo typebot não vai alterar até fluxo typebot for reiniciado)
