---
description: Para instalações feitas usando instalador automático
---

# Como Atualizar o Whazing

## Atualização do Whazing

Antes de iniciar, **faça um snapshot da sua VPS**. Isso garante que você possa reverter caso algo não saia como esperado.

### Atualizando para a versão estável

Para atualizar para a versão estável do Whazing, execute:

```bash
curl -sSL update.whazing.com.br | sudo bash
```

### Atualizando para a versão beta

Se você deseja testar a versão beta, utilize:

```bash
curl -sSL beta.whazing.com.br | sudo bash
```



> ℹ️ O script de atualização irá:
>
> * Parar o serviço atual do Whazing
> * Baixar a nova versão
> * Reiniciar automaticamente o serviço

***
