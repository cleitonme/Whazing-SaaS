# Integração API — Envio de Mensagens e Alertas

O sistema permite enviar **notificações automáticas via WhatsApp**, como novos cadastros, avisos de vencimento e outros comunicados administrativos.

Para isso, é necessário configurar um canal de API que receba os envios.

***

## Onde configurar

Acesse:

**Painel SaaS → Comunicação → Notificações WhatsApp**

> Configure o canal utilizado para enviar notificações automáticas da plataforma, como novos cadastros, avisos de vencimento e outros comunicados administrativos.

***

## Campos principais

### URL DA API

Informe a URL da API que receberá os envios.

### Token

Informe o token da API.

***

## Opções disponíveis

### Habilitar envio no formato JSON

Os dados enviados pela API serão no formato **JSON**, útil para integração com APIs de botões ou com a API oficial do WhatsApp (templates).

### Habilitar envio WhatsApp enviar solicitar teste

Vai enviar um WhatsApp de **boas-vindas** quando um novo teste for solicitado.

### Habilitar envio WhatsApp aviso fatura em aberto

Vai enviar um WhatsApp **7 dias, 3 dias, 1 dia e no dia do vencimento** da fatura em aberto.

### Habilitar envio WhatsApp confirmando pagamento

Envia uma mensagem no WhatsApp após a **confirmação do pagamento** da fatura.

### Enviar mensagem WhatsApp ao cadastrar afiliado

Mensagem enviada quando um novo **afiliado** se cadastra pela página pública.

Usa as mesmas configurações de URL/token acima.

***

## Guias

* [Integração API — Envio de Mensagens e Alertas (Formato JSON)](integracao-api-envio-de-mensagens-e-alertas-formato-json.md)
* [Mensagem de boas-vindas teste](mensagem-boas-vindas-teste.md)
* [Envio WhatsApp aviso fatura em aberto](envio-whatsapp-aviso-fatura-em-aberto.md)
