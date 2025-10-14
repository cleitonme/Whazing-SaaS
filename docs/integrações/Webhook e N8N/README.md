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

---

### 🔧 **2. Pelo Canal**

**Caminho:** `Configurações → Canais/API → Configurações do canal`

1. Marque a opção **Ativar Webhook**.
2. Informe a **URL do N8N** (tipo `POST`).
3. Selecione os **tipos de eventos** que deseja enviar.

   * Caso nenhum seja marcado, **nenhum evento será enviado**.
4. (Opcional) Informe a **N8N API KEY**, que pode ser usada para **validar a origem do webhook**, evitando requisições falsas caso a URL seja descoberta publicamente.

---

### 🔔 **O que é um WebHook?**

Um **WebHook** é uma funcionalidade que permite que sistemas externos recebam **notificações automáticas em tempo real** sempre que determinados eventos acontecem no **Whazing** — como criação de tickets, envio ou recebimento de mensagens, transferências e muito mais.

Em vez de consultar periodicamente o Whazing para verificar mudanças, seu sistema é **notificado automaticamente** assim que algo ocorre.

**Exemplos de eventos enviados:**

* Nova mensagem recebida
* Nova mensagem enviada
* Criação de ticket
* Transferência de ticket
* Fechamento de ticket

---

### 🔄 **Diferença entre WebHook e API**

| Tipo        | Função principal                             | Exemplo de uso                                               |
| ----------- | -------------------------------------------- | ------------------------------------------------------------ |
| **WebHook** | Receber informações do Whazing em tempo real | Ser notificado sobre novas mensagens ou alterações           |
| **API**     | Enviar ou alterar informações no Whazing     | Enviar mensagens, atualizar contatos, mudar status de ticket |

**Resumo:**

* 🔔 **WebHook** → O Whazing envia informações para você.
* 🧭 **API** → Você envia informações para o Whazing.

---

> 📢 **Importante:**
> Para usar WebHooks e APIs corretamente, é essencial configurar os **endpoints** do seu sistema para receber os dados enviados pelo Whazing.

---

## 📚 **Modelos para Estudo**

* [Baixe e importe o exemplo de fluxo compatível com o Whazing](../../integra%C3%A7%C3%B5es/Webhook%20e%20N8N/Modelo_Whazing_n8n.json)
* [Baixe e importe o modelo com exemplos de endpoints adicionais](../../integra%C3%A7%C3%B5es/Webhook%20e%20N8N/modelo_com_alguns_endpoints.json)

> 🙌 Agradecimento especial a **Elizeu Garcez** e **Ricardo Schonfelder Filho** por compartilharem os modelos.

---

## 🧠 **Node Whazing para N8N**

Recomenda-se sempre consultar a **documentação oficial da API**, pois o pacote pode não conter todos os endpoints disponíveis.

📦 [https://www.npmjs.com/package/n8n-nodes-whazing](https://www.npmjs.com/package/n8n-nodes-whazing)

---

{% embed url="[https://youtu.be/To1x6wZAI1s](https://youtu.be/To1x6wZAI1s)" %}

<figure><img src="../../../.gitbook/assets/image.png" alt="Exemplo de fluxo N8N integrado ao Whazing"><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (1).png" alt="Configuração de WebHook no Whazing"><figcaption></figcaption></figure>