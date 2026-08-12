---
icon: webhook
---

# Webhook e N8N

## 🌐 **WebHook - Visão Geral**

O sistema **Whazing** oferece suporte a **WebHooks** de duas maneiras principais:

### 🧩 **1. Pela Fila**

**Caminho:** `Cadastro → Filas/Integrações → Integrações`

1. Adicione um novo tipo de integração do tipo **N8N/Webhook**.
2. Preencha os campos:
   * **Nome** (para identificação)
   * **URL** (tipo `POST`)
   * **N8N API KEY** (opcional, mas recomendada)
3. Salve a integração.
4. Em seguida, acesse o menu **Filas**, edite uma fila existente ou crie uma nova.
5. No campo **Integração**, selecione a que você acabou de criar.
6. Se desejar que o WebHook seja acionado **imediatamente ao transferir** o ticket para essa fila (seja pelo bot ou atendimento manual), marque a opção **“Iniciar integração ao transferir”**.
   * Caso **não marque**, o evento será enviado somente na próxima mensagem recebida ou enviada enquanto o ticket fizer parte dessa fila.

***

### 🔧 **2. Pelo Canal**

**Caminho:** `Configurações → Canais/API → Configurações do canal`

1. Marque a opção **Ativar Webhook**.
2. Informe a **URL do N8N** (tipo `POST`).
3. Selecione os **tipos de eventos** que deseja enviar.
   * Caso nenhum seja marcado, **nenhum evento será enviado**.
4. (Opcional) Informe a **N8N API KEY**, que pode ser usada para **validar a origem do webhook**, evitando requisições falsas caso a URL seja descoberta publicamente.

***

## 🔔 WebHook – O que é e como funciona

Um **WebHook** é um recurso que permite que outro sistema receba **notificações automáticas em tempo real** sempre que algo acontece no Whazing.

Ou seja:

👉 Você **não precisa ficar consultando o sistema** para saber se houve mudança.\
👉 O Whazing **avisa automaticamente** o seu sistema quando um evento acontece.

***

### 📌 Exemplos de eventos que podem ser enviados

O WebHook pode disparar notificações quando ocorrer:

* ✅ Novo ticket criado
* 🔄 Ticket transferido
* ❌ Ticket fechado
* 📩 Mensagem recebida
* 📤 Mensagem enviada
* 🟢 Tickets em aberto
* 🟡 Tickets pendentes
* 👥 Mensagens de grupos
* 📦 Envio do JSON em Base64 _(atenção: exige mais processamento e pode impactar performance em fluxos com muitos arquivos)_

***

## 🎯 Entendendo a configuração:

### **"Tickets em aberto" e "Tickets pendentes"**

Essa configuração é **muito importante** e costuma gerar dúvidas.

Ela define **de quais tickets você quer receber WebHook de mensagens**.

#### 🔎 Como funciona na prática?

O sistema verifica o **status do ticket** antes de enviar o WebHook de mensagem.

#### 📌 Regra simples:

* Se **"Tickets em aberto" estiver ativado** → você receberá WebHook das mensagens de tickets com status **Aberto**.
* Se **"Tickets pendentes" estiver ativado** → você receberá WebHook das mensagens de tickets com status **Pendente**.
* Se **os dois estiverem desativados** ❌ → você **não receberá nenhum WebHook de mensagem**.

***

### 🧠 Exemplo prático

Imagine que:

* Existe 1 ticket com status **Aberto**
* Existe 1 ticket com status **Pendente**

#### Cenário 1:

✔ Tickets em aberto: ATIVADO\
❌ Tickets pendentes: DESATIVADO

👉 Você receberá WebHook **apenas das mensagens do ticket Aberto**

***

#### Cenário 2:

❌ Tickets em aberto: DESATIVADO\
✔ Tickets pendentes: ATIVADO

👉 Você receberá WebHook **apenas das mensagens do ticket Pendente**

***

#### Cenário 3:

❌ Tickets em aberto: DESATIVADO\
❌ Tickets pendentes: DESATIVADO

👉 Você **não receberá nenhum WebHook de mensagem**, mesmo que mensagens estejam chegando.

***

## ⚠️ Atenção Importante

Se você ativar os eventos de:

* 📩 Mensagem Recebida
* 📤 Mensagem Enviada

Mas deixar **Tickets em aberto e Tickets pendentes desativados**,\
👉 **nenhuma mensagem será enviada para seu WebHook.**

***

***

### 🔄 **Diferença entre WebHook e API**

| Tipo        | Função principal                             | Exemplo de uso                                               |
| ----------- | -------------------------------------------- | ------------------------------------------------------------ |
| **WebHook** | Receber informações do Whazing em tempo real | Ser notificado sobre novas mensagens ou alterações           |
| **API**     | Enviar ou alterar informações no Whazing     | Enviar mensagens, atualizar contatos, mudar status de ticket |

**Resumo:**

* 🔔 **WebHook** → O Whazing envia informações para você.
* 🧭 **API** → Você envia informações para o Whazing.

***

> 📢 **Importante:** Para usar WebHooks e APIs corretamente, é essencial configurar os **endpoints** do seu sistema para receber os dados enviados pelo Whazing.

***

## 📚 **Modelos para Estudo**

* [Baixe e importe o exemplo de fluxo compatível com o Whazing](https://github.com/cleitonme/Whazing-SaaS/blob/main/docs/integra%C3%A7%C3%B5es/Webhook%20e%20N8N/Modelo_Whazing_n8n.json)
* [Baixe e importe o modelo com exemplos de endpoints adicionais](https://github.com/cleitonme/Whazing-SaaS/blob/main/docs/integra%C3%A7%C3%B5es/Webhook%20e%20N8N/modelo_com_alguns_endpoints.json)

> 🙌 Agradecimento especial a **Elizeu Garcez** e **Ricardo Schonfelder Filho** por compartilharem os modelos.

***

## 🧠 **Node Whazing para N8N**

Recomenda-se sempre consultar a **documentação oficial da API**, pois o pacote pode não conter todos os endpoints disponíveis.

📦 [https://www.npmjs.com/package/n8n-nodes-whazing-api](https://www.npmjs.com/package/n8n-nodes-whazing-api)

***

<figure><img src="../../../.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt="Exemplo de fluxo N8N integrado ao Whazing"><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt="Configuração de WebHook no Whazing"><figcaption></figcaption></figure>
