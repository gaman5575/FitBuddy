# FitBuddy

Fitbuddy is a comprehensive fitness app designed to support users in tracking and managing their workout routines, meal intake, and overall fitness progress. It offers features like detailed workout logging, nutritional tracking, calendar integration for scheduling fitness activities, and progress monitoring tools. Fitbuddy aims to help users achieve their fitness goals through personalized workout and meal plans, while also fostering a supportive community through social features and professional advice.

### Project Type

Frontend | Backend

### Deployed Link

- FitBuddy: [Live Demo](https://union-ubuntu-046.vercel.app/)

### Directory Structure

<img src="./Photos/Directory.png" alt="">

### video Walkthrough of the project

-[Presentation Link](https://youtu.be/KAi-4gsl1bU)

### Screenshots

**Landing Page**

<img src="./Photos/Landing Page.png" alt="">

**Login and Signup Page**

<img src="./Photos/Signin Singup.jpg" alt="">

**Workout Detail Page**

<img src="./Photos/workout.png" alt="">

**Search Page**

<img src="./Photos/Search.png" alt="">

**Contact Detail Page**

<img src="./Photos/Contact.png" alt="">

**Exercise Detail Page**

<img src="./Photos/Exercises.png" alt="">

**Admin Dashboard**

<img src="./Photos/Admin Dashboard.png" alt="">

### Features

- **Login and Signup**: "Effortlessly access exclusive deals by logging in or sign up for personalized shopping experiences"
- **Responsive and Dynamic**: The website adapts seamlessly to any device, ensuring a smooth and intuitive experience across desktop, tablet, and mobile.
- **Admin Dashboard (CRUD Operations)**: (For authorized users) Admins can manage the platform effectively with a comprehensive dashboard enabling them to Create, Read, Update, and Delete courses, user accounts, and 
   other critical data.
- **Search bar**: Easily find the food you want with our intuitive search bar.
- **Add to Workout**: This feature lets users log and customize their exercise routines, track details like sets and reps, and save workouts for future use.
- **Calculator**: This features let user calculate the calories count, BMI, calorie need, body fat calculator, calorie calculator.

 ### Technology Stack

- **HTML**: Provides the structure and content for the web page.
- **CSS**: Handles the UI and styling, ensuring an appealing visual presentation.
- **Javascript**: JavaScript empowers dynamic and interactive web experiences through its versatile scripting capabilities.
- **Json Server**:JSON Server simplifies backend development by allowing you to quickly create a REST API with JSON data, streamlining your development process and enabling rapid prototyping.
- **MaterialUI Library**:Provides responsive designs that adapt to different screen sizes.
- **React.JS**: A JavaScript library for building user interfaces.

### Design Elements

- **Interactive**: Card have the rounded border with light blue shadow.

- **Flex and Grid**: Many of the elements takes the benefits of display flex and display grid to provide more control over the deferent layout in different sections of website.

- **Fonts & Icons**: Integrates React Fonts for enhanced visual elements. By leveraging these resources, the website achieves a modern and visually appealing design, improving readability and user engagement.

### Installation & Getting started

To run the frontend website, enter the following commands in your terminal:

```bash
#Cloning repository
Clone this repository to your local machine.

# Move into the FrontEnd Directory
cd frontEnd/

# Install all dependencies
npm install

# Run the dev server
npm run dev
```

The project uses a mock server deployed using JSON-server on render. The server can be accessed here: 

If you would like to run a local server instead, use the following commands:

```bash
# Move into the BackEnd directory
cd backEnd/

# Run the server
npm run start
```
Deploying on EC2 (AWS)
To deploy your FitBuddy app on AWS EC2 using Docker, follow the steps below:

1. Set Up an EC2 Instance
Instance Type: t2.medium or t3.medium (2 vCPUs, 4 GB RAM)
OS: Ubuntu 20.04
Security Group:
Open port 22 (SSH) for remote access.
Open port 80 (HTTP), 443 (HTTPS), 5000 (Backend), and 5173 (Frontend) for web access.
2. Connect to the EC2 Instance
After launching the EC2 instance, connect to it using SSH:

bash
Copy
ssh -i your-key.pem ubuntu@<your-ec2-public-ip>
3. Install Docker on EC2
Once connected to the EC2 instance, install Docker:

bash
Copy
# Update packages
sudo apt-get update

# Install Docker
sudo apt install docker.io

# Start Docker and enable it to start on boot
sudo systemctl start docker
sudo systemctl enable docker

# Verify Docker installation
docker --version
4. Clone the FitBuddy Project
Clone the FitBuddy repository on your EC2 instance or transfer the project files:

bash
Copy
# Clone your repository
git clone https://github.com/your-repo/FitBuddy.git

# Move into the project directory
cd FitBuddy
5. Build Docker Images for Backend and Frontend
Now, build the Docker images for both the backend and frontend:

Backend Docker Image:
bash
Copy
# Move to backend directory
cd backend

# Build the backend image
docker build -t fitbuddy-backend .
Frontend Docker Image:
bash
Copy
# Move to frontend directory
cd frontend

# Build the frontend image
docker build -t fitbuddy-frontend .
6. Run Docker Containers for Backend and Frontend
Run Backend Container:
bash
Copy
docker run -d \
  --name fitbuddy-backend \
  --network fitbuddy-network \
  -p 5000:5000 \
  -e CLIENT_URL=http://<your-ec2-public-ip>:5173 \
  -e CLIENT_URL_1=http://another-client-url.com \
  -e mongo_url="mongodb+srv://<your-mongo-db-connection>" \
  -e JWT=fitbuddy \
  fitbuddy-backend
Run Frontend Container:
bash
Copy
docker run -d \
  --name fitbuddy-frontend \
  --network fitbuddy-network \
  -p 5173:80 \
  -e VITE_API_URL=http://<your-ec2-public-ip>:5000/api \
  fitbuddy-frontend
7. Access the Application
The frontend will be available at http://<your-ec2-public-ip>:5173.
The backend API will be available at http://<your-ec2-public-ip>:5000.
8. Monitor Running Containers
To check if both containers are running successfully:

bash
Copy
docker ps

### Contributors

- [Shobhit Gupta](https://github.com/shobhit9742)
### Acknowledments

- Inspired by the original FitBuddy website.
- Special thanks to our dedicated team for their invaluable contributions to FitBuddy,

