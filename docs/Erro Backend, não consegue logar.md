## **Erros Comuns e Soluções**

### Erro: Backend não consegue logar  
Se você enfrentar problemas no login, tente reiniciar o PM2 seguindo os passos abaixo:

1. Troque para o usuário `deploy`:
   ```bash
   su deploy
   ```

2. Reinicie os processos do PM2:
   - Pare todos os processos:
     ```bash
     pm2 stop all
     ```
   - Recarregue os processos:
     ```bash
     pm2 reload all
     ```
   - Reinicie todos os processos:
     ```bash
     pm2 restart all
     ```

---

### Possíveis Problemas com SSL  
Se os problemas persistirem, verifique os arquivos de configuração relacionados ao SSL, pois erros nessa configuração também podem causar falhas no login.