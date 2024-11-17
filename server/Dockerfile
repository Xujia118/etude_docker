# Set up backend
FROM node:alpine

WORKDIR /app

COPY ./server/package.json ./server/
RUN cd server && npm install
COPY ./server ./server/

# Expose the backend port
EXPOSE 3000

# Run the backend server
CMD ["npm", "start", "--prefix", "/app/server"]
