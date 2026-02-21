# Criar Snapshot da VPS (Hostear)

Este tutorial mostra como criar um snapshot (backup manual) da sua VPS na **Hostear**, garantindo uma cópia de segurança antes de atualizações ou alterações importantes no servidor.

## 1️⃣ Acessar o Painel Cloud

Acesse o painel Cloud da Hostear:

👉 [https://cloud.hostear.com.br/](https://cloud.hostear.com.br/)

Faça login utilizando o **usuário e senha** enviados para o seu e-mail no momento da contratação.

<figure><img src="../../.gitbook/assets/image (93).png" alt=""><figcaption>Painel de login Cloud Hostear</figcaption></figure>

---

## 2️⃣ Acessar as Opções da VPS

Após entrar no painel:

* Localize sua VPS na listagem.
* Clique no ícone de **engrenagem** na coluna **Ação**.

<figure><img src="../../.gitbook/assets/image (94).png" alt=""><figcaption>Menu de ações da VPS</figcaption></figure>

---

## 3️⃣ Acessar a Área de Backups

No menu de opções:

* Clique em **Backups**.

<figure><img src="../../.gitbook/assets/image (95).png" alt=""><figcaption>Menu Backups</figcaption></figure>

---

## 4️⃣ Criar o Backup (Snapshot)

Na tela de backups:

* Role a barra de rolagem até o final da página.
* Clique na opção **"Fazer backup agora"**.

Após clicar, o sistema iniciará o processo de snapshot da VPS.

⚠️ **Importante:**
Aguarde o processo finalizar antes de realizar qualquer alteração no servidor.

Você pode acompanhar o andamento em:

* **Tarefas e Logs**

<figure><img src="../../.gitbook/assets/image (96).png" alt=""><figcaption>Acompanhamento do processo de backup</figcaption></figure>

---

## 🔄 Restaurar um Backup (se necessário)

Caso precise restaurar um backup:

* Na mesma tela de backups, role até o final da página.
* Na lista de backups disponíveis, localize o snapshot desejado.
* No lado direito, clique no botão de ação correspondente para restaurar.

<figure><img src="../../.gitbook/assets/image (97).png" alt=""><figcaption>Opção para restaurar backup</figcaption></figure>

---

## ✅ Recomendação

Recomendamos sempre criar um snapshot antes de:

* Atualizar o sistema
* Atualizar Docker
* Atualizar o sistema Whazing
* Alterar configurações importantes

Assim você garante que poderá restaurar rapidamente em caso de erro.