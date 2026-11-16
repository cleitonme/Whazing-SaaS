---
description: >-
  Como liberar um canal para as empresas: habilitar em Canais Disponíveis e no
  plano da empresa, com limites gerais e por tipo de canal.
---

# Liberação de Canais para Empresas

Um canal só aparece para o cliente quando está liberado em **dois lugares**:

1. no **catálogo do seu SaaS** (o que você oferece);
2. no **plano da empresa** (o que aquela empresa contratou).

Se faltar um dos dois, o cliente **não vê o canal** — nem para conectar, nem para comprar.

```text
Painel SaaS → Integrações → Canais Disponíveis   (o SaaS oferece)
Painel SaaS → Comercial → Planos                 (a empresa contratou)
                    ↓
        Cliente vê em Canais → Adicionar canal
```

> 💡 **Regra de bolso:** *Canais Disponíveis = o que o seu SaaS oferece. Plano = o que aquela empresa pode usar.*

***

## 1️⃣ Canais Disponíveis (catálogo do SaaS)

**Painel SaaS → Integrações → Canais Disponíveis**

Cada botão liga um tipo de canal no SaaS inteiro. Desligado, o canal **desaparece do catálogo** de todas as empresas.

| Botão na tela | O que libera |
| ------------- | ------------ |
| **WABA Api Oficial** | WhatsApp Oficial (direto e Hub MultiAPIWA) |
| **Whatsapp WuzAPI** | WhatsApp não oficial (recomendado) |
| **Whatsapp Api Plus** | WhatsApp não oficial premium (botões e listas) |
| **Whatsapp Baileys** | WhatsApp não oficial antigo (descontinuado) |
| **Facebook Messenger** | Facebook (direto e Hub MultiAPIWA) |
| **Instagram** | Instagram (direto e Hub MultiAPIWA) |
| **Connection Hub Insta/Facebook** | Hub ConnectionHub |
| **Hub Notificame** | Hub NotificaMe (WhatsApp, Instagram, Facebook, TikTok) |
| **Telegram** | Telegram (bot via BotFather) |
| **Webchat** | WebChat nativo do site |
| **E-mail** | Canal de e-mail (Gmail, Microsoft, IMAP, POP3, SMTP) |
| **SMS** | Canal SMS via Witi |

> ⚠️ Ligar aqui **não** libera para ninguém automaticamente: é só o primeiro passo. Falta o plano.

📄 Guia dos canais e custos: [Canais Disponíveis](../canais-disponiveis/canais-disponiveis.md)

***

## 2️⃣ Plano da empresa

**Painel SaaS → Comercial → Planos** → abra o plano (ou crie um novo) → seção **Canais**.

Nela você controla **duas coisas**:

### Limite geral de canais

A quantidade **total** de canais que a empresa pode ter no plano (ex.: 3 canais, somando todos os tipos).

### Ativar limite de canais por tipo

Quando ligado, cada tipo ganha uma **quantidade própria**:

| Tipo | Quantidade |
| ---- | ---------- |
| **Instagram** | ex.: `1` — ou `0` |
| **Facebook** | ex.: `1` — ou `0` |
| **WhatsApp Oficial (WABA)** | ex.: `2` |
| **WhatsApp Plus** | ex.: `1` |

* **Quantidade `0` é válida** — significa *"o plano não inclui nenhum canal deste tipo; o cliente compra por adicional"*;
* Com a opção **desligada**, tudo é controlado apenas pelo **limite geral** e **não é possível vender adicionais por tipo**.

> 💡 É aqui que você define se o canal é **incluso no plano** ou **vendido à parte**.

📄 Detalhes de planos: [Criação de Planos - Financeiro](criacao-de-planos-financeiro/README.md)

***

## ✅ As duas condições juntas

| Canais Disponíveis | Plano da empresa | O que o cliente vê |
| ------------------ | ---------------- | ------------------ |
| **Ligado** | Tipo habilitado **com vaga** | **"Usar este canal"** — conecta sem custo extra |
| **Ligado** | Tipo habilitado, **sem vaga**, com adicional cadastrado | **"Adicionar por R$ X/mês"** |
| **Ligado** | Limite **geral** esgotado | **"É necessário aumentar seu limite de canais"** |
| **Ligado** | Tipo **não habilitado** no plano | **"Não disponível no seu plano"** |
| **Desligado** | Qualquer | O canal **não aparece** |

> 📌 Quando faltam **os dois limites** (do tipo e o geral), o sistema junta tudo em **uma fatura só** na tela de compra.

***

## 💰 Vender o canal como adicional

Se o plano inclui `0` canais de um tipo, o cliente compra por **adicionais**:

1. **Painel SaaS → Comercial → Planos** → ligue **"Ativar limite de canais por tipo"** e deixe a quantidade em `0`;
2. **Painel SaaS → Comercial → Adicionais** → crie o adicional do tipo desejado (**Canais**, **WhatsApp Plus**, **WhatsApp Oficial (WABA)**, **Instagram** ou **Facebook**) com o seu preço;
3. Vincule o adicional aos **planos** que podem vendê-lo.

**Exemplo:** plano com 1 canal no total e **Instagram = 0**; adicional **Canal adicional R$ 59,90** e **Instagram R$ 99,90**.

| Situação do cliente | O que é cobrado | Total/mês |
| ------------------- | --------------- | --------- |
| Nenhum canal, quer Instagram | Adicional **Instagram** | **R$ 99,90** |
| Já tem 1 canal, quer Instagram | **Canais** + **Instagram** | **R$ 159,80** |

📄 Passo a passo: [Canais Adicionais (venda aos seus clientes)](criacao-de-planos-financeiro/adicionais-de-canais.md) · [🛒 Adicionais](criacao-de-planos-financeiro/adicionais.md) · [Ativar e vender o Hub MultiAPIWA](../canais-disponiveis/hubs/multiapiwa/ativacao.md)

***

## 🆘 Problemas comuns

### O cliente não vê o canal

Confira **os dois** lados: o botão em **Canais Disponíveis** e o tipo no **plano** da empresa. Um dos dois está desligado.

### O canal aparece como "Não disponível no seu plano"

O tipo está habilitado no SaaS, mas **não no plano** daquela empresa. Edite o plano e ligue o tipo (quantidade pode ser `0`, se for vender como adicional).

### Criei o adicional, mas ele não tem efeito

O plano precisa ter o **tipo habilitado** *e* **"Ativar limite de canais por tipo"** ligado — mesmo com quantidade `0`. O sistema avisa isso ao salvar o adicional.

### Empresa antiga não vê um canal novo que liguei

Provavelmente o **plano** dela é anterior ao canal. Abra o plano e habilite o tipo.

### Desliguei o canal em Canais Disponíveis e as conexões sumiram

Desligar ali remove o tipo do **catálogo do SaaS**. As conexões existentes deixam de ser oferecidas/gerenciadas; reative o botão para voltar.

***

## ❓ Perguntas frequentes

#### Preciso ligar em Canais Disponíveis e no plano?

**Sim.** São dois níveis: o SaaS oferece (catálogo) e a empresa contrata (plano).

#### Quantidade `0` no plano faz sentido?

Sim — é o padrão para **vender o canal como adicional**.

#### O limite por tipo substitui o limite geral?

Não. Eles se somam: o cliente precisa ter vaga **no tipo** e **no total**.

#### Isso vale para todos os canais?

Sim, inclusive Hub MultiAPIWA, NotificaMe, ConnectionHub, conexão direta, Telegram, WebChat, E-mail e SMS.

***

## 📚 Veja também

* [Canais Disponíveis](../canais-disponiveis/canais-disponiveis.md)
* [Criação de Planos - Financeiro](criacao-de-planos-financeiro/README.md)
* [Canais Adicionais](criacao-de-planos-financeiro/adicionais-de-canais.md)
* [Ativar e vender o Hub MultiAPIWA](../canais-disponiveis/hubs/multiapiwa/ativacao.md)
