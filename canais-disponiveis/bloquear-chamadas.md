---
icon: phone-off
---

# 📵 Bloquear Chamadas do WhatsApp

**O que é:** uma configuração do canal WhatsApp que faz o número **recusar automaticamente as chamadas de voz** recebidas e, se você quiser, **enviar uma mensagem automática** para quem ligou — como se dissesse *"aqui não atendemos ligações, envie uma mensagem"*.

**Para que serve:** evitar que clientes liguem e fiquem sem resposta, poupar a equipe de chamadas indevidas e impedir que chamadas abram atendimentos no sistema.

> 📸 **Sugestão de print:** card "Chamadas de Voz" das Configurações Avançadas do canal, com as opções visíveis.

***

## Onde encontrar

A configuração fica dentro do cadastro do **canal** (conexão) do WhatsApp:

1. No menu lateral, acesse **Canais / Sessões**;
2. Localize o canal desejado e clique no botão **Configurações**;
3. No modal que abrir, clique na aba **Configurações Avançadas**;
4. Procure o card **Chamadas de Voz**.

> ⚠️ A tela **Canais / Sessões** é acessada somente por usuários com perfil **Administrador** ou **Supervisor**.

> 📸 **Sugestão de print:** tela Canais / Sessões com o botão "Configurações" de um canal destacado.

***

## O que existe no card "Chamadas de Voz"

### 1. Não criar ticket ao receber chamadas

**O que faz:** quando alguém liga para o número, o sistema **não abre um atendimento (ticket)** por causa da chamada.

**Quando usar:** é a forma mais simples de ignorar chamadas. Elas continuam acontecendo no WhatsApp, mas não geram trabalho no sistema.

> 💡 Com essa opção **ligada**, a opção de recusar chamadas **não aparece**. As duas funcionam como alternativas: ou você apenas ignora a chamada, ou recusa e envia mensagem.

### 2. Recusar chamadas no WhatsApp

**O que faz:** o sistema **rejeita automaticamente** as chamadas recebidas. Quem liga ouve que a chamada não foi completada, sem que ninguém precise rejeitar manualmente.

**Como fazer:** ligue o botão **"Recusar chamadas no Whatsapp (necessário reiniciar conexão)"**.

**O que acontece depois:** todas as chamadas para esse número serão recusadas automaticamente.

> ⚠️ **Importante:** depois de salvar, **reinicie a conexão** do canal (desconecte e conecte novamente) para a recusa começar a valer.

> ⚠️ **Disponibilidade:** essa opção existe somente nos canais WhatsApp **não oficiais** (WuzAPI, WhatsApp PLUS, Multi-WA e Baileys). Nos canais **API Oficial (WABA)** e **WhatsApp via Hub** ela não é exibida — nesses casos, utilize a opção **"Não criar ticket ao receber chamadas"**.

### 3. Mensagem ao recusar a chamada

**O que faz:** quando a chamada é recusada, o sistema **envia uma mensagem automática** para quem ligou, explicando por que a chamada não foi atendida.

**Como fazer:**

1. Ligue a opção **"Recusar chamadas no Whatsapp"**;
2. Vai aparecer o campo **"Mensagem a ser enviada ao cliente ao recusar a chamada (necessário reiniciar a conexão)"**;
3. Escreva a mensagem que o cliente receberá. Exemplo: *"Olá! Não atendemos chamadas por WhatsApp. Por favor, envie sua mensagem por texto que responderemos em seguida. Obrigado!"*;
4. Clique em **Salvar**;
5. **Reinicie a conexão** do canal (desconecte e conecte de novo).

No campo também é possível:

* **Inserir emojis** — pelo ícone de carinha no canto do campo;
* **Inserir variáveis do sistema** — pelo ícone de variável no canto, como o **nome do cliente** (`{{name}}`), para personalizar a mensagem.

**O que acontece depois:** sempre que alguém ligar, a chamada será recusada e a pessoa receberá sua mensagem orientando a falar por texto. Essa mensagem entra como uma conversa normal e pode gerar atendimento normalmente.

> 📸 **Sugestão de print:** campo "Mensagem a ser enviada ao cliente ao recusar a chamada" preenchido, com os ícones de emoji e variáveis.

***

## Quando usar cada combinação

| Situação | O que ativar |
| --- | --- |
| Não quero que chamadas gerem atendimentos | **Não criar ticket ao receber chamadas** |
| Quero recusar as ligações e avisar o cliente | **Recusar chamadas no WhatsApp** + mensagem preenchida |
| Quero recusar sem enviar mensagem | **Recusar chamadas no WhatsApp** (deixe o campo vazio) |
| Número em API Oficial (WABA / Hub) | Somente **Não criar ticket ao receber chamadas** está disponível |

***

## E quem liga, com quem fala?

Duas observações importantes sobre chamadas no sistema:

### Atender chamadas pelo sistema (Wavoip / WaCalls)

O Whazing também permite o caminho **contrário**: em vez de bloquear, **fazer e receber chamadas** direto pela tela de atendimento, usando integrações de telefonia:

* **Wavoip** — configurado no campo **"Token para chamadas whatsapp"**, no mesmo card **Chamadas de Voz**;
* **WaCalls** — integração de chamadas da API Oficial.

Guias: [Wavoip](../integracoes/telefonia/configurar_wavoip.md) · [WaCalls](../integracoes/telefonia/wacalls.md).

### Permissão de chamadas no atendimento

Existe ainda uma configuração que controla, por canal, **quais usuários têm permissão de fazer chamadas** pelo atendimento — o atendente vê um aviso pedindo permissão ao tentar ligar. Essa permissão é **independente** da recusa automática desta página: a recusa acontece no número, antes de envolver qualquer atendente.

***

## Problemas comuns

**Ativei a recusa, mas as chamadas continuam passando.**
Confirme se você **reiniciou a conexão** do canal depois de salvar (desconectar e conectar de novo). Sem isso, a recusa e a mensagem não entram em vigor.

**A mensagem de recusa não está sendo enviada.**
Verifique se a recusa está ativa, se a mensagem foi salva e se a conexão foi reiniciada após o salvamento.

**A opção "Recusar chamadas" não aparece no meu canal.**
Ela só existe para canais WhatsApp não oficiais (WuzAPI, PLUS, Multi-WA, Baileys). Em canais API Oficial (WABA / Hub), utilize a opção **"Não criar ticket ao receber chamadas"**.

**Ativei "Não criar ticket" e a opção de recusar sumiu.**
É o comportamento esperado: com "Não criar ticket ao receber chamadas" ligado, a recusa não é exibida. Desligue a primeira opção se quiser usar a recusa com mensagem.

**Quero bloquear ligações só para alguns atendentes.**
A recusa automática é por **canal** — vale para o número inteiro. Para limitar quem pode ligar/receber chamadas pelo atendimento, utilize as permissões de chamada do canal e as integrações de telefonia.
