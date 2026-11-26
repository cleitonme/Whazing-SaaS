---
icon: lock-keyhole
---

# Configurar Controle de Acesso à Pasta Public (.env)

> 🔄 **Atualizado na versão 3.2.0:** esta configuração **saiu do arquivo `.env`** e agora é feita pelo painel, em **Painel SaaS → Segurança → Proteção de mídia** — com estado ligado/desligado, exceções de IP, validade dos links e chave de acesso para integrações.
>
> As variáveis `MEDIA_PROTECTION_ENABLED`, `MEDIA_PROTECTION_ALLOWED_IPS` e `MEDIA_API_KEY` **não têm mais efeito**. O passo a passo abaixo fica mantido como **referência legada** (útil para entender instalações antigas), mas a configuração válida é a do painel.
>
> 👉 Guia atual: [Proteção de Mídia](../modulo-saas/seguranca/protecao-de-midia.md)

A partir da **versão 3.2.0**, a pasta **`/public`** do sistema passa a ter **acesso restrito por padrão**. Nas versões anteriores, ela ficava **acessível pela internet**.

O funcionamento descrito abaixo é o **modelo de proteção de mídia**: quem não estiver autorizado só acessa o arquivo por link com prazo de validade. Hoje, porém, **quem liga e desliga essa proteção é o painel SaaS**, não o `.env`.

Sem a proteção, isso significa que **qualquer pessoa que saiba o link completo do arquivo pode acessá-lo**.

Exemplo de acesso direto:

```
https://seu-dominio.com/public/1/202603/9561/4L4cJ-1773171521517_GYMBSbj7L7.jpeg
```

Se alguém souber o caminho completo, poderá abrir o arquivo.

Para evitar isso, o sistema possui um **sistema de proteção de mídia** que restringe o acesso apenas para **IPs autorizados ou requisições autenticadas**.

***

## 📌 Quando ativar essa proteção

Recomendado quando:

* seu sistema possui **arquivos privados**
* você deseja **impedir acesso direto às mídias**
* o servidor é **exposto publicamente**

⚠️ Atenção:\
Algumas integrações externas podem precisar acessar os arquivos.

Exemplos de integrações que podem precisar acesso:

* APIs externas
* automações
* integrações como **Plus** ou **Hub**

Por isso é importante **testar após ativar**.

***

## 🧭 Passo a passo com `.env` (referência legada)

> ⚠️ **Não use estes passos em instalações atualizadas.** As variáveis abaixo não são mais lidas pelo sistema. Configure pela tela **Painel SaaS → Segurança → Proteção de mídia**.

## 1️⃣ Acessar o servidor

Você precisa acessar o servidor onde o sistema está instalado.

Normalmente isso é feito usando:

* **SSH**
* **SFTP**

Um cliente muito usado é o **Bitvise SSH Client**.

***

## 2️⃣ Localizar o arquivo .env

O arquivo `.env` fica dentro da pasta do backend.

Caminho padrão:

```
/home/deploy/whazing/backend/.env
```

***

## 3️⃣ Editar o arquivo .env

Abra o arquivo `.env` usando um editor.

Se estiver usando **SFTP**, basta clicar com botão direito e escolher **Editar**.

***

## 4️⃣ Ativar proteção de mídia

Adicione ou altere as seguintes configurações:

```env
# Proteção de Mídia
MEDIA_PROTECTION_ENABLED=true
```

Isso ativa o controle de acesso aos arquivos da pasta **public**.

***

## 5️⃣ Definir IPs permitidos

Agora você precisa definir **quais IPs podem acessar os arquivos diretamente**.

Adicione:

```env
# IPs permitidos (separados por vírgula)
MEDIA_PROTECTION_ALLOWED_IPS=127.0.0.1,::1,192.168.1.*,10.0.0.50
```

#### Explicação

| Valor        | Significado    |
| ------------ | -------------- |
| 127.0.0.1    | acesso local   |
| ::1          | localhost IPv6 |
| 192.168.1.\* | rede local     |
| 10.0.0.50    | IP específico  |

O sistema também suporta **wildcards**:

```
192.168.1.*
```

Isso permite qualquer IP dessa rede.

***

## 6️⃣ Criar uma API Key para acesso externo

Se algum sistema externo precisar acessar as mídias, você pode usar uma **API Key**.

Adicione no `.env`:

```env
MEDIA_API_KEY=sua-chave-secreta-aqui
```

Exemplo:

```
MEDIA_API_KEY=whazing123456
```

***

## 7️⃣ Como acessar mídia com API Key

Após configurar a chave, o acesso pode ser feito de duas formas.

***

### Método 1 — Via URL

Adicionando a chave na URL:

```
https://seu-dominio.com/public/media/arquivo.jpg?apiKey=sua-chave-secreta-aqui
```

Exemplo:

```
https://sistema.com/public/media/imagem.jpg?apiKey=whazing123456
```

***

### Método 2 — Via Header HTTP

Usando header **x-api-key**

Exemplo usando curl:

```bash
curl -H "x-api-key: sua-chave-secreta-aqui" https://seu-dominio.com/public/media/arquivo.jpg
```

***

## 8️⃣ Salvar alterações

Depois de editar o `.env`, salve o arquivo.

***

## 9️⃣ Reiniciar o backend

Para aplicar as alterações é necessário reiniciar o container.

Execute no terminal:

```bash
docker container restart whazing-backend
```

***

## 🔎 Como testar a proteção

Após reiniciar:

1. tente abrir uma mídia diretamente
2. sem API key o acesso deve ser bloqueado

Exemplo:

```
https://seu-dominio.com/public/media/arquivo.jpg
```

Se a proteção estiver ativa, o acesso será negado.

Depois teste com API key:

```
https://seu-dominio.com/public/media/arquivo.jpg?apiKey=sua-chave
```

***

## ⚠️ Problemas comuns

#### APIs externas pararam de enviar mídia

Pode acontecer quando:

* o IP não está liberado
* a API não usa API Key

Solução:

* adicionar IP na lista
* usar API Key

***

## ✔️ Resumo da configuração

Configuração final no `.env`:

```env
# Proteção de Mídia
MEDIA_PROTECTION_ENABLED=true

# IPs permitidos
MEDIA_PROTECTION_ALLOWED_IPS=127.0.0.1,::1,192.168.1.*,10.0.0.50

# API Key externa
MEDIA_API_KEY=sua-chave-secreta-aqui
```

Depois reinicie:

```bash
docker container restart whazing-backend
```

***

💡 **Dica de segurança**

Use sempre:

* uma **API key forte**
* **IPs restritos**
* e monitore os logs regularmente.

***

## 📚 Veja também

* [Proteção de Mídia (painel SaaS)](../modulo-saas/seguranca/protecao-de-midia.md) — configuração atual
* [🔐 Segurança](../modulo-saas/seguranca/README.md)
* [Armazenamento S3](../modulo-saas/armazenamento-s3.md)
