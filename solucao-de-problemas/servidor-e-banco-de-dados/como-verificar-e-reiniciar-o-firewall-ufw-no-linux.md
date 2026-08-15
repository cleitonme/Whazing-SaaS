# 🔥 Como verificar e reiniciar o Firewall (UFW) no Linux

O UFW (Uncomplicated Firewall) é o firewall padrão das distribuições Ubuntu e Debian. Ele controla quais portas e serviços podem ser acessados pela internet.

### 1. Verificar se o UFW está ativo

Execute o comando abaixo:

```bash
sudo ufw status
```

Exemplo de retorno:

```bash
Status: active
```

Se aparecer **active**, o firewall está funcionando normalmente.

***

### 2. Verificar regras configuradas

Para visualizar todas as portas liberadas:

```bash
sudo ufw status numbered
```

Exemplo:

```bash
Status: active

[1] 22/tcp     ALLOW IN Anywhere
[2] 80/tcp     ALLOW IN Anywhere
[3] 443/tcp    ALLOW IN Anywhere
```

***

### 3. Verificar informações detalhadas

Para exibir configurações avançadas do firewall:

```bash
sudo ufw status verbose
```

Este comando mostra:

* Status atual
* Política padrão
* Regras aplicadas
* Configurações IPv4 e IPv6

***

### 4. Reiniciar o Firewall

Se houver suspeita de problemas ou alterações recentes, reinicie o UFW:

#### Método 1 (Recomendado)

```bash
sudo systemctl restart ufw
```

#### Método 2

```bash
sudo ufw disable
sudo ufw enable
```

⚠️ Atenção: ao utilizar o método 2, confirme que a porta SSH (22) está liberada para evitar perda de acesso ao servidor.

***

### 5. Iniciar o Firewall

Caso esteja desativado:

```bash
sudo ufw enable
```

Após executar, o sistema solicitará confirmação.

***

### 6. Desativar o Firewall

Se necessário para testes:

```bash
sudo ufw disable
```

⚠️ Recomendado apenas para diagnóstico temporário.

***

### 7. Verificar se o serviço está funcionando

```bash
sudo systemctl status ufw
```

Se estiver funcionando corretamente, aparecerá:

```bash
Active: active (exited)
```

***

### 8. Iniciar o serviço manualmente

```bash
sudo systemctl start ufw
```

***

### 9. Parar o serviço

```bash
sudo systemctl stop ufw
```

***

### 10. Configurar inicialização automática

Para garantir que o firewall seja iniciado junto com o servidor:

```bash
sudo systemctl enable ufw
```

***

### 11. Verificar quais portas estão em uso

Este comando mostra todos os serviços escutando conexões:

```bash
sudo ss -tulpn
```

Exemplo:

```bash
tcp LISTEN 0 128 *:80
tcp LISTEN 0 128 *:443
tcp LISTEN 0 128 *:3000
```

***

### 12. Verificar portas específicas

Para conferir rapidamente se determinadas portas estão sendo utilizadas:

```bash
sudo lsof -i :80 -i :443 -i :3000 -i :8080
```

Portas comuns utilizadas pelo Whazing:

| Porta | Utilização |
| ----- | ---------- |
| 80    | HTTP       |
| 443   | HTTPS      |
| 5432  | PostgreSQL |

***

### Dicas para solução de problemas

Se o sistema não estiver acessível externamente:

1. Verifique se o UFW está ativo.
2. Confirme se as portas necessárias estão liberadas.
3. Verifique se o serviço está escutando na porta correta.
4. Reinicie o UFW.
5. Reinicie o serviço afetado (Frontend, Backend, Redis ou PostgreSQL).
6. Teste novamente o acesso.

Na maioria dos casos, problemas de acesso estão relacionados a portas bloqueadas pelo firewall ou serviços que não estão em execução.
