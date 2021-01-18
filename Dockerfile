FROM node:10
 
WORKDIR /usr/src/app
 
COPY package*.json ./

RUN npm install
RUN npm i @date-io/date-fns@1.3 date-fns

COPY . .
 
CMD [ "npm", "start" ]
