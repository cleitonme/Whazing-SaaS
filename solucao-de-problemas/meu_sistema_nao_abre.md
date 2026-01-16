---
icon: circle-exclamation
---

# Sistema não abre

### Meu sistema não está funcionando. O que fazer?

Minha VPS Tem espaço?

Você sabia que falta de espaço pode fazer sistema não funcionar

df -h

Saber espaço ocupado

<figure><img src="../.gitbook/assets/image (67).png" alt=""><figcaption></figcaption></figure>

#### Valor importante tem analisar mounted /, no exemplo acima ta 82% uso

Soluções

Aumentar o espaço, verificar empresa contratata essa possibilidade

Opção 2

Apagar arquivos mais antigos ou de logs

pasta log

/home/deploy/whazing/backend/logs

pelo terminal acessar

cd /home/deploy/whazing/backend/logs

rm \* -Rf

Pasta public onde tem arquivos de imagens, videos, fotos.

/home/deploy/whazing/backend/public/

Arquivos estão organizados por id da empresa exemplo 1, 2 3, e dentro da pasta organizado por data exemplo "202510"

Dicas verificar consumo por pasta:

Na pasta que queira consultar digite

du -h --max-depth=1

Exemplo 2 somente acima de 1GB

du -h --max-depth=1 | grep -E '^\[0-9.]+G'

<figure><img src="../.gitbook/assets/image (68).png" alt=""><figcaption></figcaption></figure>

Apagar pasta especifica

sudo rm 202510/ -Rf

#### Erro: Backend não consegu

#### &#x20;logar

Se você enfrentar problemas no login, tente reiniciar o docker seguindo os passos abaixo:

1.  Renicie os proscessos:

    ```bash
    docker container restart whazing-backend
    ```

    ```bash
    docker container restart whazing-frontend
    ```

#### Instalação nova

1. **Acabei de instalar e o sistema não abre**
   * Certifique-se de que o DNS está correto.
   * Utilize [dnschecker.org](https://dnschecker.org) para verificar a propagação.
     * Caso utilize Cloudflare, não ative o proxy (ícone de nuvem laranja).
     * Ao verificar no **dnschecker.org**, o IP da sua VPS deve aparecer em todas as validações.
2. **Verifique os logs do sistema**
   * Consulte a documentação na seção [acessando\_logs](../instalacao-and-vps/acessando_logs.md) para identificar possíveis erros.
3. **Reinstale o sistema**
   * Caso seja uma instalação nova, formate a VPS utilizando o sistema operacional recomendado **Ubuntu 22** e refaça a instalação.

***

#### Acabei de atualizar

1. **Você fez o snapshot da VPS conforme recomendado?**
   * Caso tenha feito, retorne ao backup.
2. **Execute o atualizador novamente**
   * É possível que algum erro tenha ocorrido durante o processo de atualização.
3. **Verifique os logs do sistema**
   * Consulte a documentação na seção [acessando\_logs](../instalacao-and-vps/acessando_logs.md) para investigar eventuais erros.

***

#### O sistema parou de funcionar "do nada"

1. **Reinicie a VPS**
2. **Verifique os logs do sistema**
   * Acesse a documentação na seção [acessando\_logs](../instalacao-and-vps/acessando_logs.md) para identificar problemas.
3. **Execute a atualização**
4. **Verifique o DNS**
   * Use [dnschecker.org](https://dnschecker.org) para confirmar a propagação.
     * Caso utilize Cloudflare, não ative o proxy (ícone de nuvem laranja).
     * O IP da VPS deve aparecer em todas as validações no **dnschecker.org**.
5. **Certifique-se de que o SSL está correto**
   * Consulte a documentação na seção [Problemas com SSL](problemas_com_ssl.md) para maiores detalhes.

#### Meu sistema não envia ou recebe mensagens

1. **Reinicie a VPS**
2. **Conecte novamente o whatsapp**
3. **Verifique os logs do sistema**
   * Acesse a documentação na seção [acessando\_logs](../instalacao-and-vps/acessando_logs.md) para identificar problemas.

Obs: Caso log aparece erro no redis exemplo "\[ioredis] Unhandled error event: Error: connect ECONNREFUSED"

### Necessário reinstalar o mesmo - Verificar documentação "reinstalar\_redis" [reinstalar\_redis](reinstalar_redis.md)

#### Grupo de suporte

Acesse nosso grupo de suporte:\
[https://grupo.whazing.com.br](https://grupo.whazing.com.br)

**Informe o máximo de informações possíveis**, como:

* Domínios de acesso
* Resultados de comandos como _ping_
* Logs relevantes [acessando\_logs](../instalacao-and-vps/acessando_logs.md)
