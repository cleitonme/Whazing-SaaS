# API

A API do Whazing permite que outros sistemas conversem com o seu atendimento — por exemplo, **enviar mensagens, agendar envios futuros, gerenciar compromissos da Agenda, consultar e atualizar contatos (clientes), criar tickets e acessar templates**.

> 💡 **O que é API?** É um "endereço" que permite a troca de informações entre sistemas. Veja o [Glossário](../../glossario.md) para uma explicação simples.

***

## 📦 Arquivo oficial da API

| Arquivo | Para que serve |
|---|---|
| **Postman** (`API_modelo_postman.json`) | Coleção pronta para **testar** a API. Vem com pastas por assunto, exemplos e variáveis (`base_url`, `token`...) — importe e comece a testar |

**Como baixar os dois:** no sistema, acesse **Automação e Integrações → API**. Clique em **Adicionar**, selecione o canal que deseja usar e aparecerá o botão para baixar o **modelo Postman**.

> ⚠️ **Importante:** novos endpoints podem não estar na documentação desta página — **sempre baixe o modelo Postman** pelo próprio sistema, pois ele acompanha a versão mais atual da API.

> 💡 **Este guia é a versão simples.** Aqui você encontra a introdução, a autenticação e os recursos de **Agendamentos** e **Agenda** explicados passo a passo. 

***

## 📄 Páginas desta seção

* [Introdução e Autenticação](introducao-e-autenticacao.md) — o que você precisa para começar, como autenticar e o que significam os erros
* [Endpoints](endpoints/README.md) — índice dos comandos disponíveis, por assunto
* [Exemplos de Código](exemplos-de-codigo.md) — exemplos prontos para usar

***

## 🧭 Por onde começar

1. Leia a [Introdução e Autenticação](introducao-e-autenticacao.md) e crie seu **token**;
2. Baixe a coleção do **Postman** (Configurações → Canais → API) e faça seu **primeiro teste**;
3. Use as páginas desta seção para os recursos novos: [Agendamentos](endpoints/agendamentos.md) e [Agenda](endpoints/agenda.md).
