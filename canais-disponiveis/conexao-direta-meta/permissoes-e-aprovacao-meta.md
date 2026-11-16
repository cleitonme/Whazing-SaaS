---
description: >-
  Quais permissões o aplicativo precisa ter aprovadas na Meta para um cliente
  conectar Instagram e Facebook, o que cada uma libera e como funciona o App
  Review.
---

# Permissões e aprovação na Meta

Este é o conjunto de permissões que o aplicativo precisa ter **aprovadas** para que um **cliente** consiga conectar Instagram e Facebook ao Whazing — o estado de um app **aprovado e em produção**.

Com elas aprovadas, o cliente **não faz mais nada além de autorizar** na tela da Meta durante a conexão: não existe configuração de permissão do lado dele.

> ⚠️ O suporte Whazing **não conduz** o App Review. Para esse serviço existe **consultoria por R$ 1.000,00** (criação do app + aprovação). O caminho sem burocracia é o [Hub MultiAPIWA](../hubs/multiapiwa/README.md).

***

## ✅ Resumo: o que cada canal precisa

| Canal | Permissões necessárias |
| ----- | ---------------------- |
| **Instagram** (método **Instagram Login**) | `instagram_business_basic`, `instagram_business_manage_messages`, `instagram_business_manage_comments`, `instagram_business_content_publish` |
| **Instagram** (método **Unified / Facebook Login**) | `instagram_basic`, `instagram_manage_messages`, `instagram_manage_comments`, `instagram_content_publish` + `pages_show_list`, `pages_manage_metadata`, `business_management` |
| **Facebook (Messenger)** | `pages_show_list`, `pages_manage_metadata`, `pages_messaging`, `business_management` |
| **Todos os canais** | **Business Asset User Profile Access** (feature) + `public_profile` (padrão, sem análise) |

> 📌 Você só precisa do conjunto dos canais que vai **oferecer**. Se vai vender apenas Instagram, o conjunto do Instagram basta.

***

## 📋 Permissão por permissão

| Permissão | Para que serve | Onde aparece no Whazing | Método de login |
| --------- | -------------- | ----------------------- | --------------- |
| `instagram_business_basic` | Ler perfil e mídias da conta profissional | Conexão do canal Instagram | Instagram Login |
| `instagram_business_manage_messages` | Receber e responder Direct | Atendimento | Instagram Login |
| `instagram_business_manage_comments` | Ler, responder, ocultar e apagar comentários | Automação de Comentários e Direct | Instagram Login |
| `instagram_business_content_publish` | Publicar Feed, Stories e Reels | Agendamento de Publicações no Instagram | Instagram Login |
| `instagram_basic` | Ler perfil e mídias da conta profissional | Conexão do canal Instagram | Unified / Facebook Login |
| `instagram_manage_messages` | Receber e responder Direct | Atendimento | Unified / Facebook Login |
| `instagram_manage_comments` | Ler, responder, ocultar e apagar comentários | Automação de Comentários e Direct | Unified / Facebook Login |
| `instagram_content_publish` | Publicar Feed, Stories e Reels | Agendamento de Publicações no Instagram | Unified / Facebook Login |
| `pages_show_list` | Listar as Páginas do usuário e permitir escolher uma | Tela de **escolha da Página** na conexão | Facebook / Unified |
| `pages_manage_metadata` | Assinar webhooks e gerenciar metadados da Página | Recebimento de mensagens (webhook) | Facebook / Unified |
| `pages_messaging` | Receber e responder mensagens do Messenger | Atendimento | Facebook |
| `business_management` | Acessar os ativos do Portfólio Empresarial | Seleção do Portfólio na conexão | Facebook / Unified |
| **Business Asset User Profile Access** | Nome e foto dos usuários no atendimento (é **feature**, não permissão) | Atendimento | Todos |
| `public_profile` | Dados básicos de quem autoriza o app | Login | Todos (padrão, **sem análise**) |

***

## 🔀 Por que existem dois nomes para a mesma coisa

A Meta mantém **duas rotas** de login para Instagram, e cada rota tem a sua própria família de permissões:

| Função | Instagram Login | Unified / Facebook Login |
| ------ | --------------- | ------------------------ |
| Perfil e mídia | `instagram_business_basic` | `instagram_basic` |
| Direct | `instagram_business_manage_messages` | `instagram_manage_messages` |
| Comentários | `instagram_business_manage_comments` | `instagram_manage_comments` |
| Publicar | `instagram_business_content_publish` | `instagram_content_publish` |

As duas famílias **não competem** — elas pertencem a caminhos diferentes. Ter as duas aprovadas é **normal e correto** quando o seu aplicativo atende os dois caminhos (Instagram Login para quem conecta só Instagram e Unified Login para quem usa Página/Portfólio).

### Como o Whazing decide qual usar

O campo **Método de login da Meta**, no cadastro do App (**Painel SaaS → Integrações → Instagram → Novo App Meta**), define a rota:

| Método configurado | Família usada |
| ------------------ | ------------- |
| **Instagram Login** (`graph.instagram.com`) | `instagram_business_*` |
| **Unified Login** (`graph.facebook.com`) | `instagram_*` + `pages_*` + `business_management` |

> 💡 **Na prática:** se você tem as duas famílias aprovadas, pode oferecer **os dois métodos** (dois apps cadastrados, ou um app por método). Se tem **apenas uma** família aprovada, configure o canal **só** para aquele método.

> ℹ️ No caminho **Unified**, comentários e publicação exigem as permissões `instagram_manage_comments` e `instagram_content_publish`. Se você aprovou apenas as `instagram_business_*` correspondentes, o Direct funciona, mas **comentar/publicar** precisará dessas duas.

***

## 👤 O que o cliente precisa ter

O cliente **não configura permissões** — ele apenas precisa estar apto a autorizar:

| Requisito | Instagram Login | Unified Login | Facebook |
| --------- | --------------- | ------------- | -------- |
| Conta do Instagram **profissional** (comercial/criador) | ✅ | ✅ | — |
| Instagram **vinculado a uma Página** | — | ✅ | — |
| Ser **administrador** da Página | — | ✅ | ✅ |
| Página do Facebook | — | ✅ | ✅ |
| Acesso ao Portfólio Empresarial (quando o app usa `config_id`) | — | ✅ | ✅ |
| Aceitar a autorização na tela da Meta | ✅ | ✅ | ✅ |

> 📌 O app precisa estar **Ativo (publicado)** e com as permissões **aprovadas**. Em modo **desenvolvimento**, só quem tem função no app consegue conectar — clientes não.

***

## 🔗 Dependências entre permissões

Algumas permissões só funcionam acompanhadas de outras:

| Permissão | Depende de |
| --------- | ---------- |
| `pages_messaging` | `pages_manage_metadata`, `pages_show_list` |
| `business_management` | `pages_show_list` |
| `instagram_manage_messages` | `instagram_basic`, `pages_show_list` |
| `instagram_business_manage_messages` | `instagram_business_basic` |

***

## 🧪 Como funciona o App Review

```text
Permissões solicitadas
        ↓
Verificação de negócio (Business Verification)
        ↓
Screencast + justificativa de cada permissão
        ↓
Análise da Meta (dias a semanas)
        ↓
Aprovado → app pode ser publicado (Ativo)
```

* **Verificação de negócio:** obrigatória quando o app é usado por quem **não tem função** no app (os seus clientes).
* **App Review / Acesso Avançado:** necessário para usar as permissões com ativos de **terceiros** — exatamente o caso de um SaaS.
* **Não existe prazo garantido.** Reprovações exigem novo envio.

***

## 🎥 O que a Meta exige nos vídeos (screencast)

Requisitos oficiais ([documentação da Meta](https://developers.facebook.com/docs/app-review/submission-guide/screen-recordings)):

1. **Demonstrar cada permissão e feature** que está sendo pedida — o que não aparece no vídeo **não é aprovado**;
2. **Mostrar o login completo** (de usuário deslogado até a autorização);
3. **Mostrar a concessão**: o usuário autoriza a permissão e escolhe a Página/conta;
4. **Mostrar o uso do dado** dentro do seu app **e** o resultado no app nativo (ex.: comentário respondido aparecendo no Instagram);
5. **Interface em inglês ou com legendas** explicando as telas;
6. **1080p ou melhor**, cursor grande, **sem áudio** (os revisores não escutam);
7. Gravar **apenas a janela do app** (não a tela inteira com abas pessoais).

### 🎬 Roteiro por permissão

| Permissão | O que gravar |
| --------- | ------------ |
| `instagram_business_basic` | Conectar conta → perfil e mídias carregando no Whazing |
| `instagram_business_manage_messages` | Login → autorizar → receber um Direct → responder pelo Whazing → mensagem aparecendo no Instagram |
| `instagram_business_manage_comments` | Abrir publicação com comentário → responder/ocultar/apagar pelo Whazing → resultado no Instagram |
| `instagram_business_content_publish` | Criar publicação no Whazing → publicar → post aparecendo no perfil |
| `instagram_basic` | Mesmo fluxo do `instagram_business_basic`, pelo login do Facebook |
| `instagram_manage_messages` | Direct pelo Unified Login, com a Página escolhida |
| `pages_show_list` | Tela de **escolha da Página** no fluxo de autorização |
| `pages_manage_metadata` | Seleção da Página e webhook entregando uma mensagem |
| `pages_messaging` | Receber mensagem no Messenger → responder pelo Whazing |
| `business_management` | Seleção do **Portfólio Empresarial** e do ativo (Página/IG) no login |
| **Business Asset User Profile Access** | Nome e foto do contato aparecendo no atendimento |

> ⚠️ **Um vídeo por permissão** (ou um vídeo com capítulos claramente anotados). Não existe "vídeo genérico que cobre tudo".

***

## ✍️ Textos de justificativa (prontos para colar)

A Meta pede um texto por permissão. Substitua o nome e a ação conforme o caso.

> O aplicativo **Whazing** é uma plataforma de **atendimento multicanal** usada por empresas para centralizar conversas de Instagram e Facebook. A permissão **{PERMISSÃO}** é usada para **{AÇÃO}** em nome do próprio usuário que autoriza o app, dentro do atendimento da sua empresa. Não coletamos dados de terceiros, não vendemos dados e não usamos as informações para publicidade. O acesso é limitado aos ativos que o usuário escolhe explicitamente na tela de autorização e pode ser revogado por ele a qualquer momento.

Exemplo pronto para `instagram_business_manage_messages`:

> O aplicativo **Whazing** permite que empresas respondam mensagens do Direct do Instagram dentro de um painel de atendimento com múltiplos operadores. A permissão **instagram_business_manage_messages** é necessária para **receber as mensagens enviadas pelos clientes da empresa e enviar as respostas do atendente**. Todas as mensagens são trocadas apenas entre a empresa e seus próprios clientes, que iniciam a conversa. O app não envia mensagens não solicitadas e não faz disparo em massa.

> 💡 **Textos em inglês aumentam a taxa de aprovação** quando o revisor não fala português. Se o seu app está em português, capriche nas legendas do vídeo.

***

## ❌ Por que reprova (e como evitar)

| Motivo | Como evitar |
| ------ | ----------- |
| Permissão **aprovada sem uso comprovado** no app | Um trecho de vídeo por permissão, mostrando o efeito real |
| **Demonstração genérica** (só abrir telas, sem concluir a ação) | Concluir a ação: enviar, responder, publicar, ocultar |
| **Dependência ausente** no pedido (`pages_show_list`, `pages_manage_metadata`) | Pedir o conjunto completo junto |
| Vídeo mostra **outro app** ou tela de terceiros | Gravar o seu Whazing com o seu domínio |
| App com **política de privacidade** ausente/quebrada | Publicar as duas URLs antes de enviar |
| Interface sem legenda/inglês | Ativar inglês ou legendar cada passo |
| App usado por terceiros **sem verificação de negócio** | Concluir a verificação antes do review |

> ⚠️ Reprovação **não** bloqueia o app para sempre: corrija o vídeo/justificativa e reenvie. Enquanto isso, o canal pode operar para quem tem função no app (modo desenvolvimento) ou via [Hub MultiAPIWA](../hubs/multiapiwa/README.md).

***

## ✅ Checklist antes de publicar para clientes

* [ ] Todas as permissões do canal que vou oferecer estão **aprovadas**
* [ ] App está **Ativo (publicado)**, não em desenvolvimento
* [ ] **Verificação de negócio** concluída
* [ ] Política de Privacidade e Termos publicados e acessíveis
* [ ] Webhook verificado e campo `messages` assinado
* [ ] OAuth redirect URI cadastrada **exatamente** como no Whazing
* [ ] App cadastrado no Painel SaaS com o **método de login** coerente com a família aprovada
* [ ] Um **vídeo por permissão**, 1080p, sem áudio, com legendas
* [ ] Cada vídeo mostra: login → autorização → uso no Whazing → resultado no app nativo
* [ ] Testei a conexão de ponta a ponta **com um cliente real** antes de abrir para todos

***

## 🆘 Problemas comuns

### O cliente vê erro de permissão na tela da Meta

A permissão daquele canal **não está aprovada** ou o app está em **modo desenvolvimento**. Confira o status no painel da Meta e publique o app.

### Cliente não conecta mesmo com tudo aprovado

Verifique se o **método de login** configurado no App Meta é o mesmo cuja família de permissões está aprovada (Instagram Login → `instagram_business_*`; Unified → `instagram_*`).

### Facebook conecta, mas o Instagram não

Verifique se a conta é **profissional**, se está **vinculada a uma Página** e se o **método de login** do App Meta é o da família aprovada para Instagram.

### A permissão não aparece para eu solicitar

Ela pertence ao **outro método de login** ou ao **outro caso de uso** do app. Confira a tabela de resumo por canal.

### "Acesso Avançado" negado apenas em uma permissão

Só aquela foi reprovada — corrija o vídeo dela e reenvie **somente** aquela, sem mexer nas aprovadas.

### Perdi a aprovação depois de um tempo

As permissões são **renovadas periodicamente**. Mantenha o app ativo, os dados de negócio atualizados e o uso coerente — permissões sem uso podem não ser renovadas.

***

## Veja também

* [Criar aplicativo na Meta](criar-aplicativo-meta.md)
* [Conectar o canal direto](conectar-canal-direto.md)
* [Solicitar Provedor de Tecnologia](../api-oficial/solicitar-provedor-de-tecnologia.md) — mesmo padrão de vídeos, para WhatsApp
* [Hub MultiAPIWA (conexão integrada)](../hubs/multiapiwa/README.md)
