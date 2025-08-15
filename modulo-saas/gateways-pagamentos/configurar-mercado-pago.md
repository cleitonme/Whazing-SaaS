# Configurar Mercado Pago

Integre seu sistema com o Mercado Pago seguindo esses passos simples:

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

## Passo 4: Configurar Notificações (Webhooks)
1. Clique em **Notificações** > **Webhooks**.
2. No modo produção, cole a seguinte URL: `seubackend/subscription/whazing/webhook/`.
3. Marque a opção **Pagamentos** em Eventos.