FROM ubuntu:latest
RUN apt update
RUN apt install -y nodejs npm

WORKDIR /app
COPY . .
RUN npm install
RUN node ./bib/www