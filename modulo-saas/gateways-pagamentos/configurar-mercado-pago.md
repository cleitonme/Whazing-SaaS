# Configurar Mercado Pago

Integre seu sistema com o Mercado Pago seguindo esses passos simples:

***

## Passo 1: Criar Conta no Mercado Pago Developers

1. Crie uma conta no [Mercado Pago Developers](https://www.mercadopago.com.br/developers/pt).

## Passo 2: Criar Aplicação no Mercado Pago Developers

1. Acesse o [painel do Mercado Pago Developers](https://www.mercadopago.com.br/developers/panel/app).
2. Crie uma nova aplicação.

   - Tipo de solução de pagamento: **Pagamentos on-line**
   - Usando uma plataforma de e-commerce? **Checkout Pro**

## Passo 3: Obter Credenciais de Produção

1. Clique em **Produção** > **Credenciais de produção**.
2. Escolha o setor que melhor se encaixa no seu negócio.
3. Copie o **Access Token** para cadastrar no painel do Whazing.

***

## Passo 4: Configurar no PAINEL SaaS

1. Acesse **Painel SaaS → Comercial → Receitas**
2. Em **Configurações de Pagamento**, no campo **Gateway de Pagamento**, selecione **Mercado Pago**
3. Preencha o **Access Token**
4. Marque as formas de pagamento aceitas:

   - **Aceitar PIX**
   - **Aceitar Boleto**
   - **Aceitar Cartão de crédito**
   - **Aceitar Cartão de débito caixa**

***

## Passo 5: Configurar Notificações (Webhooks)

1. No Mercado Pago, acesse **Notificações** > **Webhooks**.
2. Selecione o **Modo de Produção**.
3. No campo **URL de produção**, cole a URL do seu backend:

```
https://SEU-BACKEND/subscription/payment/webhook/
```

> 💡 A URL é a do seu backend Whazing. Exemplo: `https://bottesteapi2.whazing.com.br/subscription/payment/webhook/`

4. Em **Eventos**, marque **Pagamentos**.

📌 **Pronto!** Com o webhook configurado, os pagamentos serão confirmados automaticamente.
