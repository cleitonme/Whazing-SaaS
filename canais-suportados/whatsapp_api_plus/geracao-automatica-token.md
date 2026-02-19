---
icon: key
---

# Geração automática TOKEN

Esta configuração está disponível no painel SaaS na aba canais

Com essa configuração ativada, ao **cadastrar um novo canal**, o sistema irá:

1. Gerar automaticamente um **token no seu servidor UazAPI**
2. Cadastrar esse token automaticamente no **Whazing**

Isso torna o processo de conexão **mais simples, rápido e transparente**, sem necessidade de configurações manuais a cada novo canal.

***

## ⚙️ O que é necessário para usar?

Para habilitar a geração automática de token, basta informar:

* 🌐 **URL do servidor WuzApi**
* 🔐 **Token ADMIN**

Com apenas esses dois dados, o sistema já consegue criar e registrar os tokens automaticamente.

***

## ⚠️ Regras importantes

* ✅ Essa configuração **vale somente para novos canais**
* ❌ Canais que já estiverem cadastrados **não serão alterados**
* 🚫 Caso ocorra algum erro ao gerar o token, o canal **não será cadastrado nem atualizado**

***

<figure><img src="../../.gitbook/assets/image (2) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

***

💡 **Dica:** Recomendado para quem cria vários canais e quer evitar erros manuais na configuração de tokens.
