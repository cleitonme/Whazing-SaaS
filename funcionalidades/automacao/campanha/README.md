---
description: Como Enviar Campanhas no Whazing
icon: bullhorn
---

# Campanhas

Lembre-se campanha tem riscos altos de ban aconselhamos uso de números descartáveis caso queira adquirir números descartáveis aquecidos com preço justo acesse [https://disparo.whazing.com.br](https://disparo.whazing.com.br/)

⚠️ Atualmente, as campanhas estão disponíveis apenas para o canal **WhatsApp**.

***

### 🚀 Etapa 1: Configuração da Campanha

<figure><img src="../../../.gitbook/assets/image (17).avif" alt=""><figcaption></figcaption></figure>

* **Nome da Campanha** → Identifique sua campanha. _(Apenas para organização interna, não interfere no envio)._
* **Data e Hora de Início** → Defina quando a campanha será iniciada.
* **Enviar por** → Escolha a conta de WhatsApp que fará o disparo.
* **Delay** → Configure o intervalo entre o envio de uma mensagem e outra.
* **Mídia** → Opcionalmente, anexe uma imagem, vídeo ou documento para enviar junto com a mensagem.
* **Mensagens (1, 2, 3)** → Cadastre até **3 variações de mensagem**. O sistema escolherá aleatoriamente uma delas para cada contato, ajudando a reduzir riscos de bloqueio no WhatsApp.

Depois de preencher todos os campos, clique em **Salvar** e siga para a próxima etapa: **adicionar contatos**.

***

### 👥 Etapa 2: Adicionando Contatos

<figure><img src="../../../.gitbook/assets/campanha4.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/campanha3.png" alt=""><figcaption></figcaption></figure>

#### Incluir Contatos

1. Clique em **Incluir Contatos**.
2. Utilize os **filtros** disponíveis para segmentar os contatos mais adequados.
3. Clique em **Gerar**. _(Dependendo da quantidade de contatos, a lista pode levar alguns segundos para ser carregada.)_
4. Selecione os contatos desejados e clique em **Adicionar**.

👉 Caso precise incluir mais contatos, basta repetir o processo.\
Quando terminar, clique em **Listar Campanhas** para voltar à tela anterior.

***

### 📅 Etapa 3: Programação e Envio

1. Revise todos os detalhes da campanha.
2. Clique em **Programar Envio**.
3. A campanha será executada automaticamente na data e horário definidos.

<figure><img src="../../../.gitbook/assets/image (9) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

***

### 🔄 Uso de Variáveis Dinâmicas

Você pode **personalizar suas mensagens** utilizando informações cadastradas no contato.

📷 _Exemplo de Informações Adicionais:_

![Variaveis](../../../.gitbook/assets/informacoesadicionais.jpg)\\

*   Exemplo 1:

    ```bash
    {{CPF}}
    ```

    ➝ Retorna: `0985786468528`
*   Exemplo 2:

    ```bash
    {{plano}}
    ```

    ➝ Retorna: `Premium`
*   Exemplo 3:

    ```bash
    {{endereco}}
    ```

    ➝ Retorna: `Rua Marechal Deodoro, 11`

***

👉 Com isso, suas campanhas ficam **mais personalizadas** e com maior taxa de engajamento.

***

## 📢 Exemplos de Mensagens de Campanha com Variáveis e Botões

### 🔹 Exemplo 1 – Campanha de Cobrança

```bash
Olá {{firstName}}, tudo bem?  
Identificamos que o seu plano **{{plano}}** venceu em {{date}}.  

📌 Valor pendente: R$ 120,00  

Gostaria de regularizar agora?
```

**Botões sugeridos (API Plus):**

* ✅ Quero pagar agora
* 📅 Preciso de mais prazo
* 🚫 Não é meu boleto

***

### 🔹 Exemplo 2 – Campanha de Lembrete de Endereço

```bash
Oi {{firstName}}, confira se seu endereço está correto:  
📍 {{endereco}}  

Caso precise alterar, clique abaixo:
```

**Botões sugeridos (API Plus):**

* ✏️ Atualizar endereço
* ✅ Está correto

***

### 🔹 Exemplo 3 – Campanha de Engajamento / Retenção

```bash
Olá {{firstName}} 👋  
Notamos que faz um tempo que você não interage com a gente.  
Temos novidades exclusivas para você no WhatsApp!  

Quer receber?
```

**Botões sugeridos (API Plus):**

* 🔥 Sim, quero novidades
* 🤔 Me conte mais
* 🚫 Não tenho interesse

***

### 🔹 Exemplo 4 – Incentivar Interação (mesmo para opt-out)

```bash
Se não quiser mais receber mensagens, pode escolher abaixo:  
```

**Botões sugeridos (API Plus):**

* 🚫 Parar de receber
* 🛡️ Denunciar mensagem
* 🔒 Bloquear remetente

👉 **Estratégia**: Mesmo que o cliente clique em "Denunciar" ou "Bloquear", o simples fato de **interagir com o botão gera engajamento**, o que ajuda a manter a reputação do número mais alta.

***

⚡ **Dica extra**: Sempre que possível, misture **texto personalizado com variáveis** e **botões interativos**, porque:

1. O cliente se sente mais próximo da mensagem.
2. O WhatsApp entende que há **relevância e interação**.
3. Reduz as chances de bloqueio ou banimento.

***

***
