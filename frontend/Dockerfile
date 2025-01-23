# Build Stage: Use Node.js for building the React app
FROM node:alpine3.18 AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package.json package-lock.json ./

# Install the dependencies for the React app
RUN npm install

# Copy the entire source code to the container
COPY . .

# Build the React app for production (default output is `build`)
RUN npm run build

# Production Stage: Use a smaller image to serve the React app
FROM nginx:alpine

# Copy the build files from the previous stage to the Nginx HTML directory
# Adjusted from `/app/dist` to `/app/build`, which is the default output directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the frontend
EXPOSE 80

# Run Nginx in the foreground
ENTRYPOINT ["nginx", "-g", "daemon off;"]
