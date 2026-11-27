# Link Público e Vitrine

O **link público** é o endereço que você envia para o cliente ver os produtos **sem precisar de login**. A página que ele abre é a **vitrine**.

---

## 🔗 Gerar o link

1. Em **Cadastros → Produtos e catálogo**, clique em **Compartilhar**.
2. Em **O que mostrar**, escolha:
   * **Todos os produtos** — mostra o catálogo inteiro; ou
   * uma **coleção** — mostra apenas os produtos daquela coleção.
3. Clique em **Gerar link**.

O link aparece na lista com o nome do conteúdo (ou **Todos os produtos**).

> 💡 **Um link por conteúdo:** se você pedir de novo o link do catálogo inteiro (ou de uma coleção que já tem link), o sistema **reaproveita o endereço existente** — e o reativa, se ele estiver desativado. Não é criado um endereço novo a cada clique.

### O que cada botão faz

| Botão | O que faz |
| --- | --- |
| **Interruptor** | Liga ou desliga o link. Desligado, o endereço deixa de abrir |
| **Copiar link** | Copia o endereço para a área de transferência |
| **Abrir** | Abre a vitrine em uma nova aba |
| **Lixeira** | Exclui o link. Quem já tem o endereço **deixa de conseguir abrir** |

> ⚠️ **Desativar não apaga.** O endereço fica guardado e volta a funcionar quando você liga o interruptor de novo. Já **excluir** remove o link — para ter um endereço novo, será preciso gerar outro.

### Pré-preencher os dados do cliente

Antes de copiar, você pode preencher **Nome**, **Telefone** e **E-mail** no modal. Esses dados:

* entram na **URL** copiada, como parâmetros (`nome`, `telefone` e `email`);
* **não são salvos no servidor**;
* servem para pré-preencher o atendimento (Webchat) quando o cliente abrir o link.

> 💡 O cliente ainda pode corrigir os dados no atendimento. O preenchimento é só uma comodidade.

---

## 👀 O que o cliente vê na vitrine

A vitrine mostra:

* o **logo**, o **nome da empresa** e o **título** configurado (ou "Nossos produtos");
* os **produtos visíveis**, em cartões com foto, nome, categoria, preço e descrição curta;
* **preço promocional** em destaque, com o preço normal riscado;
* **"A combinar"** quando o produto não tem preço cadastrado;
* o selo **Sem estoque** e o botão de pedido desabilitado quando o produto está sem estoque;
* o botão **Ver produto**, quando o produto tem um link cadastrado;
* os **dados de contato** da empresa no rodapé (WhatsApp, e-mail, site, Instagram e endereço — só os que estiverem preenchidos).

**Produtos ocultos não aparecem.** O link nunca mostra produto oculto.

### Galeria de fotos

Ao clicar na foto de um produto, o cliente abre uma galeria com a foto principal e as fotos extras. Se o produto não tiver foto, o cartão mostra um ícone no lugar.

---

## 🛒 Mini pedido

A vitrine permite montar um **resumo de pedido** (não é um checkout com pagamento):

1. O cliente clica em **Adicionar ao pedido**.
2. Pode aumentar ou diminuir a quantidade no próprio cartão.
3. Uma pílula flutuante mostra **Ver pedido (quantidade)** e o total, quando dá para calcular.
4. No resumo, ele confere os itens e escolhe como enviar.

### Como o pedido é enviado

| Situação | O que acontece |
| --- | --- |
| **WhatsApp configurado** | O botão **Enviar pelo WhatsApp** abre o WhatsApp da empresa (`wa.me`) com o resumo já escrito. **O cliente ainda precisa enviar a mensagem** para concluir |
| **Sem WhatsApp configurado** | A vitrine orienta a **copiar o resumo** e enviar pelo canal de preferência |
| **Webchat configurado** | O botão envia o pedido pelo atendimento do Webchat, com os dados pré-preenchidos do link |

### Total do pedido

* O total só é exibido quando **todos os itens com preço usam a mesma moeda**.
* Se algum item não tem preço, o total é tratado como **parcial** (só dos itens com preço).
* Se houver **moedas diferentes**, o sistema avisa que o total será combinado com a empresa.

> 💡 O resumo é uma **mensagem de texto** com os itens e quantidades. Não há cobrança, frete ou pagamento dentro da vitrine.

### Link indisponível

Se o link foi desativado, excluído ou o endereço está errado, o cliente vê a mensagem **"Link não disponível"** com a orientação para falar com a empresa. A página não diferencia esses casos de propósito.

---

## 🎨 Personalizar a vitrine

A aparência e os dados da página ficam em **Configurações → Configurações do Catálogo**, na seção **Vitrine pública do catálogo**.

| Campo | O que faz | Regras |
| --- | --- | --- |
| **Título da vitrine** | Título exibido na página | Até 80 caracteres. Vazio usa o nome da coleção compartilhada (ou "Nossos produtos") |
| **Cor primária** | Cor dos botões e destaques | Formato hexadecimal de 6 dígitos, como `#4CAF50` |
| **Logo** | Imagem exibida no topo | PNG ou JPG de até 5 MB |
| **Nome da empresa** | Nome exibido | Até 200 caracteres |
| **WhatsApp** | Número de contato mostrado no rodapé | Até 200 caracteres |
| **E-mail** | E-mail de contato | Até 200 caracteres |
| **Site** | Endereço do site | Até 200 caracteres |
| **Instagram** | Perfil do Instagram | Até 200 caracteres |
| **Endereço** | Endereço físico | Até 200 caracteres |

> 💡 **Campos vazios não aparecem na página.** Se você nunca salvou a vitrine, o sistema usa os dados do cadastro da empresa.

### Canal de atendimento da página

Ainda na configuração da vitrine, você escolhe **por onde o cliente fala com a empresa** a partir do link:

| Opção | O que faz |
| --- | --- |
| **Sem atendimento** | Nenhum botão de atendimento é exibido |
| **WhatsApp** | Usa o número informado no campo **WhatsApp para atendimento** (só dígitos, de preferência com o código do país: `5511999998888`) |
| **Webchat** | Usa um canal de Webchat já configurado nas conexões |

Para o Webchat, você também pode configurar:

* **Abrir o chat automaticamente** e o **atraso** para abrir (em milissegundos);
* a **posição do botão** (direita ou esquerda).

> ⚠️ **Webchat e domínios:** o canal de Webchat só abre nos domínios listados na configuração dele. Inclua o domínio do sistema na lista, senão o chat não aparece no link público.

Clique em **Salvar** na seção da vitrine. A mensagem **"Vitrine salva"** confirma.

---

## 🧾 Erros comuns

| Mensagem | O que fazer |
| --- | --- |
| **O título aceita até 80 caracteres** | Encurte o título |
| **Informe uma cor em formato hex (ex.: #4CAF50)** | Use `#` + 6 caracteres hexadecimais |
| **Um dos campos da empresa está longo demais (máximo 200)** | Encurte o campo indicado |
| **Não foi possível usar este logo. Envie um PNG ou JPG de até 5 MB.** | Envie a imagem no formato e tamanho aceitos |
| **Não foi possível carregar a configuração** | Recarregue a página e tente de novo |
| **Verifique os valores da vitrine** | Revise os campos e salve novamente |

---

## ❓ Perguntas frequentes

**O cliente precisa de login para abrir o link?**
Não. O link é público.

**O link expira?**
O prazo de validade **não é informado** nos arquivos analisados. O que existe é a possibilidade de **desativar** ou **excluir** o link.

**Posso ter um link para cada coleção?**
Sim. Gere um link escolhendo a coleção em **O que mostrar**. O catálogo inteiro também pode ter o seu.

**Produto oculto aparece no link?**
Não. Só produtos visíveis.

**O pedido é enviado automaticamente?**
Não. No WhatsApp, o sistema abre a conversa com o resumo escrito, mas **o cliente precisa enviar a mensagem**. No Webchat, o pedido é entregue ao atendimento.

**Consigo saber quem abriu o link?**
Os arquivos analisados **não informam** estatísticas de acesso ao link público.

---

## 👣 Próximos passos

* [Enviar Produto no Atendimento](envio-no-atendimento.md)
* [Produtos e Coleções](produtos-e-colecoes.md)
* [Catálogo no WhatsApp](whatsapp-plus.md)
