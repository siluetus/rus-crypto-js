FROM node:20 AS base

WORKDIR /app
EXPOSE 8080
ENTRYPOINT ["/usr/local/bin/npm"]

FROM base AS stage

COPY src ./src
COPY docs ./docs
COPY package.json .
COPY webpack.config.js .
COPY index.d.ts .
COPY .npmignore .

RUN npm install

CMD ["run", "start"]
