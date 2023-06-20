### .env file belongs to backend folder
MONGO_USERNAME=myusername
MONGO_PASSWORD=mypassword
MONGO_DBNAME=mydatabase
MONGO_CLUSTER=mycluster

### This is private folders for making your job easier. I have provided you the details.

### How to Launch with Docker? 
### In the terminal, run the following command: git clone repository-link
### Open your system's Docker daemon or Docker Desktop to store the container.

### Step-by-Step Guide to Deploying a Container and Running it Using Docker

### 1. Build the Docker image:
# docker-compose build
### This command will build the Docker image based on the instructions specified in your `Dockerfile` and `docker-compose.yaml` files. It will pull the necessary dependencies, set up the environment, and package your application into an image.

### 2. Start the container:
# docker-compose down
# docker-compose up
### This command will start the container based on the image you built. It will create and run the necessary services defined in your `docker-compose.yaml` file. The output will be displayed in the console, and you should see logs from your running application.

### 3. Access your application:
### Once the container is up and running, you can access your application. If you've exposed ports in your `docker-compose.yaml` file, you can access the application using the specified ports. For example, if you have mapped port `3000` for the frontend and port `5000` for the backend, you can access them as follows:
### - Frontend application: Open your web browser and navigate to `http://localhost:3000`.
### - Backend application: You can interact with the backend application through API requests using tools like cURL, Postman, or even a web browser extension like REST Client.

### 4. Stop the container:
### To stop the running container, press `Ctrl + C` in the terminal where the container is running.

### 5. Remove the container:
### If you want to remove the container and clean up resources, run the following command:
# docker-compose down
### This will stop and remove the containers defined in your `docker-compose.yaml` file.

### These steps should help you deploy and run your containerized MERN application using Docker.

### How to Launch without Docker? 
### *Step 1*: Change the current directory to the frontend folder: `cd frontend`
### *Step 2*: Split the terminal to access the backend current directory folder: `cd backend`
### *Step 3*: In the first half of the terminal, the current directory is the frontend folder. Install the packages: `npm install`
### *Step 4*: In the second half of the terminal, the current directory is the backend folder. Install the packages: `npm install`
### *Step 5*: In the first terminal (frontend folder), type the command: `npm start`
### *Step 6*: In the second terminal (backend folder), start the backend server (assuming the server file is `app.js`): `nodemon app.js`

### Admin credentials for the database:
### Username: sandeep
### Password: sandeep
