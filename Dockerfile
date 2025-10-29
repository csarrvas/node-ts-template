FROM node:24.11.0-alpine3.21

WORKDIR  /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run test

RUN npm run build

RUN rm -rf src/ && rm -rf node_modules/

RUN npm install --prod

CMD [ "node", "dist/app.js" ]