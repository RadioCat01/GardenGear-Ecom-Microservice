#FROM node:alpine

#WORKDIR /usr/src/app

#COPY . /usr/src/app

#RUN npm install -g @angular/cli

#RUN npm install

#CMD ["ng", "serve", "--host", "0.0.0.0"]

FROM node:alpine as build

WORKDIR /usr/src/app

COPY Frontend .

RUN npm install -g @angular/cli

RUN npm install

RUN ng build --configuration production

FROM nginx:latest

COPY --from=build /usr/src/app/dist/frontend /usr/share/nginx/html

EXPOSE 80

