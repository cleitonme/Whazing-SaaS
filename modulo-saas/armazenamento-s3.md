---
icon: cloud
---

# Armazenamento S3

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
* É **obrigatório configurar o CORS no bucket**, mesmo quando o upload é feito pelo backend. Sem CORS, fotos, áudios e vídeos podem não abrir no navegador. Veja a seção **CORS: por que é obrigatório**.

***

## 🎯 Qual provedor usar?

O Whazing funciona com qualquer provedor **compatível com a API S3**: Cloudflare R2, Backblaze B2, AWS S3, MinIO, Wasabi etc.

| | ☁️ Cloudflare R2 | 📦 Backblaze B2 |
|---|---|---|
| Armazenamento | US$ 0,015 / GB-mês (10 GB grátis por mês) | US$ 6,95 / TB-mês (≈ US$ 0,0068 / GB) |
| Download (egress) | **Grátis e ilimitado** | Grátis até 3x o armazenado, depois US$ 0,01 / GB |
| Operações | 1 milhão de escritas e 10 milhões de leituras grátis/mês | — |
| Região usada no Whazing | `auto` | Código do endpoint (ex.: `us-east-005`) |
| Force Path Style | ✔ Ativado | ✔ Ativado |
| Onde configurar o CORS | Bucket → Settings → CORS Policy (JSON) | Bucket → Bucket Settings → CORS Rules |

**Quando o R2 compensa mais:** o volume **armazenado** é moderado, mas os arquivos são **acessados muitas vezes** (áudios e vídeos de WhatsApp são reabertos a todo momento). Como o R2 não cobra download, o custo fica previsível e costuma sair mais barato no total.

**Quando o B2 compensa mais:** você guarda **muitos TB** e o volume de download é baixo, já que o preço por GB armazenado do B2 é menor.

💡 Os dois podem ser usados na mesma instalação ao longo do tempo, mas trocar de provedor **não migra os arquivos antigos automaticamente** — as mídias já salvas continuam no provedor antigo.

***

## ☁️ Tutorial: Configurando o Cloudflare R2

### 🪣 Passo 1 – Criar o bucket

1. Acesse [https://dash.cloudflare.com](https://dash.cloudflare.com) e crie sua conta (o plano gratuito do R2 já inclui 10 GB).
2. No menu lateral, entre em **R2 Object Storage**.
3. Clique em **Create bucket**.
4. Preencha:

#### 🔹 Bucket name

Escolha um nome único (ex.: `whazing-midia`). ⚠️ Esse nome será usado como **Bucket Name dentro do Whazing**.

#### 🔹 Location

Deixe **Automatic** (ou escolha a região mais próxima dos seus usuários).

5. Clique em **Create bucket**.

**Deixe o bucket privado.** O Whazing acessa os arquivos pelas credenciais, não é necessário tornar o bucket público.

***

### 🔐 Passo 2 – Configurar o CORS (obrigatório)

Dentro do bucket, vá em **Settings** → **CORS Policy** → **Edit** e cole o conteúdo abaixo:

```json
[
  {
    "AllowedOrigins": [
      "*"
    ],
    "AllowedMethods": [
      "GET",
      "PUT",
      "POST",
      "DELETE",
      "HEAD"
    ],
    "AllowedHeaders": [
      "*"
    ],
    "ExposeHeaders": [
      "*"
    ],
    "MaxAgeSeconds": 86400
  }
]
```

Clique em **Save**.

⚠️ Essa configuração libera **qualquer origem**, o que serve para testes e para colocar o sistema no ar rapidamente. Em produção, troque `"*"` pelos domínios do seu SaaS — os exemplos completos estão na seção **CORS: por que é obrigatório**.

***

### 🔑 Passo 3 – Criar as credenciais de acesso

1. Ainda no R2, clique em **Manage R2 API Tokens** (ou **API** → **Manage API tokens**).
2. Clique em **Create API token**.
3. Preencha:

#### 🔹 Token name

Escolha um nome (ex.: `whazing-s3`).

#### 🔹 Permissions

Selecione: **Object Read & Write**.

#### 🔹 Specify bucket

Selecione o bucket criado anteriormente (ou deixe para todos os buckets).

4. Clique em **Create API Token**.

### 📋 Anote as informações geradas

O painel mostrará os valores **uma única vez**:

#### 🔹 Access Key ID

→ Usado no Whazing como: **Access Key ID**

#### 🔹 Secret Access Key

→ Usado no Whazing como: **Secret Access Key**

#### 🔹 Endpoint S3

O endpoint do R2 segue este formato:

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com
```

O **ACCOUNT_ID** aparece na página inicial do R2 (e na URL do painel, em `dash.cloudflare.com/<ACCOUNT_ID>`).

⚠️ Guarde essas informações em local seguro.

***

### ⚙️ Passo 4 – Configurar no Whazing

Vá em:

**Painel SaaS → Integrações → Storage / Backblaze / S3**

Preencha os campos com:

* **Bucket Name** → nome do bucket criado (ex.: `whazing-midia`)
* **Região** → `auto`
* **Endpoint** → `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`
* **Access Key ID** → Access Key ID do token
* **Secret Access Key** → Secret Access Key do token

#### ✅ Habilitar:

✔ **Force Path Style**

Salve as configurações.

💡 **Domínio público (opcional):** em **Settings → Public access** você pode habilitar um subdomínio `r2.dev` (apenas para testes) ou conectar um **Custom Domain** (recomendado para uso real, com cache da Cloudflare). Se a sua versão do Whazing tiver um campo de **URL pública/CDN**, informe esse domínio ali. Ao usar domínio próprio, **inclua esse domínio no CORS** do bucket.

***

## 📦 Tutorial alternativo: Configurando o Backblaze B2

Neste exemplo vamos utilizar o **Backblaze B2**, que é compatível com S3.

Acesse e crie sua conta em: 👉 [https://www.backblaze.com](https://www.backblaze.com)

<figure><img src="../.gitbook/assets/image (83).png" alt=""><figcaption></figcaption></figure>

***

### 🪣 Passo 1 – Criar um Bucket (Balde)

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

### 🔐 Passo 1.1 – Configurar o CORS do bucket (obrigatório)

No bucket criado, abra **Bucket Settings** → **CORS Rules** → **Add Rule**:

* **CORS Rule Name** → ex.: `whazing`
* **Allowed Origins** → `*` (testes) ou os domínios do seu SaaS
* **Allowed Operations** → marque as de **leitura (Read/Download)** e de **escrita (Write/Upload)** — inclua também *List* e *Delete* se quiser liberar tudo
* **Allowed Headers** → `*`
* **Exposed Headers** → `ETag, Accept-Ranges, Content-Range, Content-Length`
* **Max Age Seconds** → `86400`

Salve a regra. Sem ela, mídias podem não abrir no navegador, mesmo com as credenciais corretas.

***

## 🔑 Passo 2 – Criar as Credenciais de Acesso

Agora vamos criar as chaves de acesso.

No menu lateral, clique em:

**Application Keys** → **Add Application Key**

<figure><img src="../.gitbook/assets/image (85).png" alt=""><figcaption></figcaption></figure>

Preencha assim:

#### 🔹 Name of Key

Escolha um nome (ex.: `whazing-s3`)

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

## 🔐 CORS: por que é obrigatório

O **CORS** (Cross-Origin Resource Sharing) é a regra que diz ao navegador quais sites podem ler arquivos do bucket.

O Whazing roda no seu domínio (ex.: `https://app.seudominio.com`), mas as mídias ficam no domínio do provedor (ex.: `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`). Para o navegador, são **origens diferentes** e, por padrão, ele **bloqueia** a leitura — mesmo que o arquivo exista e as credenciais estejam corretas.

Por isso o CORS é necessário para:

* 🖼️ **Exibir imagens** de perfil e de conversas
* 🎥 **Reproduzir vídeos** e 🎵 **áudios** (inclusive o player que faz requisições `Range` para permitir avançar no tempo)
* ⬆️ **Enviar arquivos** direto do navegador (`PUT`/`POST`), que disparam uma requisição de *preflight* (`OPTIONS`)
* 📥 **Baixar anexos** e gerar **links assinados** temporários

⚠️ O CORS é configurado **por bucket**. Se você usa mais de um bucket, repita a configuração em cada um.

### 📍 Onde configurar

| Provedor | Caminho no painel |
|---|---|
| ☁️ Cloudflare R2 | Bucket → **Settings** → **CORS Policy** → **Edit** |
| 📦 Backblaze B2 | Bucket → **Bucket Settings** → **CORS Rules** → **Add Rule** |
| 🟠 AWS S3 | Bucket → **Permissions** → **Cross-origin resource sharing (CORS)** |

### 🧪 Exemplo 1 – Liberado (testes / primeiros passos)

Libera qualquer origem, todos os métodos e cabeçalhos. É o exemplo usado no tutorial do R2 acima:

```json
[
  {
    "AllowedOrigins": [
      "*"
    ],
    "AllowedMethods": [
      "GET",
      "PUT",
      "POST",
      "DELETE",
      "HEAD"
    ],
    "AllowedHeaders": [
      "*"
    ],
    "ExposeHeaders": [
      "*"
    ],
    "MaxAgeSeconds": 86400
  }
]
```

### 🔒 Exemplo 2 – Recomendado para produção

Restrinja as origens aos domínios do seu SaaS e exponha os cabeçalhos que o navegador precisa para tocar mídia:

```json
[
  {
    "AllowedOrigins": [
      "https://app.seudominio.com",
      "https://seudominio.com"
    ],
    "AllowedMethods": [
      "GET",
      "HEAD",
      "PUT",
      "POST",
      "DELETE"
    ],
    "AllowedHeaders": [
      "*"
    ],
    "ExposeHeaders": [
      "ETag",
      "Accept-Ranges",
      "Content-Range",
      "Content-Length"
    ],
    "MaxAgeSeconds": 86400
  }
]
```

📌 Troque `app.seudominio.com` pelos domínios reais do seu painel. Se você usa **domínio próprio/CDN** para as mídias, nada muda: o CORS continua sendo do bucket, mas o domínio público também deve constar em `AllowedOrigins` caso o navegador acesse por ele.

📌 O `"*"` em `ExposeHeaders` é aceito pelo R2, mas listar os cabeçalhos explicitamente (como no Exemplo 2) é mais seguro e garante que o player de áudio/vídeo consiga avançar a reprodução. Se o painel recusar o `"*"`, use a lista explícita.

### 🧩 Equivalente no Backblaze B2

O B2 usa um formulário em vez de JSON. A correspondência é:

| Campo do B2 | Valor sugerido |
|---|---|
| CORS Rule Name | `whazing` |
| Allowed Origins | `*` ou seus domínios |
| Allowed Operations | leitura/download + escrita/upload (+ list/delete se necessário) |
| Allowed Headers | `*` |
| Exposed Headers | `ETag, Accept-Ranges, Content-Range, Content-Length` |
| Max Age Seconds | `86400` |

### ✅ Como testar se o CORS está funcionando

**1) Pelo terminal** — simule a verificação que o navegador faz:

```bash
curl -i -X OPTIONS "https://<ACCOUNT_ID>.r2.cloudflarestorage.com/whazing-midia/teste.jpg" \
  -H "Origin: https://app.seudominio.com" \
  -H "Access-Control-Request-Method: GET"
```

O retorno deve conter um cabeçalho parecido com:

```
access-control-allow-origin: https://app.seudominio.com
```

Se esse cabeçalho não aparecer, a regra de CORS não foi salva ou a origem não está na lista.

**2) Pelo navegador** — abra o Whazing e reproduza um áudio ou abra uma foto enviada após a ativação do S3. Depois pressione `F12` → aba **Console** e depois **Network**: a requisição da mídia deve retornar `200` (ou `206` para áudio/vídeo) **sem** mensagem de CORS.

**3) Pelo console do navegador** — teste direto contra o arquivo:

```js
fetch("https://<ACCOUNT_ID>.r2.cloudflarestorage.com/whazing-midia/teste.jpg", { method: "HEAD" })
  .then(r => console.log("OK", r.status))
  .catch(e => console.error("Bloqueado por CORS", e));
```

### 🚨 Erros comuns

| Mensagem / sintoma | Causa provável | Solução |
|---|---|---|
| `blocked by CORS policy: No 'Access-Control-Allow-Origin' header` | Nenhuma regra de CORS no bucket, ou a origem não está em `AllowedOrigins` | Salvar a regra e incluir o domínio exato (com `https://`, sem barra no final) |
| `Response to preflight request doesn't pass access control check` | Método (`PUT`/`DELETE`) ou cabeçalho não permitido | Adicionar o método em `AllowedMethods` e usar `AllowedHeaders: ["*"]` |
| Áudio/vídeo não avança a reprodução | `Range` não permitido ou cabeçalhos não expostos | Usar `AllowedHeaders: ["*"]` e expor `Accept-Ranges`, `Content-Range`, `Content-Length` |
| Imagem abre em nova aba, mas não aparece no sistema | Bloqueio de CORS na leitura via `fetch`/canvas | Configurar CORS conforme os exemplos acima |
| `403 Forbidden` ao enviar | Token sem permissão de escrita no bucket | Recriar o token com **Object Read & Write** (R2) ou **Read and Write** (B2) |
| Funciona em um domínio e falha em outro | `AllowedOrigins` restrito | Adicionar todos os domínios usados |

***

## ✅ Finalizando

Após salvar:

* Reinicie o backend após alterar configurações, para aplicar
* Novas mídias recebidas passarão a ser armazenadas no S3.
* Arquivos antigos continuarão onde estavam.
* Não altere as credenciais depois, para não perder acesso aos arquivos.
* Confirme que o **CORS do bucket** está configurado e teste enviando uma foto, um áudio e um vídeo pelo sistema.
