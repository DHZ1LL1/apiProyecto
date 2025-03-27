# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de la aplicación en el contenedor
COPY . .

# Expone el puerto de la aplicación
EXPOSE 3005

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]
