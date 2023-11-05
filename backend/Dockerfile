FROM node:16.14-alpine
WORKDIR /app
EXPOSE 3001
COPY package*.json ./
# RUN apt-get update -y && apt-get install -y openssl
RUN npm install
COPY . .
RUN npx prisma generate
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]