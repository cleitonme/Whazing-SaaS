# 📸 Criar Snapshot da VPS (Hetzner)

Os **Snapshots** permitem criar uma cópia instantânea do disco do seu servidor, garantindo que você possa restaurar ou transferir a VPS caso algo dê errado.

***

### 🔑 Passo 1 – Acessar o painel da Hetzner

1. Acesse o painel: [https://my.hetzner.com](https://my.hetzner.com)
2. Faça login com seu usuário e senha.

***

### 🖥️ Passo 2 – Selecionar o projeto

1. Clique no **projeto** onde está a VPS que deseja criar o snapshot.

***

### 📂 Passo 3 – Selecionar a VPS

1. Na lista de servidores, clique na VPS desejada.

***

### ➕ Passo 4 – Criar o Snapshot

1. No menu superior da página da VPS, clique em **Snapshots**.
2. Clique no botão **Take snapshot**.
3. Insira um nome para o snapshot que facilite a identificação (ex.: `antes-atualizacao-22-08`).
4. Confirme e aguarde a criação do snapshot.

<figure><img src="../../.gitbook/assets/image (2) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

***

### ⚠️ Observações Importantes

* É recomendado **desligar a VPS** antes de criar o snapshot para garantir consistência dos dados.
* Cada snapshot tem um custo adicional: `€0.011/GB/mês (incl. 0% VAT)` conforme a Hetzner.
* Você pode criar um novo servidor a partir de um snapshot ou transferi-lo para outro projeto.

***

### 🛠️ Problemas comuns

* ❌ **Botão Take snapshot não está disponível**:\
  Verifique se a VPS está ativa e se não há snapshots limitados pelo plano.
* ⏳ **Snapshot demora para aparecer**:\
  Pode levar alguns minutos dependendo do tamanho do disco.
* 💾 Sempre **nomeie os snapshots de forma clara** para saber o que está salvando.

***

### 🙏 Agradecimentos

Agradecemos a todos que contribuíram para a criação deste manual.

**Obrigado a Ygor Nogueira pela colaboração!**

***
