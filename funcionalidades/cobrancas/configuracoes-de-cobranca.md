---
icon: gear
---

# ⚙️ Configurações de cobrança

Este é o lugar onde o **administrador** define como o módulo funciona: meios de pagamento, aparência da fatura, mensagens, automações e permissões.

***

## 📍 Como abrir

**Cobranças** (menu lateral) → botão **Configurações**, no topo da página.

O botão só aparece para **administrador**.

A janela tem cinco abas: **Meio de pagamento**, **Fatura**, **Envio**, **Automação** e **Permissões**.

> 💡 O botão **Salvar** do rodapé grava **todas as abas em sequência**: primeiro os meios de pagamento, depois fatura, permissões, mensagens e automação. Se alguma etapa falhar, a sequência para e o erro é mostrado — o que já foi gravado fica gravado.

***

## 💳 Aba Meio de pagamento

É onde o dinheiro das cobranças é recebido. A aba começa com a **grade de provedores** disponíveis:

| Provedor | O que oferece |
| --- | --- |
| **InfinitePay** | O cliente escolhe a forma de pagamento na tela do provedor |
| **Asaas** | Pix, boleto e cartão de crédito |
| **PushinPay** | Somente Pix |
| **Stripe** | Pix, boleto e cartão de crédito |

Vários meios podem ficar **ativos ao mesmo tempo** — mas só um é configurado por vez. Clique no card do provedor para abrir o painel dele.

> ⚠️ O aviso da tela é importante: **o dinheiro das cobranças cai na conta do provedor configurado aqui**. Confira os dados antes de salvar.

### No painel do provedor

**Nome do meio de pagamento** — é o texto que o cliente lê no botão de pagamento da fatura. Em branco, usa o nome padrão.

**Ativo** — liga ou desliga o meio. Desligado, ele **não é oferecido ao cliente** nem aparece na criação de cobranças.

**Credenciais** — os campos mudam conforme o provedor (chave de API, token, ambiente de produção ou sandbox etc.).

* Campos marcados como secretos **nunca voltam** preenchidos, por segurança. Deixe em branco para manter o que está salvo e preencha só quando quiser substituir;
* Quando um campo já tem valor salvo, aparece a dica **"Já configurado. Preencha somente para substituir."**

> 💡 As formas de pagamento, as taxas e as notificações só aparecem depois que o meio está **ativo**.

### Formas de pagamento e taxas

Para cada forma que o provedor oferece:

| Campo | O que é |
| --- | --- |
| **Nome exibido ao cliente** | Como a forma aparece na página de pagamento |
| **Taxa** | **Sem taxa**, **Valor fixo** ou **Percentual** |
| **Valor (R$) / Percentual (%)** | O valor da taxa escolhida |
| **Cobrar do cliente** | Ligado, a taxa é somada ao valor que o cliente paga |

Com **Cobrar do cliente** desligado, aparece o aviso: _"A taxa fica registrada, mas não é somada ao valor do cliente."_

> 💡 Quando a taxa é cobrada do cliente, a lista de cobranças mostra o **total cobrado** e, embaixo, o valor original mais o acréscimo.

### Limite por cobrança

Alguns provedores permitem definir um **Limite por cobrança (R$)**. Acima desse valor, aquela forma **não é oferecida** — nem ao cliente, nem ao atendente. Deixe em branco para não limitar.

### Notificações de pagamento

É o que faz o sistema saber que o cliente pagou. O gerenciamento depende do provedor:

* **Configuradas automaticamente em cada cobrança** — quando o provedor não tem API de notificações: nada a fazer;
* **Webhook gerenciado pelo sistema** — aparece um selo com o estado:

| Estado | Significado |
| --- | --- |
| **Não configurado** | Ainda não foi registrado no provedor |
| **Ativo** | Recebendo confirmações normalmente |
| **Interrompido** | A fila parou; use **Reativar fila** |
| **Desativado** | Desligado |
| **Com erro** | Falhou; o motivo aparece abaixo do selo |

Botões disponíveis:

* **Reconfigurar** — registra as notificações de novo no provedor;
* **Reativar fila** — volta a processar as confirmações (quando o estado é *Interrompido*);
* **Reprocessar pendentes** — tenta novamente os eventos que ficaram para trás.

**Configuração manual** — se a configuração automática não foi concluída, a tela mostra a **URL de notificação** (com botão de copiar) e a **lista de eventos** a assinar. Nesse caso, cadastre a URL no painel do provedor e assine os eventos indicados.

> ⚠️ Em **Meio de pagamento**, o sistema pede o **e-mail da empresa** antes de configurar as notificações. Preencha os dados da empresa primeiro (aba Fatura).

### Testar e remover

* **Testar conexão** — salva as credenciais que estão na tela e confirma a conexão com o provedor. Retorna **"Conexão confirmada."**;
* **Remover** — apaga a configuração do meio de pagamento. O sistema avisa: _as cobranças já enviadas continuam válidas no provedor, mas o sistema deixa de receber as confirmações de pagamento dele_.

### Erros comuns desta aba

O sistema mostra mensagens específicas, entre elas:

* **Informe a chave de API do gateway e salve antes de ativar** — falta credencial;
* **Escolha o ambiente do gateway: produção ou sandbox** — falta selecionar o ambiente;
* **A chave de API não pertence ao ambiente escolhido** — chave de sandbox em produção, ou o contrário;
* **Habilite ao menos uma forma de pagamento neste gateway** — todas as formas estão desmarcadas;
* **A chave foi aceita, mas não tem permissão para esta operação** — use uma chave com acesso de escrita;
* **Formas de pagamento não habilitadas na conta do gateway** — ative no painel do provedor ou desmarque aqui;
* **Muitas solicitações ao gateway** — aguarde um instante e tente de novo.

***

## 🧾 Aba Fatura

Personaliza a **página que o cliente abre pelo link**. Campo em branco não aparece na fatura.

### Identidade visual

| Campo | O que é |
| --- | --- |
| **Cor principal** | Cor em hexadecimal de 6 dígitos, ex.: `#5690F0`. Em branco, usa a cor do sistema. Há seletor de cor ao lado do campo |
| **Logo** | PNG, JPG, WEBP ou GIF, **até 2 MB**. Mostra prévia e tem botão para remover |

### Dados da empresa na fatura

| Campo | O que é |
| --- | --- |
| **Nome exibido** | O nome da empresa que o cliente vê |
| **CPF/CNPJ** | Documento da empresa |
| **WhatsApp** | Número de contato |
| **E-mail** | E-mail de contato |
| **Endereço** | Endereço da empresa |
| **Site** | Endereço do site |
| **Observações** | Texto livre, até 500 caracteres |

### Atendimento na página pública

Escolha por onde o cliente pode falar com a empresa a partir do link da fatura:

| Opção | O que mostra |
| --- | --- |
| **Sem atendimento** | Nenhum botão de contato na página |
| **WhatsApp** | Botão que abre conversa no número informado (só dígitos, de preferência com o código do país) |
| **Webchat** | Botão que abre o WebChat de um canal configurado nas conexões |

Para o **Webchat** ainda é possível definir **abrir o chat automaticamente**, o **atraso para abrir** (em milissegundos) e a **posição do botão** (direita ou esquerda).

> ⚠️ O canal de Webchat só abre nos domínios cadastrados na configuração dele. Inclua o domínio do sistema lá, senão o chat não aparece no link público.

***

## ✉️ Aba Envio

Define o texto que **pré-preenche** a mensagem no momento de enviar.

| Campo | O que é |
| --- | --- |
| **Mensagem padrão do envio** | Texto que acompanha o link da cobrança |
| **Mensagem padrão do envio de orçamento** | Texto usado no envio de orçamento, **no lugar** da mensagem de cobrança |

* O atendente **edita ou apaga** o texto a cada envio;
* O link é anexado automaticamente **depois** do texto;
* Em branco, o envio sai **só com o link**;
* Nada disso fica gravado na cobrança nem no histórico — é só o valor inicial do campo.

> 💡 A mensagem de orçamento é separada de propósito: o orçamento **ainda não é cobrança**, então o texto não deve falar de pagamento nem de vencimento.

***

## 🤖 Aba Automação

### Horário das operações automáticas

Define **a que horas** o sistema roda as automações de cobrança. O horário é o **do servidor**, e a rotina roda **uma vez por dia**.

> 💡 Cobrança **paga ou cancelada não recebe lembrete**.

### Lembrete antes do vencimento

| Campo | O que é |
| --- | --- |
| **Enviar lembrete de vencimento** | Liga/desliga o lembrete |
| **Dias antes do vencimento** | Quantos dias antes o lembrete é enviado |
| **Reenviar a cada (dias)** | De quantos em quantos dias o lembrete se repete |

### Aviso de atraso

| Campo | O que é |
| --- | --- |
| **Enviar aviso de atraso** | Liga/desliga o aviso |
| **Primeiro aviso após o vencimento (dias)** | Quantos dias depois do vencimento o primeiro aviso sai |
| **Reenviar a cada (dias)** | De quantos em quantos dias o aviso se repete |

### Padrões das recorrências novas

| Campo | O que é |
| --- | --- |
| **Aberta / Preliminar (rascunho)** | Como as faturas das **novas** recorrências nascem |
| **Enviar a fatura automaticamente** | Se a fatura é enviada sozinha ao ser gerada |
| **Só gerar a próxima quando a anterior estiver paga** | Se a geração espera o pagamento |

> 💡 São **padrões**: cada recorrência pode escolher diferente no próprio cadastro. Veja [Recorrências](recorrencias.md).

### Mensagens enviadas

São **quatro mensagens**, uma para cada momento:

| Mensagem | Quando é usada |
| --- | --- |
| **Fatura gerada** | Quando a cobrança é criada |
| **Lembrete de vencimento** | Antes do vencimento |
| **Aviso de atraso** | Depois do vencimento |
| **Confirmação de pagamento** | Quando o pagamento é confirmado |

Cada uma tem:

| Campo | O que é |
| --- | --- |
| **Enviar esta mensagem** | Liga/desliga aquele aviso |
| **Canal de envio** | Qual número envia. Em branco, usa o canal do **último atendimento** do cliente |
| **Modo** | **Texto**, **Template oficial** ou **Com botões** |
| **Mensagem** | O texto do aviso |

**Variáveis disponíveis** para montar o texto:

| Variável | O que insere |
| --- | --- |
| **Nome do cliente** | O nome do contato |
| **Valor** | O valor da fatura |
| **Vencimento** | A data de vencimento |
| **Número da fatura** | O número da cobrança |
| **Descrição** | A descrição da fatura |
| **Link de pagamento** | O link público |

> ⚠️ No modo **Template oficial** é preciso escolher o template. E **modelo com mídia não pode ser usado no envio automático** — o sistema avisa.
>
> ⚠️ No modo **Com botões** é preciso preencher a mensagem **e** os botões. No modo **Texto**, a mensagem é obrigatória.

**Testar envio** — cada mensagem tem esse botão (veja [Avisos e lembretes](avisos-e-lembretes.md)). Ele usa a **configuração já salva** e envia uma **mensagem real** ao cliente escolhido.

***

## 🔐 Aba Permissões

### Permitir produtos avulsos

| Estado | O que acontece |
| --- | --- |
| **Ligado** (padrão) | Faturas, orçamentos e recorrências aceitam itens digitados na hora |
| **Desligado** | Só entram **produtos cadastrados no catálogo**. Itens avulsos que já estão em documentos existentes continuam valendo |

> 💡 Isso **não é permissão de perfil**: vale para todo mundo, inclusive o administrador, porque é uma regra do documento.

### Matriz de permissões

A tabela cruza as **ações** (linhas) com os **perfis** (colunas): Administrador, Supervisor, Supervisor de fila e Atendente.

As ações são **Consultar**, **Criar**, **Editar**, **Cancelar**, **Enviar**, **Aplicar desconto/acréscimo** e **Dar baixa**.

* Marque a caixa para liberar a ação àquele perfil;
* A coluna **Administrador** fica marcada e bloqueada — o administrador sempre pode tudo;
* **Dar baixa** é separado de **Editar** de propósito: confirmar dinheiro recebido é uma responsabilidade diferente de ajustar uma fatura.

> 💡 A matriz já vale na hora: ao salvar, as telas abertas recarregam as permissões e os botões aparecem ou somem sem precisar de F5.

***

## ❓ Perguntas frequentes

### Preciso clicar em Salvar em cada aba?

Não. O **Salvar** do rodapé grava todas as seções em sequência, com uma única notificação no fim.

### A senha/token do provedor aparece de novo na tela?

Não. Campos secretos nunca voltam preenchidos. Para trocar, digite o novo valor e salve.

### Posso ter Pix no Asaas e cartão no Stripe ao mesmo tempo?

Sim. Vários meios podem ficar ativos; o cliente escolhe entre as formas habilitadas.

### Desliguei um meio de pagamento. As cobranças antigas param de funcionar?

Não. Elas continuam válidas no provedor; o sistema apenas deixa de receber as confirmações de pagamento daquele meio.

### O teste de conexão envia mensagem ao cliente?

Não. **Testar conexão** só confirma as credenciais. Quem envia mensagem real é o **Testar envio** das mensagens de automação.

***

## 👣 Próximos passos

* [Avisos e lembretes](avisos-e-lembretes.md) — como os quatro avisos funcionam na prática;
* [Como criar e enviar uma cobrança](como-criar-e-enviar-uma-cobranca.md) — o dia a dia do módulo;
* [Recorrências](recorrencias.md) — onde os padrões da aba Automação são aplicados.
