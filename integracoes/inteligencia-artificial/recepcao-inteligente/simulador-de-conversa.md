# Simulador de conversa e testes

No fim da tela de edição da **Recepção Inteligente** fica a seção **Testar integração**, com duas ferramentas:

* **Testar configuração** — um diagnóstico técnico da IA e do prompt.
* **Simular conversa** — um chat de teste para conversar com a sua IA como se fosse o cliente.

As duas aparecem **em qualquer aba** da edição, então você pode testar sem sair da configuração.

> 🆕 **Novidade:** o simulador foi reformulado. Ele agora **consulta de verdade** a Base de Conhecimento, o catálogo, os arquivos, a busca web e as ferramentas externas — e continua **sem enviar nem gravar nada**.

---

## 🔍 Testar configuração

Clique em **Testar configuração** para rodar o diagnóstico.

Ele confere:

| Item | O que verifica |
| --- | --- |
| **Provider** | Se o provedor de IA está configurado |
| **Modelo** | Se um modelo foi escolhido |
| **API Key** | Se a chave foi informada |
| **Conexão com provider** | Se a IA responde de fato |
| **Qualidade do prompt** | Uma nota para o seu prompt, com problemas e sugestões |

O resultado aparece em um dos três estados:

* ✅ **IA configurada corretamente**
* ⚠️ **Configuração com pontos de atenção**
* ❌ **Configuração inválida**

Quando o prompt é avaliado, a tela mostra o **score do prompt**, os **problemas encontrados**, a **avaliação da IA** e uma **sugestão**. Você pode abrir **Ver prompt melhorado pela IA** e usar **Copiar** para levar a versão sugerida ao campo de prompt.

> 💡 A nota do prompt pode vir da IA ou de uma análise local — a própria tela indica qual foi usada.

> ⚠️ **O diagnóstico não é uma conversa.** Ele valida a configuração e o prompt; para ver a IA respondendo, use **Simular conversa**.

> 💡 Se você usa a **IA disponibilizada pelo sistema**, não precisa informar provedor, modelo e chave — o teste considera a configuração compartilhada.

---

## 💬 Simular conversa

### 1. Aceite as limitações

Ao clicar em **Simular conversa**, abre a janela **Limitações do simulador**. Leia a lista, marque **“Li e entendi as limitações”** e clique em **Entendi, abrir simulador**.

> 💡 O aceite é obrigatório para abrir o simulador pela primeira vez. Dentro do chat, o aviso continua visível e o botão de informações reabre essa lista a qualquer momento.

### 2. A janela do simulador

O chat abre em uma **janela flutuante**, que você pode:

* **arrastar** para qualquer canto da tela;
* **redimensionar** pelo canto inferior;
* colocar em **tela cheia**;
* **fechar** sem perder a configuração;
* **limpar a conversa** para começar de novo.

A faixa de aviso no topo diz: *“Simulador de alta fidelidade — leituras reais e dry-run: nenhuma mensagem, arquivo, PIX, agendamento ou tag é gravado.”*

### 3. Escolha o contexto do teste

No topo do chat ficam os badges **Web**, **Ferramentas** e **Histórico**, conforme o que estiver ativo, e o botão de **Contexto do teste**.

| Opção | O que faz |
| --- | --- |
| **Contato da simulação** | Busca um contato real da sua empresa (por nome ou número) para simular com os dados dele. Sem contato, a simulação usa um cliente genérico |
| **Permitir busca web real (Tavily)** | Autoriza a pesquisa na web durante a simulação. A busca ainda precisa estar **ligada na integração** e ter palavras-chave de gatilho |
| **Permitir ferramentas externas (MCP)** | Autoriza consultar sistemas externos. O **MCP precisa estar ativado** na integração |
| **Usar histórico real do contato** | Carrega as últimas mensagens reais do contato antes da conversa simulada |

> 💡 Os dados do contato são usados **somente para leitura**, sempre da sua empresa. Sem contato selecionado, a conversa começa do zero com um cliente genérico.

### 4. Converse como um cliente

Digite a mensagem e envie com **Enter**. Use **Shift + Enter** para quebrar linha.

* Se a configuração estiver incompleta, aparece o aviso *“Configure provider, modelo e API Key antes de simular.”* e o campo fica bloqueado.
* A conversa mostra quantas trocas já aconteceram.
* **Limpar conversa** reinicia a sessão.

---

## 🧪 O que é real e o que é simulado

| Recurso | No simulador |
| --- | --- |
| **Prompt e personalidade** | Executados de verdade |
| **Base de Conhecimento** | **Consultada de verdade** |
| **Catálogo de produtos** | **Consultado de verdade** (produtos, preços e disponibilidade do cadastro) |
| **Correspondência de arquivos** | **Executada de verdade**, mas o arquivo não é enviado |
| **Busca web (Tavily)** | Real, quando você autoriza e a integração está configurada |
| **Ferramentas externas (MCP)** | Reais, quando você autoriza e o MCP está ativado |
| **Histórico do contato** | Real, quando você liga a opção |
| **Command Analyzer (IA 2)** | Executado de verdade — as ações são apenas simuladas |
| **Mensagens, arquivos, PIX, agendamentos, etiquetas e Kanban** | **Apenas simulados** (dry-run) |
| **Áudio, imagem, vídeo, OCR e visão computacional** | **Não suportados** nesta versão |
| **Respostas em áudio (TTS) e transcrições** | **Não geradas** |
| **Follow-up, debounce e atrasos de produção** | **Não reproduzidos** |

> ⚠️ **Nenhuma escrita real acontece.** O simulador pode mostrar o que a IA faria, mas não envia mensagem, não manda arquivo, não gera PIX, não cria nem cancela agendamento, não aplica etiqueta e não move o Kanban.

> 💡 **Custo e latência podem ser diferentes.** A simulação pode fazer mais chamadas e demorar mais que um turno real.

---

## 🧠 O que aparece na resposta da IA

Cada resposta do simulador pode mostrar:

* o **texto** que a IA responderia;
* os **comandos detectados**, em etiquetas coloridas — por exemplo: transferência para fila, transferência para usuário, fila de fallback, encerramento, PIX, envio de arquivo, envio de produto, criação/confirmação/remarcação de agendamento e escolha de produto registrada;
* o **motivo** do comando, quando a IA 2 informa;
* uma linha de **dados técnicos**: tempo de resposta, tokens usados e nota de qualidade da resposta;
* o painel **Qualificação da simulação**, com status, perguntas respondidas e resumo (quando a qualificação está ligada);
* **avisos** da rodada;
* **Dados técnicos da simulação**, com o detalhe completo em JSON.

> 💡 Comandos marcados como bloqueados aparecem com ícone de bloqueio — significa que a ação não seria executada naquele contexto.

### Quando a sessão encerra

Se a IA transferir o atendimento (fila, fila de fallback ou usuário) ou encerrar o ticket, a simulação considera a conversa concluída e mostra: *“A IA saiu da conversa — sessão encerrada”*, com o botão **Reiniciar conversa**.

### Avisos comuns

| Aviso | O que significa |
| --- | --- |
| **Não foi possível carregar o histórico real do contato.** | O contato selecionado não tinha histórico acessível |
| **Falha ao consultar a Base de Conhecimento.** | A consulta falhou; a resposta seguiu sem esse conteúdo |
| **Falha na busca web real; a resposta seguiu sem esse contexto.** | A pesquisa não funcionou naquela rodada |
| **MCP configurado, mas não foi possível preparar a conexão.** | O servidor MCP não respondeu |
| **A IA 2 não conseguiu analisar a resposta; nenhum comando foi autorizado.** | O Command Analyzer falhou naquela rodada |
| **Limite de rodadas de ferramentas atingido.** | A IA consultou muitas ferramentas na mesma mensagem |

> 💡 Os avisos são da **simulação**. Em produção, o atendimento segue o fluxo normal de fallback da integração.

---

## ✅ Quando usar cada teste

| Situação | Use |
| --- | --- |
| Conferir se a chave, o modelo e o provedor funcionam | **Testar configuração** |
| Melhorar o prompt com sugestões | **Testar configuração** |
| Ver como a IA responde e transfere | **Simular conversa** |
| Validar Base de Conhecimento, catálogo e arquivos | **Simular conversa** (as leituras são reais) |
| Validar entrega de mensagem, foto, PIX e áudio | **Teste real** pelo WhatsApp/canal, com um número de teste |

> ⚠️ O simulador **não substitui um teste real**. Ele não reproduz mídia recebida, voz, follow-up e os atrasos do atendimento real.

---

## 👣 Próximos passos

* [Recepção Inteligente](README.md)
* [Qualificação de leads](qualificacao-de-leads.md)
* [Catálogo na Recepção Inteligente](catalogo-na-recepcao-inteligente.md)
* [Base de Conhecimento](base-de-conhecimento.md)
* [Busca na Web](busca-na-web.md)
* [MCP e Ferramentas de IA](mcp-e-ferramentas-de-ia.md)
