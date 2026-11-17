# Ativar e vender (administrador)

Esta página é para o **dono do Whazing (administrador do SaaS)**. Ela mostra como **liberar o Hub**, **ativar por canal** e **vender os canais** para os seus clientes.

> 👤 **Cliente final?** A página que explica a conexão e os custos é a [Hub MultiAPIWA (conexão integrada)](./).

***

## ✅ Antes de começar

Você vai precisar de:

* [ ] Um Whazing instalado e acessível por uma **URL** (o endereço do seu sistema);
* [ ] Acesso ao **Painel SaaS** com um usuário administrador;
* [ ] O acesso ao Hub **liberado pelo suporte Whazing** (próximo passo);
* [ ] Definir **quais canais** você quer oferecer: WhatsApp Oficial, Instagram, Facebook (ou todos).

> ℹ️ As **credenciais são por instalação**: uma instalação do Hub atende o **seu** Whazing inteiro, com todos os clientes e canais.

***

## 🔑 Passo 1 — Solicitar o acesso e receber os três dados

Fale com o **suporte Whazing** e peça a liberação do **Hub MultiAPIWA**. Você vai receber **três dados**:

| Dado                                  | Onde aparece no Whazing                     | O que é                                                           |
| ------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------- |
| **URL do backend**                    | campo **URL da API do MultiAPIWA**          | Endereço do servidor que faz a ponte entre o seu Whazing e a Meta |
| **Token de integração da instalação** | campo **Token de integração da instalação** | Identifica o seu Whazing perante o Hub                            |
| **Segredo HMAC da instalação**        | campo **Segredo HMAC da instalação**        | Assinatura de segurança das mensagens trocadas                    |

> 🔒 **Trate esses dados como senha.** Não publique, não envie em grupo e não coloque em prints. Quem tiver os três consegue agir como a sua instalação.

### ⚠️ A URL do backend é obrigatória — e precisa ser atualizada

* A liberação **considera a URL do backend** do seu Whazing. Ela **precisa ser informada** para o Hub saber onde entregar as mensagens.
* **Se a URL mudar** (troca de domínio, mudança de VPS, túnel/proxy novo), **informe novamente ao suporte**. Enquanto isso não for feito, as conexões **param de funcionar**.

> 📌 Vale a pena revisar sempre que você fizer: [Trocar Domínio](../../../instalacao-and-vps/trocar-dominio-instalacao-whazing.md) ou [Migração de VPS](../../../instalacao-and-vps/migracao-do-sistema-whazing-para-nova-vps.md).

***

## 🧩 Passo 2 — Colar as credenciais (uma única vez)

1. No Painel SaaS, acesse **Integrações → WhatsApp Oficial (WABA)**. _(Também é possível preencher em **Facebook Messenger** ou **Instagram** — o bloco de credenciais é o mesmo.)_
2. Localize o bloco **"Credenciais da instalação MultiAPIWA (valem para WhatsApp Oficial, Facebook e Instagram)"**.
3. Preencha os três campos e **salve**:

```
URL da API do MultiAPIWA      →  ex.: https://hubapi.multiapiwa.com.br
Token de integração           →  (recebido do suporte)
Segredo HMAC da instalação    →  (recebido do suporte)
```

4. As credenciais ficam **compartilhadas pelos três canais**. Nos outros canais, os campos já aparecem preenchidos.

> 💡 O bloco de credenciais só aparece quando o Hub está **ligado em pelo menos um canal**. Isso evita pedir dados técnicos para quem não usa o Hub.

***

## 🎛️ Passo 3 — Ligar o Hub no canal que você quer usar

A ativação é **um botão por tipo de canal**. Você pode ligar um, dois ou os três.

### WhatsApp Oficial (WABA)

**Painel SaaS → Integrações → WhatsApp Oficial (WABA)** → ligar **"Hub MultiAPIWA (WhatsApp Oficial)"**.

### Facebook Messenger

**Painel SaaS → Integrações → Facebook Messenger** → ligar **"Hub MultiAPIWA (Facebook)"**.

### Instagram

**Painel SaaS → Integrações → Instagram** → ligar **"Hub MultiAPIWA (Instagram)"**.

### O que acontece ao ligar

| Situação                             | Efeito                                                                                       |
| ------------------------------------ | -------------------------------------------------------------------------------------------- |
| **Hub ligado no canal**              | As conexões daquele canal usam o **App Meta centralizado** do Hub                            |
| **Aplicativos próprios cadastrados** | Ficam **inativos** para aquele canal enquanto o Hub estiver ligado (o sistema avisa na tela) |
| **Hub desligado no canal**           | O canal volta a usar a conexão tradicional, com **App próprio**                              |

> ⚠️ Ligar o Hub em um canal **não** liga nos outros. São decisões separadas.

### Exemplos de combinação

| Cenário                  | O que ligar                                               |
| ------------------------ | --------------------------------------------------------- |
| Só Instagram             | **Instagram** → Hub MultiAPIWA (Instagram)                |
| Instagram + Facebook     | **Instagram** e **Facebook Messenger**                    |
| Todos os canais oficiais | **WhatsApp Oficial (WABA)**, **Facebook** e **Instagram** |

***

## 📢 Passo 4 — Liberar o canal no SaaS (Canais Disponíveis)

Agora diga ao sistema **que esse tipo de canal existe** no seu SaaS:

1. Acesse **Painel SaaS → Integrações → Canais Disponíveis**.
2. Ligue o tipo desejado:

| Tipo na tela           | Para que serve             |
| ---------------------- | -------------------------- |
| **WABA Api Oficial**   | Canais de WhatsApp Oficial |
| **Facebook Messenger** | Canais de Facebook         |
| **Instagram**          | Canais de Instagram        |

3. Salve.

> 🚫 **Sem esse passo o cliente não vê o canal** — nem para conectar, nem para comprar.

***

## 👤 Passo 5 — Liberar no plano do cliente

O canal precisa estar **no plano daquele cliente**:

1. Acesse **Painel SaaS → Comercial → Planos**.
2. Abra o plano (ou crie um novo) e vá até a seção **Canais Disponíveis**.
3. Confira o **limite geral de canais** do plano.
4. Ligue **"Ativar limite de canais por tipo"** se quiser controlar **quantos canais de cada tipo** o plano inclui.
5. Defina a quantidade por tipo — **a quantidade pode ser `0`**.
6. Salve.

> 💡 **Quantidade `0` é válida e é muito usada.** Significa: _"este plano não inclui nenhum canal deste tipo; o cliente compra por adicional"_. É o modelo recomendado para vender Instagram, Facebook ou WABA separadamente.

***

## 🔎 Passo 6 — Conferir se está tudo funcionando

1. Acesse **Painel SaaS → Integrações → MultiAPIWA (Hub Meta)**. _(O cartão só aparece quando o Hub está ligado em pelo menos um canal.)_
2. Confira o **status da cobrança** (**Em dia**, **Em carência** ou **Bloqueado**) e o valor em aberto.
3. Na tabela **"Canais conectados pelo Hub"**, confira:

| Coluna                     | O que conferir                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------- |
| **Tipo**                   | WhatsApp, Instagram ou Facebook                                                       |
| **Número / Identificador** | Se é o canal certo                                                                    |
| **Cliente (empresa)**      | Se o canal está na empresa correta                                                    |
| **Situação**               | **Ativo** é o esperado                                                                |
| **Token**                  | **OK** é o esperado (**Vai expirar** / **Expirado** / **Inválido** = pedir reconexão) |

4. **Teste de ponta a ponta:** peça ao cliente para adicionar o canal, conectar e envie uma mensagem real.

> ✅ Quando aparece o canal em **Ativo**, com **Token OK**, e o cliente recebe a mensagem de teste, a ativação está concluída.

***

## 💵 Vender o canal como adicional

Agora a parte comercial: **você paga R$ 25,00 por canal ao Hub** e **define quanto o seu cliente paga** pelos planos e adicionais.

### 🧠 Como o sistema calcula o que cobrar

O Whazing verifica **dois limites** antes de liberar um canal:

| Limite                       | Pergunta que ele responde                                              |
| ---------------------------- | ---------------------------------------------------------------------- |
| **Limite geral de canais**   | O cliente ainda tem "vaga" na quantidade total de canais do plano?     |
| **Limite por tipo de canal** | O cliente ainda tem vaga **naquele tipo** (Instagram, Facebook, WABA)? |

* Se **falta o limite do tipo** → o sistema cobra o **adicional do tipo** (ex.: _Instagram_).
* Se **também falta o limite geral** → o sistema cobra **o adicional de canais + o adicional do tipo**, na **mesma fatura**.
* Se **falta só o limite geral** → cobra apenas o **adicional de canais**.

### 🛠️ Passo A — Preparar o plano

1. **Painel SaaS → Comercial → Planos** → abra o plano do cliente.
2. Em **Canais Disponíveis**, ligue **"Ativar limite de canais por tipo"**.
3. Marque **Instagram** e coloque a quantidade **`0`**.
4. Defina o **limite geral de canais** (o `total` de canais do plano). Exemplo: **1**.
5. Salve.

Resultado: o cliente **vê** o Instagram na lista, mas **não tem nenhum incluído** — para usar, precisa **comprar**.

> ⚠️ Se **"Ativar limite de canais por tipo"** estiver desligado, **não é possível vender adicionais por tipo**. O sistema controla só o limite geral.

### 🛠️ Passo B — Criar os adicionais com os seus preços

**Painel SaaS → Comercial → Adicionais → Criar Adicional**

**Adicional 1 — o canal extra (limite geral)**

| Campo                  | Valor                      |
| ---------------------- | -------------------------- |
| **Nome**               | Canal adicional            |
| **Tipo**               | **Canais**                 |
| **Quantidade**         | 1                          |
| **Valor mensal**       | **R$ 59,90**               |
| **Planos disponíveis** | os planos que podem vender |
| **Ativo**              | ligado                     |

**Adicional 2 — o canal do tipo Instagram**

| Campo                  | Valor                      |
| ---------------------- | -------------------------- |
| **Nome**               | Instagram                  |
| **Tipo**               | **Instagram**              |
| **Quantidade**         | 1                          |
| **Valor mensal**       | **R$ 99,90**               |
| **Planos disponíveis** | os planos que podem vender |
| **Ativo**              | ligado                     |

> 💡 Os tipos disponíveis para canal são: **Canais** (geral), **WhatsApp Plus**, **WhatsApp Oficial (WABA)**, **Instagram** e **Facebook**. Você pode repetir essa estrutura para cada tipo que quiser vender.

> ℹ️ O adicional de tipo **só tem efeito** em planos que tenham **aquele tipo habilitado** _e_ **"Ativar limite de canais por tipo"** ligado — mesmo que a quantidade inclusa seja `0`. Se faltar um dos dois, o próprio sistema avisa na criação do adicional.

### 🧮 Exemplo A — Cliente sem nenhum canal

**Plano do cliente**

```
Total de canais:        1
Instagram:              0 canais
```

**Adicionais disponíveis**

```
Canal adicional ...... R$ 59,90
Instagram ............ R$ 99,90
```

**O que acontece:** o cliente não tem nenhum canal e tenta adicionar um **Instagram**.

```
Tem vaga no limite geral?       SIM (0 de 1 usado)
Tem vaga no limite do tipo?     NÃO (0 de 0)
        ↓
Cobra apenas o adicional do tipo
        ↓
R$ 99,90/mês
```

> ✅ **Resultado: R$ 99,90 por mês** — e o Instagram passa a aparecer como disponível para ele.

### 🧮 Exemplo B — Cliente que já tem 1 WhatsApp

**Plano do cliente**

```
Total de canais:        1
Instagram:              0 canais
```

**O que já está em uso**

```
1 canal WhatsApp  →  o limite geral de 1 já está ocupado
```

**O que acontece:** o cliente tenta adicionar um **Instagram**.

```
Tem vaga no limite geral?       NÃO (1 de 1 usado)
Tem vaga no limite do tipo?     NÃO (0 de 0)
        ↓
Cobra o adicional de canais + o adicional do tipo
        ↓
R$ 59,90  +  R$ 99,90  =  R$ 159,80/mês
```

> ✅ **Resultado: R$ 159,80 por mês** — tudo na **mesma fatura**, com o valor proporcional do mês de entrada calculado automaticamente.

### 📊 Resumo dos dois cenários

| Situação do cliente            | O que é cobrado                      | Total por mês |
| ------------------------------ | ------------------------------------ | ------------- |
| Nenhum canal, quer Instagram   | Adicional **Instagram**              | **R$ 99,90**  |
| Já tem 1 canal, quer Instagram | Adicional **Canais** + **Instagram** | **R$ 159,80** |

> 💡 **Margem:** em ambos os casos o custo do Hub é **R$ 25,00** pelo canal. A diferença entre esse custo e o preço que você definiu é a **sua receita**.
>
> ⚠️ Valores de exemplo. **Você define os preços** — o sistema mostra sempre o valor real na tela antes do cliente confirmar.

### 🛒 Onde o cliente compra

* **Direto no catálogo de canais**, ao clicar em adicionar canal (o card mostra o valor: _"Adicionar por R$ X/mês"_);
* Ou em **Financeiro → Canais adicionais**, quando você habilitou os adicionais no plano.

O passo a passo das telas do cliente está em [Canais Adicionais (venda aos seus clientes)](../../../modulo-saas/criacao-de-planos-financeiro/adicionais-de-canais.md).

***

## ✅ Checklist do administrador

* [ ] Pedi o acesso ao suporte e recebi os **três dados** (URL do backend, token de integração, segredo HMAC)
* [ ] Preenchi os três campos em **Integrações → WhatsApp Oficial (WABA)** e salvei
* [ ] Liguei **"Hub MultiAPIWA (…)"** nos canais que quero oferecer
* [ ] Liberei os tipos em **Integrações → Canais Disponíveis**
* [ ] Conferi o **plano do cliente**: limite geral + **"Ativar limite de canais por tipo"**
* [ ] Criei os **adicionais** com os meus preços e vinculei aos planos
* [ ] Fiz um **teste real** de conexão com uma empresa
* [ ] Confirmei o canal em **Ativo** e **Token OK** na página MultiAPIWA
* [ ] Confirmei que a **fatura do Hub** aparece **Em dia**
* [ ] Anotei no meu calendário: **se a URL do backend mudar, avisar o suporte**

***

## 🆘 Problemas comuns

### O cartão "MultiAPIWA (Hub Meta)" não aparece no menu

Só aparece quando o Hub está **ligado em pelo menos um canal**. Volte em **Integrações → WhatsApp Oficial (WABA)** (ou Facebook/Instagram) e ligue o botão.

### O bloco de credenciais não aparece

Mesma causa: ele só aparece quando existe **algum canal com o Hub ligado**.

### O cliente não vê o canal

Falta **Canais Disponíveis** (no SaaS) **ou** o tipo no **plano** do cliente. Confira os dois.

### Criei o adicional de Instagram, mas ele não tem efeito

O plano precisa ter o **tipo habilitado** e **"Ativar limite de canais por tipo"** ligado — **mesmo com quantidade `0`**. O sistema avisa isso ao salvar o adicional.

### O canal não aparece depois de conectar

Use **Atualizar** na página MultiAPIWA. Se continuar, verifique se o cliente tem o canal liberado no plano e se a **URL do backend** está correta.

### "Token vai expirar" / "Expirado" / "Inválido"

O cliente precisa **reconectar** o canal. A página mostra um aviso com a quantidade de canais que precisam de atenção.

### Aparece "Bloqueado" ou "Em carência"

Há **fatura do Hub em aberto**. Pague pelo **link de pagamento** no card. O bloqueio é automático e só é desfeito após a confirmação do pagamento (use **Verificar pagamento** para atualizar o status).

### Depois de trocar o domínio, as mensagens pararam

A **URL do backend** do Hub precisa ser **atualizada com o suporte**. Esse é o motivo mais comum de parada após migração.

### Aparece "Não foi possível carregar os canais do Hub agora"

Falha momentânea de comunicação com o Hub. Use **Atualizar**; se persistir, confira a **URL do backend** e o **token de instalação**.

***

## ❓ Perguntas frequentes

#### Preciso de uma instalação do Hub por cliente?

Não. A instalação é **do seu Whazing** e atende todos os seus clientes. A cobrança é **por canal conectado**.

#### Posso ter mais de uma instalação?

Fale com o suporte: o normal é **uma instalação por Whazing**. Duas instalações no mesmo sistema podem gerar cobrança e confusão desnecessárias.

#### As credenciais são iguais para os três canais?

**Sim.** Um único conjunto (URL do backend, token e segredo HMAC) atende **WhatsApp Oficial, Instagram e Facebook**.

#### Preciso preencher as credenciais em cada canal?

**Não.** Preencheu uma vez, os outros canais já mostram os campos preenchidos.

#### O que acontece com os Aplicativos próprios quando ligo o Hub?

Eles ficam **inativos para aquele canal** enquanto o Hub estiver ligado. Desligando o Hub, voltam a valer.

#### Posso oferecer o Hub só para alguns clientes?

Sim — o controle é pelo **plano** e pelos **adicionais**. Quem não tiver o tipo no plano não vê o canal.

#### Como repasso o custo do Hub para o cliente?

Pelos **adicionais** (tipo **Canais**, **Instagram**, **Facebook** ou **WhatsApp Oficial (WABA)**) e pelo valor do **plano**. Você define o preço; o Hub cobra de você **R$ 25,00 por canal**.

#### O que acontece se o cliente cancelar o canal?

A cobrança daquele canal no Hub é encerrada, com o período usado cobrado proporcionalmente (mínimo R$ 10,00). O adicional contratado pelo cliente segue as regras do seu financeiro.

#### Se eu não pagar a fatura do Hub, o que acontece?

Os canais são **bloqueados automaticamente** e param de funcionar até a regularização. O aviso e o link de pagamento ficam em **Integrações → MultiAPIWA (Hub Meta)**.

#### Preciso informar a URL do backend de novo se eu mudar de domínio?

**Sim, sempre.** A liberação considera a URL informada; se ela mudar, avise o suporte antes de usar o sistema no novo endereço.

#### Posso usar o Hub para campanhas em massa?

**Não.** O Hub é para **atendimento**, dentro das regras da Meta. Disparo em massa derruba a **qualidade do número**, pode bloquear o cadastro e, por o App Meta ser centralizado, **afeta todos os clientes**. Veja a seção **Regras de uso e qualidade do número** em [Hub MultiAPIWA (conexão integrada)](./).

***

## 📚 Veja também

* [Hub MultiAPIWA (conexão integrada)](./) — visão geral, custos e conexão do cliente
* [Canais Adicionais (venda aos seus clientes)](../../../modulo-saas/criacao-de-planos-financeiro/adicionais-de-canais.md)
* [🛒 Adicionais](../../../modulo-saas/criacao-de-planos-financeiro/adicionais.md)
* [Criação de Planos - Financeiro](../../../modulo-saas/criacao-de-planos-financeiro/)
* [Canais Disponíveis](../../canais-disponiveis.md)

***

## Suporte

Em caso de dúvidas, entre em contato:

📱 WhatsApp: +55 48 3197-0877

📱 WhatsApp: +55 48 3197-0599

O atendimento inicial é realizado por um assistente virtual.

Para falar com nossa equipe, envie:

**Atendimento Humano**
