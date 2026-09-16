---
description: Instruções troca de api não oficiais sem perda de dados
icon: square-whatsapp
---

# Migração entre apis não oficiais

#### 🔄 Migração de Canal (Passo a passo detalhado e seguro)

> Use esta sequência para trocar entre **Plus** e **Baileys**, **Wuzapi** sem perder dados.

**Checklist rápido (faça antes)**

* [ ] Avise a equipe/usuários do painel que haverá manutenção.
* [ ] Verifique se ninguém está usando ativamente chats importantes.

**Passos para migrar (detalhado)**

1. **Desconectar o WhatsApp** atual (no painel).
   * Por que: evita que mensagens novas sejam vinculadas ao canal antigo.
2. **Editar o canal** no painel e **alterar o tipo** (plus, baileys ou wuzapi).
   * ⚠️ **Atenção:** o Baileys está **descontinuado e vem desativado por padrão** — a opção só aparece se ele tiver sido reativado no servidor (arquivo `.env`). Prefira **Plus** ou **WuzAPI**. Detalhes: [Canais Suportados](../README.md).
3. **Gerar novo QR Code**
4. **Conectar**: abra o WhatsApp no celular, escaneie o QR Code.
5. **Validar**: confirme que as mensagens chegam e que o perfil está correto.

***
