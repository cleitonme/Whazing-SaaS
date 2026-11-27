---
description: Como Liberar Grupos no Whazing
icon: people-group
---

# Liberar Grupos WhatsApp

Liberar grupos significa permitir que o Whazing **receba e abra atendimentos de grupos do WhatsApp**, e não apenas de conversas individuais.

> ⚠️ Por padrão, os grupos vêm **desabilitados**. Este recurso também pode demandar mais recursos do sistema, o que pode causar travamentos ou perda de desempenho.

> 🆕 **O que mudou:** a configuração de grupos agora fica em **Configurações → Atendimento → aba Grupos do WhatsApp** (antes ficava nas configurações gerais), e o canal passou a ser editado em abas. Esta página foi reorganizada para acompanhar as telas atuais.

***

## ✅ Checklist rápido

Para liberar grupos, os quatro pontos abaixo precisam estar certos:

1. O **plano** do cliente tem a opção **Grupos** habilitada.
2. Em **Configurações de Atendimento → Configurações do Atendimento → Grupos do WhatsApp**, a opção **Ignorar Mensagens de Grupo** está **desligada**.
3. No **canal**, em **Configuração Avançada → Filtros de mensagens**, a opção **Ignorar Grupos** está **desligada**.
4. As **conexões foram reiniciadas** e chegou uma **nova mensagem** no grupo.

***

## 1. Confirme o plano (administrador do SaaS)

Este passo é para quem administra a plataforma. Se você é cliente e o recurso não aparece, fale com o administrador do seu plano.

1. Acesse **Empresas**.
2. Abra a aba **Planos**.
3. Na tabela, confira a coluna **Funcionalidades**: o ícone de **grupo** representa a opção **Grupos** (passe o mouse sobre o ícone para ver o nome).
4. Para liberar, clique no ícone de **lápis** do plano e ligue a opção **Grupos**, na seção **Funcionalidades**.

> ⚠️ **Sem a opção Grupos no plano, a aba Grupos do WhatsApp nem aparece** em Configurações → Atendimento, e o recurso não é liberado.

> 💡 **Limites de usuários, conexões e canais não liberam nem bloqueiam grupos.** No frontend, o que controla esse recurso é apenas a opção **Grupos** do plano.

***

## 2. Libere os grupos nas configurações de atendimento

1. Acesse **Configurações → Atendimento**.
2. A página abre na aba **Exibição**, com a lista de abas à esquerda (no celular, em um seletor).
3. Clique na aba **Grupos do WhatsApp**.

> 💡 Se a aba **Grupos do WhatsApp** não aparecer, volte ao passo 1: o plano não está liberando grupos.

Na aba ficam três opções:

| Opção | O que faz | Como deixar |
| --- | --- | --- |
| **Ignorar Mensagens de Grupo** | Quando ligada, o sistema **não abre ticket para grupos** | **Desligada** (é a opção principal para liberar grupos) |
| **Habilitar notificações de grupos** | Liga os avisos de mensagens de grupos | Opcional — ligue se quiser receber notificações |
| **Permitir fechar e transferir tickets de grupos para todos os usuários** | Permite que usuários comuns também fechem e transfiram atendimentos de grupos. Afeta **somente grupos**; atendimentos individuais seguem as regras atuais | Opcional — ligue se a equipe toda precisar fechar/transferir grupos |

> 💡 As opções são **salvas automaticamente** ao alternar. Não é preciso clicar em “Salvar” nesta tela.

> 💡 No topo da página existe um **campo de busca**. Digite, por exemplo, “grupo” para encontrar rapidamente essas opções.

***

## 3. Ajuste o canal

1. Acesse a lista de **Canais**.
2. Clique no ícone de **lápis** para editar o canal conectado.
3. Abra a aba **Configuração Avançada** (ela aparece ao editar um canal já existente).
4. No card **Filtros de mensagens**, encontre **Ignorar Grupos(necessário reiniciar conexão)**.
5. **Desligue** a opção.
6. Clique em **Salvar**.

### Em quais canais a opção aparece

| Canal | Mostra a opção “Ignorar Grupos”? |
| --- | --- |
| **WhatsApp Baileys** | ✅ Sim |
| **WhatsApp Plus** | ✅ Sim |
| **WhatsApp WuzAPI** | ✅ Sim |
| **Telegram** | ✅ Sim |
| **WhatsApp API Oficial (WABA), Hub e demais canais** | ❌ Não aparece |

> 💡 Nos canais em que a opção não aparece, esse filtro não é aplicado pelo Whazing — o recurso de grupos deve ser tratado no próprio canal.

> ⚠️ **As mudanças nas aparências locais só funcionarão depois que as conexões forem reiniciadas.**

> 💡 O próprio nome da opção já avisa: **“necessário reiniciar conexão”**. O reinício é feito no passo 4.

***

## 4. Reinicie as conexões

1. Volte para a lista de **Canais**.
2. Clique em **Reiniciar Conexões**.
3. Confirme a ação, se o sistema pedir.
4. Aguarde a mensagem **“Conexões reiniciadas com sucesso!”**.

> ⚠️ É esse reinício que aplica as mudanças feitas no canal. Sem ele, a opção **Ignorar Grupos** pode continuar valendo mesmo depois de salvar.

***

## 5. Envie uma mensagem no grupo

Depois de liberar e reiniciar, **abra o grupo no celular e envie uma mensagem** (ou peça para alguém enviar).

> ⚠️ **Um grupo só aparecerá depois que uma nova mensagem for recebida nesse grupo.**

> 💡 O grupo **não aparece “retroativamente”**: conversas antigas do grupo não criam atendimento sozinhas. É a mensagem nova que faz o grupo chegar ao Whazing.

***

## ⚙️ Opções relacionadas (opcionais)

Na aba **Mensagens** de Configurações → Atendimento existem opções que mudam como os grupos aparecem no atendimento:

| Opção | O que faz |
| --- | --- |
| **Alinhar mensagens por remetente em grupos** | Em tickets de grupo, alinha as mensagens do **atendente logado à direita** e as dos **demais atendentes à esquerda**. Não afeta canais oficiais nem tickets individuais |
| **Pacote de arquivos no chat** | Quando **duas ou mais mídias** são enviadas em sequência, mostra no chat um cartão com o botão para baixar todas em um único arquivo ZIP |

> 💡 Essas opções **não são necessárias** para liberar grupos. Elas só melhoram a leitura das conversas.

***

## 🧰 Solução de problemas

| Situação | O que verificar |
| --- | --- |
| **A aba “Grupos do WhatsApp” não aparece** | O plano do cliente não tem a opção **Grupos** habilitada (passo 1) |
| **A opção “Ignorar Grupos” não aparece no canal** | O tipo de canal não oferece esse filtro (veja a tabela do passo 3) |
| **O grupo ainda não aparece no atendimento** | Nenhuma mensagem nova foi recebida depois da liberação (passo 5) |
| **Salvei, mas a mudança não valeu** | As conexões não foram reiniciadas (passo 4) |
| **Mesmo com o canal liberado, nada chega** | Confira se **Ignorar Mensagens de Grupo** está desligada nas configurações de atendimento (passo 2) |
| **O sistema ficou mais lento** | Grupos consomem mais recursos; avalie liberar apenas os canais realmente necessários |

***

## 📌 Observação importante

* Revise **os três pontos de configuração**: o plano, a opção global em **Atendimento → Grupos do WhatsApp** e a opção do canal.
* Por padrão, os grupos vêm **desabilitados**.
* A funcionalidade pode demandar mais recursos, o que pode causar travamentos ou perdas de desempenho no sistema.

***

## 👣 Próximos passos

* [WhatsApp — outros recursos](README.md)
* [Canais disponíveis](../../canais-disponiveis/canais-disponiveis.md)
* [Importar mensagens do WhatsApp](importar-mensagens-whatsapp.md)
* [Sincronizar mensagens (API PLUS / WuzApi)](sincronizar_mensagens_api_plus.md)
