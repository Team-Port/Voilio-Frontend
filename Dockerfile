FROM node

WORKDIR /frontend
COPY . /frontend

COPY ./package.json ./
COPY ./package-lock.json ./

COPY . ./

RUN npm install --force

RUN npm run build

EXPOSE 3000