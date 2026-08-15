# Webhooks

## 🌐 O que é um Webhook?

Um **Webhook** é uma forma de o Whazing **avisar outro sistema automaticamente** (em tempo real) sempre que algo acontece: uma mensagem recebida, um ticket aberto, um ticket transferido, um ticket fechado, etc.

* 👉 Você **não precisa ficar consultando** o Whazing o tempo todo.
* 👉 O Whazing **envia uma requisição `POST`** (com os dados em formato `JSON`) para a **URL** que você configurar, toda vez que um evento selecionado acontecer.

**Resumo simples:**

| Tipo        | Função principal                             | Exemplo de uso                                               |
| ----------- | -------------------------------------------- | ------------------------------------------------------------ |
| **WebHook** | O Whazing **envia** informações para você em tempo real | Ser notificado sobre novas mensagens ou alterações no atendimento |
| **API**     | Você **envia** informações para o Whazing     | Enviar mensagens, atualizar contatos, mudar status de ticket |

---

## 📍 Onde configurar

No Whazing, **todo o Webhook (e o N8N) é configurado em um único lugar**:

> **Automação e Integrações → Webhooks/N8N**

A tela possui **duas abas**:

1. **Integrações por Canal** — o webhook vale para **todos os atendimentos de um canal** (ex.: um WhatsApp conectado).
2. **Integrações por Fila** — o webhook vale **apenas para os atendimentos de uma fila** (integrações do tipo N8N, vinculadas a uma fila).

> 🔐 A página fica disponível para perfis **Admin** e **Supervisor** e depende do recurso **Webhooks** estar liberado no seu plano.

---

## 🚀 Como começar (resumo)

**Pelo Canal (mais simples):**

1. Abra a aba **Integrações por Canal**.
2. Clique em **Configurar** no canal desejado.
3. Ative **Integração Ativada**.
4. Informe a **URL** que receberá os eventos.
5. Marque os **Eventos** desejados.
6. (Opcional) Informe o **Bearer Token / API Key** em *Mostrar configurações avançadas*.
7. Clique em **Testar integração** e depois em **Salvar**.

**Pela Fila (N8N):**

1. Abra a aba **Integrações por Fila**.
2. Clique em **Nova Integração N8N**, dê um **nome**, informe a **URL** e marque os **Eventos**.
3. Salve e clique no botão de **foguete** para **vincular a fila** (o assistente cria/víncula a fila e libera a integração).
4. Pronto: os atendimentos que caírem nessa fila passam a enviar eventos para a URL.

---

## 📚 Páginas desta seção

* **[Webhook e N8N](webhook-e-n8n/README.md)** — guia completo: como criar, configurar, testar e entender cada opção da tela.
* **[Webhook de Canal](modelo-webhook-canal.md)** — formato exato dos dados enviados pelos eventos de **canal**.
* **[Webhook de Integrações](modelo-webhook-integracoes.md)** — formato exato dos dados enviados pelas integrações de **fila**.
* **[Instalação N8N](webhook-e-n8n/como-instalar.md)** — como instalar o N8N na mesma VPS do Whazing.
