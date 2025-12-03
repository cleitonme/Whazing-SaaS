# Para garantir melhor segurança e desempenho, vamos configurar o Whazing para rodar pelo Cloudflare

1. **Configuração do Domínio no Cloudflare**:
   * Certifique-se de que seu domínio está devidamente configurado no Cloudflare.
   * Acesse [Cloudflare Dashboard](https://one.dash.cloudflare.com/).
2. **Configuração do Túnel**:
   * Vá para a opção "Redes" e selecione "Tunnels".
   * Crie um novo túnel.
   * Escolha a opção "Cloudflared".
   * Nomeie o túnel como "Servidor Whazing".
   * Salve o túnel.
3. **Instalação do Cloudflared**:
   * Na próxima tela, selecione a opção "Debian - 64-Bit".
   * Clique no botão para copiar todo o código de instalação.
   * No terminal SSH do seu servidor, cole o código copiado.
   * Se a instalação for bem-sucedida, o túnel aparecerá na seção "Connectors".
   * Clique em "Próxima" para continuar.

![print](/broken/files/JOPbAh0Dxp3nVW96FmK3)

4. **Configuração do Backend**:
   * Nesta tela, configure o domínio do seu backend:
     * Tipo: "HTTP"
     * URL: "127.0.0.1:3000"
   * Salve as configurações.
   * Na lista de túneis, clique nos três pontos ao lado do túnel e selecione "Configurar".
   * Adicione o nome do host público.

![print](/broken/files/4IT4JTH8vtBsYtFutItl)

5. **Configuração do Frontend**:
   * Nesta tela, configure o domínio do seu frontend:
     * Tipo: "HTTP"
     * URL: "127.0.0.1:3333"
