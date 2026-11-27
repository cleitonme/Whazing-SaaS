# 🛍️ Catálogo

O **Catálogo** é a lista de produtos da sua empresa dentro do Whazing. Ele serve para **divulgar produtos, enviá-los nas conversas e deixar a Inteligência Artificial consultá-los** — tudo com os dados que você cadastra uma única vez.

> 💡 **Em palavras simples:** o catálogo é a sua vitrine. Cada **produto** é uma ficha (nome, preço, foto…), as **coleções** são prateleiras (ex.: "Novidades", "Promoções") e o **link público** é o endereço que você envia para o cliente ver os produtos sem precisar de login.

---

## ✅ O que dá para fazer

* Cadastrar produtos com foto, preço, promoção, estoque, categoria, marca e código interno.
* Organizar os produtos em **coleções** para encontrar e compartilhar mais rápido.
* Gerar um **link público** do catálogo inteiro ou de uma coleção e enviar ao cliente.
* **Enviar produtos** ou o link da vitrine direto na tela de **Atendimento**.
* Deixar a **Recepção Inteligente** consultar o catálogo e apresentar produtos durante a conversa.
* **Importar produtos** de uma loja virtual (formato de dados do Google Shopping, CSV ou TSV).
* **Publicar no catálogo do WhatsApp** pelo canal **WhatsApp Plus** (quando a empresa tem esse canal).
* Acompanhar **relatórios** de vendas da IA e de produtos usados em faturas e orçamentos.

---

## 📍 Onde encontrar

| O que você quer fazer | Onde ir |
| --- | --- |
| Cadastrar e organizar produtos | Menu **Cadastros → Produtos e catálogo** |
| Configurar o envio no atendimento e a aparência da vitrine | **Configurações → Configurações do Catálogo** |
| Enviar um produto durante uma conversa | **Atendimento** → menu de anexos (clipe) → **Enviar produto** |
| Escolher um produto ao montar uma cobrança | Tela de **Cobranças** → item da cobrança ou da recorrência → **Adicionar do catálogo** |
| Configurar a IA para consultar o catálogo | **Automação e Integrações → IA e Integrações** → editar a Recepção Inteligente → aba **Produtos** |
| Ver os relatórios | Menu **Relatórios** → seções **Atendimento** e **Financeiro** |

---

## 🧩 Conceitos importantes

| Conceito | O que é |
| --- | --- |
| **Produto** | A ficha do item: nome, descrição, preço, foto, estoque e demais dados |
| **Coleção** | Um agrupamento de produtos, como "Novidades" ou "Promoções" |
| **Categoria** | Um texto livre no cadastro do produto (não é uma lista pronta) — você digita a categoria que quiser |
| **Link público** | Endereço que abre a vitrine para o cliente final, sem login |
| **Vitrine** | A página que o cliente vê ao abrir o link público |
| **Oculto** | O produto continua salvo, mas não aparece nas listas nem no link público |
| **Excluído** | O produto é apagado do catálogo do Whazing (não há como desfazer) |

> ⚠️ **Ocultar é diferente de excluir.** Ocultar serve para tirar o produto de circulação sem perder o cadastro. Excluir apaga o produto.

---

## 🔐 Permissões

O catálogo trabalha com **permissões por ação**. O que aparece na tela depende do que o seu usuário pode fazer:

| Ação | O que libera |
| --- | --- |
| **Consultar** | Ver a lista de produtos e abrir o catálogo |
| **Criar** | Cadastrar produtos e duplicar um produto existente |
| **Editar** | Alterar produtos, ocultar/reexibir e editar coleções |
| **Excluir** | Excluir produtos e coleções |
| **Sincronizar** | Importar produtos da loja e enviar/importar do catálogo do WhatsApp |
| **Enviar ao cliente** | Usar o item **Enviar produto** na tela de Atendimento |
| **Registrar venda** | Ver e atualizar a aba **Vendas** do atendimento (vendas da IA) |

> 💡 Se a tela abrir com o aviso **"Você não tem permissão para esta ação"**, o seu usuário não tem a permissão de **consultar** — ou o recurso não está liberado para a empresa. Fale com o administrador.

> ℹ️ O cadastro do mapa de permissões do catálogo é feito no backend/administração. **Não há uma tela de configuração desse mapa documentada no frontend** — por isso ela não é detalhada aqui.

---

## 🔗 Como o catálogo se conecta com o resto do sistema

| Recurso | Como o catálogo participa |
| --- | --- |
| **Atendimento** | O atendente envia produtos, coleções ou o link da vitrine na conversa |
| **Cobranças** | É possível escolher um produto do catálogo ao montar o item de uma cobrança |
| **Recepção Inteligente** | A IA consulta o catálogo para responder sobre produtos, preços e disponibilidade |
| **Relatórios** | Vendas escolhidas durante o atendimento da IA e produtos usados em faturas/orçamentos |
| **WhatsApp Plus** | Publica os produtos no catálogo do WhatsApp do canal escolhido |
| **API** | Rotas `/catalog/...` para manter catálogo, produtos, coleções e links |

---

## 📄 Páginas desta seção

* [Produtos e Coleções](produtos-e-colecoes.md) — cadastro, fotos, preços, organização e exclusão
* [Link Público e Vitrine](link-publico.md) — gerar o link, personalizar a página e receber pedidos
* [Enviar Produto no Atendimento](envio-no-atendimento.md) — carrossel, mensagens individuais e link
* [Importar Produtos da Loja](importar-produtos-da-loja.md) — feed do Google Shopping, CSV e TSV
* [Catálogo no WhatsApp (API Plus)](whatsapp-plus.md) — sincronizar com o catálogo do WhatsApp
* [Relatórios](relatorios.md) — vendas da IA e produtos em faturas e orçamentos
* [Catálogo na Recepção Inteligente](../../integracoes/inteligencia-artificial/recepcao-inteligente/catalogo-na-recepcao-inteligente.md) — configuração da IA

---

## 🚀 Primeiros passos

1. **Cadastre alguns produtos** em **Cadastros → Produtos e catálogo** (o nome é o único campo obrigatório).
2. **Envie uma foto** — ela é importante para o envio no atendimento e obrigatória para publicar no catálogo do WhatsApp.
3. **Crie coleções** se quiser separar os produtos por assunto (opcional).
4. **Ajuste os textos** de envio em **Configurações → Configurações do Catálogo**.
5. **Gere o link público** no botão **Compartilhar** e envie para um cliente testar.
6. Se usar **Recepção Inteligente**, ative o catálogo na aba **Produtos** da integração.

---

## ⚠️ Cuidados importantes

* **Excluir um produto não pode ser desfeito.** Se ele já foi publicado no catálogo do WhatsApp, ele continua lá até você excluí-lo também no WhatsApp.
* O **link público** mostra apenas produtos **visíveis**.
* O **código (SKU)** precisa ser único: dois produtos não podem usar o mesmo código.
* O **preço promocional** não pode ser maior que o preço normal.
* Fotos devem ser **JPG ou PNG de até 5 MB**. Para publicar no WhatsApp, o mínimo é **500 × 500 pixels**.

---

## ❓ Perguntas frequentes

**Preciso criar um catálogo antes de cadastrar produtos?**
Não. O catálogo já existe junto com a empresa — você só cadastra os produtos.

**O que acontece se eu ocultar um produto?**
Ele continua salvo, mas não aparece na lista de produtos visíveis, no link público nem nas consultas da IA. Você pode mostrá-lo de novo quando quiser.

**O produto cadastrado aqui vai sozinho para o WhatsApp?**
Não. O produto fica no catálogo do Whazing. Para aparecer no catálogo do WhatsApp é preciso **enviar pelo canal WhatsApp Plus** (veja [Catálogo no WhatsApp](whatsapp-plus.md)).

**Posso usar o catálogo em qualquer canal?**
O catálogo em si funciona em qualquer canal. O que muda é o **formato do envio**: carrossel em canais compatíveis e mensagens individuais nos demais (veja [Enviar Produto no Atendimento](envio-no-atendimento.md)).

**A IA pode inventar preço ou desconto?**
Não. A IA informa o preço exatamente como está cadastrado e não oferece desconto, cupom, parcelamento ou frete que não esteja no sistema.

---

## 👣 Próximos passos

* [Produtos e Coleções](produtos-e-colecoes.md)
* [Link Público e Vitrine](link-publico.md)
* [Catálogo na Recepção Inteligente](../../integracoes/inteligencia-artificial/recepcao-inteligente/catalogo-na-recepcao-inteligente.md)
* [API — Catálogo](../../integracoes/api/endpoints/catalogo.md)
