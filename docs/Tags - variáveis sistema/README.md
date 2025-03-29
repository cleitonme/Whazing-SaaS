## Tags e Variáveis do Sistema - Tela de Atendimento

### Variáveis Dinâmicas

As variáveis dinâmicas usam os dados das Informações Adicionais dos Contatos.

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

#### Exemplo de Uso:

Mensagem de exemplo:
```bash
Por favor, confirme se seu endereço é {{endereco}}?
1 - Sim
2 - Não
```

Resposta do bot:
```bash
Por favor, confirme se seu endereço é Rua Marechal Deodoro, 11?
1 - Sim
2 - Não
```

### Alterar Variáveis Dinâmicas pelo Chatbot

- No chatbot, existe a opção de salvar a resposta do cliente.

![print](alterardados.jpg)

- Um arquivo exemplo, `exemplo_fluxo_usando_novas_variaveis.json`, está disponível como modelo de uso das variáveis dinâmicas.
- [Fluxo de Exemplo](exemplo_fluxo_usando_novas_variaveis.json)

### Variáveis Fixas

- Primeiro nome do contato:
   ```bash
   {{firstName}}
   ```
- Nome completo do contato:
   ```bash
   {{name}}
   ```
- Número do contato:
   ```bash
   {{phoneNumber}}
   ```
- E-mail do contato:
   ```bash
   {{email}}
   ```
- Saudação:
   ```bash
   {{gretting}}
   ```
- Saudação Espanhol:
   ```bash
   {{greetingEs}}
   ```
- Saudação Ingles:
   ```bash
   {{greetingEn}}
   ```
- ID do ticket:
   ```bash
   {{ticket_id}}
   ```
- Saudação (outra opção):
   ```bash
   {{ms}}
   ```
- Protocolo:
   ```bash
   {{protocol}}
   ```
- Hora:
   ```bash
   {{hour}}
   ```
- Data:
   ```bash
   {{date}}
   ```
- Fila:
   ```bash
   {{fila}}
   ```
- E-mail do usuário:
   ```bash
   {{userEmail}}
   ```
- Nome do usuário:
   ```bash
   {{user}}
   ```

## Variáveis do Sistema - Campanhas
- Saudação:
   ```bash
   {{gretting}}
   ```
- Saudação Espanhol:
   ```bash
   {{greetingEs}}
   ```
- Saudação Ingles:
   ```bash
   {{greetingEn}}
   ```
- Primeiro nome do contato:
   ```bash
   {{firstName}}
   ```
- Nome completo do contato:
   ```bash
   {{name}}
   ```
- Número do contato:
   ```bash
   {{phoneNumber}}
   ```
- E-mail do contato:
   ```bash
   {{email}}
   ```

## Variáveis TypeBOT

- Número:
   ```bash
   number
   ```
- Nome do push:
   ```bash
   pushName
   ```
- Nome:
   ```bash
   nome
   ```
- E-mail:
   ```bash
   email
   ```
- ID do ticket:
   ```bash
   ticketId
   ```
- Protocolo:
   ```bash
   protocol
   ```
- Ticket:
   ```bash
   ticket
   ```
- Remote JID:
   ```bash
   remoteJid
   ```