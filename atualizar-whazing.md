---
description: Para instalações feitas usando instalador automático
---

# Como Atualizar o Whazing

## Antes de começar faça um snapshot da VPS

## Tutorial rápido e fácil de como atualizar para nova versão

### RODAR OS COMANDOS ABAIXO ANTES FAÇA BACKUP DA VPS

1 - acessar como root

```bash
sudo su root
```

2 - acessar pasta root

```bash
cd /root/
```

3 - apagar instalador antigo

```bash
rm whazinginstalador/ -Rf
```

4 - baixar novo instalador

```bash
git clone https://github.com/cleitonme/Whazing-SaaS.instalador.git whazinginstalador
```

5 - Da permisão

```bash
sudo chmod +x ./whazinginstalador/whazing
```

6 - Acessar pasta

```bash
cd ./whazinginstalador
```

8 - Executar

```bash
./whazing
```

11 - Use opção 2 para versão estável ou 11 versão beta

**Para quem instalou sistema antes 19/05/25**

* Caso ainda não migrou para novo modelo docker segue documentação https://github.com/cleitonme/Whazing-SaaS.instalador/blob/main/migrar\_nova\_versao.md
