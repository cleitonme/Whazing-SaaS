# 🔋 Limite de uso da IA

Os recursos de **IA do sistema** — o **Copiloto** da tela de atendimento, a transcrição/melhora de texto, os resumos e as sugestões de resposta — podem funcionar de duas formas:

* **IA compartilhada do sistema** — não precisa configurar nada: o plano (ou um adicional contratado) oferece um **limite mensal de uso**;
* **IA própria** — a empresa conecta a **própria chave de API** (configurável em [Configuração dos Provedores de IA](configuracao-dos-provedores-de-ia.md)) e usa o seu próprio provedor.

Esta página explica **o que acontece quando o limite mensal da IA compartilhada acaba** — no atendimento e nas configurações.

---

## ✅ Enquanto existe limite disponível

Tudo funciona normalmente: você usa o **✨ Assistente IA** no campo de mensagem (Melhorar Texto, Perguntar ao Copiloto, Resumir Conversa, Sugerir Resposta) e o consumo mensal vai sendo registrado.

> 💡 Quando o consumo chega perto do limite, o sistema avisa: _"Você já usou {percent}% do limite mensal da IA compartilhada do sistema para este recurso."_

---

## 🚫 Quando o limite acaba

Ao tentar usar um recurso de IA com o limite esgotado, aparece o aviso **"Limite de IA atingido"**:

> _"O limite mensal de uso da IA da sua empresa foi atingido. Para continuar utilizando o Copilot, solicite a um administrador ou supervisor que adquira mais acesso."_

**E o que muda na tela, depende do seu perfil:**

| Perfil                | O que aparece quando o limite acaba                                                                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Administrador / Supervisor** | Abre direto a janela **"Contratar Copilot"** com os **pacotes de adicional** disponíveis, já com valores para **comprar na hora**                                      |
| **Atendente**         | Aparece o diálogo **"Limite de IA atingido"** com a orientação de **solicitar a um administrador ou supervisor** — não há botão de compra para esse perfil             |

### Como funciona a compra do adicional (administrador/supervisor)

Na janela **"Contratar Copilot"** aparecem os pacotes oferecidos pelo sistema. Para cada pacote você vê:

* O **nome** do adicional e o quanto ele soma ao limite (ex.: **+{quantidade} {Requisições ou Tokens}/mês**);
* O **valor mensal** (ex.: R$ 00,00/mês);
* O **valor de hoje (pró-rata)** — proporcional aos dias restantes do mês — e o **valor da próxima renovação**.

Escolha o pacote, clique em **Comprar agora** e conclua o pagamento. Depois da confirmação, o **limite é liberado automaticamente** e o Copiloto volta a funcionar no mesmo instante, sem recarregar nada.

> ⚠️ A disponibilidade e os valores dos pacotes são configurados pelo administrador do sistema (SaaS) — podem variar de acordo com o plano.

---

## 📊 Acompanhando o limite: "Serviços de IA"

Em **Configurações → Serviços de IA**, quem é administrador ou supervisor encontra o painel **"Serviços de IA"** com um cartão por recurso de IA (Copilot, Smart Reception, Embeddings, Resposta automática em redes sociais). Em cada cartão:

* **Status** — etiqueta com a situação: **Ativo**, **Perto do limite**, **Limite esgotado** ou **Não contratado**;
* **Limite mensal** — quanto o plano/adicional oferece;
* **Consumo atual** — quanto já foi usado no mês (fica laranja quando está perto do limite e vermelho quando esgota);
* **Origem** — se o limite vem do plano (**Incluído no plano**), de um adicional (**Adicional contratado**) ou dos dois (**Plano + adicional**);
* **Próxima renovação** — a data em que o contador recomeça;
* Botão de ação — quando o status não está "Ativo", aparece **Comprar acesso** (recurso não contratado) ou **Ampliar limite** (limite esgotado), abrindo a mesma janela de compra dos adicionais.

> 💡 **A chave de API própria nunca para por limite do sistema:** se a empresa usa a chave dela, ela **continua funcionando normalmente** mesmo com a IA compartilhada esgotada — o próprio aviso do painel lembra isso.

---

## ❓ Problemas comuns

**"Tentei usar o Copiloto e apareceu 'Limite de IA atingido'."**
O consumo mensal da IA compartilhada da empresa chegou ao fim. Se você for administrador/supervisor, compre o adicional na própria janela; se for atendente, solicite a um administrador ou supervisor.

**"Comprei o adicional e o Copiloto continua bloqueado."**
Espere alguns segundos e tente de novo — a liberação é automática, mas a tela pode estar com os dados antigos. Se persistir, recarregue a página.

**"Não aparece a opção de comprar para mim."**
A compra do adicional no atendimento aparece **apenas para administradores e supervisores**. Atendentes recebem a orientação de solicitar internamente.

**"A empresa já configura uma chave de IA própria e ainda assim apareceu o aviso."**
Isso acontece quando algum recurso específico está configurado para usar a IA compartilhada do sistema. Verifique em [Configuração dos Provedores de IA](configuracao-dos-provedores-de-ia.md) ou contrate o adicional para esse recurso.

---

> 📄 Veja também: [Assistente IA — Menu Copiloto](README.md) · [Perguntar ao Copiloto IA](perguntar-ao-copiloto-ia.md) · [Sugerir Resposta com IA](sugerir-resposta-com-ia.md) · [Resumir Conversa com IA](resumir-conversa-com-ia.md) · [Melhorar Texto de Atendimento](melhorar_texto_atendimento.md)
