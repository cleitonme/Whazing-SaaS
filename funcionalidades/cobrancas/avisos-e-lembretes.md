---
icon: bullhorn
---

# 🔔 Avisos e lembretes

Os **avisos** são as mensagens automáticas de cobrança enviadas ao cliente pelo WhatsApp. Eles economizam o trabalho de lembrar cada cliente manualmente.

> 💡 **Em palavras simples:** o aviso é uma mensagem pronta, com os dados da fatura e o link de pagamento, enviada no momento certo.

***

## 🗂️ Os quatro tipos de aviso

| Aviso | Quando é usado |
| --- | --- |
| **Fatura gerada** | Quando a cobrança é criada |
| **Lembrete de vencimento** | Antes do vencimento |
| **Aviso de atraso** | Depois do vencimento |
| **Confirmação de pagamento** | Quando o pagamento é confirmado |

Cada um tem o seu próprio texto, canal e modo de envio, configurados em **Cobranças → Configurações → Automação** — veja [Configurações de cobrança](configuracoes-de-cobranca.md).

***

## ⏰ Como o envio automático funciona

* As automações rodam **uma vez por dia**, no **horário** definido nas configurações (hora do servidor);
* O **lembrete** usa os campos "dias antes do vencimento" e "reenviar a cada (dias)";
* O **aviso de atraso** usa "primeiro aviso após o vencimento" e "reenviar a cada (dias)";
* **Cobrança paga ou cancelada não recebe lembrete**;
* O **canal de envio** pode ser fixo na configuração; em branco, o sistema usa o canal do **último atendimento** do cliente;
* Se o aviso estiver **desligado**, ele não é enviado automaticamente — mas continua podendo ser enviado **à mão**.

> ⚠️ O orçamento **não recebe** aviso de cobrança. Para cobrar, converta em cobrança primeiro.

***

## 📨 Enviar um aviso à mão

Serve para disparar agora um dos quatro avisos, sem esperar a rotina do dia.

### Pela lista de cobranças

1. Em **Cobranças** → aba **Cobranças**, abra o menu **⋮** de uma fatura **Em aberto** ou **Paga**;
2. escolha **Enviar aviso**;
3. o tipo vem escolhido (**Lembrete de vencimento** por padrão) — troque se quiser;
4. confira a **prévia** e clique em **Enviar agora**.

### Pelo botão do topo

1. Clique em **Enviar aviso**, no topo da página;
2. escolha o **Cliente** (busca com 2 letras ou mais);
3. escolha o **Tipo do aviso**;
4. escolha a **Fatura**;
5. confira a prévia e confirme o envio.

> 💡 A lista de faturas mostra **só as compatíveis** com o tipo escolhido:
> * **Confirmação de pagamento** → somente faturas **pagas**;
> * os outros três avisos → somente faturas **em aberto** (que têm link de pagamento).

> ⚠️ **Não existe envio de mentira:** a mensagem é real e vai para o WhatsApp do cliente selecionado. Nada é enviado ao abrir a tela — só depois da confirmação.

***

## 👀 A prévia

Antes de enviar, a tela mostra exatamente o que vai sair:

* o **canal** que vai enviar;
* o **modo** (Texto, Template oficial ou Com botões);
* os **valores das variáveis** (cliente, valor, vencimento, número da fatura, descrição, link);
* o **corpo da mensagem** e os **botões**, quando houver;
* os **problemas que impedem o envio**, se existirem.

A mensagem **não é editável** nessa janela, de propósito: o que sai aqui é exatamente o que a automação enviaria — senão o teste não testaria nada. Para texto livre com o link, use o **Enviar** da própria fatura.

***

## 🚫 O que impede o envio

| Aviso na tela | O que significa | Como resolver |
| --- | --- | --- |
| **A fatura está cancelada e não recebe avisos** | A cobrança foi cancelada | Emita outra cobrança |
| **Este documento é um orçamento...** | É um orçamento, não uma fatura | Converta em cobrança |
| **A confirmação de pagamento só pode ser enviada para uma fatura paga** | A fatura ainda não está paga | Dê baixa na fatura primeiro |
| **Nenhum canal de envio** | Não há canal definido nem vínculo com o cliente | Escolha um canal nas configurações de automação, ou vincule um canal ao cliente |
| **A fatura ainda não tem link de pagamento** | A cobrança nunca foi enviada ao cliente | Envie a fatura para gerar o link |
| **A mensagem deste aviso está vazia** | Falta texto, template ou botões | Preencha o modelo nas configurações de automação |

Há ainda um aviso **que não bloqueia**:

> _"O envio automático deste aviso está desligado. O envio à mão continua liberado e usa o modelo salvo."_

***

## ✅ Depois do envio

O sistema responde com o resultado:

| Resultado | Significado |
| --- | --- |
| **Mensagem enviada** | Saiu para o WhatsApp do cliente |
| **Este aviso já foi enviado agora. Aguarde um minuto para reenviar.** | Proteção contra clique repetido — nada é enviado em duplicidade |
| **Nenhum canal de envio disponível** | Falta canal |
| **A mensagem configurada está vazia** | Falta conteúdo |
| **Este aviso está desligado nas configurações** | A automação daquele tipo está desligada |
| **Falha no envio: ...** | O motivo devolvido pela integração aparece na mensagem |

O envio aparece no **Histórico** da cobrança como **"Aviso enviado"** ou **"Falha no envio do aviso"**, com o tipo do aviso e se foi manual.

***

## 🧪 Testar o envio pela configuração

Em **Configurações → Automação**, cada uma das quatro mensagens tem o botão **Testar envio**.

* usa a **configuração já salva** — se você acabou de alterar o texto, **salve antes de testar**;
* pede para escolher o **cliente**, e a **mensagem é real**;
* é a forma recomendada de conferir o texto, o template e o canal antes de deixar o automático rodando.

> 💡 O teste **não envia dado fictício**: ele usa uma fatura real do cliente escolhido.

***

## ❓ Perguntas frequentes

### O aviso sai sem link de pagamento?

Não. Os avisos de fatura gerada, lembrete e atraso levam o cliente ao link; se a fatura ainda não tem link, o envio é bloqueado com essa explicação. Para gerar o link, envie a fatura ao cliente.

### Posso mudar o texto de um aviso já configurado?

Sim, em **Configurações → Automação**. O novo texto passa a valer para os próximos envios.

### Recebi "duplicate". O cliente recebeu duas vezes?

Não. O sistema barra o reenvio do **mesmo aviso** no intervalo de um minuto — é proteção contra clique repetido.

### O aviso automático respeita cobrança já paga?

Sim. Cobrança paga ou cancelada não recebe lembrete.

### Onde vejo o que foi enviado?

No **Histórico** de cada cobrança, no menu **⋮** da lista.

***

## 👣 Próximos passos

* [Configurações de cobrança](configuracoes-de-cobranca.md) — texto, canal e modo de cada aviso;
* [Cobranças no Chatbot](cobrancas-no-chatbot.md) — deixar o bot consultar as faturas do cliente;
* [Relatórios de cobranças](relatorios-de-cobrancas.md) — acompanhar recebidos e vencidos.
