# Chat Externo na Recepção Inteligente

Na aba **Automação** da integração existe o card **Uso do chat externo**. Ele permite que a Recepção Inteligente envie ao cliente um **link para continuar a conversa pelo navegador**, em vez de seguir tudo pelo WhatsApp.

> 💡 **Para que serve:** reduzir o consumo de mensagens oficiais. Quando o cliente aceita o link, a conversa continua no navegador e a IA responde por lá.

> 🆕 **Novidade na documentação:** este card já existe na tela, mas ainda não estava documentado.

---

## 📍 Onde configurar

1. Acesse **Automação e Integrações → IA e Integrações**.
2. Clique em **Editar** na integração da Recepção Inteligente.
3. Abra a aba **Automação**.
4. Localize o card **Uso do chat externo** (subtítulo *“Continuar atendimento pelo navegador”*).

> ⚠️ As alterações só valem depois de clicar em **Salvar**.

---

## 📌 Antes de começar

* Funciona **apenas em WABA e Hub WhatsApp**. Clientes de outros canais não são afetados e o fluxo segue normalmente.
* O recurso precisa estar **ativo em Configurações → Atendimento**.
* Quando o Chat Externo estiver ativo, as **próximas mensagens automáticas** serão enviadas pelo Chat Externo, e não pelo WhatsApp.

---

## 🎛️ Quando usar o chat externo

O campo **Quando usar o chat externo** tem quatro opções:

| Opção | O que faz |
| --- | --- |
| **Nunca usar automaticamente** | A Recepção Inteligente não envia o link. O atendente ainda pode enviar manualmente |
| **Somente quando o fluxo ou o atendente enviar** | Não envia sozinha; as regras abaixo valem para links enviados pelo fluxo ou pelo atendente neste atendimento |
| **Sempre direcionar clientes elegíveis** | Envia o link na **primeira mensagem** do cliente em WABA ou Hub WhatsApp |
| **Somente em determinadas condições** | Envia o link apenas quando **todas as condições** escolhidas forem atendidas |

> ⚠️ Ao escolher **Sempre direcionar clientes elegíveis**, o sistema pede confirmação: *“Todos os clientes que escreverem por WABA ou Hub WhatsApp nesta integração vão receber o link do chat externo. Deseja continuar?”*. Use essa opção com cuidado.

Com a opção **Nunca usar automaticamente**, o card mostra: *“A Recepção Inteligente não envia o link do chat externo automaticamente.”*

---

## 💬 Mensagem e botão

Estes campos aparecem nos modos **Sempre** e **Somente em determinadas condições**:

| Campo | O que faz | Limite |
| --- | --- | --- |
| **Mensagem enviada ao cliente** | Texto que acompanha o link | 1.024 caracteres |
| **Texto do botão** | O que aparece no botão | 20 caracteres |

* Se a mensagem ficar **em branco**, o sistema usa o texto padrão definido em **Configurações → Atendimento**.
* Se o botão ficar **em branco**, usa o texto padrão **“Abrir Chat”**.

A tela mostra **“Como o cliente vai receber”**, uma prévia da mensagem com o botão — útil para conferir o texto antes de salvar.

---

## 📤 Depois de enviar o link

| Opção | O que faz |
| --- | --- |
| **Aguardar o cliente no navegador (a IA responde lá)** | A IA espera o cliente abrir o link e continua o atendimento no navegador |
| **Continuar respondendo normalmente** | A IA segue respondendo pelo WhatsApp |

### Continuar pelo Chat Externo

O botão **“Continuar atendimento pelo Chat Externo após enviar o link”** vem **ligado** por padrão.

* **Ligado (Sim):** tudo continua pelo Chat Externo.
* **Desligado (Não):** o atendimento continua pelo WhatsApp.

A própria tela explica: *“Sim, continuar tudo pelo Chat Externo. Não, continuar pelo WhatsApp. Padrão: Sim.”*

---

## 🔁 Se o cliente continuar escrevendo pelo WhatsApp

O campo **Se o cliente continuar escrevendo pelo WhatsApp** define o que fazer quando a pessoa insiste no WhatsApp depois de receber o link:

| Opção | O que faz |
| --- | --- |
| **Enviar o link novamente** | Reenvia o link sempre que o cliente escrever |
| **Enviar o link no máximo uma vez** | Reenvia uma única vez |
| **Enviar até X vezes e depois encaminhar para um atendente** | Reenvia até o limite e depois transfere para uma fila |
| **Enviar até X vezes e voltar automaticamente para o WhatsApp** | Reenvia até o limite e retoma o atendimento no WhatsApp |
| **Continuar o fluxo atual** | Ignora a insistência e segue o fluxo normal |

Quando a opção escolhida tem limite:

* **Quantas vezes reenviar o link (X)** — de 1 a 10 (padrão 3).
* **Fila do atendente (opcional)** — para onde transferir depois do limite. Em branco mantém a fila atual.

> 💡 No modo **Somente quando o fluxo ou o atendente enviar**, a tela avisa: *“Vale para links enviados pelo fluxo ou pelo atendente neste atendimento.”*

---

## 🎯 Condições (modo condicional)

No modo **Somente em determinadas condições**, você escolhe quando o link é enviado. A dica da tela: *“Deixe em branco o que não quiser usar. Todas as condições preenchidas precisam ser atendidas.”*

| Condição | O que filtra |
| --- | --- |
| **Canais** | WABA e/ou Hub WhatsApp |
| **Filas** | Somente atendimentos das filas escolhidas |
| **Somente em um horário** | Faixa de **início** e **fim** e os **dias da semana** |
| **Mínimo de mensagens do cliente neste atendimento** | De 0 a 100 mensagens |
| **Tipo de cliente** | Todos, somente clientes novos ou somente clientes que já foram atendidos |
| **Cliente com alguma destas etiquetas** | Etiquetas que o contato precisa ter |
| **Não enviar se o cliente já recebeu o link em outro atendimento** | Evita mandar o link duas vezes para a mesma pessoa |

> 💡 Quanto mais condições você preencher, mais restrito fica o envio. Para começar, use poucas condições e acompanhe o resultado.

---

## ⚙️ Opções avançadas

Dentro de **Opções avançadas** ficam os ajustes finos:

| Opção | O que faz |
| --- | --- |
| **Intervalo mínimo entre reenvios (minutos)** | De 1 a 1.440 (padrão 5) — evita reenviar o link em sequência |
| **Pedir senha ao abrir o link** | **Usar a configuração geral**, **Sim, pedir senha** ou **Não pedir senha** |
| **Mensagens pelo WhatsApp enquanto o cliente usa o chat externo** | **Responder normalmente**, **Ignorar (o atendente ainda vê a mensagem)** ou **Responder com uma mensagem curta e o link** |
| **Mensagem curta** | Aparece só na opção de resposta curta. Em branco usa o texto padrão |
| **Etiqueta se o cliente insistir no WhatsApp (opcional)** | Marca o contato quando ele insiste no WhatsApp |
| **Registrar observação no histórico** | Grava uma observação no atendimento sobre o envio do link |

> 💡 A opção **Ignorar** não esconde a mensagem do atendente: ela só impede a IA de responder pelo WhatsApp enquanto o cliente está no chat externo.

---

## ✅ Como saber se deu certo

* O modo escolhido **não** é “Nunca usar automaticamente”.
* Nos modos **Sempre** e **Condicional**, a mensagem e o botão estão preenchidos (ou os padrões definidos em Configurações → Atendimento).
* O cliente recebe o link no WhatsApp e, ao abrir, continua a conversa no navegador.
* Se o cliente insistir no WhatsApp, a regra de insistência escolhida é aplicada.

> ⚠️ **Teste com um número de teste.** O simulador de conversa **não reproduz** o envio do link do chat externo — ele é apenas exibido como comando simulado. Veja [Simulador de conversa e testes](simulador-de-conversa.md).

---

## ❓ Perguntas frequentes

**O chat externo vale para Instagram, Telegram ou WebChat?**
Não. Ele funciona apenas em **WABA** e **Hub WhatsApp**; os outros canais seguem o fluxo normal.

**Preciso ativar em outro lugar?**
Sim. O recurso precisa estar ativo em **Configurações → Atendimento**, além de configurado aqui.

**O atendente pode enviar o link mesmo com “Nunca usar automaticamente”?**
Sim. Nesse modo a IA não envia sozinha, mas o atendente ainda pode enviar.

**A IA para de responder no WhatsApp?**
Depende do que você escolher em **Depois de enviar o link** e em **Mensagens pelo WhatsApp enquanto o cliente usa o chat externo**.

**Posso limitar por horário?**
Sim, no modo **Somente em determinadas condições**, com faixa de horário e dias da semana.

---

## 👣 Próximos passos

* [Recepção Inteligente](README.md)
* [Criar e ativar a integração](como-ativar-a-integracao.md)
* [Simulador de conversa e testes](simulador-de-conversa.md)
* [Qualificação de leads](qualificacao-de-leads.md)
