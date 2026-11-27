# Importar Produtos da Loja

Se você já vende em uma loja virtual, não precisa digitar os produtos um por um: o sistema consegue **ler a lista de produtos da sua loja** e trazer tudo para o catálogo.

---

## 📌 O que é o "feed de produtos"

Quase toda plataforma de loja virtual consegue gerar um **endereço com a lista completa de produtos** — o chamado **feed**. É um arquivo com nome, preço, foto, estoque e outras informações de cada item.

O formato mais comum é o do **Google Shopping** (um arquivo **XML**). Também é possível usar **CSV** ou **TSV** (arquivos de planilha separados por vírgula ou tabulação).

**Exemplo de uso:** a sua loja gera um endereço terminado em `.xml`. Você cola esse endereço no sistema, confere a prévia e importa. Depois, o sistema pode atualizar os dados sozinho todos os dias.

> 💡 **Em palavras simples:** você dá ao sistema o endereço da "lista de produtos" da sua loja, e ele lê essa lista para você.

---

## 📍 Onde encontrar

Em **Cadastros → Produtos e catálogo**, clique em **Importar produtos**.

A tela mostra as **lojas já conectadas**. Se ainda não houver nenhuma, aparece o aviso **"Nenhuma loja conectada"** com o botão **Conectar uma loja**.

> ℹ️ **Quem pode fazer o quê:** cadastrar, editar e remover a loja é do **administrador**. Testar o endereço e sincronizar depende da permissão de **sincronizar** do catálogo.

---

## 🧭 Conectar uma loja (passo a passo)

O cadastro é um assistente em três etapas: **Endereço → Conferir → Manter atualizado**.

### 1️⃣ Endereço

| Campo | O que preencher |
| --- | --- |
| **Endereço da lista de produtos** | O endereço do feed. Precisa começar com `https://` (ou `http://`) e normalmente termina em `.xml` ou `.csv` |
| **Nome da loja** | Um nome só para você identificar a loja aqui. Se deixar vazio, o sistema sugere o domínio do endereço |

Se não souber onde achar o endereço, abra a ajuda **"Não sei onde achar esse endereço"**:

* procure na sua plataforma por **"feed de produtos"**, **"Google Shopping"** ou **"exportar produtos"**;
* em lojas feitas com **Nuvemshop, Shopify, WooCommerce, Tray ou Loja Integrada** esse endereço costuma existir e é gerado pela própria plataforma (às vezes depois de instalar o aplicativo do Google Shopping);
* também funciona com uma **planilha CSV publicada em um endereço público**.

Clique em **Testar endereço**. O sistema lê o arquivo **sem gravar nada** e mostra a prévia.

### 2️⃣ Conferir

A prévia mostra:

* **quantos produtos foram encontrados**;
* **quantos ficaram fora do padrão** (e o motivo);
* uma tabela com foto, nome, preço, código, categoria e marca dos primeiros produtos.

**Todos os produtos vêm marcados.** Desmarque o que **não** quiser importar e clique em **Continuar**.

> 💡 A prévia mostra apenas os primeiros itens. Se você mantiver todos marcados, o sistema entende que deve importar o **feed inteiro**.

### 3️⃣ Manter atualizado

Antes de importar, defina:

| Opção | O que faz |
| --- | --- |
| **Atualizar sozinho todo dia** | Uma vez por dia, de madrugada, o sistema busca a lista da loja e atualiza preços, estoque, fotos e descrições |
| **Quando um produto sai da sua loja** | Escolha o que acontece com o produto que não aparece mais no feed: **Marcar como sem estoque**, **Ocultar do catálogo** ou **Deixar como está** |

> ⚠️ **O produto nunca é apagado do seu catálogo** por sair da loja. Ele só é marcado, ocultado ou mantido — conforme a sua escolha.

Clique em **Importar agora**.

> 💡 **Importar não publica no WhatsApp.** Os produtos entram no catálogo do Whazing. Nada é enviado ao catálogo do WhatsApp sem você pedir (veja [Catálogo no WhatsApp](whatsapp-plus.md)).

---

## 📊 Resultado da importação

Ao terminar, a tela mostra:

| Indicador | O que significa |
| --- | --- |
| **Novos** | Produtos que entraram no catálogo pela primeira vez |
| **Atualizados** | Produtos que já existiam e tiveram os dados atualizados |
| **Ignorados** | Itens fora do padrão, que não foram importados |
| **Com erro** | Itens que o sistema não conseguiu gravar |
| **Ausentes** | Produtos que não aparecem mais na loja e foram tratados conforme a sua escolha |

Quando há itens ignorados, o sistema explica o motivo:

| Motivo | O que significa |
| --- | --- |
| **Sem código de identificação na loja** | Sem esse código não é possível reconhecer o produto nas próximas atualizações |
| **Sem nome** | O produto não foi importado |
| **Sem preço válido** | O produto não foi importado |
| **Acima do limite de 5.000 produtos por importação** | O excedente fica de fora |
| **Código já usado por outro produto** | O item entrou **sem o código**, para não duplicar o SKU |

> 💡 Erros de itens específicos aparecem em uma lista de amostras, para você corrigir na loja e importar de novo.

---

## 🔁 Gerenciar as lojas conectadas

Cada loja aparece em um cartão com:

* **nome** e **endereço**;
* **situação** da última sincronização;
* **produtos da loja** (quantidade);
* **última sincronização** e quanto tempo levou;
* **próxima sincronização** (ou **Desligada**);
* **último resultado** (novos e atualizados);
* **erro da última execução**, quando houver.

### Situações possíveis

| Situação | O que significa |
| --- | --- |
| **Nunca sincronizada** | A loja foi cadastrada, mas ainda não importou |
| **Sincronizando** | A importação está em andamento |
| **Em dia** | A última importação terminou sem problemas |
| **Concluída com avisos** | Terminou, mas alguns itens foram ignorados ou deram erro |
| **Falhou** | A importação não conseguiu terminar |

### Ações do cartão

| Ação | O que faz |
| --- | --- |
| **Sincronizar agora** | Busca a lista da loja e aplica as novidades na hora |
| **Atualizar sozinho todo dia** | Liga/desliga a rotina diária |
| **Quando um produto sai da sua loja** | Muda o comportamento para produtos ausentes |
| **⋮ → Alterar o endereço** | Edita o endereço e o nome da loja (administrador) |
| **⋮ → Ver os produtos da loja** | Abre a prévia com os produtos encontrados |
| **⋮ → Remover a loja** | Remove a loja. **Os produtos já importados continuam no catálogo**, mas deixam de ser atualizados sozinhos |

> 💡 Se a loja já estiver sincronizando, o sistema avisa **"Essa loja já está sincronizando. Aguarde terminar."**

---

## 📏 Limites e formatos aceitos

| Item | Limite/regra |
| --- | --- |
| **Formatos** | XML (Google Shopping), CSV e TSV — o sistema detecta o formato sozinho |
| **Tamanho do arquivo** | Até **20 MB** |
| **Produtos por importação** | Até **5.000** |
| **Endereço** | Precisa começar com `https://` ou `http://` e ser **público** |
| **Endereço repetido** | Não é permitido cadastrar o mesmo endereço duas vezes |

> ⚠️ O sistema **bloqueia endereços de rede interna**. Informe o endereço público da loja.

---

## 🧾 Erros comuns

| Mensagem | O que fazer |
| --- | --- |
| **Esse endereço não parece válido. Ele precisa começar com https:// ou http://.** | Corrija o endereço |
| **Esse endereço aponta para uma rede interna e não pode ser usado.** | Use o endereço público da loja |
| **Não conseguimos acessar esse endereço. Confira se ele está certo e se a loja está no ar.** | Teste o endereço no navegador e tente de novo |
| **A loja respondeu com o erro {código}.** | Confira o endereço e se ele é público |
| **A lista de produtos é grande demais: o limite é 20 MB.** | Gere um feed menor ou divida a lista |
| **Esse endereço é a página da loja, não a lista de produtos.** | Procure o endereço do **feed** ou do **Google Shopping** |
| **Esse endereço não devolveu nenhum conteúdo.** | Verifique se o arquivo está publicado |
| **Não conseguimos ler esse arquivo. Os formatos aceitos são XML (Google Shopping), CSV e TSV.** | Gere o feed em um formato aceito |
| **Não encontramos nenhum produto nesse endereço.** | Confira se a lista tem produtos |
| **Informe um nome para a loja.** | Preencha o nome |
| **Esse endereço já está cadastrado.** | Use a loja existente em vez de criar outra |
| **Essa loja não foi encontrada.** | Recarregue a lista de lojas |
| **Essa loja já está sincronizando. Aguarde terminar.** | Aguarde a importação atual |
| **Você não tem permissão para esta ação.** | Fale com o administrador |

---

## ❓ Perguntas frequentes

**Preciso saber programar para importar?**
Não. Basta colar o endereço do feed e conferir a prévia.

**Minha loja não está na lista de plataformas. Funciona?**
Sim, desde que a plataforma ofereça um feed em **XML (Google Shopping), CSV ou TSV** com endereço público.

**A importação apaga produtos que saíram da loja?**
Não. O sistema aplica a opção escolhida em **Quando um produto sai da sua loja** (marcar sem estoque, ocultar ou deixar como está).

**Vou perder as edições manuais?**
A importação atualiza os dados vindos da loja. Se você precisa editar um produto à mão e não quer que ele mude, **remova a loja** — os produtos ficam no catálogo, mas param de ser atualizados sozinhos. Para voltar a atualizar, conecte a loja novamente.

**Importar já publica no WhatsApp?**
Não. A importação é só para o catálogo do Whazing.

**Posso importar só alguns produtos?**
Sim. Na etapa **Conferir**, desmarque os que não quiser.

**O que é o "código de identificação"?**
É o identificador do produto na loja (o mesmo que permite reconhecer o item nas próximas atualizações). Sem ele, o produto entra, mas não é atualizado automaticamente nas próximas importações.

---

## 👣 Próximos passos

* [Catálogo no WhatsApp](whatsapp-plus.md)
* [Produtos e Coleções](produtos-e-colecoes.md)
* [Relatórios](relatorios.md)
