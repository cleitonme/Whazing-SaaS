---
description: >-
  Conectar Instagram direto ao Whazing com aplicativo próprio da Meta: requisitos,
  como conectar e o que o canal libera (Direct, comentários e publicação).
---

# Instagram (conexão direta)

Na conexão direta, as mensagens do Instagram vão da **Meta direto para o seu Whazing**, usando o **seu aplicativo** no Meta for Developers. Não há hub no meio.

> ⚠️ **Nível avançado.** Exige aplicativo criado e **aprovado** na Meta (verificação de negócio + App Review). O suporte Whazing **não cria, não configura e não aprova** aplicativos — existe **consultoria de R$ 1.000,00** para isso. Para funcionar hoje, use o [Hub MultiAPIWA](../hubs/multiapiwa/README.md).

***

## 📋 Antes de começar

* **Conta do Instagram profissional** (comercial ou de criador).
* A conta precisa estar **vinculada a uma Página do Facebook** que você administra.
* **Aplicativo da Meta** criado e com as **permissões de Instagram aprovadas**.
* App ID/Secret e webhook já cadastrados **no Painel SaaS**.

***

## 👣 Como conectar

1. **Painel SaaS → Integrações → Canais Disponíveis** → ligue **Instagram**.
2. **Painel SaaS → Comercial → Planos** → permita Instagram no plano da empresa.
3. **Cliente:** Cadastros → Canais → Adicionar canal → **Instagram** → **Conexão direta**.
4. Autorize a conta na tela da Meta (OAuth) e escolha o perfil do Instagram.
5. Envie uma mensagem de teste pelo Direct para confirmar a chegada no Atendimento.

***

## 🎁 O que o canal libera

* **Direct** — conversas do Instagram no Atendimento, com filas e automações.
* **Comentários** — receber e responder comentários.
* **Publicação e agendamento** de posts (quando as permissões de conteúdo estão aprovadas).

> 💡 Automação pronta: [Automação de Comentários e Direct do Instagram](../../funcionalidades/automacao/automacao-de-comentarios-e-direct-do-instagram.md) e [Agendamento de Publicações no Instagram](../../funcionalidades/automacao/agendamento-de-publicacoes-no-instagram.md).

***

## ⚠️ Problemas comuns

| Sintoma | Causa provável |
| --- | --- |
| Canal não aparece para conectar | Canal não liberado no Painel SaaS ou no plano |
| Autorização falha | Conta não é profissional ou não está vinculada a uma Página |
| Mensagens não chegam | Webhook do app não configurado/verificado |
| Parou de funcionar | Token expirou — o cliente precisa **reconectar** o canal |

***

## 📚 Passo a passo completo

* [Instagram e Facebook: conexão direta (visão geral)](./)
* [Criar aplicativo na Meta](criar-aplicativo-meta.md)
* [Permissões e aprovação na Meta](permissoes-e-aprovacao-meta.md)
* [Conectar o canal direto](conectar-canal-direto.md)
