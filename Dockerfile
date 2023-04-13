# Start with a base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app.js file to the container
COPY app.js .

# Expose port 3000 for incoming traffic
EXPOSE 3000

# Start the Node.js application
CMD ["npm", "start"]
