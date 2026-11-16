---
description: >-
  Conectar a Página do Facebook (Messenger) direto ao Whazing com aplicativo
  próprio da Meta: requisitos, como conectar e o que o canal libera.
---

# Facebook (conexão direta)

Na conexão direta, as mensagens da **Página do Facebook (Messenger)** vão da **Meta direto para o seu Whazing**, usando o **seu aplicativo** no Meta for Developers — sem hub intermediário.

> ⚠️ **Nível avançado.** Exige aplicativo criado e **aprovado** na Meta (verificação de negócio + App Review). O suporte Whazing **não cria, não configura e não aprova** aplicativos — existe **consultoria de R$ 1.000,00** para isso. Para funcionar hoje, use o [Hub MultiAPIWA](../hubs/multiapiwa/README.md).

***

## 📋 Antes de começar

* Ser **administrador** da Página do Facebook (permissão total, não só de conteúdo).
* **Aplicativo da Meta** criado e com as **permissões de Página/Messenger aprovadas**.
* App ID/Secret e webhook já cadastrados **no Painel SaaS**.

***

## 👣 Como conectar

1. **Painel SaaS → Integrações → Canais Disponíveis** → ligue **Facebook Messenger**.
2. **Painel SaaS → Comercial → Planos** → permita Facebook no plano da empresa.
3. **Cliente:** Cadastros → Canais → Adicionar canal → **Facebook** → **Conexão direta**.
4. Autorize na tela da Meta (OAuth) e escolha a **Página** que será atendida.
5. Envie uma mensagem de teste pelo Messenger para confirmar a chegada no Atendimento.

***

## 🎁 O que o canal libera

* **Messenger** — conversas da Página no Atendimento, com filas e automações.
* **Comentários da Página** — receber e responder (conforme permissões aprovadas).
* Um mesmo aplicativo pode atender **WhatsApp, Instagram e Facebook**, cada um como canal separado.

***

## ⚠️ Problemas comuns

| Sintoma | Causa provável |
| --- | --- |
| Página não aparece na autorização | Usuário não é administrador da Página |
| Canal não aparece para conectar | Canal não liberado no Painel SaaS ou no plano |
| Mensagens não chegam | Webhook do app não configurado/verificado |
| Parou de funcionar | Token expirou — o cliente precisa **reconectar** o canal |

***

## 📚 Passo a passo completo

* [Instagram e Facebook: conexão direta (visão geral)](./)
* [Criar aplicativo na Meta](criar-aplicativo-meta.md)
* [Permissões e aprovação na Meta](permissoes-e-aprovacao-meta.md)
* [Conectar o canal direto](conectar-canal-direto.md)
