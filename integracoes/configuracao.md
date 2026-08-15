# Configuração

Guia completo para **criar e ativar uma integração** no Whazing, usando a implementação atual do sistema.

***

## 📍 Onde acessar

No menu, acesse:

> **Automação e Integrações → IA e Integrações**

A tela é exclusiva para os perfis **Admin** e **Supervisor**.

* Clique em **Adicionar** para criar uma nova integração;
* Clique no botão **"Como ativar a integração"** (ícone de interrogação) para ver as instruções dentro do próprio sistema.

***

## 🧩 Passo 1 — Criar a integração (wizard)

1. Clique em **Adicionar**;
2. Escolha o **tipo** da integração (Recepção Inteligente, Typebot, 2ª via de boletos, desbloqueio de confiança, chamados etc.);
3. Siga o **assistente guiado**:

| Tipo                     | Passos do wizard                                                                        |
| ------------------------ | --------------------------------------------------------------------------------------- |
| **Recepção Inteligente** | Nome → Modelo → IA → Personalidade → Ações Automáticas → Fonte de Informações → Revisão |
| **Demais integrações**   | Nome → Configuração (dados de conexão) → Revisão                                        |

4. Ao finalizar, a integração aparece na lista como um cartão.

> 💡 Todas as integrações são criadas pelo wizard — não existe mais o formulário antigo de criação.

***

## 🚀 Passo 2 — Ativar a integração

Logo após criar, o sistema abre automaticamente o assistente **"Vamos ativar sua integração"** com 3 etapas:

### 1️⃣ Fila

* **Integrações que iniciam sozinhas** (Recepção Inteligente, Typebot, Criar/Consultar Chamado GLPI): o sistema **cria automaticamente uma fila** com o nome da integração (ou reutiliza uma fila já vinculada). A opção **"Inicia Integração ao transferir"** já fica ativa. Clique em **Continuar**.
* **Integrações que precisam do CPF/CNPJ** (2ª via de boletos, desbloqueio de confiança, chamados): o sistema prepara a fila da integração e você precisa:
  1. Escolher a **Fila de Atendimento Humano** (usada quando o cliente escolher "1. Falar com Humano");
  2. Conferir o **resumo do bot** e, se quiser, **Baixar JSON** ou **Copiar JSON**;
  3. Clicar em **Gerar Bot** — o sistema cria automaticamente um chatbot com menu:

```
1. Falar com Humano
2. <Ação da integração>   (ex.: 2 Via Boleto, Desbloqueio Confiança, Abrir chamado)
```

Ao escolher a opção 2, o cliente é transferido para a fila da integração com uma mensagem pedindo o **CPF ou CNPJ** — informação obrigatória para essas integrações funcionarem.

### 2️⃣ Canais

Escolha em **quais canais** a integração será utilizada (WhatsApp, Instagram, Telegram, WebChat etc.).

> ⚠️ Canais de **E-mail** e **SMS** não aparecem na lista, pois não suportam automação por IA/bot.

Você também pode clicar em **"Pular por enquanto"** e vincular os canais depois, pelo botão **Ativar** no cartão da integração.

### 3️⃣ Confirmação

Pronto! A partir de agora, os **novos atendimentos** destes canais utilizam a sua integração.

***

## ✏️ Gerenciando integrações criadas

Cada cartão na lista possui 4 ações:

| Ação            | O que faz                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------- |
| 🚀 **Ativar**   | Reabre o assistente de ativação (fila, canais e confirmação)                                      |
| ✏️ **Editar**   | Abre as configurações avançadas da integração (dados de conexão, opções e "Ausência de Resposta") |
| 📋 **Duplicar** | Cria uma cópia da integração com o nome "(cópia)"                                                 |
| 🗑️ **Excluir** | Remove a integração (não é possível excluir integrações já usadas ou atribuídas a uma fila)       |

***

## 🔄 Configuração manual (alternativa)

O wizard já cuida da fila e dos canais, mas você pode ajustar manualmente quando quiser:

### Fila

Acesse **Cadastros → Filas** e edite a fila da integração:

* **Integração** — seleciona qual integração a fila utiliza;
* **Inicia Integração ao transferir** — quando ativo, a integração é executada automaticamente ao chegar uma mensagem/transferência na fila.

<figure><img src="../.gitbook/assets/filainiciarintegracao.png" alt=""><figcaption></figcaption></figure>

> 💡 **Quando deixar desativado?** Para integrações que exigem **CPF ou CNPJ** (boletos, desbloqueios e chamados), a opção fica desativada por padrão — o bot de identificação coleta os dados antes de transferir para a fila da integração. Ativar nesse caso faria a integração rodar antes de receber os dados.

### Canal

Acesse **Cadastros → Canais**, edite o canal desejado e defina a **fila criada** como fila padrão:

* **Fila padrão** — a fila da integração;
* **Usuário** — deixe vazio;
* **Chatbot** — deixe vazio.

<figure><img src="../.gitbook/assets/canalintegracao.png" alt=""><figcaption></figcaption></figure>

***

## ✅ Resultado

Com tudo configurado, sempre que chegar uma nova mensagem:

* A integração será iniciada automaticamente, sem precisar de ação manual.
