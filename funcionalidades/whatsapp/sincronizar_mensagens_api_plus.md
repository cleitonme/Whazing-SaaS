---
icon: arrows-rotate
---

# 🔄 Sincronizar Mensagens — API Plus e WuzAPI

## O que é sincronizar mensagens?

A sincronização permite buscar **mensagens antigas** que ainda estão disponíveis no servidor da **API Plus ou WuzAPI** e importá-las para o Whazing.

Ela é útil quando você precisa trazer para o sistema conversas que aconteceram antes de o canal estar conectado ou que ainda não estão disponíveis no Whazing.

> ⚠️ **Importante**
>
> A sincronização depende das mensagens que ainda estão disponíveis no servidor da API. Se uma mensagem não estiver mais disponível, ela não poderá ser importada.

---

## ✅ Quem pode usar

Para utilizar a sincronização, é necessário:

1. Ter um canal **API Plus** ou **WuzAPI**.
2. O canal precisa estar **conectado**.
3. O plano precisa ter o recurso **Importar Mensagens** disponível.

Caso o plano não tenha o recurso, o sistema informa:

> **"A sincronização de mensagens não está disponível no seu plano atual."**

---

## 📍 Onde encontrar a sincronização

1. Acesse **Configurações**.
2. Entre em **Canais**.
3. Localize o canal **API Plus** ou **WuzAPI**.
4. Clique no menu de opções do canal, representado pelos **três pontinhos**.
5. Selecione **Sincronizar Mensagens**.

> 📸 **Sugestão de print:** mostrar o menu do canal com a opção **Sincronizar Mensagens** destacada.

---

## 📅 Escolhendo o período

Ao abrir a sincronização, você deverá informar o período que deseja importar.

São dois campos:

* **Data inicial:** primeiro dia do período.
* **Data final:** último dia do período.

O período máximo permitido é de **30 dias** por sincronização.

Por exemplo:

**Data inicial:** 01/09/2026
**Data final:** 30/09/2026

Nesse caso, o sistema buscará as mensagens disponíveis dentro desse período.

> ⚠️ Se precisar importar um período maior que 30 dias, será necessário realizar mais de uma sincronização.

---

## ⚠️ Regras das datas

O sistema verifica as datas antes de iniciar o processo.

| Situação                                | O que acontece                                                            |
| --------------------------------------- | ------------------------------------------------------------------------- |
| A data inicial é posterior à data final | O sistema informa que a data inicial deve ser menor ou igual à data final |
| A data final está no futuro             | O sistema informa que a data final não pode estar no futuro               |
| O período ultrapassa 30 dias            | O sistema informa que o período não pode ser maior que 30 dias            |

Corrija as datas para conseguir iniciar a sincronização.

---

## 🚀 Como iniciar

Depois de escolher a **Data inicial** e a **Data final**:

1. Confira o período selecionado.
2. Clique em **Iniciar sincronização**.
3. O sistema começará a buscar as mensagens disponíveis.
4. O andamento poderá ser acompanhado diretamente na tela.

> ⚠️ A sincronização pode levar algum tempo, principalmente quando existem muitos contatos e mensagens no período selecionado.

---

## 📊 Acompanhando o progresso

Durante a sincronização, o sistema mostra informações sobre o andamento do processo.

Você poderá acompanhar:

* **Status da sincronização**.
* **Contatos processados**.
* **Mensagens processadas**.
* **Data e horário de início**.
* **Data e horário de término**, quando o processo for finalizado.

Por exemplo, o sistema pode apresentar informações como:

> **150 de 900 contatos processados**

E também:

> **3.200 mensagens processadas**

Dessa forma, você consegue acompanhar o processo sem precisar ficar verificando manualmente os atendimentos.

> 📸 **Sugestão de print:** mostrar uma sincronização em andamento com os contatos e mensagens processadas.

---

## 🔄 Status da sincronização

A sincronização pode apresentar diferentes status durante seu funcionamento.

### Aguardando

A sincronização foi criada, mas ainda não começou a ser processada.

### Sincronizando

O sistema está buscando e importando as mensagens.

### Pausada

O processo foi interrompido temporariamente e pode ser continuado posteriormente.

### Concluída

A sincronização terminou.

### Cancelada

A sincronização foi interrompida pelo usuário.

### Erro

Ocorreu algum problema durante o processo.

---

## ⏸️ Pausar uma sincronização

Se precisar interromper temporariamente o processo, utilize a opção **Pausar**.

Ao pausar:

* O processo deixa de avançar temporariamente.
* As mensagens que já foram importadas permanecem no sistema.
* A sincronização poderá ser continuada posteriormente.

---

## ▶️ Continuar uma sincronização

Quando uma sincronização estiver pausada, você poderá utilizar a opção **Continuar**.

O sistema retoma o processamento da sincronização.

Não é necessário criar uma nova sincronização para continuar o processo pausado.

---

## ❌ Cancelar uma sincronização

Se não quiser continuar o processo, utilize a opção **Cancelar sincronização**.

> ⚠️ As mensagens que já foram importadas antes do cancelamento permanecem salvas no sistema.

O cancelamento interrompe o restante do processo.

---

## 🕘 Histórico de sincronizações

O sistema mantém um histórico das sincronizações realizadas no canal.

No histórico, você pode consultar informações como:

* **Status** da sincronização.
* **Período selecionado**.
* Quantidade de mensagens solicitadas.
* Quantidade de mensagens efetivamente sincronizadas.

Os processos podem aparecer com status como:

* Aguardando
* Sincronizando
* Pausada
* Concluída
* Cancelada
* Erro

Caso nenhuma sincronização tenha sido realizada, o sistema informa:

> **"Nenhuma sincronização realizada ainda."**

> 📸 **Sugestão de print:** mostrar a área de **Histórico de sincronizações** com alguns registros.

---

## ⚠️ Informações importantes

### As mensagens são garantidas?

Não necessariamente.

A sincronização depende dos dados que ainda estão disponíveis no servidor da **API Plus ou WuzAPI**.

O próprio sistema informa:

> **"A sincronização de mensagens não é 100% garantida, pois depende dos dados armazenados no servidor da API."**

Portanto, pode acontecer de algumas mensagens não serem encontradas.

### Mensagens apagadas podem ser recuperadas?

Não.

Se a mensagem não estiver mais disponível no servidor da API, o Whazing não conseguirá importá-la.

### Quanto tempo demora?

Não existe um tempo fixo.

O tempo depende principalmente da quantidade de contatos e mensagens encontradas no período selecionado.

Quanto maior a quantidade de dados, maior poderá ser o tempo necessário para concluir o processo.

---

## 🆘 Problemas comuns

### A opção "Sincronizar Mensagens" não aparece

Verifique:

* Se o canal é **API Plus ou WuzAPI**.
* Se o canal está conectado.
* Se o seu plano possui o recurso **Importar Mensagens**.

---

### O sistema informa que o recurso não está disponível no meu plano

Isso significa que o plano utilizado não possui o recurso **Importar Mensagens**.

Nesse caso, é necessário verificar com o administrador do sistema ou responsável pelo plano a disponibilidade desse recurso.

---

### Poucas mensagens foram importadas

Confira primeiro o período selecionado.

A sincronização busca somente as mensagens disponíveis dentro das datas informadas.

Também pode acontecer de parte das mensagens não estar mais disponível no servidor da API.

---

### Nenhuma mensagem foi importada

Verifique:

1. Se o período escolhido está correto.
2. Se existem mensagens disponíveis nesse período.
3. Se essas mensagens ainda estão armazenadas no servidor da API.
4. O status apresentado no histórico da sincronização.

Se o processo aparecer como **Erro**, tente realizar uma nova sincronização.

---

### A sincronização está demorando

Isso pode acontecer quando existem muitos contatos ou mensagens para processar.

Acompanhe o **Progresso da sincronização**.

Se necessário, você pode **pausar** o processo e continuar posteriormente.

---

### Apareceu um erro ao consultar o progresso

Pode ser uma falha momentânea de comunicação.

Aguarde alguns instantes e abra novamente a tela de sincronização para verificar o andamento.

---

## 💡 Exemplo prático

Imagine que uma empresa precise recuperar mensagens de um período específico.

Ela acessa:

**Configurações → Canais → Menu do canal → Sincronizar Mensagens**

Depois seleciona:

**Data inicial:** 01/09/2026
**Data final:** 15/09/2026

Em seguida, clica em **Iniciar sincronização**.

O sistema começa a processar as mensagens e apresenta o progresso na tela.

Durante o processo, é possível acompanhar os contatos e mensagens processadas.

Depois que terminar, o processo ficará registrado no **Histórico de sincronizações**.

---

## ❓ Perguntas frequentes

### Preciso fazer a sincronização sempre?

Não.

A sincronização é utilizada para buscar mensagens antigas que ainda estejam disponíveis no servidor da API.

---

### Posso escolher qualquer período?

Você pode escolher o período desejado desde que ele respeite as regras do sistema.

O limite é de **30 dias por sincronização** e a data final não pode estar no futuro.

---

### Posso sincronizar mais de 30 dias?

Sim, mas é necessário dividir o período em sincronizações de até 30 dias.

Por exemplo:

* 01/07 a 30/07
* 31/07 a 29/08
* 30/08 a 28/09

---

### Se eu pausar, as mensagens já importadas são perdidas?

Não.

As mensagens que já foram importadas permanecem salvas no sistema.

---

### Se eu cancelar, as mensagens já importadas são perdidas?

Não.

O cancelamento interrompe o restante do processo, mas o que já foi importado permanece salvo.

---

### A sincronização funciona em API Plus e WuzAPI?

Sim. O recurso está disponível para os canais **API Plus** e **WuzAPI**.

---

## ✅ Resumo rápido

* 🔄 A sincronização importa mensagens antigas disponíveis no servidor da **API Plus ou WuzAPI**.
* 📅 Você escolhe uma **Data inicial** e uma **Data final**.
* 📆 O período máximo é de **30 dias** por sincronização.
* 📊 O sistema mostra o **progresso** do processo.
* ⏸️ É possível **pausar** a sincronização.
* ▶️ É possível **continuar** uma sincronização pausada.
* ❌ É possível **cancelar** uma sincronização.
* 🕘 Os processos ficam registrados no **Histórico de sincronizações**.
* ⚠️ A importação depende das mensagens que ainda estão disponíveis no servidor da API.
* 🔐 É necessário que o canal esteja conectado e que o plano tenha o recurso **Importar Mensagens**.
