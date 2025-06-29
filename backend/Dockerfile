FROM node:18-alpine

WORKDIR /app
COPY . .

RUN npm install

# Prisma generate
RUN npx prisma generate

EXPOSE 5000
CMD ["npm", "run", "start:dev"]
