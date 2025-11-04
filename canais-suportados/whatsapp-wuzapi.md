# **WhatsApp Wuzapi (WhatsMeow)**

A **Wuzapi (WhatsMeow)** é recomendada no lugar da **Baileys**, pois é **mais leve**, **estável** e **garante melhor desempenho do sistema**.

---

### 🧩 **Instalação ou atualização do servidor**

Para instalar ou atualizar, basta executar o comando abaixo:

```bash
curl -sSL wuzapi.whazing.com.br | sudo bash
```

Após a instalação, será exibida uma tela parecida com esta:

```
==============================
✅ Instalação concluída!
URL WuzAPI: http://127.0.0.1:8080
Admin Token: xeU2d47fSHxIM5pSdB4ua9C1y3E4k2
DB Password: vuzNRCFFxp2EqIr
Arquivo: /home/deploy/wuzapi.yaml
==============================
```

---

### ⚙️ **Conexão no painel Whazing**

1. Acesse o painel **Whazing → SaaS → Canais**
2. Preencha os campos com:

   * **URL:** a exibida na instalação (exemplo: `http://127.0.0.1:8080`)
   * **Admin Token:** o token gerado (exemplo: `xeU2d47fSHxIM5pSdB4ua9C1y3E4k2`)

💡 É possível **migrar entre as 3 APIs não oficiais** — **Baileys**, **API Plus** e **WuzAPI** — **sem perder dados**.

---

### 🔁 **Reiniciar serviços**

**Reiniciar WuzAPI**

```bash
docker container restart wuzapi
```

**Reiniciar Banco**

```bash
docker container restart postgreswuzapi
```

**Reiniciar RabbitMQ**

```bash
docker container restart rabbitmqwuzapi
```

---

### 📜 **Ver logs dos contêineres**

**Logs do WuzAPI**

```bash
docker logs --tail 100 -f wuzapi
```

**Logs do Banco**

```bash
docker logs --tail 100 -f postgreswuzapi
```

**Logs do RabbitMQ**

```bash
docker logs --tail 100 -f rabbitmqwuzapi
```