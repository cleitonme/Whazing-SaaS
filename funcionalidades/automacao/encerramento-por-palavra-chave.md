# Encerramento por Palavra-chave

O **Encerramento por Palavra-chave** permite encerrar automaticamente um atendimento quando o cliente enviar uma palavra ou expressão específica.

Essa função é útil quando a empresa deseja permitir que o próprio cliente finalize o atendimento sem precisar que um atendente faça isso manualmente.

Uma mensagem opcional também pode ser enviada ao cliente antes que o ticket seja encerrado.

### Onde encontrar

No menu do sistema, acesse:

**Configurações de Atendimento → Encerramento por Palavra-chave**

***

## Selecionando o canal

Primeiro, selecione o **Canal** onde deseja utilizar essa configuração.

Por exemplo:

> **Comercial (WhatsApp Plus)**

A configuração será aplicada ao canal selecionado.

> **Importante:** se sua empresa possui vários canais, configure cada canal conforme a necessidade.

***

## Palavras-chave para Encerramento

Neste campo, informe as palavras ou expressões que poderão ser utilizadas pelo cliente para encerrar automaticamente o atendimento.

O sistema irá verificar a mensagem enviada pelo cliente e, quando ela corresponder a uma das palavras-chave configuradas, o ticket será encerrado automaticamente.

Você pode cadastrar:

* Uma palavra por linha; ou
* Várias palavras separadas por vírgula.

#### Exemplo

```
encerrar
finalizar
fim
encerrado
```

Ou:

```
encerrar, finalizar, fim, encerrado
```

#### Exemplo de utilização

Imagine que você configure:

```
encerrar
finalizar
fim
```

Se o cliente enviar uma dessas palavras conforme a regra configurada, o sistema realizará automaticamente o encerramento do atendimento.

> **Dica:** escolha palavras simples e que dificilmente serão utilizadas durante uma conversa normal. Isso evita que o atendimento seja encerrado acidentalmente.

***

## Mensagem de Encerramento

A **Mensagem de Encerramento** é opcional.

Se você preencher esse campo, o sistema enviará a mensagem ao cliente **antes de encerrar o atendimento**.

#### Exemplo

```
Obrigado pelo contato! Seu atendimento foi encerrado. Caso precise de ajuda novamente, estamos à disposição.
```

Assim, quando o cliente utilizar uma palavra-chave de encerramento, ele receberá a mensagem configurada e, em seguida, o ticket será encerrado.

#### Se deixar vazio

Se nenhuma mensagem for configurada, o sistema simplesmente realizará o encerramento automático conforme a palavra-chave configurada.

***

## Exemplo completo

Imagine que a empresa configure:

**Canal:**

> Comercial (WhatsApp Plus)

**Palavras-chave:**

```
encerrar
finalizar
fim
```

**Mensagem de encerramento:**

```
Obrigado pelo contato! Seu atendimento foi encerrado. Estamos à disposição caso precise de ajuda novamente.
```

#### Como funciona

1. O cliente está conversando com o atendimento.
2. O cliente envia uma palavra configurada para encerramento.
3. O sistema identifica a palavra-chave.
4. A mensagem de encerramento é enviada, caso tenha sido configurada.
5. O ticket é encerrado automaticamente.

***

## Quando utilizar

Essa função pode ser útil em situações como:

* Cliente deseja finalizar o atendimento;
* Atendimento automatizado;
* Fluxos de ChatBot;
* Suporte técnico;
* Pesquisas ou processos automáticos;
* Empresas que desejam oferecer uma forma rápida de encerrar a conversa.

> **Atenção:** evite cadastrar palavras muito comuns. Uma palavra que aparece frequentemente durante uma conversa pode causar o encerramento automático de um atendimento que ainda deveria continuar.
