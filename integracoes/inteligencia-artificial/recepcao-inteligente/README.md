---
description: >-
  A Recepção Inteligente é um recurso que utiliza IA (Inteligência Artificial)
  para realizar um pré-atendimento automático aos clientes.
icon: bots
---

# Recepção Inteligente

## 📌 O que é

A **Recepção Inteligente** realiza um **pré-atendimento automático com IA**. Ela pode:

* Responder clientes de forma automática com base em prompts configurados.
* Encaminhar a conversa para a **fila/setor adequado** (financeiro, suporte, comercial etc.) conforme palavras-chave identificadas.
* Finalizar o atendimento automaticamente, quando for o caso.

Esse recurso ajuda a reduzir a carga da equipe, garantindo que o cliente seja direcionado corretamente antes de falar com um atendente humano.

***

## 📍 Onde acessar

Acesse:

**Automação e Integrações → IA e Integrações**

No primeiro cadastro, o sistema exibe um **wizard guiado** simples, ideal para iniciantes.

***

## 🚀 Como criar sua integração

O cadastro é feito pelo wizard **Nova integração Smart Reception** em **7 passos**:

1. **Nome** — como chamar a integração
2. **Modelo** — personalizado ou modelo pronto por segmento
3. **IA** — IA disponibilizada pelo sistema ou sua própria API
4. **Personalidade** — prompt principal (e secundário opcional)
5. **Ações Automáticas** — transferência por palavras-chave e Kanban (opcional)
6. **Fonte de Informações** — base de conhecimento e arquivos (opcional)
7. **Revisão** — confira e crie

Depois, o wizard **"Vamos ativar sua integração"** define a **fila** (criada automaticamente), os **canais** e a **confirmação**.

📖 [Passo a passo completo →](como-ativar-a-integracao.md)

***

## 🗂️ Abas de configuração

Após criar, o botão **Editar** abre as **informações avançadas** em abas:

| Aba | O que configura | Documentação |
| --- | --- | --- |
| **Personalidade** | Modelo de atendimento, prompt principal e secundário | [Instruções eficientes](como-criar-instrucoes-eficientes-para-atendimento-automatico-com-ia.md) |
| **Automação** | Transferência por filas, usuários, chatbot, etiquetas, Kanban, arquivos e chave PIX | [Etiquetas e Kanban](etiquetas-automaticas-e-kanban-com-ia.md) · [Arquivos](envio-de-arquivos-via-ia.md) · [PIX](botao-pix-automatico-no-atendimento.md) |
| **Conhecimento** | Base de conhecimento, busca na web, MCP e busca semântica | [Base de conhecimento](base-de-conhecimento.md) · [Busca na web](busca-na-web.md) · [MCP](mcp-e-ferramentas-de-ia.md) · [Busca semântica](busca-semantica.md) |
| **Voz** | Respostas por áudio | [Resposta por áudio](configuracao-de-resposta-por-audio.md) |
| **Followup** | Follow-up automático e ausência de resposta | [Follow-up](follow-up-recepcao-inteligente.md) |
| **Avançado** | Parâmetros técnicos (tokens, temperatura) e Command Analyzer (IA 2) | [Provedor personalizado](configurando-provedor-de-ia-personalizado-openai-compativel.md) |

***

## ✅ Conceitos importantes

* **Prompt principal** — instruções que definem como a IA se comporta, o que ela pode e não pode fazer.
* **Transferência por palavras-chave** — a IA direciona a conversa para a fila/setor correto.
* **Usuários online** — opção de transferir somente para filas com usuários online.
* **Fila de fallback** — fila alternativa quando não há atendentes disponíveis ou ocorre erro.
* **Mensagens personalizadas** — mensagem de transferência com ou sem usuários online.
* **Parâmetros avançados** — máximo de tokens, temperatura e histórico de mensagens.
* **Command Analyzer (IA 2)** — segunda IA que analisa a resposta da IA 1 e decide ações de sistema (transferir para fila/usuário, enviar arquivo, PIX, encerrar).

***

### ✅ Sugestões para Melhor Uso

* Use **prompts curtos e objetivos**, evitando instruções confusas.
* Configure **palavras-chave variadas** (ex: boleto, fatura, conta) para melhorar a identificação.
* Sempre defina uma **fila de fallback** para evitar que o cliente fique sem resposta.
* Ajuste o **intervalo entre mensagens** para evitar que a IA responda mensagens curtas isoladamente ("oi", "bom dia").
* Teste diferentes **temperaturas** para encontrar o equilíbrio entre objetividade e naturalidade.

***

## 📌 Exemplo prático de fluxo

* Cliente envia mensagem pelo WhatsApp: _"Quero a segunda via do boleto"_.
* O canal está vinculado à integração da **Recepção Inteligente**.
* A IA identifica a palavra-chave "boleto" e automaticamente:
  * transfere para a fila **Financeiro** se houver atendente online, ou
  * envia a mensagem: _"Informe seu CPF para gerar a segunda via do boleto"_ se não houver atendente disponível.
