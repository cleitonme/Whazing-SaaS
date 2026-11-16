---
description: >-
  Como ligar e desligar itens do menu para uma empresa específica e como
  configurar os dois Botões Coringa dela.
---

# ⚙️ Configurar Menu da Empresa

> **Em palavras simples:** aqui você escolhe **o que a empresa vê no menu** do sistema. Ligado = o item aparece; desligado = o item some. **Nada é apagado** — dá para ligar de novo quando quiser.

> 👤 **Quem usa esta tela:** o **administrador do SaaS** (dono da instalação). O cliente final não abre esta tela; ele apenas vê o resultado no menu dele.

***

## 📍 Onde fica

```text
Painel SaaS → Empresas → (escolha a empresa) → Configurar menu
```

Ao abrir, você vê:

* o título **"Configurar Menu - {nome da empresa}"**;
* as opções em **duas colunas de chaves** (liga/desliga);
* no fim, os blocos dos **Botões Coringa 1 e 2**;
* os botões **Cancelar** e **Salvar**.

***

## 🎯 Para que serve

| Situação | O que fazer aqui |
| --- | --- |
| A empresa não contratou o Financeiro | Desligar **Financeiro** |
| A equipe só atende e não usa campanhas | Desligar **Campanha** e **Agendamentos** |
| Você quer um atalho para o painel de um parceiro | Ligar o **Botão Coringa** e informar nome, ícone e link |
| A empresa não usa Kanban | Desligar **Kanban** e/ou **Kanban Pro** |

> 💡 O objetivo é **deixar o menu com a cara daquela empresa** — sem itens que ela não usa.

***

## 🧩 O que cada opção mostra

Todas vêm **ligadas** por padrão. Desligar só esconde o item do menu **daquela empresa**.

| Opção | O que aparece no menu | Saiba mais |
| --- | --- | --- |
| **Kanban** | Quadro simples de organização dos atendimentos | [Kanban](../funcionalidades/kanban.md) |
| **Kanban Pro** | Quadros avançados, com etapas, rótulos e relatórios | [Kanban Pro](../funcionalidades/kanban-pro/README.md) |
| **Chat Interno** | Conversa entre os usuários da equipe dentro do sistema | — |
| **Mensagens Rápidas** | Mensagens prontas para responder com poucos cliques | — |
| **Tarefas** | Lista de tarefas da equipe | [Tarefas](../funcionalidades/gestao/tarefas.md) |
| **Despedida** | Mensagem automática enviada ao encerrar o atendimento | [Despedida](../docs/modulos/despedida.md) |
| **Agendamentos** | Área de mensagens agendadas | [Automação](../funcionalidades/automacao/README.md) |
| **Ajuda** | Menu de ajuda com tutoriais e contato do suporte | [Como criar a opção de Ajuda](criarajuda.md) |
| **Financeiro** | Faturas, adicionais e dados de cobrança da empresa | — |
| **Encerramento** | Motivos de encerramento do atendimento | [Motivos de Encerramento](../docs/modulos/motivos-de-encerramento-de-tickets.md) |
| **Campanha** | Disparo de mensagens em massa | [Campanhas](../funcionalidades/automacao/campanha/README.md) |
| **Follow-up** | Acompanhamento automático do cliente após o contato | [Follow-up](../docs/modulos/follow-up.md) |

> 🔎 Se o item continuar aparecendo para o cliente depois de desligar, veja [Problemas comuns](#-problemas-comuns).

***

## 🎛️ Botão Coringa (1 e 2)

O **Botão Coringa** cria um **atalho extra** no menu daquela empresa — por exemplo, abrir o painel do seu parceiro, um sistema externo ou uma documentação.

Vem **desligado** por padrão. Ao ligar **Exibir**, três campos aparecem:

| Campo | O que preencher | Exemplo |
| --- | --- | --- |
| **Nome do botão** | O texto que aparece no menu | `Portal do Parceiro` |
| **Ícone** | Um ícone **MDI** (sempre com o prefixo `mdi-`) | `mdi-open-in-new` |
| **URL** | O endereço que abre ao clicar (com `https://`) | `https://parceiro.com.br/painel` |

> 🎨 Não sabe qual ícone usar? A página [🎛️ Botão Coringa](botao-coringa.md) tem uma lista pronta por assunto (link externo, ferramentas, atendimento etc.).

> ℹ️ Existem **dois** botões (1 e 2) — ou seja, até **dois atalhos diferentes** por empresa.

***

## 🪜 Passo a passo

1. No **Painel SaaS**, abra **Empresas** e clique na empresa desejada.
2. Clique em **Configurar menu**.
3. **Desligue** o que aquela empresa não usa (ou ligue o que faltou).
4. Se quiser um atalho, ligue **Botão Coringa** e preencha **Nome**, **Ícone** e **URL**, além dos campos do Botão Coringa **2** se for usar os dois.
5. Clique em **Salvar**.
6. **Confira como cliente:** entre com um usuário daquela empresa e veja se o menu está como você configurou.

> ✅ Deu certo quando aparece o aviso de que as configurações do menu foram salvas e o menu do cliente reflete a mudança.

***

## 💾 O que acontece ao salvar

* A mudança vale **somente para aquela empresa** — as outras continuam iguais;
* **Nada é apagado**: os dados de Kanban, campanhas, tarefas etc. continuam guardados, apenas escondidos do menu;
* Para voltar atrás, basta **ligar de novo** e salvar;
* O usuário pode precisar **sair e entrar** no sistema para o menu novo aparecer;
* Se você clicar em **Cancelar**, nada é gravado.

***

## 🆘 Problemas comuns

### Desliguei, mas o cliente continua vendo o item

O usuário provavelmente está com a sessão antiga aberta. Peça para **sair e entrar** novamente.

### O Botão Coringa não aparece

1. Confira se **Exibir** está ligado (é uma chave separada dos campos);
2. Verifique se a **URL** tem `https://`;
3. Salve e peça para o usuário entrar novamente.

### O ícone aparece em branco (quadradinho)

O nome do ícone está errado ou sem o prefixo. Use o formato `mdi-star` (veja a lista em [Botão Coringa](botao-coringa.md)).

### Desliguei demais e o cliente não acha mais nada

Volte em **Configurar menu**, ligue as opções necessárias e salve. Nenhum dado foi perdido.

### O item continua no menu de **todas** as empresas

Provavelmente é uma configuração **global** (Sistema → Atalhos de Menu) ou a permissão do plano/usuário. Esta tela muda **somente a empresa selecionada** — veja também [Botão Coringa](botao-coringa.md) e [Permissões de Usuários](../funcionalidades/gestao/usuarios/algumas-permissoes-usuarios.md).

***

## ❓ Perguntas frequentes

#### Desligar aqui bloqueia o recurso?

Não. **Só esconde do menu** daquela empresa. O recurso continua existindo e pode ser religado a qualquer momento.

#### Posso ter um menu diferente em cada empresa?

Sim — é exatamente para isso que esta tela existe.

#### As opções vêm ligadas ou desligadas?

**Ligadas** por padrão. Os Botões Coringa vêm desligados.

#### Isso substitui o plano contratado?

Não. O **plano** define o que a empresa pode usar; esta tela apenas **mostra ou esconde no menu**. Veja [Liberação de Canais para Empresas](liberacao-de-canais.md).

#### Preciso configurar para cada empresa nova?

Só se quiser esconder algo. Sem mexer, a empresa nova recebe o menu completo.

***

## 📚 Veja também

* [🎛️ Botão Coringa](botao-coringa.md) — atalhos, lista de ícones e configuração por usuário
* [⚙️ Personalização SaaS](personalizacao-saas.md)
* [Liberação de Canais para Empresas](liberacao-de-canais.md)
* [Como Criar a Opção de Ajuda](criarajuda.md)
* [Permissões de Usuários](../funcionalidades/gestao/usuarios/algumas-permissoes-usuarios.md)
