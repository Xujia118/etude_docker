# Instructions

## Create Dockerfile

### In the root of the folder, create a file named "Dockerfile", add the following lines

FROM node:alpine

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start"]

### Create docker image

In terminal, under the same folder with Dockerfile. Add "-t name" to give an image name
docker build -t name:version .

If you are in another folder, do:
docker build ./foldername

If you are building React vite image, add the following in vite.config.js to export default:

  server: {
    host: '0.0.0.0',
    port: 5173,
  },

### Check images

docker images

### Delete images

docker image rm name:version

## Run Container

### Run container

docker run -d -it --name express-app-container -p 3000:3000 image_id (detached mode, and give container a name, port mapping)

Add volumes 
-v ${pwd}:/usr/app
-v /usr/app/node_modules

### Check running containers

docker ps

### Stop running containers

docker stop/kill container_name

### Remove running containers

docker rm container_name


