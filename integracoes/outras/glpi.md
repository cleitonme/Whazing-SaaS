# GLPI

Integração whazing com GLPI suporta abertura de chamados e consulta chamados abertos

Em Cadastro - "Filas - Integrações" - Integrações&#x20;

Clique em adicionar - teremos "Criar chamados GLPI" e "Consultar Chamado GLPI" \
\
Na a Criar chamados GLPI tem configuração "Intervalo entre Mensagens(ms)"

&#x20;**Tempo de espera para unir mensagens do cliente** Se o cliente digitar a mensagem em partes (mensagem “picotada”), o sistema aguarda esse tempo para **juntar tudo em um único chamado**.

👉 Recomendado: **15000 ms (15 segundos)** — valor mínimo indicado.\
\
Será solicitado do GLPI URL Integração, APP TOKEN e USER TOKEN

Para Obter URL INTEGRAÇÂO E APP TOKEN

No GLPI - Acesse - Configurar - Geral - API<br>

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

Ative a api no whazing deve cadastrar nesse formato "https://whazing.com.br/glpi/apirest.php" não colocar / no final

Obter APP TOKEN

Clique Adicionar Cliente de API

<figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

Deixe campos ip em branco ou coloque ip da vps coloque ativo e marque Re-gerar e clique em adicionar

Agora volte clientes de api - clique naquele acabou de gerar e você vera campo token da aplicacao estara preenchido\
<br>

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

Agora para gerar token user, terá ser um tenha permissão criar chamado nas empresas.&#x20;

Administração - Usuarios - Abra Usuario pretende usar e no final tera\
\
API token - clique em Re-gerar e salve após isso vai aparecer token para usar campo User\_token<br>

![](<../../.gitbook/assets/image (7).png>)<br>

Agora usuários teram acesso criar chamado pelo whazing teram ter email cadastro ou telefone, esses serão valores usados para buscar e cadastrar. Sistema vai buscar usando whatsapp do cliente caso não localizar vai usar email. \
\
No usuário na Entidade padrão deve ta definido a empresa do cliente.

Fila definida caso cliente solicitar falar com atendente

<figure><img src="../../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

Apos crie uma fila e vincula integração coloque iniciar ao transferir, Então so usar bot para transferir para essa fila que integração inicia automaticamente.\
<br>

<figure><img src="../../.gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>
