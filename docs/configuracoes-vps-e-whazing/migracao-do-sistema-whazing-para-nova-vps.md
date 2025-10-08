---
description: >-
  Este manual explica passo a passo como migrar o sistema para outra VPS. Mesmo
  quem não tem experiência com servidores conseguirá seguir.
---

# Migração do Sistema Whazing para Nova VPS

***

⚠️ **Importante:**

* Durante a migração o sistema ficará **fora do ar**.
* **Mensagens recebidas nesse período não serão registradas.**
* Avise seus clientes com antecedência.
* Antes de iniciar, **contate o suporte no Whatsapp +55 48 3197-0599** para liberar a licença premium na nova VPS.

***

### ✅ Passos da Migração

#### 1. Avisar clientes e suporte

* [ ] Avisar clientes que o sistema ficará indisponível.
* [ ] Enviar mensagem para **48 99941-6725** solicitando:
  * Liberação da licença premium na nova VPS.
  * Confirmação da janela de manutenção.

***

#### 2. Instalar o sistema na nova VPS

* [ ] Acessar a nova VPS.
* [ ] Seguir o guia oficial de instalação:\
  👉 [Como instalar e atualizar](https://doc.whazing.com.br/como-instalar-e-atualizar)

💡 **Dica:** já deixe o sistema rodando (instalação completa), para que na hora da migração só seja necessário restaurar os dados.

***

#### 3. Preparar o backup no servidor antigo

*   [ ] **Parar o sistema antigo**

    ```bash
    docker container stop whazing-backend
    ```
*   [ ] **Gerar o backup do banco de dados**

    ```bash
    curl -sSL backup.whazing.com.br | sudo bash
    ```

    > Isso cria o arquivo `backupwhazing.sql.gz`.

***

#### 4. Copiar backup para a nova VPS

*   [ ] No servidor antigo, copie o arquivo:

    ```bash
    scp backupwhazing.sql.gz usuario@IP_NOVO_SERVIDOR:/home/deploy/
    ```

***

#### 5. Restaurar o banco de dados

* [ ] Na nova VPS, dentro da pasta `/home/deploy/`, execute:

```bash
curl -sSL restaurar.whazing.com.br -o /home/deploy/restore.sh | sudo bash /home/deploy/restore.sh
```

> Esse comando já restaura o banco e reinicia o sistema.

*   [ ] **Acompanhar os logs para confirmar que iniciou corretamente:**

    ```bash
    docker logs --tail 100 -f whazing-backend
    ```

***

#### 6. Restaurar a pasta de arquivos (opcional, pode ser feito depois)

A pasta `public` contém arquivos enviados por clientes (logos, mídias, etc).\
Ela **pode ser copiada depois**, para reduzir o tempo offline.

1.  **No servidor antigo, compactar a pasta:**

    ```bash
    sudo tar -czvf public.tar.gz /home/deploy/whazing/backend/public/
    ```
2.  **Copiar para a nova VPS:**

    ```bash
    scp public.tar.gz usuario@IP_NOVO_SERVIDOR:/home/deploy/
    ```
3.  **No servidor novo, descompactar e ajustar permissões:**

    ```bash
    sudo tar -xzvf /home/deploy/public.tar.gz -C /
    sudo chown -R deploy:deploy /home/deploy/whazing/backend/public/
    ```

💡 Priorize restaurar pelo menos a pasta `/logos`, que contém as imagens do whitelabel.

***

### 🚀 Migração concluída!

Agora o sistema já deve estar rodando normalmente na nova VPS.

***
