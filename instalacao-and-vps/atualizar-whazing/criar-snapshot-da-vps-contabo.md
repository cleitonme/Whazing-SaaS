# 📸 Criar Snapshot da VPS (Contabo)

Os **Snapshots** permitem criar um ponto de restauração da sua VPS, garantindo que, em caso de erro ou atualização, você consiga retornar ao estado anterior.

***

### 🔑 Passo 1 – Acessar o painel da Contabo

1. Abra o navegador e acesse:\
   👉 [https://my.contabo.com/account/login](https://my.contabo.com/account/login)
2. Faça login com seu usuário e senha.

***

### 🖥️ Passo 2 – Abrir VPS Control

1. No painel principal, vá em **Control Panel**.
2. Clique em **VPS Control**.

***

### 📂 Passo 3 – Selecionar a VPS

1. Na lista de VPS, localize a máquina que deseja criar o snapshot.
2. Clique sobre ela para abrir os detalhes.

***

### ➕ Passo 4 – Criar o Snapshot

1. Clique na aba **Snapshots**.
2. Clique em **Create Snapshot**.
3. Digite um nome para o snapshot (ex.: `antes-atualizacao-22-08`).
4. Confirme clicando em **Create**.

***

### 🛠️ Dicas e problemas comuns

#### ❌ Botão Create desabilitado

* Certifique-se de que você não ultrapassou o **limite de snapshots** do seu plano.
* Se necessário, exclua snapshots antigos para liberar espaço.

#### ⏳ Snapshot demora para aparecer

* A criação do snapshot pode levar alguns minutos.
* Atualize a página (F5) ou aguarde alguns instantes.

#### ⚠️ Sempre crie snapshots antes de:

* Atualizações do sistema.
* Alterações críticas no banco de dados ou Docker.

***

***

### 🙏 Agradecimentos

Agradecemos a todos que contribuíram para a criação deste manual.

**Obrigado a Gustavo Canapa pela colaboração!**
