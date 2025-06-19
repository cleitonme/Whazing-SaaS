## **Modulo para notificação PerfexCRM**  

- Esse modulo foi testado versao perfexcrm 3.3.1 e php 8.2

- Em anexo modelo dockerfile usado para instalar via docker o perfex

- Para gerar imagem docker crie uma pasta "perfexcrm" coloque arquivos dele dentro e arquivo dockerfile pasta anteorior onde sera executado comandos


   ```bash
   docker build -t perfexcrm .
   ````

para subir imagem - 8090 porta que ele vai ser instalado, dae tem configura nginx ou proxy de sua preferencia

   ```bash
   docker run --name perfexcrm -itd -p 8090:80 perfexcrm:latest
   ````