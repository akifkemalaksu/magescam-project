# Step 1: Build the Vue.js application
# Use an official Node.js runtime as a parent image
FROM node:lts-alpine as build-stage

# Set the working directory
WORKDIR /app

# Copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the project files into the Docker image
COPY . .

# Build app for production with minification
RUN npm run build

# Step 2: Serve the application from Nginx
FROM nginx:stable-alpine as production-stage

# Copy built assets from 'build-stage' to the directory that Nginx serves
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80
EXPOSE 443

# When the container starts, start Nginx server
CMD ["nginx", "-g", "daemon off;"]
