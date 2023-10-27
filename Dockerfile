FROM node AS builder

WORKDIR /frontend
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install

COPY /frontend ./frontend
RUN npm run build