# 📬 O que é Follow-up

Em **vendas**, **follow-up** significa **acompanhar o cliente após o primeiro contato**, com os seguintes objetivos:

- Esclarecer dúvidas  
- Reforçar a proposta enviada  
- Superar possíveis objeções  
- Fechar a venda  
- Ou manter o relacionamento para oportunidades futuras  

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

- Seja **ágil**, mas sem exagerar (evite ser insistente)  
- Mantenha a **mensagem personalizada** (use nome e contexto do cliente)  
- Envie mensagens com **propósito claro** (ex: promoção, vencimento, bônus, novidade)  
- Defina **próximos passos objetivos**  
  > Ex: “Posso te ligar amanhã às 10h para alinharmos a proposta?”

---

# ⚙️ Como cadastrar um modelo de Follow-up no sistema

Acesse o menu **Configurações → Follow-up**.

![print](novofollowup.png)

### Campos disponíveis:

- **Nome:** Nome interno do modelo (aparece nos relatórios e no painel)  
- **Conexão WhatsApp:** Define por qual conexão a mensagem será enviada  
- **Hora de Início:** Define o horário fixo em que o envio será programado  

⚠️ **Importante sobre o horário de início:**

- Se o cliente for adicionado **antes do horário definido** (ex: 09:00, e o horário é 10:00), a primeira mensagem será enviada **no mesmo dia às 10:00**  
- Se o cliente for adicionado **após o horário definido** (ex: 13:00, e o horário é 10:00), o envio será **no dia seguinte às 10:00**

---

## ✉️ Cadastrar mensagens

Acesse a tela de mensagens e adicione quantas forem necessárias:

![print](novamensagem.png)

- **Mensagem:** Texto que será enviado ao cliente  
- **Offset:** Tempo de espera (em minutos) antes do envio  
- **Arquivo:** (Opcional) Anexo para envio junto com a mensagem  

---

### ⏱️ Como funciona o "Offset"

#### Primeira mensagem:

- Hora de início: `10:00`  
- Offset: `10`  
- Resultado: mensagem será enviada às **10:10**

> Offset em minutos a partir da **hora inicial definida no modelo**

Se o offset for `7200` (5 dias), a mensagem será enviada **5 dias depois às 10:00**

---

#### Próximas mensagens:

O offset será somado ao **horário real em que a mensagem anterior foi enviada**.

**Exemplo:**

- Mensagem anterior enviada em `10/07/2025 às 12:10`  
- Offset da próxima: `60` minutos  
- Próxima mensagem será enviada em **10/07/2025 às 13:10**

> O sistema sempre calcula o próximo envio baseado na hora real da última mensagem.

---

## ✏️ Organizar e editar mensagens

Na tela de organização você pode:

![print](exemplo.png)

- **Reordenar mensagens** (arrastando a ordem)  
- **Alterar o texto** das mensagens  
- **Modificar o tempo (offset)**  
- **Excluir mensagens** que não quiser mais usar  

## Como colocar cliente começar enviar

####  Via api com novo endpoint

- **Método**: POST
- **Endpoint**: `/updatefollowup`

Por número:
```json
{
  "number": "5511999999999",
  "followup": 1
}
```

Por contactId:
```json
{
  "contactId": 3397,
  "followup": 8
}
```

Por ticketId:
```json
{
  "ticketId": 2881,
  "followup": 19
}
```

Para retirar contato do follow-up use valor 0

####  Via Typebot usando gatilho

- Comando para adicionar contato em um Follow-up - (lembre-se de trocar o ID) - Para Retirar usar id 0:
   ```bash
   #{ "followupId": "1" }
   ```
   
####  Pela tela atendimento com nova opção

![print](telaatendimento.png)


### Novo relatórios para indicar contatos que estão no Follow-up e status envio das mensagens