---
description: >-
  Veja onde, quando e por quem as palavras monitoradas foram usadas nas
  conversas, com resumo por palavra e exportação para Excel.
icon: chart-box
---

# Relatório de Palavras Monitoradas

O relatório mostra **tudo que já foi registrado** pelas palavras monitoradas — inclusive registros antigos de palavras que já foram desativadas ou excluídas.

**Onde fica:** em **Palavras Monitoradas**, botão **Ver relatório** (ou pelo menu **Relatórios → Atendimento → Palavras Monitoradas**).

> Só **administrador e supervisor** acessam este relatório.

## Como usar

1. Escolha o **período** (Início e Fim). Por padrão, abre no mês atual.
2. Se quiser, refine com os filtros:
   - **Palavra** — mostra só uma palavra específica (inclusive palavras já desativadas).
   - **Tipo de autor** — Cliente, Operador ou Sistema.
   - **Operador** — mostra só mensagens de um atendente.
   - **Fila** — mostra só atendimentos de uma fila.
3. Os números da tela atualizam sozinho quando você muda qualquer filtro.

## Resumo no topo

São 5 números que dão o panorama do período:

| Número | O que significa |
|---|---|
| **Ocorrências** | Total de vezes que as palavras apareceram |
| **Conversas** | Em quantos atendimentos diferentes elas apareceram |
| **Palavras acionadas** | Quantas palavras cadastradas apareceram no período |
| **Pelo cliente** | Quantos registros foram escritos pelo cliente |
| **Pelo operador** | Quantos registros foram escritos por atendentes |

## Resumo por palavra

A primeira tabela traz **uma linha por palavra** usada no período:

- **Vezes usada** — total de vezes que a palavra apareceu.
- **Conversas** — em quantos atendimentos diferentes.
- **Cliente / Operador / Sistema** — separação por autor.
- **Última ocorrência** — quando foi a última vez.

Essa tabela vem **completa**, sem páginação: dá para ver todas as palavras do período de uma vez.

## Ocorrências (lista detalhada)

A segunda tabela mostra **cada registro, um por um**, começando pela data mais recente:

| Coluna | O que mostra |
|---|---|
| **Data e hora** | Quando a mensagem foi enviada |
| **Palavra** | Qual palavra monitorada foi detectada |
| **Autor** | Cliente, Operador ou Sistema (com marcador colorido) + nome da pessoa |
| **Fila** | Fila do atendimento |
| **Atendimento** | Número do ticket — **clique para abrir a conversa** |
| **Trecho** | Um pedaço da mensagem, para contexto |

> **Sistema** significa mensagens automáticas enviadas em nome da empresa (por exemplo, a despedida do encerramento) — não é uma pessoa.

## Exportar para Excel

No cabeçalho do relatório, use o botão de exportação:

- Baixa um arquivo `.xlsx` com os registros do filtro atual, **até 20 mil linhas**.
- O nome do arquivo já vem com o período, por exemplo: `palavras-monitoradas-2026-10-01_2026-10-31.xlsx`.

> 💡 Se o período tiver mais de 20 mil registros, estreite o filtro (por palavra, fila ou operador) e exporte em partes.

***

## Perguntas frequentes

**O trecho da mensagem aparece para todo mundo?**
O trecho aparece **somente neste relatório**, que é restrito a administrador e supervisor. Os **avisos** (inclusive WebPush) nunca saem com o conteúdo da mensagem — só com a palavra, quem escreveu e o número do atendimento.

**Por que aparece uma palavra que não está mais cadastrada?**
Porque ela foi desativada ou excluída depois do registro. Registros antigos continuam no relatório de propósito, para histórico.
