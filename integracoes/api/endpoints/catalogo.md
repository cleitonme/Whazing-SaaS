---
icon: store
---

# Catálogo

O **Catálogo** é a vitrine de produtos da empresa — a página que o cliente final abre por um **link público, sem precisar de login**. Pela API você mantém essa vitrine: personaliza o visual, cadastra produtos, organiza coleções e cria os links.

> 💡 **Em palavras simples:** cada **produto** é uma ficha (nome, preço, foto…); as **coleções** são prateleiras (ex.: "Novidades", "Promoções"); e o **link da vitrine** é o endereço que você envia ao cliente.

> 🔐 Autenticação igual aos demais endpoints: token no cabeçalho `Authorization: Bearer` (veja [Introdução e Autenticação](../introducao-e-autenticacao.md)). Toda operação enxerga apenas os dados da empresa do token.

## 🧭 Como o catálogo é organizado

| Conceito | O que é | Observação |
| --- | --- | --- |
| **Catálogo** | A vitrine da empresa | Há **um único catálogo por empresa** — e o `id` dele é o **id da empresa** |
| **Produtos** | Os itens exibidos na vitrine | Podem ficar **ocultos** (`isHidden`) |
| **Coleções** | Agrupamentos de produtos | Nome único por empresa |
| **Links** | Endereços públicos da vitrine | Mostram o catálogo inteiro **ou** uma coleção |

> ⚠️ **Não existe criar nem excluir catálogo pela API:** ele nasce junto com a empresa. Para esvaziá-lo, exclua produtos, coleções e links.

***

## 1. Consultar o catálogo

### Listar catálogos

* **Método:** `GET`
* **Endpoint:** `/catalog/catalogs`

Como cada empresa tem um único catálogo, a resposta traz **sempre um item**.

```json
{
  "catalogs": [
    {
      "id": 12,
      "name": "Empresa Exemplo",
      "title": "Loja da Empresa",
      "primaryColor": "#1a73e8",
      "logoUrl": null,
      "company": {
        "name": "Empresa Exemplo",
        "whatsapp": "5511999999999",
        "email": "contato@exemplo.com",
        "website": null,
        "instagram": null,
        "address": null
      },
      "products": { "total": 42, "visible": 40, "hidden": 2 },
      "collections": 3,
      "links": { "total": 2, "enabled": 1 }
    }
  ]
}
```

### Consultar um catálogo

* **Método:** `GET`
* **Endpoint:** `/catalog/catalogs/{catalogId}`

`catalogId` é o **id da empresa do token**. Catálogo de outra empresa (ou um id diferente do tenant) responde `404`.

**O que cada campo devolvido significa:**

| Campo | O que é |
| --- | --- |
| `id` | Id do catálogo (igual ao id da empresa) |
| `name` | Nome da empresa |
| `title` | Título exibido na vitrine (vazio quando não personalizado) |
| `primaryColor` | Cor principal da vitrine (hexadecimal) |
| `logoUrl` | Logo exibida na vitrine |
| `company` | Dados de contato mostrados na vitrine |
| `products` | Contagens: `total`, `visible` (visíveis) e `hidden` (ocultos) |
| `collections` | Quantidade de coleções |
| `links` | `total` de links e quantos estão `enabled` (ativos) |

> 💡 Sem personalização salva, os dados da empresa repetem nome/telefone/e-mail do cadastro da empresa.

***

## 2. Atualizar a personalização da vitrine

* **Método:** `PUT`
* **Endpoint:** `/catalog/catalogs/{catalogId}`

É a mesma gravação usada pela tela de configuração do catálogo.

**Regra importante — edição parcial:** envie **somente o que quer mudar**. Campo ausente mantém o valor atual; **string vazia (`""`) ou `null` limpa** o campo.

| Campo | Tipo | O que é | Limite/regra |
| --- | --- | --- | --- |
| `title` | string | Título exibido na vitrine | até 80 caracteres |
| `primaryColor` | string | Cor principal | **somente hexadecimal de 6 dígitos** (ex.: `#1a73e8`) |
| `logoUrl` | string | Logo da vitrine | — |
| `company.name` | string | Nome exibido | até 200 caracteres |
| `company.whatsapp` | string | WhatsApp exibido | até 200 caracteres |
| `company.email` | string | E-mail exibido | até 200 caracteres |
| `company.website` | string | Site | até 200 caracteres |
| `company.instagram` | string | Instagram | até 200 caracteres |
| `company.address` | string | Endereço | até 200 caracteres |

```json
{
  "title": "Loja da Empresa",
  "primaryColor": "#1a73e8",
  "company": {
    "name": "Empresa Exemplo",
    "whatsapp": "5511999999999",
    "instagram": "@empresaexemplo",
    "address": "Av. Paulista, 1000 - São Paulo/SP"
  }
}
```

***

## 3. Produtos

### 3.1 Listar produtos

* **Método:** `GET`
* **Endpoint:** `/catalog/products`
* **Também disponível em:** `GET /catalog/catalogs/{catalogId}/products`

Todos os filtros são **opcionais**:

| Parâmetro (query) | Para que serve |
| --- | --- |
| `search` | Busca por texto |
| `category` | Filtra por categoria |
| `collectionId` | Filtra por coleção |
| `isHidden` | Traz apenas ocultos (`true`) ou visíveis (`false`) |
| `sortBy` | Ordena por `createdAt`, `updatedAt`, `name`, `price` ou `category` |
| `descending` | `true` para ordem decrescente |
| `page` | Página |
| `rowsPerPage` | Itens por página |

```json
{
  "products": [
    {
      "id": 100,
      "catalogId": 12,
      "name": "Camiseta Básica",
      "sku": "CAM-001",
      "price": "49.90",
      "salePrice": "39.90",
      "currency": "BRL",
      "availability": "in stock",
      "stock": 25,
      "isHidden": false,
      "collections": [{ "id": 3, "name": "Novidades" }]
    }
  ],
  "total": 42,
  "page": 1,
  "rowsPerPage": 20
}
```

### 3.2 Criar produto

* **Método:** `POST`
* **Endpoint:** `/catalog/products`

O único campo **obrigatório** é `name`.

| Campo | Tipo | O que é | Regra |
| --- | --- | --- | --- |
| `name` | string | Nome do produto | **obrigatório**, até 256 caracteres |
| `description` | string | Descrição | até 4096 caracteres |
| `sku` | string | Código interno | até 256; **único por empresa** |
| `price` | número ou texto | Preço | aceita `49,90`; precisa ser **maior ou igual a 0** |
| `salePrice` | número ou texto | Preço promocional | **não pode ser maior que o `price`** |
| `currency` | string | Moeda | código ISO de 3 letras; padrão `BRL` |
| `link` | string | Link do produto | até 2048; **apenas http/https** |
| `imageUrl` | string | Foto principal | caminho relativo do upload ou URL http(s) |
| `extraImages` | lista | Fotos extras | até **9** itens |
| `category` | string | Categoria | até 100 caracteres |
| `brand` | string | Marca | até 100 caracteres |
| `availability` | string | Disponibilidade | `in stock` ou `out of stock` |
| `stock` | número | Estoque | maior ou igual a 0 |
| `isHidden` | booleano | Ocultar na vitrine | — |
| `syncEnabled` | booleano | Sincronização | — |
| `collectionIds` | lista de ids | Coleções do produto | — |

```json
{
  "name": "Camiseta Básica",
  "description": "100% algodão",
  "sku": "CAM-001",
  "price": "49.90",
  "salePrice": "39.90",
  "currency": "BRL",
  "link": "https://exemplo.com/camiseta",
  "category": "Roupas",
  "brand": "Exemplo",
  "availability": "in stock",
  "stock": 25,
  "collectionIds": [1]
}
```

> 💡 **Este catálogo é o do Whazing** — o produto **não é publicado** no catálogo do WhatsApp.

### 3.3 Enviar a imagem do produto

* **Método:** `POST`
* **Endpoint:** `/catalog/products/images`
* **Formato:** `multipart/form-data`, com o arquivo no campo **`image`**

Aceita **somente PNG/JPEG até 5 MB** e devolve um `imageUrl` (caminho relativo) para usar ao criar/editar o produto.

> 💡 Alternativa: informar uma **URL http(s)** direto em `imageUrl`/`extraImages` — nesse caso a API **baixa, valida (PNG/JPEG, 5 MB)** e salva na pasta da empresa.

### 3.4 Consultar, atualizar e excluir um produto

| Ação | Método e endpoint | Observação |
| --- | --- | --- |
| Consultar | `GET /catalog/products/{productId}` | — |
| Atualizar | `PUT /catalog/products/{productId}` | **edição parcial**: envie só o que muda; `collectionIds` **substitui** as coleções atuais |
| Excluir | `DELETE /catalog/products/{productId}` | — |

***

## 4. Coleções

| Ação | Método e endpoint | O que faz |
| --- | --- | --- |
| Listar | `GET /catalog/collections` | Lista em ordem alfabética, com `productCount` |
| Criar | `POST /catalog/collections` | `name` obrigatório (até 256, **único por empresa** ignorando caixa e espaços); `productIds` opcional já associa produtos |
| Consultar | `GET /catalog/collections/{collectionId}` | Traz a coleção com a lista de produtos |
| Atualizar | `PUT /catalog/collections/{collectionId}` | `productIds` **SUBSTITUI** o conteúdo atual |
| Excluir | `DELETE /catalog/collections/{collectionId}` | — |
| Associar produtos | `POST /catalog/collections/{collectionId}/products` | Body `{ "productIds": [1, 2] }` — **ao menos 1 item** |
| Desassociar produto | `DELETE /catalog/collections/{collectionId}/products/{productId}` | Remove um produto da coleção |

```json
{
  "name": "Novidades",
  "productIds": [100, 101]
}
```

***

## 5. Links da vitrine

| Ação | Método e endpoint | O que faz |
| --- | --- | --- |
| Listar | `GET /catalog/links` | Do mais recente para o mais antigo, com a URL pronta e a coleção |
| Criar | `POST /catalog/links` | Body `{}` cria o link do **catálogo inteiro**; `{ "collectionId": 3 }` cria o link de **uma coleção** |
| Consultar | `GET /catalog/links/{linkId}` | — |
| Atualizar | `PUT /catalog/links/{linkId}` | `enabled` liga/desliga; `collectionId: null` volta o link para o catálogo inteiro |
| Excluir | `DELETE /catalog/links/{linkId}` | — |

**O que cada campo devolvido significa:**

| Campo | O que é |
| --- | --- |
| `id` | Id do link |
| `url` | Endereço público da vitrine |
| `enabled` | Se o link está ativo |
| `collectionId` | Coleção do link (`null` = catálogo inteiro) |
| `collectionName` | Nome da coleção (quando houver) |
| `createdAt` | Data de criação |

> 💡 **Existe no máximo um link por conteúdo:** pedir de novo o mesmo catálogo/coleção **devolve o link existente** (reativando-o se estiver desativado) em vez de gerar outro endereço.

```json
{
  "id": 8,
  "url": "https://app.exemplo.com/#/vitrine/3f2a...c9",
  "enabled": true,
  "collectionId": 3,
  "collectionName": "Novidades"
}
```

***

## 6. Passo a passo: montar a vitrine pela API

1. **Confira o catálogo:** `GET /catalog/catalogs` e guarde o `id`.
2. **Personalize:** `PUT /catalog/catalogs/{id}` com `title`, `primaryColor` e os dados da empresa.
3. **Cadastre os produtos:** `POST /catalog/products` (o `name` é obrigatório).
4. **Envie as fotos:** `POST /catalog/products/images` e use o `imageUrl` devolvido no produto.
5. **Organize as prateleiras:** `POST /catalog/collections` e associe produtos com `POST /catalog/collections/{id}/products`.
6. **Crie o link:** `POST /catalog/links` (vazio para o catálogo inteiro; com `collectionId` para uma coleção).
7. **Compartilhe** o `url` devolvido com o cliente.

***

## 7. Erros

| Código | Quando acontece |
| --- | --- |
| `400` | Dados inválidos — por exemplo `catalogId` que não é inteiro positivo, parâmetros de paginação/ordenação inválidos, `collectionId` inválido |
| `401` | Token não informado ou inválido |
| `403` | Token válido, mas **não corresponde à conexão (sessionId)** configurada para este apiId |
| `404` | Registro não encontrado neste tenant (catálogo, produto, coleção ou link) |

> 💡 A lista completa de erros de cada rota de catálogo **não está detalhada nos arquivos de referência** — as páginas acima reproduzem só os códigos descritos no `openapi.yaml`.

***

## 8. Cuidados importantes

* O **link público** é um endereço de acesso à vitrine — trate como algo para compartilhar apenas com quem deve ver o catálogo.
* **Nome de coleção** e **SKU** são únicos por empresa: repetir gera erro.
* `salePrice` maior que `price` é recusado pela API.
* Em **atualizações parciais**, campos de lista (`collectionIds`, `productIds`) **substituem** o conteúdo atual — não somam.

***

## ❓ Perguntas frequentes

### Preciso criar um catálogo antes de cadastrar produtos?

Não. O catálogo já existe junto com a empresa — use o `id` da empresa como `catalogId`.

### Quantos catálogos a empresa pode ter?

**Um.** A listagem sempre devolve um item.

### O produto aparece no catálogo do WhatsApp?

**Não.** Este módulo é o catálogo local/vitrine do Whazing; o `openapi.yaml` informa que o produto **não é publicado no catálogo do WhatsApp**.

### Como escondo um produto da vitrine?

Envie `isHidden: true` no produto (ou no `PUT` de atualização).

### Qual a diferença entre "catálogo inteiro" e "coleção" no link?

Um link sem `collectionId` mostra **todos** os produtos visíveis; com `collectionId`, mostra apenas os produtos daquela coleção.

### O link expira?

O prazo de validade do link público **não é informado nos arquivos de referência**.

***

## 👣 Próximos passos

* [Cobranças](cobrancas.md) — gerar cobranças e enviar pelo WhatsApp;
* [Contatos](contatos.md) — criar e atualizar clientes;
* [Introdução e Autenticação](../introducao-e-autenticacao.md) — token e códigos de erro.
