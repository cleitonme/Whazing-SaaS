---
icon: phone
---

# Discador SIP

> **Em palavras simples:** o Discador SIP coloca a **sua central telefônica** (PABX com ramais) dentro do Whazing. O atendente faz e recebe ligações pelo navegador, com transferência, espera, conferência e gravação.
>
> **Serve para:** empresas que já têm telefone fixo, PABX ou central com ramais (Asterisk, Issabel, FreePBX e similares).
>
> **Precisa de:** uma central com **WebRTC** e **WSS** habilitados (normalmente na porta `8089`).
>
> **Custa:** nada pelo Whazing — o custo é o da sua central/operadora de telefonia.
>
> **Quando não usar:** se você não tem central telefônica, use [Wavoip](configurar_wavoip.md) ou [WaCalls](wacalls.md).

> 🧭 **Comparativo das opções:** [Telefonia](./).

Suporte transferência, chamada em espera, gravação das chamadas, conferencia

<figure><img src="../../.gitbook/assets/discador.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/discador2.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/discador3.png" alt=""><figcaption></figcaption></figure>

Para que a integração funcione, seu servidor de telefonia (ex: Asterisk, Issabel) **deve** ter suporte a:

* ✅ **WebRTC**
* ✅ **WSS (Web Socket Secure)**, geralmente operando na porta `8089`.

No cadastro de usuários temos novos campos

<figure><img src="../../.gitbook/assets/config.png" alt=""><figcaption></figcaption></figure>

Em relatórios é possível encontrar um relatório das chamadas recebidas e efetuadas

<figure><img src="../../.gitbook/assets/logssip.png" alt=""><figcaption></figcaption></figure>

Caso precisar de um servidor pode está conversando com:

Jose Felipe Batista Ortiz - 55 34 9772-9922

Hamilton Oliveira Batista - 55 18 99744-1369

Leandro de Souza 55 11 98266-8277

Ou verificar nossos parceiros [https://whazing.com.br/parceiros/](https://whazing.com.br/parceiros/)

Sites referencias para testes e documentação ajustes servidor sip.

[https://www.doubango.org/sipml5/expert.htm](https://www.doubango.org/sipml5/expert.htm)

[https://www.odoo.com/pt\_BR/forum/ajuda-1/connect-odoo-to-asterisk-freepbx-252761](https://www.odoo.com/pt_BR/forum/ajuda-1/connect-odoo-to-asterisk-freepbx-252761)
