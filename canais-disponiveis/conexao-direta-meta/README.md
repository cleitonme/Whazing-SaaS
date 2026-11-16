---
description: >-
  Como conectar Instagram e Facebook ao Whazing usando um aplicativo próprio da
  Meta (Graph API oficial), sem hub intermediário.
---

# Conexão direta Meta (Facebook e Instagram)

A **conexão direta** usa um **aplicativo próprio**, criado por você no Meta for Developers, para conectar:

* 📸 **Instagram** (Direct e comentários);
* 👍 **Facebook** (Messenger da Página).

É o caminho **oficial da Meta** sem intermediário: as mensagens vão da Meta direto para o seu Whazing.

> ⚠️ **Nível avançado — leia antes de decidir.**
>
> Criar e **aprovar** um aplicativo na Meta é um processo técnico e burocrático (verificação de negócio, App Review, screencast de cada permissão). **O suporte Whazing não cria, não configura e não aprova aplicativos** — isso vale para **WhatsApp Oficial, Instagram e Facebook**.
>
> Quem quiser esse serviço pode contratar **consultoria por R$ 1.000,00** (criação do aplicativo + condução da aprovação na Meta). **Para quem quer simplicidade, use o [Hub MultiAPIWA](../hubs/multiapiwa/README.md)**, que já está pronto e não exige app, token nem webhook.

***

## 🧭 Direto ou Hub?

|                                         | **Conexão direta** (App próprio)    | **Hub MultiAPIWA**                |
| --------------------------------------- | ----------------------------------- | --------------------------------- |
| Criar aplicativo na Meta                | ✅ Sim, você mesmo                  | ❌ Não                             |
| Verificação de negócio + App Review      | ✅ Sim, obrigatório para terceiros  | ❌ Não                             |
| Tempo até funcionar                     | Dias a semanas (depende da Meta)    | Minutos                           |
| Conhecimento técnico                    | Alto                                | Baixo                             |
| Custo                                   | Gratuito (esforço é seu)            | R$ 25,00 por canal/mês            |
| Manutenção                              | Token expira, precisa reconectar    | Gerenciada pelo Hub               |
| Suporte Whazing                         | ❌ Não cria/aprova app              | ✅ Instalação e credenciais        |
| Suporte a WhatsApp Oficial no mesmo app | ✅ Sim                              | ✅ Sim                            |

### 👉 Escolha a conexão direta quando

* Você **já tem** um aplicativo aprovado na Meta (ou vai investir tempo nisso);
* Precisa de **controle total** do app (nome, ícone, política, verificação);
* Quer **reduzir custo por canal** em volume alto;
* Precisa de recursos que dependem de permissões específicas (publicação de conteúdo, comentários).

### 👉 Escolha o Hub quando

* Quer **funcionar hoje**, sem processo de aprovação;
* Não tem equipe técnica para manter app, token e webhook;
* Quer suporte do Whazing na conexão.

***

## 📚 Guias desta seção

1. [**Criar aplicativo na Meta**](criar-aplicativo-meta.md) — do zero ao App ID/Secret, com webhooks, redirect URIs e cadastro no Painel SaaS.
2. [**Permissões e aprovação na Meta**](permissoes-e-aprovacao-meta.md) — quais permissões o app precisa ter **aprovadas** (por canal), o que cada uma libera, App Review, screencast e textos de justificativa.
3. [**Conectar o canal direto**](conectar-canal-direto.md) — liberar no SaaS, liberar no plano e conectar como cliente.

***

## 🧩 Como funciona, em uma imagem

```text
Você cria o App na Meta  →  cadastra App ID/Secret no Whazing
        ↓
A Meta envia mensagens para o Webhook do Whazing
        ↓
O cliente autoriza a conta (OAuth) em Canais → Conexão direta
        ↓
Instagram / Facebook aparecem no Atendimento
```

***

## ❓ Perguntas frequentes

#### Preciso de um aplicativo por cliente?

Não. Um único App atende todos os clientes do seu Whazing — cada cliente apenas **autoriza** a própria conta. O Painel SaaS permite vincular um App a **empresas específicas** quando você quiser separar.

#### O Whazing me ajuda a criar o aplicativo?

**Não.** O suporte não cria, não configura e não aprova aplicativos na Meta. Existe **consultoria paga (R$ 1.000,00)** para esse serviço.

#### Existe um caminho mais fácil?

Sim: o [Hub MultiAPIWA](../hubs/multiapiwa/README.md). A conexão acontece dentro do Whazing, sem app, sem token e sem webhook.

#### A conexão direta é gratuita?

Não há cobrança do Whazing por canal. Mas existe **custo indireto**: tempo de criação, verificação de negócio e manutenção da aprovação na Meta.

#### O que acontece se a aprovação da Meta for negada?

O canal não funciona para clientes que não têm vínculo com o app. É preciso ajustar o screencast e reenviar — ou usar o Hub enquanto isso.

#### Meu token expirou. E agora?

O cliente precisa **reconectar** o canal (o app próprio não usa token permanente de Página/Instagram). Veja a seção **Reconectar um canal** em [Conectar o canal direto](conectar-canal-direto.md).

#### Serve para WhatsApp Oficial também?

O aplicativo da Meta pode atender WhatsApp, Instagram e Facebook, mas **cada canal tem a sua configuração** no Whazing. Para WhatsApp, veja [API Oficial do WhatsApp (Meta)](../api-oficial/api-oficial-do-whatsapp-meta.md).

***

## Veja também

* [Hub MultiAPIWA (conexão integrada)](../hubs/multiapiwa/README.md)
* [Canais Disponíveis](../canais-disponiveis.md)
* [Automação de Comentários e Direct do Instagram](../../funcionalidades/automacao/automacao-de-comentarios-e-direct-do-instagram.md)
* [Agendamento de Publicações no Instagram](../../funcionalidades/automacao/agendamento-de-publicacoes-no-instagram.md)
