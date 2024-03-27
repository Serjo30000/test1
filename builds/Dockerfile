FROM node:14 as build

RUN npm install -g sequelize-cli

WORKDIR /usr/src/app

COPY db.js db.js

COPY index.js index.js

COPY package.json package.json

COPY --chmod=0755 scripts/run.sh run.sh

RUN npm install

FROM build

COPY . .

COPY ./migrations ./migrations

ENTRYPOINT ["./run.sh"]
