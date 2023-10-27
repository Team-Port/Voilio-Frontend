FROM node:latest

WORKDIR /frontend

COPY ./package.json ./frontend
COPY ./package-lock.json ./frontend

RUN npm install

COPY / ./

RUN npm run build

EXPOSE 3000