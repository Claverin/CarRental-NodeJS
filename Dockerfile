FROM node:22

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

RUN npm run build

CMD [ "node", "dist/index.js"]