FROM nginx

COPY dist/  /var/services/jenkins/

RUN echo 'echo init ok!!'