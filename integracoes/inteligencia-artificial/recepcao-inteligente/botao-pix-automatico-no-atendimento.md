# Botão Pix Automático no Atendimento

O sistema pode adicionar automaticamente um **botão de pagamento via Pix** dentro do atendimento.

Mas isso depende diretamente da **resposta gerada pela IA**.

***

## ⚙️ Como funciona?

O sistema faz o seguinte processo:

1. A IA responde ao cliente.
2. O sistema analisa o texto da resposta.
3.  Se a resposta conter **a mesma chave Pix cadastrada na tela de atendimento**,\
    o sistema automaticamente:

    ✅ Adiciona o botão de pagamento Pix\
    ✅ Facilita o pagamento direto pelo cliente

⚠️ Se a IA não incluir corretamente a chave Pix na mensagem, o botão não será exibido.

***

## 🧠 Importante

* A chave Pix precisa estar **idêntica** à cadastrada no sistema.
* Pequenas diferenças no texto podem impedir o botão de aparecer.
* O funcionamento depende da qualidade do prompt e do modelo de IA utilizado.

***

## 📝 Exemplo de Prompt Utilizado em Testes

Se o cliente escolher Pix, envie:

```
3. Se o cliente escolher **Pix**, envie:

   > Segue nosso Pix para pagamento:
   > Tipo: Email
   > Banco: InfinitePay
   > Nome: Informeurer
   > Chave Pix: informeurer@jim.com
   >
   > Após realizar o pagamento, envie o comprovante aqui mesmo 💬
   >
   > Caso prefira pagar com cartão, pode fazer diretamente pelo nosso site:
   > 🌐 loja.whazing.com.br/
```

***

## 🔎 O que acontece nesse exemplo?

<figure><img src="../../../.gitbook/assets/image (91).png" alt=""><figcaption></figcaption></figure>

Se a chave cadastrada no sistema for:

```
informeurer@jim.com
```

E a IA responder exatamente com:

```
Chave Pix: informeurer@jim.com
```

O sistema irá:

➡ Detectar a chave\
➡ Inserir automaticamente o botão Pix abaixo da mensagem

***

## 🎯 Benefícios

* 💰 Facilita pagamento imediato
* 🚀 Aumenta conversão
* 🤖 Automatiza processo
* 📲 Melhora experiência do cliente

***

## ⚠️ Recomendações

* Sempre padronize o texto no prompt.
* Evite que a IA reescreva ou altere a chave Pix.
* Faça testes antes de colocar em produção.
