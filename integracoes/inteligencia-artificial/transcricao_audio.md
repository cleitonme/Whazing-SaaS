---
description: Como Configurar Transcrição de Áudio
icon: microphone-lines
---

# Transcrição de Áudio

## O que é?

A **Transcrição de Áudio** transforma automaticamente as mensagens de voz em **texto** usando Inteligência Artificial. Assim, os operadores conseguem ler rapidamente o conteúdo do áudio sem precisar ouvir, agilizando o atendimento.

## 📍 Onde configurar

A configuração é feita em uma **tela própria**, não mais na edição do canal:

**Automação e Integrações → Transcrição de Áudio**

> 💡 **Dica:** quando um canal compatível ainda não tiver a transcrição ativada, a própria tela de **Canais** mostra um aviso com o botão "Configurar" que leva direto a esta tela, já com o canal selecionado.

## Passo a Passo

### 1. Obtenha um Token gratuito da Groq

A transcrição usa a API da [**Groq**](https://console.groq.com/keys), que é gratuita e possui um plano generoso para começar. Na tela, siga os passos:

1. **Crie uma conta** na Groq (console.groq.com);
2. **Gere uma API Key** no painel;
3. **Copie o Token** gerado;
4. **Cole o Token** no campo indicado na tela.

Você também pode clicar no botão **"Obter Token Gratuito"** da própria tela, que abre o painel da Groq em uma nova aba.

### 2. Selecione o Canal

Escolha no campo **"Canal"** qual canal com suporte a áudio você deseja configurar (ex.: `testeads (WhatsApp Plus)`). O nome do canal aparece junto com o tipo (WhatsApp Baileys, WhatsApp Plus, Telegram, etc.).

### 3. Habilite a Transcrição

Ative a opção **"Ativar transcrição de áudio"**. Ela converte automaticamente as mensagens de voz **recebidas** em texto.

> Se nenhum canal compatível for encontrado, a tela exibe o aviso: *"Nenhum canal compatível com transcrição de áudio foi encontrado."*

### 4. Configure as Opções de Transcrição

Essas opções só aparecem depois que a transcrição está habilitada:

| Opção | O que faz | Quando usar |
|---|---|---|
| **Token da API (Groq)** | Campo onde você cola a chave de API obtida no console da Groq. | Sempre — é obrigatório para a transcrição funcionar. |
| **Transcrever áudios enviados pela tela de atendimento** | Também transcreve os áudios que o **operador** envia pela tela de atendimento. | Use quando quiser que o texto fique registrado também para os áudios enviados por você/equipe. |
| **Responder automaticamente o cliente com a Transcrição** | Envia automaticamente o **texto transcrito** como resposta ao cliente. | Use quando quiser que o cliente receba imediatamente o conteúdo do áudio dele em texto. |
| **Responder automaticamente em grupos** | Envia a transcrição automaticamente também em conversas de **grupo**. | Aparece apenas quando a opção acima está ativa e o canal suporta resposta em grupos (WhatsApp Baileys, WhatsApp Plus, WhatsApp Multi-WA e WhatsApp WuzAPI). |

### 5. Salve a configuração

Clique em **"Salvar Configuração"**. O botão fica desabilitado enquanto não houver alterações pendentes.

#### Copiar para outros canais

Para aplicar a mesma configuração em vários canais de uma vez, clique em **"Copiar para outros canais"**, marque os canais desejados e confirme.

> ⚠️ **Atenção:** a cópia afeta **apenas** as configurações de transcrição — as demais configurações do canal não são alteradas. Canais novos criados no futuro **não herdam** essa configuração automaticamente.

## Fallback global (TranscreveAPI)

Além da transcrição por canal com a **Groq**, o sistema também pode usar uma **API externa de transcrição (TranscreveAPI)** como fallback global, configurada **uma única vez no painel SaaS** — útil quando você não quer configurar uma chave por canal. Veja [Transcrição de Áudio (SaaS)](../../modulo-saas/transcricao-de-audio.md).

## Canais compatíveis

A transcrição funciona nos seguintes tipos de canal: **WhatsApp Baileys, WhatsApp Plus, WhatsApp WuzAPI, WhatsApp Multi-WA, WhatsApp Oficial (WABA), WhatsApp Hub, Instagram, Facebook, Messenger, TikTok, WebChat (Hub e nativo) e Telegram**.

## Resumo rápido

1. Acesse **Automação e Integrações → Transcrição de Áudio**;
2. Obtenha o token gratuito da Groq;
3. Selecione o canal;
4. Ative a transcrição e informe o token;
5. Marque as opções desejadas e clique em **Salvar Configuração**.
