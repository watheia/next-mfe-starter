FROM node:alpine

ENV NODE_ENV production

WORKDIR /app
ADD dist/apps/gatekeeper /app
RUN yarn set version berry && \
  yarn install

CMD ["yarn", "start"]
