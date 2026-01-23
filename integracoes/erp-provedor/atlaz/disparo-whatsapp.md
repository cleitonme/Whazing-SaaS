# Disparo WhatsApp

### 📌 O que você vai precisar <a href="#o-que-voce-vai-precisar" id="o-que-voce-vai-precisar"></a>

* Acesso ao **painel da Atlaz** (usaremos o painel demo como exemplo)
* Acesso ao **Whazing** com permissão para criar integrações e filas

***

### 1️⃣ Acessando o painel do whazing <a href="#id-1-acessando-o-painel-da-atlaz" id="id-1-acessando-o-painel-da-atlaz"></a>

Acesse configurações - "Canais - Api" - API

Crie adicionar e seleciona um canal whatsapp api não oficial, somente é suportado canais tipo Baileys, Wuzapi e Plus

<figure><img src="../../../.gitbook/assets/image (77).png" alt=""><figcaption></figcaption></figure>

Copie a URL e o Token



2

Para este exemplo, utilizaremos o painel demo:

No painel da Atlaz, siga o caminho:

**Painel → Configurações → Whatsapp**

<figure><img src="../../../.gitbook/assets/image (78).png" alt=""><figcaption></figcaption></figure>

Escolha serviço "Genérico"

Intervalos entre envios "coloque 60 segundos", intervalos muitos curtos aumenta a chance de ban

URL do Webhook \*: preencha url api e no final coloque /atlaz como exemplo print acima

[https://testeapi.whazing.com.br/v1/api/external/e4b92f62-b8c7-41af-a8ab-404840510fd7/atlaz](https://testeapi.whazing.com.br/v1/api/external/e4b92f62-b8c7-41af-a8ab-404840510fd7/atlaz)\
\
Token \*: preencha exatamente token copiado do whazing

Pronto sistema esta pronto enviar mensagem podes usar opção enviar whatsapp teste\
\
Embaixo tem opções para configurar mensagens e habilitar e desativar elas.

Use com cautela uso exagerado pode levar a ban

O whazing armazena por 1 hora mensagem enviada e não deixa enviar mesma mensagem novamente, para ajudar evitar bloqueios. Atenção hora testes.

Canal plus, ele enviar com copia e cola. Caso boleto esteja disponível enviara pdf também.\
\
![](<../../../.gitbook/assets/image (79).png>)
