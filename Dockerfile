FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

ENV HOST 0.0.0.0

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
