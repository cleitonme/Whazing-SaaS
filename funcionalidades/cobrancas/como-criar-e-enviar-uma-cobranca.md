---
icon: file-invoice-dollar
---

# 🧾 Como criar e enviar uma cobrança

Este guia mostra o caminho completo: montar a fatura, enviar o link ao cliente pelo WhatsApp e acompanhar até o pagamento.

***

## ✅ Antes de começar

1. O módulo **Cobranças** precisa estar liberado no seu plano (ou como adicional);
2. O cliente precisa estar cadastrado em **Contatos**;
3. Para receber pelo sistema, é preciso ter um **meio de pagamento** configurado (Pix, boleto, cartão). Quem configura isso é o administrador, em **Cobranças → Configurações → Meio de pagamento** — veja [Configurações de cobrança](configuracoes-de-cobranca.md).

> 💡 Sem meio de pagamento configurado, a cobrança ainda é criada e o link abre — mas o cliente não consegue pagar pela página. Nesse caso o sistema avisa que nenhum meio está configurado.

***

## 🪜 Passo a passo

### 1. Abra o formulário

Vá em **Cobranças** (menu lateral) → aba **Cobranças** → botão **Nova cobrança**.

Você também pode criar direto do atendimento, na aba **Cobranças** do painel do contato (veja [Cobranças dentro do atendimento](./#cobrancas-dentro-do-atendimento)).

### 2. Escolha o cliente

Digite pelo menos **2 letras** do nome ou do telefone e selecione o contato na lista.

> 💡 Dentro do atendimento o cliente já vem preenchido pelo ticket, e a cobrança fica **vinculada àquela conversa**.

### 3. Preencha os dados da fatura

| Campo | O que é |
| --- | --- |
| **Cliente** | Para quem a cobrança será emitida |
| **Descrição** | Um resumo do que está sendo cobrado (ex.: "Serviço de manutenção") |
| **Vencimento** | A data em que o cliente deve pagar |
| **Itens** | A lista do que está sendo cobrado (veja abaixo) |
| **Desconto** | Valor a abater do total (só aparece para quem tem a permissão de ajustar) |
| **Acréscimo** | Valor a somar ao total (mesma permissão) |
| **Forma de pagamento** | Fixar uma forma para esta cobrança, ou deixar o cliente escolher |
| **Notas internas** | Anotação da equipe; **não aparece para o cliente** |
| **Mensagem personalizada** | Texto que acompanha o link no envio |

### 4. Monte os itens

Cada item tem **descrição**, **quantidade** e **valor unitário**. A descrição é obrigatória.

* **Adicionar item** — cria uma linha em branco para você preencher;
* **Adicionar do catálogo** — escolhe um produto já cadastrado. O nome e o preço do produto são copiados como ponto de partida; quantidade, descrição e valor continuam editáveis;
* O ícone de lixeira remove a linha — a **última linha não pode ser removida**.

> ⚠️ Se o administrador desligou a opção **Permitir produtos avulsos**, os campos de descrição e valor ficam travados e só é possível incluir **produtos do catálogo**. Itens avulsos que já existem em documentos antigos continuam valendo.

### 5. Escolha a forma de pagamento (opcional)

A lista mostra cada forma habilitada no formato **Provedor · Forma** e, embaixo, o **acréscimo** que aquela forma gera (quando existe).

* **Em branco** — o cliente escolhe a forma na página de pagamento. É o mais comum;
* **Escolhida** — a cobrança fica presa àquela forma e o cliente não escolhe.

### 6. Confira o total

O **Total** é sempre **calculado pelo sistema**: soma dos itens, menos o desconto, mais o acréscimo. Não é possível digitar um total diferente.

### 7. Salve

No rodapé há dois botões:

| Botão | O que faz |
| --- | --- |
| **Salvar** | Guarda a cobrança como **Rascunho**. Nada é enviado ao cliente |
| **Salvar e enviar** | Guarda e já envia o link no atendimento do cliente |

> 💡 **Salvar e enviar** só funciona com total maior que zero.

***

## 📤 O envio ao cliente

Ao escolher **Salvar e enviar** (ou **Enviar** no menu de ações da lista), abre a janela de envio:

| Campo | O que é |
| --- | --- |
| **Mensagem personalizada** | Vem preenchida com a **mensagem padrão** configurada. Você pode editar ou apagar a cada envio |
| **Enviar o link como botão** | Envia o link como botão clicável, em vez de texto |
| **Rótulo do botão** | O texto do botão (ex.: "Ver fatura"), até 30 caracteres |

* A mensagem em branco envia **só o link**;
* O link é anexado **automaticamente** depois do texto e **não é repetido** se você já colar o link na mensagem;
* A opção de botão só aparece em canais que aceitam botão de link: **WhatsApp oficial (WABA)**, **WhatsApp via hub** e **API Plus**. Nos outros canais o link vai em texto;
* Com o botão ligado, a mensagem é obrigatória.

> 💡 O texto digitado no envio **não fica gravado** na cobrança nem no histórico: é só a mensagem daquele envio.

**E se não houver atendimento aberto?** O sistema avisa *"Não havia atendimento aberto — copie o link"* e mostra o link para você copiar e entregar por conta própria. A cobrança fica salva do mesmo jeito.

***

## 🔗 O link e a página de pagamento

Cada cobrança ganha um **link público**, no formato:

```
https://seu-dominio/#/cobranca/CÓDIGO
```

Na lista, o menu **⋮** de cada linha tem **Copiar link** e **Histórico**.

### O que o cliente vê

A página abre com a identidade da empresa (cor e logo, se configuradas), os dados da empresa, a descrição, **os itens com quantidade e valor**, o total e o vencimento. A partir daí:

1. o cliente clica em **Pagar agora**;
2. escolhe a **forma de pagamento** (quando a cobrança não tem uma forma fixa) — cada opção mostra o acréscimo, quando houver;
3. se a forma exigir, informa o **CPF ou CNPJ** do pagador;
4. paga por **Pix** (QR Code e código "copia e cola") ou é levado ao checkout do provedor;
5. ao voltar, a página mostra **"Pagamento confirmado em ..."**.

Também pode aparecer o botão **"Falar com o atendimento"**, se a empresa tiver configurado um canal de atendimento para a página da fatura.

> ⚠️ Se a cobrança for **cancelada**, o link deixa de abrir e a página mostra **"Cobrança não encontrada"**.

> 🔒 O link é uma **credencial de acesso**: quem tem o link consegue ver a fatura. Evite publicá-lo em lugares abertos.

***

## 🕘 Acompanhar pelo histórico

O **Histórico** mostra a linha do tempo da cobrança, com data e hora e quem fez cada ação. Os eventos possíveis incluem:

* cobrança criada, alterada e valores ajustados;
* link enviado, orçamento enviado e link aberto pelo cliente;
* orçamento aprovado ou recusado pelo cliente;
* retorno do gateway, pagamento confirmado e baixa manual;
* aviso enviado (e falha no envio do aviso);
* fatura gerada pela recorrência;
* cobrança cancelada e orçamento convertido.

> 💡 O histórico é o melhor lugar para descobrir **por que** um cliente não recebeu a cobrança: falhas de envio e recusas do gateway aparecem registradas ali.

***

## 💵 Dar baixa manual

Use quando o cliente pagou **fora do sistema** (dinheiro, Pix direto na conta, máquina de cartão).

1. Na lista, abra o menu **⋮** da cobrança **Em aberto** e escolha **Dar baixa**;
2. informe a **Data do recebimento**;
3. escolha o **Meio de recebimento**: PIX, Dinheiro, Cartão (máquina), Transferência ou Outro;
4. opcionalmente, escreva uma **Observação** (fica registrada na auditoria);
5. clique em **Confirmar baixa**.

> ⚠️ A baixa é **sempre pelo valor integral** — não existe baixa parcial. E ela **não movimenta nada no gateway**: serve para registrar que o dinheiro entrou por fora.

***

## 🚫 Cancelar uma cobrança

No menu **⋮** da linha, escolha **Cancelar**. O sistema pede confirmação e aceita um **motivo opcional**.

* Dá para cancelar cobranças em **Rascunho**, **Em aberto** e orçamentos;
* O link público **deixa de abrir** para o cliente;
* O motivo fica registrado no histórico.

***

## ✏️ Editar uma cobrança

Use **Editar** no menu **⋮** para alterar descrição, vencimento, itens, desconto/acréscimo, forma de pagamento e notas internas.

Só é possível editar cobranças em **Rascunho** ou **Em aberto**.

> ⚠️ Depois que a cobrança é enviada ao gateway, o **valor fica travado**. Para mudar o valor, cancele esta e emita outra.

***

## 💬 Cobranças dentro do atendimento

No painel do contato, durante a conversa, existe a aba **Cobranças**. Ela mostra as faturas daquele cliente e permite fazer tudo sem sair do atendimento:

* **Nova** (com a opção **Nova cobrança** ou **Novo orçamento**) — já vinculada ao atendimento;
* filtro por status, com a quantidade de cada um;
* menu **⋮** com **Histórico**, **Copiar link**, **Editar**, **Enviar/Reenviar**, **Converter em cobrança** (orçamentos), **Dar baixa** e **Cancelar**.

> 💡 A aba se atualiza sozinha a cada **20 segundos** enquanto está aberta — é assim que o pagamento confirmado pelo gateway aparece sem você recarregar a página.

> 🔐 Para o perfil **Atendente**, a aba só aparece com o ticket **em atendimento**; administrador e supervisor veem sempre.

***

## ❓ Perguntas frequentes

### Posso escolher o valor total?

Não. O total é calculado a partir dos itens, menos desconto, mais acréscimo.

### A cobrança foi criada, mas o cliente não recebeu. Por quê?

Confira se havia **atendimento aberto** no momento do envio. Sem atendimento, o sistema não envia e devolve o link para você copiar. O **Histórico** registra o que aconteceu.

### O cliente pode pagar duas vezes?

A página mostra o pagamento confirmado depois de identificado. Se o cliente pagar por fora, dê **baixa manual** para encerrar a cobrança.

### O que acontece com o link depois do cancelamento?

Ele para de funcionar e a página responde "Cobrança não encontrada".

### Preciso preencher as notas internas?

Não. Elas são só para a equipe e nunca aparecem para o cliente.

***

## 👣 Próximos passos

* [Orçamentos](orcamentos.md) — quando a cobrança ainda é uma proposta;
* [Avisos e lembretes](avisos-e-lembretes.md) — lembretes automáticos antes e depois do vencimento;
* [Relatórios de cobranças](relatorios-de-cobrancas.md) — recebidos, em aberto e vencidos.
