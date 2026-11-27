# Catálogo no WhatsApp (API Plus)

Além do catálogo do Whazing, a empresa pode manter um **catálogo de produtos dentro do WhatsApp**. Esta página explica como **enviar, importar e controlar** os produtos nesse catálogo.

> ⚠️ **Disponibilidade:** a tela informa que a sincronização de catálogo de produtos está disponível **somente no canal WhatsApp Plus**. Se a empresa não tem um canal com esse recurso, os botões de sincronização não aparecem — e seus produtos continuam disponíveis normalmente no sistema.

---

## 📍 Onde encontrar

Em **Cadastros → Produtos e catálogo**, acima da lista de produtos.

* Se a empresa tem um canal compatível, aparece o cartão **Canal do WhatsApp**, com a lista de canais e os botões de sincronização.
* Se não tem, aparece o aviso explicando que a sincronização está disponível somente no canal WhatsApp Plus.

---

## 🔄 Como funciona

O catálogo do Whazing e o catálogo do WhatsApp são **dois lugares diferentes**:

| Catálogo | O que é |
| --- | --- |
| **Catálogo do Whazing** | Onde você cadastra e organiza os produtos (e usa no atendimento, na vitrine e na IA) |
| **Catálogo do WhatsApp** | A vitrine que o cliente vê dentro do WhatsApp, no canal escolhido |

A sincronização **copia** os produtos para o catálogo do WhatsApp. Nada é enviado sem você pedir.

---

## 📤 Enviar produtos para o WhatsApp

1. No cartão **Canal do WhatsApp**, escolha o canal desejado.
2. Escolha o que enviar:
   * **Enviar todos os liberados** — envia todos os produtos marcados com **"Permitir enviar este produto para o WhatsApp"**;
   * **Enviar para o WhatsApp** nos produtos selecionados (marque as caixas na lista e use a barra de ações em lote);
   * **Enviar para o WhatsApp** no menu **⋮** de um produto específico.
3. Confirme.

O envio **não é imediato**: os produtos entram em uma **fila** e são publicados **um por vez, em segundo plano**.

* Uma faixa azul mostra **"Enviando ao WhatsApp: X de Y"** com barra de progresso.
* Você **pode fechar a tela** — o envio continua no backend.
* A tela consulta o andamento a cada poucos segundos enquanto o lote roda.
* Se algum produto falhar, a faixa mostra a quantidade de falhas.

> 💡 Ao terminar, se houve falhas, abre uma janela com o **resultado do envio** (enviados e com falha) e o botão **Tentar de novo nos que falharam**.

### Liberar um produto para o envio em lote

No cadastro do produto, na seção **WhatsApp**, ligue **Permitir enviar este produto para o WhatsApp**.

> 💡 A opção só aparece quando a empresa tem um canal com catálogo. Marcá-la **não envia nada sozinho**: o produto apenas passa a entrar no envio em lote.

---

## 📥 Trazer do WhatsApp

O botão **Trazer do WhatsApp** faz o caminho contrário: lê o catálogo que já existe no canal e traz os produtos para o Whazing.

Ao terminar, a mensagem informa:

* quantos produtos foram **trazidos** (novos); e
* quantos foram **vinculados** (já existiam e foram ligados ao produto do WhatsApp).

> 💡 Use essa opção quando o catálogo do WhatsApp já estiver montado e você quiser começar a gerenciá-lo pelo Whazing.

---

## 🏷️ Situação de cada produto

Com um canal selecionado, cada produto mostra um selo com o estado da sincronização **naquele canal**, e o filtro **Situação** passa a oferecer esses estados:

| Estado | O que significa |
| --- | --- |
| **Não enviado** | O produto ainda não foi para o catálogo do WhatsApp |
| **Na fila** | Está aguardando a vez no envio em lote |
| **Enviando** | Está sendo publicado neste momento |
| **Sincronizado** | Está no catálogo do WhatsApp |
| **Precisa atualizar** | Foi publicado, mas os dados mudaram depois disso |
| **Falha ao sincronizar** | O envio não foi concluído (passe o mouse sobre o selo para ver o motivo) |

Produtos publicados também podem mostrar o selo **Oculto no WhatsApp**.

> 💡 A situação é **por canal**. Um produto pode estar sincronizado em um canal e não enviado em outro.

---

## 👁️ Ocultar, mostrar e excluir no WhatsApp

No menu **⋮** de um produto que já foi publicado aparecem ações extras:

| Ação | O que faz |
| --- | --- |
| **Enviar para o WhatsApp** | Publica ou atualiza o produto naquele canal |
| **Ocultar no WhatsApp** | Esconde o produto do catálogo do WhatsApp, sem apagar nada aqui |
| **Mostrar no WhatsApp** | Volta a exibir o produto que estava oculto |
| **Excluir do WhatsApp** | Remove o produto do catálogo do WhatsApp. **O produto continua salvo no Whazing** e pode ser enviado de novo depois |

> ⚠️ **Ocultar não é excluir.** Ocultar apenas esconde; excluir remove do catálogo do WhatsApp.

> ⚠️ **Excluir no Whazing não exclui no WhatsApp.** Se você apagar o produto na tela de catálogo, ele continua no catálogo do WhatsApp até ser excluído lá também. O aviso de exclusão lembra disso.

---

## 🖼️ Regras de foto

O WhatsApp é rígido com a foto do produto. Para publicar:

* a foto é **obrigatória**;
* precisa ser **JPG ou PNG**;
* precisa ter no mínimo **500 × 500 pixels**;
* a imagem precisa estar em um formato/tamanho que o WhatsApp aceite.

Se a foto não atender, o produto falha e o motivo aparece na janela de resultado (veja abaixo).

---

## 🧾 Motivos de falha mais comuns

| Mensagem | O que fazer |
| --- | --- |
| **O WhatsApp exige uma foto no produto** | Envie uma foto principal antes de publicar |
| **Não foi possível publicar a foto** | Verifique se a imagem abre normalmente e envie de novo |
| **A foto é grande demais para o WhatsApp** | Reduza o tamanho do arquivo |
| **A foto é pequena demais: o WhatsApp exige no mínimo 500 × 500 pixels** | Use uma imagem maior |
| **Use uma foto em JPG ou PNG** | Converta a imagem para JPG ou PNG |
| **O WhatsApp recusou a foto: use JPG ou PNG com no mínimo 500 × 500 pixels** | Corrija a imagem e tente de novo |
| **Este produto não existe mais no catálogo do WhatsApp — ele foi publicado de novo** | O sistema republicou o produto automaticamente |
| **O canal não está conectado** | Reconecte o canal do WhatsApp |
| **Este produto ainda não foi enviado para o WhatsApp** | Envie o produto antes de ocultar/excluir |
| **O WhatsApp não confirmou o envio** | Tente de novo |
| **Não foi possível falar com o WhatsApp agora** | Aguarde alguns minutos e repita |
| **O WhatsApp não aceitou este produto** | Revise os dados do produto e tente novamente |

> 💡 Na janela de resultado, o botão **Tentar de novo nos que falharam** reenvia **somente** os produtos com falha.

---

## ⚠️ Cuidados importantes

* **Um canal por vez.** A lista, o andamento e os selos são sempre do canal selecionado.
* **O envio é em fila.** Catálogos grandes demoram — não é preciso ficar na tela.
* **Fechar a faixa de andamento só esconde a faixa.** O envio continua.
* **Produto sem foto não publica** no catálogo do WhatsApp.
* **O catálogo do WhatsApp é separado do catálogo do Whazing.** Ocultar/excluir em um lado não muda o outro automaticamente.

---

## ❓ Perguntas frequentes

**Por que não vejo os botões de sincronização?**
Porque a empresa não tem um canal com suporte a catálogo. A tela informa que o recurso está disponível somente no canal WhatsApp Plus.

**Preciso deixar a tela aberta durante o envio?**
Não. O envio roda em segundo plano. Ao voltar para a tela, o andamento é retomado.

**O que acontece se eu editar um produto depois de publicado?**
Ele passa a aparecer como **Precisa atualizar** e pode ser enviado de novo.

**Posso excluir do WhatsApp e manter no Whazing?**
Sim. Use **Excluir do WhatsApp**. O produto local continua salvo e pode ser publicado de novo.

**Por que um produto falhou por causa da foto?**
O WhatsApp exige foto em JPG/PNG com pelo menos 500 × 500 pixels. Ajuste a imagem e use **Tentar de novo nos que falharam**.

**A sincronização vale para qualquer canal?**
Não. A própria tela informa que é exclusiva do canal **WhatsApp Plus**.

---

## 👣 Próximos passos

* [Produtos e Coleções](produtos-e-colecoes.md)
* [Enviar Produto no Atendimento](envio-no-atendimento.md)
* [Canal WhatsApp API PLUS](../../canais-disponiveis/whatsapp-api-nao-oficial/whatsapp_api_plus/README.md)
