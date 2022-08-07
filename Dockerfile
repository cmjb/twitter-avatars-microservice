FROM node:18-bullseye

RUN apt update && apt install -y libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm1 libasound2 libpangocairo-1.0-0 libxss1 libgtk-3-0

COPY . /app

WORKDIR /app

RUN npm i

EXPOSE 8080

ENTRYPOINT ["node", "/app/index.js"]