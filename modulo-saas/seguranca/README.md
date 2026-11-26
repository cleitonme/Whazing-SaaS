---
description: >-
  Visão geral da seção Segurança do Painel SaaS: quais telas existem, para que
  serve cada uma e por onde começar.
---

# 🔐 Segurança

> **Em palavras simples:** a seção **Segurança** reúne os controles que decidem **quem entra no sistema**, **o que pode ser acessado** e **quem é avisado quando algo estranho acontece**. É uma área do **Painel SaaS**, ou seja, do administrador da instalação — não é uma tela do cliente final.

> 👤 **Quem usa esta tela:** o **administrador do SaaS** (dono da instalação).

***

## 📍 Onde fica

```text
Painel SaaS → Segurança
```

Ao entrar, você vê uma página com **cartões**, um para cada tela de segurança:

| Cartão | O que resolve |
| --- | --- |
| **Cloudflare Turnstile / Rate Limit** | Liga o desafio anti-bot nas telas de login e cadastro: [Ativar Cloudflare Turnstile](../ativar-cloudflare-turnstile-protecao-anti-bot.md) |
| **Verificação em duas etapas** | Define se o código extra é opcional, sugerido ou obrigatório, e por qual método: [Verificação em duas etapas](verificacao-em-duas-etapas.md) |
| **Proteção de mídia** | Decide se fotos, áudios e documentos podem ser abertos por qualquer pessoa com o link: [Proteção de mídia](protecao-de-midia.md) |
| **Alertas de segurança** | Escolhe por onde os administradores são avisados de eventos suspeitos (e-mail, push, navegador e webhook): [Alertas de segurança](alertas-de-seguranca.md) |
| **Logs de Falhas de Login** | Mostra o histórico de tentativas de acesso, com IP, navegador e empresa: [Logs de tentativas de acesso](logs-de-tentativas.md) |

> 💡 **Dica:** as telas são independentes. Você pode ligar os alertas sem mexer na proteção de mídia, por exemplo.

***

## 🆕 O que é novo nesta versão

Os itens abaixo passaram a existir nesta atualização e agora estão documentados:

* **Alertas de segurança** — avisos de eventos suspeitos por e-mail, push, navegador e webhook: [Alertas de segurança](alertas-de-seguranca.md);
* **Verificação em duas etapas no painel** — política global, métodos, e-mail do código e recuperação de acesso do cliente: [Verificação em duas etapas](verificacao-em-duas-etapas.md);
* **Logs de tentativas de acesso** — consulta das falhas de login e de bloqueios de segurança: [Logs de tentativas de acesso](logs-de-tentativas.md).

## 🔄 O que mudou em recursos que já existiam

* **Proteção de mídia** — o recurso já existia, mas era configurado **no arquivo `.env` do servidor**. Agora a configuração é feita **pelo painel**, com chave de acesso e validade de links. As variáveis antigas do `.env` **não têm mais efeito**: [Proteção de mídia](protecao-de-midia.md).
* **Código de confirmação no cadastro de teste** — novo passo opcional no cadastro, configurado em **Sistema → Configuração de Teste**: [Verificação de contato no cadastro de teste](../verificacao-de-contato-no-cadastro-de-teste.md).
* **Troca de senha obrigatória** — novo botão por usuário em **Empresas → Usuários**: [Exigir troca de senha no próximo login](../exigir-troca-de-senha.md).

***

## 🪜 Ordem recomendada de configuração

1. **Ativar o Turnstile** nas telas de login e cadastro (protege contra robôs).
2. **Manter a proteção de mídia ligada** e conferir o estado no topo da tela.
3. **Configurar os alertas de segurança** — no mínimo, deixar o e-mail ligado.
4. **Escolher a política de duas etapas** (sugerido ou obrigatório) e liberar pelo menos um método.
5. **Consultar os logs** de tempos em tempos para ver se há tentativas repetidas.

***

## ⚠️ O que ainda não é possível confirmar

Para não prometer o que o sistema não faz, estes pontos **não estão descritos como certos** na documentação:

* **Quais eventos exatos** disparam o alerta de "tentativa suspeita" — a tela fala em "evento suspeito registrado", mas não lista os gatilhos;
* se as notificações **push e de navegador exigem permissão prévia** do usuário no aparelho;
* se a **proteção de mídia** já vem ligada em instalações atualizadas — a tela mostra apenas o estado atual, então **confira o aviso verde/laranja no topo** da tela;
* controles de **Rate Limit** citados no nome do cartão — a tela aberta por ele tem apenas os campos do Turnstile.

***

## 📚 Veja também

* [Ativar Cloudflare Turnstile](../ativar-cloudflare-turnstile-protecao-anti-bot.md)
* [Verificação em duas etapas](verificacao-em-duas-etapas.md)
* [Proteção de mídia](protecao-de-midia.md)
* [Alertas de segurança](alertas-de-seguranca.md)
* [Logs de tentativas de acesso](logs-de-tentativas.md)
* [Verificação de contato no cadastro de teste](../verificacao-de-contato-no-cadastro-de-teste.md)
* [Exigir troca de senha no próximo login](../exigir-troca-de-senha.md)
