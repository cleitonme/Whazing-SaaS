# Busca na Web

***

## 🌐 Busca na Web com Tavily (IA com Informação Atualizada)

Agora é possível integrar o **Tavily** ao sistema para que a IA faça buscas na web automaticamente e utilize o conteúdo encontrado nas respostas.

O Tavily oferece até **1.000 consultas gratuitas por mês**.

***

## 🔑 Passo 1 – Criar Conta e Gerar API Key

1. Acesse: [https://tavily.com](https://tavily.com)
2. Crie sua conta
3. Gere sua **API Key**
4. Copie a chave gerada

***

## ⚙️ Passo 2 – Configurar no Sistema

#### 🔎 Explicação dos campos

* **enabled** → Ativa ou desativa a busca
* **apiKey** → Sua chave do Tavily
* **companyName** → Nome da empresa usado na busca
* **maxResults** → Quantidade máxima de resultados
* **allowedDomains** → Domínios permitidos para busca (mais seguro)

⚠️ Não use `https://` ou `www.` no domínio.

✔ Correto:

```
doc.whazing.com.br
```

❌ Errado:

```
https://www.doc.whazing.com.br
```

***

## 🎯 Como Funciona na Prática

Exemplo de fluxo:

Cliente escreve:

> “como configurar ixc”

O sistema faz:

1️⃣ Detecta palavra-chave: **configurar**\
2️⃣ Extrai termo principal: **ixc**\
3️⃣ Executa busca:

```
search("ixc whazing")
```

4️⃣ Encontra URL relevante\
5️⃣ Extrai o conteúdo da página\
6️⃣ Injeta no prompt da IA

✅ A IA responde usando a documentação oficial

***

## 📊 Parâmetros Importantes

### 🔹 1. searchTriggerKeywords

Palavras que ativam busca:

* configurar
* instalar
* usar
* integrar
* atualizar
* como
* onde
* quando

Teste sempre com mensagens reais dos seus clientes.

***

### 🔹 2. technicalTerms

Liste termos técnicos que o sistema deve reconhecer:

* ixc
* whatsapp
* wpp
* zap
* api
* webhook

Use nomes exatos sempre que possível.

***

### 🔹 3. removeGenericWords

Remove palavras desnecessárias da busca:

* o
* a
* de
* eu
* você
* meu
* posso
* consigo

Isso melhora a qualidade da pesquisa.

***

### 🔹 4. allowedDomains

Sempre use domínios confiáveis.

Exemplo:

```
doc.whazing.com.br
```

Evita que a IA use informações externas incorretas.

***

## 🧠 Prompt Padrão do Sistema

Se você deixar o campo de prompt vazio, o sistema utilizará o modelo padrão:

```
🌐 INFORMAÇÕES ATUALIZADAS DA WEB
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consulta: "${searchQuery}"
Data: ${new Date().toLocaleString("pt-BR")}

${searchResults}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ INSTRUÇÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. USE as informações acima para responder
2. Cite os passos exatamente como descritos
3. Seja natural - NÃO mencione "busquei na web"
4. Se houver URLs, pode mencionar: "Veja mais em..."
5. NÃO invente - use APENAS o que está acima

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

***

## 🔄 Usando Prompt Personalizado

Se quiser personalizar, você pode usar as seguintes variáveis:

* `{searchQuery}`
* `{date}`
* `{searchResults}`

#### Exemplo:

```json
"systemPrompt": "📚 Documentação sobre: {searchQuery}\nAtualizado em: {date}\n\n{searchResults}\n\nUse essas informações para responder."
```

⚠️ Se deixar vazio, o sistema usa o modelo padrão automaticamente.

***

## 🚀 Benefícios da Integração Tavily

* 📚 Respostas sempre atualizadas
* 🔎 Busca automática baseada na dúvida do cliente
* 🤖 IA mais precisa
* 💰 Reduz necessidade de prompts gigantes
* 🧠 Evita invenções da IA

***

## ✅ Resultado Final

Com Tavily ativado:

1. Cliente faz pergunta técnica
2. Sistema detecta palavra-chave
3. Busca documentação confiável
4. Injeta conteúdo no prompt
5. IA responde baseada em fonte real

Isso torna seu atendimento **mais inteligente, confiável e atualizado em tempo real** 🚀

