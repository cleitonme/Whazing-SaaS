---
icon: hub
---

# Hub MultiAPIWA (conexão integrada)

O **Hub MultiAPIWA** é a forma mais simples de conectar o **WhatsApp Oficial (API Oficial / WABA)** ao Whazing.

Com ele, a conexão acontece **dentro do próprio Whazing**: você clica em um botão, a tela oficial de cadastro do WhatsApp Business aparece e o sistema conduz cada etapa até o final. Você **não precisa copiar tokens, configurar webhook ou cadastrar aplicativos na Meta** — tudo isso fica por conta da integração.

> 💰 **Mensalidade:** R$ 25,00 por canal (número) conectado
>
> ✅ Compatível com **Coexistência (Coex)** — continue usando o WhatsApp no celular normalmente
>
> 🔀 O Hub é **opcional**: cada tipo de canal pode usar o Hub **ou** outra forma de conexão disponível no sistema

***

## 🤔 O que é o Hub?

Pense no Hub como um **atalho inteligente** para conectar canais oficiais.

Para usar a API Oficial do WhatsApp, o sistema precisa de uma "ponte" entre o seu número e o Whazing. Existem duas formas de criar essa ponte:

| | **App próprio** (forma tradicional) | **Hub MultiAPIWA** |
|---|---|---|
| Cadastro de aplicativo na Meta | ✅ Necessário (feito pelo administrador) | ❌ Desnecessário |
| Preencher ID do app, chave secreta etc. | ✅ Necessário | ❌ Desnecessário |
| Copiar tokens e configurar webhook | ✅ Necessário | ❌ Automático |
| Tela de conexão | Configurações técnicas em vários lugares | **Dentro do Whazing, em poucos cliques** |
| Cobrança | Sem cobrança extra por ponte | **R$ 25,00/mês por canal** |

Em resumo: **com o Hub, o Whazing faz o trabalho técnico por você.**

***

## ⭐ Qual é a vantagem?

1. **Conexão dentro do Whazing** — você não sai do sistema para fazer configurações em outros painéis.
2. **Nada de dados técnicos** — não é preciso informar tokens, webhook, ID de aplicativo ou chave secreta. O próprio Whazing conduz o processo.
3. **Experiência oficial da Meta** — a tela de cadastro do WhatsApp Business que aparece é a oficial da Meta, parecida com quando você conecta um aplicativo novo no celular usando o Facebook.
4. **Menos chance de erro** — sem digitação de dados técnicos, não há risco de preencher algo errado.

***

## 📱 Quais canais estão disponíveis?

Atualmente, o Hub está disponível para:

* ✅ **WhatsApp Oficial (WABA)** — disponível agora

Previstos para o futuro:

* ⏳ Facebook — em breve
* ⏳ Instagram — em breve

> ⚠️ Facebook e Instagram **ainda não estão liberados** pelo Hub. Quando forem ativados, esta documentação será atualizada.

***

## 🔌 Como conectar um WhatsApp Oficial pelo Hub?

O processo acontece **inteiramente dentro do Whazing**. Siga o passo a passo:

### 1. Abra a lista de canais

No menu do Whazing, acesse **Canais** e clique em **Adicionar Canal** (ou no botão de adicionar novo canal).

> **📸 Sugestão de print:** tela de Canais mostrando o botão de adicionar novo canal.

### 2. Escolha o tipo "WhatsApp Oficial"

Na lista de tipos de canal, selecione **WhatsApp Oficial** (também conhecido como WABA). É a conexão oficial do WhatsApp, indicada para empresas que buscam maior estabilidade e conformidade com as regras da Meta.

### 3. Clique em "Conectar WABA"

Aparecerá o botão **Conectar WABA**. Ao clicar nele, o Whazing abre a tela de conexão.

> **📸 Sugestão de print:** botão "Conectar WABA" exibido ao selecionar o tipo WhatsApp Oficial.

### 4. Inicie a conexão com a Meta

Na tela **Conectar WhatsApp Business**, você verá:

* Informações importantes sobre requisitos, cobranças da Meta e regras da API Oficial (vale a pena ler!);
* O botão **Conectar WhatsApp**, para iniciar o cadastro.

Clique em **Conectar WhatsApp**. Uma janela da Meta (Facebook) será aberta para você fazer login e autorizar a conexão.

> 💡 **Dica:** se a janela não abrir, seu navegador pode estar bloqueando janelas extras (pop-ups). Permita os pop-ups para o site do Whazing e tente novamente. Se você usa **Firefox**, a própria tela mostra um passo a passo para liberar a conexão.

> **📸 Sugestão de print:** tela "Conectar WhatsApp Business" com o botão "Conectar WhatsApp".

### 5. Faça login na Meta e siga as etapas

Na janela da Meta:

1. Faça login com a conta do **Facebook** ligada ao seu WhatsApp Business.
2. Selecione a empresa e o número do WhatsApp que deseja conectar.
3. Siga as etapas apresentadas pela Meta até concluir a autorização.

> ⚠️ Certifique-se de selecionar a conta comercial e o número corretos para evitar problemas na vinculação.

### 6. Pronto! 🎉

Ao voltar para o Whazing, você verá a mensagem:

> **WhatsApp Business conectado com sucesso!**

O canal será criado automaticamente no Whazing, já vinculado ao Hub. Você pode clicar em **Ir para Canais** para vê-lo na lista de canais.

***

## 🔐 Preciso informar token ou webhook?

**Não.** 🎉

Na conexão pelo Hub você **não precisa**:

* ❌ Copiar ou colar tokens;
* ❌ Configurar webhook;
* ❌ Criar aplicativo na Meta for Developers;
* ❌ Informar ID de aplicativo, chave secreta ou ID de configuração.

O Whazing cuida de tudo isso automaticamente durante a conexão. Você só precisa ter em mãos:

* ✅ Uma **conta Facebook ativa**;
* ✅ Uma conta **Business Manager configurada**;
* ✅ A **empresa verificada pela Meta** (necessária para ativar a API Oficial);
* ✅ Um **cartão de crédito cadastrado na Meta** (exigência da própria Meta, pois ela cobra pelas mensagens da API Oficial — essa cobrança é separada da mensalidade do Hub).

***

## 🔄 O Hub é obrigatório?

**Não.** O uso do Hub é **opcional e configurado por tipo de canal**.

* O administrador do sistema pode **ligar ou desligar** o Hub para cada tipo de canal (WhatsApp Oficial e, no futuro, Facebook e Instagram) nas configurações internas de canais. O usuário comum do atendimento não precisa se preocupar com isso.
* **Com o Hub ligado** para o WhatsApp Oficial, a conexão acontece direto pelo Whazing, como mostrado acima. Nessa situação, as conexões usam o aplicativo centralizado do Hub, e os aplicativos próprios cadastrados ficam **inativos** para esse canal enquanto o Hub estiver ligado — o próprio sistema avisa isso na tela de configuração.
* **Com o Hub desligado**, o canal volta a usar a forma de conexão tradicional, com aplicativo próprio.

> 💡 Ou seja: o mesmo sistema pode ter canais conectados pelo Hub e canais conectados de outras formas, conforme a configuração de cada tipo de canal.

***

## 💰 Quanto custa?

O Hub possui cobrança própria, **separada da cobrança do Whazing**:

> **R$ 25,00 por mês, por canal (número) conectado.**

**Exemplo:** se sua empresa conectar 3 números pelo Hub, a cobrança do Hub será de **R$ 75,00 por mês** — além do valor do seu plano Whazing.

> ⚠️ **Atenção:** a cobrança da **Meta** pelas mensagens da API Oficial é outra cobrança, feita diretamente pela Meta. O valor do Hub **não inclui** essas cobranças.

***

## 🧾 Como funciona a cobrança do Hub?

A cobrança do Hub funciona de forma simples:

* **Geração da fatura:** todo dia **01** do mês é gerada a fatura com os canais usados no período.
* **Prazo de pagamento:** você tem até o **dia 10** para pagar.
* **Acompanhamento:** as faturas ficam disponíveis no **painel do Hub**, na área **Faturas**, onde você também pode pagar cada fatura pelo botão **Pagar**.

> 💡 Enquanto o mês está em andamento, o painel mostra o valor como **"Estimativa até agora"** — ele cresce conforme os dias passam, até o fechamento da fatura.

### 💸 Cobrança proporcional

Se um canal for conectado ou desconectado **no meio do mês**, a cobrança é **proporcional aos dias utilizados** — você paga apenas pelo tempo em que o canal ficou ativo.

* O painel do Hub mostra essa situação com o texto **"cobrança proporcional ao tempo de uso"**.
* **Valor mínimo:** cada canal tem uma cobrança mínima de **R$ 10,00**. Se o cálculo proporcional der um valor muito baixo, é aplicado o mínimo de R$ 10,00 por canal.

**Exemplo simples:** um canal conectado no dia 16 (metade de um mês de 30 dias) será cobrado proporcionalmente pelos dias restantes, não os R$ 25,00 cheios. Se a conta proporcional der menos de R$ 10,00, entra o mínimo de **R$ 10,00**.

***

## ➕ O canal pode ter cobrança adicional?

Sim. Além da mensalidade do Hub, existem os **adicionais de canal**. Funciona assim:

* Cada plano do Whazing inclui uma **quantidade de canais**. Quando essa quantidade acaba, é possível **comprar canais extras** (adicionais).
* Alguns tipos de canal podem ter **valores adicionais diferentes** — por exemplo, um valor por canal/mês específico para WhatsApp Oficial e outro para os demais tipos.
* Quando o limite do plano é atingido e você tenta adicionar um novo canal, o sistema mostra a tela **"Você atingiu o limite do seu plano"** com a opção **"Liberar canal"**. Nela aparecem os adicionais disponíveis, o preço por canal (no formato **"R$ valor / canal / mês"**), o **"Total: R$ valor/mês"**, o valor de hoje proporcional (**pró-rata**) e o da próxima renovação.
* Após **"Continuar para pagamento"** e **"Confirmar compra"**, o adicional é ativado e o novo canal pode ser cadastrado.

> 💡 **Resumindo:** o adicional serve para **aumentar a quantidade de canais do plano**. A mensalidade do Hub (R$ 25,00 por canal) é pela **ponte de conexão integrada**. Dependendo da configuração, as duas cobranças podem aparecer juntas.

***

## 🖥️ Painel do Hub: o que você encontra lá

O painel do Hub é um site simples, acessado com o **usuário e senha** do cliente (recebidos quando o acesso é liberado). Ele serve para acompanhar e gerenciar seus canais e cobranças. No menu lateral você encontra:

| Área | O que você vê lá |
|---|---|
| 🏠 **Início** | Visão geral da sua conta |
| 🔗 **Meus canais** | Lista dos canais oficiais conectados, com número, situação e valor mensal. É aqui que você pode **Desconectar** um canal (com confirmação) |
| 🩺 **Saúde dos números** | Qualidade e status que a Meta informa sobre os seus números WhatsApp |
| 🧾 **Faturas** | Suas cobranças, com vencimento, valor e situação. É onde você **paga** as faturas |
| 💳 **Pagamentos** | Histórico dos pagamentos realizados, com recibos |
| ⚡ **Atividade** | Registro dos eventos da conta |
| 👤 **Minha conta** | Seus dados de acesso |
| ❓ **Ajuda** | Suporte |

No Whazing, o administrador também encontra uma página de acompanhamento do Hub em **Central de Configurações → Atendimento → MultiAPIWA (Hub Meta)**, com o **status da cobrança** (Em dia / Em carência / Bloqueado, valor em aberto e link para pagamento) e a tabela **"Canais conectados pelo Hub"**.

***

## ❌ Como cancelar (desconectar) um canal?

O cancelamento é feito **manualmente, pelo painel do Hub**:

1. Acesse o **painel do Hub** com seu usuário e senha.
2. No menu lateral, clique em **Meus canais**.
3. Encontre o canal que deseja cancelar e clique em **Desconectar**.
4. Confirme a ação na janela que aparece.

**O que acontece depois do cancelamento:**

* O canal sai da cobrança — você deixa de pagar os R$ 25,00 referentes a ele.
* Se a desconexão acontecer no meio do mês, o período já utilizado é cobrado **proporcionalmente** (respeitando o mínimo de R$ 10,00 por canal).
* O canal desconectado continua aparecendo na lista, marcado como desconectado — há uma opção **"Mostrar desconectados"** para exibi-los ou ocultá-los.

> ⚠️ **Atenção:** desconectar o canal no painel do Hub também **interrompe o atendimento** por aquele número no Whazing. Se a intenção é apenas parar de usar o Hub, mas manter o número conectado, fale com o suporte sobre as outras formas de conexão.

> **📸 Sugestão de print:** tela "Meus canais" do painel do Hub, mostrando o botão "Desconectar".

***

## 🆘 Problemas comuns

### "A janela da Meta não abre"

Seu navegador pode estar bloqueando janelas extras (pop-ups). Permita os pop-ups para o site do Whazing e clique novamente em **Conectar WhatsApp**.

### "Uso Firefox e a conexão não inicia"

O Firefox bloqueia por padrão um recurso da Meta usado na conexão. A própria tela mostra o passo a passo: clique no **ícone de escudo 🛡️** na barra de endereço e desative a proteção contra rastreamento **para este site**, depois clique em **Conectar WhatsApp** novamente.

### "Minha empresa não está verificada na Meta"

A API Oficial exige empresa verificada pela Meta. Verifique o status em **Business Manager → Configurações da Empresa → Informações da Empresa** e siga as orientações da Meta.

### "Conectei, mas o canal não aparece"

Aguarde alguns instantes e atualize a lista de canais. Se persistir, utilize o botão **Atualizar** na página do Hub em **Central de Configurações** ou entre em contato com o suporte.

### "Aparece 'Bloqueado' ou 'Em carência' na cobrança"

Significa que há **fatura do Hub em aberto**. Regularize o pagamento até a data mostrada na tela para evitar o bloqueio automático dos canais. O link de pagamento aparece na própria página do Hub.

***

## ❓ Perguntas frequentes

#### O que é o Hub MultiAPIWA?
É a integração que permite conectar o WhatsApp Oficial ao Whazing **sem configurações técnicas** — a conexão acontece dentro do próprio sistema, em poucos cliques.

#### Preciso criar um Chatbot para usar o Hub?
Não. O Hub não tem relação com Chatbot; ele é apenas a **forma de conexão** do canal.

#### Preciso informar token ou webhook?
**Não.** O Whazing faz a conexão automaticamente. Você só faz login na Meta e autoriza.

#### O Hub é obrigatório?
Não. Ele é **opcional por tipo de canal** — o administrador escolhe se o WhatsApp Oficial (e futuramente Facebook e Instagram) usará o Hub ou a conexão tradicional.

#### Quanto custa?
**R$ 25,00 por mês, por canal conectado**, cobrados separadamente do Whazing. A fatura é gerada todo dia 01, com pagamento até o dia 10.

#### Vou pagar R$ 25,00 mesmo conectando no meio do mês?
Não. A cobrança é **proporcional aos dias utilizados**, com mínimo de **R$ 10,00 por canal**.

#### A cobrança do Hub inclui as cobranças da Meta?
Não. A Meta cobra separadamente pelas mensagens da API Oficial. O valor do Hub é apenas pela ponte de conexão integrada.

#### Posso cancelar um canal quando quiser?
Sim. Basta acessar o **painel do Hub → Meus canais → Desconectar**. O período utilizado é cobrado proporcionalmente.

#### Quais canais o Hub suporta hoje?
Atualmente, apenas o **WhatsApp Oficial (WABA)**. Facebook e Instagram estão previstos para o futuro.

#### Continuo usando o WhatsApp no celular?
Sim, quando estiver usando a **Coexistência (Coex)**. O Hub é compatível com esse modo.

***

## Suporte

Em caso de dúvidas, entre em contato:

📱 WhatsApp: +55 48 3197-0877

📱 WhatsApp: +55 48 3197-0599

O atendimento inicial é realizado por um assistente virtual.

Para falar com nossa equipe, envie:

**Atendimento Humano**
