FROM node:11.15-alpine

WORKDIR /usr/src/app

COPY ["package*.json", "yarn.lock", "tsconfig.json", "./"]

COPY src src
RUN yarn install

CMD [ "yarn", "dev" ]

