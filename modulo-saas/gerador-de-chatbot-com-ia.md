# Gerador de Chatbot com IA

O Gerador de Chatbot com IA permite que seus clientes criem fluxos completos de atendimento automaticamente, reduzindo o tempo de configuração e facilitando a criação de novos chatbots.

A IA é utilizada apenas para gerar o fluxo inicial do chatbot. Após a geração, o fluxo pode ser editado livremente pelo usuário no construtor visual.

> Importante: A IA não será utilizada para responder mensagens dos clientes em canais como WhatsApp, Instagram, Facebook ou Telegram. Ela é usada exclusivamente para gerar a estrutura inicial do chatbot e validar templates.

***

## Configurando o Gerador de Chatbot com IA

Acesse:

**Painel SaaS → Inteligência Artificial → ChatBot Builder**

Nesta tela:

> Configure o construtor de chatbots da plataforma.

### O que são os recursos de IA?

Quando habilitados, seus clientes poderão utilizar inteligência artificial para acelerar a criação de chatbots e melhorar a qualidade dos templates enviados.

A IA pode:

* Gerar chatbots completos de atendimento com menus, transferências para filas e captura de dados
* Analisar templates antes do envio, identificando possíveis problemas e aumentando as chances de aprovação

### Habilitar Gerador com IA

Exibe o botão **"Gerar com IA"** no construtor de chatbot dos tenants.

<figure><img src="../.gitbook/assets/geradorchatbotiaconfig.png" alt=""><figcaption></figcaption></figure>

***

### Habilitar validação de templates com IA

Ao criar ou editar um template, a IA analisará o conteúdo, estrutura e qualidade da mensagem, fornecendo sugestões de melhoria e indicando possíveis problemas que possam reduzir as chances de aprovação.

***

### Provedor de IA

Escolha o serviço de inteligência artificial que processará as solicitações.

São suportados:

* OpenAI
* Google Gemini
* Groq
* Provedores compatíveis com OpenAI
* URL Customizada (OpenAI Compatible)

***

### Chave de API

Informe a chave de API do provedor selecionado.

> ⚠️ Chave secreta do provedor selecionado. Nunca compartilhe esta chave.

A chave será utilizada apenas para gerar os fluxos dos chatbots e validar templates.

***

### Modelo de Linguagem

> 💡 Apenas modelos com boa capacidade de geração de JSON estruturado são listados.

Selecione o modelo de IA que será utilizado.

#### Modelos gratuitos recomendados

**Gemini 3.5 Flash**

* Gratuito
* Gera bons resultados
* Excelente para criação de fluxos
* Pode ser um pouco mais lento dependendo da demanda

**GPT OSS 120B (OpenAI)**

* Gratuito
* Muito rápido
* Ótima qualidade para geração de fluxos de atendimento

***

## Custos de utilização

O Gerador de Chatbot com IA normalmente possui um custo muito baixo de utilização.

Isso ocorre porque a IA é usada apenas durante a criação do chatbot e não durante o atendimento dos clientes.

Após gerar o fluxo, o chatbot funciona normalmente sem realizar chamadas constantes para a IA.

Na maioria dos cenários, os modelos gratuitos já atendem perfeitamente à necessidade de geração dos fluxos.

***

## Como os clientes utilizam

Após a configuração pelo administrador SaaS, os clientes verão a opção de criar novos chatbots.

Ao criar um chatbot, existirão modos disponíveis:

<figure><img src="../.gitbook/assets/geradoriainicio.png" alt=""><figcaption></figcaption></figure>

### Modo Simples

Não utiliza inteligência artificial.

O usuário apenas:

1. Informa o nome da empresa.
2. Seleciona as filas de atendimento.
3. Escolhe o tipo de menu:
   * Texto
   * Botões
   * Lista
4. Define a ordem de exibição das filas.
5. Configura regras como:
   * Ausência de resposta do cliente
   * Resposta inválida
6. Gera automaticamente um chatbot de encaminhamento para filas.

<figure><img src="../.gitbook/assets/modosimplesparte1.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/configuretapagerador.png" alt=""><figcaption></figcaption></figure>

***

### Modo Avançado

Utiliza inteligência artificial para criar automaticamente um fluxo completo de atendimento.

O usuário informa os dados básicos do negócio e a IA gera:

* Mensagens de boas-vindas
* Menus de atendimento
* Opções para direcionamento
* Encaminhamento para filas
* Estrutura inicial do fluxo

Tem Exemplos prontos para preencher e edite à vontade:

Após a geração, todo o conteúdo pode ser editado livremente no editor visual.

<figure><img src="../.gitbook/assets/geradoriaavancado.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/geradoriaavancadoetapa3.png" alt=""><figcaption></figcaption></figure>

***

## Simulador Integrado

Após gerar o chatbot, é possível testar o fluxo imediatamente utilizando o simulador interno.

O simulador permite validar:

* Navegação entre etapas
* Menus
* Respostas automáticas
* Encaminhamento para filas
* Fluxo completo do atendimento

Isso reduz erros de configuração e facilita a validação antes da publicação.

<figure><img src="../.gitbook/assets/testadorchatbot.png" alt=""><figcaption></figcaption></figure>

***

## Benefícios

* Criação de chatbots em poucos segundos.
* Redução do tempo de configuração.
* Menos chamados de suporte.
* Fluxos mais organizados.
* Editor visual para ajustes posteriores.
* Compatível com múltiplos provedores de IA.
* Possibilidade de utilização com modelos gratuitos.
