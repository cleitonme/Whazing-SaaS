# Integrações

Nesta seção você encontra como conectar o Whazing a outros sistemas e serviços:

* **Inteligência Artificial** — Recepção Inteligente (pré-atendimento com IA) e transcrição de áudio;
* **ERP / Provedores** — 2ª via de boletos, desbloqueio de confiança e abertura de chamados com **IXC Soft**, **TSMX SGP**, **HubSoft**, **Atlaz** e **ReceitaNET**;
* **Chatbots e fluxos** — **Typebot**;
* **Chamados** — **GLPI** (criar e consultar chamados);
* **Webhooks / N8N** — receber e enviar informações automaticamente entre sistemas;
* **API** — integração via endpoints para enviar mensagens, consultar contatos e mais;
* **CRM & ERP** — WooCommerce e PerfexCRM;
* **Telefonia** — servidor SIP, WavoIP, discador e WaCalls.

***

## 📍 Onde configurar

Todas as integrações de atendimento (Recepção Inteligente, Typebot, boletos, desbloqueios e chamados) são criadas e gerenciadas em um único lugar:

> **Automação e Integrações → IA e Integrações**

A tela é exclusiva para os perfis **Admin** e **Supervisor** e exibe um cartão para cada integração criada, com as ações **Ativar**, **Editar**, **Duplicar** e **Excluir**.

> 🔹 **Webhooks e N8N** não ficam mais nesta tela — são configurados em **Automação e Integrações → Webhooks/N8N**. Veja a seção [Webhooks](webhooks/README.md).

***

## 🚀 Como funciona hoje

O cadastro de uma integração é feito por um **assistente guiado (wizard)**:

1. Clique em **Adicionar** e escolha o tipo de integração;
2. Siga os passos do wizard (nome, dados de conexão e revisão);
3. O sistema abre o assistente **"Vamos ativar sua integração"**, que cria (ou reutiliza) a **fila**, vincula os **canais** e confirma a ativação.

💡 O passo a passo completo está em [Configuração](configuracao.md).

As integrações são vinculadas às **filas** e podem iniciar automaticamente ao chegar uma mensagem ou ao transferir um ticket.

***

## 🧩 Integrações disponíveis (IA e Integrações)

| Tipo | Para que serve |
| --- | --- |
| **Recepção Inteligente** | Pré-atendimento automático com IA (responde, transfere para filas/usuários e encerra conversas) |
| **Typebot** | Executa fluxos do Typebot dentro do WhatsApp |
| **2ª via boleto Asaas** | Consulta e envio de boletos do Asaas |
| **2ª via boleto IXC** / **Desbloqueio confiança IXC** | Boletos e desbloqueio de confiança no IXC Soft |
| **2ª via boleto SGP TSMX** / **Desbloqueio confiança SGP TSMX** | Boletos e desbloqueio no TSMX SGP |
| **2ª via boleto HubSoft** / **Desbloqueio confiança HubSoft** | Boletos e desbloqueio no HubSoft |
| **2ª via boleto Atlaz** / **Desbloqueio confiança Atlaz** | Boletos e desbloqueio na Atlaz |
| **Criar Chamado Atlaz** | Abertura automática de chamados na Atlaz |
| **2ª via boleto ReceitaNet** | Consulta de boletos na ReceitaNET |
| **Criar Chamado GLPI** / **Consultar Chamado GLPI** | Abertura e consulta de chamados no GLPI |

> ⚠️ As integrações de **boleto, desbloqueio e chamados** exigem o **CPF ou CNPJ do cliente** antes de executar. Por isso, ao ativar, o sistema cria automaticamente um **bot de identificação** com um menu ("1. Falar com Humano / 2. Ação da integração"). Veja [Configuração](configuracao.md).

***

## 📚 Páginas desta seção

* [Configuração](configuracao.md) — como criar e ativar uma integração passo a passo;
* [Inteligência Artificial](inteligencia-artificial/README.md) — Recepção Inteligente e transcrição de áudio;
* [CRM & ERP](crm-and-erp/README.md) — WooCommerce e PerfexCRM;
* [API](api/README.md) — endpoints para enviar mensagens, consultar contatos e mais;
* [Webhooks](webhooks/README.md) — Webhook e N8N;
* [Telefonia](telefonia/README.md) — servidor SIP, WavoIP, discador e WaCalls;
* [Erp Provedor](erp-provedor/README.md) — IXC Soft, HubSoft, TSMX SGP, Atlaz e ReceitaNET;
* [Outras](outras/README.md) — Typebot, Asaas e GLPI;
* [Ausência de Resposta nas Integrações](ausencia-de-resposta-integracoes.md) — o que fazer quando o cliente para de responder.
