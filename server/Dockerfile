FROM node:14.7.0-alpine3.12
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9000
CMD [ "npm", "run", "dev" ]