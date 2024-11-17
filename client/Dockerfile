# Stage 1: Build the frontend
FROM node:alpine AS client-builder

WORKDIR /app

COPY ./client/package.json ./client/
RUN cd client && npm install
COPY ./client ./client/
RUN cd client && npm run build

# Stage 2: Copy dist to Nginx folder
FROM nginx:alpine

# Copy the dist folder from the build stage to the Nginx web directory
COPY --from=client-builder /app/client/dist /usr/share/nginx/html