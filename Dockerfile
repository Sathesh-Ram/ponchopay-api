# Use official Node.js image as the base
FROM node:18-alpine

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all source files
COPY . .

# Build the TypeScript project
RUN npm run build

# Expose port
EXPOSE 4000

# Start the app
CMD ["npm", "start"]
