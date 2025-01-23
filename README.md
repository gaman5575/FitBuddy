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


The project uses a mock server deployed using JSON-server on Render. The server can be accessed here:

If you would like to run a local server instead, use the following commands:

bash
Copy
# Move into the BackEnd directory
cd backEnd/

# Run the server
npm run start
Running the Project with Docker Locally (For Testing)
Once you have Docker installed on your machine, you can run both the frontend and backend services inside Docker containers for testing locally.

1. Building and Running the Backend with Docker:
To run the backend locally using Docker, follow these steps:

Build the Backend Docker Image:

Inside your backend directory, run the following command:

bash
Copy
docker build -t fitbuddy-backend .
Run the Backend Container:

Run the following Docker command to start the backend container:

bash
Copy
docker run -d \
  --name fitbuddy-backend \
  --network fitbuddy-network \
  -p 5000:5000 \
  -e CLIENT_URL=http://localhost:5173 \
  -e CLIENT_URL_1=http://another-client-url.com \
  -e mongo_url="mongodb+srv://<your-mongo-db-connection>" \
  -e JWT=fitbuddy \
  fitbuddy-backend
Note: Replace <your-mongo-db-connection> with your actual MongoDB connection string.

2. Building and Running the Frontend with Docker:
To run the frontend locally using Docker, follow these steps:

Build the Frontend Docker Image:

Inside your frontend directory, run the following command:

bash
Copy
docker build -t fitbuddy-frontend .
Run the Frontend Container:

Run the following Docker command to start the frontend container:

bash
Copy
docker run -d \
  --name fitbuddy-frontend \
  --network fitbuddy-network \
  -p 5173:80 \
  -e VITE_API_URL=http://localhost:5000/api \
  fitbuddy-frontend
This will make the frontend accessible on http://localhost:5173 and it will communicate with the backend running on http://localhost:5000.

3. Accessing the App Locally:
Frontend: After running the Docker container for the frontend, you can access the application by opening your browser and navigating to http://localhost:5173.
Backend: The backend API will be available at http://localhost:5000.

Acknowledgments
Inspired by the original FitBuddy website.
Special thanks to our dedicated team for their invaluable contributions to FitBuddy, and to our mentor/IA Aashish Kumar.
vbnet
Copy

---

### Where You Add the Docker Section:
- **Location**: Place the new **Running the Project with Docker Locally (For Testing)** section **just before the "Contributors"** and **"Acknowledgments"** sections.
- This way, users will follow the installation instructions first, then be able to check the Docker instructions at the end if they wish to run it with Docker locally for testing.

This addition ensures that Docker-based testing is well-documented and easy to reference in the futur


### Contributors

- [Shobhit Gupta](https://github.com/shobhit9742)

