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
| 🏪 **Catálogo** | **NOVO** — personalizar a vitrine, cadastrar produtos, organizar coleções e criar os links públicos | [Catálogo](catalogo.md) |
| 🧾 **Cobranças** | **NOVO** — criar cobranças e orçamentos, gerar link, enviar pelo WhatsApp, dar baixa, avisos e recorrências | [Cobranças](cobrancas.md) |
| 📸 **Instagram** | **NOVO** — responder comentário e enviar mensagem privada a quem comentou, além do webhook de comentário novo | [Instagram](instagram.md) |
| 📋 **Kanban Pro** | **NOVO** — boards, colunas, cards e checklists do Kanban Pro | [Kanban Pro](kanban-pro.md) |
| ⚡ **API PLUS** | Mensagens interativas avançadas (botões, listas, carrossel, pagamento) do canal WhatsApp API PLUS | [API PLUS](api-plus.md) |
| 🔧 **Outros** | Validar número, status do canal, QR Code, **listar grupos** e listagens por filtro | [Outros](outros.md) |

> 💡 **Procurando "Cliente"?** Na API, os clientes são tratados como **Contatos** — criar, atualizar, consultar e listar clientes é tudo no grupo [Contatos](contatos.md).

> 📮 **Há também:** envio por **SMS** (`/sendsms`) e mensagens pela **API Oficial** (`/apioficial`) — detalhados no arquivo OpenAPI. O **Kanban Pro** agora tem página própria: [Kanban Pro](kanban-pro.md).

***

## 🆕 O que há de novo

Os grupos mais recentes da API são:

* **[Agendamentos](agendamentos.md)** — programar o envio futuro de uma mensagem e depois consultar ou cancelar;
* **[Agenda](agenda.md)** — criar compromissos reais na Agenda do sistema (com profissional, serviço e verificação de conflito de horário);
* **[Anotações](anotacoes.md)** — gerenciar por API as anotações internas dos tickets (criar por ticketId ou número, consultar, listar por ticket/contato e apagar), incluindo as menções a usuários e equipes;
* **Lanes do CRM (Kanban)** — `GET /crm` lista as colunas/etapas do CRM clássico da empresa, com os mesmos IDs usados em `POST /updatecrm` e `GET /contacts/crm/{id}` — veja em [Outros](outros.md).
* **[Catálogo](catalogo.md)** — a vitrine pública da empresa: personalização, produtos (com upload de imagem), coleções e links;
* **[Cobranças](cobrancas.md)** — cobranças, orçamentos, link de pagamento, envio pelo WhatsApp, baixa manual, avisos e recorrências;
* **[Instagram](instagram.md)** — resposta pública a comentários, mensagem privada (com a regra de 1 por comentário / 7 dias) e o webhook `instagram.comment.created`;
* **[Kanban Pro](kanban-pro.md)** — boards, colunas, cards, checklists e reordenação;
* **Grupos do WhatsApp** — `GET /grupos` lista os grupos da conexão, com o endereço pronto para usar no envio — veja em [Outros](outros.md).

> ⚠️ Novos endpoints podem demorar a chegar nesta documentação — **sempre baixe o modelo Postman** pelo sistema (Configurações → Canais → API) para ver a versão mais atual.
