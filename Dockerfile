FROM node:latest

WORKDIR /frontend

COPY ./package.json /frontend/
COPY ./package-lock.json /frontend/

RUN npm install

COPY . /frontend/

RUN npm run build 

CMD ["npm", "run", "start"]

EXPOSE 3000