---
description: >-
  Como exigir que um usuário troque a senha no próximo login e o que ele vê
  ao entrar no sistema.
---

# 🔑 Exigir Troca de Senha no Próximo Login

> 🆕 **Recurso novo:** esta opção passou a existir nesta versão.

> **Em palavras simples:** ao criar um usuário ou entregar uma senha provisória, você pode marcar que ele **precisa definir uma senha nova** antes de usar o sistema. Assim a senha que você conhece **deixa de valer** depois do primeiro acesso.

> 👤 **Quem usa esta opção:** o **administrador do SaaS**, na lista de usuários de uma empresa. O administrador da própria empresa também encontra a mesma opção em **Usuários**, no painel de atendimento.

***

## 📍 Onde fica

```text
Painel SaaS → Empresas → (escolha a empresa) → Usuários → editar o usuário
```

O botão fica na janela de edição do usuário, junto do campo de senha:

> **"Exigir troca de senha no próximo login"**

Passando o mouse no ícone de ajuda ao lado, a própria tela explica:

> "O usuário entra com a senha atual e precisa definir uma nova antes de usar o sistema. Trocar a senha encerra as sessões abertas dele."

***

## 🔘 Como ligar e desligar

1. Abra a empresa e clique em **Usuários**.
2. Clique no usuário (ou em editar).
3. Ligue a chave **Exigir troca de senha no próximo login**.
4. Salve o usuário.

Para desfazer, é só **desligar a chave** e salvar — desde que o usuário ainda **não** tenha feito a troca.

> ℹ️ A chave **não** altera a senha. Ela apenas marca que a troca é obrigatória. Se quiser definir uma senha provisória, use o campo de senha (deixe em branco para manter a atual: *"Deixe em branco para manter a senha atual."*).

***

## 🏷️ Como identificar na lista

Na lista de usuários aparece uma coluna com o aviso:

| Situação | O que aparece |
| --- | --- |
| Troca pendente | Selo laranja **"Troca exigida"** |
| Sem pendência | Um traço (**—**) |

Também existe, na mesma linha, o botão **Alterar Senha** — que **define** a senha diretamente — e, quando a verificação em duas etapas está ativa, o botão de **desativar a verificação** daquele usuário.

***

## 👀 O que o usuário vê ao entrar

Depois de digitar **e-mail e senha corretamente** (e, se usar, confirmar o código da verificação em duas etapas), abre uma janela:

> **"Defina uma senha nova"**
>
> "O administrador exigiu a troca de senha. Defina uma senha nova para continuar."

Campos:

* **Nova senha**
* **Confirmar nova senha**

E o botão **Salvar e entrar**.

### Regras que o usuário precisa cumprir

A própria janela mostra uma lista com **bolinhas verde/vermelha** indicando o que já foi atendido:

* mínimo de **6 caracteres**;
* pelo menos **uma letra maiúscula**;
* pelo menos **uma letra minúscula**;
* pelo menos **um número**.

Além disso:

* a senha nova **precisa ser diferente da atual** — senão aparece *"A senha nova precisa ser diferente da atual."*;
* a confirmação precisa ser **igual** à senha digitada.

### A janela não pode ser fechada

Essa janela **não tem botão de fechar nem cancelar**: o acesso fica barrado no servidor até a senha ser trocada. A única saída é **recarregar a página**, o que volta para a tela de login.

### Mensagens de erro possíveis

| Mensagem | Motivo |
| --- | --- |
| **A senha nova precisa ser diferente da atual.** | Repetiu a senha antiga |
| **A senha não atende aos requisitos.** | Faltou algum item da lista |
| **A sessão expirou. Faça login novamente.** | Demorou demais para concluir |
| **Muitas tentativas. Aguarde um instante e tente de novo.** | Excesso de tentativas |
| **Não foi possível alterar a senha. Tente de novo.** | Erro genérico |

***

## 💾 O que acontece depois da troca

* a **senha nova passa a valer** imediatamente;
* a marca **"Troca exigida" desaparece** da lista de usuários;
* as **sessões abertas do usuário são encerradas** — ele pode precisar entrar de novo em outros dispositivos ou abas;
* a senha provisória que você definiu **deixa de funcionar**.

> ⚠️ **Atenção ao combinar com a verificação em duas etapas:** se o usuário ainda não configurou o segundo fator, ele configura **antes** de chegar à tela de senha nova. Se ele perdeu o celular, siga o roteiro em [Verificação em duas etapas](seguranca/verificacao-em-duas-etapas.md).

***

## 🪜 Passo a passo recomendado

1. Crie o usuário com uma **senha provisória**.
2. Ligue **Exigir troca de senha no próximo login**.
3. Salve e entregue a senha provisória por um canal seguro.
4. Confirme que o usuário consegue entrar e é levado à tela **"Defina uma senha nova"**.
5. Depois que ele trocar, confira na lista que o selo **"Troca exigida"** sumiu.

> ✅ Deu certo quando o usuário só entra no sistema **depois** de definir a senha nova.

***

## 🆘 Problemas comuns

### O usuário diz que não consegue entrar de jeito nenhum

1. Confirme se ele está digitando a **senha provisória** correta;
2. veja se a conta dele **não está desativada**;
3. se a verificação em duas etapas estiver ativa e ele perdeu o celular, desative a verificação na lista de usuários.

### A janela de troca de senha não aparece

* Confira se o selo **"Troca exigida"** está na lista. Se não estiver, a marca não foi salva;
* peça para o usuário **sair e entrar** novamente;
* confirme que ele digitou a senha **correta** — a marca só é aplicada depois do login validado.

### O usuário trocou, mas continua sendo cobrado

Provavelmente ele está com uma **sessão antiga aberta**. Peça para sair e entrar de novo; se persistir, verifique se a troca foi concluída (o selo deve ter desaparecido).

### Quero apenas redefinir a senha, sem obrigar troca

Use o botão **Alterar Senha** na lista de usuários. Ele define a senha nova na hora, sem exigir troca no próximo login.

***

## ❓ Perguntas frequentes

#### A senha provisória para de funcionar?

Sim. Depois da troca, vale **somente** a senha que o usuário definiu.

#### Isso funciona junto com a verificação em duas etapas?

Sim. A ordem é: senha → código da verificação (se ativa) → definição da senha nova.

#### A troca pode ser exigida para todos os usuários de uma vez?

A opção é **por usuário**. Não foi encontrada, no frontend, uma ação em massa para ligar isso em todos.

#### O administrador consegue ver a senha nova?

Não. Ela é definida pelo próprio usuário e não aparece em nenhuma tela.

#### Existe prazo para o usuário trocar a senha?

Não há prazo configurável nesta tela: a exigência fica pendente até o próximo login.

***

## ❔ O que não é possível confirmar

* Se a exigência **expira** sozinha depois de algum tempo;
* se existe **notificação por e-mail** avisando o usuário da obrigação;
* se a troca gera um **registro nos logs de segurança** — a tela de logs tem eventos de senha (`Senha redefinida`, `Senha atual incorreta`), mas não há um evento específico de "troca obrigatória concluída" listado.

***

## 📚 Veja também

* [🔐 Segurança](seguranca/README.md)
* [Verificação em duas etapas](seguranca/verificacao-em-duas-etapas.md)
* [Logs de tentativas de acesso](seguranca/logs-de-tentativas.md)
* [⚙️ Configurar Menu da Empresa](configurar-menu-da-empresa.md)
