---
icon: microphone
---

# Transcrição de Áudio

**Disponível a partir da versão 3.0.0**

O recurso **Transcrição de Áudio** permite transformar mensagens de áudio em texto automaticamente.

Isso facilita o atendimento porque os usuários podem visualizar o conteúdo de um áudio sem precisar reproduzi-lo.

O sistema permite utilizar uma transcrição própria do canal ou configurar uma **API externa de transcrição** como fallback.

***

### 🧠 Como funciona?

Quando uma mensagem de áudio chega ao sistema, a transcrição pode ser realizada pelo próprio canal, quando houver suporte.

Caso o canal não possua uma transcrição própria configurada, o sistema pode utilizar uma **API externa de transcrição**.

Para isso, é possível utilizar o **TranscreveAPI**.

> 💡 O TranscreveAPI pode ser instalado no próprio servidor e compartilhado por todos os clientes do sistema.

***

## 🚀 Instalação do TranscreveAPI

O **TranscreveAPI** é o serviço responsável por transformar os áudios em texto.

A instalação pode ser feita diretamente com Docker, sem necessidade de baixar o código-fonte ou instalar dependências manualmente.

### Pré-requisitos

Antes de instalar, o servidor precisa ter:

* Docker instalado
* Acesso à porta `5000`
* Pelo menos **1 GB de memória RAM disponível**
* Recomendado: **2 GB de RAM**

***

### 📦 Instalação rápida

No servidor onde deseja instalar o serviço, execute:

Caso use wallcalls outro serviço na porta 5000 mesma vps troque a porta da instalação

```bash
docker run -d \
  --name transcreve-api \
  -p 5000:5000 \
  -e TZ=America/Sao_Paulo \
  -e PYTHONPATH=/transcreve-api/venv \
  -v transcreve-uploads:/transcreve-api/uploads \
  -v transcreve-logs:/transcreve-api/logs \
  --restart always \
  whazing/transcreveapi:latest
```

O Docker fará o download da imagem e iniciará o serviço automaticamente.

#### Verificar se o serviço está funcionando

Execute:

```bash
docker ps
```

Você deverá encontrar o container:

```
transcreve-api
```

Também é possível verificar os logs:

```bash
docker logs transcreve-api
```

***

## 🔎 Testando a instalação

Depois que o container estiver iniciado, a API estará disponível na porta `5000`.

No próprio servidor, você pode testar:

```bash
curl http://localhost:5000/health
```

Se o serviço estiver funcionando corretamente, a API deverá responder indicando que está saudável.

> ⚠️ Caso a porta `5000` já esteja sendo utilizada por outro serviço, será necessário escolher outra porta externa.

***

## ⚙️ Ativando no Whazing

Depois de instalar o TranscreveAPI, é necessário configurar o sistema para utilizá-lo.

Acesse no painel SaaS:

**SaaS → Inteligência Artificial → Transcrição de Áudio**

Ative a opção:

**Utilizar TranscreveAPI**

Em seguida, informe a URL da API.

Se o TranscreveAPI estiver instalado **no mesmo servidor do Whazing**, utilize:

```
http://localhost:5000
```

Depois de salvar a configuração, a API externa estará disponível como **fallback global de transcrição**.

***

## 🌎 Transcrição para todos os clientes

A principal vantagem dessa configuração é que o TranscreveAPI pode ser configurado **uma única vez no painel SaaS**.

Depois disso, os clientes podem utilizar a transcrição sem precisar instalar uma API individualmente.

#### Exemplo

Você possui:

* 100 empresas
* 500 usuários
* Vários números de WhatsApp

Em vez de instalar uma API de transcrição para cada empresa, você instala apenas **um TranscreveAPI** no servidor.

Depois configura no SaaS:

```
Utilizar TranscreveAPI: Ativado

URL:
http://localhost:5000
```

A configuração passa a funcionar como **fallback global** para os clientes.

***

## 🔄 Fallback de transcrição

O TranscreveAPI é utilizado quando o canal **não possui uma transcrição própria configurada**.

De forma simplificada:

```
Mensagem de áudio
       ↓
O canal possui transcrição própria?
       ↓
   ┌───┴───┐
  SIM     NÃO
   ↓       ↓
Transcrição  TranscreveAPI
do canal     ↓
             Texto
```

Isso permite utilizar diferentes métodos de transcrição sem precisar configurar manualmente cada cliente.

***

## 🌐 Quando usar localhost?

Se o **Whazing e o TranscreveAPI estiverem no mesmo servidor**, normalmente utilize:

```
http://localhost:5000
```

Essa é a configuração recomendada para uma instalação simples.

#### Exemplo

```
Whazing
   │
   └── TranscreveAPI
          │
          └── localhost:5000
```

***

## 🌍 Quando usar um endereço diferente?

Se o TranscreveAPI estiver instalado em **outro servidor**, não utilize `localhost`.

Nesse caso, informe o endereço acessível pelo servidor onde o Whazing está instalado.

Exemplo:

```
http://192.168.1.100:5000
```

Ou, caso tenha configurado um domínio:

```
https://transcricao.seudominio.com
```

> ⚠️ O endereço precisa ser acessível pelo servidor onde o Whazing está executando.

***

## 🐳 Gerenciamento do Docker

Depois da instalação, você pode utilizar os comandos abaixo para administrar o serviço.

#### Verificar o container

```bash
docker ps
```

#### Visualizar os logs

```bash
docker logs transcreve-api
```

#### Reiniciar

```bash
docker restart transcreve-api
```

#### Parar

```bash
docker stop transcreve-api
```

#### Iniciar novamente

```bash
docker start transcreve-api
```

***

## 🗑️ Remover o TranscreveAPI

Caso seja necessário remover o serviço:

```bash
docker stop transcreve-api
docker rm transcreve-api
```

Os volumes utilizados para armazenar arquivos e logs são independentes do container.

***

## 📋 Configuração recomendada

Para uma instalação padrão do Whazing, recomendamos:

**Instalação**

```
Docker
```

**Container**

```
transcreve-api
```

**Porta**

```
5000
```

**Memória**

```
2 GB
```

**URL no painel SaaS**

```
http://localhost:5000
```

**Utilizar TranscreveAPI**

```
Ativado
```

***

## ❓ Perguntas frequentes

#### Preciso instalar o TranscreveAPI em cada empresa?

**Não.**

Quando configurado como fallback global no painel SaaS, uma única instalação pode atender todos os clientes.

#### Preciso baixar o código do GitHub?

**Não.**

A instalação recomendada utiliza diretamente a imagem Docker:

```
whazing/transcreveapi:latest
```

Isso torna a instalação mais simples e evita a necessidade de baixar o projeto ou configurar dependências manualmente.

#### Posso instalar em outro servidor?

Sim. O TranscreveAPI pode ficar em outro servidor, desde que o servidor do Whazing consiga acessar o endereço configurado.

#### O que acontece se um canal já tiver transcrição própria?

A transcrição própria do canal poderá ser utilizada. O **TranscreveAPI funciona como fallback** quando não houver uma transcrição própria configurada.

#### Qual porta o TranscreveAPI utiliza?

Por padrão, a API utiliza a porta:

```
5000
```

#### Preciso deixar o container sempre ligado?

Sim.

A instalação utiliza:

```
--restart always
```

Assim, o Docker tenta iniciar novamente o serviço caso o servidor seja reiniciado ou o container pare.

***

## 🔗 Projeto TranscreveAPI

O projeto utilizado para realizar as transcrições está disponível no GitHub:

[TranscreveAPI no GitHub](https://github.com/cleitonme/transcreveAPI?utm_source=chatgpt.com)

> 💡 **Recomendação:** para a maioria das instalações, não é necessário acessar o GitHub. Basta executar o comando de instalação acima e depois ativar o recurso no painel SaaS.
