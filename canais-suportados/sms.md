# SMS

A partir da **versão 3.0**, o Whazing permite utilizar **SMS** para envio de mensagens.

O serviço de SMS é fornecido através da **Witi**. A plataforma Whazing utiliza os créditos adquiridos na Witi e permite que você **revenda SMS para seus clientes**, criando seus próprios pacotes de créditos.

> **Importante:** o custo do SMS a partir de em aproximadamente **R$ 0,038 por SMS**, e a compra de créditos na Witi exige um valor mínimo de **R$ 250,00**.

***

### 1. Criar sua conta na Witi

Antes de configurar o SMS no Whazing, é necessário possuir uma conta na Witi.

Acesse:

[Witi — witi.me](https://witi.me/?utm_source=chatgpt.com)

Faça seu cadastro e, depois, adquira os créditos de SMS que serão utilizados pela sua plataforma.

#### Compra de créditos

A Witi trabalha com diferentes rotas e preços de SMS.

* O preço pode começar a partir de **R$ 0,038 por SMS**.
* A compra mínima informada é de **R$ 250,00**.
* O valor por SMS pode variar conforme a **rota escolhida**.

> **Dica:** antes de definir o preço dos seus pacotes para os clientes, verifique o custo da rota que você pretende utilizar na Witi.

***

## 2. Configurar o SMS no Whazing

Depois de criar sua conta e comprar os créditos na Witi, acesse no Whazing:

**Painel SaaS → Integrações → Configurar SMS**

Nesta tela será realizada a configuração da integração.

***

### 3. Ativar processamento de mensagens

Na configuração do SMS, existem duas opções importantes.

#### Habilitar callback (DLR/MO)

Ative esta opção.

Ela permite que o Whazing processe:

* **DLR:** status de entrega do SMS;
* **MO:** respostas recebidas dos destinatários.

#### Habilitar consulta periódica de respostas (MO)

Também recomendamos ativar esta opção.

Ela funciona como um **fallback do callback de MO**.

Quando ativada, o Whazing consulta automaticamente a API da Witi **a cada 5 minutos** para verificar se existem novas respostas recebidas.

> Recomendamos manter **as duas opções ativadas**.

***

## 4. Configurar a API Witi

Na seção **API Witi**, será necessário informar o token da sua conta.

Acesse a Witi e procure pela área:

**Configuração SMS → Geral**

Localize a opção:

**API habilitada?**

Ative a API e copie o **Token** fornecido pela Witi.

Depois, volte ao Whazing e cole esse token no campo correspondente da seção **API Witi**.

***

## 5. Escolher a rota preferencial

Na configuração da API Witi, selecione a **Rota Preferencial**.

A rota escolhida influencia diretamente no **preço de cada SMS enviado**.

Por isso, confira os valores disponíveis na sua conta Witi antes de escolher a rota.

> O custo final pode variar conforme a rota utilizada.

***

## 6. Configurar os Callbacks

Na Witi, acesse a área de configurações avançadas.

Ative:

**Habilitar Callback**

Depois de ativar essa opção, a Witi apresentará as URLs necessárias para o funcionamento dos callbacks.

No Whazing, serão exibidos os campos correspondentes para essas URLs.

#### Como configurar

1. No Whazing, abra **Painel SaaS → Integrações → Configurar SMS**.
2. Localize as URLs de callback exibidas pelo Whazing.
3. Copie a primeira URL.
4. Cole no campo correspondente dentro da configuração da Witi.
5. Copie a segunda URL.
6. Cole no segundo campo correspondente da Witi.
7. Salve as configurações.

Esses callbacks permitem que informações como **status de entrega e respostas recebidas** sejam comunicadas à plataforma.

***

## 7. Criar pacotes de SMS para seus clientes

Depois de configurar a integração com a Witi, você pode criar seus próprios pacotes de SMS para vender aos clientes.

Acesse:

**Painel SaaS → Comercial → Créditos de SMS**

Nesta tela você poderá criar os pacotes.

Para cada pacote, informe:

* **Nome do pacote**
* **Descrição**
* **Valor**
* **Quantidade de SMS**

#### Exemplo

Você pode criar um pacote como:

**Pacote SMS 1.000**

* Quantidade: 1.000 SMS
* Valor: R$ 50,00
* Descrição: Pacote com 1.000 créditos para envio de SMS

Você pode criar quantos pacotes quiser, de acordo com sua estratégia comercial.

***

## 8. Compra de créditos pelo cliente

O cliente poderá comprar os pacotes diretamente pelo painel do Whazing.

Após a confirmação da compra, a quantidade de SMS adquirida será **adicionada automaticamente ao saldo da empresa**.

Assim, o cliente não precisa acessar a Witi para comprar créditos individualmente.

A compra dos créditos na Witi é responsabilidade da operação SaaS.

***

## 9. Consultar e ajustar saldo dos clientes

Na mesma área:

**Painel SaaS → Comercial → Créditos de SMS**

existe a área de **Saldos por empresa**.

Nela você poderá consultar o saldo disponível de cada cliente.

Também é possível ajustar o saldo manualmente quando necessário.

#### Exemplo

Você pode adicionar créditos manualmente para um cliente que precisa realizar testes:

> Cliente: Empresa Teste\
> Saldo atual: 100 SMS\
> Ajuste: +50 SMS\
> Novo saldo: 150 SMS

Isso pode ser útil para testes, bonificações ou correções administrativas.

***

## 10. Relatório de SMS

Para acompanhar o uso dos créditos, acesse:

**Painel SaaS → Comercial → Relatório de SMS**

O relatório permite acompanhar o consumo dos clientes.

Você poderá consultar informações como:

* Consumo de SMS;
* Clientes que utilizaram SMS;
* Quantidade enviada;
* Saldo dos clientes;
* Consumo da operação;
* Saldo disponível na Witi;
* Gastos com SMS.

Essa tela ajuda a acompanhar tanto o **consumo dos clientes** quanto os **custos da sua operação**.

***

## 11. Onde o cliente compra SMS

O cliente encontrará a opção de compra dentro de:

**Cadastros → Canais**

No canal SMS haverá acesso ao:

* Histórico de SMS;
* Saldo disponível;
* Compra de créditos.

Dessa forma, o cliente consegue acompanhar e adquirir créditos sem precisar acessar o Painel SaaS.

***

## 12. Onde o cliente pode utilizar os SMS

Depois que possuir créditos, o cliente poderá utilizar o canal SMS em diferentes funcionalidades do Whazing.

### Atendimento

Na tela de **Atendimento**, o usuário poderá criar um ticket e enviar uma mensagem utilizando o canal SMS.

### Campanhas

Também é possível utilizar SMS para criar campanhas de envio.

Acesse a área de **Campanhas** e configure uma campanha utilizando o canal SMS.

> O envio consumirá os créditos de SMS disponíveis na conta da empresa.

### Api

Existe endpoint especifico SMS

***

## 13. Limite de caracteres do SMS

SMS possui limite de caracteres.

Quando a mensagem ultrapassa determinado limite, ela pode precisar ser dividida em **mais de um SMS**.

Por isso, uma única mensagem enviada pode consumir mais de um crédito.

O Whazing informa ao usuário quando isso acontecer.

#### Exemplo

Se a mensagem utilizar uma quantidade de caracteres que exija 2 SMS, o sistema poderá apresentar:

> **Vai consumir 2 crédito(s) por contato (codificação GSM).**

Nesse caso, o envio para cada contato consumirá **2 créditos**.

#### Como gastar menos créditos

Para reduzir o consumo:

* Diminua o tamanho da mensagem;
* Evite textos desnecessariamente longos;
* Verifique o aviso de consumo apresentado pelo sistema antes do envio.

> **Importante:** o consumo é calculado por contato. Se uma mensagem consumir 2 créditos e for enviada para 100 contatos, serão necessários **200 créditos**.

***

## 14. Resumo da configuração

Para colocar o SMS para funcionar:

1. Crie sua conta na [Witi](https://witi.me/?utm_source=chatgpt.com).
2. Compre créditos de SMS na Witi.
3. Acesse **Painel SaaS → Integrações → Configurar SMS**.
4. Ative **Habilitar callback (DLR/MO)**.
5. Ative **Habilitar consulta periódica de respostas (MO)**.
6. Na Witi, ative a API e copie o **Token**.
7. Cole o token no Whazing.
8. Escolha a **Rota Preferencial**.
9. Na Witi, acesse as configurações avançadas.
10. Ative **Habilitar Callback**.
11. Copie as duas URLs exibidas pelo Whazing para os respectivos campos da Witi.
12. Salve as configurações.
13. Crie seus pacotes em **Painel SaaS → Comercial → Créditos de SMS**.
14. Seus clientes poderão comprar créditos pelo próprio Whazing.
15. Acompanhe consumo e custos em **Painel SaaS → Comercial → Relatório de SMS**.

> **Pronto!** Depois dessa configuração, sua operação estará preparada para vender créditos de SMS aos clientes e permitir que eles utilizem SMS no Atendimento e em Campanhas.
