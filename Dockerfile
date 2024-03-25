# Use an official Node.js runtime as a parent image
FROM node:lts-alpine

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

# No need to serve the app with Nginx inside the Docker container
# The app's build artifacts are ready to be served by Nginx on the host
