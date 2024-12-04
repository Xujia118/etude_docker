FROM node:alpine as build

WORKDIR /app

COPY client/package.json ./client/package.json
RUN cd client && npm install
COPY client ./client
RUN cd client && npm run build

COPY server/package.json ./server/package.json
RUN cd server && npm install
COPY server ./server

RUN mkdir -p /app/server/public
RUN cp -r /app/client/dist /app/server/public

EXPOSE 3000
CMD ["npm", "start", "--prefix", "/app/server"]
