---
description: >-
  Como usar E-mail como canal de atendimento no Whazing: Gmail e Microsoft por
  OAuth, além de IMAP, POP3 e SMTP, com configuração única no painel SaaS.
---

# 📧 E-mail — atendimento por e-mail

O **E-mail** é um canal de atendimento como os outros: as mensagens recebidas viram **tickets no Atendimento**, com histórico, filas, chatbot e automações.

***

## ✅ Para que serve

* Centralizar **caixas de e-mail** no mesmo lugar onde você atende WhatsApp, Instagram e WebChat.
* Receber, responder e manter o **histórico completo** da conversa.
* Aplicar **filas, departamentos, automações e chatbot** nas mensagens.
* Conectar **várias contas** — Gmail, Outlook/Microsoft 365 ou servidor próprio.

***

## 🔌 Formas de conexão

| Forma | Como funciona | Quando usar |
| --- | --- | --- |
| **Google OAuth (Gmail)** | O cliente autoriza a conta Google, sem digitar senha no Whazing | Contas Gmail / Google Workspace |
| **Microsoft OAuth (Outlook)** | O cliente autoriza a conta Microsoft | Outlook.com / Microsoft 365 |
| **IMAP** | Recebe por IMAP, com usuário e senha de aplicativo | Servidor próprio ou provedor sem OAuth |
| **POP3** | Baixa as mensagens do servidor | Servidores que só oferecem POP3 |
| **SMTP** | Usado para **enviar** as respostas | Sempre que o envio não vem do OAuth |

> 💡 **OAuth é configurado uma vez, no Painel SaaS.** Depois disso, cada cliente conecta a própria conta sozinho — sem você mexer em credenciais.

***

## 🛠️ Como colocar para funcionar

1. **Painel SaaS →** configure o OAuth do Google e/ou da Microsoft (uma vez para toda a operação).
2. **Painel SaaS → Integrações → Canais Disponíveis** → ligue **E-mail**.
3. **Painel SaaS → Comercial → Planos** → permita o canal no plano da empresa.
4. **Cliente:** Cadastros → Canais → Adicionar canal → **E-mail** → escolha a forma de conexão e autorize a conta.

> 🔐 Sem os passos 2 e 3 o canal **não aparece** para o cliente. Veja [Liberação de Canais para Empresas](../modulo-saas/liberacao-de-canais.md).

***

## 💰 Custo

O Whazing **não cobra** pelo canal de e-mail. O custo é o do seu **provedor** (Google, Microsoft ou servidor próprio) — tarifas definidas por eles.

***

## 🔗 Configuração detalhada

* [Configurar OAuth do Google/Microsoft (E-mail + Agenda)](../modulo-saas/configurar-oauth-do-gmail-para-canal-email.md)
* [Guia Simples para Configurar o Gmail e Lembrar a Senha no Whazing](../modulo-saas/configurar-gmail.md)

***

## Veja também

* [Canais Disponíveis](canais-disponiveis.md)
* [Canal Privado](canal-privado.md) — esconder o canal de parte dos usuários.
* [WebChat](webchat.md) · [SMS](sms.md)
