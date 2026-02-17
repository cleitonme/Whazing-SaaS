# Envio de Arquivos via IA

## 📎 Envio de Arquivos via IA

O sistema permite que a IA envie arquivos automaticamente durante o atendimento utilizando o comando:

```json
{ "sendFile": ID }
```

Esse comando faz com que o sistema envie um arquivo previamente cadastrado.

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
