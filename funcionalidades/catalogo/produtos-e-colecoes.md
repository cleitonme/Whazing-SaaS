# Produtos e Coleções

Esta página explica como **cadastrar, organizar e manter** os produtos do catálogo.

---

## 📍 Onde encontrar

No menu lateral, acesse **Cadastros → Produtos e catálogo**.

A tela abre com a lista de produtos. No topo ficam os botões:

| Botão | Para que serve | Quem vê |
| --- | --- | --- |
| **Personalizar** | Leva às configurações do catálogo (textos de envio e vitrine) | Administrador |
| **Coleções** | Cria, renomeia e exclui coleções | Quem tem acesso ao catálogo |
| **Compartilhar** | Gera o link público da vitrine | Quem tem acesso ao catálogo |
| **Importar produtos** | Traz produtos de uma loja virtual | Quem tem a permissão de sincronizar |
| **Novo produto** | Abre o formulário de cadastro | Quem tem a permissão de criar |

---

## 🔎 Lista de produtos

Você pode ver os produtos de duas formas, alternando no canto direito da barra de filtros:

* **Lista** — uma tabela com foto, nome, código, categoria, preço e situação.
* **Grade** — cartões com a foto em destaque.

### Filtros

| Filtro | O que faz |
| --- | --- |
| **Buscar por nome ou código** | Procura pelo nome do produto ou pelo SKU |
| **Categoria** | Mostra apenas produtos de uma categoria |
| **Coleção** | Mostra apenas produtos de uma coleção (com a quantidade de produtos entre parênteses) |
| **Situação** | **Visível** ou **Oculto** |

> 💡 Quando existe um **canal do WhatsApp com catálogo** selecionado na faixa de sincronização, o filtro de situação também passa a oferecer os estados de envio: **Não enviado**, **Na fila**, **Enviando**, **Sincronizado**, **Precisa atualizar** e **Falha ao sincronizar**. Veja [Catálogo no WhatsApp](whatsapp-plus.md).

A lista é paginada. Você pode escolher **20, 50 ou 100** produtos por página.

---

## ➕ Cadastrar um produto

Clique em **Novo produto** (ou em **Editar** na lista). O formulário é dividido em blocos:

### Dados do produto

| Campo | O que preencher | Regras |
| --- | --- | --- |
| **Nome** | O nome que o cliente vê | **Obrigatório**, até 256 caracteres |
| **Descrição** | Detalhes do produto | Até 4.096 caracteres |
| **Código (SKU)** | Seu código interno do produto | Opcional, até 256 caracteres e **único** (não pode repetir em outro produto) |
| **Link do produto** | Endereço da página do produto na sua loja | Opcional, até 2.048 caracteres; precisa começar com `http://` ou `https://` |

### Preço e disponibilidade

| Campo | O que preencher |
| --- | --- |
| **Preço** | O valor normal do produto |
| **Preço promocional** | Opcional. Quando preenchido, o cliente vê o preço normal riscado e o promocional em destaque. **Não pode ser maior que o preço normal** |
| **Moeda** | **BRL** (real), **USD** (dólar) ou **EUR** (euro) |
| **Disponibilidade** | **Disponível** ou **Sem estoque** |
| **Quantidade em estoque** | Opcional. Deixe em branco se você não controla estoque |

> 💡 **Preço "a combinar":** se o produto ficar sem preço (ou com preço `0`), a vitrine mostra **"A combinar"** em vez de um valor — assim o cliente não vê um preço enganoso.

### Fotos

* **Foto principal:** clique em **Escolher foto principal**. Aceita **JPG ou PNG de até 5 MB**.
* **Fotos extras:** clique em **Adicionar outra foto**. Você pode ter **até 9 fotos extras**.
* Para remover, clique no **X** sobre a foto extra ou em **Remover** na foto principal.

> 💡 As fotos aparecem na vitrine, no envio pelo atendimento e na galeria que o cliente abre ao clicar na imagem.
>
> ⚠️ Para **publicar no catálogo do WhatsApp**, a foto é **obrigatória** e precisa ter no mínimo **500 × 500 pixels** (veja [Catálogo no WhatsApp](whatsapp-plus.md)).

### Organização

| Campo | O que preencher |
| --- | --- |
| **Categoria** | Digite a categoria. Se ela ainda não existir, o sistema cria na hora — **não é uma lista fechada** |
| **Marca** | Opcional, até 100 caracteres. O catálogo do WhatsApp não tem campo de marca |
| **Coleções** | Selecione uma ou mais coleções para o produto |
| **Ocultar este produto** | Quando ligado, o produto não aparece nas listas nem no link público, mas continua salvo |

Clique em **Salvar**. A mensagem **"Produto salvo"** confirma o cadastro.

---

## 🛠️ Ações do dia a dia

Na lista, o botão **⋮** (três pontinhos) de cada produto abre as ações:

| Ação | O que faz |
| --- | --- |
| **Editar** | Abre o formulário com os dados atuais |
| **Duplicar** | Abre o formulário de um **novo** produto já preenchido com os dados do original. Nada é salvo sem você revisar. O código (SKU) não é copiado e o nome vira "Cópia de …" |
| **Ocultar / Mostrar de novo** | Alterna a visibilidade do produto no catálogo |
| **Excluir** | Apaga o produto do catálogo (não há como desfazer) |

> 💡 **Duplicar é o jeito mais rápido de criar produtos parecidos:** duplique, troque o nome, o código e a foto e salve.

### Ações em lote

Marque a caixa de seleção dos produtos (na lista ou na grade). Uma barra aparece com a quantidade selecionada e as ações:

* **Ocultar** e **Mostrar** — mudam a visibilidade de todos os selecionados;
* **Excluir** — apaga todos os selecionados (com confirmação);
* **Enviar para o WhatsApp** — aparece quando há um canal com catálogo selecionado (veja [Catálogo no WhatsApp](whatsapp-plus.md)).

---

## 🗂️ Coleções

Coleções são "prateleiras" para agrupar produtos. Servem para encontrar mais rápido, compartilhar um link só daquela seleção e enviar um conjunto de produtos no atendimento.

### Criar uma coleção

1. Clique em **Coleções**.
2. Digite o **Nome da coleção** (até 256 caracteres).
3. Clique em **Criar**.

> ⚠️ O nome precisa ser **único**: se já existir uma coleção com o mesmo nome, o sistema avisa **"Já existe uma coleção com este nome"**.

### Renomear ou excluir

* **Renomear:** clique no ícone de lápis, edite o nome e confirme no ícone de check.
* **Excluir:** clique na lixeira e confirme. **Os produtos continuam no catálogo** — a coleção é apenas uma organização.

Cada coleção mostra a quantidade de produtos que ela tem.

### Colocar produtos na coleção

Você pode fazer de dois jeitos:

* No **cadastro do produto**, no campo **Coleções**; ou
* Na lista de produtos, editando o produto e ajustando as coleções.

---

## ⚠️ Excluir um produto

Ao excluir, o sistema pede confirmação e avisa que **a ação não pode ser desfeita**.

Se o produto já foi **publicado no catálogo do WhatsApp**, o aviso é diferente: ele continua no catálogo do WhatsApp **até você excluí-lo lá também** (veja [Catálogo no WhatsApp](whatsapp-plus.md)).

---

## 🧾 Erros comuns ao salvar

| Mensagem | O que fazer |
| --- | --- |
| **Informe o nome do produto** | O nome é obrigatório |
| **O nome é longo demais** | Use até 256 caracteres |
| **A descrição é longa demais** | Use até 4.096 caracteres |
| **Informe um preço válido** | Preencha o preço com um número maior ou igual a zero |
| **O preço é alto demais** | Revise o valor informado |
| **O preço promocional não pode ser maior que o preço** | Ajuste a promoção para um valor menor ou igual ao preço |
| **Escolha uma moeda válida** | Selecione BRL, USD ou EUR |
| **Informe um link começando com http:// ou https://** | Corrija o endereço do produto |
| **Já existe um produto com este código** | Troque o SKU ou deixe o campo vazio |
| **Não foi possível usar esta foto. Envie um JPG ou PNG de até 5 MB.** | Envie a imagem no formato e tamanho aceitos |
| **Você pode adicionar até 9 fotos extras** | Remova alguma foto antes de adicionar outra |
| **Informe uma quantidade válida** | O estoque deve ser um número inteiro maior ou igual a zero |
| **Você não tem permissão para esta ação** | Seu usuário não tem a permissão necessária |

---

## ❓ Perguntas frequentes

**Preciso preencher todos os campos?**
Não. O único obrigatório é o **nome**. Os demais ajudam o cliente e a IA a entender o produto.

**Para que serve o código (SKU)?**
É o seu código interno. Ele ajuda a encontrar o produto pela busca e é usado para reconhecer o mesmo item nas atualizações automáticas da loja virtual.

**Posso ter produtos com o mesmo nome?**
Sim. O que não pode repetir é o **código (SKU)**.

**Excluir a coleção apaga os produtos?**
Não. Os produtos continuam no catálogo; apenas deixam de estar naquela coleção.

**Como faço um produto parar de aparecer sem perder o cadastro?**
Use **Ocultar este produto** (ou a ação **Ocultar** na lista).

---

## 👣 Próximos passos

* [Link Público e Vitrine](link-publico.md)
* [Enviar Produto no Atendimento](envio-no-atendimento.md)
* [Importar Produtos da Loja](importar-produtos-da-loja.md)
