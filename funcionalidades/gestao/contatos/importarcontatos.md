---
description: Como importar contatos usando um arquivo CSV no WHAZING
icon: file-import
---

# Importar Contatos

A importação permite cadastrar **vários contatos de uma vez** usando uma planilha no formato `.csv`, em vez de digitar um por um.

> 💡 **Novidade:** agora o telefone é **opcional**. Você pode importar um contato informando **somente o e-mail**, sem preencher número nenhum. É útil para listas de clientes que você atende por e-mail ou que ainda não têm WhatsApp cadastrado.

***

## 🛠️ 1. Baixe e edite o arquivo modelo

O próprio sistema oferece um modelo pronto para você preencher:

1. Abra **Contatos** no menu lateral.
2. Clique no botão **Importar / Exportar** e escolha **Importar**.
3. No rodapé da janela **Importar Contatos**, clique em **Baixar Modelo com Exemplos**.
4. Abra o arquivo no **Excel**, no **Bloco de Notas**, no **Notepad++** ou no **VS Code** e substitua os exemplos pelos seus contatos.

O modelo traz estas linhas de exemplo (a última demonstra um contato **sem telefone**):

```csv
nome;numero;email;empresa;aniversario;cargo;cidade;observacoes
Maria Silva;5551999999999;maria@email.com;ACME Ltda;10/10/1990;Gerente;Florianópolis;Cliente importante
Ana Lima;;ana@email.com;Consultoria XYZ;05/01/1988;Analista;Curitiba;Contato sem telefone
```

> ⚠️ **Atenção ao salvar:** use **ponto e vírgula (`;`)** como separador e salve como **CSV codificado em UTF-8**. No Excel, escolha **“CSV (Separado por ponto e vírgula) (*.csv)”**. Se salvar como “CSV UTF-8” e o Excel usar vírgula, a importação pode não reconhecer as colunas.

***

## 🧾 2. Quais colunas preencher

Mantenha os nomes das colunas **exatamente** como no modelo (`nome`, `numero`, `email`). Não traduza, não abreve e não troque a ordem: o sistema usa esses nomes para encontrar cada informação.

| Coluna | Obrigatória? | O que preencher |
| ------ | ------------ | --------------- |
| **nome** | Sim | Nome do contato. Se ficar em branco e houver um telefone válido, o sistema usa o próprio número como nome. |
| **numero** | Não | Telefone do WhatsApp **com o código do país** (ex.: `55` para Brasil). Digite apenas números. |
| **email** | Sim, quando não há telefone | E-mail do contato. Precisa ser um endereço válido (com `@` e domínio). |
| **outras colunas** | Não | Qualquer coluna extra (ex.: `empresa`, `cargo`, `cidade`, `observacoes`) é salva como **Informação adicional** do contato. |

### 📞 Regras do telefone

* O número deve ter **pelo menos 10 dígitos**, contando o código do país.
* Valores muito curtos (como `123`) são tratados como **sem telefone** — nesse caso o e-mail passa a ser obrigatório.
* Quando há telefone, o sistema **consulta o WhatsApp** para confirmar que o número existe. Se o número não tiver WhatsApp ativo, a linha é descartada.
* Quando **não há telefone**, essa consulta não acontece: o contato é criado apenas com nome e e-mail.

### ✉️ Regras do e-mail

* O e-mail é validado pelo sistema; endereços incompletos ou inválidos fazem a linha ser descartada.
* Contatos sem telefone **não recebem mensagens pelo WhatsApp**; eles ficam disponíveis para atendimento por **e-mail** (quando o canal de e-mail estiver configurado).

> 💡 **Dica:** você pode criar quantas colunas personalizadas quiser. Todas as colunas além de `nome`, `numero` e `email` viram **Informações adicionais** — e é lá que elas aparecem no [modal do contato](modal-de-edicao-de-contatos.md).

***

## 🚀 3. Importando o arquivo

1. No menu lateral, abra **Contatos**.
2. Clique em **Importar / Exportar** e depois em **Importar**.
3. A janela **Importar Contatos** será aberta. Se quiser relembrar as regras, clique em **📋 Informações sobre Colunas Personalizadas** para abrir o quadro explicativo.
4. Em **Selecionar arquivo**, escolha o seu `.csv`. O sistema aceita **somente arquivos `.csv`** e avisa se você tentar outro formato.
5. Se quiser, preencha as opções abaixo (todas são opcionais).
6. Clique em **Iniciar**.
7. Aguarde. O sistema avisa que a importação **pode demorar um pouco** e atualiza a lista ao terminar.
8. Ao final, aparece a mensagem **“Contatos importados com sucesso!”** com a contagem:
   * **Novos contatos:** quantos cadastros foram criados;
   * **Atualizados:** quantos contatos que já existiam foram alterados.

> ℹ️ **Sobre os botões:** **Cancelar** fecha a janela sem importar nada, **Baixar Modelo com Exemplos** baixa a planilha modelo e **Iniciar** envia o arquivo.

***

## ⚙️ 4. Opções da importação

Essas opções valem para **todos os contatos do arquivo**. Se você deixar uma delas vazia, nada é alterado naquele item.

| Opção | Para que serve | Observações |
| ----- | -------------- | ----------- |
| 🏷️ **Etiquetas** | Classifica todos os contatos importados com as etiquetas escolhidas. | Pode escolher várias. Em um contato que já existe, as etiquetas escolhidas **substituem** as anteriores. Se a lista estiver vazia, cadastre etiquetas na administração do sistema. |
| 🧳 **Carteira** | Define o responsável pelos contatos. | Apenas **1** responsável. A lista mostra a foto e se a pessoa está **Online** ou **Offline**. Em contato existente, substitui a carteira anterior. |
| 📋 **KANBAN compartilhado** | Coloca os contatos em uma etapa do Kanban (CRM). | Apenas **1** etapa. Em contato existente, o contato é movido para a etapa escolhida. A lista mostra os Kanbans disponíveis para você. |
| 🗂️ **Kanban Pro** | Cria (ou move) o card do contato em um quadro e etapa do Kanban Pro. | Escolha o **quadro** e depois a **etapa**. Aplicado a todos os contatos do arquivo. |

> 💡 As opções de Carteira e Kanban respeitam o que o seu usuário pode acessar. Se alguma lista aparecer vazia, provavelmente não há opção cadastrada ou liberada para o seu perfil.

***

## 🔎 5. O que acontece com cada linha

O sistema analisa linha por linha e decide sozinho o que fazer:

| Situação da linha | O que o sistema faz |
| ----------------- | ------------------- |
| Tem telefone válido e o número **está no WhatsApp** | Cria o contato ou atualiza o cadastro existente. |
| Tem telefone, mas o número **não está no WhatsApp** | Descarta a linha. |
| **Não tem telefone** e tem nome + e-mail válido | Cria o contato **sem número**, usando o e-mail como identificação. |
| **Não tem telefone** e o e-mail está inválido ou vazio | Descarta a linha. |
| **Não tem nome** nem telefone válido | Descarta a linha. |
| Nome em branco, mas com telefone válido | Usa o próprio número como nome do contato. |

### 🔁 Contato que já existe

* **Com telefone:** o sistema procura pelo número (ou pelo identificador LID do WhatsApp). Se encontrar, atualiza nome, e-mail, informações adicionais, etiquetas, carteira e Kanban conforme as opções escolhidas — e conta como **Atualizado**.
* **Sem telefone:** a busca é feita **somente entre contatos que também estão sem telefone**, usando o e-mail. Ou seja, uma linha só com e-mail **não altera** um contato que já tem telefone, mesmo que o e-mail seja o mesmo — nesse caso é criado um novo cadastro.
* As **Informações adicionais** do contato encontrado são **substituídas** pelas colunas da planilha.
* Se você não escolher etiquetas, carteira ou Kanban, esses dados do contato existente **permanecem como estavam**.

> ⚠️ **Importante:** a tela mostra apenas a contagem final. Ela **não detalha** o motivo de cada linha descartada. Se o número de “Novos contatos” for menor do que o esperado, confira telefones sem WhatsApp, e-mails inválidos e nomes vazios.

***

## ⚠️ 6. Erros comuns e como evitar

| Mensagem / problema | Causa provável | Como resolver |
| ------------------- | -------------- | ------------- |
| **“Nenhum arquivo selecionado!”** | Você clicou em **Iniciar** sem escolher o arquivo. | Selecione o `.csv` no campo de upload. |
| **“O arquivo deve estar no formato CSV!”** | O arquivo tem outra extensão (`.xlsx`, `.txt` etc.). | Salve novamente como **CSV**. |
| **“O arquivo CSV deve conter a coluna ‘nome’ e pelo menos uma das colunas ‘numero’ ou ‘email’”** | O cabeçalho está incompleto ou com outro nome. | Use exatamente `nome` e `numero` e/ou `email` na primeira linha. |
| **“Arquivo CSV deve conter pelo menos o cabeçalho e uma linha de dados”** | O arquivo está vazio ou só tem o cabeçalho. | Inclua ao menos um contato. |
| Nomes com acentos “estranhos” | Arquivo salvo em outra codificação. | Salve em **UTF-8**. |
| Todas as colunas caem em uma só | Separador diferente de ponto e vírgula. | Use `;` e salve como CSV separado por ponto e vírgula. |
| Nenhum contato importado | Telefones sem WhatsApp, e-mails inválidos ou nomes vazios. | Revise a planilha e tente novamente. |

> ⚠️ Revise a planilha antes de enviar: a importação **altera contatos existentes** e substitui as informações adicionais deles.

***

## ❓ Perguntas frequentes

**Posso importar um contato só com e-mail, sem telefone?**
Sim. Basta preencher `nome` e `email` e deixar `numero` vazio. O contato é criado sem número.

**Preciso colocar o código do país no telefone?**
Sim, quando houver telefone. Inclua o DDI (ex.: `55` para Brasil) e digite apenas números.

**O contato sem telefone pode receber mensagens no WhatsApp?**
Não. Ele fica cadastrado para consulta e para atendimento por e-mail. Se depois você adicionar um número no [modal do contato](modal-de-edicao-de-contatos.md), ele passa a poder ser atendido pelo WhatsApp.

**Posso importar planilha do Excel (`.xlsx`)?**
Não. O sistema aceita apenas `.csv`. No Excel, use **Salvar como → CSV (Separado por ponto e vírgula)**.

**As etiquetas antigas do contato são mantidas?**
Se você escolher etiquetas na importação, elas **substituem** as atuais. Se não escolher nenhuma, as etiquetas existentes continuam iguais.

**E se eu não escolher carteira nem Kanban?**
Nada muda nesses campos para os contatos que já existem.

**A importação apaga contatos?**
Não. Ela só cria e atualiza. Para excluir, use as ações da [lista de contatos](lista-de-contatos.md).

**Quem pode importar?**
Quem tem acesso à tela de Contatos. Em empresas com a tela restrita por configuração, apenas administradores e supervisores entram na página.

***

## ✅ Resumo rápido

| Quero... | Onde |
| -------- | ---- |
| Baixar a planilha pronta | **Importar Contatos → Baixar Modelo com Exemplos** |
| Importar só com e-mail | Preencher `nome` e `email`; deixar `numero` vazio |
| Classificar todos de uma vez | **Etiquetas** |
| Definir o responsável | **Carteira** (1 responsável) |
| Colocar no funil de vendas | **KANBAN compartilhado** ou **Kanban Pro** |
| Ver o resultado | Notificação **Novos contatos / Atualizados** |
| Ver os contatos importados | [Lista de Contatos](lista-de-contatos.md) |

> 💬 Em caso de dúvidas, consulte nossa documentação oficial ou fale com o atendimento oficial: [whazing.com.br/#contact](https://www.whazing.com.br/#contact) · WhatsApp/telefone: [+55 48 3197-0877](https://wa.me/554831970877) ou [+55 48 3197-0599](https://wa.me/554831970599) — segunda a sexta-feira, das 09h às 17h (horário de Brasília – BRT).
