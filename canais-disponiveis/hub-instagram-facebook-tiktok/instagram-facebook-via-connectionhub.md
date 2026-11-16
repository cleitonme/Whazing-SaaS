---
icon: code-branch
description: >-
  Como conectar Instagram e Facebook pelo ConnectionHub e o que esse provedor
  faz (somente Direct).
---

# Instagram e Facebook via ConnectionHub

> **Em palavras simples:** o ConnectionHub é um provedor que conecta seu Instagram e sua Página do Facebook ao Whazing. Ele faz **somente o Direct** (conversas). Quem precisa **responder comentários** ou **agendar publicações** deve usar o [Hub MultiAPIWA](../api-oficial/hub-multiapiwa.md) ou o [Hub NotificaMe](facebook-e-instagram-via-hub/README.md).

> 💰 **Custo:** R$ 59,90 por canal/mês, cobrado pelo provedor (sem taxa de ativação). O Whazing não cobra nada por essa conexão. Confirme o valor no site antes de contratar.

***

## ⚠️ O ConnectionHub só faz Direct

| Recurso | ConnectionHub |
| --- | --- |
| Receber e responder mensagens (Direct) | ✅ |
| Responder comentários das publicações | ❌ |
| Direct automático após comentário | ❌ |
| Agendar Feed, Stories e Reels | ❌ |
| Iniciar conversa (falar primeiro) | ❌ |

```text
Cliente precisa mandar a primeira mensagem
        ↓
Você tem 24 horas para responder
        ↓
Passou das 24 horas → a janela fecha
```

> 👉 Se você precisa de comentários ou agendamento, veja [O que cada hub faz](../recursos-por-hub.md) e escolha outro provedor.

***

## 🔑 Passo a passo da conexão

### 1. Crie sua conta no ConnectionHub

Acesse [https://www.connectionhub.com.br/](https://www.connectionhub.com.br/) e faça o cadastro.

### 2. Cadastre o canal

1. Faça login no ConnectionHub.
2. Vá em **Canais** (gerenciar canais).
3. Cadastre o canal **Facebook** ou **Instagram**.
4. Clique no **botão verde** para ativar — o site do canal abre para você conectar a conta.

### 3. Copie o token da conta

1. Abra **Meu perfil**.
2. Copie o **"accessToken (Bearer)"**.

> ⚠️ O token é **da conta**, não de um canal específico.

### 4. Cole o token no Whazing

1. No Whazing, vá em **Configurações → Canais-API → Token Hub**.
2. Cole o token no campo do **Connection Hub**.
3. Salve.

<figure><img src="../../.gitbook/assets/image (32).png" alt=""><figcaption></figcaption></figure>

### 5. Adicione o canal

1. Vá em **Canais → adicionar canal**.
2. Escolha **Connection Hub**.
3. Selecione o canal que você cadastrou no provedor.

<figure><img src="../../.gitbook/assets/image (26).png" alt=""><figcaption></figcaption></figure>

> ✅ Deu certo quando a conversa de teste aparece na tela de Atendimento.

***

## 🆘 Problemas comuns

### "Token do HUB inválido"

O token usado é de um **canal** em vez da **conta**. Copie o token em **Meu perfil** do ConnectionHub.

### A conversa não chega no Whazing

1. Confirme que o canal está **ativo** no ConnectionHub.
2. Confira se o token foi colado e salvo no Whazing.
3. Lembre-se: o **cliente precisa enviar a primeira mensagem**.

### Passou de 24 horas e não consigo responder

A janela de conversa fechou. Só é possível responder depois que o cliente mandar uma nova mensagem.

### Não encontro a opção de comentários ou de agendamento

É uma limitação do provedor: o ConnectionHub é **somente Direct**. Para esses recursos, use o [Hub MultiAPIWA](../api-oficial/hub-multiapiwa.md).

***

## 📚 Veja também

* [O que cada hub faz (comparativo)](../recursos-por-hub.md)
* [Hub MultiAPIWA (conexão integrada)](../api-oficial/hub-multiapiwa.md)
* [Instagram, Facebook e TikTok via NotificaMe](facebook-e-instagram-via-hub/README.md)
* [Canais Disponíveis](../canais-disponiveis.md)
