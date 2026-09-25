# Etapas (Colunas)

As **etapas** são as colunas do seu quadro — representam as fases do seu processo. Um funil de vendas clássico pode ter etapas como: _Leads → Contato feito → Proposta enviada → Fechado_.

### Criar uma etapa

1. Acesse o quadro desejado
2. Clique no ícone ⚙️ **Gerenciar Etapas** na barra superior
3. Clique em **+ Nova Etapa**
4. Preencha:
   * **Nome** — obrigatório
   * **Descrição** — aparece como tooltip no cabeçalho da coluna
   * **Cor** — identifica visualmente a etapa
   * **Ícone** — opcional
   * **Limite de cards (WIP)** — define quantos cards podem estar nessa etapa simultaneamente
   * **Coluna bloqueada** — impede arrastar cards para essa etapa
   * **Etapa de negociação ganha** e **Etapa de negociação perdida** — dão significado comercial à etapa (veja abaixo)

<figure><img src="../../.gitbook/assets/novaetapa.png" alt=""><figcaption></figcaption></figure>

### Limite WIP

WIP significa _Work In Progress_ — cards em andamento. Se você definir limite 5 em "Em Negociação", o sistema avisa visualmente quando a coluna atingir esse número.

Isso evita gargalos: a equipe sabe que precisa avançar os cards antes de puxar mais.

<figure><img src="../../.gitbook/assets/limitewip.png" alt=""><figcaption></figcaption></figure>

### Coluna bloqueada

Uma coluna bloqueada não aceita cards por arrastar. É útil para etapas finais como "Cancelado" ou "Perdido" — o card só chega lá via ação deliberada, não por acidente no drag-and-drop.

### Etapa de negociação ganha ou perdida

Além do controle de fluxo, uma etapa pode marcar o **desfecho comercial** dos cards:

* **"Etapa de negociação ganha"** — os cards que chegarem a essa etapa **contam como ganhos**. A tela resume: _"As negociações que chegarem aqui contam no ganho do mês"_ — é essa marcação que alimenta o relatório [Meta de Vendas](../relatorios/meta-de-vendas.md) e o evento de status nos [webhooks do Kanban Pro](../../integracoes/webhooks/webhook-agenda-kanban-kanbanpro.md).
* **"Etapa de negociação perdida"** — os cards que chegarem a essa etapa **saem do pipeline em aberto**: _"As negociações que chegarem aqui saem do pipeline em aberto"_.

> 💡 Tenha **uma** etapa de ganho e **uma** de perdida por quadro (ex.: "Fechado/Ganho" e "Perdido"). Sem essa marcação, o sistema não sabe quando uma negociação venceu — e o valor do card não entra na Meta de Vendas.

### Reordenar etapas

No gerenciador de etapas, arraste as linhas pelo ícone (≡) para reorganizar a ordem das colunas no quadro.

### Deletar uma etapa

Ao deletar uma etapa, os cards que estão nela são **arquivados automaticamente** (não são perdidos). Você pode recuperá-los pela função de cards arquivados.
