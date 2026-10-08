---
description: >-
  Monitore palavras ou expressões importantes nas conversas do WhatsApp e
  receba avisos na hora, com relatório completo de onde e por quem foram
  usadas.
icon: message-alert
---

# Palavras Monitoradas

O **Palavras Monitoradas** vigia as conversas do WhatsApp. Você cadastra palavras ou frases (por exemplo, "reclamação", "processo", "devolução") e o sistema avisa a supervisão quando alguém usa essas palavras em um atendimento.

## Para que serve

- Saber **quando e onde** palavras importantes apareceram nas conversas.
- Avisar os supervisores na hora, sem precisar ler todas as conversas.
- Ter um **relatório** com tudo que já foi registrado, pronto para exportar.

## Onde fica

1. Abra o **menu de Configurações**.
2. Clique no card **Palavras Monitoradas**.
3. Só **administrador e supervisor** enxergam essa opção — o atendente comum não vê nem descobre quais palavras estão sendo vigiadas.

## Como funciona em 3 passos

1. **Cadastrar** — na tela inicial, clique em **Adicionar palavra**, digite a palavra e salve.
2. **Monitorar** — a partir dali, toda mensagem que contiver a palavra é registrada. Se o aviso estiver ligado, os supervisores recebem uma notificação na hora (veja [Avisos automáticos](#avisos-automaticos-para-supervisao)).
3. **Analisar** — no botão **Ver relatório**, veja quantas vezes cada palavra foi usada, por quem e em quais atendimentos (veja [Relatório de Palavras Monitoradas](../relatorios/palavras-monitoradas.md)).

## A tela inicial

A lista mostra todas as palavras cadastradas:

| Coluna | O que mostra |
|---|---|
| **Palavra** | A palavra ou expressão cadastrada |
| **Ativa** | ✓ verde = está sendo monitorada · ✗ vermelho = desligada |
| **Avisa** | 🔔 = avisa a supervisão quando detectar · 🔕 = só registra no relatório, sem avisar |
| **Ações** | Botões de **editar** e **excluir** |

## Adicionar uma palavra

1. Clique em **Adicionar palavra**.
2. Digite a **Palavra ou expressão** (mínimo de 2 caracteres, máximo de 120).
3. Escolha:
   - **Ativa** — liga a detecção da palavra.
   - **Avisar quando detectar** — avisa os supervisores na hora (só aparece se a palavra estiver ativa).
4. Clique em **Salvar**.

### Como a palavra é comparada

- **Maiúsculas e acentos não importam**: "Devolução", "devolucao" e "DEVOLUÇÃO" são a mesma palavra.
- É texto **literal**, não expressão de busca ou coringa. Se você cadastrar "quero trocar", só entra quando essa sequência exata aparecer.
- Palavra repetida não é aceita: o sistema avisa **"Esta palavra já está cadastrada"**.

## Editar e excluir

- **Editar** (ícone de lápis): muda o texto e liga/desliga **Ativa** e **Avisar**.
- **Excluir** (ícone de lixo): o sistema pergunta *"Excluir a palavra "..."? As ocorrências já registradas continuam no relatório."*

> 💡 **Prefere desligar em vez de excluir?** Basta deixar a palavra **inativa**. Ela para de ser detectada e você pode reativar depois sem cadastrar de novo.

> ⚠️ **Importante:** palavras **desativadas** ou **excluídas** param de ser detectadas a partir daquele momento, mas as ocorrências já registradas **continuam aparecendo no relatório**.

## Avisos automáticos para supervisão

Quando uma palavra com o **Avisar** ligado aparece em uma conversa, os supervisores recebem um aviso na hora, por dois caminhos que se completam:

| Caminho | Onde aparece | Precisa de quê |
|---|---|---|
| **Notificação no sistema** | Dentro do Whazing, para quem está com o sistema aberto | A permissão de notificação do navegador |
| **WebPush** | Aparece mesmo com o sistema fechado | Ter o WebPush ativado (veja [Instalação do PWA e notificações](../instalacao-do-pwa-e-habilitacao-de-notificacoes.md)) |

O aviso indica **quem usou a palavra** (Cliente, Atendente ou Sistema), **quais palavras** (até 3 aparecem, depois "e mais X") e o **número do atendimento**. Clicando, você vai direto para a conversa.

### Quem recebe o aviso

- **Administrador** e **supervisor**: recebem todos os avisos da empresa.
- **Supervisor de fila**: recebe só dos atendimentos das **filas dele**.
- **Canal privado (número particular)**: o aviso vai **só para o dono do canal**, mesmo que seja admin.

### Boas práticas

- **Um aviso por mensagem, não por palavra**: se a mesma mensagem contém 3 palavras monitoradas, chega 1 aviso com as 3 — não 3 avisos.
- Recebeu aviso de algo que não precisa alarmar ninguém? Edite a palavra e desligue o campo **Avisar**: ela continua no relatório sem interromper os supervisores.
- O **conteúdo da mensagem nunca sai nos avisos**: eles mostram só a palavra, quem escreveu e o número do atendimento.

***

## Perguntas frequentes

**O relatório mostra palavras que já excluí?**
Sim. Excluir ou desativar para de gerar registros **a partir daquele momento**. Tudo que já foi registrado continua no relatório.

**Por que a mesma mensagem gerou só um aviso, com 3 palavras?**
Porque o aviso é **por mensagem**, não por palavra. Se a mensagem contém várias palavras monitoradas, chega um único aviso listando todas.

**"Sistema" é uma pessoa?**
Não. É qualquer mensagem automática enviada em nome da empresa, como a despedida do encerramento. Por isso não aparece nome de pessoa nessa linha.

**Posso cadastrar símbolos, coringas ou expressão regular?**
Não. A palavra é tratada como **texto literal**. Se precisa vigiar variações ("reclamar", "reclamou"), cadastre cada variação.

**Desliguei os avisos, o monitoramento para?**
Não. Com o aviso desligado, tudo **continua sendo registrado** no relatório — só não chega notificação.
