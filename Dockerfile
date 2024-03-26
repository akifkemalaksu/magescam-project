# Base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build your app
RUN npm run build

# Make the build folder available on /app/dist
VOLUME [ "/app/dist" ]

# You don't need to start a server, since Nginx installed on your server will serve the files.
# However, you can specify a command to keep the container running if necessary.
CMD ["node"]
