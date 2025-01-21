# Build Stage: Use Node.js for building the React app
FROM node:alpine3.18 AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json
COPY package.json .

# Install the dependencies for the React app
RUN npm install

# Copy the entire source code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Production Stage: Use a smaller image to serve the React app
FROM nginx:alpine

# Copy the build files from the previous stage to the Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the frontend
EXPOSE 80

# Run Nginx in the foreground
ENTRYPOINT ["nginx", "-g", "daemon off;"]

