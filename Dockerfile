FROM ubuntu:focal

ENV DEBIAN_FRONTEND=noninteractive

WORKDIR /usr/share/app

RUN apt-get -y update

RUN apt-get install -y apache2

RUN apt-get install -y curl

RUN curl -fsSL https://deb.nodesource.com/setup_18.x

RUN apt-get install -y nodejs

RUN apt-get install -y build-essential

RUN apt-get install -y npm

ADD . /usr/share/app

CMD ["node","index.js"]
