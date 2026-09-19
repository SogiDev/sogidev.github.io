FROM node:26-slim

WORKDIR /app

# Copy project files
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port 3000 for Astro dev server
EXPOSE 3000

# Run Astro dev server
CMD ["npm", "run", "dev"]
