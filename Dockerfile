FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for efficient Docker caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code into the container
COPY . .

# Expose port 3000 to allow external access
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]
