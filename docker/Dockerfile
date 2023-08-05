FROM ubuntu:latest
VOLUME /tmp
USER root

RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y nginx nodejs mailutils postfix


ADD test_reports /usr/share/nginx/html/
ADD test_reports /var/www/html/
ADD docker/sendmail.sh  /opt/

RUN chmod +x /opt/sendmail.sh


# Append "daemon off;" to the beginning of the configuration
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Expose ports
EXPOSE 80

# Set the default command to execute
# when creating a new container
ENTRYPOINT ["/opt/sendmail.sh"]