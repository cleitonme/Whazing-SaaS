---
icon: hourglass
---

# Ausência de Resposta nas Integrações

Algumas integrações possuem um recurso automático para quando o cliente **para de responder**.

Ele serve para evitar que atendimentos fiquem **parados e esquecidos** no sistema.

***

## 📍 Onde fica a configuração

Acesse **Automação e Integrações → IA e Integrações**, clique em **Editar** (ícone de lápis) na integração desejada e abra a seção **"Cliente sem resposta"**.

Esse recurso está disponível nas integrações:

* **Typebot**
* **2ª via de boletos** (Asaas, IXC, SGP/TSMX, HubSoft, Atlaz e ReceitaNET)
* **Desbloqueio de Confiança** (IXC, SGP/TSMX, HubSoft e Atlaz)
* **Abertura/Consulta de Chamados** (Atlaz e GLPI)

> 💡 A **Recepção Inteligente** não usa esta seção: ela possui o recurso de **Follow-up** próprio, na aba **Followup** da edição da integração. Veja [Follow-up na Recepção Inteligente](inteligencia-artificial/recepcao-inteligente/follow-up-recepcao-inteligente.md).

<figure><img src="../.gitbook/assets/image (14).png" alt=""><figcaption></figcaption></figure>

***

## ⚙️ Como funciona?

Você define um **tempo de espera (em minutos)**.

#### Exemplo:

Se você configurar **20 minutos**:

* Caso o cliente fique **20 minutos sem responder**
* O sistema executará automaticamente uma ação

> ⚠️ Use **0** para desativar o recurso.

***

## 🔄 Quais ações podem ser executadas?

Você pode configurar para o sistema:

* 🔁 **Transferir o atendimento para uma fila específica**
* 👤 **Transferir para um usuário específico**
* ✅ **Fechar o ticket automaticamente**

Após executar a ação escolhida, o sistema ainda pode:

* 💬 **Enviar uma mensagem personalizada para o cliente**

Essa mensagem pode ser algo como:

> "Encerramos o atendimento por falta de resposta. Caso precise, estamos à disposição."

💡 Na mensagem você pode usar **emojis** e **variáveis do sistema**, como `{{name}}` (nome do cliente), `{{protocol}}` (protocolo do atendimento) e `{{fila}}` (nome da fila).

***

## 🚨 Por que isso é importante?

Sem essa configuração:

* Atendimentos ficam abertos sem necessidade
* Filas acumulam tickets inativos
* Relatórios ficam incorretos
* Operadores podem perder novos atendimentos

⚠️ **Recomendação:** Sempre configure um tempo de ausência para manter seu atendimento organizado e automático.
