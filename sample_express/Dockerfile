FROM node:12

WORKDIR /home/service/

COPY package.json /home/service/package.json

COPY package-lock.json /home/service/package-lock.json

RUN npm i

COPY /src/  /home/service/src/

COPY /bin/  /home/service/bin/

COPY /app.js  /home/service/app.js

ENTRYPOINT [ "npm", "run", "start" ]