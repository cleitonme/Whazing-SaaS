# 🔎 Verificar Número ao Cadastrar Contato

O **Verificar Número** é a configuração do painel SaaS que faz o sistema **conferir se um número realmente existe no WhatsApp** na hora de cadastrar ou salvar um contato. O objetivo é simples: **evitar inconsistência** — contatos com número errado, número que não existe, ou o problema clássico de números brasileiros com/sem o **nono dígito**.

> 💡 **Quem configura?** O dono/administrador da instalação (painel SaaS). As empresas não precisam fazer nada — a verificação rola sozinha para elas.

***

## 📍 Onde configurar

No **Painel SaaS**:

**Sistema → Configurações Gerais**

São duas opções, que trabalham juntas:

***

## ⚙️ Como funciona

Quando alguém cadastra ou salva um contato, o sistema consulta o WhatsApp para confirmar se o número existe. Para essa consulta, ele usa uma conexão de WhatsApp — e a ordem é sempre a mesma:

### 1. A própria conexão da empresa

Se a empresa tem um canal WhatsApp conectado (Baileys/QR Code, API Plus ou Wuzapi), é ele quem faz a verificação. **Na maioria dos casos, o fluxo para aqui.**

### 2. Canal fixo para validação (se a empresa não tem conexão)

Se a empresa **não tem nenhuma conexão própria**, o sistema usa o canal escolhido no campo **"Canal Fixo para Validação de Número"**.

### 3. Fallback da Empresa 01

Se ainda assim não houver canal disponível, e a opção **"Verificar Número via Empresa 01"** estiver **ativada**, o sistema usa uma conexão da **Empresa 01** (a empresa master da instalação) como último recurso.

### E se ninguém puder validar?

Se não houver conexão nenhuma disponível, o sistema **não bloqueia o cadastro**: o contato é salvo com o número como foi digitado. A verificação é um apoio, não uma barreira.

***

## 🧩 As duas opções explicadas

### ✅ Verificar Número via Empresa 01

> "Quando ativado, empresas sem conexão WhatsApp própria utilizarão a conexão da Empresa 01 como último fallback para validar números."

| Estado         | O que acontece                                                                     |
| -------------- | ---------------------------------------------------------------------------------- |
| **Ativado**    | Empresas sem conexão própria ainda podem ter números validados usando a Empresa 01 |
| **Desativado** | Empresa sem conexão própria não valida número (o contato é salvo como digitado)    |

> 💡 Útil quando você tem uma conexão WhatsApp estável na Empresa 01 e quer que **todos os clientes da instalação** tenham validação, mesmo os que não conectam WhatsApp próprio (ex.: quem usa só API Oficial).

### ✅ Canal Fixo para Validação de Número

> "Se definido, empresas sem conexão própria usarão este canal para validar números. Se o canal estiver desconectado, cai no fallback da Empresa 01 (se habilitado)."

Um seletor onde você escolhe **qual conexão** será usada para validar (qualquer WhatsApp da instalação), com a opção **"Desabilitado (sem canal fixo)"**.

| Opção                  | O que acontece                                                                                              |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Um canal escolhido** | Empresas sem conexão própria validam sempre por esse canal — ex.: um WhatsApp QR Code dedicado só para isso |
| **Desabilitado**       | Sem canal fixo; se houver fallback da Empresa 01 ativado, é ele quem entra                                  |

> ⚠️ Se o canal fixo escolhido estiver **desconectado**, o sistema cai automaticamente no fallback da Empresa 01 (se ativado). Se também não houver, o contato é salvo sem validação.

***

## 🇧🇷 Números brasileiros e o nono dígito

Um detalhe que resolve muita dor de cabeça: quando a verificação é feita por uma conexão **QR Code (Baileys)**, se o número **não é encontrado** na primeira tentativa e for um número do Brasil, o sistema **tenta automaticamente sem o nono dígito** antes de declarar que não existe.

Na prática: `55 47 9 9999-9999` não existe? O sistema tenta `55 47 9999-9999`. Se existir assim, **o número é corrigido e salvo no formato certo** — sem inconsistência no cadastro.

***

## 🖼️ O que a verificação traz (extras)

Além de confirmar que o número existe, a consulta traz informações extras que o sistema aproveita:

* **Foto do perfil** do contato no WhatsApp (e o nome verificado, dependendo do canal);
* **Correção do formato** do número (o nono dígito, explicado acima);
* **Cache inteligente:** o resultado fica salvo por um tempo (até 5 dias quando tem foto; 2h quando não tem) — para **não consultar o mesmo número toda hora** e deixar tudo mais rápido.

***

## 📊 Resumo do fluxo

```
Empresa salva um contato
        │
        ▼
A empresa tem canal WhatsApp próprio conectado?
        ├── SIM → valida por ele ✅
        └── NÃO
              ▼
        Existe "Canal Fixo" configurado e conectado?
              ├── SIM → valida por ele ✅
              └── NÃO
                    ▼
              "Verificar via Empresa 01" ativado?
                    ├── SIM → valida pela Empresa 01 ✅
                    └── NÃO → salva sem validação (número como digitado)
```

***

## ❓ Dúvidas rápidas

* **Preciso configurar algo nas empresas?** Não. A verificação é configurada **uma vez no SaaS** e funciona para todas.
* **Empresas com API Oficial (WABA) conseguem validar?** A validação por número usa conexões de WhatsApp **não oficiais** (QR Code, API Plus, Wuzapi). Se a empresa só tem API Oficial, ela depende do canal fixo ou do fallback da Empresa 01.
* **O canal fixo caiu, e agora?** O sistema tenta o fallback da Empresa 01 (se ativado). Se nada estiver disponível, o contato é salvo sem validação — nada é bloqueado.
* **A verificação consulta o WhatsApp toda hora?** Não. Os resultados ficam em **cache** (horas a dias, conforme o caso), então a mesma consulta não se repete à toa.
* **Ativar isso ajuda a API Oficial?** Sim — é exatamente o caso de uso: como a API oficial **não valida número**, o cadastro pode acabar com números inválidos. Com um canal de validação ativo (fixo ou Empresa 01), o sistema confere o número no ato do cadastro e evita a inconsistência.
