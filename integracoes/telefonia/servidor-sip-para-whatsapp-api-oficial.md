# Servidor SIP para WhatsApp API Oficial

Transforme sua API Oficial do WhatsApp em uma central de atendimento por voz utilizando ramais SIP.

### Valores

#### Plano Cliente Final

* R$ 35,00 por ramal/mês
* Válido para contratação de 1 a 9 ramais

#### Plano Revenda

* A partir de 10 ramais: R$ 25,00 por ramal/mês
* Descontos progressivos conforme o volume contratado

✅ Sem taxa de ativação

### Como Funciona

Cada usuário da plataforma deve possuir um ramal para realizar e receber chamadas.

Cada ramal suporta **1 ligação simultânea**.

#### Exemplos

* 1 ramal = 1 ligação simultânea
* 5 ramais = até 5 ligações simultâneas
* 10 ramais = até 10 ligações simultâneas
* 50 ramais = até 50 ligações simultâneas

Os ramais podem ser utilizados no:

* Whazing
* Telefones IP de mesa
* Aplicativos SIP para Android e iPhone
* Softphones para Windows e Linux

### Custos das Chamadas

#### Ligações recebidas

Quando o cliente inicia uma ligação para sua empresa através do WhatsApp, não há cobrança pela Meta.

#### Ligações realizadas

Quando a empresa inicia uma ligação para o cliente, a Meta realiza a cobrança por minuto conforme a tabela oficial do WhatsApp Calling.

Valor de referência para números do Brasil em 02/06/2026:

* US$ 0,0108 por minuto

Os valores podem ser alterados pela Meta sem aviso prévio.

### Requisitos

Para utilizar o Servidor SIP é necessário:

* Utilizar WhatsApp Cloud API (API Oficial de Nuvem)
* Possuir Business Manager aprovado
* Possuir limite mínimo de 2.000 destinatários únicos por dia
* Não utilizar ambiente COEX

### Como verificar o limite de destinatários

Acesse o WhatsApp Manager e verifique o limite diário disponível para sua conta:

[https://business.facebook.com/wa/manage/home/](https://business.facebook.com/wa/manage/home/)

### Limitações

* Compatível apenas com WhatsApp Cloud API
* Não compatível com COEX
* Cada ramal suporta apenas 1 ligação simultânea
* Chamadas iniciadas pela empresa possuem cobrança da Meta
* A qualidade das chamadas depende da conexão de internet dos participantes

### Referências Oficiais

#### Documentação WhatsApp Calling

[https://developers.facebook.com/documentation/business-messaging/whatsapp/calling](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling)

#### Tabela Oficial de Preços

[https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/pricing)
