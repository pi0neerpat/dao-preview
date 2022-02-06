# ==
# Base
FROM node:14 as base

WORKDIR /app

ARG NODE_ENV
ARG RUNTIME_ENV

ENV NODE_ENV=$NODE_ENV
ENV RUNTIME_ENV=$RUNTIME_ENV

COPY packages .
COPY package.json .
COPY yarn.lock .
COPY redwood.toml .
COPY graphql.config.js .

COPY api/package.json api/package.json
COPY web/package.json web/package.json

RUN yarn install --frozen-lockfile

# ==
# Build
FROM base as build

COPY api .
COPY web .
COPY packages .

RUN yarn build-packages && yarn rw build

# ==
# Serve
FROM node:14 as serve

WORKDIR /app

COPY serve.sh .

# web
COPY --from=builder /app/web/dist /app/web/dist
# packages
COPY --from=build /app/packages /app/packages
# api
COPY --from=build /app/node_modules/.prisma /app/node_modules/.prisma
COPY --from=build /app/api/dist /app/api/dist
COPY --from=build /app/api/db /app/api/db
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/api/package.json /app/api/package.json
COPY --from=build /app/yarn.lock /app/api/yarn.lock

COPY --from=build /app/redwood.toml /app/redwood.toml

RUN yarn --frozen-lockfile install
RUN npx playwright install

EXPOSE 8910

ENTRYPOINT ["./serve.sh"]
