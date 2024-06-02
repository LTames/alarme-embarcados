FROM node:lts-alpine as build

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/alarme-frontend/browser /usr/share/nginx/html
