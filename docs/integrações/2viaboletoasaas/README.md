# Emissão de 2ª Via de Boleto Asaas no Bot

## Passo 1: Configurar Integração

1. Acesse **Integrações** > clique em **Adicionar** e preencha os dados conforme mostrado na imagem abaixo: ![print](../../../.gitbook/assets/tela1.png)
2. Obtenha sua **Api Key** no site [Asaas](https://www.asaas.com/customerApiAccessToken/index).

## Passo 2: Configurar Filas

1. Acesse **Cadastros** > **Filas** > clique em **Adicionar** e preencha os dados conforme mostrado na imagem abaixo: ![print](../../../.gitbook/assets/tela2.png)
2. Na integração, selecione a opção criada no passo anterior.

## Passo 3: Criar o Chatbot

1. Crie um chatbot. Verifique a documentação para exemplos de como criar um chatbot. ![print](../../../.gitbook/assets/tela3.png)

## Passo 4: Configurar Condições

1. Nas **Condições**, configure para rotear para a fila criada anteriormente e adicione uma mensagem solicitando o CPF ou CNPJ do cliente.
