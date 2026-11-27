---
icon: robot
---

# 🤖 Cobranças no Chatbot

O editor de chatbot (ChatFlow) tem um bloco chamado **Consultar Faturas**, na categoria **Atendimento**. Ele deixa o bot **consultar as faturas do cliente** e **enviar o link** da fatura escolhida — sem ninguém digitar nada.

> 💡 **Em palavras simples:** o cliente pergunta "tenho algo em aberto?", o bot lista as faturas dele e entrega o link para pagar.

***

## ⚠️ O que o bloco faz — e o que ele não faz

| Ele **faz** | Ele **não faz** |
| --- | --- |
| Consulta as faturas do contato do atendimento | Não cria cobrança |
| Lista o que o cliente pode consultar | Não altera valor, vencimento ou itens |
| Envia o link da fatura escolhida | Não cancela, não dá baixa e não registra pagamento |

O bloco **exige o recurso de Cobranças** no plano ou como adicional. Sem ele, o nó não funciona.

> 💡 Se houver **só uma fatura** na consulta, o bot **já a envia direto**, sem perguntar qual.

***

## ➕ Como adicionar ao fluxo

1. Abra o **Chatbot** e edite o fluxo desejado;
2. na paleta da esquerda, abra a categoria **🎯 Atendimento**;
3. clique em **Consultar Faturas** (cria uma etapa nova) ou **arraste** o bloco para dentro de uma etapa existente;
4. clique na etapa para abrir o painel da direita e configurar as opções.

A configuração é feita em três grupos: **o que consultar**, **como apresentar** e **os textos da conversa**.

***

## 🔎 O que o cliente pode consultar

| Opção | O que libera |
| --- | --- |
| **Faturas em aberto** | Faturas aguardando pagamento. **Já inclui as vencidas** |
| **Faturas pagas** | Faturas já quitadas |

Como o bot se comporta:

* **As duas ligadas** — o bot pergunta primeiro **o que o cliente quer consultar** e depois mostra a lista;
* **Só uma ligada** — o bot vai **direto para a lista** daquele tipo.

> ⚠️ Se as duas estiverem desligadas, o editor avisa: _"Nenhuma consulta ligada. Ligue pelo menos uma — sem isso o nó consulta as faturas em aberto."_

***

## 🎛️ Como apresentar as opções

O campo **Como apresentar as opções** define o formato da lista de faturas:

| Modo | Como funciona |
| --- | --- |
| **Automático (recomendado)** | Usa **botões** até 3 opções e **lista** acima disso |
| **Texto numerado** | Envia as faturas numeradas e o cliente responde com o número |
| **Lista** | Usa o menu de lista do WhatsApp |
| **Botões** | Usa botões de resposta rápida |

**Formato do link**

| Opção | Como funciona |
| --- | --- |
| **Botão quando o canal permitir** | Envia como botão clicável nos canais que aceitam botão de link |
| **Sempre em texto** | Sempre manda o link escrito |

> ⚠️ O **botão de link só existe no WhatsApp oficial, no WhatsApp via hub e na API Plus**. Nos outros canais o link vai em texto automaticamente — não é preciso mudar nada.

**Faturas por página** — quantas faturas aparecem em cada página da lista (de 1 a 10). Vale **só no modo texto numerado**.

***

## 🚪 Permitir sair do fluxo

A opção **Permitir sair do fluxo a qualquer momento** vem **desligada**.

Quando ligada:

* cria uma **4ª saída opcional** no canvas (aba **Condições**), para onde o cliente vai ao escolher sair;
* adiciona uma opção extra — igual a "Voltar" — em **todo menu** da conversa;
* você pode definir o texto do botão **"Sair"** (até 24 caracteres).

> 💡 Use essa saída para encaminhar o cliente a uma fila com atendimento humano.

***

## 🧾 Textos da fatura (com variáveis)

Dois textos usam os **dados da fatura**, com o botão de variável ao lado do campo:

| Campo | Onde aparece |
| --- | --- |
| **Rótulo da fatura na lista** | O texto de cada item da lista de faturas |
| **Mensagem ao enviar a fatura** | O texto que acompanha o link quando a fatura é enviada |

Variáveis disponíveis:

| Variável | O que insere |
| --- | --- |
| **Número** | O número da fatura |
| **Valor** | O valor |
| **Vencimento** | A data de vencimento |
| **Situação** | O status (ex.: "Vencida") |
| **Descrição** | A descrição da fatura |
| **Cliente** | O nome do cliente |
| **Link da fatura** | O link de pagamento |

Abaixo de cada campo há uma **prévia** com uma fatura de exemplo, para você ver como o texto fica antes de salvar.

> ⚠️ O que você **não escrever** não aparece. Se o texto ficar vazio, o item da lista ou a mensagem saem sem aquele conteúdo.

***

## 💬 Mensagens do sistema

Estas mensagens são textos livres (sem variáveis), porque o bot as envia exatamente como estão:

| Campo | Quando é enviada |
| --- | --- |
| **Mensagem inicial** | Ao entrar no bloco |
| **Pergunta do que consultar** | Quando as duas consultas estão ligadas |
| **Pergunta de qual fatura** | Antes de mostrar a lista de faturas |
| **Mensagem depois de enviar a fatura** | Depois que o link é enviado |
| **Quando não há faturas** | Se a consulta não encontrar nada |
| **Quando a fatura não tem link** | Se a fatura escolhida ainda não tem link de pagamento |
| **Quando a resposta não é entendida** | Se o cliente responder algo fora das opções |
| **Quando a consulta falha** | Se houver erro na consulta |

> ⚠️ **"Quando a fatura não tem link"** acontece com cobrança que **nunca foi enviada** ao cliente. Nesse caso o nó sai pela **saída de falha** — ligue essa saída numa fila com atendimento humano.

> 💡 A prévia do editor mostra como a mensagem fica com os dados da fatura. Como o editor não tem um contato real, ela usa uma fatura de exemplo.

***

## 🏷️ Rótulos curtos

Estes são os textos de botões, cabeçalhos e opções. Têm limite de **24 caracteres** por causa dos limites do WhatsApp:

| Campo | Onde aparece |
| --- | --- |
| **Opção "Em aberto"** | Opção do menu "o que consultar" |
| **Opção "Pagas"** | Opção do menu "o que consultar" |
| **Botão do link** | Texto do botão que abre a fatura |
| **Cabeçalho da lista** | Título da lista de faturas |
| **Botão "Voltar"** | Voltar de uma tela para a anterior |
| **Botão "Ver mais"** | Ver a próxima página de faturas |
| **Botão da lista** | Botão que abre a lista |
| **Título da seção da lista** | Cabeçalho da seção dentro da lista |

***

## 🔌 As três saídas fixas

O bloco tem **3 saídas fixas**, configuradas na aba **Condições** da etapa:

| Saída | Quando acontece |
| --- | --- |
| **Fatura enviada** | O link foi entregue ao cliente |
| **Sem faturas** | A consulta não encontrou nada |
| **Falha** | A consulta deu erro — ou a fatura não tem link |

Ligue cada saída a uma próxima etapa, fila ou usuário, como em qualquer outra condição do ChatFlow. A saída de **falha** é a mais importante: mande para uma fila com atendimento humano.

Se você ligou **Permitir sair do fluxo**, existe ainda a **4ª saída**, usada quando o cliente escolhe sair.

***

## 🧪 Testar

Use o botão **Testar** do editor para abrir o **Simulador** e conversar com o fluxo antes de publicar. O simulador mostra as mensagens, as opções e o caminho escolhido.

> ⚠️ O simulador é uma simulação: ele não envia mensagem de verdade ao cliente.

***

## 💡 Exemplo de uso

Um fluxo de cobrança simples:

1. **Boas-vindas** — menu com "1 - Financeiro" e "2 - Falar com atendente";
2. resposta "1" → etapa com **Consultar Faturas** (em aberto e pagas ligadas);
3. **Fatura enviada** → mensagem de agradecimento e **Fazer nada** (ou permanecer no menu);
4. **Sem faturas** → mensagem "Você não tem faturas em aberto" e volta ao menu;
5. **Falha** → transfere para a **fila** de atendimento.

***

## ❓ Perguntas frequentes

### O bot pode criar uma cobrança?

Não. Ele só **consulta** e **envia o link**. Para criar, use o botão **Nova** na aba Cobranças do atendimento ou a tela de Cobranças.

### O bot mostra faturas de outros clientes?

Não. Ele usa sempre o contato do atendimento atual.

### Por que o bloco não apareceu para mim?

O bloco exige o recurso **Cobranças** no plano ou como adicional.

### O cliente pode pagar pelo próprio WhatsApp?

O bot entrega o **link** da página de pagamento. O pagamento acontece na página, com Pix, boleto ou cartão, conforme os meios configurados.

### Posso mudar os textos sem quebrar o fluxo?

Sim. Só respeite o limite de **24 caracteres** nos rótulos curtos e mantenha as variáveis escritas como `{numero}`, `{valor}` etc. — texto digitado errado aparece literalmente na mensagem.

***

## 👣 Próximos passos

* [CHATBOT](../automacao/chatbotinterno-1/README.md) — o guia completo do editor de fluxos;
* [Avisos e lembretes](avisos-e-lembretes.md) — as mensagens automáticas de cobrança;
* [Como criar e enviar uma cobrança](como-criar-e-enviar-uma-cobranca.md) — para o link existir, a fatura precisa ter sido enviada.
