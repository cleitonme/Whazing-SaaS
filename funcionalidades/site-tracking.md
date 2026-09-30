# 🌐 Rastreamento de Site

O **Rastreamento de Site** é o novo módulo do Whazing que mostra **quem está no seu site agora**, **como a pessoa chegou até lá** e **o que ela fez** página por página — inclusive os cliques no botão do WhatsApp. Você instala um pequeno **script** (um código) no seu site e acompanha tudo por dentro do sistema, sem ferramenta externa.

> 💡 Esta página fala do **monitoramento do site**. Para descobrir **de qual divulgação veio o contato** (Instagram, anúncio etc.) com links especiais, veja [Tracking Links](automacao/campanha/tracking-links.md) — os dois recursos trabalham juntos.

***

## 📍 Onde encontrar

No menu do sistema, acesse:

**Campanhas → Rastreamento de Site**

> ⚠️ O acesso é para **administradores e supervisores**.

***

## ✅ O que você pode fazer

* 🌐 **Cadastrar cada site** que quer monitorar (um cadastro por domínio).
* 📋 **Instalar o script** — copiar um código e colar no site, uma vez só.
* 👀 **Ver quem está online** no site neste momento, página a página.
* 🗺️ **Acompanhar a jornada** de cada visitante: quais páginas viu, quanto tempo ficou, onde parou.
* 📊 **Ver relatórios** de páginas mais visitadas, origem, dispositivo, cidade e conversões.
* 🎯 **Definir o que conta como conversão** (ex.: formulário enviado, orçamento pedido).

***

## 🚀 Começando: os 3 passos

O próprio cadastro do site mostra o caminho, e é simples assim:

### 1. Crie o site

Na tela **Rastreamento de Site**, clique em **Novo site** e preencha:

| Campo                                 | O que colocar                                                                                                                          |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Nome do site**                      | Só para você identificar (ex.: "Site institucional")                                                                                   |
| **Domínios permitidos**               | De quais domínios o sistema aceita dados (ex.: `meusite.com`, subdomínios incluídos). **Vazio aceita qualquer domínio**                 |
| **Sessão expira após (minutos)**      | Quanto tempo parado o visitante sai como "saiu da sessão" (padrão: 30)                                                                 |
| **Eventos que contam como conversão** | Quais ações são as suas "conversões" (ex.: Formulário enviado, Clique no WhatsApp) — escolha as prontas ou digite um evento personalizado |

No mesmo cadastro você liga/desliga o que o script captura:

* **Rastrear cliques em links e botões** — cliques em WhatsApp, telefone e e-mail são registrados sempre.
* **Rastrear rolagem da página** — guarda o quanto o visitante rolou cada página.
* **Anonimizar IP (LGPD)** — guarda o IP sem o último bloco; a localização por cidade continua funcionando.
* **Respeitar "Não me rastreie" do navegador** — visitantes com Do Not Track não são rastreados.
* **Rastreamento ativo** — o liga/desliga geral do site.

### 2. Cole o script no site

Depois de salvar, clique no ícone **`</>` (Instalar script)** na linha do site. Abre a janela com o **código pronto** — é só clicar em **Copiar código** e colar **antes do `</head>`** de todas as páginas do site.

* O script é **assíncrono**: não atrasa o carregamento das páginas.
* Um código **por site cadastrado** — cada site tem o dele.

**Só de instalar, o sistema já registra sozinho (sem você marcar nada):**

* 📄 Páginas visitadas
* 📱 Cliques no WhatsApp, no telefone e no e-mail
* 📨 Formulários enviados (com o nome do formulário, **sem enviar os dados digitados**)
* ⏱️ Tempo ativo do visitante
* ⬇️ Rolagem da página

### 3. Acompanhe

Abra o site em outra aba e veja o visitante aparecer na aba **Online** do relatório. A partir daí, tudo flui para os relatórios.

***

## 🧪 Eventos personalizados (opcional)

Quer marcar ações que importam para o seu negócio — ex.: **orçamento solicitado**, **vídeo assistido**, **botão clicado**? A janela de instalação traz os exemplos prontos para copiar:

**Ação com JavaScript** — chame em qualquer ponto do seu código (vale para contar conversão):

```js
wz.track('orcamento_solicitado', { plano: 'pro' })
```

**Identificar o visitante** — liga a visita a nome, telefone e e-mail (aparece na jornada e no contato):

```js
wz.identify({ name: 'Maria', phone: '5547999999999', email: 'maria@exemplo.com' })
```

**Botão ou link no HTML** — sem JavaScript; o clique vira um evento com o nome que você der:

```html
<button data-wz-event="abriu_video">Ver vídeo</button>
```

**Formulário no HTML** — o envio é registrado com o nome do formulário, sem enviar os dados digitados:

```html
<form data-wz-form-name="contato"> ... </form>
```

> 💡 Os eventos que você cadastrou como **conversão** alimentam o **funil** do relatório. Eventos personalizados novos aparecem como sugestão na edição do site conforme vão acontecendo.

***

## 🔗 Integração com Tracking Links e WebChat

* Quem chega pelos seus **Tracking Links** (ou por qualquer URL com `utm_campaign`) aparece com **origem e campanha** na jornada — e alimenta a tabela **Campanhas** do relatório.
* Em links manuais, adicione `?wz_tk=CHAVE_DO_LINK` à URL para a visita aparecer ligada ao link.
* Se o visitante chamar no **WebChat**, a conversa **herda a mesma identificação** — no detalhe do visitante aparece o botão **"Abrir atendimento do WebChat"**.

***

## 📊 O relatório (dashboard)

Clique no ícone **📊 (Relatório)** na linha do site. O relatório abre com filtro de **período** (padrão: últimos 30 dias) e cinco abas:

### Visão geral

* **Cards:** Online, Visitantes, Novos/Recorrentes, Sessões (com páginas por sessão), Tempo médio (com tempo ativo) e Conversões (com taxa).
* **Gráfico** de sessões, visitantes e conversões por dia.
* **Funil:** Visitantes → Sessões → Páginas vistas → Conversões.
* **Origem do visitante, Dispositivo e Navegador** (gráficos de rosca).
* **Mapa de calor** de visitas por dia e hora.
* **Campanhas** (UTM) e **Tracking links** com sessões e conversões.

### Online

A lista de **quem está no site agora**, atualizando automaticamente: nome (se identificado), página atual, localização, origem, dispositivo, páginas vistas e tempo de visita — com botão para **ver a jornada**.

### Visitantes

O histórico de todos os visitantes do período, com busca por **nome, telefone, e-mail ou cidade**, filtros por **identificados/anônimos**, **link de origem** e **só quem converteu**. Mostra sessões, páginas, conversões, tempo ativo e última visita.

### Páginas e eventos

* **Páginas mais visitadas** — visualizações, visitantes, tempo médio e rolagem média.
* **Páginas de saída** — onde os visitantes mais encerraram a visita.
* **Eventos e conversões** — cada evento com o total registrado.

### Mapa

O mapa com os **pontos por cidade** — quantos visitantes e quantos identificados em cada uma.

***

## 👤 Jornada do visitante

Em qualquer linha (Online ou Visitantes), o botão **Ver jornada** abre o detalhe do visitante:

* **Resumo:** sessões, páginas, conversões, tempo ativo, primeira/última visita, localização.
* **Primeiro toque:** origem, de onde veio (referrer) e por qual página entrou.
* **Dispositivo:** aparelho, sistema, navegador, tela, idioma e fuso.
* **Contato:** telefone e e-mail (quando identificado), com atalho para o atendimento do WebChat e para o tracking link de origem.
* **Linha do tempo** de cada visita, evento por evento: página vista (com tempo e rolagem), cliques, formulários, conversões destacadas em verde.

***

## ⚖️ Privacidade (LGPD)

O módulo já nasce com cuidado com a privacidade do visitante:

* **Sem cookies** de rastreamento e **sem capturar o valor** dos campos de formulário.
* **Anonimização de IP** (padrão ligada): guarda o IP sem o último bloco.
* **Do Not Track:** opção para respeitar quem pediu para não ser rastreado no navegador.
* Formulários: registra **que foi enviado**, mas **não os dados digitados**.

***

## ❓ Dúvidas rápidas

* **Preciso instalar algo no servidor?** Não — só colar o script no site.
* **O script deixa o site lento?** Não. Ele é assíncrono e não bloqueia o carregamento.
* **Cada site precisa do próprio código?** Sim — um site cadastrado por domínio, cada um com seu script.
* **Consigo saber quem é o visitante?** Só se ele se identificar (via `wz.identify` ou chegando por um tracking link associado a um contato). Sem isso, é "Visitante anônimo".
* **Dá para desligar o rastreamento temporariamente?** Sim — pelo interruptor **Ativo** na linha do site. As configurações e os dados ficam guardados.
* **Excluir um site apaga os dados?** Sim — excluir o site apaga todos os visitantes, sessões e eventos dele. O sistema pede confirmação.
* **Cadastrei o site, mas nada aparece. O que conferir?** 1) O script foi colado **antes do `</head>`** em todas as páginas? 2) O site está com o **Rastreamento ativo**? 3) O domínio do site está na lista de **domínios permitidos** (ou a lista está vazia)? 4) Abra o site em outra aba e espere alguns segundos — a aba **Online** atualiza sozinha.
