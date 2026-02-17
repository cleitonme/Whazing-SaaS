# Armazenamento S3

O sistema suporta armazenamento S3 (AWS S3, Backblaze B2, MinIO, etc.) a partir da Versão 2.6.0, será usado para armazenar mídias recebidas como fotos, videos, audios entre outros. Nem todos arquivos serão gravados no S3 alguns ainda podem permanecer na pasta public da VPS. Armazenamento será para arquivos novos. O sistema usa dados de acesso para ler os arquivos então caso seja configurado e depois trocados dados, os armazenados anteriormente serão perdidos o acesso.

No tutorial ensinaremos a configurar o [backblazeb2](https://www.backblaze.com/)

Se cadastre no [https://www.backblaze.com](https://www.backblaze.com) <br>

<figure><img src="../.gitbook/assets/image (84).png" alt=""><figcaption></figcaption></figure>

Criar um Balde

Balde Nome Exclusivo: Nome do armazenamento (este sera Nome do Bucket no whazing)

Arquivos de segmento são: Privado

Default Encryption: desativar

Object Lock: desativar

Pode clicar em "Criar um Balde"

Após criado verificar Endpoint: este será necessário preencher whazing<br>

<figure><img src="../.gitbook/assets/image (87).png" alt=""><figcaption></figcaption></figure>

Região no whazing exemplo "s3.us-east-005.backblazeb2.com" região será "us-east-005"

Agora vamos criar as credencias de acesso:

Clique em "Application Keys" - "**Add Application Key"**

<figure><img src="../.gitbook/assets/image (85).png" alt=""><figcaption></figcaption></figure>

Name of Key: um de sua preferencia

Allow access to Bucket(s): Selecione o criado anteriormente ou deixe ALL

Type of Access: Read and Write<br>

Não prencher outros campos e clicar Create Key

Anote dados gerados.

keyID: sera preenchido no "Access Key ID" no whazing

applicationKey: sera preenchido no "Secret Access Key" no whazing



No whazing so acessar painel SaaS em configurações Armazenamento S3.

Habilitar "Force Path Style"

