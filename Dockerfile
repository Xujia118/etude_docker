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

# Set nginx
FROM nginx:alpine

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the frontend build files directly to the Nginx root location
COPY --from=client-builder /app/client/dist /app/frontend

# Copy the backend server code to the /app directory
COPY --from=server /app /app

EXPOSE 80
EXPOSE 3000
CMD nginx -g "daemon off;" & npm start --prefix /app/server