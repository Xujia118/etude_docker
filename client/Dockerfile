# Build the frontend
FROM node:alpine AS client-builder

WORKDIR /app

COPY package.json ./client/
RUN cd client && npm install
COPY . ./client/
RUN cd client && npm run build
