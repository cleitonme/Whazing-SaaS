---
description: Como fechar e apagar vários tickets de uma vez no WHAZING (ações em massa)
icon: delete-sweep
---

# Fechar e Apagar Tickets em Massa

As **ações em massa** permitem que o administrador feche ou apague **vários tickets de uma única vez**, sem precisar abrir um por um. Ideal para "limpar" a fila depois de um período movimentado, encerrar conversas esquecidas ou remover atendimentos que não devem constar nos relatórios.

> 📕 **Onde fica:** na **tela inicial do sistema (Dashboard)**, no topo, há o botão **"Ações em Massa"** (ícone de três pontinhos). Ao clicar nele, aparece um painel com as duas opções: **Fechamento de Tickets em Massa** e **Apagar Tickets em Massa**.

> ⛔ **Quem pode usar:** somente o perfil **Administrador** vê o botão de ações em massa. Supervisores e atendentes não têm acesso.

> ⚠️ **Atenção:** as duas ações são **irreversíveis**. Os tickets atingidos **não podem ser recuperados** pelo sistema — pense bem antes de executar. Por isso os modais abrem sempre com um aviso de **"Atenção"** no topo.

***

## 🟢 Fechar Tickets em Massa

Fecha vários atendimentos que ainda estão **abertos ou pendentes**, como se um atendente tivesse encerrado todos eles.

1. No Dashboard, clique em **Ações em Massa** → **Fechamento Tickets em Massa**.
2. No modal, preencha os **filtros** — só os tickets que combinarem com todos eles serão fechados:

| Filtro | O que fazer |
| ------ | ----------- |
| 📅 **Data de início** | De que dia/começo buscar os tickets (padrão: 30 dias atrás) |
| 📅 **Data de fim** | Até quando (padrão: hoje, até 23:59) |
| 📌 **Status** | "Aberto" ou "Pendente" — status de encerrados não aparece aqui |
| 📱 **Canal** | (Opcional) fechar só os tickets de um canal — deixe vazio para pegar todos |
| 👥 **Grupos** | Ative para incluir **grupos** de WhatsApp na ação |

3. Revise os filtros e clique em **Executar**.
4. O sistema confirma com uma mensagem de sucesso ("tickets fechados") ou de erro — e o modal fecha.

> 💡 **Dica:** o fechamento em massa não usa os filtros de data/canal do topo do Dashboard — cada modal tem os **seus próprios filtros**. Os campos de cima do Dashboard afetam apenas os gráficos.

***

## 🔴 Apagar Tickets em Massa

Apaga (exclui) vários tickets do sistema de uma vez. **Aqui é exclusão de verdade:** o ticket e o histórico desaparecem.

1. No Dashboard, clique em **Ações em Massa** → **Apagar Tickets em Massa**.
2. No modal, configure os **filtros de exclusão**:

| Filtro | O que fazer |
| ------ | ----------- |
| 📅 **Data de início / Data de fim** | Período dos tickets a apagar (padrão: últimos 30 dias) |
| 📌 **Status** | "Aberto", **"Pendente" ou "Fechado"** — aqui "Fechado" também aparece |
| 📱 **Canal** | (Opcional) restringir a exclusão a um canal |
| 👥 **Grupos** | Ative para incluir **grupos** na exclusão |

3. Confira tudo e clique em **Executar**.
4. Uma mensagem de confirmação aparece ao final (apagados) — ou erro, se houver falha.

> ⚠️ **Muito cuidado:** apagar tickets **não pode ser desfeito**. Se o objetivo é só "limpar a fila" ou parar de ver conversas pendentes, use **Fechamento em Massa** — ele mantém o histórico nos relatórios.

***

## 🆚 Qual usar?

| Situação | Melhor opção |
| -------- | ------------ |
| Fila cheia de conversas que ficaram abertas/pendentes | **Fechar em massa** |
| Limpar tickets fechados antigos que ocupam espaço | **Apagar em massa** (status "Fechado") |
| Manter histórico para relatórios/auditoria | **Fechar em massa** |
| Remover atendimentos testes ou de testes do sistema | **Apagar em massa** |

> 💬 Não sabe o que é um "ticket"? Veja o [Glossário de Termos](../../glossario.md).
