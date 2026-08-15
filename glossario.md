# Glossário — Termos em Linguagem Simples

> Este glossário explica os termos mais usados na documentação de forma simples. Se uma palavra não estiver aqui, procure na página em que ela aparece — normalmente há uma explicação no contexto.

---

## 📲 Canais e conexões

### Canal
A "porta de entrada" das mensagens: um número de WhatsApp, uma página do Instagram, um bot do Telegram, um e-mail etc. Cada canal conectado aparece no sistema como uma conversa separada. Os canais **recebem as mensagens** — quem organiza os atendimentos são as filas.

### Ticket
Cada conversa de atendimento. Quando um cliente envia uma mensagem, o sistema cria (ou reaproveita) um ticket para aquela conversa. O ticket guarda o histórico, a fila, o responsável e o status (aberto, pendente, fechado).

### Fila
Um "departamento" ou "setor" dentro do sistema (ex.: Vendas, Suporte, Financeiro). As filas determinam **quem pode ver e responder** cada conversa.

### API
Sigla para "Interface de Programação de Aplicativos". Na prática, é um **endereço (URL) que permite que dois sistemas conversem entre si**. No Whazing, as APIs são usadas para conectar canais (ex.: WhatsApp) e para enviar/receber informações de outros sistemas.

### API Oficial (WhatsApp)
Conexão do WhatsApp feita pela **Meta** (empresa dona do WhatsApp). É a forma mais estável e "oficial", mas tem custos, exige aprovação e tem regras próprias (ex.: templates e janela de 24 horas).

### API Não Oficial
Conexão do WhatsApp feita por meios alternativos (ex.: WuzAPI, API PLUS, Baileys). Não tem custo por mensagem, mas pode ter instabilidade — por isso o Whazing recomenda usar o WhatsApp Business e seguir as boas práticas da documentação.

### WABA
Sigla de "WhatsApp Business Account" — a conta de negócios do WhatsApp criada na Meta. É necessária para usar a API oficial.

### Token
Uma **"chave digital"** que identifica e autoriza uma conexão (canal, API etc.). É como uma senha: deve ser mantida em segredo e nunca compartilhada publicamente.

### QR Code
Código quadrado que o WhatsApp do celular escaneia para conectar o número ao sistema. Quando você conecta um canal, o sistema mostra um QR Code para leitura no celular.

### HUB
Um serviço intermediário que conecta canais oficiais (WhatsApp, Instagram, Facebook, TikTok) ao Whazing, cuidando da parte técnica da conexão. Ex.: Hub NotificaMe, ConnectionHub, HUB Whazing.

### Template (mensagem modelo)
Mensagem **pré-aprovada pela Meta** usada na API oficial do WhatsApp para iniciar conversas ou enviar avisos fora da janela de atendimento. Precisa ser criada e aprovada antes do uso.

### Janela de 24 horas
Na API oficial do WhatsApp, você tem **24 horas** para responder ao cliente depois da última mensagem dele. Fora dessa janela, só é possível enviar templates.

---

## 👥 Equipe e organização

### Usuário (atendente)
Cada pessoa cadastrada no sistema para atender. O usuário só vê as conversas das filas às quais tem acesso.

### Perfil (papel)
O nível de permissão de cada usuário. Os perfis principais são:

* **Administrador** — acesso completo ao sistema;
* **Supervisor** — gerencia equipes, filas, campanhas e usuários (sem excluir administradores);
* **Supervisor de Fila** — supervisiona apenas as filas das quais faz parte;
* **Usuário** — perfil padrão, com acesso limitado ao que lhe for liberado.

👉 Detalhes em [Perfil de Usuário](funcionalidades/gestao/perfil_usuario.md)

### Carteira (de clientes)
Um conjunto de contatos atribuídos a um responsável. Com a carteira ativa, os contatos são direcionados automaticamente para o seu responsável.

### Etiqueta (tag)
Um rótulo usado para classificar contatos ou atendimentos (ex.: "VIP", "Pendente de pagamento"). As etiquetas ajudam a filtrar e organizar as conversas.

### Mensagens rápidas
Mensagens prontas que o atendente envia com poucos cliques, para agilizar respostas repetitivas (ex.: "Olá! Em que posso ajudar?").

---

## 🤖 Automação e inteligência

### Chatbot (bot)
Um "robô" de conversa que responde automaticamente o cliente seguindo um fluxo (menu) que você cria. O bot pode tirar dúvidas, coletar informações e transferir o atendimento para uma fila ou usuário.

### Automação
Regras que fazem o sistema agir sozinho (enviar mensagem, mover contato, transferir conversa) quando algo acontece (ex.: palavra-chave digitada, horário, nova mensagem).

### Campanha
Envio de mensagens em massa para vários contatos ao mesmo tempo (ex.: divulgação, aviso de fatura).

### Follow-up
Acompanhamento automático do cliente após o primeiro contato: o sistema envia mensagens programadas (ex.: "posso ajudar com a proposta?") para não deixar o contato esfriar.

### Integração
Ligação do Whazing com outro sistema (CRM, ERP, Typebot, N8N etc.) para trocar informações ou disparar ações.

### Webhook
Um **endereço (URL) usado para receber automaticamente informações de outro sistema**. Quando algo acontece (ex.: nova mensagem), o sistema envia os dados para esse endereço — é assim que o Whazing avisa outros programas sobre eventos.

### Inteligência Artificial (IA)
Recursos do sistema que usam IA para ajudar no atendimento: sugerir respostas, resumir conversas, transcrever áudios e até atender automaticamente (Recepção Inteligente).

---

## 🖥️ Infraestrutura e sistema

### VPS
"Servidor Virtual Privado" — um computador na nuvem onde o Whazing é instalado e roda. É para lá que aponta o seu domínio.

### Snapshot
Uma "fotografia" completa da VPS em um momento específico. Serve como backup de segurança antes de atualizações: se algo der errado, é possível voltar ao estado anterior.

### SaaS
Sigla de "Software como Serviço". No Whazing, o **Módulo SaaS** é o painel do administrador/revendedor, onde se gerenciam empresas, planos, pagamentos e configurações gerais.

### White Label
Recurso que permite **usar o sistema com a sua marca** (nome, logo, cores), sem aparecer o nome Whazing. Disponível na licença Premium, mediante solicitação.

### Painel SaaS
Tela do administrador/revendedor para gerenciar as empresas que usam o sistema. Não deve ser confundido com o painel de atendimento (usado no dia a dia pela equipe).

### Protocolo
Número gerado para cada atendimento, usado para identificar e localizar a conversa (ex.: em relatórios e mensagens automáticas).

### Onboarding
Primeiras telas que ajudam o novo usuário a configurar o sistema rapidamente, com modelos prontos de filas e etiquetas.

---

## ❓ Ainda com dúvidas?

* Consulte a [Solução de Problemas](solucao-de-problemas/README.md).
* Entre no grupo de suporte e envie o máximo de informações possível (o que estava fazendo, mensagem de erro, prints).
