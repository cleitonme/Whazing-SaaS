# Enviar Produto no Atendimento

Durante uma conversa, o atendente pode enviar **produtos do catálogo** ou o **link da vitrine** sem sair da tela de Atendimento.

---

## 📍 Onde encontrar

1. Abra um atendimento.
2. Clique no ícone de **anexo** (clipe) ao lado do campo de mensagem.
3. Escolha **Enviar produto**.

> 💡 O item **Enviar produto** só aparece para quem tem a permissão **Enviar ao cliente**. Se você não vê a opção, fale com o administrador.

O modal abre com três abas: **Produtos**, **Coleção** e **Link do catálogo**.

---

## 📦 Aba Produtos

* Use a busca para encontrar o produto pelo **nome**.
* A lista mostra apenas **produtos visíveis**, com foto, nome, preço e código.
* Clique no produto para selecionar. Os escolhidos aparecem como etiquetas abaixo da busca.
* Clique de novo (ou no **X** da etiqueta) para remover.
* O contador **selecionados / limite** mostra quanto ainda cabe no envio.

---

## 🗂️ Aba Coleção

Escolha uma coleção na lista. Serão enviados os **produtos visíveis daquela coleção**.

* Se não houver nenhuma coleção criada, o sistema avisa e indica criar na página **Catálogo**.
* Se a lista de coleções não puder ser carregada, o motivo aparece no lugar de um campo vazio.

> 💡 A coleção é útil para enviar uma seleção pronta, como "Promoções da semana", sem escolher produto por produto.

---

## 🎠 Carrossel ou mensagens individuais

O envio pode sair de duas formas:

| Formato | Como funciona |
| --- | --- |
| **Carrossel** | Vários produtos em uma única mensagem, um cartão por produto |
| **Mensagens individuais** | Uma mensagem por produto |

A opção **Enviar em carrossel** só aparece em **canais compatíveis**:

* **WhatsApp Plus**
* **WhatsApp Oficial (WABA)**
* **Instagram**
* **Facebook**

Nos demais canais, o envio é sempre individual.

### Limites

| Formato | Limite |
| --- | --- |
| **Carrossel** | Até **10 produtos** (limite da Meta) |
| **Mensagens individuais** | O limite configurado pela empresa, de **1 a 10** por envio (padrão **5**) |

> ⚠️ **Produto sem foto sai em mensagem individual**, mesmo com o carrossel ligado.
>
> 💡 No **WhatsApp**, um único produto também sai individual — o carrossel oficial exige pelo menos 2 cartões. No **Instagram** e no **Facebook**, 1 cartão já funciona.

Ao tentar selecionar mais do que o limite, o sistema avisa e não adiciona o produto. O backend também corta o excesso: se isso acontecer, a mensagem de sucesso informa quantos foram enviados e quantos foram ignorados.

> 💡 O formato escolhido no momento do envio vale só para aquele envio. O padrão vem da configuração da empresa (veja abaixo).

---

## 🔗 Aba Link do catálogo

Envia o **link da vitrine** na conversa.

1. Escolha o **conteúdo do link**: **Todos os produtos** ou uma **coleção**.
2. Confira a **prévia da mensagem** que será enviada.
3. Clique em **Enviar link**.

O sistema **reaproveita o link já existente** daquele conteúdo (e o reativa, se estiver desativado). Não é criado um endereço novo a cada envio.

### Como o link chega ao cliente

| Canal | Formato |
| --- | --- |
| **WhatsApp Oficial (WABA)**, **WhatsApp Plus** e **Hub** | O link sai como **botão** |
| **Demais canais** | O link sai como **texto com o endereço no fim** |

A mensagem de confirmação informa se o link foi enviado como **botão** ou como **texto**.

---

## ⚙️ Configurar os textos padrão

Em **Configurações → Configurações do Catálogo**, na seção **Envio de produto no atendimento**, você define o que acompanha os envios:

| Opção | O que faz | Regras |
| --- | --- | --- |
| **Enviar em carrossel quando o canal permite** | Liga o carrossel como padrão | Desligado, todo envio sai em mensagens individuais |
| **Texto do carrossel** | Texto que aparece acima dos produtos | Vazio usa **"Nossos produtos"** (ou **"Confira os produtos"** ao enviar uma coleção) |
| **Texto do botão com link** | Texto do botão do produto que tem link | Até **20 caracteres** |
| **Texto do botão sem link** | Texto do botão do produto sem link | Até **20 caracteres** |
| **Máximo de mensagens individuais por envio** | Quantas mensagens separadas podem sair | Número de **1 a 10**. O carrossel não entra nesse limite |
| **Texto que acompanha o link** | Mensagem enviada junto do link da vitrine | O botão da mensagem fica com o link |
| **Texto do botão do link** | Texto do botão que abre a vitrine | Até **30 caracteres** (limite da Meta) |

### Marcador do nome do contato

No **texto que acompanha o link**, você pode usar o marcador **`{{nome}}`**. O sistema troca esse marcador pelo **nome do contato** no momento do envio.

Exemplo:

```text
Olá, {{nome}}! Confira nossos produtos neste link.
```

> ⚠️ Escreva o marcador exatamente assim, com duas chaves de cada lado. Se o contato não tiver nome cadastrado, o texto pode ficar incompleto — revise antes de usar.

Clique em **Salvar**. A mensagem **"Configuração salva"** confirma.

---

## 🧾 Mensagens e erros comuns

| Mensagem | O que significa |
| --- | --- |
| **{n} produto(s) enviado(s)** | Envio concluído |
| **{n} produto(s) enviado(s) — {x} não enviado(s) por causa do limite** | Parte da seleção passou do limite e não foi enviada |
| **Nenhum produto disponível para enviar** | A coleção não tem produtos visíveis ou nenhum produto foi selecionado |
| **Não foi possível listar as coleções** | Falha ao carregar as coleções; o envio de produtos continua disponível |
| **Nenhuma coleção criada. Crie na página Catálogo.** | Não há coleções para escolher |
| **Não foi possível enviar os produtos** | Falha no envio; tente de novo |
| **Não foi possível enviar o link do catálogo** | Falha no envio do link; tente de novo |
| **Você não tem permissão para esta ação** | Seu usuário não tem a permissão necessária |

---

## ❓ Perguntas frequentes

**O cliente vê o preço no produto enviado?**
Sim. O envio usa os dados do cadastro (foto, nome e preço).

**Posso enviar um produto oculto?**
Não. A busca do atendimento mostra apenas produtos visíveis.

**Posso escolher carrossel em qualquer canal?**
Não. A opção só aparece nos canais compatíveis. Nos demais, o envio é individual.

**Por que meu carrossel saiu como várias mensagens?**
Algum produto pode estar sem foto — nesse caso ele sai individual. Em canais sem suporte a carrossel, todos saem individuais.

**O link enviado é diferente do link de "Compartilhar"?**
É o mesmo endereço. O envio reaproveita (ou reativa) o link daquele conteúdo.

**Preciso configurar os textos para enviar?**
Não. Sem configuração, o sistema usa os textos padrão. A configuração serve para deixar a comunicação com a sua marca.

---

## 👣 Próximos passos

* [Link Público e Vitrine](link-publico.md)
* [Catálogo no WhatsApp](whatsapp-plus.md)
* [Catálogo na Recepção Inteligente](../../integracoes/inteligencia-artificial/recepcao-inteligente/catalogo-na-recepcao-inteligente.md)
