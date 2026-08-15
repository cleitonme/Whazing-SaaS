# 🎛️ Botão Coringa

O **Botão Coringa** é um recurso que permite adicionar um botão adicional no menu principal do sistema. Ele funciona como um **atalho rápido e personalizável**, ideal para acessar sistemas parceiros, painéis externos, documentações ou qualquer link desejado.

***

### 🔧 Como configurar o Botão Coringa

1. Acesse o **Painel SaaS**.
2. Vá até o menu **Sistema → Atalhos de Menu**.
3. Ative a opção **Exibir botão coringa**.
4. Preencha os campos:
   * 🏷️ **Nome do botão** Texto que será exibido no menu principal.
   * 🔗 **Link do botão** Endereço (URL) que será aberto ao clicar no botão.
   * 🎨 **Ícone (MDI)** Ícone que será exibido junto ao nome do botão no menu.

***

✅ Após salvar, o **Botão Coringa** ficará visível no menu principal, funcionando como um atalho direto para o link configurado.

***

<figure><img src="../.gitbook/assets/image (8) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption><p>Exemplo do Botão Coringa exibido no menu principal</p></figcaption></figure>

***

### 🎨 Sugestão de Ícones (MDI)

O campo **Ícone** utiliza a biblioteca **Material Design Icons (MDI)**. Sempre utilize o prefixo **`mdi-`** antes do nome do ícone.

#### 🔗 Atalho / Link externo

Indicado quando o botão abre outro site ou sistema.

* `mdi-open-in-new` ✅ (recomendado)
* `mdi-launch`
* `mdi-link`
* `mdi-web`

#### ⭐ Genérico (Coringa)

Para uso geral, sem significado específico.

* `mdi-star`
* `mdi-flash`
* `mdi-apps`
* `mdi-dots-horizontal-circle`

#### ⚙️ Ferramentas / Sistema

Quando o botão leva para painéis ou áreas administrativas.

* `mdi-cog`
* `mdi-tools`
* `mdi-view-dashboard`
* `mdi-monitor-dashboard`

#### 🧩 Integrações / Recursos extras

Ideal para integrações ou módulos adicionais.

* `mdi-puzzle`
* `mdi-api`
* `mdi-connection`
* `mdi-power-plug`

#### 💬 Atendimento / Comunicação

Quando o link aponta para suporte ou canais de atendimento.

* `mdi-whatsapp`
* `mdi-message-text`
* `mdi-headset`
* `mdi-lifebuoy`

***

#### ✅ Boas práticas

* Use ícones simples e fáceis de reconhecer.
* Evite ícones muito genéricos se o botão tiver uma função específica.
* Sugestão padrão:
  * **`mdi-open-in-new`** → para links externos
  * **`mdi-star`** → para uso genérico (coringa)

***

### 🏢 Botão Coringa por empresa específica

Caso queira que o **Botão Coringa apareça apenas para uma empresa específica**, siga os passos abaixo:

1. Acesse o menu **Empresas**.
2. Selecione a empresa desejada.
3. Clique em **Configurar menu**.
4. Personalize:
   * Nome do botão
   * Ícone
   * URL específica

***

<figure><img src="../.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption><p>Configuração de menu por empresa</p></figcaption></figure>

<figure><img src="../.gitbook/assets/image (2) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption><p>Personalização do Botão Coringa por empresa</p></figcaption></figure>

***

✅ Dessa forma, o **Botão Coringa será exibido somente para a empresa configurada**, permitindo total personalização sem impactar as demais empresas do sistema.

### 🏢 Botão Coringa por Usuário

No cadastro do usuário existe a aba **“Botão Coringa”**.\
Essa opção permite **criar um novo item no menu do sistema**, onde será aberto um **iframe com o site configurado**.

Assim, cada usuário pode ter acesso rápido a ferramentas ou sistemas externos diretamente pelo menu do sistema.

<figure><img src="../.gitbook/assets/image (98).png" alt=""><figcaption></figcaption></figure>
