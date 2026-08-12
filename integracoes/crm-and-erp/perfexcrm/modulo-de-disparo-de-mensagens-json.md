# Módulo de Disparo de Mensagens (JSON)

Este módulo permite o envio de mensagens automáticas via **WhatsApp (API Whazing)** utilizando **JSON personalizado**, possibilitando:

* ✅ Mensagens simples
* ✅ Botões interativos (CTA)
* ✅ Templates oficiais (API Oficial WhatsApp)
* ✅ Disparos automáticos via gatilhos (Triggers)

Ideal para cobranças, lembretes, notificações e automações avançadas.

***

### ✅ Compatibilidade

* **PerfexCRM:** 3.3.1
* **PHP:** 8.2

> ⚠️ Recomendado testar antes em outras versões.

***

### 📦 Download do módulo

👉 [https://github.com/cleitonme/Whazing-SaaS/blob/main/docs/perfexcrm/modulo%20notificacao%20para%20PerfexCRM%20%20compativel%20com%20api%20do%20whazing%20para%20envio%20json.zip](https://github.com/cleitonme/Whazing-SaaS/blob/main/docs/perfexcrm/modulo%20notificacao%20para%20PerfexCRM%20%20compativel%20com%20api%20do%20whazing%20para%20envio%20json.zip)

***

### ⚙️ Instalação e configuração

1. Instale o módulo no PerfexCRM
2. Acesse:\
   **Configurações → SMS → WhatsApp API Whazing**
3. Preencha:
   * URL da API
   * Token
   * Dados do canal

***

### 🔑 Obtendo dados da API

1. Acesse o painel do Whazing
2. Vá em: **Configurações → Canais / API**
3. Copie:
   * URL
   * Token
   * Sessão (se aplicável)

Não esqueça colocar url final endpoint tipo /apiplus ou /apioficial

***

### 👤 Requisitos para envio

* Cliente com contato cadastrado
* Contato deve ter:
  * Nome
  * E-mail
  * Telefone WhatsApp válido

📌 Formato obrigatório do número:

```
5548999990000
```

> ❌ Não usar "+" ou espaços

***

### ⏱️ CRON (obrigatório)

O envio automático depende do CRON:

* Acesse: **Configurações → Cron Job**
* Configure conforme documentação do PerfexCRM

> ⚠️ Sem CRON, os disparos não acontecem.

***

## 🧠 Como funciona o envio (IMPORTANTE)

No campo **Mensagem do Trigger**, você NÃO escreve texto comum.

👉 Você deve enviar um **JSON completo**, que será repassado para a API do Whazing.

***

### 🔀 Variáveis disponíveis

Você pode usar dentro do JSON:

* `{number}` → número do destinatário
* `{invoice_link}` → link completo da fatura
* `{invoice_link_short}` → link curto (ID da fatura)
* `{contact_firstname}`
* `{contact_lastname}`
* `{invoice_number}`
* `{invoice_total}`
* `{invoice_duedate}`
* `{invoice_status}`

📌 Todas as merge fields padrão do PerfexCRM funcionam.

***

### ⚠️ Uso do `{invoice_link_short}`

Para usar o link curto, é obrigatório adicionar no JSON:

```json
"__link__": "{invoice_link}"
```

✔ Esse campo:

* NÃO é enviado para a API
* É usado internamente pelo módulo
* Permite gerar `{invoice_link_short}`

***

## 📌 EXEMPLOS PRONTOS

***

### 🔘 Exemplo 1 — Botão com link (CTA URL)

```json
{
    "__link__": "{invoice_link}",
    "number": "{number}",
    "contents": {
        "type": "cta_url",
        "header": {
            "type": "text",
            "text": "Fatura {invoice_number}"
        },
        "body": {
            "text": "Olá {contact_firstname}, sua fatura no valor de {invoice_total} vence em {invoice_duedate}. Toque no botão abaixo para visualizar."
        },
        "footer": {
            "text": "Em caso de dúvidas, entre em contato."
        },
        "action": {
            "name": "cta_url",
            "parameters": {
                "display_text": "Ver Fatura",
                "url": "{invoice_link}"
            }
        }
    }
}
```

***

### 📄 Exemplo 2 — Template Oficial (WhatsApp)

```json
{
  "__link__": "{invoice_link}",
  "number": "{number}",
  "contents": {
    "name": "cobranca_em_atraso",
    "components": [
      {
        "type": "header",
        "parameters": [
          {
            "type": "text",
            "text": "{contact_firstname} {contact_lastname}"
          }
        ]
      },
      {
        "type": "body",
        "parameters": [
          { "type": "text", "text": "{invoice_number}" },
          { "type": "text", "text": "{invoice_date}" },
          { "type": "text", "text": "{invoice_duedate}" },
          { "type": "text", "text": "{invoice_total}" },
          { "type": "text", "text": "{invoice_status}" }
        ]
      },
      {
        "type": "button",
        "sub_type": "url",
        "index": "0",
        "parameters": [
          {
            "type": "text",
            "text": "{invoice_link_short}"
          }
        ]
      }
    ],
    "language": {
      "code": "pt_BR"
    }
  }
}
```

***

## 🚨 Erros comuns (evite isso)

* ❌ Número com + ou espaço
* ❌ JSON inválido (vírgula errada, aspas faltando)
* ❌ Não usar `"__link__"` ao usar `{invoice_link_short}`
* ❌ Template não aprovado na API oficial
* ❌ Variáveis digitadas errado

***

## 💡 Dicas práticas

* Use botão (CTA) para aumentar cliques em faturas
* Use template para mensagens fora da janela de 24h
* Teste sempre com um número seu antes
* Comece simples, depois evolua o JSON
