---
description: >-
  Como consultar as tentativas de login falhadas e os bloqueios de segurança,
  com filtros por data, resumo e legenda dos eventos.
---

# 🕵️ Logs de Tentativas de Acesso

> 🆕 **Recurso novo:** esta tela passou a existir nesta versão.

> **Em palavras simples:** aqui você vê **o histórico de quem tentou entrar no sistema e não conseguiu** — e também bloqueios de segurança, como acesso a dados de outra empresa. É a tela para descobrir se alguém está tentando adivinhar senhas.

> 👤 **Quem usa esta tela:** o **administrador do SaaS**. O cliente final não tem acesso a estes registros.

***

## 📍 Onde fica

```text
Painel SaaS → Segurança → Logs de Falhas de Login
```

***

## 🔎 Filtros

No topo da tela há dois campos de data e o botão de busca:

| Campo | O que faz |
| --- | --- |
| **Data inicial** | Início do período consultado |
| **Data final** | Fim do período consultado |
| **Filtrar** | Recarrega a lista com o período escolhido |

> 💡 Ao abrir a tela, o período já vem preenchido com **os últimos 3 dias** (até o fim do dia de hoje).

A lista é atualizada **ao abrir a tela** e **ao clicar em Filtrar**.

***

## 📊 Resumo do período

Quando existe pelo menos um registro, aparecem três números:

| Indicador | O que mostra |
| --- | --- |
| **Total de Tentativas** (vermelho) | Quantos registros existem no período |
| **E-mails Únicos** (laranja) | Quantos e-mails diferentes aparecem — bom sinal de varredura quando é alto |
| **IPs Únicos** (azul) | Quantos endereços de internet diferentes aparecem |

> 🔍 **Como ler isso:** muitas tentativas, **muitos e-mails diferentes** e **poucos IPs** costuma indicar alguém testando uma lista de e-mails a partir de um mesmo lugar.

***

## 📋 Colunas da tabela

| Coluna | Conteúdo |
| --- | --- |
| **ID** | Número do registro |
| **E-mail** | E-mail usado na tentativa (marcado com um ícone de alerta). Quando não há e-mail, aparece **—** |
| **Evento** | O que aconteceu (veja a legenda abaixo) |
| **Resultado** | **Sucesso**, **Falha** ou **Bloqueado** |
| **Empresa** | Nome da empresa relacionada ao evento. Sem empresa, aparece **-** |
| **Data/Hora** | Data e hora exata, no formato `dd/mm/aaaa hh:mm:ss` |
| **IP** | Endereço de internet de origem |
| **Navegador/Dispositivo** | Identificação do navegador (user agent). Texto longo aparece cortado; passe o mouse para ver completo |

A tabela permite **ordenar** por ID, e-mail, evento, resultado, data e IP, e mostrar **15, 30, 50 ou todos** os registros por página. Sem registros, aparece **"Nenhuma tentativa encontrada"**.

***

## 🎨 Legenda de cores dos eventos

A cor do selo ajuda a separar **ataque** de **restrição de política**:

### 🔴 Vermelho — tentativa de ataque ou bloqueio grave

| Evento | O que significa |
| --- | --- |
| **Login bloqueado** | Login recusado por excesso de tentativas ou regra de bloqueio |
| **Reset bloqueado** | Redefinição de senha recusada |
| **Duas etapas bloqueada por tentativas** | Código de duas etapas errado vezes demais |
| **Acesso a outra empresa negado** | Alguém tentou acessar dados de outra empresa |
| **Caminho de arquivo bloqueado** | Tentativa de montar caminho com `..` para sair da pasta permitida |
| **Assinatura de webhook inválida** | Webhook chegou com assinatura forjada |
| **Token de API inválido** | Token revogado ou inventado foi apresentado |
| **Sessão recusada** | Sessão recusada por token forjado, usuário desativado ou empresa divergente |

### 🟣 Roxo — proteção automatizada

| Evento | O que significa |
| --- | --- |
| **Navegador bloqueado** | Acesso recusado pela regra de navegador/dispositivo |
| **API bloqueada por excesso de requisições** | Limite de requisições da API foi atingido |

### 🟠 Laranja — bloqueio de política (não é ataque)

| Evento | O que significa |
| --- | --- |
| **Acesso fora do dia permitido** | A empresa restringe os dias de acesso |
| **Acesso fora do horário permitido** | A empresa restringe o horário de acesso |
| **Sessão encerrada por novo login** | Login único: a sessão anterior foi encerrada |
| **Token de duas etapas usado como sessão** | Tentativa de usar o token do segundo fator como sessão |

> ℹ️ Outros eventos de sessão também aparecem em laranja.

### 🟢 Verde — ações concluídas com sucesso

| Evento | O que significa |
| --- | --- |
| **Senha redefinida** | Redefinição de senha concluída |
| **Duas etapas confirmada** | Código da verificação em duas etapas aceito |
| **Duas etapas ativada** | Usuário ativou a verificação em duas etapas |

### 🔵 Azul — pedido do usuário

| Evento | O que significa |
| --- | --- |
| **Recuperação solicitada** | Usuário pediu redefinição de senha |

### 🟠 Laranja-escuro — ações do administrador

| Evento | O que significa |
| --- | --- |
| **Login por chave mestra** | Alguém entrou usando a chave mestra (senha universal) |
| **Duas etapas redefinida pelo administrador** | Um administrador desativou a verificação de um usuário |

### 🟡 Amarelo — demais registros

| Evento | O que significa |
| --- | --- |
| **Falha de login** | Senha ou e-mail incorretos |
| **Código de duas etapas incorreto** | Código digitado errado (sem bloquear ainda) |
| **Falha no reset** | A redefinição de senha não foi concluída |
| **Senha atual incorreta** | A senha atual informada não conferia na troca |
| **Duas etapas desativada** | O próprio usuário desativou a verificação |
| **Código de backup utilizado** | Um código de backup foi usado no lugar do código comum |
| **Código enviado por e-mail** | O código da verificação foi enviado |

### Resultado

| Resultado | Cor | Leitura |
| --- | --- | --- |
| **Sucesso** | Verde | A ação foi concluída |
| **Falha** | Amarelo | A ação não foi concluída (erro de senha, código etc.) |
| **Bloqueado** | Vermelho | O sistema impediu a ação por regra de segurança |

***

## 🪜 Como usar no dia a dia

1. Abra **Painel SaaS → Segurança → Logs de Falhas de Login**.
2. Ajuste o período (por exemplo, os últimos 7 dias) e clique em **Filtrar**.
3. Ordene pela coluna **Data/Hora** ou **E-mail** para agrupar tentativas.
4. Se aparecer **muitos registros de um mesmo IP**, considere bloquear esse endereço na infraestrutura (firewall/proxy).
5. Se aparecer **muitos e-mails diferentes do mesmo IP**, é varredura: vale ativar/confirmar o [Turnstile](../ativar-cloudflare-turnstile-protecao-anti-bot.md) e revisar os [Alertas de segurança](alertas-de-seguranca.md).
6. Registros de **duas etapas redefinida pelo administrador** e **login por chave mestra** merecem conferência: confirme se a ação foi autorizada.

***

## 💾 Observações sobre os registros

* Os registros **continuam sendo gravados** mesmo que os alertas estejam desligados;
* o histórico é **somente leitura** nesta tela — não há botão para apagar nem para editar;
* a data/hora segue o **fuso do servidor**;
* o campo **Navegador/Dispositivo** pode vir vazio, e nesse caso aparece **—**;
* o texto do navegador é **informado pelo próprio visitante** — serve como pista, não como prova.

***

## 🆘 Problemas comuns

### A tela está vazia

* Confira o **período** — o padrão são os últimos 3 dias;
* clique em **Filtrar** novamente;
* se ninguém errou senha no período, a lista fica vazia mesmo.

### Não vejo a coluna de empresa preenchida

O evento só tem empresa vinculada quando existe uma empresa identificada no contexto (por exemplo, login de usuário de uma empresa). Eventos de plataforma aparecem com **-** .

### Preciso do IP completo atrás de proxy/CDN

Se o sistema estiver atrás de Cloudflare ou outro proxy, o IP registrado pode ser o do proxy. Esse ajuste é feito na infraestrutura, não nesta tela.

### O evento aparece em cor que não entendo

Use a legenda acima. A regra é: **vermelho** = ataque/bloqueio grave, **laranja/roxo** = bloqueio por política, **verde** = concluído.

***

## ❓ Perguntas frequentes

#### Esta tela mostra todos os acessos ou só as falhas?

O título fala em falhas, mas a tabela também registra **eventos de sucesso** (senha redefinida, duas etapas confirmada) e ações do administrador.

#### Consigo apagar um registro?

Não. A tela é somente leitura.

#### Os logs são por empresa?

A lista é **da plataforma inteira**; a coluna **Empresa** identifica o vínculo de cada registro.

#### Quanto tempo os registros ficam guardados?

Não é possível confirmar pela tela — não há indicação de retenção nem de expurgo.

***

## ❔ O que não é possível confirmar

* O **tempo de retenção** dos registros;
* se existe **exportação** para CSV/Excel (não há botão na tela);
* se os registros de **sucesso** são todos guardados ou apenas os listados acima;
* se o sistema guarda **geolocalização** do IP.

***

## 📚 Veja também

* [🔐 Segurança](README.md)
* [Alertas de segurança](alertas-de-seguranca.md)
* [Verificação em duas etapas](verificacao-em-duas-etapas.md)
* [Ativar Cloudflare Turnstile](../ativar-cloudflare-turnstile-protecao-anti-bot.md)
* [Ativar Senha Universal](../../instalacao-and-vps/ativar_senha_universal.md)
