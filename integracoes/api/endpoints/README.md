---
icon: list
---

# Endpoints

**Endpoint** é o "endereço" de um comando da API. Cada endpoint faz uma coisa: enviar uma mensagem, criar um contato, agendar um envio, marcar um compromisso...

A referência técnica completa (todos os campos, exemplos e respostas) fica no arquivo **OpenAPI** — esta página é o índice para você encontrar o que precisa.

## 🗂️ Grupos disponíveis

| Grupo | Para que serve | Página |
|---|---|---|
| 💬 **Mensagens** | Enviar texto, arquivo, sticker, localização, contato e mensagens interativas (botões, listas, link) | [Mensagens](mensagens.md) |
| 🕐 **Agendamentos** | **NOVO** — agendar o envio futuro de uma mensagem (texto, template, botões ou mídia) e acompanhar/cancelar | [Agendamentos](agendamentos.md) |
| 📅 **Agenda** | **NOVO** — criar e gerenciar **compromissos** da tela Agenda (calendários, profissionais, serviços) | [Agenda](agenda.md) |
| 👤 **Contatos (clientes)** | Criar, editar, buscar e listar contatos; atualizar Kanban, etiquetas e Follow-up; validar número | [Contatos](contatos.md) |
| 🎫 **Tickets** | Consultar tickets, criar ticket, definir fila/chatbot, listar mensagens de um ticket | [Tickets](tickets.md) |
| 🖊️ **Anotações** | **NOVO** — criar, consultar, listar e apagar anotações internas vinculadas a tickets | [Anotações](anotacoes.md) |
| 🧩 **Templates** | Gerenciar templates oficiais do WhatsApp | [Templates](templates.md) |
| ⚡ **API PLUS** | Mensagens interativas avançadas (botões, listas, carrossel, pagamento) do canal WhatsApp API PLUS | [API PLUS](api-plus.md) |
| 🔧 **Outros** | Validar número, status do canal, QR Code e listagens por filtro | [Outros](outros.md) |

> 💡 **Procurando "Cliente"?** Na API, os clientes são tratados como **Contatos** — criar, atualizar, consultar e listar clientes é tudo no grupo [Contatos](contatos.md).

> 📮 **Há também:** envio por **SMS** (`/sendsms`), mensagens pela **API Oficial** (`/apioficial`) e **Kanban Pro** (boards, colunas, cards e checklists) — todos detalhados no arquivo OpenAPI.

***

## 🆕 O que há de novo

Os dois grupos mais recentes da API são:

* **[Agendamentos](agendamentos.md)** — programar o envio futuro de uma mensagem e depois consultar ou cancelar;
* **[Agenda](agenda.md)** — criar compromissos reais na Agenda do sistema (com profissional, serviço e verificação de conflito de horário);
* **[Anotações](anotacoes.md)** — gerenciar por API as anotações internas dos tickets (criar por ticketId ou número, consultar, listar por ticket/contato e apagar), incluindo as menções a usuários e equipes.

> ⚠️ Novos endpoints podem demorar a chegar nesta documentação — **sempre baixe o modelo Postman** pelo sistema (Configurações → Canais → API) para ver a versão mais atual.
