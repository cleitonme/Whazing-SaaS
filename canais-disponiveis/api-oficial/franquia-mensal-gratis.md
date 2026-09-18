# 🎁 Franquia mensal grátis do WhatsApp

Os canais de **API Oficial do WhatsApp** conectados no sistema têm uma **franquia mensal de mensagens grátis**, concedida pelo próprio WhatsApp (Meta): **a cada mês, cada número conectado recebe uma quantidade de mensagens de atendimento gratuitas** — o sistema trabalha com o valor padrão de **1.000 mensagens grátis por número**, acompanhando o uso desse saldo.

> ⚠️ **Importante:** essa franquia é uma **concessão da Meta/WhatsApp**, não da Whazing. O sistema **exibe e acompanha** o uso — a cobrança (quando houver) é feita pela Meta diretamente à empresa dona da conta. Veja detalhes de cobrança no [FAQ da API Oficial](api-oficial-do-whatsapp-faq-completo.md).

---

## 📍 Onde o contador aparece

O acompanhamento aparece em **três lugares**:

1. **No cartão do canal oficial** (tela de conexões do WhatsApp) — a linha **"Uso deste mês"** com uma **barra de progresso** mostrando **quantas mensagens foram usadas / quantas eram grátis**, colorida quando o uso passa da franquia;
2. **No Relatório de custos do WhatsApp Oficial** (menu **Relatórios → Financeiro**) — a seção **"Franquia mensal grátis do WhatsApp"**, com o detalhamento por canal;
3. **Na Calculadora do WhatsApp** — nos resumos de custo das mensagens oficiais.

**📸 Sugestão de print:** card do canal oficial com a barra "Uso deste mês".

---

## 📖 O que significa cada informação

No relatório, cada canal conectado mostra:

| Informação                            | O que significa                                                                                          |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Uso deste mês**                     | O par "utilizadas / gratuitas" (ex.: 640 / 1000) e a barra de progresso                                   |
| **Período: {início} a {fim}**         | Os dias do ciclo atual da franquia                                                                        |
| **Renova em {data}**                  | Quando o contador recomeça                                                                                |
| **{qtd} mensagens grátis restantes**   | Quanto ainda cabe dentro da franquia no mês                                                               |
| **{qtd} mensagens acima da franquia**  | Quanto já passou do saldo gratuito no mês                                                                 |
| **Custo estimado do excedente**        | Estimativa de custo das mensagens que passaram da franquia (baseada nas taxas das mensagens correspondentes) |
| **Utilizadas / Gratuitas / Excedentes** | O detalhamento do consumo no período                                                                      |

---

## 🔄 Como funciona o contador

* O sistema explica assim: _"O WhatsApp libera {1.000} mensagens de atendimento grátis por número conectado a cada mês. **O contador reinicia todo mês**."_
* **Quando o contador muda:** a cada mensagem de atendimento enviada pelo canal oficial no mês corrente;
* **Quando a franquia renova:** na data mostrada em **"Renova em"**, o uso recomeça do zero e a barra volta a ficar livre;
* **Aviso de excesso:** quando o mês fecha com uso acima da franquia, o sistema avisa: _"Você já utilizou as {1.000} mensagens gratuitas deste mês. **As próximas mensagens podem gerar cobrança.**"_
* **Período de transição:** enquanto a nova regra de cobrança da Meta não entra em vigor, o sistema pode informar que as mensagens **ainda são gratuitas** até a data de mudança: _"A partir de {data}, mensagens acima da franquia podem gerar custo. Até lá, é tudo gratuito."_

> 💡 **Cada número tem sua própria franquia.** Uma empresa com 3 números oficiais conectados acompanha 3 contadores independentes — um não compensa o outro.

---

## 💡 Como usar essa informação

* **Acompanhe a barra** do canal ao longo do mês: perto do fim do ciclo, dá para dosar o envio (sem cortar o atendimento);
* **Reduza o desperdício** com os recursos de economia:
  * [Concatenador de Mensagens](concatenador-de-mensagens.md) — junta mensagens enviadas em sequência;
  * [Chat externo por link](chat-externo-por-link.md) — continua a conversa por uma página web, sem mensagem oficial;
* **Analise o mês** no [Relatório de custos do WhatsApp Oficial](../../funcionalidades/relatorios/README.md) para entender para onde o consumo vai.

---

## ❓ Problemas comuns

**"O contador do meu canal aparece zerado."**
A franquia é exibida apenas em **canais de API Oficial** (WABA/Hub WhatsApp) e **depois que há consumo no mês** — canais não oficiais não têm esse acompanhamento.

**"Minhas mensagens não aparecem no contador."**
O acompanhamento considera as mensagens de atendimento da API Oficial no mês corrente. Mensagens de outros canais (não oficiais, Instagram etc.) não entram nessa conta.

**"A barra mudou de cor."**
Ela fica na cor de alerta quando o uso **passa da franquia** — sinal de que as próximas mensagens podem gerar cobrança da Meta.

**"O valor da franquia é sempre 1.000?"**
Esse é o valor padrão de **mensagens de serviço grátis por número/mês** concedido pelo WhatsApp. O sistema mostra sempre o valor vigente de cada canal — e a configuração do sistema SaaS pode ajustar a franquia ofertada.

---

> 📄 Veja também: [API Oficial do WhatsApp - FAQ Completo](api-oficial-do-whatsapp-faq-completo.md) · [Concatenador de Mensagens](concatenador-de-mensagens.md) · [Chat externo por link](chat-externo-por-link.md)
