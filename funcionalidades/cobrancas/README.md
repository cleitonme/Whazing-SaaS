---
icon: money-bill-wave
---

# 💰 Cobranças

O módulo **Cobranças** serve para **cobrar seus clientes pelo WhatsApp**: você monta a fatura, o sistema gera um **link de pagamento**, envia no atendimento e acompanha o pagamento — tudo dentro do Whazing.

Além das cobranças em si, o módulo reúne **orçamentos**, **recorrências** (mensalidades), **despesas** e os **relatórios financeiros** da empresa.

> 💡 **Em palavras simples:** a **cobrança** é a fatura com itens e valor; o **orçamento** é uma proposta que ainda não vale como fatura; a **recorrência** gera faturas automaticamente de tempos em tempos; a **despesa** é o dinheiro que sai (contas da empresa); e o **aviso** é a mensagem automática de cobrança enviada ao cliente.

***

## 📍 Onde encontrar

No menu lateral do sistema, clique em **Cobranças**.

O item aparece **sempre** no menu. Quem ainda não tem o recurso contratado vê a tela bloqueada, com o aviso de que o módulo não está disponível e o card para **contratar o adicional**. Depois de contratar, a própria página libera o acesso, sem precisar sair dela.

> ⚠️ Para usar o módulo, o recurso **Cobranças** precisa estar no seu plano (ou ser contratado como adicional). Sem isso, o sistema bloqueia a tela e as ações.

***

## 🗂️ As quatro abas

A tela é dividida em abas. Cada aba tem a sua própria lista e o botão **Novo** do topo cria o item da aba aberta.

| Aba | O que você encontra |
| --- | --- |
| **Cobranças** | As faturas emitidas para os clientes, com status, vencimento e valor |
| **Orçamentos** | As propostas enviadas ao cliente, com validade, e a conversão em cobrança |
| **Despesas** | As contas da empresa, com categoria, fornecedor e pagamento |
| **Recorrências** | As cobranças que se repetem (mensalidades) e as faturas que elas geram |

No topo da página também ficam:

* **Configurações** (só para administrador) — meios de pagamento, aparência da fatura, mensagens, automações e permissões. Veja [Configurações de cobrança](configuracoes-de-cobranca.md);
* **Enviar aviso** — envio manual de um dos avisos de cobrança. Veja [Avisos e lembretes](avisos-e-lembretes.md);
* **Novo** — muda de nome conforme a aba: *Nova cobrança*, *Novo orçamento*, *Nova despesa* ou *Nova recorrência*.

***

## 🏷️ O que cada status significa

| Status | Em palavras simples |
| --- | --- |
| **Rascunho** | A fatura está montada, mas ainda não foi enviada ao cliente |
| **Orçamento** | É uma proposta; não é dívida e não pode ser paga |
| **Aguardando resposta** | O orçamento foi enviado e o cliente ainda não aprovou nem recusou |
| **Aprovado pelo cliente** | O cliente aprovou o orçamento na página pública |
| **Recusado pelo cliente** | O cliente recusou o orçamento |
| **Expirado** | O orçamento passou da validade sem resposta |
| **Em aberto** | A fatura foi emitida e está aguardando pagamento |
| **Vencida** | Uma fatura em aberto cujo vencimento já passou |
| **Paga** | O pagamento foi confirmado (pelo gateway, pelo cliente ou por baixa manual) |
| **Cancelada** | A fatura foi cancelada e o link deixou de abrir |

> 💡 **Vencida** e **Expirado** não são "status guardados": o sistema calcula na hora, olhando a data de vencimento (ou a validade do orçamento). Por isso eles aparecem sozinhos, sem ninguém precisar mudar nada.

***

## 🔐 Quem pode fazer o quê

As ações do módulo são liberadas **por permissão**, e não pelo perfil do usuário. O administrador configura isso em **Configurações → Permissões** (veja [Configurações de cobrança](configuracoes-de-cobranca.md)).

As ações disponíveis são:

| Ação | O que libera |
| --- | --- |
| **Consultar** | Ver as listas, os detalhes e o histórico |
| **Criar** | Criar cobranças, orçamentos, recorrências e despesas |
| **Editar** | Alterar o que ainda está em rascunho ou em aberto |
| **Cancelar** | Cancelar cobranças, orçamentos, recorrências e despesas |
| **Enviar** | Enviar o link no atendimento, converter orçamento e disparar avisos |
| **Aplicar desconto/acréscimo** | Usar os campos de desconto e acréscimo |
| **Dar baixa** | Marcar uma fatura (ou despesa) como paga manualmente |

Os perfis que podem receber essas permissões são **Administrador**, **Supervisor**, **Supervisor de fila** e **Atendente**.

> ⚠️ O **Administrador sempre pode tudo** — as caixas dele ficam marcadas e bloqueadas. E **dar baixa é uma permissão separada de editar, de propósito**: confirmar dinheiro recebido é uma responsabilidade diferente de ajustar uma fatura.

> 💡 Esconder um botão é só visual: o sistema também confere a permissão no servidor. Se alguém tentar usar a API sem permissão, a ação é recusada.

***

## 🧭 Guias do módulo

* [Como criar e enviar uma cobrança](como-criar-e-enviar-uma-cobranca.md) — do primeiro campo ao pagamento do cliente;
* [Orçamentos](orcamentos.md) — proposta, aprovação do cliente e conversão em cobrança;
* [Recorrências](recorrencias.md) — mensalidades que se repetem sozinhas;
* [Despesas](despesas.md) — as contas da empresa e a repetição de despesas;
* [Configurações de cobrança](configuracoes-de-cobranca.md) — meios de pagamento, fatura, mensagens, automação e permissões;
* [Avisos e lembretes](avisos-e-lembretes.md) — as mensagens automáticas de cobrança;
* [Cobranças no Chatbot](cobrancas-no-chatbot.md) — deixar o bot consultar e enviar faturas;
* [Relatórios de cobranças](relatorios-de-cobrancas.md) — os números do financeiro.

> 📘 Para integrar outro sistema, veja também a [API de Cobranças](../../integracoes/api/endpoints/cobrancas.md).
