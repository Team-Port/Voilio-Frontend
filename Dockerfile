FROM node

WORKDIR /frontend
COPY . /frontend

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 3000