From node:latest as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

Run npm run build

FROM nginx:latest

COPY --from=build /usr/local/app/dist/QUIVATO-TASK /usr/share/nginx/html

EXPOSE 80