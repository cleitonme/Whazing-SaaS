---
icon: square-whatsapp
---

# WhatsApp API Não Oficial

As APIs não oficiais conectam seu WhatsApp ao sistema **sem custo por mensagem**. São a forma mais comum de começar, mas exigem seguir as boas práticas para manter a conexão estável.

> ⚠️ **Recomendação do Whazing:** use contas do **WhatsApp Business** para a integração. O WhatsApp normal pode apresentar desconexões, limitações e instabilidade.

## 📊 Quais opções existem?

| Opção | O que é | Quando usar |
| --- | --- | --- |
| [**WhatsApp WuzAPI (WhatsMeow)**](whatsapp-wuzapi.md) | Conexão leve e estável, recomendada para novas instalações | **Recomendada para começar** — boa estabilidade e sem custo por canal |
| [**WhatsApp API PLUS**](whatsapp_api_plus/README.md) | API não oficial **Premium**, com recursos extras (botões, listas, localização) | Quando você precisa de recursos interativos e mais estabilidade (exige token pago e licença Premium) |
| **Baileys** | Conexão básica, mais antiga | Não recomendada — o Whazing sugere usar a WuzAPI no lugar |

## 🔁 Posso trocar de API depois?

Sim. É possível **migrar entre as 3 APIs não oficiais** (Baileys, API PLUS e WuzAPI) **sem perder dados**:

👉 [Migração entre APIs Não Oficiais](migracao-entre-apis-nao-oficiais.md)

## 🆘 Problemas comuns

* A mensagem não chega ou não envia: 👉 [Mensagem não enviando](mensagem-nao-enviando.md)
* O WhatsApp desconecta com frequência: veja [WhatsApp desconecta ou mensagens não chegam](../../solucao-de-problemas/whatsapp-e-mensagens/whatsapp-desconecta-ou-mensagens-nao-chegam.md)

---

## 👣 Depois de conectar

1. **Crie as filas** e defina qual fila receberá os atendimentos do número — veja [Organização de Atendimentos, Filas e Permissões de Usuários](../../funcionalidades/gestao/organizacao-de-atendimentos-filas-e-permissoes-de-usuarios.md).
2. **Cadastre os usuários (atendentes)** — veja [Usuários](../../funcionalidades/gestao/usuarios/README.md).
3. **Configure mensagens automáticas** — veja [Mensagens Automáticas](../../funcionalidades/automacao/mensagens-automaticas.md).
4. **Crie um chatbot** para responder automaticamente — veja [Chatbot Interno](../../funcionalidades/automacao/chatbotinterno/README.md).
