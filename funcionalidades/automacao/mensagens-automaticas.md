# Mensagens Automáticas

As **Mensagens Automáticas** permitem configurar mensagens que serão enviadas automaticamente em determinados momentos do atendimento.

Você pode configurar mensagens para:

* Saudação, quando o atendente aceita o atendimento;
* Despedida, quando o atendimento é encerrado;
* Transferência, quando o atendimento é encaminhado para outro setor.

Cada tipo de mensagem pode ser **ativado ou desativado individualmente**.

### Onde encontrar

No menu do sistema, acesse:

**Configurações de Atendimento → Mensagens Automáticas**

***

## Selecionando o canal

Antes de configurar as mensagens, é necessário selecionar o canal em que elas serão utilizadas.

Na opção **Canal**, selecione a conexão desejada.

**Exemplo:**

> Comercial (WhatsApp Plus)

As configurações de mensagens automáticas são feitas de acordo com o canal selecionado.

> **Importante:** se sua empresa possui vários canais ou números, verifique se você está configurando o canal correto antes de salvar as alterações.

***

## Mensagem de Saudação

A **Mensagem de Saudação** é enviada automaticamente quando um atendente **aceita o atendimento**.

Ela pode ser utilizada para informar ao cliente que um atendente assumiu a conversa.

#### Exemplo

> Olá \{{firstName\}}, em breve você será atendido...

Para utilizar essa mensagem, deixe a opção **Ativo** habilitada.

#### Personalizando a mensagem

Você pode utilizar variáveis para inserir automaticamente informações do contato ou do atendimento.

Algumas variáveis disponíveis:

* `{{name}}` — nome do contato;
* `{{firstName}}` — primeiro nome do contato;
* `{{protocol}}` — número do protocolo do atendimento.

#### Exemplo

Em vez de enviar:

> Olá, em breve você será atendido.

Você pode configurar:

> Olá \{{firstName\}}, em breve você será atendido. Seu protocolo é \{{protocol\}}.

O sistema substituirá as variáveis pelas informações correspondentes no momento do envio.

***

## Mensagem de Despedida

A **Mensagem de Despedida** é enviada automaticamente quando o atendimento é encerrado.

Ela pode ser utilizada para agradecer o contato e informar ao cliente que o atendimento foi finalizado.

#### Exemplo

> Agradecemos o seu contato! \{{firstName\}}

Para utilizar essa mensagem, deixe a opção **Ativo** habilitada.

#### Exemplo personalizado

Você pode configurar:

> Agradecemos o seu contato, \{{firstName\}}! Caso precise de ajuda novamente, estaremos à disposição.

Também é possível utilizar o protocolo:

> Agradecemos o seu contato, \{{firstName\}}! Seu protocolo de atendimento foi \{{protocol\}}.

***

## Mensagem de Transferência

A **Mensagem de Transferência** é enviada automaticamente quando o atendimento é transferido para outro setor.

Ela permite avisar o cliente que a conversa está sendo encaminhada para outra equipe.

#### Exemplo

> Você está sendo transferido...

Para utilizar essa mensagem, deixe a opção **Ativo** habilitada.

#### Exemplo personalizado

> Olá \{{firstName\}}, seu atendimento está sendo transferido para o setor responsável. Em breve alguém da equipe continuará o atendimento.

***

## Variáveis disponíveis

As variáveis permitem personalizar automaticamente as mensagens.

| Variável        | O que significa                    |
| --------------- | ---------------------------------- |
| `{{name}}`      | Nome completo do contato           |
| `{{firstName}}` | Primeiro nome do contato           |
| `{{protocol}}`  | Número do protocolo do atendimento |

#### Exemplo

Mensagem configurada:

> Olá \{{firstName\}}! Seu atendimento de protocolo \{{protocol\}} foi recebido.

O cliente poderá receber algo semelhante a:

> Olá João! Seu atendimento de protocolo 123456 foi recebido.

***

## Ativando ou desativando mensagens

Cada mensagem possui sua própria opção **Ativo**.

Isso significa que você pode escolher quais mensagens serão enviadas automaticamente.

Por exemplo:

* **Saudação:** ativada
* **Despedida:** ativada
* **Transferência:** desativada

Nesse caso, o sistema enviará automaticamente a saudação e a despedida, mas não enviará mensagem quando o atendimento for transferido.

> **Dica:** antes de ativar uma mensagem automática para toda a equipe, faça um teste com o canal selecionado para confirmar se o texto está exatamente como deseja.

## Resumo

| Mensagem          | Quando é enviada                                    |
| ----------------- | --------------------------------------------------- |
| **Saudação**      | Quando o atendente aceita o atendimento             |
| **Despedida**     | Quando o atendimento é encerrado                    |
| **Transferência** | Quando o atendimento é transferido para outro setor |

As mensagens automáticas ajudam a padronizar a comunicação com os clientes e reduzem a necessidade de o atendente enviar manualmente mensagens repetitivas.
