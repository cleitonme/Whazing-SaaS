# 📸 Criar Snapshot da VPS (Peramix)

Os **Snapshots** permitem criar um ponto de restauração da sua VPS, garantindo que, em caso de erro ou atualização mal sucedida, você consiga retornar ao estado anterior.

***

### 🔑 Passo 1 – Acessar o painel da Peramix

1. Acesse o painel da Peramix:\
   👉 [https://control.peramix.com/](https://control.peramix.com/)
2. Faça login com seu usuário e senha.

***

### 🖥️ Passo 2 – Localizar sua VPS

1. No menu lateral, clique em **Serviços**.
2. Em seguida, selecione **VPS**.
3. Escolha a VPS desejada na lista.

***

### 📂 Passo 3 – Acessar Snapshots

1. Dentro da página da VPS, clique na aba **Snapshots**.
2. Você verá a lista dos snapshots já criados.

***

### ➕ Passo 4 – Criar um novo Snapshot

1. Clique no botão **Criar novo instantâneo**.
   * Se o botão estiver **desabilitado**, veja a seção de problemas abaixo.
2. Preencha o campo **Snapshot name** com um nome que ajude a identificar (exemplo: `antes-atualizacao-22-08`).
3. Clique em **Create snapshot**.

***

### ⚠️ Limite de Snapshots

Cada plano de VPS possui um limite de snapshots.

* Se aparecer a mensagem **"0 Snapshot(s) left"**, significa que você atingiu o limite.
* Nesse caso, será necessário **excluir um snapshot existente** antes de criar um novo.

***

### 🗑️ Apagar um Snapshot antigo

1. Clique no botão **Eliminar** ao lado do snapshot que deseja remover.
2. Aguarde a exclusão.
3. Pressione **F5** para atualizar a página.
4. O botão **Criar novo instantâneo** ficará ativo novamente.

***

### ✅ Dicas e Problemas Comuns

* 🔄 **Botão desabilitado mesmo após excluir:**\
  Atualize a página (F5) ou faça logout/login no painel.
* 🕒 **Snapshot demora para aparecer:**\
  Pode levar alguns minutos até o sistema finalizar a criação.
* 💾 **Sempre crie um snapshot antes de atualizações importantes**, como mudanças no sistema, banco de dados ou Docker.

***



***
