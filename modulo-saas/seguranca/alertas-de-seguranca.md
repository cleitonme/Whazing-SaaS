---
description: >-
  Como escolher por onde os administradores são avisados quando um evento
  suspeito é registrado: e-mail, notificação push, aviso no navegador e webhook.
---

# 🚨 Alertas de Segurança

> 🆕 **Recurso novo:** esta tela passou a existir nesta versão.

> **Em palavras simples:** quando o sistema registra **algo suspeito** (por exemplo, várias tentativas de login que falharam), ele pode **avisar os administradores**. Aqui você escolhe **por onde** esse aviso chega: por e-mail, como notificação no celular/computador, como aviso na tela de quem está com o sistema aberto — ou tudo isso junto.

> 👤 **Quem usa esta tela:** o **administrador do SaaS**. O cliente final não vê esta tela.

***

## 📍 Onde fica

```text
Painel SaaS → Segurança → Alertas de segurança
```

A tela tem **três blocos**:

1. **Alertas de segurança** — os três canais de aviso (E-mail, Push, Navegador);
2. **Webhook** — envio do alerta para um endereço seu;
3. **Salvar** — o botão que grava as mudanças.

***

## ⚠️ Antes de começar: esta tela não salva sozinha

Diferente de outras telas do painel, aqui **nada é gravado na hora em que você liga a chave**.

* O botão **Salvar** só fica ativo quando existe alguma alteração pendente;
* enquanto houver mudança não gravada, aparece o aviso laranja **"Alterações não salvas"**;
* **Descartar** volta tudo para o que está gravado no servidor;
* se você sair da tela sem salvar, **a mudança é perdida**.

> ✅ Deu certo quando aparece o aviso **"Configuração salva"**.

***

## 📣 Canais de aviso

| Opção | O que faz | Observação |
| --- | --- | --- |
| **E-mail** | Envia o alerta para o **e-mail de cada administrador**, pelo SMTP configurado no sistema | Depende do envio de e-mail estar funcionando |
| **Notificação push** | Avisa no **celular ou no computador**, mesmo com o sistema fechado | Pode depender de o usuário ter autorizado notificações no aparelho |
| **Aviso no navegador** | Mostra o alerta **na hora** para quem está com o sistema aberto | Só aparece para quem está com a tela aberta naquele momento |

> 💡 Os três vêm **ligados**. Você pode ligar só um, só dois, ou os três.

### Nenhum destino ativo

Se você desligar os três canais **e** não houver URL de webhook, aparece o aviso:

> **"Nenhum destino ativo: os eventos continuam sendo registrados, mas ninguém será avisado."**

Ou seja: **nada deixa de ser registrado** — os eventos continuam nos logs. O que você perde é o **aviso na hora**. Nesse caso, use os [Logs de tentativas de acesso](logs-de-tentativas.md) para acompanhar manualmente.

***

## 🔗 Webhook

O webhook serve para **entregar cada alerta a um sistema seu**. É útil para integrar com uma ferramenta de monitoramento (SIEM), com o **n8n** ou com um canal da sua equipe.

O envio é feito por **POST**, em **JSON**, para o endereço que você informar.

### Campo — URL do webhook

* Deixe **vazio** para não enviar nada;
* aceita endereços **`http://`** ou **`https://`**;
* **endereços de rede interna do servidor são recusados** (proteção contra usar o webhook para acessar a rede de dentro);
* se a URL não for um endereço válido, o campo mostra o erro **"Informe uma URL http:// ou https:// válida."**

### Campo — Segredo da assinatura (opcional)

Serve para quem recebe conseguir **conferir que o alerta veio realmente deste sistema**.

* o corpo da mensagem é assinado em **HMAC-SHA256**;
* a assinatura vai no cabeçalho **`X-Security-Signature`**;
* o segredo **não é mostrado** de novo, nem para você. O campo aparece como **"Segredo já cadastrado — digite para substituir"**: se você digitar algo, substitui; se deixar em branco, mantém o atual;
* o botão **Remover segredo** pede confirmação. Sem segredo, os disparos continuam, mas **sem o cabeçalho de assinatura**, e quem recebe não consegue confirmar a origem.

### Botão — Testar

Dispara um **alerta de exemplo** para a URL **já salva** e mostra o que o destino respondeu na hora:

* sucesso: **"Respondeu 200 em 1234 ms"** (o status e o tempo variam);
* falha: **"Falhou (status)"** — por exemplo, um erro 500 do seu servidor.

O botão fica **desativado** enquanto:

* não existe URL salva; ou
* você alterou a URL e **ainda não salvou**; ou
* existe um segredo novo digitado e **ainda não salvo**.

Nesses casos, passe o mouse no botão: aparece **"Salve a URL antes de testar."**

> ✅ O teste é a melhor forma de confirmar a integração antes de depender dela.

***

## 🔐 Chave de criptografia do servidor

Para guardar o segredo do webhook com segurança, o servidor precisa de uma **chave de criptografia** configurada.

Se essa chave **não existir**, aparece um aviso vermelho na tela:

> "O servidor não tem chave de criptografia (CREDENTIAL_CRYPTO_KEY ou JWT_SECRET), então o segredo não pode ser guardado com segurança. O webhook funciona, mas sem assinatura."

Nesse caso:

* o **webhook continua funcionando**;
* o **campo de segredo fica bloqueado** para edição;
* os canais de e-mail, push e navegador **não são afetados**.

Quem resolve isso é a pessoa que administra o servidor (configuração de ambiente). Não é algo que se ajuste por esta tela.

***

## 🪜 Passo a passo

1. Abra **Painel SaaS → Segurança → Alertas de segurança**.
2. Ligue os canais que você quer usar (**E-mail**, **Push**, **Navegador**).
3. Se quiser webhook, cole a **URL** e, se o outro sistema pedir, informe um **segredo**.
4. Clique em **Salvar**.
5. Se configurou webhook, clique em **Testar** e confira a resposta.
6. Faça um teste real: erre a senha de propósito algumas vezes em uma conta de teste e veja se o aviso chega.

> ✅ Deu certo quando o teste do webhook responde e/ou o aviso chega no canal escolhido.

***

## 💾 O que acontece ao salvar

* As chaves de canal passam a valer **para toda a plataforma**, não por empresa;
* a URL e o segredo do webhook ficam gravados no servidor;
* o segredo é guardado **criptografado** e nunca volta a ser exibido;
* o endereço do webhook passa a receber **cada alerta** em JSON;
* os canais desligados **param de avisar** — mas os eventos **continuam sendo registrados**.

***

## 🆘 Problemas comuns e mensagens de erro

| Mensagem | O que significa | O que fazer |
| --- | --- | --- |
| **URL do webhook inválida.** | O texto não é um endereço `http://` ou `https://` válido | Corrija a URL e salve |
| **Esse endereço aponta para a rede interna do servidor e não pode ser usado.** | O destino é um IP/host interno | Use um endereço público |
| **Não foi possível resolver o endereço informado.** | O domínio não existe ou não respondeu | Confira a escrita do domínio |
| **Segredo inválido.** | O segredo informado não foi aceito | Digite outro valor |
| **O servidor não tem chave de criptografia para guardar o segredo. Nada foi salvo.** | Falta a chave de criptografia no servidor | Peça a configuração ao responsável pelo servidor |
| **Cadastre e salve a URL do webhook antes de testar.** | Você clicou em Testar sem URL salva | Salve a URL primeiro |
| **Configuração ausente no banco de dados. Rode as migrations pendentes.** | A instalação está desatualizada no banco | Rode as migrações do servidor |
| **Não foi possível concluir a operação.** | Erro genérico | Tente de novo; se persistir, verifique os logs do servidor |

### O aviso não chega por e-mail

1. Confira se **E-mail** está ligado **e salvo**;
2. teste o envio de e-mail em outra tela do painel (o SMTP é o mesmo);
3. verifique a caixa de spam dos administradores.

### O teste do webhook falha

1. Confirme que a URL está **salva**;
2. confira se o seu servidor aceita **POST em JSON**;
3. veja se o endereço **não é interno** (a tela recusa);
4. se o retorno for erro do seu lado (400, 401, 500), o problema está no destino, não no Whazing.

***

## ❓ Perguntas frequentes

#### Desligar os canais para de registrar os eventos?

Não. Os eventos **continuam sendo registrados**; você só deixa de ser **avisado**. Veja [Logs de tentativas de acesso](logs-de-tentativas.md).

#### Preciso configurar para cada empresa?

Não. Esta configuração é **da plataforma inteira** e vale para todos os administradores.

#### Para onde vai o e-mail do alerta?

Para o **e-mail de cada administrador**, usando o SMTP configurado no sistema.

#### Posso usar o webhook sem segredo?

Sim. O disparo acontece igual; só não vai o cabeçalho de assinatura.

#### O que é o cabeçalho `X-Security-Signature`?

É a **assinatura** do conteúdo, gerada com o segredo que você cadastrou. Quem recebe calcula a mesma assinatura do lado dele e compara — se for igual, o alerta é legítimo.

***

## ❔ O que não é possível confirmar

* **Quais eventos exatos** geram alerta — a tela fala em "evento suspeito", mas não lista os gatilhos;
* se **push e aviso no navegador** precisam de permissão/autorização prévia do usuário no aparelho;
* se existe **limite de envios** por período.

***

## 📚 Veja também

* [🔐 Segurança](README.md)
* [Logs de tentativas de acesso](logs-de-tentativas.md)
* [Verificação em duas etapas](verificacao-em-duas-etapas.md)
* [Proteção de mídia](protecao-de-midia.md)
