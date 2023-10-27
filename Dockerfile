FROM node:latest

WORKDIR /frontend

COPY ./package.json /frontend/
COPY ./package-lock.json /frontend/

RUN npm install --silent
RUN npm install react-scripts -g --silent

COPY . /frontend/

# start app
CMD ["npm", "start"]

EXPOSE 3000