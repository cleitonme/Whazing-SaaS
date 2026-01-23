# 2 Via Boleto

Para fazer esse tutorial usaremos o painel demo da empresa como exemplo

{% embed url="https://demo.atlaz.com.br/admin" %}

Acesse painel - Configurações - Recursos

<figure><img src="../../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

Copie o token da API

Agora no whazing

Acesse Cadastro - "Filas - Integrações" - Integrações

Clique em adicionar selecione - "2 via boleto Atlaz"

<figure><img src="../../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

Preencha nome da integração para diferenciar no sistema, URL da Integração painel demo seria "[https://demo.atlaz.com.br](https://demo.atlaz.com.br/)" Não colacar / no final url ou nada mais.

Fila transferir caso ocorra algum erro para falar com atendimento, não usar mesma fila da integração.

Api Key que você copiei no painel anteriormente.

Outras opções disponíveis.

Ativar Desbloqueio confiança - Cliente ao solicitar boleto automaticamente sera feito desbloqueio de confiança

Configuração uso lista, botões reply ou copia e cola. Isso vai depender api vai usar se suporta isso. Caso habilitar api não ter suporte exemplo telegram. A mensagem não é entregue

<figure><img src="../../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

Para colocar integração funcionar muito simples agora.

Crie uma fila - e marque usar integração acabou de criar

Deixe desativado - "Inicia Integração ao transferir"

<figure><img src="../../../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

Agora em seu bot coloque para transferir essa fila e coloca mensagem ao transferir, Solicitando CPF ou CNPJ.

<figure><img src="../../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>



{% file src="../../../.gitbook/assets/boletoatlaz.json" %}

Ao chegar fila cliente deve digitar seu cpf e sistema vai buscar e listar boletos disponíveis.

<figure><img src="../../../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>
