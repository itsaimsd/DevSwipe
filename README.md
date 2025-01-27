# DevSwipe

📌 Note on Project Progress
- Initially, the frontend and backend were developed in separate repositories to organize and manage development independently. As the project matured, both were integrated into this repository for easier maintenance and deployment.

- Frontend Repository: [DevSwipe Frontend](https://github.com/itsaimsd/DevSwipe-Frontend)
- Backend Repository: [DevSwipe Backend](https://github.com/itsaimsd/DevSwipe-backend)
- These separate repositories provide a detailed record of the progress and development journey of the project. Feel free to explore them to understand the incremental improvements made during the development process.

**About DevSwipe**

- DevSwipe is a matchmaking platform designed specifically for developers. The platform enables users to create profiles, explore other developers, and connect based on mutual interests, skills, and goals. It includes features such as user authentication, matchmaking, sending connection requests, and a visually appealing interface powered by DaisyUI.

- Additionally, users can:
    - Send Requests: Browse through profiles and send connection requests to other developers.
    - Make Connections: Accept or reject incoming connection requests, building a personalized network.
    - Chat Messaging: Engage in real-time conversations with connections, fostering collaboration and networking.


## **Installation and Setup**
- Follow these steps to set up the project on your local machine:

- Clone the Repository
    - git clone [https://github.com/itsaimsd/DevSwipe.git]

    - Navigate to the project directory:
        - cd DevSwipe

    - Install Backend Dependencies
        - cd backend
        - npm install

- Install Backend Dependencies
    - cd backend
    - npm install
- Configure the Backend
    - Create a .env file in the backend folder.
    - Add the following environment variables
        PORT=5000
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret_key
        - [Replace your_mongodb_connection_string and your_jwt_secret_key with your actual MongoDB connection string and JWT secret key.]



## **Key Features**
- User Authentication:
    - Secure signup and login using JWT for authentication.
    - Passwords hashed securely using bcrypt.

- Matchmaking System:
    - View other developers’ profiles with their details like name, skills, and interests.
    - Swipe through profiles and send requests to connect.

- Connection Management:
    - Accept or reject connection requests from other users.
    - Maintain a list of confirmed connections.

- Chat Messaging:
    - Message your connections in real-time to collaborate or network.

- Responsive UI:
    - A user-friendly interface built with React.js, TailwindCSS, and DaisyUI.

## **Updated Project Workflow**
- Sign Up:
    - Create a profile with personal details and skills.
    - Authenticate using a secure password.

- Explore Developers:
    - Browse through developer profiles.
    - Send requests to connect.

- Manage Requests:
    - Accept or reject connection requests from other users.

- Chat:
    - Once connected, start a chat with developers in your network.

- Stay Connected:
    - Maintain a personalized list of connections.

## **Future Enhancements**
- Filter and Search:
    - Add filters to search for developers by skills, location, or experience level.

- Profile Customization:
    - Allow users to add portfolio links, GitHub repositories, or resume uploads.

- Push Notifications:
    - Notify users when they receive a new connection request or message.

- Deployment:
    - Host the project live to make it accessible to users online.

 