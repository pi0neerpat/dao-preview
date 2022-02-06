# ==
# Base
FROM node:14 as build

WORKDIR /app

ARG NODE_ENV

ENV NODE_ENV=$NODE_ENV

COPY package.json .
COPY yarn.lock .
COPY redwood.toml .
COPY graphql.config.js .

COPY api .
COPY web .

RUN yarn install --frozen-lockfile
RUN yarn rw build
RUN yarn playwright install

EXPOSE 8910

ENTRYPOINT ["yarn","rw","serve"]
