# Build the frontend
FROM node:alpine AS builder

WORKDIR /app

COPY client/package.json ./client/
RUN cd client && npm install
COPY client ./client/
RUN cd client && npm run build

# Set up backend
FROM node:alpine

WORKDIR /app

COPY server/package.json ./server/
RUN cd server && npm install
COPY server ./server/

EXPOSE 3000
CMD ["npm", "start", "--prefix", "server"]