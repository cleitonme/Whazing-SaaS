# 📞 Chamadas de Voz (WaCalls)

O **WaCalls** é o recurso do Whazing que permite **fazer e receber chamadas de voz do WhatsApp direto no sistema** — sem celular na mesa e sem trocar de tela. A ligação toca nos computadores dos atendentes, e o atendimento do cliente é organizado automaticamente.

> 💡 Esta página mostra o **dia a dia do recurso**: como configurar no sistema, como as ligações são distribuídas e como funcionam a gravação e a transcrição. Para **instalar o servidor** WaCalls (parte técnica, na VPS), veja [Instalação do WaCalls](../integracoes/telefonia/wacalls.md).

***

## 📍 Onde encontrar

No menu do sistema, acesse:

**Automação e Integrações → Chamadas de Voz (WaCalls)**

> ⚠️ O WaCalls é vendido como **adicional** nos planos. Se o seu plano não inclui o recurso, a tela mostra **"Seu plano não possui acesso ao WaCalls"** com o botão **Comprar adicional** para liberar na hora.

***

## ✅ O que você pode fazer

* 📥 **Receber chamadas** de voz do WhatsApp no computador.
* 📤 **Fazer chamadas** direto da tela de atendimento, pelo botão de ligar do contato.
* 🎯 **Distribuir as ligações automaticamente** para quem atendeu.
* 🎧 **Gravar** as ligações (com período de guarda configurável).
* 📝 **Transcrever** as ligações gravadas em texto.

***

## 🔗 Conectar o WhatsApp às chamadas

Na tela **Chamadas de Voz (WaCalls)**, a configuração segue esta ordem:

### 1. Escolher o canal

Em **"Escolha um canal"**, selecione qual conexão de WhatsApp vai usar para chamadas e clique em **Usar neste canal**.

* O chip no topo mostra quantos acessos o seu plano permite (ex.: `1/1`) — para mais, use **Comprar adicional**.
* Só aparecem canais compatíveis, **conectados via QR Code**.

> ⚠️ **API Oficial (Cloud API) não suporta chamadas pelo WaCalls.** Para canais oficiais (WABA/Hub), o próprio sistema avisa: _"Este recurso funciona apenas para conexões do WhatsApp via QR Code."_

### 2. Ler o QR Code

Depois de escolher o canal, clique em **Ler QR Code** e escaneie com o WhatsApp — igual à conexão do próprio WhatsApp.

* A sessão de chamadas fica com o status **Conectado** (verde) quando está pronta, mostrando o dispositivo e a última conexão.
* O WhatsApp pode pedir uma **nova leitura do QR Code de tempos em tempos** — é normal, basta escanear de novo na mesma tela.

> ⚠️ Chamadas podem parar de funcionar após desconexões do WhatsApp ou atualizações do aplicativo. Se as ligações pararem de tocar, volte nessa tela e reconecte o QR Code.

### 3. Trocar ou desvincular o canal

* **Trocar de canal:** escolha outro canal e confirme — a sessão antiga é desconectada e será preciso ler o QR Code do novo.
* **Desvincular:** no topo do bloco do canal, em **Desvincular** — encerra a sessão de chamadas daquele canal.

***

## 👥 Quem pode fazer chamadas

Só quem tem **permissão** consegue realizar chamadas no canal:

* No bloco **"Usuários com acesso"**, a tela lista quantos e quais usuários estão liberados.
* Para liberar ou bloquear alguém, clique em **Gerenciar acessos** — você vai para a tela de **Usuários**, onde fica a permissão de chamadas de cada um.
* Se ninguém tiver permissão, o sistema avisa: _"Nenhum usuário possui acesso às chamadas."_

***
## 🎯 Atendimento de ligações (organização automática)

Aqui está a melhoria que mais facilita o dia a dia: **quem atende a ligação, ganha o atendimento**.

Quando a opção **"Organizar automaticamente o atendimento ao atender uma ligação"** está ligada (o padrão), ao atender uma chamada o sistema:

1. **Direciona o atendimento do contato automaticamente para o atendente que atendeu** — não precisa puxar o ticket na mão nem procurar a conversa;
2. **Cria o atendimento na fila da qual o atendente participa**, quando necessário — a ligação chega já no lugar certo do fluxo;
3. **Não mexe em nada** se o atendimento já tiver outro responsável: _"Se o atendimento já tiver outro responsável, nada é alterado."_

> 💡 **Na prática:** ligou? Apareceu no atendente certo, na fila certa, sem ninguém precisar organizar nada. Desligando a opção, o atendimento segue o comportamento antigo (distribuição normal do sistema).

***

## 🎧 Gravação de chamadas

No bloco **"Gravação de chamadas"**, a opção **"Gravar novas chamadas"** liga a gravação automática do áudio das chamadas atendidas pelo canal.

* **Ligada (padrão):** toda chamada atendida é gravada.
* **Desligada:** novas chamadas deixam de ser gravadas — **as gravações antigas continuam salvas**, nada é apagado.

### Por quanto tempo as gravações ficam salvas?

* Se o **administrador do sistema** configurou uma retenção, a tela informa: _"Gravações são mantidas por X dia(s) e depois excluídas automaticamente."_
* Sem retenção configurada: _"Gravações são mantidas sem limite de tempo."_

O período de retenção é definido **pelo administrador do sistema** (dono da instalação) — não pelo usuário.

***

## 📝 Transcrição de ligações

As ligações **gravadas** podem virar **texto**: o sistema transcreve a conversa inteira para você ler (ótimo para conferir o que foi combinado sem ouvir o áudio).

**Onde fica:** no **Relatório das Ligações** (menu **Relatórios → Relatório das Ligações**), na linha de cada ligação que tem gravação.

**Como usar:**

1. Localize a ligação na tabela e clique em **"Transcrever áudio"**.
2. Aguarde — aparece **"Transcrevendo..."** e, ao terminar, o texto abre na tela.
3. Depois disso, o botão passa a ser **"Ver transcrição"** — é só clicar para reler sempre que quiser.
4. No modal, use **Copiar** para levar o texto para onde precisar.

> 💡 **A transcrição é sob demanda:** nada é transcrito automaticamente ao abrir o relatório — cada ligação é transcrita quando você pede. Já transcrita uma vez, o texto fica salvo.

> ⚠️ **Precisa de duas coisas:** a ligação precisa **ter gravação** (linha sem áudio não tem o botão) e o administrador precisa ter **um serviço de transcrição configurado** no sistema. Sem isso, aparece o aviso: _"Não é possível transcrever esta ligação porque nenhum serviço de transcrição está configurado."_

***
## 📊 Relatório das Ligações

O **Relatório das Ligações** é a central para conferir tudo o que rolou nas chamadas de voz do WhatsApp.

**Onde encontrar:** menu **Relatórios → Relatório das Ligações** (administradores e supervisores).

### Cards de resumo

No topo, quatro cards mostram o quadro geral: **Total de Chamadas**, **Recebidas**, **Realizadas** e **Todas** — os cards de Recebidas e Realizadas são **clicáveis** e funcionam como filtro rápido.

### Filtros disponíveis

* **Usuário** — quem atendeu/realizou;
* **Contato** — busca pelo nome do contato;
* **Ticket** — número do atendimento;
* **Canal** — conexão de WhatsApp usada;
* **Data inicial e final** — o relatório abre mostrando os **últimos 30 dias**;
* **Direção** — recebida ou realizada (pelos cards).

### Colunas da tabela

| Coluna       | O que mostra                                                         |
| ------------ | -------------------------------------------------------------------- |
| **Direção**  | 📥 Recebida (verde) ou 📤 Realizada (azul)                          |
| **Status**   | **Atendida**, **Chamando**, **Terminada** ou **Transferida**         |
| **Usuário**   | Quem atendeu/realizou                                                |
| **Contato**  | Com quem foi a ligação (nome e número)                               |
| **Gravação** | O **player de áudio** para ouvir direto na tela (quando há gravação) |
| **Ticket**   | O número do atendimento, clicável — abre a conversa em um modal        |
| **Canal**    | Conexão de WhatsApp usada                                           |
| **Data**     | Quando aconteceu                                                     |

Na linha da ligação ficam também os botões de **Transcrever áudio / Ver transcrição** (veja acima) e o 🗑️ para **excluir a gravação** daquela ligação.

### Excluir gravações

* **Individual:** o 🗑️ na linha da ligação — o sistema pede confirmação: _"Excluir a gravação desta chamada? Esta ação não pode ser desfeita."_
* **Em massa:** no topo, o botão **"Excluir gravações em massa"** permite excluir todas as gravações de um período — ele mostra quantas serão excluídas e avisa: _"Esta ação exclui os arquivos de áudio e não pode ser desfeita."_

> ⚠️ Excluir a gravação apaga o **áudio** — a linha da ligação continua no relatório, mas sem áudio nem transcrição.

### Exportar

O relatório pode ser **exportado para Excel** ou impresso pelo botão de exportação no topo.

***

## ❓ Dúvidas rápidas

* **A ligação não toca para ninguém?** Confira se o QR Code da sessão de chamadas está **Conectado** na tela de Chamadas de Voz e se o usuário tem **permissão de chamadas**.
* **Ligação atende sem áudio?** Costuma ser porta bloqueada na VPS — veja a seção [Testando o áudio](../integracoes/telefonia/wacalls.md#testando-o-audio) da instalação.
* **Quem atendeu precisa assumir o atendimento na mão?** Ligue a **organização automática** — o atendimento vai sozinho para quem atendeu.
* **Não aparece o botão de transcrever?** A ligação precisa ter gravação, e o serviço de transcrição precisa estar configurado pelo administrador.
