FROM node:16-alpine3.15

RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 3001

CMD ["node", "/home/app/app.js"]