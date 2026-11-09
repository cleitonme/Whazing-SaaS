# Problemas com certificado SSL ou HTTPS

## Visão geral

Problemas com certificados SSL podem impedir o acesso ao sistema ou apresentar avisos de segurança no navegador.

Algumas mensagens comuns são:

- Sua conexão não é particular.
- Sua conexão não é segura.
- Certificado SSL expirado.
- `NET::ERR_CERT_DATE_INVALID`
- `ERR_CERT_AUTHORITY_INVALID`
- `ERR_SSL_PROTOCOL_ERROR`
- Erro ao estabelecer conexão HTTPS.

As instalações do Whazing podem utilizar dois servidores web diferentes, dependendo da versão e da época em que o sistema foi instalado:

- **Nginx:** utilizado em instalações mais antigas.
- **Caddy:** utilizado nas instalações mais novas.

Ambos são instalados diretamente no sistema operacional Ubuntu, sem Docker.

Cada servidor possui seu próprio método de gerenciamento de certificados SSL. Por isso, antes de executar qualquer procedimento, é necessário identificar qual servidor está instalado.

**Importante:** não execute comandos destinados ao Nginx em instalações com Caddy. Os procedimentos são diferentes.

---

## 1. Identificar se a instalação utiliza Nginx ou Caddy

Acesse sua VPS por SSH e execute:

```bash
sudo systemctl is-active nginx
sudo systemctl is-active caddy
```

Interprete os resultados:

| Resultado | Significado |
|---|---|
| Nginx = active | Instalação utilizando Nginx |
| Caddy = active | Instalação utilizando Caddy |
| Ambos inactive | É necessário investigar os serviços |
| Ambos active | Pode existir uma configuração específica; não altere nada antes de identificar quem atende às portas 80 e 443 |

Para verificar os serviços com mais detalhes:

```bash
sudo systemctl status nginx --no-pager
sudo systemctl status caddy --no-pager
```

Se não conseguir identificar o servidor responsável pelo HTTPS, solicite auxílio técnico antes de executar comandos de renovação.

---

## 2. Instalações antigas: Nginx

Nas instalações antigas, o Nginx é responsável por receber as conexões HTTP e HTTPS e encaminhar as solicitações para os serviços do Whazing.

Os certificados SSL geralmente são gerenciados pelo Certbot, que permite emitir, renovar e verificar certificados.

### 2.1. Verificar se o Nginx está funcionando

Execute:

```bash
sudo systemctl status nginx --no-pager
```

O resultado esperado é:

```text
Active: active (running)
```

Se o serviço estiver parado, será necessário investigar o motivo antes de reiniciá-lo.

### 2.2. Verificar os certificados instalados

Execute:

```bash
sudo certbot certificates
```

Esse comando apresenta informações dos certificados gerenciados pelo Certbot, incluindo:

- Domínios associados.
- Data de validade.
- Caminho dos arquivos do certificado.
- Caminho da chave privada.

Confira se o domínio que apresenta o problema está listado e se o certificado está dentro do prazo de validade.

### 2.3. Testar a renovação automática

Execute:

```bash
sudo certbot renew --dry-run
```

Esse procedimento realiza uma simulação de renovação, permitindo identificar possíveis problemas sem substituir os certificados de produção.

Se ocorrer algum erro, verifique a mensagem apresentada antes de tentar corrigir.

### 2.4. Renovar certificados

Se a simulação funcionar e o certificado estiver próximo do vencimento, execute:

```bash
sudo certbot renew
```

O Certbot verifica os certificados gerenciados e tenta renovar aqueles que atendem aos critérios de renovação.

Após a renovação, verifique se o Nginx está funcionando corretamente:

```bash
sudo nginx -t
```

Se a validação apresentar sucesso, recarregue o serviço:

```bash
sudo systemctl reload nginx
```

**Atenção:** não execute `certbot --nginx` indiscriminadamente. Esse comando é utilizado para emitir ou configurar certificados com o plugin Nginx, não sendo necessário para uma simples renovação de certificados já configurados.

### 2.5. Consultar erros do Nginx

Se o problema persistir, consulte os últimos registros:

```bash
sudo journalctl -u nginx -n 100 --no-pager
```

Também é possível verificar os registros de erro do Nginx:

```bash
sudo tail -n 100 /var/log/nginx/error.log
```

Procure mensagens relacionadas a:

- Certificado inexistente.
- Certificado expirado.
- Arquivos de certificado inacessíveis.
- Erros de configuração.
- Falhas na inicialização do serviço.

---

## 3. Instalações novas: Caddy

Nas instalações novas, o Whazing utiliza o Caddy como servidor web.

Uma das principais diferenças é que o Caddy possui gerenciamento automático de certificados SSL.

Quando o domínio está configurado corretamente e os requisitos de acesso estão atendidos, o próprio Caddy:

- Solicita os certificados SSL automaticamente.
- Renova os certificados antes do vencimento.
- Redireciona conexões HTTP para HTTPS.
- Gerencia os certificados sem necessidade de executar Certbot manualmente.

**Importante:** instalações que utilizam Caddy não precisam executar `certbot --nginx` ou `certbot renew` para administrar os certificados gerenciados pelo Caddy.

### 3.1. Verificar se o Caddy está funcionando

Execute:

```bash
sudo systemctl status caddy --no-pager
```

O resultado esperado é:

```text
Active: active (running)
```

Se o serviço estiver parado, não altere a configuração nem reinstale o Caddy sem antes verificar os registros.

### 3.2. Consultar os registros do Caddy

Execute:

```bash
sudo journalctl -u caddy -n 100 --no-pager
```

Para acompanhar os registros em tempo real:

```bash
sudo journalctl -u caddy -f
```

Para sair do acompanhamento, pressione `CTRL + C`.

Procure mensagens relacionadas a:

- Falha ao obter certificado.
- Erro de validação do domínio.
- Problemas de DNS.
- Falha de acesso às portas 80 e 443.
- Limite de emissão de certificados atingido.
- Problemas de permissão no armazenamento.
- Erros de configuração do Caddy.

### 3.3. Verificar a configuração do Caddy

O arquivo de configuração padrão é:

```text
/etc/caddy/Caddyfile
```

Para visualizar o conteúdo:

```bash
sudo cat /etc/caddy/Caddyfile
```

**Atenção:** não altere esse arquivo sem orientação técnica. Uma configuração incorreta pode interromper o acesso ao sistema.

Para validar a configuração atual:

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
```

Esse comando verifica a configuração, mas não realiza a emissão ou renovação de certificados.

### 3.4. Verificar as portas utilizadas pelo Caddy

Execute:

```bash
sudo ss -tlnp | grep -E ':(80|443)\b'
```

O Caddy precisa conseguir utilizar as portas necessárias para atender às conexões HTTP e HTTPS.

Se outro serviço estiver ocupando essas portas, poderá ocorrer conflito na emissão ou no atendimento dos certificados.

Não encerre processos manualmente sem identificar primeiro qual serviço está utilizando as portas.

### 3.5. Renovação automática do Caddy

Normalmente, não é necessário executar nenhum comando de renovação.

O Caddy acompanha a validade dos certificados e realiza a renovação automaticamente.

Se o certificado não estiver sendo emitido ou renovado, consulte os registros:

```bash
sudo journalctl -u caddy -n 200 --no-pager
```

Identifique a mensagem de erro e verifique os requisitos de DNS, conectividade e armazenamento.

Não remova manualmente os certificados armazenados pelo Caddy e não reinstale o serviço como primeira tentativa de correção.

---

## 4. Verificar DNS e Cloudflare

Problemas de SSL também podem estar relacionados à configuração DNS ou ao Cloudflare.

### 4.1. Conferir os registros DNS

Acesse o painel do provedor responsável pelo DNS do domínio.

Confira se os registros do tipo A apontam para o endereço IP correto da VPS.

Verifique os domínios utilizados pelo sistema, incluindo:

- Domínio do frontend.
- Domínio do backend.
- Outros subdomínios utilizados na instalação.

Se o domínio estiver apontando para outro endereço IP, o servidor poderá não conseguir validar ou emitir o certificado corretamente.

Para consultar o endereço IP associado a um domínio, execute:

```bash
dig +short SEU_DOMINIO
```

Substitua `SEU_DOMINIO` pelo domínio que apresenta o problema.

### 4.2. Verificar as configurações do Cloudflare

Se o domínio utiliza Cloudflare, acesse:

**Cloudflare → SSL/TLS → Visão geral**

Quando o servidor de origem possui um certificado SSL válido, utilize:

**Full (strict)**

Esse modo exige que a conexão entre Cloudflare e a VPS também utilize um certificado válido.

Evite utilizar o modo Flexible quando o servidor de origem já possui HTTPS configurado, pois isso pode causar problemas de redirecionamento.

### 4.3. Verificar o proxy do Cloudflare

Na seção:

**Cloudflare → DNS → Registros**

Confira se os registros estão apontando para o IP correto.

Se houver suspeita de problema na comunicação entre Cloudflare e a VPS, um teste temporário com o proxy desativado (DNS only) pode ajudar a identificar a origem da falha.

Essa alteração deve ser feita com cautela e, após o teste, a configuração original deve ser restaurada.

---

## 5. Verificar as portas 80 e 443

Para que o servidor consiga emitir e disponibilizar certificados SSL utilizando os métodos HTTP convencionais, as portas necessárias precisam estar acessíveis.

As principais portas são:

| Porta | Protocolo | Finalidade |
|---|---|---|
| 80 | TCP | HTTP e validação de certificados |
| 443 | TCP | HTTPS e acesso seguro ao sistema |

Verifique o firewall do Ubuntu:

```bash
sudo ufw status
```

Se o UFW estiver ativo, confira se existem regras permitindo as portas 80 e 443.

Não altere as regras do firewall sem verificar também as regras de segurança do provedor da VPS.

---

## 6. Problemas comuns e possíveis causas

### Certificado SSL expirado

Possíveis causas:

- Falha na renovação automática.
- Domínio não está apontando corretamente para a VPS.
- Portas necessárias estão bloqueadas.
- Problemas de conectividade com a autoridade certificadora.

Procedimento:

- Identifique se a instalação utiliza Nginx ou Caddy.
- Consulte os registros do servidor correspondente.
- Execute os procedimentos específicos de diagnóstico e renovação.

### Erro NET::ERR_CERT_DATE_INVALID

Esse erro pode indicar:

- Certificado expirado.
- Certificado ainda não válido.
- Data e horário incorretos no computador ou servidor.

Verifique a data e o horário da VPS:

```bash
timedatectl
```

Se o horário estiver incorreto, investigue a sincronização de horário do sistema.

### Erro ERR_CERT_AUTHORITY_INVALID

Pode ocorrer quando o navegador não reconhece a autoridade certificadora responsável pelo certificado.

Confira se o domínio está utilizando um certificado público válido e se a cadeia de certificados está corretamente configurada.

Também verifique se não está sendo apresentado um certificado local ou autoassinado indevidamente.

### Erro ERR_SSL_PROTOCOL_ERROR

Pode estar relacionado a:

- Configuração incorreta de HTTPS.
- Conflito entre servidores web.
- Problemas de comunicação entre Cloudflare e a VPS.
- Serviço responsável pelo HTTPS parado.
- Portas 80 e 443 configuradas incorretamente.

Identifique o servidor utilizado e consulte os respectivos registros.

### Certificado não é emitido automaticamente no Caddy

Verifique:

- DNS apontando para o IP correto.
- Portas 80 e 443 acessíveis externamente.
- Serviço Caddy em execução.
- Domínio presente na configuração.
- Armazenamento de certificados com permissão de escrita e persistência.

Consulte:

```bash
sudo journalctl -u caddy -n 200 --no-pager
```

---

## 7. Quando solicitar suporte técnico

Se o problema persistir, encaminhe as seguintes informações para a equipe de suporte:

1. Domínio que apresenta o problema.
2. Print da mensagem apresentada pelo navegador.
3. Identificação do servidor utilizado (Nginx ou Caddy).
4. Resultado do comando de identificação:

```bash
sudo systemctl is-active nginx
sudo systemctl is-active caddy
```

5. Registros do serviço correspondente.

Para Nginx:

```bash
sudo journalctl -u nginx -n 100 --no-pager
```

Para Caddy:

```bash
sudo journalctl -u caddy -n 100 --no-pager
```

6. Informe se utiliza Cloudflare no domínio.

Com essas informações será possível identificar melhor a origem da falha e orientar o procedimento adequado.

---

## 8. Cuidados importantes

- Não execute comandos do Certbot em instalações que utilizam Caddy para gerenciar os certificados.
- Não reinstale o Nginx ou Caddy sem identificar a causa do problema.
- Não remova certificados existentes manualmente.
- Não altere arquivos de configuração sem orientação técnica.
- Não desative o firewall permanentemente para tentar corrigir problemas de SSL.
- Não altere as configurações do Cloudflare sem verificar como o servidor de origem está configurado.
- Não reinicie serviços repetidamente sem consultar os registros de erro.

**Resumo:** instalações antigas do Whazing utilizam Nginx e normalmente gerenciam certificados por meio do Certbot. Instalações novas utilizam Caddy, que realiza automaticamente a emissão e renovação dos certificados SSL. Sempre identifique o servidor antes de iniciar qualquer procedimento.