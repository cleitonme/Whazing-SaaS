---
icon: barcode
---

# Asaas - 2ª Via Boleto

## Passo 1: Configurar Integração

1. Acesse **Integrações** > clique em **Adicionar** e preencha os dados conforme mostrado na imagem abaixo:

<figure><img src="../../.gitbook/assets/image (4) (1).png" alt=""><figcaption></figcaption></figure>

1. Obtenha sua **Api Key** no site [Asaas](https://www.asaas.com/customerApiAccessToken/index).

## Passo 2: Configurar Filas

1. Acesse **Cadastros** > **Filas** > clique em **Adicionar** e preencha os dados conforme mostrado na imagem abaixo:

<figure><img src="../../.gitbook/assets/tela2 (1).png" alt=""><figcaption></figcaption></figure>

1. Na integração, selecione a opção criada no passo anterior.

## Passo 3: Criar o Chatbot

1. Crie um chatbot. Verifique a documentação para exemplos de como criar um chatbot.

<figure><img src="../../.gitbook/assets/tela3 (1).png" alt=""><figcaption></figcaption></figure>

## Passo 4: Configurar Condições

1. Nas **Condições**, configure para rotear para a fila criada anteriormente e adicione uma mensagem solicitando o CPF ou CNPJ do cliente.
