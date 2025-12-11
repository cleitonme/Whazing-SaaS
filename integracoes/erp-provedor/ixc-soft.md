---
description: Suporte 2 via de boletos e desbloqueio de confiança
---

# IXC Soft

## Você deve colocar perguntar cpf ou cnpj do cliente ao encaminhar fila a integração espera receber essa informação

## Passo 1: Configurar Integração

Atenção:

Exemplo domínio [https://ixc.whazing.com.br/webservice/v1](https://www.flashnetprovedor.com.br/webservice/v1)

na url da integração preencha somente [https://ixc.whazing.com.br](https://www.flashnetprovedor.com.br/webservice/v1), não colocar valor depois /

1. Acesse **Integrações** > clique em **Adicionar** e preencha os dados conforme mostrado na imagem abaixo:
2. ![](<../../.gitbook/assets/image (14).png>)
3. cadastrar dados para acesso Api IXC e liberar ip da vps abaixo segue prints tela configuração no ixc

## Passo 2: Configurar Filas

1. Acesse **Cadastros** > **Filas** > clique em **Adicionar** e preencha os dados conforme mostrado na imagem abaixo:
2.

```
<figure><img src="../../.gitbook/assets/image (15).png" alt=""><figcaption></figcaption></figure>
```

3. Na integração, selecione a opção criada no passo anterior.

## Passo 3: Criar o Chatbot

1. Crie um chatbot. Verifique a documentação para exemplos de como criar um chatbot.
2. &#x20;![print](../integrações/2viaboletoasaas/tela3.png)

## Passo 4: Configurar Condições

1. Nas **Condições**, configure para rotear para a fila criada anteriormente e adicione uma mensagem solicitando o CPF ou CNPJ do cliente.

Telas do IXC

<figure><img src="../../.gitbook/assets/image (17).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (16).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (18).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (19).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (20).png" alt=""><figcaption></figcaption></figure>

Obrigado André Alves Magalhães pelo apoio
