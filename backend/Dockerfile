# Use Node.js base image
FROM node:alpine3.18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .

# Install dependencies
RUN npm install -g pm2 && npm install

# Copy app files
COPY . .

# Copy the .env file into the container
COPY .env .env

# Expose the application port
EXPOSE 5000

# Start the application with PM2
CMD ["pm2-runtime", "server.js"]

