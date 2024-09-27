FROM node:20.11-alpine

WORKDIR /app

COPY . .

RUN npm i pnpm -g

RUN pnpm i

RUN pnpm run build

EXPOSE 3000

ENV PORT 3000

CMD ["pnpm", "start"]
