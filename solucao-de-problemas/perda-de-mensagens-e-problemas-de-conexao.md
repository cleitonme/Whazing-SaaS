# Perda de Mensagens e Problemas de Conexão

### Visão Geral

Eventualmente podem ocorrer atrasos, falhas de sincronização ou perda de algumas mensagens em integrações com WhatsApp. Esse comportamento pode ocorrer tanto em APIs Oficiais quanto em APIs Não Oficiais, pois depende de diversos fatores externos, incluindo infraestrutura da Meta, qualidade da conexão, dispositivos conectados e sincronização entre servidores.

É importante entender que nenhum provedor consegue garantir 100% de entrega e sincronização de todas as mensagens em todos os cenários.

***

## APIs Não Oficiais (Baileys, Wuzapi e similares)

Nas APIs não oficiais, alguns cenários são mais suscetíveis a falhas de sincronização:

* Primeiras mensagens enviadas por um contato.
* Mensagens enviadas em grupos.
* Alterações frequentes de conexão do aparelho.
* Leitura do QR Code em múltiplos sistemas simultaneamente.
* Uso simultâneo com WhatsApp Web e outras integrações.

### Boas práticas para reduzir problemas

#### Mantenha o celular sempre conectado

Sempre que possível:

* Deixe o aparelho ligado.
* Mantenha conexão estável com a internet.
* Evite desligar ou reiniciar frequentemente o dispositivo.
* Mantenha bateria suficiente para evitar modo de economia extrema.

#### Evite múltiplas conexões

Para melhorar a estabilidade:

* Não utilize simultaneamente outras APIs não oficiais.
* Evite abrir sessões extras do WhatsApp Web sem necessidade.
* Evite conectar o mesmo número em diversos sistemas ao mesmo tempo.

#### Reconectar a sessão

Caso perceba perda de mensagens ou sincronização inconsistente:

1. Desconecte o canal.
2. Gere um novo QR Code.
3. Realize uma nova conexão.

Em muitos casos isso força uma nova sincronização da sessão e resolve problemas de comunicação.

#### Mantenha a Wuzapi atualizada

Versões antigas podem apresentar incompatibilidades com mudanças realizadas pela Meta.

Documentação:

* Atualização da Wuzapi: [https://doc.whazing.com.br/canais-suportados/whatsapp-wuzapi](https://doc.whazing.com.br/canais-suportados/whatsapp-wuzapi)

#### Mantenha o Whazing atualizado

Atualizações do Whazing incluem:

* Correções de bugs.
* Melhorias de desempenho.
* Ajustes de compatibilidade com APIs e WhatsApp.

Documentação:

* Atualização do Whazing: [https://doc.whazing.com.br/instalacao-and-vps/atualizar-whazing](https://doc.whazing.com.br/instalacao-and-vps/atualizar-whazing)

***

### Recomendação para APIs Não Oficiais

Atualmente recomendamos a utilização da **Wuzapi** em vez de integrações baseadas em **Baileys**.

O principal motivo é que a Wuzapi costuma apresentar:

* Menor consumo de memória e processamento.
* Melhor desempenho em servidores com muitos atendimentos.
* Maior estabilidade em conexões de longa duração.
* Menor ocorrência de erros relacionados à sincronização da sessão.
* Atualizações frequentes para acompanhar mudanças do WhatsApp.

Embora o Baileys continue disponível e possa funcionar adequadamente em diversos cenários, para novas instalações e novos canais recomendamos priorizar a utilização da Wuzapi.

***

## Coex (API Oficial)

Mesmo utilizando a API Oficial da Meta através do Coex, podem ocorrer situações de:

* Mensagens não recebidas.
* Atrasos de entrega.
* Eventos que não chegam ao sistema.
* Perda temporária de sincronização.

Essas situações são conhecidas e discutidas pela própria comunidade da Meta, parceiros oficiais e fóruns especializados.

Além disso, eventualmente podem ocorrer problemas de conexão que exigem uma nova autenticação ou reconexão do canal.

Documentação específica:

[https://doc.whazing.com.br/canais-suportados/api-oficial/limitacoes-e-erros/coex-api-oficial-problemas-de-conexao-e-reconexao](https://doc.whazing.com.br/canais-suportados/api-oficial/limitacoes-e-erros/coex-api-oficial-problemas-de-conexao-e-reconexao)

***

## Problemas de Infraestrutura

Em alguns casos a origem do problema não está na API, mas sim na infraestrutura do servidor.

### Redis

O Redis é responsável por diversas filas e processamentos internos do sistema.

Falhas ou corrupção de dados no Redis podem causar:

* Lentidão.
* Filas travadas.
* Atrasos de processamento.
* Comportamentos inesperados.

Documentação:

[https://doc.whazing.com.br/solucao-de-problemas/reinstalar\_redis](https://doc.whazing.com.br/solucao-de-problemas/reinstalar_redis)

***

### Verificar Logs do Sistema

Antes de abrir um chamado, é recomendável analisar os logs para identificar possíveis erros.

Documentação:

[https://doc.whazing.com.br/instalacao-and-vps/acessando\_logs](https://doc.whazing.com.br/instalacao-and-vps/acessando_logs)

***

### Diagnóstico de Lentidão

Servidores com recursos insuficientes ou sobrecarregados podem impactar diretamente:

* Recebimento de mensagens.
* Processamento de filas.
* Envio de mensagens.
* Integrações externas.

Documentação:

[https://doc.whazing.com.br/solucao-de-problemas/diagnostico-de-lentidao-em-servidores-linux-com-docker](https://doc.whazing.com.br/solucao-de-problemas/diagnostico-de-lentidao-em-servidores-linux-com-docker)

***

## Importante

A ocorrência ocasional de perda de mensagens, atrasos ou necessidade de reconexão não significa necessariamente que existe um defeito no Whazing.

Esses comportamentos podem ocorrer devido a fatores externos relacionados ao WhatsApp, Meta, provedores de internet, dispositivos conectados, APIs intermediárias ou infraestrutura do servidor.

Manter o Whazing, a Wuzapi e os demais componentes sempre atualizados é a melhor forma de minimizar problemas e garantir a maior estabilidade possível.
