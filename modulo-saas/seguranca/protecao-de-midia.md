---
description: >-
  Como controlar quem pode abrir as fotos, áudios, vídeos e documentos dos
  atendimentos — agora configurado pelo painel, sem editar o .env.
---

# 🖼️ Proteção de Mídia

> 🔄 **Recurso existente com configuração alterada:** a proteção de mídia já existia, mas era configurada por variáveis no arquivo `.env` do servidor. Agora a configuração é feita **nesta tela do painel**.

> **Em palavras simples:** quando alguém envia uma foto, um áudio ou um documento no atendimento, esse arquivo fica guardado em uma pasta do sistema. Esta tela decide **quem consegue abrir esse arquivo**: só quem está usando o sistema, ou **qualquer pessoa** que tenha o endereço direto do arquivo.

> 👤 **Quem usa esta tela:** o **administrador do SaaS**. A configuração vale para **todas as empresas** da plataforma.

***

## 📍 Onde fica

```text
Painel SaaS → Segurança → Proteção de mídia
```

A tela tem **quatro blocos**:

1. **Proteção de mídia** — o estado atual e a chave que liga/desliga;
2. **Exceções e validade dos links** — IPs liberados, programa externo e prazo dos links;
3. **Chave de acesso para integrações** — a senha que um sistema externo pode usar;
4. **Salvar** — o botão que grava as mudanças.

***

## 🚦 O estado atual aparece no topo

Logo ao abrir, um aviso mostra a situação:

| Aviso | Significado |
| --- | --- |
| 🟢 **"Os arquivos estão protegidos: só abrem pelo sistema ou por um link com prazo de validade."** | A proteção está ligada |
| 🟠 **"Os arquivos estão abertos: qualquer pessoa com o endereço consegue abrir, mesmo sem entrar no sistema."** | A proteção está desligada |

> ⚠️ **Não é possível confirmar** pela tela se uma instalação nova já vem com a proteção ligada — o painel apenas mostra o estado atual. **Confira o aviso ao abrir esta tela.**

***

## 🔒 Proteger arquivos enviados

A chave **"Proteger arquivos enviados"** é o liga/desliga principal:

* **Ligado** — fotos, áudios e documentos só abrem para quem está usando o sistema **ou** para quem recebeu um **link com prazo de validade**;
* **Desligado** — **qualquer pessoa** que tenha o endereço do arquivo consegue abrir, mesmo sem entrar no sistema.

> 💡 **Recomendação:** mantenha **ligado**, a não ser que alguma integração antiga pare de funcionar. Nesse caso, prefira liberar apenas o necessário (IP ou chave de acesso) em vez de desligar tudo.

### Confirmação ao desligar

Desligar a proteção é a **única alteração desta tela que pede confirmação**. Aparece um aviso:

> **"Desligar a proteção de mídia?"** — "Sem a proteção, qualquer pessoa que tenha o endereço de um arquivo consegue abri-lo, mesmo sem entrar no sistema. Isso vale para todas as empresas da plataforma."

As opções são **"Desligar mesmo assim"** e **"Manter protegido"**. Nada é gravado até você confirmar.

***

## 🌐 Exceções e validade dos links

> A própria tela avisa: use esta parte **só se algo fora do sistema precisar baixar os arquivos**. Em dúvida, deixe tudo em branco.

### Endereços de internet sempre liberados

* um por linha **ou** separados por vírgula;
* serve para liberar **um servidor seu** que precise buscar os arquivos;
* aceita **`*` no lugar de um número**, como `192.168.1.*`;
* deixe vazio se não tiver.

Exemplos válidos para o campo:

```text
203.0.113.10, 192.168.1.*
```

Se algum endereço estiver escrito de forma inválida, a tela recusa ao salvar: *"Há um endereço de internet escrito de forma inválida na lista de liberados."*

### Liberar um programa externo (saída de emergência)

Este campo usa o **User-Agent** — o "nome" que o programa informa ao acessar.

> ⚠️ **Deixe VAZIO.** A própria tela explica o motivo: **esse nome é escolhido por quem acessa**, então qualquer pessoa pode se passar pelo programa que você liberou. Use **só** se uma integração parar de funcionar e você precisar resolver na hora; depois troque pela **chave de acesso** ou pelo **endereço de internet**, que são verificados de verdade.

Se usar, o limite é de **200 caracteres**.

### Validade dos links de mídia (em horas)

* é o tempo que um link enviado por e-mail ou em página pública **continua abrindo**;
* aceita de **1 a 8760 horas** (8760 horas = 1 ano);
* o **padrão é 168** horas, ou seja, **7 dias**;
* abaixo do campo, a tela mostra a equivalência em dias: *"Equivale a cerca de 7 dia(s)."*

Se o valor estiver fora da faixa, a tela recusa: *"A validade dos links precisa ser um número inteiro entre 1 e 8760 horas."*

***

## 🔑 Chave de acesso para integrações

É uma **senha única** que um sistema externo pode usar para baixar os arquivos. **Só crie se alguma integração pedir.**

* a chave fica guardada **criptografada** e **não é mostrada de novo**, nem para você;
* o campo começa vazio: **deixe em branco para manter a chave atual**; digite para **substituir**;
* limite de **255 caracteres**;
* quando já existe uma chave, aparece **"Chave já cadastrada"** no campo e o botão **Remover chave**;
* **Remover chave** pede confirmação: *"As integrações que usam esta chave param de baixar os arquivos na hora."*

### Falta de chave de criptografia no servidor

Para guardar essa chave com segurança, o servidor precisa de uma **chave de criptografia**. Sem ela, aparece um aviso vermelho:

> "O servidor não tem chave de criptografia configurada (CREDENTIAL_CRYPTO_KEY ou JWT_SECRET). Sem ela não é possível guardar a chave de acesso com segurança, então o campo está bloqueado."

Nesse caso, o campo fica **desabilitado**. Quem resolve é o responsável pelo servidor.

***

## 🔄 Migração: o que acontece com o `.env` antigo

Até a versão anterior, esta proteção era configurada no arquivo `.env` do servidor, com as variáveis:

```env
MEDIA_PROTECTION_ENABLED=true
MEDIA_PROTECTION_ALLOWED_IPS=127.0.0.1,::1,192.168.1.*
MEDIA_API_KEY=sua-chave-secreta-aqui
```

**Agora essas variáveis não têm mais efeito.** Esta tela é a única fonte da configuração.

Se o servidor ainda tiver essas variáveis no `.env`, a tela mostra um aviso azul:

> "As variáveis {nomes} ainda estão no arquivo `.env` do servidor, mas não têm mais efeito: esta tela é a única fonte da configuração. Você pode removê-las."

> ✅ **O que fazer:** abra esta tela, configure o que precisa (ligar a proteção, informar os IPs e criar a chave de acesso) e depois **remova as variáveis antigas** do `.env` para não confundir quem for mexer no servidor depois.

> ℹ️ O passo a passo antigo com `.env` continua publicado como **referência legada** em [Configurar Controle de Acesso à Pasta Public (.env)](../../instalacao-and-vps/configurar-controle-de-acesso-a-pasta-public-.env.md).

***

## 🪜 Passo a passo

1. Abra **Painel SaaS → Segurança → Proteção de mídia** e confira o aviso de estado no topo.
2. Confirme que **Proteger arquivos enviados** está ligado.
3. Ajuste a **validade dos links** se precisar (padrão: 168 horas).
4. Se alguma integração precisar baixar arquivos, libere **o IP dela** ou crie uma **chave de acesso** — não desligue a proteção inteira.
5. Clique em **Salvar alterações**.
6. Teste: abra o endereço direto de um arquivo em uma janela anônima.

> ✅ Deu certo quando, com a proteção ligada, o endereço direto **não abre** sem login (ou sem link válido) e o sistema continua exibindo as mídias normalmente.

***

## 💾 O que acontece ao salvar

* a mudança vale **para todas as empresas** da plataforma;
* links já enviados passam a respeitar a **nova validade**;
* a chave de acesso, se alterada, **invalida a anterior** — integrações que usavam a antiga param de baixar;
* ao **desligar** a proteção, todos os arquivos voltam a ser acessíveis por quem tiver o endereço;
* se o salvamento falhar, a tela **recarrega do servidor** para não mostrar algo que não foi gravado.

***

## 🆘 Problemas comuns

### Uma integração parou de baixar os arquivos

1. Confira se a proteção está ligada;
2. libere o **IP** da integração ou crie uma **chave de acesso**;
3. se a chave foi trocada, atualize-a na integração — a antiga não funciona mais;
4. **não** desligue a proteção inteira para resolver: use uma exceção.

### Mídias não abrem nem dentro do sistema

* Verifique se o problema é só em links antigos (podem ter passado da validade);
* confira se o servidor tem a **chave de criptografia** configurada;
* se você liberou um **User-Agent**, remova — ele não é uma proteção confiável e pode causar efeitos inesperados.

### Não consigo digitar no campo da chave de acesso

O campo fica bloqueado quando o servidor **não tem chave de criptografia** (aviso vermelho). Peça a configuração ao responsável pelo servidor.

### O aviso azul do `.env` não sai

Ele indica que as variáveis antigas **ainda estão no arquivo do servidor**. Remova as linhas `MEDIA_PROTECTION_*` / `MEDIA_API_KEY` do `.env` e reinicie o backend.

***

## ❓ Perguntas frequentes

#### Desligar aqui apaga arquivos?

Não. Apenas **libera o acesso** por endereço direto. Nada é apagado.

#### A configuração é por empresa?

Não. É **da plataforma inteira** — vale para todas as empresas.

#### Preciso reiniciar o servidor depois de salvar?

Não pela tela do painel. O reinício só era necessário na configuração antiga por `.env`.

#### O que é a "chave de acesso"?

É a senha que um **sistema externo** usa para baixar arquivos sem precisar de login. Funciona como um **token de acesso**.

#### Existe validade para a chave de acesso?

Não há prazo configurável para a chave nesta tela. O prazo configurável é o dos **links de mídia**.

***

## ❔ O que não é possível confirmar

* Se a proteção já vem **ligada** em instalações atualizadas (a tela só mostra o estado atual);
* os **nomes exatos dos parâmetros** usados por integrações externas para se autenticar (por exemplo, enviar a chave na URL ou em um cabeçalho). O documento legado cita `?apiKey=` e o cabeçalho `x-api-key`, mas isso **não foi reverificado** neste frontend;
* se a chave de acesso tem **escopos/permissões** diferentes por empresa.

***

## 📚 Veja também

* [🔐 Segurança](README.md)
* [Configurar Controle de Acesso à Pasta Public (.env) — referência legada](../../instalacao-and-vps/configurar-controle-de-acesso-a-pasta-public-.env.md)
* [Alertas de segurança](alertas-de-seguranca.md)
* [Armazenamento S3](../armazenamento-s3.md)
* [Controle de Espaço em Uso e Venda de Adicionais de Armazenamento](../controle-de-espaco-em-uso-e-venda-de-adicionais-de-armazenamento.md)
