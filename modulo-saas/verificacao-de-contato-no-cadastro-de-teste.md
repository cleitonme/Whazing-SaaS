---
description: >-
  Como ativar a confirmação por código no cadastro de teste e configurar
  validade, tentativas, reenvios e a mensagem de WhatsApp.
---

# 📝 Verificação de Contato no Cadastro de Teste

> 🆕 **Recurso novo:** esta opção passou a existir nesta versão, dentro da tela **Configuração de Teste**.

> **Em palavras simples:** quando alguém pede uma conta de teste pela página de cadastro, o sistema pode **enviar um código** para o e-mail ou para o WhatsApp dessa pessoa e **só criar a conta depois que ela digitar o código**. Isso impede cadastros com e-mail ou telefone falsos.

> 👤 **Quem usa esta tela:** o **administrador do SaaS**. O visitante do site apenas vê o pedido de código.

***

## 📍 Onde fica

```text
Painel SaaS → Sistema → Configuração de Teste
```

> 💡 A verificação de contato fica **dentro** de "Configuração de Teste" e **só aparece quando "Permitir solicitação de teste" está ligado**.

***

## 🎛️ Como a tela está organizada

| Item | O que faz |
| --- | --- |
| **Permitir solicitação de teste** | Liga/desliga o cadastro de teste automático pela página de signup |
| **Tempo em dias teste** | Quantos dias a conta de teste fica válida (aparece só com o item acima ligado) |
| **URL dos Termos de Uso** | Endereço do documento mostrado no cadastro |
| **URL da Política de Privacidade** | Endereço da política mostrada no cadastro |
| **Verificação de contato antes de ativar** | O bloco novo, descrito abaixo |

> ℹ️ **As alterações são gravadas na hora.** Não existe botão "Salvar": ao mudar um campo, o sistema grava e mostra o aviso **"Configuração alterada"**. Se a gravação falhar, a chave volta ao estado anterior.

***

## ✅ Verificação de contato antes de ativar

O texto da própria tela explica:

> "Exige a confirmação de um código enviado ao contato antes de criar a conta de teste. Desativada, o cadastro segue como hoje."

### Modo — "Verificar por"

| Opção | O que acontece no cadastro |
| --- | --- |
| **Desativada** | Cadastro concluído sem código — igual ao comportamento anterior |
| **E-mail** | Código enviado para o **e-mail** informado |
| **WhatsApp** | Código enviado para o **telefone** informado |
| **E-mail e WhatsApp** | Exige a confirmação **dos dois contatos**, um depois do outro |

> 💡 **Escolha prática:** e-mail é o mais simples de manter; WhatsApp é mais difícil de falsificar, mas depende da API de envio estar configurada.

### Os três números de controle

| Campo | Faixa aceita | O que significa |
| --- | --- | --- |
| **Validade do código (minutos)** | 1 a 60 | Por quanto tempo o código continua valendo. Padrão: **10** |
| **Tentativas por verificação** | 1 a 10 | Quantas vezes a pessoa pode errar o código antes de precisar pedir outro. Padrão: **5** |
| **Reenvios por canal** | 0 a 10 | Quantas vezes a pessoa pode pedir um novo código. Padrão: **3**. Com **0**, não há reenvio |

> ✅ O valor **0** em reenvios é válido: significa "não permite pedir outro código".

***

## 📨 Onde o código é enviado (avisos de transporte)

A tela mostra um aviso para cada transporte usado pelo modo escolhido, com um botão que leva direto para a aba de configuração.

### E-mail

> "O código por e-mail sai pelo mesmo SMTP geral, configurado em Comunicação → **Recuperação de Senha (SMTP)**."

Se o envio de e-mail (SMTP) estiver **desabilitado**, o aviso fica **vermelho**:

> "A verificação por e-mail está escolhida, mas o envio de e-mail (SMTP) está desabilitado. Habilite-o em Comunicação → **Recuperação de Senha (SMTP)**: nenhum cadastro será concluído até lá."

> ⚠️ Ou seja: com o SMTP quebrado **e** verificação por e-mail ligada, **ninguém consegue concluir o cadastro de teste**.

### WhatsApp

> "O código por WhatsApp usa a URL e o token de Comunicação → **Notificações WhatsApp**, os mesmos da mensagem de boas-vindas."

Se a URL da API não estiver configurada, o aviso fica **vermelho**:

> "A verificação por WhatsApp está escolhida, mas a URL da API não está configurada. Preencha URL e token em Comunicação → **Notificações WhatsApp**: nenhum cadastro será concluído até lá."

Quando já existe URL configurada, a tela mostra o endereço abaixo do aviso. O **token nunca aparece**.

***

## 💬 Mensagem do código por WhatsApp

Quando o modo inclui WhatsApp, aparece um campo de texto grande com a mensagem enviada e um botão de **variáveis** (ícone `mdi-variable`) para inserir no texto.

Variáveis disponíveis:

| Variável | Vira, na mensagem |
| --- | --- |
| **Código** | `{{codigo}}` — o código de 6 dígitos |
| **Minutos de validade** | `{{minutos}}` — o tempo configurado acima |
| **Nome do responsável** | `{{nomeresponsavel}}` |
| **Nome da empresa** | `{{nomeempresa}}` |
| **Número de telefone** | `{{number}}` |

> ⚠️ Com o **envio em JSON** habilitado, esta mensagem precisa ser um **JSON válido**, igual à mensagem de boas-vindas. A própria tela avisa: *"Com o envio em JSON habilitado, esta mensagem precisa ser um JSON válido, igual à mensagem de boas-vindas."*

### Botão — Testar envio de e-mail

Aparece quando o modo **não** é só WhatsApp. Envia um e-mail de teste para confirmar que o SMTP está funcionando.

***

## 👀 O que o visitante vê

Ao clicar em criar a conta, abre um diálogo **"Confirme seu contato"**:

1. o sistema informa que enviou um código de **6 dígitos** para o destino, mostrado **mascarado** (por exemplo, parte do e-mail ou do telefone);
2. a pessoa digita o código e clica em **Confirmar**;
3. se o modo for **E-mail e WhatsApp**, depois do primeiro contato confirmado aparece: *"Contato confirmado. Falta o próximo."*, e o mesmo processo se repete para o segundo;
4. os dois contatos confirmados, a conta é criada.

Detalhes do diálogo:

* a tela mostra **"O código vale por {minutos} minutos."**;
* o botão **Reenviar código** fica bloqueado com uma contagem: **"Reenviar em 12s"**. Ao usar, aparece *"Código reenviado."*;
* **fechar o diálogo não perde o formulário**: os dados já preenchidos continuam lá.

### Mensagens de erro que o visitante pode ver

| Mensagem | Motivo |
| --- | --- |
| **Código inválido. Confira e tente de novo.** | Código digitado errado |
| **O código expirou. Faça a solicitação novamente.** | Passou do tempo de validade |
| **Muitas tentativas. Aguarde alguns minutos.** | Passou do limite de tentativas |
| **Limite de reenvios atingido.** | Usou todos os reenvios permitidos |
| **Não foi possível enviar o código. Tente novamente em instantes.** | Falha no envio (SMTP ou API do WhatsApp) |
| **Não foi possível confirmar o código.** | Erro genérico |

***

## 🪜 Passo a passo

1. Abra **Painel SaaS → Sistema → Configuração de Teste**.
2. Confirme que **Permitir solicitação de teste** está ligado.
3. Em **Verificação de contato antes de ativar**, escolha o modo (**E-mail**, **WhatsApp** ou **E-mail e WhatsApp**).
4. Ajuste **validade**, **tentativas** e **reenvios** se quiser (os padrões costumam servir).
5. Confira os avisos de transporte. Se estiverem vermelhos, clique em **Abrir** e corrija a configuração indicada.
6. Se usar WhatsApp, revise a mensagem e as variáveis.
7. Faça um cadastro de teste de verdade, do começo ao fim.

> ✅ Deu certo quando o código chega, o cadastro é concluído e, ao errar o código, aparece **"Código inválido"**.

***

## 💾 O que acontece ao mudar

* A mudança vale **para todos os novos cadastros de teste**;
* **contas já criadas** não são afetadas;
* em **"Desativada"**, o cadastro volta a ser concluído **sem código**;
* com o modo em **E-mail e WhatsApp**, o processo só termina quando os **dois** códigos forem confirmados;
* o código é de **uso único**: depois de confirmado, não serve mais.

***

## 🆘 Problemas comuns

### O visitante não recebe o código

1. Veja se o aviso de transporte está **vermelho** na tela;
2. para e-mail, teste em **Comunicação → Recuperação de Senha (SMTP)**;
3. para WhatsApp, confira **URL e token** em **Comunicação → Notificações WhatsApp**;
4. confira spam/lixo eletrônico no caso do e-mail.

### Ninguém consegue concluir o cadastro

Provavelmente a verificação está ativa e o transporte **não funciona**. Opções:

* corrigir o SMTP/API; ou
* mudar o modo para **Desativada** enquanto resolve.

### A mensagem de WhatsApp não sai

* se o envio em JSON está habilitado, a mensagem precisa ser **JSON válido**;
* confira se as variáveis usadas existem (`{{codigo}}`, `{{minutos}}`, etc.);
* confira se a API usa o **mesmo** endpoint e token da mensagem de boas-vindas.

### O código chegou, mas a tela diz que expirou

A validade é curta de propósito (padrão 10 minutos). Aumente o campo **Validade do código** se o público demora para digitar.

### A verificação sumiu da tela

Ela só aparece com **Permitir solicitação de teste** ligado. Ligue a opção.

***

## ❓ Perguntas frequentes

#### Isso substitui o Cloudflare Turnstile?

Não. O Turnstile bloqueia **robôs**; a verificação de contato confirma que **o e-mail ou o telefone existem**. Podem ser usados juntos, e o ideal é usar os dois.

#### A verificação vale para contas criadas pela API?

A API Admin tem seus próprios endpoints de criação (veja [📘 API SaaS](api_saas.md)); não há confirmação no frontend de que este código seja exigido nesse caminho.

#### O cliente final precisa configurar algo?

Não. A configuração é do administrador do SaaS; o cliente só vê o pedido de código no momento do cadastro.

#### Posso exigir só WhatsApp?

Sim — escolha **WhatsApp**. Lembre que, sem a API configurada, ninguém conclui o cadastro.

***

## ❔ O que não é possível confirmar

* Se esta verificação vale **também** para cadastros feitos por outros caminhos (indicação de afiliado, API Admin, criação manual no painel) — o frontend mostra o fluxo na **página de cadastro** (`Signup`);
* se existe **limite diário** de códigos enviados por número/e-mail;
* se o código é **bloqueado** após muitas solicitações seguidas no mesmo dia;
* os **valores padrão** aplicados a instalações atualizadas (a tela mostra 10/5/3, mas isso pode variar conforme o banco).

***

## 📚 Veja também

* [🔐 Segurança](seguranca/README.md)
* [Ativar Cloudflare Turnstile](ativar-cloudflare-turnstile-protecao-anti-bot.md)
* [📘 API SaaS](api_saas.md)
* [Mensagem de boas vindas teste](integracao-api-envio-de-mensagens-e-alertas/mensagem-boas-vindas-teste.md)
* [Guia Simples para Configurar o Gmail](configurar-gmail.md)
