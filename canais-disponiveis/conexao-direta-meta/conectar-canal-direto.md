---
description: >-
  Como liberar e conectar Instagram e Facebook pela conexão direta no Whazing,
  do Painel SaaS até a autorização do cliente.
---

# Conectar o canal direto

Com o aplicativo já criado e aprovado ([Criar aplicativo na Meta](criar-aplicativo-meta.md)) e as permissões liberadas ([Permissões e aprovação](permissoes-e-aprovacao-meta.md)), falta liberar e conectar o canal.

> ⚠️ O suporte Whazing **não cria nem aprova** aplicativos. Precisa de ajuda nesse processo? Existe **consultoria por R$ 1.000,00**. Quer o caminho sem app? Use o [Hub MultiAPIWA](../api-oficial/hub-multiapiwa.md).

***

## 🏢 Parte 1 — Liberar no seu SaaS (administrador)

A conexão direta precisa existir em **três lugares**. Se faltar um, o cliente não vê o canal.

### 1. Cadastrar o App Meta

**Painel SaaS → Integrações → Instagram** (ou **Facebook Messenger**) → **Novo App Meta**

Preencha App ID, App Secret, versão da Graph API e o método de login. Use **Testar credenciais** e marque o app como **Padrão**.

> 💡 Aqui também aparecem a **Callback URL** e o **Verify Token** — os mesmos que você colou nos webhooks da Meta.

### 2. Habilitar o canal em Canais Disponíveis

**Painel SaaS → Integrações → Canais Disponíveis**

| Tipo na tela           | Libera                                     |
| ---------------------- | ------------------------------------------ |
| **Instagram**          | Canais de Instagram (conexão direta e hub) |
| **Facebook Messenger** | Canais de Facebook (conexão direta e hub)  |

Ligue o botão do tipo que quer oferecer e salve.

### 3. Liberar no plano do cliente

**Painel SaaS → Comercial → Planos** → abra o plano:

* Confira o **limite geral de canais**;
* Ligue **"Ativar limite de canais por tipo"** se quiser controlar quantidade por tipo;
* Defina a quantidade de **Instagram** e/ou **Facebook** (pode ser `0` para vender só como adicional).

> 💡 Para vender o canal separadamente, crie adicionais dos tipos **Instagram** / **Facebook**. O passo a passo comercial está em [Ativar e vender o Hub MultiAPIWA](../api-oficial/hub-multiapiwa-ativacao.md), na seção **Vender o canal como adicional** — a lógica de limites é a mesma.

***

## 👤 Parte 2 — Conectar como cliente

O caminho é o mesmo que o cliente já usa para qualquer canal:

1. **Canais** → **Adicionar canal**.
2. Escolha a categoria:
   * **Instagram** — _"Centralize as mensagens do Instagram."_;
   * **Facebook** — _"Centralize as mensagens do Facebook."_.
3. Selecione a opção **"Conexão direta"** (_"Conecte sua conta do Instagram diretamente."_ / _"Conecte sua página do Facebook diretamente."_).
4. Clique em **Usar este canal**.
5. Na janela da Meta:
   * faça login com a conta do Facebook (ou do Instagram, no Instagram Login);
   * **autorize** as permissões solicitadas;
   * **escolha a Página** e/ou a **conta profissional** que será conectada.
6. Volte ao Whazing — o canal aparece na lista já funcionando.

> ⚠️ **Se aparecer cobrança de adicional**, é o limite do plano: o sistema junta os itens em uma fatura só antes de seguir. Veja [Canais Adicionais](../../modulo-saas/criacao-de-planos-financeiro/adicionais-de-canais.md).

***

## 🔎 Depois de conectar

| O que conferir                    | Onde                                                    |
| --------------------------------- | ------------------------------------------------------- |
| Canal ativo e recebendo           | **Canais** (lista)                                      |
| Mensagens chegando                | **Atendimento**                                         |
| Resposta automática a comentários | **Automação → Comentários e Direct do Instagram**       |
| Agendamento de publicações        | **Automação → Agendamento de Publicações no Instagram** |
| Webhook entregando                | **Configurações → Webhooks** (histórico)                |

> 💡 **Teste real obrigatório:** peça para alguém enviar uma mensagem no Direct/Messenger e responda pelo Whazing. Aprovar permissão não garante webhook funcionando.

***

## 🔄 Reconectar um canal

O token do usuário **expira**. Quando isso acontece:

1. O canal para de receber mensagens (ou mostra aviso na lista);
2. Abra **Canais**, localize o canal e use a opção de **reconectar**;
3. Autorize novamente na Meta, escolhendo **a mesma Página/conta**.

> ⚠️ Reconectar não duplica o canal — o Whazing reaproveita o registro existente e mantém o histórico.

***

## 🆘 Problemas comuns

### O canal "Conexão direta" não aparece para o cliente

Falta liberar em **Canais Disponíveis** ou no **plano** do cliente. Confira os dois (Parte 1, itens 2 e 3).

### "URL bloqueada" na janela da Meta

A **OAuth redirect URI** não está cadastrada no App Dashboard. Veja o **Passo 4** em [Criar aplicativo na Meta](criar-aplicativo-meta.md).

### Conecta, mas não recebe mensagens

* Campo **`messages`** não assinado no webhook;
* Callback URL apontando para domínio antigo;
* Instagram **não vinculado** à Página (no Unified Login).

### "App not active" / erro de aplicativo em desenvolvimento

O app está em modo de desenvolvimento ou sem permissões aprovadas. Publique o app após o [App Review](permissoes-e-aprovacao-meta.md).

### A conta do Instagram não aparece

Precisa ser conta **profissional** (comercial/criador) e, no Unified Login, **vinculada a uma Página**.

### Funcionou e parou depois de um tempo

Token expirado. **Reconecte** o canal. Se acontecer com frequência, avalie o [Hub MultiAPIWA](../api-oficial/hub-multiapiwa.md), que gerencia esse ciclo.

### Erro ao salvar "Novo App Meta": credenciais inválidas

App ID e App Secret não são do mesmo app — ou você misturou **Instagram App ID** com **App Secret da Meta** (métodos de login diferentes).

***

## Veja também

* [Criar aplicativo na Meta](criar-aplicativo-meta.md)
* [Permissões e aprovação na Meta](permissoes-e-aprovacao-meta.md)
* [Canais Adicionais (venda aos seus clientes)](../../modulo-saas/criacao-de-planos-financeiro/adicionais-de-canais.md)
* [Hub MultiAPIWA (conexão integrada)](../api-oficial/hub-multiapiwa.md)
