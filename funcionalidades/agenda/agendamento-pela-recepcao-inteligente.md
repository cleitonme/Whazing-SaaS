# Agendamento pela Recepção Inteligente

Com a integração da **Recepção Inteligente** com a Agenda, a **IA passa a agendar de verdade** durante a conversa: ela consulta a **disponibilidade real** da sua agenda antes de responder — **nunca inventa horário** — e conduz a conversa de forma natural, entendendo profissional, serviço, data e horário direto da mensagem do cliente. Ela só confirma o agendamento depois de **revalidar** que o horário ainda está livre.

A grande diferença para o [chatbot](agendamento-pelo-chatbot.md): aqui **não existe roteiro fixo**. O cliente escreve *"quero um corte com o João amanhã às 14h"* e a IA entende, confere a agenda e responde.

> ⚠️ **Antes de ativar:** a Agenda precisa estar configurada (calendário, serviços, profissionais e horários). Comece por [Antes de começar](antes-de-comecar.md) se necessário.

## 📍 Onde configurar

1. Acesse **Automação e Integrações → IA e Integrações**.
2. **Crie ou edite** uma integração da Recepção Inteligente (veja o passo a passo em [Como ativar a integração](../../integracoes/inteligencia-artificial/recepcao-inteligente/como-ativar-a-integracao.md)).
3. Abra a aba **Automação**.
4. Expanda o card **"Agendamento pela IA"** (ícone de calendário).

> **📸 Sugestão de print:** Card "Agendamento pela IA" na aba Automação.

***

## ➕ Como ativar e configurar

### 1. Ligue o agendamento

Acione a chave **"Permitir que a IA consulte a agenda e agende horários"**.

> 💡 Antes de ligada, o card mostra "Agendamento pela IA desativado."

### 2. Escolha o calendário

* **Calendário** — ✅ **obrigatório** (o sistema não deixa salvar sem escolher): de qual agenda a IA vai usar os horários.

### 3. Delimite profissionais e serviços (opcional)

* **Profissionais** — **Todos** ou **Selecionar** alguns específicos.
* **Serviços** — **Todos** ou **Selecionar** alguns específicos.

> 💡 Útil quando a IA só deve agendar um tipo de atendimento (ex.: apenas consultas, nunca retornos).

### 4. Janela de busca

* **Dias pra procurar disponibilidade** — quantos dias à frente a IA considera ao buscar horário (de 1 a 60).

### 5. Vocabulário (opcional)

Ajuste os termos que a IA usa ao falar com o cliente — útil quando "profissional" e "serviço" não combinam com o seu negócio:

* **Em vez de "profissional"** — ex.: *médico*, *barbeiro*.
* **Em vez de "serviço"** — ex.: *consulta*, *procedimento*.

Deixando em branco, o sistema usa os termos padrão.

### 6. Mensagem de horário ocupado

* **"Mensagem quando o horário for ocupado no último instante"** — enviada se o cliente confirmar um horário que **outra pessoa acabou de reservar**. A IA então ajuda a escolher outro.

### 7. Cancelamento pela IA

* Ligue **"Permitir que a IA consulte e cancele agendamentos do cliente"**.
* Com ela ativa, o cliente pode pedir *"quero cancelar meu horário de amanhã"* e a IA localiza e cancela.
* **"Mensagem quando o cancelamento falhar"** — enviada se o cancelamento não puder ser concluído no momento.

### 8. Opções avançadas (opcionais)

* **"Usar tools nativas da API (avançado)"** — desligado por padrão. Faz a IA consultar a agenda pelo recurso nativo ("function calling") de modelos que suportam (ex.: GPT-4.1/4o, Claude, Gemini). Se o modelo não suportar, o sistema **volta sozinho** para o modo padrão.
* **"Criar/cancelar agendamentos via ferramenta nativa (recomendado)"** — desligado por padrão. Faz a própria IA criar/cancelar o agendamento **dentro da mesma resposta** (em vez de uma segunda análise depois) — ela só confirma ao cliente depois de ver o **resultado real** da ação, eliminando o risco de dizer "agendei" sem ter agendado.

***

## 💬 Como fica a conversa do cliente

* O cliente pede do jeito que quiser: *"tem horário com a Maria na quinta?"*
* A IA **consulta a disponibilidade real** do dia e responde com opções que **existem**.
* Cliente escolhe, a IA **revalida** o horário e **confirma o agendamento** — que cai na Agenda com o contato vinculado.
* Para cancelar: *"quero cancelar a consulta de amanhã"* — a IA localiza o agendamento e cancela (se a opção estiver ativa).
* O resto da conversa segue normal: transferência para fila, etiquetas, Kanban e as demais automações continuam funcionando.

> 💡 **Requisitos e limites:** a integração usa o **calendário escolhido** na configuração. Profissionais e serviços marcados em "Selecionar" limitam o que a IA pode agendar; profissionais **desativados** e serviços **desativados** não entram. Se não existir horário na janela configurada, a IA avisa o cliente e segue a conversa.

***

## 🔄 Depois do agendamento

O agendamento feito pela IA é **idêntico** aos demais:

* Aparece no **calendário** da Agenda (com o cliente vinculado).
* Pode receber **[lembretes](lembretes.md)** com confirmação/cancelamento por palavra-chave.
* Pode ser editado, remarcado ou cancelado pela equipe pelo painel ou pela [tela de Atendimento](agendamento-pelo-atendimento.md).
