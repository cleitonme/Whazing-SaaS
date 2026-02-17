---
description: 'Senha Universal: Acesso Simplificado para Contas Cadastradas na Plataforma'
icon: key
---

# Senha Universal

## **Como Funciona**

A senha universal permite que você acesse qualquer conta cadastrada na plataforma, utilizando senha previamente configurados. Por isso, é **fundamental** criar uma senha segura e difícil de adivinhar, para minimizar riscos de invasões.

***

## **Passo a Passo para Configuração no Linux (Exemplo com o Bitvise)**

1. **Conexão**:
   * Conecte ao Linux utilizando um aplicativo como o **Bitvise**.
   * Use o **usuário deploy** para evitar problemas de permissão.
2. **No Bitvise**:
   * Abra "New SFTP Window" e acesse a pasta `/home/deploy/whazing/backend`.
   * Localize e edite o arquivo `.env`. Clique com o botão direito no arquivo e selecione **Editar**.
   * Adicione a seguinte linha ao arquivo:

```bash
MASTER_KEY=whazing123456
MASTER_KEY_NOSAAS=123456
```

* **Nota**: Substitua whazing123456 e 123456 por uma senha difícil e segura.
* MASTER\_KEY - Permissão acessar todas empresas
* MASTER\_KEY\_NOSAAS - Permissão acessar todas empresas exceto empresa 1 não terá acesso painel SAAS

3. **Salvar e Reiniciar**:
   * Salve o arquivo editado.
   * Abra o terminal e digite o comando abaixo para reiniciar os serviços:

```bash
docker container restart whazing-backend
```

***

## **Opção Alternativa: Configuração Direto pelo Terminal**

1. **Edição do Arquivo**:
   * No terminal, utilize o seguinte comando para acessar o arquivo `.env`:

```bash
nano /home/deploy/whazing/backend/.env
```

* Adicione a seguinte linha ao arquivo:

```bash
MASTER_KEY=whazing123456
MASTER_KEY_NOSAAS=123456
```

* **Nota**: Substitua `123456` por uma senha difícil e segura.

2. **Salvar**:
   * Aperte `Ctrl + X`, depois confirme com `Y` para salvar as alterações.
3. **Reiniciar os Serviços**:
   * Execute o comando abaixo no terminal:

```bash
docker container restart whazing-backend
```
