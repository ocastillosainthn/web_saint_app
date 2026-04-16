# Etapa 1: Compilar el código de Vite/React
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servidor web para entregar el sitio
FROM nginx:alpine
# Vite genera por defecto la carpeta 'dist'
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
