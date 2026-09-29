# Tracking Links

A partir da **versão 3.0**, o Whazing possui o recurso **Tracking Links**, que permite criar links especiais para descobrir **de onde vieram seus contatos** e acompanhar o que acontece depois que uma pessoa clica no link.

O recurso é especialmente útil para campanhas de marketing, anúncios, Instagram, Facebook, sites e outras fontes de divulgação.

***

### 📌 Onde encontrar

No menu do Whazing, acesse:

**Campanhas → Tracking Links**

***

## 🎯 Para que serve?

Imagine que você divulgue seu WhatsApp em vários lugares:

* Instagram;
* Facebook;
* Google;
* Site;
* Anúncios;
* E-mail;
* QR Code;
* Cartões ou materiais impressos.

Sem rastreamento, você pode saber que uma pessoa entrou em contato, mas não saber exatamente **qual divulgação trouxe aquele contato**.

Com o Tracking Link, cada divulgação pode ter seu próprio link.

#### Exemplo

Você pode criar:

**Instagram**

`https://seusistema.com/t/instagram`

**Facebook**

`https://seusistema.com/t/facebook`

**Campanha de anúncio**

`https://seusistema.com/t/promocao`

Quando alguém clicar, o Whazing registra a origem e permite acompanhar o resultado.

***

## 🔗 Como funciona

O funcionamento é simples:

**1. Criar o Tracking Link**

↓

**2. Divulgar o link**

↓

**3. Cliente clica**

↓

**4. Whazing registra o clique**

↓

**5. Cliente é direcionado para o destino do link**

↓

**6. Whazing identifica a origem do contato**

↓

**7. Você acompanha a conversão nos relatórios**

Dessa forma, você consegue saber não apenas quantas pessoas clicaram, mas também quantas realmente iniciaram uma conversa e quantas chegaram ao atendimento.

O destino do link pode ser um **WhatsApp** ou uma **página do seu site**:

* **Destino WhatsApp:** o cliente cai direto na conversa, e a origem é identificada por um código enviado junto com a primeira mensagem;
* **Destino Website:** o cliente é redirecionado automaticamente para a página cadastrada, e a origem é registrada no clique — a conversão pode ser medida com um **Formulário** vinculado ao link.

***

## 🌐 Destino do link: WhatsApp ou Website

Ao criar ou editar um Tracking Link, você escolhe o **Destino**:

#### WhatsApp

O link abre uma conversa do WhatsApp. Você informa:

* Telefone (com DDI);
* Mensagem inicial.

O Whazing monta automaticamente o link da API do WhatsApp e adiciona o código de rastreamento à mensagem.

#### Website

O link leva o visitante para uma página da web. Você informa apenas:

* **URL de destino** — o endereço completo da página (por exemplo, `https://seusite.com/promocao`).

Quando alguém clica no Tracking Link, o Whazing registra o clique e **redireciona automaticamente** o visitante para essa página. Para o visitante, a experiência é a mesma de clicar em um link comum — a medição acontece sem interferir na navegação.

> **Importante:** a URL de destino precisa começar com `http://` ou `https://`. Endereços de outros tipos não são aceitos por segurança.

#### Comparativo

| | **WhatsApp** | **Website** |
| ---------------- | ---------------------------------------------- | ---------------------------------------------- |
| Para onde leva | Conversa do WhatsApp | Página do seu site |
| Código `[tk:...]` | Sim, enviado na primeira mensagem | Não é utilizado |
| Registro do clique | Ao clicar no link | Ao clicar no link |
| Registro da conversa | Primeira mensagem com o código | Envio de Formulário vinculado ao link |
| Uso típico | Divulgação direta do WhatsApp | Landing pages, anúncios, posts e materiais |

***

## 📊 O que pode ser acompanhado?

O Tracking Links permite acompanhar um funil de conversão.

Por exemplo:

**4 Cliques**

↓ 50%

**2 Conversas**

↓ 100%

**2 Atendimentos**

↓ 100%

**2 Finalizados**

Isso permite entender o desempenho real de cada link.

***

## 📱 Rastreamento no WhatsApp

Quando o destino do Tracking Link é um **WhatsApp**, o Whazing adiciona um código especial à mensagem inicial para identificar a origem do lead.

Por exemplo:

`Quero comprar [tk:P35BWLT]`

Esse código permite que o sistema reconheça que aquela conversa veio de um Tracking Link específico.

#### ⚠️ Importante

O código de rastreamento faz parte da mensagem enviada pelo cliente.

Se o cliente **editar a mensagem antes de enviá-la**, o código poderá ser removido e o rastreamento poderá não ser registrado.

Por outro lado, se a mensagem for enviada normalmente contendo o código, o sistema conseguirá registrar a origem.

> **Importante:** o código `[tk:...]` é utilizado internamente pelo sistema para identificar o Tracking Link.

***

## 🌐 Rastreamento em site (destino Website)

Quando o destino do Tracking Link é um **Website**, todo o rastreamento acontece no momento do clique, sem precisar de nenhum código na mensagem.

### O que é registrado em cada clique

* Cliques totais;
* Visitantes únicos;
* Data e hora do acesso;
* Dispositivo (Desktop ou Mobile);
* Navegador;
* Sistema operacional;
* Página de origem (Referer) — o site de onde a pessoa veio antes de clicar;
* Parâmetros UTM presentes na URL do link;
* Cidade e país, quando disponíveis.

### Visitantes únicos

O Whazing identifica cada visitante por meio de um **cookie** gravado no navegador de quem clicou, com validade de aproximadamente **1 ano**.

Assim, se a mesma pessoa clicar no link várias vezes, ela será contada como **1 visitante único**, e cada acesso novo será contado como clique.

### Como divulgar com UTMs

Você pode acrescentar parâmetros UTM ao Tracking Link para identificar ainda melhor cada divulgação:

`https://seusistema.com/t/promocao?utm_source=instagram&utm_medium=post&utm_campaign=promocao-agosto`

Os parâmetros aceitos são:

* `utm_source`;
* `utm_medium`;
* `utm_campaign`;
* `utm_term`;
* `utm_content`.

Essas informações ficam registradas junto com o clique e ajudam a analisar o desempenho de cada campanha nos relatórios.

***

## 📝 Como medir conversão com destino Website

No destino Website **não existe código `[tk:...]`**, então a conversão é medida com a ajuda dos **Formulários**.

### Passo a passo

**1.** Crie o Tracking Link com destino **Website**, apontando para a sua página;

**2.** Crie um **Formulário** e vincule esse Tracking Link na aba de vínculo do formulário;

**3.** Publique o formulário na página (por link ou incorporado no site);

**4.** Quando um visitante clicar no link, preencher e enviar o formulário, o Whazing registra a conversão e cria o contato vinculado à origem.

> 💡 Veja como configurar na página [Formulários](formularios.md).

#### Sem formulário vinculado

Se o Tracking Link com destino Website **não tiver um Formulário vinculado**, o relatório continuará mostrando **cliques e visitantes únicos**, mas a etapa de conversa do funil não será preenchida.

***

## 👤 Tracking dentro do Atendimento

Depois que o cliente inicia uma conversa através de um Tracking Link, as informações de origem ficam associadas ao atendimento.

Isso permite consultar a origem do contato diretamente no fluxo de atendimento e posteriormente utilizar essas informações nos relatórios.

<figure><img src="../../../.gitbook/assets/trankingatendimento.png" alt=""><figcaption></figcaption></figure>

***

## 📈 Relatório do Tracking Link

Cada Tracking Link possui informações detalhadas sobre seu desempenho.

Entre as informações disponíveis estão:

* Cliques;
* Visitantes únicos;
* Conversas;
* Atendimentos;
* Finalizações;
* Conversão;
* Origem;
* Dispositivo;
* Navegador;
* Sistema operacional;
* Cidade;
* País;
* Data e hora dos cliques.

***

## 📊 Cliques e conversas ao longo do tempo

O relatório apresenta a evolução dos cliques e conversas ao longo do período.

Isso permite identificar quais dias tiveram maior quantidade de acessos e conversões.

#### Exemplo de funil

**4 — Clique**\
50%

**2 — Conversa**\
100%

**2 — Atendimento**\
100%

**2 — Finalizado**

<figure><img src="../../../.gitbook/assets/relatoriotk.png" alt=""><figcaption></figcaption></figure>

***

## 📱 Dispositivos

O relatório também permite identificar quais dispositivos estão sendo utilizados para acessar o link.

Exemplos:

* Desktop;
* Mobile.

Isso pode ajudar a entender o comportamento do público.

***

## 🗺️ Localização

Quando essas informações estão disponíveis, o Tracking Link também pode registrar:

* Cidade;
* País.

#### Exemplo

**Blumenau — BR**

Isso permite identificar de quais regiões estão vindo os acessos.

***

## 🗺️ Mapa de cliques

Os relatórios de Tracking Links também possuem opção de visualização dos dados em **modo mapa**.

Cada clique é exibido como um ponto no mapa, conforme a cidade de origem, permitindo enxergar de forma visual de quais regiões estão vindo os acessos.

***

## 🕐 Mapa de calor

O sistema também disponibiliza um **Mapa de calor (hora x dia da semana)**.

Ele ajuda a identificar os períodos em que os Tracking Links recebem mais acessos.

Com essa informação, você pode descobrir, por exemplo, quais dias e horários apresentam maior movimentação.

***

## 📱 QR Code

Cada Tracking Link também pode disponibilizar um **QR Code**, tanto para links com destino WhatsApp quanto para links com destino Website.

Isso é útil para materiais físicos, como:

* Cartazes;
* Panfletos;
* Cardápios;
* Adesivos;
* Cartões;
* Banners;
* Materiais de eventos.

A pessoa simplesmente aponta a câmera do celular para o QR Code e acessa o Tracking Link.

***

## 🕘 Cliques recentes

O sistema também apresenta os cliques realizados recentemente.

Exemplo:

| Data                | Dispositivo | Navegador | Sistema | Cidade   | País | Referer              |
| ------------------- | ----------- | --------- | ------- | -------- | ---- | -------------------- |
| 12/08/2026 10:05:24 | Desktop     | Chrome    | Windows | Blumenau | BR   | instagram.com        |
| 07/08/2026 14:09:53 | Mobile      | Chrome    | Android | —        | BR   | l.facebook.com       |
| 07/08/2026 11:26:02 | Desktop     | Chrome    | Windows | —        | BR   | google.com           |
| 07/08/2026 11:09:20 | Mobile      | Chrome    | Android | —        | BR   | —                    |

Essas informações ajudam a entender o perfil das pessoas que estão acessando o link.

A coluna **Referer** mostra de qual site ou app a pessoa veio antes de clicar no link, ajudando a confirmar a origem real do acesso.

***

## 📊 Relatório geral de Tracking Links

Além do relatório individual, existe um relatório geral para analisar vários Tracking Links.

Acesse:

**Relatórios → Tracking Links**

<figure><img src="../../../.gitbook/assets/relatoriotklocal.png" alt=""><figcaption></figcaption></figure>

***

## 🔎 Filtros disponíveis

No relatório geral é possível utilizar diversos filtros para encontrar informações específicas.

Entre eles:

* Data inicial;
* Data final;
* Nome do link;
* Categoria;
* Origem;
* Canal;
* Campanha;
* Conteúdo;
* Tags;
* Status;
* Destino;
* Conversão;
* Responsável;
* Operador;
* Fila;
* Contato;
* Dispositivo;
* Navegador;
* Sistema operacional;
* Cidade;
* País.

Isso permite fazer análises mais detalhadas das campanhas.

***

## 📋 Lista de Tracking Links

O relatório também apresenta um resumo dos links cadastrados.

Exemplo:

| Nome       | Destino  | Status | Cliques | Únicos | Conversas | Conversão | Origem    | Último clique       |
| ---------- | -------- | ------ | ------: | -----: | --------: | --------: | --------- | ------------------- |
| teste novo | WhatsApp | Ativo  |       4 |      2 |         2 |       50% | instagram | 12/08/2026 10:05:24 |
| gfdg       | WhatsApp | Ativo  |       0 |      0 |         0 |        0% | —         | —                   |
| rr         | WhatsApp | Ativo  |       0 |      0 |         0 |        0% | —         | —                   |
| teste      | WhatsApp | Ativo  |       5 |      4 |         2 |       40% | face      | 22/07/2026 21:19:24 |

***

## 🤖 Usar Tracking Links com Automação

O Tracking Link também pode ser utilizado junto com a **Automação de Entrada**.

Isso permite criar regras diferentes dependendo da origem do lead.

Por exemplo:

> Uma pessoa acessou o link da campanha "Promoção Instagram".

Quando ela iniciar uma conversa, você pode configurar uma automação para:

* Enviar o contato para uma fila específica;
* Direcionar para um chatbot específico;
* Iniciar um fluxo de atendimento diferente;
* Aplicar regras específicas para aquele lead.

***

## 💡 Exemplo prático

Imagine uma empresa que possui três campanhas:

#### Instagram

Link:

`https://seusistema.com/t/instagram`

Destino:

**WhatsApp**

Origem:

**Instagram**

***

#### Facebook

Link:

`https://seusistema.com/t/facebook`

Destino:

**WhatsApp**

Origem:

**Facebook**

***

#### Promoção

Link:

`https://seusistema.com/t/promocao`

Destino:

**WhatsApp**

Campanha:

**Promoção de Agosto**

***

#### Landing page de promoção

Link:

`https://seusistema.com/t/landing-promocao`

Destino:

**Website**

URL de destino:

`https://seusite.com/promocao`

Nesse cenário, quem clicar no link é levado para a página de promoção, e o clique fica registrado com dispositivo, origem e localização. Para registrar a conversão, um **Formulário** é publicado nessa página e vinculado a esse Tracking Link — assim, cada envio de formulário entra no funil do relatório.

***

Agora você pode configurar uma Automação de Entrada para que:

**Link Instagram**

→ Fila **Vendas**

**Link Facebook**

→ Fila **Comercial**

**Link Promoção**

→ Chatbot **Promoção**

Assim, além de saber **de onde veio o cliente**, você pode definir automaticamente **como ele será atendido**.

***

## 📌 Exemplos de utilização

O Tracking Link pode ser utilizado em praticamente qualquer lugar onde você divulgue um link.

#### 📱 Redes sociais

Criar um link específico para Instagram e outro para Facebook.

#### 📢 Anúncios

Criar um link para cada campanha ou anúncio.

#### 🌐 Site

Criar links diferentes para páginas ou botões diferentes, com destino Website, e acompanhar quantos visitantes cada página trouxe.

#### 📧 E-mail

Criar um link específico para uma campanha de e-mail.

#### 🖨️ Material impresso

Utilizar o QR Code em:

* Panfletos;
* Cartazes;
* Adesivos;
* Cartões;
* Banners.

#### 🛍️ Promoções

Criar um link exclusivo para cada promoção e acompanhar quantos clientes vieram daquela divulgação.

***

## 🎯 Por que utilizar Tracking Links?

Sem Tracking Links, você pode saber que recebeu **100 contatos**, mas pode não saber de onde eles vieram.

Com Tracking Links, você consegue descobrir:

**Qual campanha gerou mais cliques?**

**Qual campanha gerou mais conversas?**

**Qual campanha realmente gerou atendimentos?**

**Qual campanha teve melhor conversão?**

Isso ajuda a tomar decisões baseadas em dados e identificar quais canais de divulgação estão trazendo melhores resultados.

***

## 🚀 Resumo

O **Tracking Links** permite:

* 🔗 Criar links exclusivos;
* 📊 Rastrear cliques;
* 👤 Identificar visitantes únicos;
* 💬 Identificar conversas;
* 🎫 Acompanhar atendimentos;
* ✅ Acompanhar finalizações;
* 📈 Calcular conversão;
* 🌐 Escolher o destino do link: **WhatsApp** ou **Website**;
* ↪️ Redirecionar automaticamente o visitante para a página cadastrada;
* 🏷️ Registrar parâmetros UTM e a página de origem (Referer) de cada clique;
* 📱 Identificar dispositivos;
* 🌐 Identificar navegador e sistema operacional;
* 🗺️ Identificar cidade e país quando disponível;
* 🗺️ Visualizar os cliques em mapa;
* 🕐 Analisar horários e dias com maior movimentação;
* 📱 Gerar QR Code;
* 📝 Medir conversão em site com Formulários vinculados;
* 🤖 Integrar com Automação de Entrada;
* 👥 Direcionar leads para filas;
* 🤖 Direcionar leads para chatbots específicos.

> **Em resumo:** crie um link diferente para cada origem que deseja medir. Assim você consegue descobrir não apenas **quem clicou**, mas também **quantos desses cliques realmente se transformaram em conversas e atendimentos**.
