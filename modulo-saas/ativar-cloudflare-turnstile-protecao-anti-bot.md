---
description: >-
  O Cloudflare Turnstile é um sistema de proteção contra bots que ajuda a evitar
  acessos automáticos e ataques ao sistema.
icon: circle-half-stroke-horizontal
---

# Ativar Cloudflare Turnstile (Proteção Anti-Bot

Este tutorial mostra **como configurar e ativar o Turnstile no Whazing**.

***

## 📌 Antes de começar

Você precisará de:

* Uma conta no **Cloudflare**
* Acesso ao **painel SaaS do Whazing**
* A URL do **seu frontend** (exemplo: `app.seudominio.com`)

***

## 1️⃣ Acessar o painel Turnstile

Primeiro precisamos criar o widget no Cloudflare.

Acesse:

👉 [https://dash.cloudflare.com/?to=/:account/turnstile](https://dash.cloudflare.com/?to=/:account/turnstile)

Depois:

1. Clique em **Add Widget / Adicionar Widget**

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

## 2️⃣ Criar o Widget

Na tela de criação do widget:

#### Nome do widget

Escolha qualquer nome para identificar.

Exemplo:

```
Whazing Login
```

***

#### Hostname (Domínio)

Adicione o domínio do seu **frontend**.

Exemplo:

```
app.seusistema.com
painel.seusistema.com
```

<figure><img src="../.gitbook/assets/image (2) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

***

## 3️⃣ Escolher o modo do widget

O Cloudflare oferece alguns modos de funcionamento.

✅ **Recomendado:**\
Use **Gerenciado**, pois é o modo mais equilibrado entre segurança e usabilidade.

<figure><img src="../.gitbook/assets/image (4) (1).png" alt=""><figcaption></figcaption></figure>

***

## 4️⃣ Pré-liberação do site (opcional)

Existe a opção:

**“Gostaria de optar pela pré-liberação deste site?”**

Isso é opcional.

Você pode:

* ativar
* ou deixar desativado

Não interfere no funcionamento básico.

***

## 5️⃣ Criar o widget

Após preencher tudo:

Clique **Criar**

***

## 6️⃣ Copiar as chaves

Após criar o widget, o Cloudflare exibirá duas chaves:

* **Site Key**
* **Secret Key**

⚠️ **Guarde essas chaves com cuidado.**

***

## 7️⃣ Configurar no Whazing

Agora acesse o painel do sistema.

Caminho:

```
Painel SaaS → Segurança → Cloudflare Turnstile / Rate Limit
```

Preencha:

| Campo      | Valor               |
| ---------- | ------------------- |
| Site Key   | chave do Cloudflare |
| Secret Key | chave do Cloudflare |

⚠️ **Preencha exatamente como está no Cloudflare.**

Se errar as chaves o login pode parar de funcionar.

***

## 8️⃣ Ativar Turnstile

Após preencher os dados:

Ative a opção:

```
Habilitar Cloudflare Turnstile
```

***

## ⚠️ IMPORTANTE — TESTE ANTES DE SAIR

Antes de sair da conta:

1. Abra **uma janela anônima do navegador**
2. Acesse a tela de login
3. Verifique se o **Turnstile aparece corretamente**

Se funcionar normalmente, a configuração está correta.

<figure><img src="../.gitbook/assets/image (5) (1).png" alt=""><figcaption></figcaption></figure>

***

## 🚨 Caso o login pare de funcionar

Se as chaves estiverem erradas, o login pode parar de funcionar.

Se você sair da conta **e não conseguir mais entrar**, será necessário **desativar pelo banco de dados**.

***

## 🗄️ Conectar no banco de dados

Siga o tutorial oficial:

👉 [https://doc.whazing.com.br/instalacao-and-vps/conectar-banco-de-dados](https://doc.whazing.com.br/instalacao-and-vps/conectar-banco-de-dados)

***

## 1️⃣ Abrir a tabela SettingsGeneral

No **DBeaver** ou outro gerenciador de banco:

```
Schemas → public → Tables → SettingsGeneral
```

Depois:

```
Botão direito → Visualizar Dados → Todas as Linhas
```

***

## 2️⃣ Localizar a configuração

Procure na coluna **key** pelo valor:

```
turnstileEnabled
```

***

## 3️⃣ Desativar Turnstile

Altere a coluna **value** para:

```
disabled
```

Depois salve a alteração.

***

## 🔑 Exemplo de recuperação via SQL

Caso prefira usar SQL:

```sql
UPDATE public."SettingsGeneral"
SET "value" = 'disabled'
WHERE "key" = 'turnstileEnabled';
```

Execute o script.

***

## ✅ Resultado

Após isso:

* O **Turnstile será desativado**
* O login voltará a funcionar normalmente

Então você poderá **corrigir as chaves e configurar novamente**.

***

## ✔️ Resumo

Passos principais:

1. Criar widget no Cloudflare
2. Copiar **Site Key** e **Secret Key**
3. Configurar no painel Whazing
4. Ativar Turnstile
5. Testar em janela anônima

***

💡 **Dica:**\
Sempre teste antes de sair da conta para evitar bloqueio de acesso.
