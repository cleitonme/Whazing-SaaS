---
icon: up
---

# Follow-up

## 📬 O que é Follow-up

Em **vendas**, **follow-up** significa **acompanhar o cliente após o primeiro contato**, com os seguintes objetivos:

* Esclarecer dúvidas  
* Reforçar a proposta enviada  
* Superar possíveis objeções  
* Fechar a venda  
* Ou manter o relacionamento para oportunidades futuras  

Esse processo é essencial para aumentar suas chances de conversão e manter o cliente engajado.

---

## 📌 Exemplos práticos de follow-up em vendas

1. **Após o envio de um orçamento:**

> “Olá! Tudo certo? Só passando para saber se teve tempo de analisar a proposta que enviei ontem. Posso te ajudar com alguma dúvida?”

2. **Após uma demonstração do produto:**

> “Gostou da apresentação? Fico à disposição para ajustar a proposta ou tirar dúvidas!”

3. **Cliente que pediu tempo para pensar:**

> “Você comentou que precisava de alguns dias para decidir. Posso te ajudar com mais alguma informação?”

---

## ✅ Boas práticas de follow-up

* Seja **ágil**, mas sem exagerar (evite ser insistente)
* Mantenha a **mensagem personalizada** (use nome e contexto do cliente)
* Envie mensagens com **propósito claro**
* Defina **próximos passos objetivos**

> Exemplo: “Posso te ligar amanhã às 10h para alinharmos a proposta?”

---

# ⚙️ Configuração do Follow-up no Sistema

Acesse:

**Configurações → Follow-up**

<figure><img src="../../.gitbook/assets/image (2) (1).avif" alt=""><figcaption></figcaption></figure>

---

# 🔄 Importante: Mudança a partir da versão 2.6.0

A partir da **versão 2.6.0**, o sistema passou a utilizar **intervalo de horário permitido para envio**, substituindo o comportamento fixo da "Hora de Início".

Para quem ainda está em versões anteriores, o funcionamento antigo continua explicado abaixo.

---

## 🧩 Campos disponíveis

* **Nome:** Nome interno do modelo (aparece nos relatórios e no painel)
* **Conexão WhatsApp:** Define por qual conexão a mensagem será enviada

### 🔹 Antes da versão 2.6.0

* **Hora de Início:** Define o horário fixo em que o envio será programado.

### 🔹 A partir da versão 2.6.0

* **Horário Inicial Permitido para Envio**
* **Horário Final Permitido para Envio**

Agora o sistema trabalha com **janela de envio permitida**.

---

# 🕒 Funcionamento por versão

---

## 📌 🔵 Antes da versão 2.6.0 (Hora Fixa)

⚠️ O envio sempre respeita um horário fixo definido.

**Exemplo: Hora de início = 10:00**

* Se o cliente for adicionado às **09:00** → envia no mesmo dia às **10:00**
* Se for adicionado às **13:00** → envia no dia seguinte às **10:00**

---

## 📌 🟢 A partir da versão 2.6.0 (Janela Permitida)

Agora você define um intervalo, por exemplo:

```

08:00 às 20:00

````

O sistema calcula o envio normalmente pelo offset, porém:

* Se calcular envio para **21:00** → será enviado às **08:00 do dia seguinte**
* Se calcular envio para **03:00** → será enviado às **08:00 do mesmo dia**
* Se estiver dentro do intervalo → envia normalmente

✅ Isso evita disparos fora do horário comercial.

---

# ✉️ Cadastrar mensagens

Acesse a tela de mensagens e adicione quantas forem necessárias:

<figure><img src="../../.gitbook/assets/image (3) (1).avif" alt=""><figcaption></figcaption></figure>

Campos:

* **Mensagem:** Texto enviado ao cliente
* **Offset:** Tempo de espera (em minutos)
* **Arquivo:** (Opcional) Anexo da mensagem

---

# ⏱️ Como funciona o Offset

## 📌 Primeira mensagem

Exemplo:

* Horário base: `10:00`
* Offset: `10`

Resultado: envio às **10:10**

> O offset é sempre calculado em minutos.

Se o offset for `7200` (5 dias), será enviado **5 dias depois no horário base**.

---

## 📌 Próximas mensagens

O sistema sempre calcula com base na **hora real em que a mensagem anterior foi enviada**.

Exemplo:

* Mensagem anterior enviada em `10/07/2025 às 12:10`
* Offset da próxima: `60`

Próxima mensagem: **10/07/2025 às 13:10**

---

# ✏️ Organizar e editar mensagens

Na tela de organização você pode:

<figure><img src="../../.gitbook/assets/image (4) (1).avif" alt=""><figcaption></figcaption></figure>

* Reordenar mensagens
* Editar textos
* Alterar offsets
* Excluir mensagens

---

# ▶️ Como iniciar Follow-up para um cliente

---

## 🔌 Via API (novo endpoint)

**Método:** POST  
**Endpoint:** `/updatefollowup`

### Por número

```json
{
  "number": "5511999999999",
  "followup": 1
}
````

### Por contactId

```json
{
  "contactId": 3397,
  "followup": 8
}
```

### Por ticketId

```json
{
  "ticketId": 2881,
  "followup": 19
}
```

✅ Para remover do follow-up, utilize:

```json
{
  "followup": 0
}
```

---

## 🤖 Via Typebot (gatilho)

Para adicionar:

```bash
#{ "followupId": "1" }
```

Para remover:

```bash
#{ "followupId": "0" }
```

---

## 💬 Pela tela de atendimento

Nova opção disponível no atendimento:

<figure><img src="../../.gitbook/assets/image (25).png" alt=""><figcaption></figcaption></figure>

---

# 📊 Relatórios de Follow-up

Para acompanhar os envios, acesse os relatórios:

<figure><img src="../../.gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>