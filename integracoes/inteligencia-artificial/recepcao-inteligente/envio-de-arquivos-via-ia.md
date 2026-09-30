---
icon: paperclip-vertical
---

# Envio de Arquivos via IA

O sistema permite que a IA envie arquivos automaticamente durante o atendimento utilizando o comando:

```json
{ "sendFile": ID }
```

Esse comando faz com que o sistema envie um arquivo previamente cadastrado.

***

## 📎 Onde os arquivos vêm de

Antes de a IA enviar arquivos, você precisa **cadastrá-los** e **selecioná-los** na integração. A mecânica é a mesma da [Base de Conhecimento](base-de-conhecimento.md): cadastra uma vez e seleciona na Recepção Inteligente.

### 1️⃣ Cadastre o arquivo

1. No menu lateral, acesse **Cadastros**
2. Clique no card **Arquivos da IA** ("Gerencie arquivos utilizados pela IA durante os atendimentos automatizados")
3. Clique em **Adicionar Arquivo**
4. Selecione ou arraste o arquivo (imagens, vídeos, PDF, DOC/DOCX, XLS/XLSX) — até 50 MB
5. Preencha a **descrição** — um nome curto que identifique o arquivo (ex.: `Tela da campanha`)
6. Clique em **Salvar**

> 💡 O botão **⚙️ Configurações** desta tela abre o mesmo modal de **Embeddings** da Base de Conhecimento (chave do Gemini). Configure uma vez e vale para os dois.

> ⚠️ Cada arquivo cadastrado recebe um **ID** no sistema. Anote o ID do arquivo que a IA deve enviar — ele é usado no comando `{ "sendFile": ID }` mais abaixo.

### 2️⃣ Selecione o arquivo na Recepção Inteligente

1. Vá em **Automação e Integrações → IA e Integrações** e edite sua integração da **Recepção Inteligente**
2. Abra a aba **Automação** e expanda a seção **Configuração de Arquivos**
3. Clique em **Adicionar Arquivo**
4. Em **Selecionar Arquivo**, escolha o arquivo cadastrado
5. Preencha as **Palavras-chave** (separadas por vírgula) — os assuntos em que faz sentido enviar este arquivo (ex.: `campanha, disparo em massa, marketing`)
6. Opcionalmente, preencha a **Legenda** — um texto que acompanha o arquivo quando enviado
7. Clique em **Adicionar** e depois **Salvar** a integração

> 💡 A **Correspondência Semântica de Arquivos** (configurada logo abaixo da lista, com Embedding ativo) define a sensibilidade para o sistema encontrar e enviar o arquivo sozinho, mesmo quando o cliente não usa a palavra exata.

> ⚠️ Dependendo do formato do arquivo ou do canal, a **legenda** pode não ser enviada junto.

***

### 📎 Correspondência Semântica de Arquivos

Agora o sistema também pode **encontrar e enviar arquivos automaticamente** com base na mensagem do cliente, utilizando busca por similaridade (semântica).

Isso permite que documentos relevantes sejam enviados mesmo quando o cliente não usa exatamente o mesmo termo.

***

### ⚙️ Configurações

#### 🎯 Similaridade Mínima

Define o nível mínimo para considerar um arquivo como relevante.

Valor entre **0.5 e 1.0**

* **0.72** → equilíbrio ideal (recomendado)
* Valores menores → mais resultados, porém menos precisos
* Valores maiores → mais preciso, porém mais restrito

***

#### 🚀 Limiar de Envio Automático

Define quando o arquivo será enviado automaticamente, sem depender da decisão da IA.

Valor entre **0.5 e 1.0**

* **0.88** → recomendado para envio seguro
* Acima desse valor → arquivo é enviado automaticamente
* Abaixo disso → a IA decide se deve enviar ou não

***

### 🧠 Como funciona

* O sistema analisa a mensagem do cliente
* Compara com os arquivos disponíveis
* Calcula a similaridade
* Se atingir o nível configurado:
  * Pode sugerir o arquivo para a IA
  * Ou enviar automaticamente (dependendo da configuração)

***

### 💡 Dica

Use um valor de envio automático mais alto para evitar envios indevidos e garantir que apenas arquivos realmente relevantes sejam enviados 👍

***

### ⚠️ Importante

Para que a **Correspondência Semântica de Arquivos** funcione, é obrigatório ter a **API do Gemini configurada** nas configurações da tela que lista arquivos (botão **⚙️ Configurações** em **Cadastros → Arquivos da IA**).

Sem essa configuração:

* A busca por arquivos não utilizará similaridade
* Apenas palavras-chave exatas serão consideradas
* O envio automático baseado em conteúdo não funcionará

<figure><img src="../../../.gitbook/assets/configurarembeding.png" alt=""><figcaption></figcaption></figure>

***

## 🧠 Como Funciona

Quando a IA incluir no retorno:

```json
{ "sendFile": ID }
```

O sistema irá:

* 📎 Localizar o arquivo correspondente ao **ID**
* 📤 Enviar o arquivo automaticamente para o cliente

⚠️ Importante:\
Você deve substituir **ID** pelo ID real do arquivo cadastrado no sistema.

***

## 🎯 Quando Usar?

Você pode configurar o envio de arquivo de duas formas:

#### ✅ 1. Por Etapa Específica

Quando o atendimento chegar em determinada etapa, o arquivo é enviado.

#### ✅ 2. Por Palavra-chave

A IA analisa a conversa e decide enviar o arquivo quando detectar determinado assunto.

***

## 📌 Exemplo Prático – Disparo em Massa / Campanha

<figure><img src="../../../.gitbook/assets/image (92).png" alt=""><figcaption></figcaption></figure>

#### 🧩 Regra configurada:

Se o cliente perguntar sobre:

* disparo em massa
* campanha
* envio em massa
* marketing

***

#### 🤖 Exemplo prompt

```
Quando o cliente perguntar sobre DISPARO EM MASSA ou CAMPANHA:

Responda:
"Sim, é possível fazer disparo em massa! Temos suporte para 
campanhas com API oficial e não oficial, com botões ou texto 
normal.

Mais informações: https://doc.whazing.com.br/funcionalidades/automacao/campanha"

E envie comando "ENVIAR ARQUIVO": "tela da campanha" usando comando { "sendFile": 12 }
```

Onde:

```
ID = ID real do arquivo "tela da campanha"
```

***

## ⚠️ Regras Importantes

* O comando `{ "sendFile": ID }` deve estar exatamente nesse formato.
* O ID precisa ser válido e existir no sistema.
* A IA deve enviar o comando separado ou conforme padrão definido pelo sistema.
* Teste sempre antes de colocar em produção.

***

## 🚀 Benefícios

* 📎 Envio automático de manuais, imagens ou PDFs
* 🎯 Material enviado no momento certo
* 🤖 Atendimento mais profissional
* ⏱️ Reduz trabalho manual do operador

***

## ✅ Resultado Final

Com essa configuração:

1. Cliente menciona tema específico
2. IA identifica intenção
3. Responde normalmente
4. Sistema envia arquivo automaticamente

Isso transforma o atendimento em um processo **mais automatizado, visual e eficiente** 🚀
