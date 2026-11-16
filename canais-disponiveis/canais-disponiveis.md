---
description: >-
  Os canais de atendimento do Whazing organizados por tipo: não oficiais, hubs
  oficiais e conexão direta Meta, com custos, comparativo e liberação por plano.
---

# Canais Disponíveis

O Whazing atende por **três famílias de canais**. Entender isso resolve 90% das dúvidas:

| Família             | O que é                                                                                                 | Exemplos                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| **Não oficial**     | Conecta um número comum de WhatsApp **por QR Code**. Simples e barato, mas **fora das regras da Meta**. | WuzAPI, PLUS                              |
| **Oficial via Hub** | Um provedor intermediário conecta a API oficial (Meta) por você. **Sem criar aplicativo.**              | Hub MultiAPIWA, NotificaMe, ConnectionHub |
| **Oficial direto**  | Você cria o **seu aplicativo na Meta** e conecta direto. Controle total, **exige aprovação**.           | WhatsApp WABA, Instagram, Facebook        |

📲 Precisa de um número para usar no sistema? Adquira pelo portal [Telera Whazing](https://telera.whazing.com.br/).

🧭 **Dúvida sobre comentários ou agendamento do Instagram?** Veja [O que cada hub faz](hubs/recursos-por-hub.md).

> 🔒 Precisa esconder um canal dos demais usuários? Veja [Canal Privado](canal-privado.md).
>
> 📵 Quer recusar chamadas de voz automaticamente? Veja [Bloquear Chamadas do WhatsApp](bloquear-chamadas.md).

***

## 🚀 Escolha em 30 segundos

| O que eu quero                                | Canal recomendado                                               | Custo                                       |
| --------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------- |
| Começar sem pagar por canal                   | **WhatsApp não oficial (WuzAPI)** ou **Telegram (bot oficial)** | Gratuito                                    |
| WhatsApp com botões e listas, sem API oficial | **WhatsApp PLUS**                                               | Baixo, por canal                            |
| Canais oficiais com conexão fácil (1, 2 ou 3) | **Hub MultiAPIWA**                                              | R$ 25/canal/mês                             |
| Canais oficiais + TikTok no mesmo hub         | **Hub NotificaMe**                                              | R$ 50/canal/mês (+ ativação em WABA/TikTok) |
| Só Instagram e Facebook oficiais              | **ConnectionHub**                                               | R$ 59,90/canal/mês                          |
| Controle total do app Meta (equipe técnica)   | **Conexão direta Meta**                                         | Gratuito no Whazing (exige app + aprovação) |
| Atendimento pelo site                         | **WebChat nativo**                                              | Gratuito                                    |
| Centralizar e-mails                           | **E-mail**                                                      | Conforme provedor                           |
| Enviar SMS                                    | **SMS (Witi)**                                                  | Conforme créditos                           |

> 💡 Valores de hubs e provedores são cobrados **por eles**, não pelo Whazing. Confirme sempre antes de contratar.

***

## 🔐 Liberar o canal para a empresa

Antes de qualquer conexão, o canal precisa existir em **dois lugares**. Se faltar um dos dois, **o canal não aparece** para o cliente — nem para conectar, nem para comprar.

```
1) O SaaS oferece o canal?     Painel SaaS → Integrações → Canais Disponíveis
2) A empresa tem no plano?     Painel SaaS → Comercial → Planos
                ↓
Os dois ligados → o cliente vê o canal em Canais → Adicionar canal
```

| Onde                                               | O que libera                                                                      |
| -------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Painel SaaS → Integrações → Canais Disponíveis** | Diz que aquele tipo de canal **existe no seu SaaS**                               |
| **Painel SaaS → Comercial → Planos**               | Diz que **aquela empresa** pode usar aquele tipo (limite geral e limite por tipo) |

Os botões de **Canais Disponíveis**: WABA Api Oficial, Whatsapp WuzAPI, Whatsapp Api Plus, Whatsapp Baileys, Facebook Messenger, Instagram, Connection Hub Insta/Facebook, Hub Notificame, Telegram, Webchat, E-mail e SMS.

> 💡 **Regra de bolso:** _Canais Disponíveis = o que o seu SaaS oferece. Plano da empresa = o que aquela empresa contratou._

📄 Passo a passo completo: [Liberação de Canais para Empresas](../modulo-saas/liberacao-de-canais.md)\
📄 Vender canal como adicional: [Canais Adicionais](../modulo-saas/criacao-de-planos-financeiro/adicionais-de-canais.md)

***

## 📱 Canais Não Oficiais

Conexão por **QR Code**, como o WhatsApp Web. **Não** passam pela API oficial da Meta.

> ⚠️ **Atenção:** por serem não oficiais, estão fora das regras da Meta e **podem sofrer bloqueio** — principalmente com disparo em massa. Use com consciência.

### WhatsApp WuzAPI (WhatsMeow)

* API não oficial, mais moderna e recomendada;
* **Sem custo por canal**;
* Boa opção para quem quer WhatsApp sem API oficial.

### WhatsApp Baileys (descontinuado)

* API não oficial **antiga, descontinuada**;
* **Vem desativada por padrão** nas instalações atuais;
* **Não recomendamos.** Para novas instalações, use o **WuzAPI (WhatsMeow)**.

**Como ativar (somente se você realmente precisar)**

1. Abra o arquivo **`.env`** do backend;
2. Adicione a linha:

```
# Baileys vem desativado por padrao. Definir =true pra habilitar.
BAILEYS_ENABLED=true
```

3. **Reinicie** o sistema;
4. No **Painel SaaS**, acesse **Canais Disponíveis** — aparecerá o botão **"Whatsapp Baileys (recomendado desativar)"**;
5. Ligue o botão — o canal volta ao catálogo (o plano da empresa também precisa ter o Baileys habilitado).

### ⭐ WhatsApp PLUS (não oficial premium)

Versão não oficial com recursos extras de atendimento:

* Envio de **botões** e **listas**;
* Botão "Copiar e Colar";
* **Links**;
* Solicitação de **localização**;
* Seleção da **cidade do proxy** (simula conexão na região do celular).

**Vantagens:** mais estável que o Baileys, menor consumo da VPS, baixo custo por canal e recursos interativos.

### 💰 Custos dos não oficiais

* **Sem custo do Whazing por canal** (exceto o PLUS, que tem custo do provedor);
* Sem limite específico de canais — o limite real é a capacidade da sua VPS.

> É possível trocar o tipo de API não oficial sem perder dados, seguindo o procedimento da documentação.

***

## 📨 Telegram (Bot API oficial)

O Telegram **não é QR Code** e não usa a API da Meta: ele usa a **Bot API oficial do Telegram**. Você **cria um bot** no **@BotFather** e conecta o **token** gerado ao Whazing.

* ✅ **Sem custo por canal**;
* ✅ Conexão oficial do Telegram (Bot API);
* ✅ Mensagens enviadas ao **seu bot** aparecem na tela de Atendimento;
* ⚠️ Precisa criar o bot antes de cadastrar o canal — sem token não há conexão.

**Resumo do caminho:** Telegram → **@BotFather** → `/newbot` → escolher nome e usuário (terminando em **"bot"**) → copiar o **token** → cadastrar o canal no Whazing.

👉 Guia completo: [Guia de Conexão do Telegram](telegram.md)

***

## 💼 Hub MultiAPIWA (recomendado)

O hub **oficial do Whazing** para conectar canais da Meta. A conexão acontece **dentro do próprio Whazing**, sem o cliente copiar token nem configurar webhook.

> 🚫 **Exclusivo do Whazing** — não funciona em outros sistemas.

### Canais disponíveis

| Canal                       | O que atende                    |
| --------------------------- | ------------------------------- |
| **WhatsApp Oficial (WABA)** | Atendimento pelo número oficial |
| **Instagram**               | Direct da conta profissional    |
| **Facebook (Messenger)**    | Mensagens da Página             |

É possível ativar **os três**, **dois** ou **apenas um** — a ativação é **por tipo de canal** (ex.: só Instagram; ou Instagram + Facebook).

### ✅ Vantagens

* **Um único hub para três canais** — WhatsApp Oficial, Instagram e Facebook;
* **Ativação por canal** — ligue só o que precisa;
* **Sem criar aplicativo na Meta** — nada de App ID, token, webhook ou App Review;
* **O cliente conecta dentro do Whazing** — não sai do sistema, em poucos cliques;
* **Sem taxa de ativação** e **o menor custo por canal** entre os hubs;
* **Cobrança proporcional** aos dias de uso;
* **Exclusivo do Whazing**, mantido pela própria equipe;
* **Instagram e Facebook com recursos completos** — responder comentários, Direct automático e agendamento de Feed, Stories e Reels (comparativo em [O que cada hub faz](hubs/recursos-por-hub.md)).
* Suporta **COEX** no WhatsApp Oficial;
* Recursos extras no Instagram: agendamento de publicações e resposta a comentários.

### 💰 Custos

* **R$ 25,00 por canal/mês**, sem taxa de ativação;
* **Mínimo de R$ 10,00** por canal na cobrança proporcional;
* Fatura no **dia 01**, vencimento **dia 10** e **bloqueio automático** em caso de atraso;
* Pagamento **separado do Whazing**, por **InfinityPay** (**Pix sem taxa**, cartão com as taxas do cartão).

> ⚠️ **O número não deve ser usado para spam.** Disparo em massa fora das regras da Meta derruba a **qualidade do número** e pode bloquear o cadastro. Como o aplicativo da Meta é **centralizado**, o problema de um cliente **afeta todos**.

👉 Guia completo: [Hub MultiAPIWA (conexão integrada)](hubs/multiapiwa/README.md)\
👉 Para o administrador: [Ativar e vender o Hub MultiAPIWA](hubs/multiapiwa/ativacao.md)

***

## 💼 Hub NotificaMe

Hub com o maior número de canais no mesmo lugar — inclusive **TikTok**.

* Cadastro: [Hub Whazing / NotificaMe](https://hub.whazing.com.br/)
* Cupom de desconto: **whazing**

| Canal                | Ativação      | Mensalidade                |
| -------------------- | ------------- | -------------------------- |
| **WhatsApp Oficial** | **R$ 150,00** | R$ 50,00/canal (com cupom) |
| **Instagram**        | Sem taxa      | R$ 50,00/canal (com cupom) |
| **Facebook**         | Sem taxa      | R$ 50,00/canal (com cupom) |
| **TikTok**           | **R$ 50,00**  | R$ 50,00/canal (com cupom) |

> ℹ️ Também entrega os recursos de Instagram (comentários, Direct automático e agendamento), igual ao Hub MultiAPIWA — veja [O que cada hub faz](hubs/recursos-por-hub.md).

* Suporta **COEX** no WhatsApp Oficial;
* Recursos extras no Instagram: agendamento de publicações e resposta a comentários.

> Os valores são do **provedor** e podem mudar. Confirme no site antes de contratar.

***

## 💼 Hub ConnectionHub

Hub focado em **Instagram e Facebook**.

Site oficial: [connectionhub.com.br](https://www.connectionhub.com.br/)

| Canal         | Ativação | Mensalidade        |
| ------------- | -------- | ------------------ |
| **Facebook**  | Sem taxa | **R$ 59,90/canal** |
| **Instagram** | Sem taxa | **R$ 59,90/canal** |

> ⚠️ **Somente Direct:** o ConnectionHub **não** responde comentários, **não** envia Direct automático e **não** agenda Feed, Stories ou Reels. Se você precisa desses recursos, use o [Hub MultiAPIWA](hubs/multiapiwa/README.md) — comparativo em [O que cada hub faz](hubs/recursos-por-hub.md).

👉 Guia de conexão: [Instagram e Facebook via ConnectionHub](hubs/connectionhub/README.md)

***

## 🔵 Conexão Direta Meta (nível avançado)

Aqui você **não usa hub**: cria o **seu aplicativo** no Meta for Developers e conecta direto pela **Graph API oficial**.

Serve para quem quer controle total do app, reduzir custo por canal em volume alto ou usar recursos que dependem de permissões específicas.

> ⚠️ **Nível avançado — o aplicativo é por sua conta.**
>
> Exige criar app, **verificação de negócio** e **App Review** com vídeos de cada permissão. **O suporte Whazing não cria, não configura e não aprova aplicativos** — e isso vale para **WhatsApp Oficial, Instagram e Facebook**.
>
> * 🛠️ **Consultoria opcional: R$ 1.000,00** (criação do app + condução da aprovação).
> * ⚡ **Quer o caminho fácil?** Use o [Hub MultiAPIWA](hubs/multiapiwa/README.md).

### 5.1 WhatsApp Oficial (WABA)

Conexão direta com a **WhatsApp Business Platform da Meta**.

**Recursos**

* Conexão direta com a API oficial da Meta;
* Suporte **COEX**, quando necessário;
* Conformidade com as políticas do WhatsApp;
* **Templates (HSM)**, sessão de 24 horas, botões interativos e multimídia.

**Vantagens**

* Integração oficial e aprovada pelo WhatsApp;
* Melhor reputação e entregabilidade do número;
* Mais adequada para operações empresariais e de escala.

⚠️ Exige acesso ao **Facebook Developers** e geração de **Token Permanente**.

👉 Manual: [API Oficial do WhatsApp (Meta)](api-oficial/api-oficial-do-whatsapp-meta.md)\
👉 Dúvidas: [API Oficial — FAQ Completo](api-oficial/api-oficial-do-whatsapp-faq-completo.md)

### 5.2 Instagram

Conexão direta do Instagram por aplicativo próprio, com Direct, comentários e publicação.

* Cliente conecta em **Canais → Instagram → "Conexão direta"**;
* Mensagens chegam pelo **webhook** do seu app;
* Exige permissões aprovadas na Meta.

👉 Guia da seção: [Conexão direta Meta (Facebook e Instagram)](conexao-direta-meta/)\
👉 Permissões e aprovação: [Permissões e aprovação na Meta](conexao-direta-meta/permissoes-e-aprovacao-meta.md)

### 5.3 Facebook

Conexão direta da **Página do Facebook** (Messenger) por aplicativo próprio.

* Cliente conecta em **Canais → Facebook → "Conexão direta"**;
* Exige ser **administrador** da Página e permissões aprovadas;
* Webhook do seu app recebe as mensagens.

👉 Guia da seção: [Conexão direta Meta (Facebook e Instagram)](conexao-direta-meta/)\
👉 Como conectar: [Conectar o canal direto](conexao-direta-meta/conectar-canal-direto.md)

> 💡 **Custo da conexão direta:** o Whazing **não cobra por canal**. O custo é o **tempo/esforço** de criar e manter o app aprovado (ou a consultoria de R$ 1.000,00).

***

## 💬 WebChat

Atendimento diretamente pelo **seu site**, sem aplicativo e sem número de telefone. Basta um script.

**Vantagens:** conversas centralizadas no Atendimento, compatível com Chatbot e Recepção Inteligente, filas, departamentos, personalização de cores e mensagem de boas-vindas.

**Custos:** o Whazing **não cobra nada** pelo WebChat nativo.

👉 Guia completo: [WebChat — Atendimento pelo seu site](webchat.md)

***

## 📧 E-mail

Use o **e-mail como canal de atendimento**, centralizado no mesmo sistema.

**Formas de conexão:** Gmail/Google OAuth, Microsoft/Outlook OAuth, IMAP, POP3 e SMTP.

* O **OAuth** é configurado **uma vez no ambiente SaaS** e permite que os clientes conectem as próprias contas;
* Permite receber, responder, manter histórico e abrir tickets.

> O custo depende do provedor (Google, Microsoft ou servidor próprio). O Whazing não define essas tarifas.

👉 Configuração: [Configurar OAuth do Google/Microsoft](../modulo-saas/configurar-oauth-do-gmail-para-canal-email.md)

***

## 📱 SMS

Canal de **SMS** com integração à [Witi](https://witi.me/).

**Como funciona:** você compra créditos na Witi e pode **revendê-los aos clientes** em pacotes criados no Painel SaaS. O cliente compra pelo próprio Whazing, sem acessar a Witi.

* Preço na Witi a partir de \~**R$ 0,038 por SMS** (varia por rota);
* Compra mínima informada pela Witi: **R$ 250,00**;
* Onde usar: **Atendimento**, **Campanhas** e **API**.

⚠️ **Limite de caracteres:** mensagens longas podem ser divididas em vários SMS e consumir **vários créditos por contato** (ex.: _"Vai consumir 2 crédito(s) por contato"_).

👉 Guia completo (conta Witi, token, callbacks, pacotes, saldo e relatório): [SMS](sms.md)

***

## 📊 Quadro comparativo — API Oficial

| Opção                   | Canais                                        | Custo                                                  | Ativação                       | Esforço                                                    | Prazo          |
| ----------------------- | --------------------------------------------- | ------------------------------------------------------ | ------------------------------ | ---------------------------------------------------------- | -------------- |
| **Hub MultiAPIWA**      | WhatsApp Oficial, Instagram, Facebook         | **R$ 25/canal/mês** (mín. R$ 10 proporcional)          | Sem taxa                       | **Baixo** — tudo dentro do Whazing                         | Minutos        |
| **Hub NotificaMe**      | WhatsApp Oficial, Instagram, Facebook, TikTok | **R$ 50/canal/mês**                                    | R$ 150 (WABA) · R$ 50 (TikTok) | Médio                                                      | Minutos        |
| **Hub ConnectionHub**   | Instagram, Facebook                           | **R$ 59,90/canal/mês**                                 | Sem taxa                       | Médio                                                      | Minutos        |
| **Conexão direta Meta** | WhatsApp Oficial, Instagram, Facebook         | Gratuito no Whazing (+ consultoria R$ 1.000 se quiser) | —                              | **Alto** — app próprio, verificação de negócio, App Review | Dias a semanas |

> ⏱️ **"Prazo"** é o tempo até o canal funcionar. É a coluna que mais ajuda a decidir.

***

## 📋 Resumo de todos os canais

| Canal                           | Tipo                  | Custo / cobrança                      | Principais recursos                                  |
| ------------------------------- | --------------------- | ------------------------------------- | ---------------------------------------------------- |
| **WhatsApp WuzAPI / WhatsMeow** | Não oficial           | Gratuito                              | WhatsApp, mensagens e atendimento                    |
| **WhatsApp Baileys**            | Não oficial           | Gratuito                              | Descontinuado — desativado por padrão                |
| **WhatsApp PLUS**               | Não oficial premium   | Pago ao provedor                      | Botões, listas, links e localização                  |
| **Telegram**                    | Oficial (Bot API)     | Gratuito                              | Bot criado no BotFather                              |
| **Hub MultiAPIWA**              | Oficial / Hub         | R$ 25/canal (mín. R$ 10)              | WhatsApp Oficial, Instagram e Facebook               |
| **Hub NotificaMe**              | Oficial / Hub         | R$ 50/canal + ativação em WABA/TikTok | WhatsApp, Instagram, Facebook e TikTok               |
| **ConnectionHub**               | Oficial / Hub         | R$ 59,90/canal                        | Instagram e Facebook                                 |
| **Conexão direta Meta**         | Oficial (app próprio) | Gratuito no Whazing                   | WhatsApp Oficial, Instagram e Facebook via Graph API |
| **WebChat**                     | Nativo                | Gratuito no Whazing                   | Atendimento pelo site                                |
| **E-mail**                      | E-mail                | Conforme provedor                     | Gmail, Microsoft, IMAP, POP3 e SMTP                  |
| **SMS**                         | SMS                   | Conforme créditos (Witi)              | Atendimento, campanhas e API                         |

> **Importante:** preços de provedores, hubs, Meta e serviços externos podem mudar sem aviso. Confirme no provedor antes de contratar.

***

## 📚 Veja também

* [Liberação de Canais para Empresas](../modulo-saas/liberacao-de-canais.md)
* [Canais Adicionais (venda aos seus clientes)](../modulo-saas/criacao-de-planos-financeiro/adicionais-de-canais.md)
* [Hubs (oficiais sem criar aplicativo)](hubs/) · [Conexão direta Meta](conexao-direta-meta/)
* [Instagram direto](conexao-direta-meta/instagram.md) · [Facebook direto](conexao-direta-meta/facebook.md)
* [Telegram (bot oficial)](telegram.md) · [WebChat](webchat.md)
* [📧 E-mail](email.md) · [SMS](sms.md)
* [Canal Privado](canal-privado.md) · [Bloquear Chamadas do WhatsApp](bloquear-chamadas.md)
