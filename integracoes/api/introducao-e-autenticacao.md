---
icon: info
---

# Introdução e Autenticação

Esta página explica, de forma simples, **o que você precisa para começar a usar a API** do Whazing.

> 💡 **O que é a API?** É a forma de um sistema "conversar" com o Whazing por conta própria: enviar mensagens, agendar envios, criar compromissos na Agenda, consultar contatos (clientes), criar tickets e muito mais — sem alguém precisar clicar na tela.

***

## 🧰 O que preciso para usar?

| Preciso de... | Onde consigo |
|---|---|
| **Um token** (uma chave secreta que identifica você) | No sistema: **Automação e Integrações → API** → **Adicionar** → selecione o canal |
| **O endereço da API** (a URL base, ex.: `https://seudominio.com`) | É o endereço do seu Whazing; a coleção do Postman já traz o campo para preencher |
| **As requisições** (os "pedidos" que você envia)

### 📥 Como baixar os arquivos da API

1. Acesse **Automação e Integrações → API**;
2. Clique em **Adicionar** e selecione o canal que deseja usar;
3. Aparecerá o botão para baixar o **modelo Postman** (`API_modelo_postman.json`).

> ⚠️ **Importante:** novos endpoints podem não estar na documentação desta página — **sempre baixe o modelo Postman** pelo próprio sistema, pois ele acompanha a versão mais atual da API.
***

## 🔐 Autenticação

**Toda** chamada da API precisa incluir o seu token no cabeçalho (header), no formato:

```http
Authorization: Bearer seu-token-aqui
```

Em palavras simples: em cada pedido que você fizer, anexe o token para o sistema saber quem está pedindo. **Sem o token, o pedido é recusado.**

> ⚠️ Trate o token como uma senha: **não compartilhe** e não publique em lugares públicos.

***

## 🚫 Quando algo dá errado (erros da API)

Quando um pedido não pode ser atendido, a API responde com um **código numérico**. Estes são os códigos usados nos endpoints — e o que significam:

| Código | O que significa, em palavras simples |
|---|---|
| **400** | "Os dados que você enviou estão errados" — faltou um campo obrigatório, a data está no passado ou em formato inválido, ou um campo veio malformado |
| **401** | "Não autorizado" — o token **não foi informado** ou **é inválido** |
| **403** | "Proibido" — o token é válido, mas **não corresponde à conexão (canal) configurada** para este acesso |
| **404** | "Não encontrado" — o registro não existe (ou pertence a outra empresa/conexão). Ex.: número não é um WhatsApp válido |
| **409** | "Conflito" — a operação não pode acontecer agora. Ex.: cancelar algo que já foi enviado/concluído, ou o profissional já tem outro compromisso nesse horário |

> 💡 **Dica prática:** se apareceu **401 ou 403**, o problema está no token ou no canal selecionado. Se apareceu **400**, revise os campos do pedido. Se **404**, confira o ID/número informado.

***

## 📌 Observações importantes

1. **Todos os números** devem estar no formato **DDI+DDD+NÚMERO** (ex.: `5511999999999`);
2. O **token** deve ser mantido em segurança;
3. Para mensagens em **grupo**, use o formato `id_grupo@g.us` no campo `number`;
4. Os **templates** devem ser previamente aprovados pelo WhatsApp;
5. Mantenha o **externalKey** único para cada mensagem para rastreamento;
6. Certifique-se de que os **arquivos enviados** estejam em formatos suportados pelo WhatsApp;
7. Para endpoints que aceitam **status**, os valores possíveis são: `"pending"`, `"open"`, `"closed"`;
8. Os IDs de fila (`queueId`) e usuário (`userId`) devem existir no sistema;
9. Em **canais sem número de telefone** (como Instagram), o envio pode usar o **número do ticket** (`ticketId`) em vez do telefone;
10. Datas/horas de **Agendamentos** e **Agenda** devem ser enviadas sempre **com fuso horário** (ex.: `2026-08-25T14:30:00-03:00`).

***

## 🧭 Próximos passos

* Veja o índice de recursos em [Endpoints](endpoints/README.md);
* Conheça os novos recursos: [Agendamentos](endpoints/agendamentos.md) (envio futuro de mensagens) e [Agenda](endpoints/agenda.md) (compromissos);
* Precisa de um exemplo rápido? Veja [Exemplos de Código](exemplos-de-codigo.md).

Para casos específicos ou dúvidas adicionais, consulte a documentação POSTMAN ou entre em contato com o suporte.
