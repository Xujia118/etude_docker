# Build the frontend
FROM node:alpine AS client-builder

WORKDIR /app

COPY client/package.json ./client/
RUN cd client && npm install
COPY client ./client/
RUN cd client && npm run build

# Set up backend
FROM node:alpine AS server

WORKDIR /app

COPY server/package.json ./server/
RUN cd server && npm install
COPY server ./server/

# Set ngnix
FROM ngnix:alpine

# Copy the Nginx configuration file
COPY ngnix.conf /etc/ngnix/ngnix.conf

# Copy the frontend build files directly to the Nginx root location
COPY --from=client-builder /app/client/dist /app/frontend

# Copy the backend server code to the /app directory
COPY --from=server /app /app

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# EXPOSE 3000
# CMD ["npm", "start", "--prefix", "server"]