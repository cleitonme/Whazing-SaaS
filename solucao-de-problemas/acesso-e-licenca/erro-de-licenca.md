---
description: An error occurred while validating the license / O sistema recebe mensagens, mas não envia
icon: key
---

# Erro de Licença

## 📭 O sistema recebe mensagens, mas não envia

> **Relato típico do cliente:**
> "Meu Whazing só está chegando mensagens, não envia."

Esse sintoma — as mensagens **chegam normalmente**, mas **nenhuma é enviada** — é um dos efeitos mais comuns de **licença bloqueada** e, na maioria das vezes, **não é um problema do WhatsApp nem do canal**.

Quando a licença **Premium** fica bloqueada — por **falta de pagamento** ou por **erro na validação** — o sistema:

* mantém a **recepção** de mensagens funcionando;
* **interrompe o envio de mensagens imediatamente**, até que a licença volte a ser válida.

O mesmo vale quando a tela do sistema exibe o erro *"An error occurred while validating the license"* (detalhes abaixo).

### ✅ Como verificar o status da licença

1. Acesse o **Painel SaaS**.
2. Verifique as informações da licença da sua empresa — **se houver qualquer erro de licença, ele será exibido nele** (bloqueio por pagamento em atraso, falha de validação etc.).

Depois, siga o cenário que se encaixa na sua situação:

| O que você vê no Painel SaaS                        | O que fazer                                                              |
| --------------------------------------------------- | ------------------------------------------------------------------------ |
| Pagamento em atraso / licença bloqueada             | Regularize o pagamento e clique em **"Reiniciar Whazing"** → passo 🔹 1   |
| Sem problema de pagamento, mas o envio não volta    | Provável erro de validação (IP, firewall ou DNS) → passo 🔹 3             |
| Não deseja mais manter o Premium                    | Voltar para a versão Free de forma segura → passo 🔹 2                    |

> 💡 **Importante:** após **qualquer** regularização da licença, clique em **"Reiniciar Whazing"** no Painel SaaS para recarregar a licença — só regularizar o pagamento não reativa o envio automaticamente.

***

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
