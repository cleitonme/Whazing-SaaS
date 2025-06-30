## ChatGPT Assistant

### Por que escolher essa integração?
- Você obterá uma IA mais ajustada para melhores resultados.

### Alguns vídeos sobre esse modelo de configuração:
- [Vídeo 1](https://www.youtube.com/watch?v=N2Ynpl16o4I)
- [Vídeo 2](https://www.youtube.com/watch?v=3A4rdBnCJPA)

### Configurar ChatGPT Assistant

![print](telaintegracao.png)

1. **Fila**: Selecione a fila para a qual a IA deve transferir caso não consiga responder às perguntas ou resolver o problema.
2  **Mensagem de transferencia**: Mensagem será enviado cliente caso ele pedir falar com um humano
3. **Intervalo (ms) entre mensagens**: 

Define o tempo de espera (em milissegundos) entre as respostas da IA.
Por exemplo: 15000 ms significa 15 segundos.

Durante esse intervalo, se o cliente enviar várias mensagens, a IA responderá apenas uma vez — ou seja, ela aguardará esse tempo antes de responder novamente.

Resumo: a IA só responde uma vez a cada intervalo definido, mesmo que o cliente envie várias mensagens nesse tempo.

4. **API Key**: Chave de API para conexão com a IA. Lembre-se que o ChatGPT cobra por token. Obtenha sua chave [aqui](https://platform.openai.com/settings/organization/api-keys).
5. **ASSISTANT ID**: Identificação do assistente (começa com `asst_`). Obtenha seu ID [aqui](https://platform.openai.com/playground/assistants).

   - Ao criar o assistente, o formato da resposta deve ser **texto**.

![print](openai.png)

### Formato da Resposta da IA

- **API Key ElevenLabs**: Necessária se o formato da resposta for diferente de texto.
- **Formato da resposta da IA**: Selecione voz da ElevenLabs deseja usar tem que preencher api key acima antes
- **Modelos ElevenLabs**: Selecione modelo de voz para usar