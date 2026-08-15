---
icon: circle-exclamation
---

# 🚨 Sistema não abre ou parou de funcionar

Se o sistema **não abre**, **parou de funcionar** ou apresenta erros, siga este guia passo a passo. A maioria dos problemas está relacionada a **falta de espaço**, **DNS**, **containers parados** ou **atualização incompleta**.

***

## ❓ Meu sistema não está funcionando. O que fazer primeiro?

### 1️⃣ Verifique se sua VPS tem espaço livre

Quando a VPS fica sem espaço, o sistema pode:

* Não abrir
* Parar de enviar mensagens
* Travar o backend
* Não salvar arquivos

### 🔍 Como verificar o espaço da VPS

No terminal da VPS, execute:

```bash
df -h
```

Esse comando mostra o uso do disco.

<figure><img src="../../.gitbook/assets/image (67).png" alt=""><figcaption><p>Exemplo de uso do disco</p></figcaption></figure>

### ⚠️ Atenção ao campo **Mounted on /**

* O valor mais importante é o da linha `/`
* Se estiver acima de **80%**, já é considerado **crítico**
* No exemplo da imagem, o uso está em **82%**, o que pode causar falhas no sistema

***

## 🛠️ Como resolver falta de espaço

### ✅ Opção 1: Aumentar o disco da VPS

Verifique com a empresa onde você contratou a VPS se é possível aumentar o espaço em disco.

***

### ✅ Opção 2: Apagar arquivos antigos (opção mais comum)

#### 📂 Limpar arquivos de log (recomendado)

Os logs podem crescer muito com o tempo.

📁 Caminho da pasta de logs:

```
/home/deploy/whazing/backend/logs
```

No terminal:

```bash
cd /home/deploy/whazing/backend/logs
rm * -Rf
```

👉 Isso **não apaga dados do sistema**, apenas registros antigos.

***

#### 📂 Limpar arquivos de mídia (imagens, vídeos, áudios)

📁 Pasta onde ficam os arquivos enviados:

```
/home/deploy/whazing/backend/public/
```

Estrutura:

* Pastas por **ID da empresa** (1, 2, 3...)
* Dentro delas, pastas por **data** (exemplo: `202510`)

***

### 🔎 Verificar quais pastas estão ocupando mais espaço

Entre na pasta desejada e execute:

```bash
du -h --max-depth=1
```

Para mostrar apenas pastas acima de **1GB**:

```bash
du -h --max-depth=1 | grep -E '^[0-9.]+G'
```

<figure><img src="../../.gitbook/assets/image (68).png" alt=""><figcaption><p>Pastas com alto consumo</p></figcaption></figure>

***

### 🗑️ Apagar uma pasta específica

Exemplo: apagar a pasta `202510`:

```bash
sudo rm 202510/ -Rf
```

⚠️ **Atenção:** apague apenas pastas antigas que você tenha certeza que não precisa mais.

***

## 🔐 Erro: Backend não consegue logar

Se o sistema abre, mas não faz login ou apresenta erro no backend:

### 🔄 Reinicie os containers

```bash
docker container restart whazing-backend
```

```bash
docker container restart whazing-frontend
```

Depois disso, aguarde alguns segundos e teste novamente.

***

## 🆕 Instalação nova e o sistema não abre

### 1️⃣ Verifique o DNS

* Confirme se o domínio aponta para o **IP da VPS**
* Use: [https://dnschecker.org](https://dnschecker.org)

⚠️ Se usar **Cloudflare**:

* **Não ative o proxy** (nuvem laranja deve ficar desativada)
* O IP da VPS deve aparecer em **todas as regiões**

***

### 2️⃣ Verifique os logs do sistema

Consulte a documentação: 👉 [Acessando logs](../../instalacao-and-vps/acessando_logs.md)

***

### 3️⃣ Reinstale o sistema (último caso)

* Formate a VPS
* Utilize **Ubuntu 22**
* Refaça toda a instalação conforme a documentação oficial

***

## 🔄 Acabei de atualizar e deu problema

1️⃣ Você fez **snapshot / backup** da VPS antes de atualizar?

* Se sim, restaure o backup

2️⃣ Execute o **atualizador novamente**

* Pode ter ocorrido erro durante o processo

3️⃣ Verifique os logs 👉 [Acessando logs](../../instalacao-and-vps/acessando_logs.md)

***

## ⚡ O sistema parou de funcionar “do nada”

Siga esta ordem:

1️⃣ Reinicie a VPS 2️⃣ Verifique os logs 3️⃣ Execute a atualização 4️⃣ Verifique o DNS no [https://dnschecker.org](https://dnschecker.org) 5️⃣ Confirme se o SSL está funcionando corretamente 👉 [Problemas com SSL](problemas-com-ssl.md)

***

## 📵 Sistema não envia ou não recebe mensagens

1️⃣ Reinicie a VPS 2️⃣ Reconecte o WhatsApp no sistema 3️⃣ Verifique os logs

👉 [Acessando logs](../../instalacao-and-vps/acessando_logs.md)

***

### ⚠️ Erro comum no log (Redis)

Se aparecer algo como:

```
[ioredis] Unhandled error event: Error: connect ECONNREFUSED
```

👉 É necessário **reinstalar o Redis** Consulte a documentação: 🔗 [Reinstalar o Redis](../whatsapp-e-mensagens/reinstalar-redis.md)

***

## 🆘 Grupo de suporte

Se mesmo após seguir todos os passos o problema continuar:

👉 Acesse o grupo de suporte

### Envie o máximo de informações possíveis:

* Domínios utilizados
* Resultado de comandos como `ping`
* Logs do sistema 👉 [Acessando logs](../../instalacao-and-vps/acessando_logs.md)
