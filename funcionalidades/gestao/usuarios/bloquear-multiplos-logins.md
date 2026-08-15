# Bloquear Múltiplos Logins

O recurso **Bloquear Múltiplos Logins** impede que um mesmo usuário acesse o sistema em mais de um dispositivo ou aba ao mesmo tempo. A configuração é feita em dois níveis: no painel SaaS (para liberar a opção para as empresas) e no cadastro de cada usuário.

***

## Passo 1 — Habilitar a opção no painel SaaS

Antes de configurar por usuário, o administrador SaaS precisa garantir que a opção esteja visível para as empresas.

Acesse: **SaaS → Configurações → Configurações Gerais**

Localize o item **Ocultar opção Bloquear Múltiplos Logins** e verifique o estado do toggle:

| Estado do toggle         | Comportamento                                                       |
| ------------------------ | ------------------------------------------------------------------- |
| **Desabilitado** (cinza) | A opção aparece no cadastro de usuários das empresas ✅              |
| **Habilitado** (azul)    | A opção fica oculta — empresas não conseguem alterar a configuração |

⚠ **Atenção:** Se o toggle estiver habilitado (azul), a opção não aparecerá na tela de edição do usuário nas empresas. Deixe-o **desabilitado** para liberar o controle.

***

## Passo 2 — Configurar por usuário

Com a opção liberada no SaaS, acesse a empresa desejada e vá em:

**Cadastros → Usuários → (ícone de lápis ✏️ na linha do usuário) → Editar Usuário**

Na aba **Informações**, role até o campo **Bloquear Múltiplos Logins**.

***

### Bloqueio ativado

O toggle aparece **azul** — o usuário **não consegue** logar em mais de um dispositivo ao mesmo tempo. Ao tentar abrir uma segunda sessão, a sessão anterior é encerrada.

***

### Bloqueio desativado

O toggle aparece **cinza** — o usuário **pode** acessar o sistema em múltiplos dispositivos ou abas simultaneamente.

***

## Resumo do fluxo

```
Painel SaaS → Sistema → Configurações Gerais
  └── Ocultar opção Bloquear Múltiplos Logins → DESABILITADO

Cadastros → Usuários → Editar Usuário
  └── Bloquear Múltiplos Logins
        ├── ATIVADO (azul)   → bloqueia múltiplas sessões
        └── DESATIVADO (cinza) → permite múltiplas sessões
```

✅ **Recomendação:** Ative o bloqueio para operadores de atendimento, evitando que a mesma conta seja usada por mais de uma pessoa ao mesmo tempo.
