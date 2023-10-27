FROM node:latest as build

WORKDIR /frontend

COPY ./package.json /frontend/
COPY ./package-lock.json /frontend/

RUN npm install

COPY . /frontend/

RUN npm run build 


FROM nginx:1.17.0-alpine

# Copy the react build from Stage 1
COPY --from=build /frontend/build /var/www

# Copy our custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the Docker host, so we can access it 
# from the outside.
EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]