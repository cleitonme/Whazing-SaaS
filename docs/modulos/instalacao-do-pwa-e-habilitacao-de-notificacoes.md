# 📲 Instalação do PWA e habilitação de notificações

A aplicação pode ser instalada como **PWA (Progressive Web App)** no celular, funcionando como se fosse um aplicativo normal.\
Após instalar, é importante habilitar as **notificações WebPush** para receber alertas em tempo real.

***

### 🤖 Instalação no Android

1. Abra o navegador **Google Chrome** no celular.
2.  Acesse a URL do sistema:

    ```
    https://app.seusistema.com.br
    ```
3. Toque no menu (**⋮ três pontinhos**) no canto superior direito.
4. Escolha **"Adicionar à tela inicial"**.
5. Confirme o nome do aplicativo e toque em **Adicionar**.
6. O ícone aparecerá na tela inicial como um app normal.

***

### 🍏 Instalação no iPhone (iOS)

1. Abra o navegador **Safari** no iPhone.
2.  Acesse a URL do sistema:

    ```
    https://app.seusistema.com.br
    ```
3. Toque no ícone de **compartilhar** (quadrado com seta para cima).
4. Escolha **"Adicionar à Tela de Início"**.
5. Confirme o nome e toque em **Adicionar**.
6. O ícone ficará disponível na tela inicial como app.

***

### 🔔 Habilitando notificações (WebPush)

Após instalar o PWA, é necessário **permitir notificações**:

1. Abra o aplicativo PWA pela tela inicial.
2. Quando aparecer o aviso de permissão, clique em **Permitir**.

Se não aparecer o aviso:

* **Android**:\
  Vá em `Configurações > Apps > [Nome do PWA] > Notificações` → ative **Permitir**.
* **iPhone**:\
  Vá em `Ajustes > Notificações > [Nome do PWA]` → ative **Permitir Notificações**.

***

### 🛠️ Problemas comuns e soluções

#### ❌ O botão "Adicionar à Tela de Início" não aparece

* **Android**: certifique-se de usar o navegador **Chrome** (não funciona no Firefox/Edge).
* **iPhone**: só funciona no **Safari** (não aparece no Chrome ou outros navegadores).

#### ❌ Instalei o app, mas não recebo notificações

* Verifique se as **notificações estão permitidas** nas configurações do celular.
* Confira se o **navegador está atualizado**.
* No iPhone, só é possível receber WebPush a partir do **iOS 16.4 ou superior**.

#### ❌ O PWA abre, mas fica em branco

* Verifique se o **endereço do site** está correto ([https://app.seusistema.com.br](https://app.seusistema.com.br)).
* Confirme se há **conexão de internet** no celular.
* Se ainda falhar, **limpe o cache do navegador** e reinstale o PWA.

#### ❌ O ícone não aparece na tela inicial

* Em alguns aparelhos Android, o ícone vai para uma **pasta de apps**. Procure na gaveta de aplicativos.
* No iPhone, verifique se não há **restrições de tela** (Ajustes > Tempo de Uso > Restrições).

<figure><img src="../../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

***

### 📋 Resumo

* Instale o sistema como **PWA** (Android via Chrome, iPhone via Safari).
* O ícone aparecerá na **tela inicial** como app normal.
* Habilite **notificações** para receber WebPush em tempo real.
* Em caso de problemas, siga as dicas da seção **Problemas comuns e soluções**.

***
