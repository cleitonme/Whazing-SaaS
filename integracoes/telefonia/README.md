---
description: >-
  As quatro formas de falar por telefone no Whazing — Wavoip, WaCalls, Discador
  SIP e Servidor SIP para WhatsApp Oficial — com o que cada uma faz e quanto custa.
---

# Telefonia

> **Em palavras simples:** o Whazing faz **ligações de voz** de quatro jeitos diferentes. Esta página explica cada um em linguagem simples para você escolher o certo — sem precisar entender de servidor, ramal ou protocolo.

***

## 🧭 Qual usar? (resposta rápida)

| Você quer... | Use | Precisa de quê |
| --- | --- | --- |
| Ligar e receber no **WhatsApp**, oficial **ou** não oficial, com o mínimo de trabalho | **Wavoip** | Conta no serviço Wavoip |
| Ligar e receber no WhatsApp **não oficial** sem pagar mensalidade | **WaCalls** | Sua VPS (você instala e mantém) |
| Usar a **sua central telefônica** (PABX, ramais, telefone fixo) dentro do Whazing | **Discador SIP** | Central com WebRTC (ex.: Asterisk, Issabel) |
| Atender ligações do **WhatsApp Oficial da Meta** com ramais e fila de atendimento | **Servidor SIP para WhatsApp API Oficial** | API Oficial de nuvem (Cloud API), sem COEX |

> 💡 Você pode combinar mais de uma opção na mesma conta, desde que os usuários tenham permissão em cada canal.

***

## 📞 Wavoip

**Serve para:** ligar e receber ligações do WhatsApp direto na tela de atendimento, com gravação das chamadas.

* ✅ Funciona com **API Oficial e API Não Oficial**;
* ✅ Gravação de chamadas e várias conexões (vários tokens);
* ✅ Não exige instalar nada na sua VPS — é um **serviço de terceiro**;
* 💰 Pago **direto à Wavoip** (plano gratuito e planos pagos); a Meta cobra por minuto quando a ligação é pelo WhatsApp Oficial;
* ⚠️ Na API Oficial, o cliente precisa **autorizar** a chamada antes.

👉 [Como configurar o Wavoip](configurar_wavoip.md)

***

## 📞 WaCalls

**Serve para:** ligar e receber no WhatsApp **não oficial** (conectado por QR Code), com gravação e transcrição.

* ✅ É **gratuito** (não tem mensalidade);
* ⚠️ Roda **na sua VPS**: você instala, atualiza e cuida da manutenção;
* ⚠️ Recomendamos uma **VPS só para o WaCalls** quando houver muitas ligações — assim ele não atrapalha o desempenho do Whazing;
* ⚠️ Recurso **novo e experimental**: a Meta pode mudar o funcionamento das chamadas a qualquer momento.

👉 [Instalar e configurar o WaCalls](wacalls.md) · [Usar no dia a dia](../../funcionalidades/wacalls-uso.md)

***

## ☎️ Discador SIP

**Serve para:** usar a **sua central telefônica** (Asterisk, Issabel, FreePBX e similares) dentro do Whazing — com transferência, chamada em espera, conferência e gravação.

* ✅ Ideal para quem já tem **telefone fixo, PABX ou central com ramais**;
* ✅ Funciona com **WebRTC** (o navegador faz a ligação, sem instalar programa);
* ⚠️ A central precisa ter **WebRTC** e **WSS** (geralmente na porta `8089`) configurados;
* 💰 O Whazing não cobra por isso — o custo é o da sua central/telefonia.

👉 [Configurar o Discador SIP](discador-sip.md)

***

## 🏢 Servidor SIP para WhatsApp API Oficial

**Serve para:** transformar o **WhatsApp Oficial** em uma central de atendimento por voz com ramais — cada atendente usa um ramal para ligar e receber.

* ✅ Chamadas pelo número oficial da Meta, com ramais no Whazing, telefones IP de mesa ou aplicativos SIP;
* ⚠️ **Somente para API Oficial de nuvem (Cloud API)** conectada **direto na Meta**;
* ⚠️ **Não funciona no modo COEX** (aquele em que o WhatsApp continua no celular);
* ⚠️ Exige Business Manager aprovado e limite de **2.000 destinatários únicos por dia**;
* 💰 **R$ 35,00 por ramal/mês** (1 a 9 ramais) ou **a partir de R$ 25,00** acima de 10 ramais — sem taxa de ativação;
* 💰 Ligação **recebida** não tem cobrança da Meta; ligação **feita pela empresa** é cobrada por minuto pela Meta.

👉 [Servidor SIP para WhatsApp API Oficial](servidor-sip-para-whatsapp-api-oficial.md)

***

## 🤔 Ainda em dúvida?

| Situação | Melhor caminho |
| --- | --- |
| "Quero começar hoje, sem mexer em servidor" | **Wavoip** |
| "Não quero pagar mensalidade e tenho VPS com folga" | **WaCalls** |
| "Já tenho PABX/ramais na empresa" | **Discador SIP** |
| "Tenho WhatsApp Oficial e quero fila de voz com ramais" | **Servidor SIP API Oficial** |

> ⚠️ Antes de liberar ligações para a equipe, confira as **permissões do usuário** no canal de chamadas e, após alterar, peça para o usuário **sair e entrar** novamente no sistema.

***

## 📚 Veja também

* [Chamadas de Voz (WaCalls) — uso no dia a dia](../../funcionalidades/wacalls-uso.md)
* [Chamadas Internas](../../funcionalidades/chamadas-internas.md)
* [Bloquear Chamadas do WhatsApp](../../canais-disponiveis/bloquear-chamadas.md)
* [WaCalls — ativação automática e venda de adicionais](../../modulo-saas/wacalls-ativacao-automatica-e-venda-de-adicionais.md)
