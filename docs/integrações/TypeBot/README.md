## Configurar Typebot 

![print](configurartypebot.png)
![print](configurarwhazingtype.png)

1. **URL Integração**: Pegue a URL na publicação do Typebot, não coloque a última `/` conforme exemplo acima.
2. **Typebot - Slug**: Nome que aparece depois na URL quando você publica. Ver exemplo acima.
3. **Tempo em minutos para expirar uma conversa**: Tempo de inatividade que leva para o Whazing se desconectar do Typebot caso não haja mais interação do cliente.
4. **Intervalo (ms) entre mensagens**: Tempo entre as respostas. 1000ms = 1 segundo.
5. **Palavra que fecha ticket**: Comando que o cliente envia para fechar o ticket.
6. **Palavra que reinicia o Fluxo**: Comando que o cliente envia para voltar ao começo do fluxo do Typebot.
7. **Mensagem caso opção escolhida seja inválida**: Mensagem que o bot enviará caso não receba a resposta esperada (exemplo: o cliente envia texto quando a entrada esperada era um número).
8. **Mensagem ao reiniciar fluxo**: Mensagem que será enviada após o comando que reinicia o fluxo.

### Variáveis do Typebot

- **number**
- **pushName**
- **nome**
- **email**
- **ticketId**
- **protocol**
- **ticket**
- **remoteJid**
- **firstMessage**

- As informações adicionais podem ser usadas como variaveis (atenção essa informação carregada quando inicia conexão typebot se alguma for alterada durante fluxo typebot não vai alterar até fluxo typebot for reniciado)

### Exemplo

>![print](informacoesadicionais.jpg)

1. Usando a variável abaixo, o valor retornado será "0985786468528":
   ```bash
   {{CPF}}
   ```

2. Usando a variável abaixo, o valor retornado será "Premium":
   ```bash
   {{plano}}
   ```

3. Usando a variável abaixo, o valor retornado será "Rua Marechal Deodoro, 11":
   ```bash
   {{endereco}}
   ```

### Comandos Possíveis

Adicione os comandos abaixo em um Bubble de texto:

- Comando para transferir de Fila (lembre-se de trocar o ID):
   ```bash
   #{ "queueId": "1" }
   ```
- Comando para transferir para Atendente (lembre-se de trocar o ID):
   ```bash
   #{ "queueId":"1", "userId":"1" }
   ```
- Parar o Typebot (não precisa trocar o 1):
   ```bash
   #{ "stopBot":"1" }
   ```
- Comando para adicionar uma Etiqueta (lembre-se de trocar o ID):
   ```bash
   #{ "tagId": "1" }
   ```
- Comando para finalizar o atendimento (não precisa trocar o 1):
   ```bash
   #{ "closeTicket":"1" }
   ```
   
- Comando para adicionar contato em uma Lane CRM - Somente crm compartilhado (lembre-se de trocar o ID):
   ```bash
   #{ "crmId": "1" }
   ```

- Comando Criar ou alterar informação adicional contato
  
```bash
#{
  "AddiInfo": {
    "description": "plano",
    "information": "premium"
  }
}
```

Os IDs podem ser obtidos na tela que lista os cadastros no Whazing.

#### Comando especiais - usar bubbles texto

- Criar lista personalizada

```bash
[list]
[title]Título da Lista
[description]Descrição da lista
[buttonText]Ver opções
[footerText]Rodapé da lista
[menu]
[section]
title: Seção 1
[row]
title: Opção 1
description: Descrição 1
rowId: id_opcao_1
[/row]
[row]
title: Opção 2
description: Descrição 2
rowId: id_opcao_2
[/row]
[/section]
[section]
title: Seção 2
[row]
title: Opção 3
description: Descrição 3
rowId: id_opcao_3
[/row]
[/section]
[/menu]
```

- Criar menu reply - api oficial somente

```bash
[replybutton]
[text]Escolha uma das opções abaixo[text]
[button]
title: Botão 1
id: 1
[button]
[button]
title: Botão 2
id: 2
[button]
[button]
title: Botão 3
id: 3
[button]
```

- Criar url button - api oficial somente

```bash
[urlbutton]
[header]Acessar seu teste[/header]
[body]Agora so acessar seu teste com email: {{email}} senha: mudar123[/body]
[footer]Obrigado pelo cadastro.[/footer]
[buttonText]Acesse agora[/buttonText]
[url]https://teste.whazing.com.br/[/url]

```
   
- Criar solicitar localizacao - api oficial somente

```bash
[locationrequest]
[text]Por favor compartilhe sua localização para encontrarmos a loja mais próxima[text]
```


**IMPORTANTE**: 
- Veja como instalar o Typebot na mesma VPS que o Whazing [aqui](Comoinstalar.md).

### Exemplo de fluxo para importar no Typebot

- [Baixe e importe o exemplo de fluxo compatível com o Whazing](exemplo-fluxo-typebot.json).

### Como Compartilhar Fluxo com o Cliente

![print](compartilharfluxo.png)
