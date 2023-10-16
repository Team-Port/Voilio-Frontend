FROM node

WORKDIR /frontend

COPY ./package.json /frontend/
COPY ./package-lock.json /frontend/

RUN npm install

COPY . /frontend/

CMD ["npm", "start"]

EXPOSE 3000