---
description: An error occurred while validating the license
icon: key
---

# Erro de Licença

## ❗ Erro ao validar a licença

**Mensagem de erro:**

> `An error occurred while validating the license`

***

### 💡 Descrição

Esse erro ocorre durante a verificação da licença do sistema.\
Caso você possua uma **licença Premium** e o sistema não consiga mais validá-la, ele **interromperá o envio de mensagens imediatamente**

⚠️ **Importante:**\
O sistema **não retorna automaticamente** para a versão Free.\
A mudança para o modo gratuito **deve ser feita manualmente** no **Painel SaaS**, garantindo que o sistema não exiba anúncios ou altere informações antes da sua confirmação.

***

### 🔧 Como resolver

#### 🔹 1. Licença bloqueada por falta de pagamento

Se o pagamento da sua licença foi esquecido e o acesso bloqueado:

1. Realize o pagamento normalmente.
2. Após a liberação, acesse o **Painel SaaS**.
3. Clique em **“Reiniciar Whazing”** para recarregar a licença e retomar o funcionamento normal.

***

#### 🔹 2. Deseja voltar à versão gratuita

Se não quiser renovar a versão Premium:

1. Acesse o **Painel SaaS**.
2. Clique na opção **“Voltar para versão Free”**.
3. Após confirmar, o sistema:
   * Voltará a exibir **anúncios**;
   * Mostrará o **nome real do sistema** aos clientes.

> 💡 Essa ação é necessária para evitar erros de licença e garantir que a transição para o modo Free ocorra de forma segura, sem prejuízos ao envio de mensagens.

***

🔹 **3. Pagamento realizado, mas o erro continua**

Se você já efetuou o pagamento e o erro de licença ainda persiste, verifique os pontos abaixo:

**Possíveis causas e soluções:**

* **🔄 Reinicialização**\
  Pode ter ocorrido uma falha de comunicação temporária.\
  Tente:
  * Reiniciar o Whazing
  * Reiniciar sua VPS
* **🌐 Alteração de IP**\
  A licença é validada pelo IP da VPS.\
  Se o IP foi alterado, a licença pode ter sido invalidada.
* **🔒 Firewall ou bloqueios**\
  Um firewall ou regra de rede pode estar impedindo a comunicação com o servidor de licenças.\
  Verifique:
  * Se houve mudanças recentes no firewall
  * Libere ou desative temporariamente para teste
  * Após ajustes, reinicie a VPS
* **📡 Problemas de DNS / conexão**\
  Confirme se sua VPS está conseguindo se comunicar com nossos servidores:
  * Teste com: `ping whazing.com.br`
  * Se não houver resposta, pode ser problema de DNS ou rede

***

**❗ Ainda não resolveu?**\
Entre em contato com o suporte técnico para análise detalhada.
