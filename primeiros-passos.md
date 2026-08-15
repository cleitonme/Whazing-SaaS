# Primeiros Passos — Configuração Inicial

> **Para quem é este guia:** você acabou de contratar (ou instalar) o Whazing e nunca usou um sistema de atendimento. Siga as etapas **na ordem indicada** — cada uma leva para a página com o passo a passo completo.

## 🧭 Antes de começar, entenda a ideia básica

O Whazing reúne as mensagens de vários **canais** (WhatsApp, Instagram, Telegram, E-mail etc.) em uma única tela de atendimento.

Para que as conversas fiquem organizadas, o sistema usa três conceitos simples:

* **Canal** — a "porta de entrada" das mensagens (ex.: um número de WhatsApp).
* **Fila** — o "departamento" que vai tratar a conversa (ex.: Vendas, Suporte, Financeiro). As filas são quem separam os atendimentos.
* **Usuário** — cada pessoa da equipe que atende. O usuário só enxerga as conversas das filas às quais tem acesso.

Se algum termo ainda parecer confuso, consulte o [Glossário](glossario.md) — ele explica os principais termos em linguagem simples.

---

## 🗺️ Sequência recomendada de configuração

Siga os passos abaixo na ordem. Você pode pular os passos que não se aplicam ao seu caso, mas a ordem evita retrabalho.

---

### 1. Acesse o sistema

Abra o endereço do seu sistema (ex.: `https://seudominio.com.br`) e entre com o usuário e a senha do administrador.

* Não consegue acessar? Veja [Sistema não abre](solucao-de-problemas/meu_sistema_nao_abre.md).
* Ainda não instalou? Veja [Instalação & VPS](instalacao-and-vps/README.md).

---

### 2. Crie as filas (departamentos)

Antes de criar usuários e conectar canais, crie as filas da sua empresa.

**Exemplo:** se você tem setores de Vendas, Suporte e Financeiro, crie uma fila para cada um.

👉 [Como organizar atendimentos, criar filas e controlar permissões](funcionalidades/gestao/organizacao-de-atendimentos-filas-e-permissoes-de-usuarios.md)

> 💡 **Regra importante:** quem separa e organiza os atendimentos são as **filas**. Os canais apenas recebem as mensagens.

---

### 3. Crie os usuários da equipe e defina as permissões

Cadastre cada pessoa que vai atender e defina o que ela pode ver e fazer.

* [Cadastro de Usuários](funcionalidades/gestao/usuarios/README.md)
* [Perfis de Usuário (Administrador, Supervisor, Supervisor de Fila e Usuário)](funcionalidades/gestao/perfil_usuario.md)
* [Permissões de usuários](funcionalidades/gestao/usuarios/algumas-permissoes-usuarios.md)

> ⚠️ Depois de alterar permissões ou filas de um usuário, **deslogue e logue novamente** para que as novas permissões sejam aplicadas.

---

### 4. Conecte um canal (ex.: WhatsApp)

Escolha como o seu WhatsApp (ou outro canal) vai se conectar ao sistema.

* [Canais Disponíveis — visão geral e qual escolher](canais-suportados/README.md)
* **WhatsApp gratuito (recomendado para começar):** [WhatsApp WuzAPI](canais-suportados/whatsapp-api-nao-oficial/whatsapp-wuzapi.md)
* **WhatsApp com recursos extras** (botões, listas, localização): [WhatsApp API PLUS](canais-suportados/whatsapp-api-nao-oficial/whatsapp_api_plus/README.md)
* **WhatsApp oficial (Meta/WABA):** [API Oficial do WhatsApp](canais-suportados/api-oficial/api-oficial-do-whatsapp-meta.md)
* **Telegram:** [Guia de Conexão do Telegram](canais-suportados/telegram.md)

---

### 5. Defina a fila padrão do canal

No cadastro do canal, escolha a fila que receberá os novos atendimentos desse número.

**Exemplo:** o WhatsApp do Financeiro deve ter a fila "Financeiro" como padrão — assim, só as pessoas dessa fila verão essas conversas.

👉 Detalhes no passo a passo de [Organização de Atendimentos, Filas e Permissões](funcionalidades/gestao/organizacao-de-atendimentos-filas-e-permissoes-de-usuarios.md)

---

### 6. Configure as mensagens automáticas

Crie mensagens que o sistema envia sozinho em momentos importantes do atendimento:

* **Saudação** — quando o atendente aceita o atendimento;
* **Despedida** — quando o atendimento é encerrado;
* **Transferência** — quando a conversa é encaminhada para outro setor.

👉 [Mensagens Automáticas](funcionalidades/automacao/mensagens-automaticas.md)

---

### 7. (Opcional) Configure horário de atendimento, avaliação e follow-up

* **Avaliação de Atendimento** — peça uma nota ao cliente após cada atendimento: [Avaliação de Atendimento](funcionalidades/atendimento/avaliacao.md)
* **Follow-up** — acompanhe o cliente automaticamente após o primeiro contato: [Follow-up](docs/modulos/follow-up.md)
* **Horário de atendimento** — o sistema permite configurar o horário de atendimento por empresa, canal ou fila (com feriados), conforme descrito em [Principais Recursos](principais-recursos-do-sistema.md). O comportamento "fora do horário" é tratado dentro do [Chatbot Interno](funcionalidades/automacao/chatbotinterno/README.md).

---

### 8. Faça um teste completo

1. Envie uma mensagem para o número conectado (WhatsApp, Telegram etc.).
2. Confirme que a conversa aparece na tela de atendimento.
3. Verifique se ela entrou na fila correta.
4. Responda como se fosse o cliente e confirme que o atendente recebeu a mensagem.

---

## ✅ Como saber se a configuração deu certo

* A mensagem enviada aparece na tela de atendimento;
* A conversa fica na fila que você definiu;
* Apenas os usuários daquela fila conseguem ver a conversa;
* As mensagens automáticas (saudação/despedida) são enviadas nos momentos configurados.

---

## 🆘 Problemas comuns

* **Mensagem não chega ou não envia:** veja [Mensagem não enviando](canais-suportados/whatsapp-api-nao-oficial/mensagem-nao-enviando.md) e [Perda de Mensagens e Problemas de Conexão](solucao-de-problemas/perda-de-mensagens-e-problemas-de-conexao.md).
* **Usuário não vê as conversas:** confira as permissões e as filas do usuário (passo 3).
* **Sistema lento ou não abre:** veja a [Solução de Problemas](solucao-de-problemas/README.md).

---

## 📚 Continue aprendendo

* [Principais Recursos do Sistema](principais-recursos-do-sistema.md)
* [Glossário de termos](glossario.md)
* [Atendimento](funcionalidades/atendimento/README.md)
* [Automação e Chatbot](funcionalidades/automacao/README.md)
