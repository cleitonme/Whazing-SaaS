# API

A API do Whazing permite que outros sistemas conversem com o seu atendimento — por exemplo, **enviar mensagens, agendar envios futuros, gerenciar compromissos da Agenda, consultar e atualizar contatos (clientes), criar tickets, acessar templates, listar grupos do WhatsApp, manter o Catálogo, emitir Cobranças e trabalhar com cards do Kanban Pro**.

> 💡 **O que é API?** É um "endereço" que permite a troca de informações entre sistemas. Veja o [Glossário](../../glossario.md) para uma explicação simples.

***

## 📦 Arquivo oficial da API

| Arquivo | Para que serve |
|---|---|
| **Postman** (`API_modelo_postman.json`) | Coleção pronta para **testar** a API. Vem com pastas por assunto, exemplos e variáveis (`base_url`, `token`...) — importe e comece a testar |
| **OpenAPI** (`openapi.yaml`) | A **referência técnica completa**: todas as rotas, campos, exemplos de resposta e códigos de erro. É o arquivo que a tela **Testar API** carrega |

**Como acessar:** no sistema, vá em **Automação e Integrações → API**. Nessa tela você encontra:

* **POSTMAN** — baixa o `API_modelo_postman.json`;
* **Testar API** — abre uma tela no próprio navegador, com todas as rotas (Swagger), já usando a **URL do sistema** e o **token da API selecionada** para você testar sem montar a chamada na mão.

> 💡 A tela **Testar API** só aparece para **administradores**. O token é usado **apenas na memória do navegador** — ele não é gravado no arquivo de referência.

> ⚠️ **Importante:** novos endpoints podem não estar na documentação desta página — **sempre baixe o modelo Postman** pelo próprio sistema, pois ele acompanha a versão mais atual da API.

> 💡 **Este guia é a versão simples.** Aqui você encontra a introdução, a autenticação e os recursos explicados passo a passo — de mensagens e contatos a **Catálogo**, **Cobranças**, **Instagram**, **Kanban Pro** e **grupos do WhatsApp**.

***

## 📄 Páginas desta seção

* [Introdução e Autenticação](introducao-e-autenticacao.md) — o que você precisa para começar, como autenticar e o que significam os erros
* [Endpoints](endpoints/README.md) — índice dos comandos disponíveis, por assunto
* [Exemplos de Código](exemplos-de-codigo.md) — exemplos prontos para usar

***

## 🧭 Por onde começar

1. Leia a [Introdução e Autenticação](introducao-e-autenticacao.md) e crie seu **token**;
2. Baixe a coleção do **Postman** (Automação e Integrações → API) e faça seu **primeiro teste**;
3. Use as páginas de [Endpoints](endpoints/README.md) para cada assunto — destaque para [Catálogo](endpoints/catalogo.md), [Cobranças](endpoints/cobrancas.md), [Instagram](endpoints/instagram.md) e [Kanban Pro](endpoints/kanban-pro.md).
