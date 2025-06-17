FROM node:18

# Set the working directory inside the container
WORKDIR /app
 
# Clone the repository
RUN git clone https://github.com/anderson2549/FitBuddyBackend.git /app/

# Checkout a specific tag
RUN cd /app &&  git checkout main && git pull origin main


# Install file env
RUN cp /app/.env.example /app/.env || echo 'No .env.example file found'

# Install dependencies
RUN npm install


# Expose the port the app runs on (adjust if necessary)
EXPOSE 8080
EXPOSE 27017