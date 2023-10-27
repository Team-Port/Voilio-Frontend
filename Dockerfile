FROM node:latest as builder

WORKDIR /frontend
ENV PATH /frontend/node_modules/.bin:$PATH

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build 


FROM nginx:1.17.0-alpine

COPY --from=builder /frontend/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]