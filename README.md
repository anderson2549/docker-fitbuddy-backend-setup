# docker-fitbuddy-backend-setup
docker-fitbuddy-backend-setup

# MongoDB Docker Setup

This project provides a simple setup for running a MongoDB server and a Node.js application using Docker. It includes a `docker-compose.yml` file for defining the services and a `Dockerfile` for building the application image.

## Prerequisites

- Docker installed on your machine
- Docker Compose installed

## Installing Docker

1. **For macOS**:
   - Download Docker Desktop from [Docker's official website](https://www.docker.com/products/docker-desktop/).
   - Install Docker Desktop and follow the setup instructions.
   - Start Docker Desktop.

2. **For Windows**:
   - Download Docker Desktop from [Docker's official website](https://www.docker.com/products/docker-desktop/).
   - Install Docker Desktop and follow the setup instructions.
   - Start Docker Desktop.

3. **For Linux**:
   - Follow the instructions for your distribution on [Docker's official documentation](https://docs.docker.com/engine/install/).
   - Install Docker Compose by following the instructions [here](https://docs.docker.com/compose/install/).

4. **Verify Installation**:
   Run the following commands to verify Docker and Docker Compose are installed:
   ```bash
   docker --version
   docker-compose --version
   ```

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anderson2549/FitBuddyBackend.git
   cd FitBuddyBackend
   ```

2. **Build and start the services**:
   Run the following command to build the Docker images and start the containers:
   ```bash
   docker-compose up --build
   ```

3. **Access the application**:
   - The Node.js application will be running on `http://localhost:8080`.
   - The MongoDB server will be running on `localhost:27017`.

4. **Stopping the services**:
   To stop the services, press `CTRL + C` in the terminal where the services are running. Alternatively, you can run:
   ```bash
   docker-compose down
   ```

## Additional Information

- You can customize the MongoDB configuration by modifying the environment variables in the `docker-compose.yml` file.
- For persistent data storage, ensure that you have configured volumes in the `docker-compose.yml` file.

## License

This project is licensed under the MIT License.
