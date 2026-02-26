from node:20-alpine

WORKDIR /app

COPY package.json .

# Env variables
ENV NODE_ENV=production
ENV PORT=3000

RUN npm install -g pnpm

RUN pnpm install -p

CMD ["pnpm", "build", "&&", "pnpm", "start", "--port=$PORT"]
