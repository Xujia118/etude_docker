# Stage 1: Build the frontend
FROM node:alpine AS client-builder

WORKDIR /app

COPY ./client/package.json ./client/
RUN cd client && npm install
COPY ./client ./client/
RUN cd client && npm run build