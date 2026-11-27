# Qualificação de leads

A **Qualificação de leads** é um recurso da Recepção Inteligente em que a IA faz algumas perguntas durante a conversa, anota as respostas e classifica o contato para a equipe.

> 💡 **Em palavras simples:** em vez de o atendente descobrir no meio da conversa o que o cliente precisa, a IA já pergunta, registra as respostas e marca o contato como **Qualificado**, **Em avaliação** ou **Não qualificado**.

> 🆕 **Novidade:** este é um módulo novo. Ele só funciona quando está ligado na integração — enquanto estiver desligado, a IA atende normalmente, sem fazer perguntas de triagem.

---

## 📍 Onde configurar

Você pode configurar de dois jeitos:

1. **Ao criar a integração** — o wizard tem a etapa **Qualificação de Leads**, que pode ser pulada.
2. **Depois, na edição** — acesse **Automação e Integrações → IA e Integrações**, clique em **Editar** na integração e abra a aba **Personalidade**. O card **Qualificação de leads** fica logo abaixo dos campos de prompt.

> ⚠️ As alterações só valem depois de clicar em **Salvar** na integração.

---

## ✅ Ativar a qualificação

Ligue o botão **Ativar qualificação**.

| Estado | O que acontece |
| --- | --- |
| **Ligado** | A IA conduz a triagem na conversa, registra as respostas e classifica o contato |
| **Desligado** | Nenhuma pergunta de triagem é feita e nada é classificado |

Ao ligar, o card abre os campos de configuração. A tela mostra o título **Qualificação de leads** e a explicação: *“Colete informações durante a conversa e classifique o contato para a equipe.”*

---

## 🧩 Como começar o conteúdo

No topo do card ficam os botões de ponto de partida:

| Botão | O que faz |
| --- | --- |
| **Começar do zero** | Limpa perguntas, instruções, contexto e critérios para você escrever tudo |
| **Imobiliária — comprador** | Abre a prévia de um modelo pronto para imobiliárias |
| **Assistência técnica** | Abre a prévia de um modelo pronto para assistência técnica |
| **Serviços para empresas** | Abre a prévia de um modelo pronto para serviços B2B |

### Prévia do modelo

Ao escolher um modelo, abre a janela **Prévia do modelo de qualificação**, com o aviso: *“Edite as perguntas, instruções, contexto e critérios. O conteúdo só será aplicado à configuração após confirmar.”*

* Você pode editar as perguntas, remover, adicionar novas, ajustar instruções, contexto e critérios **antes** de aplicar.
* **Aplicar conteúdo** copia a prévia para a configuração.
* Se já existir conteúdo preenchido, o sistema pergunta: *“Substituir conteúdo da qualificação?”* — a ação não pode ser desfeita.
* Depois de aplicar, aparece o aviso: *“Este conteúdo é um exemplo. Adapte perguntas, instruções, contexto e critérios ao seu negócio antes de salvar.”* Use **Dispensar** para fechar o aviso.

> 💡 Os modelos são **exemplos**. Eles trazem perguntas e critérios genéricos e precisam ser adaptados à sua empresa — principalmente o contexto do negócio.

---

## ❓ Perguntas da triagem

Aqui você cadastra o que a IA deve perguntar. A dica da tela é: *“Cadastre as perguntas que ajudam a entender a necessidade do contato.”*

Cada pergunta tem dois campos:

| Campo | Para que serve | Limite |
| --- | --- | --- |
| **Pergunta** | A pergunta que a IA fará ao cliente. Ex.: *“Qual serviço você procura?”* | 2.000 caracteres |
| **Orientação da pergunta (opcional)** | Explica **como interpretar a resposta**. Ex.: *“Registre a cidade informada; não afirme que a região é atendida.”* | 1.000 caracteres |

Em cada pergunta você também pode:

* **Mover para cima** e **mover para baixo** — define a ordem em que a IA pergunta.
* **Remover** a pergunta.

Use **Adicionar pergunta** para criar mais linhas.

> ⚠️ **A pergunta é obrigatória.** Se ficar em branco, a tela avisa *“Preencha ou remova as perguntas vazias antes de salvar.”* e o sistema **não salva** a integração com qualificação ativa nessa situação.

> 💡 Escreva perguntas curtas, uma informação por pergunta. A IA faz **uma pergunta por vez**.

---

## 📝 Instruções para a IA

Campo de texto livre (até 5.000 caracteres) para explicar **o tom e como conduzir a triagem**.

Exemplo da própria tela: *“Faça uma pergunta por vez e não repita informações já respondidas.”*

Use este campo para orientar:

* o jeito de falar (cordial, direto, consultivo);
* o que fazer quando o cliente já contou algo antes da pergunta;
* o que **não** prometer (preço, prazo, disponibilidade).

---

## 🏢 Contexto adicional do negócio

Campo de texto livre (até 5.000 caracteres) para descrever **o que a empresa oferece, onde atende e informações úteis à triagem**.

Exemplo da tela: *“Informe os serviços oferecidos, regiões atendidas e horário de funcionamento.”*

> ⚠️ **Este campo é o mais importante para a IA não errar.** Se o contexto não disser quais regiões ou serviços a empresa atende, a IA não deve afirmar que atende — e pode manter o contato **Em avaliação** por falta de informação.

---

## 🎯 Critérios de classificação

Campo de texto livre (até 5.000 caracteres) para definir **objetivamente** quando cada resultado deve ser usado.

Exemplo da tela: *“Qualificado: necessidade atendida. Em avaliação: faltam informações. Não qualificado: fora da área de atendimento.”*

> 💡 Escreva os critérios no formato **situação → resultado**. Quanto mais claro, mais consistente fica a classificação.

---

## 📊 Resultado inicial

Define **como o contato aparece enquanto ainda não há informações suficientes**.

| Opção | O que significa |
| --- | --- |
| **Em avaliação (desde a primeira análise)** | O contato já aparece como **Em avaliação** desde o começo da conversa |
| **Sem status até haver respostas** | O contato só recebe um status quando a IA registrar alguma resposta ou uma classificação |

> 💡 A segunda opção evita marcar todo mundo como “Em avaliação” logo na primeira mensagem.

---

## 🏷️ Etiquetas e Kanban

| Campo | O que faz |
| --- | --- |
| **Etiqueta para contato qualificado** | Etiqueta aplicada quando o contato passa a **Qualificado** |
| **Etiqueta para contato não qualificado** | Etiqueta aplicada quando o contato passa a **Não qualificado** |
| **Etapa do Kanban para qualificados** | Move o contato para essa etapa quando ele passa a **Qualificado** |

As etiquetas são **opcionais** — dá para classificar sem etiquetar nada.

> ⚠️ **As etiquetas só são aplicadas quando o status muda.** Se o contato já está “Qualificado” e continua qualificado, a etiqueta não é aplicada de novo.

> 💡 **A etapa do Kanban é opcional.** Quando a automação de Kanban por IA está configurada na aba **Automação**, ela continua sendo prioritária — nesse caso a etapa escolhida aqui não é usada. A própria tela avisa: *“Opcional. A automação de Kanban por IA continua sendo prioritária.”*

---

## 🧠 Como a IA conduz a triagem

Com a qualificação ativa, a IA recebe as perguntas, o contexto, as instruções e os critérios e passa a:

* fazer **uma pergunta por vez**, de forma natural, sem transformar a conversa em interrogatório;
* **usar o que o cliente já contou** — nunca pergunta de novo algo já respondido;
* considerar o **histórico** da conversa (e dos tickets anteriores, se a opção estiver ligada na aba **Comportamento**);
* registrar **“Não informado”** quando o cliente diz que não sabe ou não quer responder, sem insistir;
* **não inventar** dados que o cliente não forneceu.

### Os três status

| Status | Quando é usado |
| --- | --- |
| **Em avaliação** | Ainda faltam informações para decidir, ou há dúvida real |
| **Qualificado** | Os critérios foram atendidos (por exemplo: a necessidade está clara e o cliente aceita o próximo passo) |
| **Não qualificado** | Há evidência clara de que o pedido está fora dos critérios, do escopo ou da região atendida |

> 💡 A IA usa os **critérios que você escreveu** para decidir. Se os critérios não definirem uma condição de exclusão, a classificação tende a **Qualificado** quando a necessidade já está clara e o cliente aceita falar com a equipe.

### Quando a conversa é encaminhada

Se o atendimento for transferido para a equipe (fila, usuário ou encerramento) e **todas as perguntas** já tiverem resposta, a qualificação é concluída como **Qualificado** — desde que o status não tenha sido ajustado manualmente e que existam perguntas configuradas.

---

## 👀 Onde ver o resultado

### Na tela de atendimento

O contato mostra um card **Triagem**, com:

* o **status** atual em destaque (Qualificado, Em avaliação ou Não qualificado);
* a **origem** do status — *Pela IA* ou *Ajustado manualmente*;
* a data da **última atualização**;
* as **perguntas e respostas** registradas (cada resposta também mostra se veio da IA ou de um ajuste manual);
* o **resumo** da qualificação;
* o botão **Atualizar**.

### Ajuste manual

Quem tem perfil de **administrador ou supervisor** pode clicar em **Atualizar** para:

* trocar o **status**;
* editar as **respostas**;
* remover respostas;
* editar o **resumo**;
* **limpar a qualificação** (remove status, respostas e resumo; a triagem pode começar de novo pela IA).

> 💡 Depois de um ajuste manual, a IA **não sobrescreve** o status definido pela equipe — ela continua registrando novas respostas, mas respeita a decisão manual. A tela indica *“Somente administradores e supervisores podem alterar a triagem.”* para os demais perfis.

### No simulador

Ao testar a conversa, cada resposta da IA pode mostrar um painel **Qualificação da simulação**, com o status, quantas perguntas foram respondidas e o resumo. Veja [Simulador de conversa e testes](simulador-de-conversa.md).

---

## ✅ Como saber se está funcionando

* A qualificação está **ligada** e todas as perguntas têm texto.
* Você conversou com a IA (no simulador ou em um teste real) e ela fez as perguntas na ordem configurada.
* O contato aparece com um status no card **Triagem**.
* Se configurou etiqueta, ela aparece no contato depois da mudança de status.

> ⚠️ **Teste com um contato de teste.** A classificação depende do modelo de IA e da clareza dos critérios — vale revisar as primeiras conversas e ajustar o contexto e os critérios.

---

## 🧾 Avisos que podem aparecer

| Aviso | O que significa |
| --- | --- |
| **Configuração de qualificação incompleta — Ainda falta preencher: ...** | Faltam perguntas, instruções, contexto ou critérios. Dá para salvar mesmo assim, mas a triagem fica incompleta |
| **Preencha ou remova as perguntas vazias antes de salvar.** | Existe pergunta sem texto; o sistema não salva |
| **Substituir conteúdo da qualificação?** | Você aplicou um modelo ou começou do zero sobre um conteúdo já preenchido |
| **Este conteúdo é um exemplo...** | Um modelo pronto foi aplicado; adapte antes de salvar |
| **Somente administradores e supervisores podem alterar a triagem.** | Seu perfil não pode editar a qualificação do contato |

---

## ❓ Perguntas frequentes

**A qualificação substitui o atendente?**
Não. Ela organiza a conversa e classifica o contato; o atendimento continua com a equipe.

**Preciso usar um modelo pronto?**
Não. Você pode começar do zero ou aplicar um modelo e editar tudo.

**Posso mudar as perguntas depois?**
Sim, a qualquer momento na aba **Personalidade**. Contatos já classificados mantêm as respostas antigas registradas.

**A IA insiste quando o cliente não quer responder?**
Não. Ela registra “Não informado” e segue para a próxima pergunta.

**A etiqueta é aplicada toda vez?**
Não. Só quando o status **muda**.

**A etapa do Kanban sempre move o contato?**
Não. Só quando o contato passa a **Qualificado** e quando a automação de Kanban por IA não está sendo usada.

**Onde vejo o que foi respondido?**
No card **Triagem** do atendimento e no painel de qualificação do simulador.

---

## 👣 Próximos passos

* [Recepção Inteligente](README.md)
* [Criar e ativar a integração](como-ativar-a-integracao.md)
* [Instruções eficientes para a IA](como-criar-instrucoes-eficientes-para-atendimento-automatico-com-ia.md)
* [Etiquetas automáticas e Kanban com IA](etiquetas-automaticas-e-kanban-com-ia.md)
* [Simulador de conversa e testes](simulador-de-conversa.md)
