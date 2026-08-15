---
icon: cloud
---

# Armazenamento S3

A partir da **Versão 2.6.0**, o sistema passa a suportar **armazenamento externo via S3** (como AWS S3, Backblaze B2, MinIO, entre outros).

Esse recurso é utilizado para armazenar:

* 📷 Fotos
* 🎥 Vídeos
* 🎵 Áudios
* 📎 Outros arquivos recebidos

⚠️ **Importante entender:**

* Apenas **arquivos novos** serão salvos no S3 após a ativação.
* Alguns arquivos ainda podem permanecer na pasta `public` da VPS.
* O sistema usa as credenciais configuradas para acessar os arquivos.
* Se você alterar as credenciais depois, poderá **perder acesso aos arquivos já armazenados**.
* Sistema tem fallback caso houver erro salvar S3 ele salvará localmente

***

## 📦 Tutorial: Configurando o Backblaze B2

Neste exemplo vamos utilizar o **Backblaze B2**, que é compatível com S3.

Acesse e crie sua conta em: 👉 [https://www.backblaze.com](https://www.backblaze.com)

<figure><img src="../.gitbook/assets/image (83).png" alt=""><figcaption></figcaption></figure>

***

## 🪣 Passo 1 – Criar um Bucket (Balde)

Após entrar no painel:

Clique em **Criar um Balde (Create Bucket)**

Preencha da seguinte forma:

#### 🔹 Balde Nome Exclusivo

Escolha um nome único. ⚠️ Esse nome será usado como **Bucket Name dentro do Whazing**.

#### 🔹 Arquivos de segmento

Selecione: **Privado**

#### 🔹 Default Encryption

Deixe: **Desativado**

#### 🔹 Object Lock

Deixe: **Desativado**

Depois clique em **Criar um Balde**

***

### 🔎 Após criar o Bucket

Localize o campo **Endpoint**.

Você precisará dele para configurar no Whazing.

<figure><img src="../.gitbook/assets/image (86).png" alt=""><figcaption></figcaption></figure>

#### 📌 Como identificar a Região

Exemplo de endpoint:

```
s3.us-east-005.backblazeb2.com
```

A **Região** que deve ser usada no Whazing é:

```
us-east-005
```

***

## 🔑 Passo 2 – Criar as Credenciais de Acesso

Agora vamos criar as chaves de acesso.

No menu lateral, clique em:

**Application Keys** → **Add Application Key**

<figure><img src="../.gitbook/assets/image (85).png" alt=""><figcaption></figcaption></figure>

Preencha assim:

#### 🔹 Name of Key

Escolha um nome (ex: `whazing-s3`)

#### 🔹 Allow access to Bucket(s)

Selecione o bucket criado anteriormente ou deixe **All** se preferir.

#### 🔹 Type of Access

Selecione: **Read and Write**

⚠️ Não preencha os outros campos.

Clique em **Create Key**

***

### 📋 Anote as informações geradas

Após criar, o sistema mostrará duas informações importantes:

#### 🔹 keyID

→ Este valor será usado no Whazing como: **Access Key ID**

#### 🔹 applicationKey

→ Este valor será usado no Whazing como: **Secret Access Key**

⚠️ Guarde essas informações em local seguro.

***

## ⚙️ Passo 3 – Configurar no Whazing

Agora vá no:

**Painel SaaS → Integrações → Storage / Backblaze / S3**

Preencha os campos com:

* Bucket Name → Nome do balde criado
* Região → Exemplo: `us-east-005`
* Endpoint → https://s3.us-east-005.backblazeb2.com
* Access Key ID → keyID
* Secret Access Key → applicationKey

#### ✅ Habilitar:

✔ **Force Path Style**

<figure><img src="../.gitbook/assets/image (88).png" alt=""><figcaption></figcaption></figure>

***

## ✅ Finalizando

Após salvar:

* Reinicie o backend após alterar configurações, para aplicar
* Novas mídias recebidas passarão a ser armazenadas no S3.
* Arquivos antigos continuarão onde estavam.
* Não altere as credenciais depois, para não perder acesso aos arquivos.
