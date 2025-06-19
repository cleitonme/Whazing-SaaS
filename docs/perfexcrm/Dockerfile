FROM php:8.2-apache

EXPOSE 80

RUN apt-get update -y && \
    apt-get install -y libpng-dev libc-client-dev libkrb5-dev libzip-dev --no-install-recommends

RUN docker-php-ext-configure imap --with-kerberos --with-imap-ssl && \
    docker-php-ext-install -j$(nproc) imap

RUN docker-php-ext-install mysqli gd zip

RUN a2enmod rewrite
COPY perfexcrm/ /var/www/html/

RUN echo 'allow_url_fopen=On' >> /usr/local/etc/php/conf.d/custom.ini

RUN chown -R www-data:www-data /var/www/html/

RUN chmod 755 /var/www/html/uploads/
RUN chmod 755 /var/www/html/application/config/
RUN chmod 755 /var/www/html/application/config/config.php
RUN chmod 755 /var/www/html/application/config/app-config-sample.php
RUN chmod 755 /var/www/html/temp/