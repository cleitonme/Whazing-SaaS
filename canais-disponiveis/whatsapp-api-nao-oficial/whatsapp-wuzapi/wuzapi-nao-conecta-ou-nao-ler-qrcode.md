---
icon: whatsapp
---

# WuzAPI não conecta ou não lê o QR Code

Este guia ajuda a identificar problemas quando uma sessão é criada no painel, mas o WhatsApp não conecta, o QR Code não aparece ou a sessão fica eternamente em “conectando”.

> ⚠️ **Antes de começar:** confirme que está usando uma conta do **WhatsApp Business**, recomendada para essa integração. O procedimento abaixo verifica a instalação, os serviços Docker e a conexão de rede até o WhatsApp.

***

## 🩺 1. Verifique os logs do WuzAPI

Os logs mostram os erros registrados pelo serviço. No servidor, execute:

```bash
docker logs --tail 100 -f wuzapi
```

- `--tail 100` mostra as últimas 100 linhas.
- `-f` acompanha novas mensagens em tempo real.
- Para parar de acompanhar, pressione **Ctrl + C**. Isso não para o container.

Com os logs abertos, tente criar ou conectar a sessão no painel. Observe a mensagem que aparece naquele momento.

| Mensagem ou sintoma no log | O que verificar |
|---|---|
| `failed to dial whatsapp web websocket` ou `i/o timeout` | Conexão de saída do container até o WhatsApp. Siga as etapas 5 a 9. |
| `connection refused` ou `no such host` | Serviço, endereço configurado ou resolução DNS. Confira as redes Docker e as configurações do painel. |
| Erros de PostgreSQL ou banco de dados | Estado e logs do container `postgreswuzapi`. |
| Erros de RabbitMQ ou AMQP | Estado e logs do container `rabbitmqwuzapi`. |
| Erros de webhook | Confira a URL e o Admin Token cadastrados em **Painel SaaS → Integracoes → WuzAPI**. |

Para consultar os serviços auxiliares:

```bash
docker logs --tail 100 postgreswuzapi
docker logs --tail 100 rabbitmqwuzapi
```

Para acompanhar os logs de um serviço em tempo real, acrescente `-f`:

```bash
docker logs --tail 100 -f postgreswuzapi
```

Veja também: [Acessando os Logs](../../../instalacao-and-vps/acessando_logs.md).

***

## 🐳 2. Confira se os containers estão ativos

Execute:

```bash
docker ps -a
```

Verifique se `wuzapi`, `postgreswuzapi` e `rabbitmqwuzapi` aparecem como ativos. Se algum estiver parado ou reiniciando, consulte os logs desse container antes de reiniciar os serviços.

Não é necessário reiniciar todos os containers como primeiro passo. Primeiro identifique qual deles apresenta erro.

***

## 🌐 3. Confira as redes Docker

Veja em quais redes o container `wuzapi` está conectado:

```bash
docker inspect -f '{{range $name,$net := .NetworkSettings.Networks}}{{$name}}: {{$net.IPAddress}}{{println}}{{end}}' wuzapi
```

O container pode aparecer em mais de uma rede. Ter várias redes não garante, por si só, que a comunicação entre os containers ou o acesso à internet estejam funcionando.

> ⚠️ **Não conecte automaticamente o WuzAPI à rede padrão `bridge`.** Adicionar outra rede pode alterar a rota de saída usada pelo container. Primeiro confira a rota na etapa 6.
>
> Se o Whazing e o WuzAPI precisarem se comunicar diretamente por nomes de container, eles devem compartilhar uma rede Docker apropriada. Não use `docker network connect bridge wuzapi` sem antes verificar a configuração da instalação.

***

## 🔥 4. Confira o UFW sem desativar o firewall

Verifique o estado e as políticas do UFW:

```bash
sudo ufw status verbose
```

Se aparecer `Status: active`, o firewall está ativo. Confira também a política `routed`. Neste caso, ela aparecia assim:

```text
Default: deny (incoming), allow (outgoing), allow (routed)
```

Permitir tráfego roteado e aplicar NAT são coisas diferentes. Mesmo que o UFW permita o encaminhamento, ainda pode faltar uma regra de masquerade para a rede Docker.

> ⚠️ Não execute `sudo ufw disable` para testar. Em um servidor remoto, isso pode afetar o acesso SSH e não corrige a ausência de NAT.

Veja também: [Como verificar e reiniciar o Firewall (UFW) no Linux](../../../solucao-de-problemas/servidor-e-banco-de-dados/como-verificar-e-reiniciar-o-firewall-ufw-no-linux.md).

***

## 📡 5. Teste a conexão da WuzAPI no próprio servidor

Se a instalação disponibiliza a API na porta `8080` do host, teste:

```bash
curl -i --max-time 5 http://127.0.0.1:8080
```

Qualquer resposta HTTP — inclusive uma mensagem de erro HTTP — indica que há um serviço respondendo nessa porta. Se o comando retornar conexão recusada ou timeout, confira o estado do container e os logs da etapa 1.

Confira também se a URL e o Admin Token cadastrados no painel em **SaaS → Canais** correspondem aos valores exibidos na instalação. Por exemplo:

```text
http://127.0.0.1:8080
```

Use a URL apropriada para a sua instalação; não copie o exemplo se o seu endereço for diferente.

***

## 🔌 6. Compare a conexão HTTPS do servidor e do container

Um `ping` funcionando no servidor não comprova que o container consegue abrir uma conexão HTTPS. O teste a seguir compara a conexão TCP/HTTPS do host com a do container.

No servidor, obtenha um IPv4 atual para `web.whatsapp.com`:

```bash
WA_IP=$(getent ahostsv4 web.whatsapp.com | awk 'NR==1 {print $1}')
echo "IPv4 encontrado: $WA_IP"
```

Se o endereço aparecer vazio, o servidor não encontrou um IPv4. Nesse caso, não prossiga com os comandos abaixo: investigue primeiro o DNS do servidor.

Teste a conexão HTTPS no host:

```bash
curl -4 -v --connect-timeout 10 \
  --resolve "web.whatsapp.com:443:$WA_IP" \
  https://web.whatsapp.com/
```

Agora faça o mesmo teste usando a rede do container `wuzapi`:

```bash
docker run --rm --network container:wuzapi curlimages/curl:latest \
  -4 -v --connect-timeout 10 \
  --resolve "web.whatsapp.com:443:$WA_IP" \
  https://web.whatsapp.com/
```

### Como interpretar o resultado

- Uma resposta HTTP — por exemplo, `302` — significa que a conexão chegou ao servidor. Não é necessário receber `200`.
- Se o teste do host funcionar, mas o teste do container der timeout, investigue a rota e o NAT da rede Docker.
- Se os dois testes falharem, investigue a conexão externa ou o DNS do servidor antes de alterar as regras do Docker.
- O endereço IP do WhatsApp pode mudar. Obtenha um endereço atual em cada comparação; não reutilize por muito tempo o IP de um log antigo.

***

## 🧭 7. Identifique a rota de saída do container

Use um container auxiliar para consultar a rota de rede do `wuzapi`:

```bash
docker run --rm --network container:wuzapi nicolaka/netshoot ip route
```

No servidor em que o problema foi identificado, a rota relevante era:

```text
default via 172.16.0.1 dev eth0
172.16.0.0/24 dev eth0 ... src 172.16.0.2
```

Isso significa que o container usa a rede `172.16.0.0/24`, com o endereço `172.16.0.2`, e envia o tráfego de saída pelo gateway `172.16.0.1`.

Confira a rota externa do host:

```bash
ip route
```

Neste servidor, a interface de saída para a internet era `eth0`. Em outra instalação, o nome da interface pode ser diferente. Use a interface que aparece na rota externa do seu servidor.

***

## 🧱 8. Confira se existe NAT para a rede usada pelo container

No host, execute:

```bash
sudo iptables -t nat -vnL POSTROUTING
```

Procure uma regra `MASQUERADE` que corresponda à rede de saída do container e à interface externa do servidor.

Neste servidor, havia uma regra para `172.17.0.0/16`, mas a rota padrão do WuzAPI usava `172.16.0.0/24`. Portanto, faltava NAT para a rede realmente usada pelo container.

A ausência dessa regra pode permitir que o pacote saia com um endereço privado da rede Docker, sem que as respostas da internet consigam retornar corretamente ao container.

***

## 🛠️ 9. Teste a correção de NAT

> Os valores abaixo correspondem a este servidor: subnet `172.16.0.0/24` e interface externa `eth0`. Em outro servidor, confirme a rota e a subnet antes de usar os valores.

Para testar a correção imediatamente, execute no host:

```bash
sudo iptables -t nat -I POSTROUTING 1 \
  -s 172.16.0.0/24 -o eth0 -j MASQUERADE
```

Repita o teste HTTPS da etapa 6 dentro do container.

Se o teste passar depois de adicionar a regra, a causa era a ausência de NAT para a rede Docker usada pelo WuzAPI.

> Essa regra adicionada diretamente com `iptables` é temporária. Ela pode desaparecer após uma reinicialização do servidor ou uma recarga das regras de firewall. Para torná-la persistente, siga a próxima etapa.

***

## 💾 10. Torne a regra NAT permanente no UFW

Faça uma cópia de segurança do arquivo antes de alterá-lo:

```bash
sudo cp /etc/ufw/before.rules /etc/ufw/before.rules.bak
```

Abra o arquivo:

```bash
sudo nano /etc/ufw/before.rules
```

Localize a seção `*nat`. Se ela já existir, **não crie uma segunda seção**. Acrescente a regra correspondente à rede do container antes de `COMMIT`.

Neste servidor, a seção ficou assim:

```text
*nat
:POSTROUTING ACCEPT [0:0]
-A POSTROUTING -s 172.17.0.0/16 ! -o docker0 -j MASQUERADE
-A POSTROUTING -s 172.16.0.0/24 -o eth0 -j MASQUERADE
COMMIT
```

Salve o arquivo e recarregue o UFW:

```bash
sudo ufw reload
```

Confirme que a regra foi carregada:

```bash
sudo iptables -t nat -C POSTROUTING \
  -s 172.16.0.0/24 -o eth0 -j MASQUERADE \
  && echo "Regra NAT carregada"
```

Depois, repita o teste HTTPS da etapa 6 e confira os logs:

```bash
docker logs --tail 100 wuzapi
```

> Os valores `172.16.0.0/24` e `eth0` são específicos deste servidor. Se a subnet do container ou a interface externa forem diferentes, ajuste a regra conforme as etapas 7 e 8.

***

## 🔄 11. Reinicie a WuzAPI após corrigir a rede

Depois de confirmar que o teste de rede do container funciona, reinicie a WuzAPI:

```bash
docker restart wuzapi
```

Acompanhe os logs e tente criar ou conectar a sessão novamente:

```bash
docker logs --tail 100 -f wuzapi
```

Se os logs apontarem erro de PostgreSQL ou RabbitMQ, confira primeiro o serviço correspondente:

```bash
docker logs --tail 100 postgreswuzapi
docker logs --tail 100 rabbitmqwuzapi
```

Reinicie apenas o serviço que estiver com problema. Se for necessário reiniciar todos:

```bash
docker restart wuzapi postgreswuzapi rabbitmqwuzapi
```

***

## 🧹 12. QR Code aparece, mas a sessão não conecta

Se o QR Code aparece, mas a leitura não conclui a conexão:

1. Desconecte sessões antigas ou outras integrações ligadas ao mesmo número, se houver.
2. Gere um QR Code novo no painel.
3. Se o problema continuar, exclua o canal e crie-o novamente.

Veja também: [WhatsApp desconecta ou mensagens não chegam](../../../solucao-de-problemas/whatsapp-e-mensagens/whatsapp-desconecta-ou-mensagens-nao-chegam.md).

***

## 🗑️ 13. Último recurso: reinstalação

Se os testes de rede funcionarem, os containers estiverem ativos e os logs ainda indicarem falha, considere reinstalar a WuzAPI. Siga o procedimento em [Desinstalar WUZAPI](./#desinstalar-wuzapi).

> ⚠️ Antes de remover containers, bancos de dados ou volumes, faça uma cópia de segurança e confira o que será excluído. Após uma reinstalação, pode ser necessário conectar novamente os números lendo novos QR Codes e atualizar o Admin Token em **SaaS → Canais**.

***

## ✅ Checklist rápido

| Sintoma | Causa provável | O que fazer |
|---|---|---|
| `i/o timeout` ao conectar ao WhatsApp | Saída HTTPS do container ou NAT ausente | Compare o `curl` no host e no container; confira a rota e o NAT. |
| Host conecta, container dá timeout | Problema na rede de saída do Docker | Verifique `ip route` no container e a regra `MASQUERADE`. |
| `Network unreachable` no teste IPv6 | Container sem rota IPv6 | Teste a conexão IPv4; não habilite IPv6 sem configurar uma rota válida. |
| `connection refused` | Serviço ou porta não está respondendo | Confira `docker ps -a`, logs e a URL configurada. |
| `no such host` | Falha de resolução DNS | Confira a resolução de nomes no host e no container. |
| Erros de PostgreSQL | Banco da WuzAPI parado ou inacessível | Confira os logs do `postgreswuzapi`. |
| Erros de RabbitMQ/AMQP | RabbitMQ parado ou inacessível | Confira os logs do `rabbitmqwuzapi`. |
| QR Code aparece, mas não conecta | Sessão antiga ou conflito de conexão | Gere um novo QR Code e recrie o canal, se necessário. |
| Conecta, mas as mensagens não chegam ao Whazing | URL, Admin Token ou comunicação entre serviços | Confira as configurações em **SaaS → Canais** e a rede compartilhada. |

***

## 👣 Ainda com problemas?

Antes de abrir um chamado, reúna:

- Saída de `docker logs --tail 100 wuzapi` feita durante a tentativa;
- Resultado de `docker ps -a`;
- Resultado de `sudo ufw status verbose`;
- Resultado de `sudo iptables -t nat -vnL POSTROUTING`;
- Rota do container:

```bash
docker run --rm --network container:wuzapi nicolaka/netshoot ip route
```

- Resultado do teste HTTPS no host e no container, usando o mesmo IPv4.

Com esses dados será possível identificar se o problema está nos serviços, no DNS, no firewall ou no NAT da rede Docker.
