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

## 🆕 Novidades

* **Qualificação de leads** — a IA faz perguntas, registra as respostas e classifica o contato para a equipe. [Como configurar →](qualificacao-de-leads.md)
* **Simulador reformulado** — janela flutuante, escolha de contato e leituras reais (Base de Conhecimento, catálogo, busca web e MCP), sem nenhuma escrita real. [Como testar →](simulador-de-conversa.md)
* **Catálogo** — a IA consulta produtos, informa disponibilidade, envia fotos e registra a escolha do cliente. [Catálogo na Recepção →](catalogo-na-recepcao-inteligente.md)
* **Chat Externo** — envio do link para o cliente continuar o atendimento pelo navegador. [Como configurar →](chat-externo-na-recepcao-inteligente.md)

***

## 📍 Onde acessar

Acesse:

**Automação e Integrações → IA e Integrações**

No primeiro cadastro, o sistema exibe um **wizard guiado** simples, ideal para iniciantes.

***

## 🚀 Como criar sua integração

O cadastro é feito pelo wizard **Nova integração Smart Reception** em **8 passos**:

1. **Nome** — como chamar a integração
2. **Modelo** — personalizado ou modelo pronto por segmento
3. **IA** — IA disponibilizada pelo sistema ou sua própria API
4. **Personalidade** — prompt principal (e secundário opcional)
5. **Qualificação de Leads** — perguntas de triagem e critérios de classificação (opcional)
6. **Ações Automáticas** — transferência por palavras-chave e Kanban (opcional)
7. **Fonte de Informações** — base de conhecimento e arquivos (opcional)
8. **Revisão** — confira e crie

Depois, o wizard **"Vamos ativar sua integração"** define a **fila** (criada automaticamente), os **canais** e a **confirmação**.

📖 [Passo a passo completo →](como-ativar-a-integracao.md)

***

## 🗂️ Abas de configuração

Após criar, o botão **Editar** abre as **informações avançadas** em abas:

| Aba | O que configura | Documentação |
| --- | --- | --- |
| **Geral** | IA do sistema ou própria API, provedor, modelo, URL base, API Key e teste de conexão | [Criar e ativar](como-ativar-a-integracao.md) · [Provedor personalizado](configurando-provedor-de-ia-personalizado-openai-compativel.md) |
| **Personalidade** | Modelo de atendimento, prompt principal/secundário e **Qualificação de leads** | [Instruções eficientes](como-criar-instrucoes-eficientes-para-atendimento-automatico-com-ia.md) · [Qualificação](qualificacao-de-leads.md) |
| **Comportamento** | Histórico de atendimentos anteriores e tempo de espera para resposta | [Comportamento](comportamento.md) |
| **Automação** | Transferência por filas, usuários, chatbot, etiquetas, Kanban, arquivos, chave PIX, agendamento e **Chat Externo** | [Etiquetas e Kanban](etiquetas-automaticas-e-kanban-com-ia.md) · [Arquivos](envio-de-arquivos-via-ia.md) · [PIX](botao-pix-automatico-no-atendimento.md) · [Agendamento pela IA](../../../funcionalidades/agenda/agendamento-pela-recepcao-inteligente.md) · [Chat Externo](chat-externo-na-recepcao-inteligente.md) |
| **Conhecimento** | Base de conhecimento, busca na web, MCP e busca semântica | [Base de conhecimento](base-de-conhecimento.md) · [Busca na web](busca-na-web.md) · [MCP](mcp-e-ferramentas-de-ia.md) · [Busca semântica](busca-semantica.md) |
| **Produtos** | Catálogo consultado pela IA: escopo, estoque, fotos, links e escolha do produto | [Catálogo na Recepção Inteligente](catalogo-na-recepcao-inteligente.md) |
| **Voz** | Respostas por áudio | [Resposta por áudio](configuracao-de-resposta-por-audio.md) |
| **Followup** | Follow-up automático e ausência de resposta | [Follow-up](follow-up-recepcao-inteligente.md) |
| **Avançado** | Parâmetros técnicos (tokens, temperatura, tentativas) e Command Analyzer (IA 2) | [Provedor personalizado](configurando-provedor-de-ia-personalizado-openai-compativel.md) |

***

## ✅ Conceitos importantes

* **Prompt principal** — instruções que definem como a IA se comporta, o que ela pode e não pode fazer.
* **Transferência por palavras-chave** — a IA direciona a conversa para a fila/setor correto.
* **Usuários online** — opção de transferir somente para filas com usuários online.
* **Fila de fallback** — fila alternativa quando não há atendentes disponíveis ou ocorre erro.
* **Mensagens personalizadas** — mensagem de transferência com ou sem usuários online.
* **Parâmetros avançados** — máximo de tokens, temperatura e histórico de mensagens.
* **Command Analyzer (IA 2)** — segunda IA que analisa a resposta da IA 1 e decide ações de sistema (transferir para fila/usuário, enviar arquivo, PIX, encerrar). A IA 1 autoriza a ação; a IA 2 escolhe o destino.
* **Qualificação de leads** — perguntas de triagem, critérios e classificação do contato (Qualificado, Em avaliação ou Não qualificado).
* **Dry-run do simulador** — o simulador lê dados reais (base, catálogo, busca web, MCP), mas não envia nem grava nada.

***

## 🔀 Transferência inteligente (aba Automação)

No card **Transferência** da aba **Automação** ficam as opções que controlam **para quem a IA transfere** e **o que o cliente vê** nessa transferência.

### 👥 Usuários online

| Opção | O que faz |
| --- | --- |
| **Transferir apenas para filas com usuários online** | Antes de transferir, o sistema confere se tem alguém disponível na fila |
| **Verificar usuários online nesta fila** | Mesma checagem, mas configurada **fila por fila** |
| **Fila de fallback** | Se não houver usuários online (quando a verificação estiver ativa) ou o bot não entender a solicitação, o atendimento vai para essa fila de reserva |

### 🕗 Fora do horário de atendimento

* **Bloquear transferência fora do horário de atendimento** — quando ativado, a IA não realiza transferências fora do horário configurado.
* **Mensagem fora do horário de atendimento** — o texto que o cliente recebe nesse caso.

### 💬 Mensagens personalizadas

| Mensagem | Quando é enviada |
| --- | --- |
| **Mensagem de transferência** (global) | Quando a fila **tem** usuários online |
| **Mensagem quando não há usuários online** (global) | Quando a fila **não tem** nenhum usuário online |
| **Mensagem de transferência personalizada** (por fila) | Substitui a global para aquela fila — se ficar vazia, usa a global |
| **Mensagem quando não há usuários online** (por fila) | Substitui a global para aquela fila — se ficar vazia, usa a global |
| **Mensagem quando usuário está offline** (por usuário) | Enviada se o usuário escolhido estiver offline e a verificação estiver ativada |

> 💡 As mensagens personalizadas deixam a transferência mais natural: o cliente lê "Conectando com nossa equipe de vendas..." em vez de um aviso genérico.

> ⚠️ Sempre escolha uma **fila de fallback**. É ela que evita que o cliente fique sem resposta quando ninguém está online ou a IA não entende o pedido.

***

### ✅ Sugestões para Melhor Uso

* Use **prompts curtos e objetivos**, evitando instruções confusas.
* Configure **palavras-chave variadas** (ex: boleto, fatura, conta) para melhorar a identificação.
* Sempre defina uma **fila de fallback** para evitar que o cliente fique sem resposta.
* Ajuste o **intervalo entre mensagens** para evitar que a IA responda mensagens curtas isoladamente ("oi", "bom dia").
* Teste diferentes **temperaturas** para encontrar o equilíbrio entre objetividade e naturalidade.

> 💡 Se a IA parece lenta demais, veja a aba **Comportamento**. O tempo de espera é configurável e está relacionado ao comportamento de agrupar as mensagens do cliente antes de responder.

***

## 🧠 FAQ e comportamento comum

Para dúvidas rápidas sobre o comportamento da Recepção Inteligente — especialmente o **tempo de espera**, o **agrupamento de mensagens** e o que fazer quando ela parece não entender — veja o [FAQ](faq.md).

***

## 🧪 Testando a integração

No fim da tela de edição, na seção **Testar integração**, ficam duas ferramentas — elas aparecem em qualquer aba:

* **Testar configuração** — diagnóstico de provedor, modelo, API Key e conexão, com uma **nota para a qualidade do prompt** e sugestões de melhoria.
* **Simular conversa** — um chat de teste em janela flutuante, para conversar com a sua IA como se fosse o cliente.

> 🆕 O simulador agora é de **alta fidelidade**: ele **lê de verdade** a Base de Conhecimento, o catálogo, os arquivos, a busca web (quando você autoriza) e as ferramentas MCP. O que ele **não faz** é escrever — mensagens, arquivos, PIX, agendamentos, etiquetas e Kanban ficam apenas simulados.

> 💡 Áudio, imagem e vídeo recebidos, respostas em áudio (TTS) e o follow-up automático ainda **não** são reproduzidos no simulador.

📖 [Passo a passo do simulador e do teste de configuração →](simulador-de-conversa.md)

***

## 📌 Exemplo prático de fluxo

* Cliente envia mensagem pelo WhatsApp: _"Quero a segunda via do boleto"_.
* O canal está vinculado à integração da **Recepção Inteligente**.
* A IA identifica a palavra-chave "boleto" e automaticamente:
  * transfere para a fila **Financeiro** se houver atendente online, ou
  * envia a mensagem: _"Informe seu CPF para gerar a segunda via do boleto"_ se não houver atendente disponível.
