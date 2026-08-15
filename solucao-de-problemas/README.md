# Solução de Problemas

Se algo não está funcionando, siga esta ordem:

1. **Identifique o sintoma** na lista abaixo e abra a página correspondente.
2. Siga os passos **na ordem em que aparecem**.
3. Se o problema continuar, reúna as informações pedidas no final da página (logs, prints, resultado de comandos) e procure o **grupo de suporte**.

> 💡 **Dica geral:** muitos problemas são causados por **falta de espaço no disco**, **DNS incorreto** ou **containers parados**. Se não sabe por onde começar, veja [Sistema não abre ou parou de funcionar](sistema-nao-abre-ou-lento/sistema-nao-abre.md).

## 🧭 Índice de problemas

### 💬 WhatsApp e Mensagens

| Problema | Onde resolver |
| --- | --- |
| WhatsApp desconecta ou mensagens não chegam / são perdidas | [WhatsApp desconecta ou mensagens não chegam](whatsapp-e-mensagens/whatsapp-desconecta-ou-mensagens-nao-chegam.md) |
| Mensagens travadas e erro de conexão com o Redis no log | [Reinstalar o Redis](whatsapp-e-mensagens/reinstalar-redis.md) |
| Mensagem não está sendo enviada (número conectado) | [Mensagem não enviando](../canais-suportados/whatsapp-api-nao-oficial/mensagem-nao-enviando.md) |

### 🖥️ O Sistema Não Abre ou Está Lento

| Problema | Onde resolver |
| --- | --- |
| O sistema não abre, está lento ou parou de funcionar | [Sistema não abre ou parou de funcionar](sistema-nao-abre-ou-lento/sistema-nao-abre.md) |
| Sistema lento ou travando | [Sistema lento: como diagnosticar o servidor](sistema-nao-abre-ou-lento/diagnostico-de-lentidao-em-servidores-linux-com-docker.md) |
| Erro de certificado / site não carrega com HTTPS | [Erro de certificado (SSL)](sistema-nao-abre-ou-lento/problemas-com-ssl.md) |
| Página em branco ou botões que não funcionam | [Como verificar erros no Console do Navegador (Google Chrome)](sistema-nao-abre-ou-lento/como-verificar-erros-no-console-do-navegador-google-chrome.md) |

### 🔑 Acesso e Licença

| Problema | Onde resolver |
| --- | --- |
| Erro de licença ao acessar o sistema | [Erro de licença](acesso-e-licenca/erro-de-licenca.md) |

### 🛠️ Servidor e Banco de Dados

| Problema | Onde resolver |
| --- | --- |
| Banco de dados sobrecarregado / muitas conexões | [PgBouncer (banco de dados sobrecarregado)](servidor-e-banco-de-dados/instalacao-e-configuracao-do-pgbouncer-whazing.md) |
| Portas bloqueadas / sistema sem acesso externo | [Como verificar e reiniciar o Firewall (UFW) no Linux](servidor-e-banco-de-dados/como-verificar-e-reiniciar-o-firewall-ufw-no-linux.md) |

## 📚 Não encontrou o seu problema?

Alguns problemas têm solução em outras seções da documentação:

* **Problemas com webhooks, integrações ou ausência de resposta em integrações:** seção [Integrações](../integracoes/README.md).
* **Problemas com chatbot, automações ou campanhas:** seção [Funcionalidades](../funcionalidades/README.md).
* **Conexão de canais (API Oficial, Telegram, SMS, Instagram, Facebook, TikTok):** seção [Canais Disponíveis](../canais-suportados/README.md).

## 🆘 Quando procurar o suporte

Procure o suporte quando:

* Você seguiu os passos da página e o problema **continua**;
* O erro envolve **dados importantes** ou **todos os canais** ao mesmo tempo;
* O sistema não abre **após uma atualização** e você não tem snapshot/backup.

Ao entrar em contato, informe: o que estava fazendo, mensagens de erro, prints e os **logs do sistema** (veja [Acessando Logs](../instalacao-and-vps/acessando_logs.md)).
