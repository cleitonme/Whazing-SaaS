# Catálogo na Recepção Inteligente

A **Recepção Inteligente** pode consultar o seu catálogo e apresentar produtos durante o atendimento automático — com **nome, preço, promoção, disponibilidade e foto** exatamente como estão cadastrados.

> 💡 **Em palavras simples:** quando o cliente pergunta "quanto custa?" ou "tem alguma opção mais barata?", a IA procura no seu catálogo e responde com os produtos certos. Ela **não inventa** preço, desconto nem condição.

---

## 📍 Onde configurar

1. No menu, acesse **Automação e Integrações → IA e Integrações**.
2. Edite a integração da **Recepção Inteligente**.
3. Abra a aba **Produtos**.

> 💡 A aba só funciona depois que a integração está criada. As alterações são salvas junto com a integração — **clique em Salvar** ao terminar.

---

## ✅ Ativar a consulta ao catálogo

Ligue **Permitir que a IA consulte e apresente produtos**.

| Estado | O que acontece |
| --- | --- |
| **Ligado** | A IA consulta o catálogo quando o cliente demonstra interesse em comprar, pergunta sobre um produto ou pede recomendação |
| **Desligado** | A IA não consulta nem apresenta produtos nesta recepção |

> ⚠️ A IA **nunca cria valor ou condição**. Preço, promoção e disponibilidade saem sempre do cadastro.

---

## 🎯 O que a IA pode consultar

| Opção | O que faz |
| --- | --- |
| **Coleções liberadas** | Limita a consulta às coleções escolhidas. **Vazio = todas as coleções** |
| **Categorias liberadas** | Limita a consulta às categorias escolhidas. **Vazio = todas as categorias** |

> 💡 **Deixe em branco para liberar todo o catálogo.** É o jeito mais simples e o mais indicado para começar.

> ⚠️ **Produtos ocultos e esgotados nunca são apresentados** pela IA, mesmo que estejam dentro do escopo liberado.

Se nenhuma coleção ou categoria for selecionada, a tela avisa: **"Nenhuma coleção ou categoria selecionada: a IA pode consultar todo o catálogo visível."**

---

## 💬 O que a IA pode dizer e enviar

| Opção | O que faz |
| --- | --- |
| **Informar disponibilidade ao cliente** | A IA consulta a disponibilidade antes de responder. Produto **sem quantidade cadastrada** faz a IA dizer que vai confirmar, sem prometer número |
| **Enviar foto do produto** | A foto sai como mensagem **logo depois da resposta**, com nome e preço na legenda — o mesmo formato do envio feito por um atendente |
| **Compartilhar o link do produto** | A IA compartilha o link apenas dos produtos que têm **endereço cadastrado** |
| **Oferecer produtos parecidos** | Ao detalhar um produto, a IA pode citar **até dois** produtos da mesma coleção ou categoria |
| **Produtos por resposta** | Quantos produtos a IA apresenta por resposta: de **1 a 5**. Poucas opções funcionam melhor na conversa |

> 💡 **Canais e fotos:** em canais que não aceitam vários produtos em uma mensagem só, cada produto sai em uma mensagem separada. Produto sem foto é apresentado em texto.
>
> ⚠️ **Preço e condições:** a IA informa o preço exatamente como está cadastrado e **não oferece desconto, cupom, parcelamento ou frete** que não esteja no sistema. Se o cliente pedir uma condição diferente, ela explica isso e encaminha a um atendente.

---

## 🛒 Quando o cliente escolhe um produto

Quando o cliente clica em **"Quero este"** em um produto apresentado pela IA, você decide o que acontece:

| Opção | O que faz |
| --- | --- |
| **Registrar a escolha numa nota interna** | Grava no atendimento **qual produto e qual preço** o cliente escolheu. A nota é **só para a equipe** — o cliente nunca a vê |
| **Perguntar se o cliente quer falar com um atendente** | A IA confirma a escolha e pergunta se a pessoa prefere falar com um atendente agora para fechar o pedido ou ver mais opções. A transferência **só acontece se ela aceitar** — a IA nunca diz que encaminhou sem encaminhar |

> ⚠️ **A transferência depende da aba Automação.** Se não houver fila ativa nem atendente configurado lá, a tela avisa: a IA **não vai oferecer atendimento humano** — e também não vai prometer.
>
> 💡 Quando existe destino configurado, a tela confirma que a transferência usará a **fila ou o atendente** da aba Automação.

> 📊 As escolhas registradas aparecem no relatório [Vendas da Recepção Inteligente](../../../funcionalidades/catalogo/relatorios.md) e na aba **Vendas** do atendimento.

---

## 🧠 Busca por intenção

A busca por intenção permite que a IA entenda o pedido **pelo significado**, e não só pela palavra exata:

> O cliente escreve **"algo para jogar"** e a IA chega no **mouse gamer**, mesmo sem usar essas palavras.

Sem ela, a busca continua funcionando por **nome, código, categoria e marca**.

### Como ativar

* A busca por intenção precisa de uma **chave de API** (a mesma configuração de "embedding" usada na Base de Conhecimento).
* Se estiver desligada, a tela mostra **"A busca por intenção está desligada. Informe a chave de API para ativá-la."** e o botão **Configurar**.
* O botão **Configurar** abre a mesma janela de configuração da Base de Conhecimento — a chave é **por empresa** e vale para as duas.

### Preparar os produtos

Depois de ativar, os produtos precisam ser **preparados** para a busca:

* a tela mostra **quantos produtos já estão preparados** e quantos faltam;
* o botão **Preparar produtos** prepara um **lote por clique**;
* ao terminar o lote, a tela atualiza o progresso;
* quando todos estiverem prontos, aparece **"Todos os X produtos estão preparados."**

> 💡 Se ainda não houver produtos cadastrados, a tela avisa: **"Nenhum produto cadastrado no catálogo ainda."**
>
> ⚠️ A busca por intenção é usada **apenas pela Recepção Inteligente**. Ela **não altera** a busca do catálogo nem a vitrine pública.

---

## ⚙️ Tools nativas da API (avançado)

A opção **Usar tools nativas da API (avançado)** fica **desativada por padrão**.

* **Desligada:** a IA consulta o catálogo escrevendo um pequeno código interno na resposta — funciona em qualquer modelo.
* **Ligada:** a IA usa o recurso nativo de **"function calling"** da API. É mais eficiente, mas só funciona bem em modelos que suportam isso de verdade.
* Se o modelo configurado não suportar, o sistema **volta sozinho ao modo padrão**.

> 💡 Só ative se você entende o modelo de IA que está usando. Na dúvida, deixe desligado.

---

## ✅ Como saber se deu certo

* A faixa verde **"Catálogo ativo para a IA"** aparece quando a consulta está ligada.
* Ao conversar com a IA (em teste real pelo canal), ela responde com produtos do seu catálogo, usando os preços cadastrados.
* As escolhas dos clientes aparecem na aba **Vendas** do atendimento e no relatório de vendas da IA.

> ⚠️ **Teste com um cliente ou número de teste.** A simulação de conversa da Recepção Inteligente tem limitações e pode não reproduzir todos os recursos.

---

## 🧾 Avisos que podem aparecer

| Aviso | O que significa |
| --- | --- |
| **Catálogo desativado: a IA não consulta nem apresenta produtos nesta recepção.** | A opção principal está desligada |
| **Nenhuma coleção ou categoria selecionada: a IA pode consultar todo o catálogo visível.** | O escopo está aberto |
| **O estoque não será informado: a IA diz que pode confirmar a disponibilidade.** | A opção de informar disponibilidade está desligada |
| **Em canais que não aceitam vários produtos numa mensagem só, cada produto sai numa mensagem separada...** | A opção de enviar foto está ligada |
| **Nenhuma fila ativa nem atendente está configurado na aba Automação...** | A transferência foi marcada, mas não há destino |
| **A busca por intenção está desligada. Informe a chave de API para ativá-la.** | Falta configurar a chave de embedding |
| **Nenhum produto cadastrado no catálogo ainda.** | Não há produtos para preparar |
| **Não foi possível preparar os produtos.** | Falha ao preparar o lote; tente de novo |

---

## ❓ Perguntas frequentes

**A IA pode dar desconto?**
Não. Ela informa o preço cadastrado e não oferece desconto, cupom, parcelamento ou frete fora do sistema.

**Produto sem estoque aparece?**
Não. Produtos ocultos e esgotados nunca são apresentados pela IA.

**A IA envia a foto sozinha?**
Sim, se **Enviar foto do produto** estiver ligado. A foto sai logo depois da resposta, com nome e preço na legenda.

**Preciso liberar coleções e categorias?**
Não. Deixar em branco libera todo o catálogo visível.

**A busca por intenção muda a vitrine pública?**
Não. Ela vale apenas para a Recepção Inteligente.

**A transferência acontece sempre que o cliente escolhe um produto?**
Não. Só se a opção estiver ligada e se o cliente aceitar falar com um atendente. Também é preciso ter fila ou atendente configurado na aba Automação.

**Onde vejo as vendas que a IA registrou?**
Na aba **Vendas** do atendimento e no relatório [Vendas da Recepção Inteligente](../../../funcionalidades/catalogo/relatorios.md).

---

## 👣 Próximos passos

* [Recepção Inteligente](README.md)
* [Catálogo — visão geral](../../../funcionalidades/catalogo/README.md)
* [Relatórios do Catálogo](../../../funcionalidades/catalogo/relatorios.md)
* [Base de Conhecimento](base-de-conhecimento.md)
