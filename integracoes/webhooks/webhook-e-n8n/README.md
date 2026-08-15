---
icon: webhook
---

# Webhook e N8N

## 🌐 **WebHook - Visão Geral**

O sistema **Whazing** oferece suporte a **WebHooks** de duas maneiras principais, configuradas em um **único lugar**:

> **Automação e Integrações → Webhooks/N8N**

Na tela, há **duas abas**:

* 🧩 **Integrações por Canal** — o webhook é aplicado a **todos os atendimentos de um canal** (ex.: um número de WhatsApp conectado).
* ⚙️ **Integrações por Fila** — o webhook é aplicado **somente aos atendimentos de uma fila** (integrações do tipo **N8N**).

***

### 🧩 **1. Pela Fila (Integrações por Fila)**

**Caminho:** `Configurações → Automação e Integrações → Webhooks → aba Integrações por Fila`

1. Clique em **Nova Integração N8N**.
2. Preencha os campos:
   * **Nome da integração** (obrigatório — serve para você identificar)
   * **URL do Webhook/N8N** (obrigatória — é para onde o Whazing fará o `POST`)
   * **Eventos** — marque quais eventos deseja receber
3. (Opcional) Em **Mostrar configurações avançadas**, informe o **Bearer Token / API Key**.
4. Clique em **Testar integração** para confirmar que a URL responde.
5. Clique em **Salvar**.
6. Na lista, clique no botão **foguete (Vincular à fila)**. O assistente vai:
   * procurar uma fila já vinculada a essa integração **ou** criar uma nova fila com o mesmo nome da integração;
   * vincular a integração à fila, deixando-a **ativa automaticamente** (a opção **“Inicia Integração ao transferir”** já vem marcada para integrações N8N);
   * (opcional) permitir escolher os **canais** que serão associados a essa fila.

> 💡 **Importante:** se você preferir, pode vincular a integração a uma fila **existente** por **Cadastro → Filas/Integrações → Filas** (editando a fila e selecionando a integração). A opção **“Inicia Integração ao transferir”** fica disponível na edição da fila.

**Quando os eventos são enviados?**

* Quando um ticket é **transferido para a fila vinculada**, a integração é ativada para aquele ticket;
* Se **“Inicia Integração ao transferir”** estiver marcado, a integração dispara **imediatamente** ao transferir (usando a última mensagem recebida);
* A partir daí, **cada nova mensagem** (recebida ou enviada) daquele ticket dispara o webhook, respeitando os eventos marcados.

***

### 🔧 **2. Pelo Canal (Integrações por Canal)**

**Caminho:** `Configurações → Automação e Integrações → Webhooks → aba Integrações por Canal`

1. A aba lista os canais disponíveis (WhatsApp, WhatsApp Oficial, etc. — os canais de **E-mail** e **SMS** não aparecem, pois não usam webhook por canal).
2. Clique em **Configurar** no canal desejado.
3. Ative o interruptor **Integração Ativada**.
4. Informe a **URL do Webhook/N8N** (obrigatória — endereço que receberá os eventos).
5. Marque os **Eventos** desejados.
   * Caso **nenhum evento** esteja marcado, **nenhuma requisição será enviada**.
6. (Opcional) Em **Mostrar configurações avançadas**, informe o **Bearer Token / API Key** — usado para validar a origem do webhook no destino.
7. Clique em **Testar integração** e depois em **Salvar**.

> 💡 O status do canal muda para **Ativo** assim que a opção **Integração Ativada** estiver ligada. Na aba de filas, o status fica **Ativo** quando a integração está vinculada a pelo menos uma fila.

***

## 📋 **Campos da tela (explicados um a um)**

### Na aba **Integrações por Canal**

| Campo / Opção | O que faz |
| --- | --- |
| **Integração Ativada** | Liga ou desliga o envio de eventos do canal para o webhook. Se estiver desligada, nada é enviado, mesmo com URL preenchida. |
| **URL do Webhook/N8N** | Endereço (`https://...`) que receberá as requisições `POST`. Obrigatória e precisa ser uma URL válida. |
| **Eventos** | Lista de interruptores que escolhem **quais acontecimentos** geram envio (ver tabela abaixo). |
| **Mostrar configurações avançadas** | Expande a seção de autenticação. |
| **Bearer Token / API Key** | Token opcional enviado no cabeçalho da requisição. Deixe em branco se o destino não exigir autenticação. |
| **Testar integração** | Envia uma requisição de teste real (feita pelo servidor) para a URL informada e mostra o resultado. |
| **Salvar** | Grava a configuração do canal. |

### Na aba **Integrações por Fila**

| Campo / Opção | O que faz |
| --- | --- |
| **Nome da integração** | Nome de identificação. Obrigatório. |
| **URL do Webhook/N8N** | Endereço que receberá as requisições `POST`. Obrigatória e precisa ser uma URL válida. |
| **Eventos** | Lista de interruptores que escolhem **quais acontecimentos** geram envio (ver tabela abaixo). |
| **Mostrar configurações avançadas** | Expande a seção de autenticação. |
| **Bearer Token / API Key** | Token opcional enviado no cabeçalho da requisição. |
| **Testar integração** | Envia uma requisição de teste real para a URL. |
| **Salvar** | Cria/atualiza a integração. Ao criar, o sistema já abre o assistente de **vínculo com a fila**. |

Na lista de integrações por fila também existem os botões de ação em cada card:

* 🚀 **Vincular à fila** — abre o assistente que cria/víncula a fila e ativa a integração;
* ✏️ **Editar** — abre o mesmo formulário para alterar nome, URL, eventos e token;
* 📄 **Duplicar** — cria uma cópia da integração com o nome `(cópia)`;
* 🗑️ **Excluir** — remove a integração (confirme na janela).

***

## 🔔 **Eventos disponíveis**

> ⚠️ Os nomes abaixo são exatamente os que existem no sistema atual. Não invente outros: o que não estiver nesta lista não gera webhook.

### Na aba **Integrações por Canal** (9 opções)

| Evento na tela | O que dispara |
| --- | --- |
| **Mensagem recebida** | Uma mensagem **recebida** no canal (não enviada por você). |
| **Mensagem enviada** | Uma mensagem **enviada** pelo seu atendente/bot no canal. |
| **Novo ticket** | Um **novo ticket** é aberto — tanto quando **o usuário cria** o ticket quanto quando ele é **aberto automaticamente** por uma mensagem recebida. |
| **Ticket transferido** | O ticket é **transferido** para outra fila ou usuário. |
| **Ticket fechado** | O ticket é **finalizado/encerrado**. |
| **Ticket em atendimento** | Filtro: envia webhook de **mensagem** apenas para tickets com status **Aberto** (ver regra abaixo). |
| **Ticket pendente** | Filtro: envia webhook de **mensagem** apenas para tickets com status **Pendente** (ver regra abaixo). |
| **Mensagens de grupo** | Habilita o envio de eventos de **mensagens de grupos**. Se desligado, mensagens de grupo **não** geram webhook. |
| **Enviar mídia em base64** | Ao enviar uma mensagem com mídia, inclui o **conteúdo da mídia em base64** no campo `mediaBase64` do JSON. ⚠️ Exige mais processamento e pode impactar a performance em fluxos com muitos arquivos. |

### Na aba **Integrações por Fila** (6 opções)

| Evento na tela | O que dispara |
| --- | --- |
| **Mensagem recebida** | Uma mensagem **recebida** em um ticket que esteja na fila vinculada. |
| **Mensagem enviada** | Uma mensagem **enviada** em um ticket que esteja na fila vinculada. |
| **Ticket em atendimento** | Filtro: envia webhook de **mensagem** apenas para tickets **Abertos**. |
| **Ticket pendente** | Filtro: envia webhook de **mensagem** apenas para tickets **Pendentes**. |
| **Mensagens de grupo** | Habilita o envio de eventos de **mensagens de grupos**. |
| **Enviar mídia em base64** | Inclui o **conteúdo da mídia em base64** no campo `mediaBase64` do JSON. |

> 🔀 **Diferença importante entre as abas:** a aba **Canal** possui os eventos de **ciclo de vida do ticket** (Novo ticket, Ticket transferido, Ticket fechado). A aba **Fila** **não** possui esses eventos — ela envia apenas eventos de **mensagem** (com os filtros de status), e somente para tickets que estejam na fila vinculada.

***

## 🎯 **Entendendo “Tickets em aberto” e “Tickets pendentes”**

Essa configuração é **muito importante** e costuma gerar dúvidas.

Ela define **de quais tickets você quer receber o webhook de mensagem**.

#### 📌 Regra simples:

* Se **“Ticket em atendimento” (aberto) estiver ativado** → você receberá webhook das **mensagens** de tickets com status **Aberto**.
* Se **“Ticket pendente” estiver ativado** → você receberá webhook das **mensagens** de tickets com status **Pendente**.
* Se **os dois estiverem desativados** ❌ → você **não receberá nenhum webhook de mensagem**.

#### 🧠 Exemplo prático

Existe 1 ticket **Aberto** e 1 ticket **Pendente**:

| Cenário | Aberto | Pendente | Resultado |
| --- | --- | --- | --- |
| 1 | ✅ Ativado | ❌ Desativado | Webhook **apenas das mensagens** do ticket Aberto |
| 2 | ❌ Desativado | ✅ Ativado | Webhook **apenas das mensagens** do ticket Pendente |
| 3 | ❌ Desativado | ❌ Desativado | **Nenhum webhook de mensagem**, mesmo com mensagens chegando |

> ⚠️ **Atenção:** se você ativar “Mensagem recebida” / “Mensagem enviada”, mas deixar **Aberto e Pendente desativados**, **nenhuma mensagem será enviada** para o seu webhook.

> 💡 Esses dois interruptores influenciam **apenas os eventos de mensagem**. Os eventos de **Novo ticket, Ticket transferido e Ticket fechado** (aba Canal) são enviados independentemente deles.

***

## 🧪 **Testando o webhook**

Dentro do formulário (canal ou fila), clique em **Testar integração**:

1. O Whazing envia uma requisição de **teste real** para a URL (feita **pelo servidor**, com o mesmo cabeçalho de autenticação usado nos envios reais);
2. O corpo enviado no teste é:
   ```json
   {
     "event": "test",
     "origin": "webhook-config",
     "timestamp": "2026-08-15T12:00:00.000Z"
   }
   ```
3. O resultado mostra **Status HTTP** e **Duração**:
   * ✅ Sucesso → a URL respondeu com status **2xx**;
   * ❌ Falha → a URL não respondeu ou respondeu com erro (status **4xx/5xx**, tempo excedido, URL inacessível etc.).

> 💡 O teste **não** depende dos eventos marcados: ele serve apenas para confirmar que a URL está acessível e aceita a requisição. Para confirmar que os **eventos** estão funcionando, gere um evento real (ex.: envie uma mensagem) e verifique se o destino recebeu.

***

## 🔑 **Como o token é enviado (autenticação)**

O campo **Bearer Token / API Key** é opcional. Quando preenchido, o Whazing envia o token no **cabeçalho da requisição**:

```
X-N8N-API-KEY: seu-token-aqui
```

> ⚠️ **Importante:** apesar do nome na tela (“Bearer Token”), o token é enviado no cabeçalho **`X-N8N-API-KEY`** (padrão usado pelo N8N), e **não** no cabeçalho `Authorization: Bearer`. Se o seu destino validar o cabeçalho `Authorization`, a autenticação não será reconhecida — nesse caso, valide pela `X-N8N-API-KEY`.

***

## 🔁 **Retentativas e comportamento de envio**

* O envio é feito via requisição `POST`, com `Content-Type: application/json`;
* O primeiro envio acontece com um pequeno **atraso de 3 segundos** após o evento;
* Se a URL falhar, o Whazing tenta **mais 2 vezes** (total de **3 tentativas**), com intervalo fixo de **3 minutos** entre elas;
* Após as tentativas, se ainda falhar, o envio fica registrado como **falha** (você pode acompanhar na fila **SendWebhook** do Bull Board e nos logs do servidor).

***

## 🛠️ **Problemas comuns e como verificar**

### 1. Nada chega no destino

Verifique, nesta ordem:

1. **Integração Ativada** (canal) está ligada? Ou a integração (fila) está **vinculada a uma fila** e o ticket está **nessa fila**?
2. A **URL** está correta e acessível (use o botão **Testar integração**)?
3. Os **eventos** estão marcados? Lembre-se: sem eventos marcados, nada é enviado.
4. **“Ticket em atendimento” / “Ticket pendente”** estão ativados? Se ambos estiverem desligados, **nenhuma mensagem** gera webhook.
5. É uma **mensagem de grupo**? Então **“Mensagens de grupo”** precisa estar ativada.
6. O envio pode estar em **retentativa** (atraso de 3s + até 2 novas tentativas com 3 min de intervalo).

### 2. Teste falha

* Confira se a URL usa `https://` e está acessível de fora (firewall/SSL);
* Se o destino exige autenticação, confira o **token**;
* Se o destino responde com erro (ex.: 401/403/404/500), o teste mostra o **status HTTP** — corrija no destino;
* O tempo limite do teste é de **10 segundos**: URLs muito lentas podem falhar no teste, mas funcionar em produção.

### 3. Como confirmar que está funcionando de verdade

* **Testar integração** → confirma que a URL aceita requisições;
* **Gere um evento real** (envie/receba uma mensagem no canal/fila) e veja se o destino recebeu;
* **N8N**: abra o fluxo → aba **Executions** e veja se o nó *Webhook* recebeu a requisição;
* **Servidor**: na fila **SendWebhook** do **Bull Board** você vê os envios, tentativas e falhas. Em caso de erro, os logs do backend registram `WebHook -> Webhook: error`.

***

## 🔄 **Diferença entre WebHook e API**

| Tipo        | Função principal                             | Exemplo de uso                                               |
| ----------- | -------------------------------------------- | ------------------------------------------------------------ |
| **WebHook** | Receber informações do Whazing em tempo real | Ser notificado sobre novas mensagens ou alterações           |
| **API**     | Enviar ou alterar informações no Whazing     | Enviar mensagens, atualizar contatos, mudar status de ticket |

**Resumo:**

* 🔔 **WebHook** → O Whazing envia informações para você.
* 🧭 **API** → Você envia informações para o Whazing.

> 📢 **Importante:** para usar WebHooks e APIs corretamente, é essencial configurar os **endpoints** do seu sistema para receber os dados enviados pelo Whazing.

***

## 📚 **Modelos para Estudo**

* [Baixe e importe o exemplo de fluxo compatível com o Whazing](https://github.com/cleitonme/Whazing-SaaS/blob/main/docs/integra%C3%A7%C3%B5es/Webhook%20e%20N8N/Modelo_Whazing_n8n.json)
* [Baixe e importe o modelo com exemplos de endpoints adicionais](https://github.com/cleitonme/Whazing-SaaS/blob/main/docs/integra%C3%A7%C3%B5es/Webhook%20e%20N8N/modelo_com_alguns_endpoints.json)

> 🙌 Agradecimento especial a **Elizeu Garcez** e **Ricardo Schonfelder Filho** por compartilharem os modelos.

***

## 🧠 **Node Whazing para N8N**

Recomenda-se sempre consultar a **documentação oficial da API**, pois o pacote pode não conter todos os endpoints disponíveis.

📦 [https://www.npmjs.com/package/n8n-nodes-whazing-api](https://www.npmjs.com/package/n8n-nodes-whazing-api)

***

<figure><img src="../../../.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt="Exemplo de fluxo N8N integrado ao Whazing"><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt="Configuração de WebHook no Whazing"><figcaption></figcaption></figure>
