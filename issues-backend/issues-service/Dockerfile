FROM node:7.7.2-alpine
RUN mkdir /app
WORKDIR /app

RUN npm install -g nodemon

ENV PATH /app/node_modules/.bin:$PATH

ADD package.json /app
RUN npm install

ADD . /app
RUN npm run seed
RUN npm start