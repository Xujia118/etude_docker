# Copy dist to Nginx folder
FROM nginx:alpine

# Copy the dist folder from the client-builder stage to the Nginx web directory
COPY --from=client-builder /app/client/dist /usr/share/nginx/html

# Optionally, copy your custom nginx.conf file
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
