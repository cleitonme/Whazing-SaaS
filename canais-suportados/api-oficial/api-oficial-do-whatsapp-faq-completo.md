# API Oficial do WhatsApp - FAQ Completo

### O que é a API Oficial do WhatsApp?

A API Oficial do WhatsApp Business Platform é a solução empresarial da Meta para atendimento, automação, integrações e envio de mensagens em larga escala.

Diferente do WhatsApp comum ou da API não oficial, a API Oficial é homologada pela Meta e possui maior estabilidade e segurança.

***

## Requisitos para Utilizar a API Oficial

### Quais são os requisitos obrigatórios?

Para ativar a API Oficial, é necessário possuir:

* Conta Facebook ativa
* Business Manager configurado
* Portfólio Empresarial (Business Portfolio)
* Conta WhatsApp Business
* Empresa verificada pela Meta (quando exigido)

Sem esses requisitos não será possível concluir a ativação da API Oficial.

***

### Preciso ter um Business Manager?

Sim.

Toda conta da API Oficial precisa estar vinculada a um Business Manager da Meta.

***

### Preciso criar um Portfólio Empresarial?

Sim.

A Meta utiliza o Portfólio Empresarial para organizar os ativos da empresa, incluindo contas do WhatsApp Business, páginas, aplicativos e contas de anúncios.

***

### Minha empresa precisa estar verificada?

Na maioria dos casos sim.

A Meta pode limitar recursos, volume de mensagens e expansão da conta até que a empresa seja validada.

***

### Como verificar se minha empresa já foi aprovada pela Meta?

Acesse:

#### Business Settings

Business Settings → Informações da Empresa

[https://business.facebook.com/settings/info](https://business.facebook.com/settings/info?utm_source=chatgpt.com)

#### WhatsApp Manager

WhatsApp Manager → Configurações da Conta

Nessas páginas é possível consultar:

* Status da verificação
* Documentos enviados
* Pendências
* Aprovações da Meta

[https://business.facebook.com/wa/manage/home/?utm_source](https://business.facebook.com/wa/manage/home/?utm_source=chatgpt.com)

***

## Cobranças da Meta

### A plataforma já inclui as cobranças da Meta?

Não.

Os valores cobrados pela Meta não estão incluídos no valor do plano contratado.

As cobranças são realizadas diretamente pela Meta.

***

### Quem define os preços das conversas e mensagens?

A própria Meta.

Os valores variam conforme:

* País do destinatário
* Categoria da mensagem (marketing, utilidade, autenticação, serviço, Meta Business Agent)
* Tipo da mensagem enviada (template ou não-template)

***

### Onde posso consultar os preços oficiais?

Os preços atualizados podem ser consultados diretamente na documentação oficial da Meta:

* Preços atuais: [https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/)
* Mudanças futuras de cobrança (a partir de outubro/2026): [https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages/](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages/)

***

### ⚠️ IMPORTANTE: Mudança na cobrança a partir de outubro de 2026

A Meta anunciou um novo modelo de cobrança para mensagens que **não são Template**, ou seja, respostas enviadas dentro da janela de atendimento de 24 horas. Até então, esse tipo de mensagem não gerava cobrança de mensageria.

**O que muda:**

* **A partir de 1º de outubro de 2026** — passa a ser cobrado, por mensagem, o envio de **mensagens de serviço** (respostas dentro da janela de 24h). Essas mensagens não eram cobradas desde novembro de 2024.
* **A partir de 1º de outubro de 2026** — passa a ser cobrado, por mensagem, o envio de **mensagens de utilidade (utility)** dentro da janela de 24h. Essas mensagens não eram cobradas desde julho de 2025.

Ou seja: a partir de outubro/2026, **toda mensagem não-template enviada em resposta a um cliente passará a ter cobrança da Meta**.

***

### Como funciona a cobrança das mensagens de serviço e utilidade a partir de outubro de 2026?

* **Medidor:** por mensagem (igual ao modelo já usado para templates).
* **Taxas:** serão as mesmas taxas já praticadas para mensagens de utilidade e autenticação, variando por país.
* Não há níveis de volume (volume tiers) para mensagens de serviço — diferente de utilidade e autenticação, que continuam tendo essa possibilidade.
* A Meta ainda vai publicar as taxas exatas que valerão a partir de outubro/2026 até **1º de setembro de 2026**.

***

### A janela de entrada gratuita de 72 horas (Click to WhatsApp Ads) muda com isso?

Não.

Mensagens enviadas dentro da janela gratuita de 72 horas (originadas de anúncios Click-to-WhatsApp ou botões de call-to-action do Facebook) continuam gratuitas quanto à entrega da mensagem.

***

### Quem paga essa cobrança: a Whazing ou o cliente final?

Essas cobranças são feitas pela Meta diretamente à empresa dona da conta do WhatsApp Business (WABA), não estão incluídas no valor do plano contratado com a Whazing e não são cobradas pela Whazing.

***

## Templates

### O que são Templates?

Templates são mensagens previamente aprovadas pela Meta.

Eles permitem iniciar ou retomar conversas fora da janela de 24 horas.

***

### Quando devo usar Templates?

Exemplos:

* Cobranças
* Confirmações
* Agendamentos
* Lembretes
* Recuperação de clientes
* Campanhas promocionais
* Avisos automáticos

***

### Quanto custa um Template?

Os valores normalmente variam entre US$ 0,01 e US$ 0,07 por conversa.

O valor exato depende da categoria definida pela Meta e do país do destinatário. Consulte sempre a documentação oficial de preços da Meta, pois os valores podem ser atualizados trimestralmente.

***

### Quem aprova os Templates?

A própria Meta.

A plataforma apenas envia a solicitação para análise.

***

### Quanto tempo leva para aprovar um Template?

Normalmente alguns minutos, mas pode variar conforme análise da Meta.

***

### Um Template pode ser rejeitado?

Sim.

A Meta pode reprovar mensagens que violem suas políticas ou contenham conteúdo inadequado.

***

## Limitações da API Oficial

### A API Oficial funciona com grupos?

Depende da modalidade utilizada.

No Modo Coexistência, o número continua conectado ao aplicativo WhatsApp Business e os grupos permanecem acessíveis normalmente pelo celular.

Porém, a API Oficial não possui recursos para automação, leitura ou gerenciamento de mensagens de grupos através da plataforma.

***

### Posso utilizar grupos pela plataforma?

Não.

Mesmo que o número participe de grupos no aplicativo WhatsApp Business, a API Oficial não disponibiliza mensagens de grupos para automações, atendimentos ou integrações da plataforma.

***

### Posso utilizar o WhatsApp no celular junto com a API Oficial?

Sim, quando a conta estiver configurada no Modo Coexistência.

Nesse modo, o mesmo número pode ser utilizado simultaneamente no aplicativo WhatsApp Business e na API Oficial.

A disponibilidade desse recurso depende da modalidade contratada e dos recursos liberados pela Meta.

***

### Posso fazer ligações de voz?

Depende da modalidade utilizada.

Se o número estiver em Modo Coexistência, as chamadas continuam funcionando normalmente pelo aplicativo WhatsApp Business.

Além disso, a Meta já disponibiliza recursos de chamadas por voz via API para números conectado via api nuvem.

***

### Posso fazer chamadas de vídeo?

Chamadas de vídeo podem continuar disponíveis pelo aplicativo WhatsApp Business quando utilizadas em conjunto com o Modo Coexistência.

***

### Posso migrar um número já existente para a API Oficial?

Sim.

Na maioria dos casos é possível migrar um número já utilizado no WhatsApp para a API Oficial.

Dependendo da configuração escolhida, o número poderá operar exclusivamente pela API ou em Modo Coexistência, permitindo o uso simultâneo do aplicativo WhatsApp Business.

***

## Qualidade e Limites

### Existe limite de mensagens?

Sim.

A Meta define limites de envio por níveis (tiers).

Conforme a qualidade da conta aumenta, os limites também aumentam.

***

### O que reduz a qualidade da conta?

Alguns exemplos:

* Bloqueios frequentes
* Denúncias de spam
* Alto volume de reclamações
* Conteúdo indesejado

***

### Posso ser bloqueado pela Meta?

Sim.

Contas que violam as políticas da Meta podem sofrer restrições temporárias ou permanentes.

***

## Dúvidas Frequentes

### A API Oficial é mais estável que APIs não oficiais?

Sim.

Por ser homologada pela Meta, a API Oficial oferece maior estabilidade e menor risco de bloqueios.

***

### Posso enviar campanhas em massa?

Sim, desde que respeite as políticas da Meta e utilize Templates aprovados quando necessário.

***

### A API Oficial garante que minhas mensagens serão entregues?

Não.

A entrega depende de diversos fatores, incluindo disponibilidade do número destinatário, qualidade da conta e políticas da Meta.

***

### A Whazing aprova empresas ou Templates?

Não.

A aprovação de empresas, contas comerciais e Templates é realizada exclusivamente pela Meta.

***

### Posso usar múltiplos atendentes?

Sim.

A API Oficial foi desenvolvida para operação multiusuário e atendimento em equipe.

***

### Posso integrar com CRM, ERP ou sistemas próprios?

Sim.

A API Oficial permite integrações através de APIs e Webhooks.

***

### A partir de outubro de 2026, atender um cliente pelo WhatsApp Oficial vai custar mais?

Sim, potencialmente.

Até setembro de 2026, responder um cliente dentro da janela de 24h (mensagem de serviço ou utilidade) não gera cobrança de mensageria. A partir de outubro de 2026, cada uma dessas mensagens passa a ter uma cobrança por mensagem, no mesmo padrão de preço já usado para templates de utilidade e autenticação. Recomendamos acompanhar a publicação das taxas oficiais pela Meta (prevista até 1º de setembro de 2026) para dimensionar o impacto no orçamento de mensageria.