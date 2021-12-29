FROM node:alpine

WORKDIR /app
ADD dist/apps/blog /app
RUN yarn install

CMD ["yarn", "start"]
