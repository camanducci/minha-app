# Usar imagem base Node.js
FROM node:14

# Criar e definir diretorio de trabalho
WORKDIR /usr/src/app

# Copiar o package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos da aplicação
COPY . .

# Expor a porta que a aplicação ira rodar
EXPOSE 8090

# Rodar aplicação
CMD [ "node", "app.js" ]