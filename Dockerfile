FROM node AS builder

WORKDIR /frontend
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install

COPY /frontend ./frontend
RUN npm run build

FROM nginx:latest
EXPOSE 3000
RUN rm /etc/nginx/conf.d/default.conf
RUN rm -rf /etx/nginx/conf.d/*
COPY ./nginx.conf /etc/nginx/conf.d/
COPY --from=builder frontend/build /usr/share/nginx/html