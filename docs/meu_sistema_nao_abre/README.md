## Meu sistema não está funcionando. O que fazer?

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
	 
### Erro: Backend não consegue logar - Nova instação docker
Se você enfrentar problemas no login, tente reiniciar o docker seguindo os passos abaixo:

1. Renicie os proscessos:

   ```bash
   docker container restart whazing-backend
   ```

   ```bash
   docker container restart whazing-frontend
   ```

### Instalação nova

1. **Acabei de instalar e o sistema não abre**  
   - Certifique-se de que o DNS está correto.  
   - Utilize [dnschecker.org](https://dnschecker.org) para verificar a propagação.  
     - Caso utilize Cloudflare, não ative o proxy (ícone de nuvem laranja).  
     - Ao verificar no **dnschecker.org**, o IP da sua VPS deve aparecer em todas as validações.  
     
2. **Verifique os logs do sistema**  
   - Consulte a documentação na seção **"acessando_logs"** para identificar possíveis erros.  
   
3. **Reinstale o sistema**  
   - Caso seja uma instalação nova, formate a VPS utilizando o sistema operacional recomendado **Ubuntu 22** e refaça a instalação.  

---

### Acabei de atualizar

1. **Você fez o snapshot da VPS conforme recomendado?**  
   - Caso tenha feito, retorne ao backup.  

2. **Execute o atualizador novamente**  
   - É possível que algum erro tenha ocorrido durante o processo de atualização.  

3. **Verifique os logs do sistema**  
   - Consulte a documentação na seção **"acessando_logs"** para investigar eventuais erros.  

---

### O sistema parou de funcionar "do nada"

1. **Reinicie a VPS**  

2. **Verifique os logs do sistema**  
   - Acesse a documentação na seção **"acessando_logs"** para identificar problemas.  

3. **Execute a atualização**  

4. **Verifique o DNS**  
   - Use [dnschecker.org](https://dnschecker.org) para confirmar a propagação.  
     - Caso utilize Cloudflare, não ative o proxy (ícone de nuvem laranja).  
     - O IP da VPS deve aparecer em todas as validações no **dnschecker.org**.  

5. **Certifique-se de que o SSL está correto**  
   - Consulte a documentação na seção **"Problemas com SSL"** para maiores detalhes.  

---

### Grupo de suporte

Acesse nosso grupo de suporte:  
[https://grupo.whazing.com.br](https://grupo.whazing.com.br)  

**Informe o máximo de informações possíveis**, como:  
- Domínios de acesso  
- Resultados de comandos como *ping*  
- Logs relevantes  
