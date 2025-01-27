# DevSwipe

**About DevSwipe**

- DevSwipe is a matchmaking platform designed specifically for developers. The platform enables users to create profiles, explore other developers, and connect based on mutual interests, skills, and goals. It includes features such as user authentication, matchmaking, sending connection requests, and a visually appealing interface powered by DaisyUI.

- Additionally, users can:
    - Send Requests: Browse through profiles and send connection requests to other developers.
    - Make Connections: Accept or reject incoming connection requests, building a personalized network.
    - Chat Messaging: Engage in real-time conversations with connections, fostering collaboration and networking.


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

## **Project Structure**
DevSwipe/
├── backend/                            # Backend folder
│   ├── node_modules/                   # Backend dependencies
│   ├── src/                            # Source files for backend
│   │   ├── config/                     # Configuration files
│   │   │   └── database.js             # MongoDB connection setup
│   │   ├── middlewares/                # Middleware for backend
│   │   │   └── auth.js                 # JWT authentication middleware
│   │   ├── models/                     # Database models
│   │   │   ├── connectionRequest.js    # Model for connection requests
│   │   │   └── user.js                 # Model for users
│   │   ├── routes/                     # Backend routes
│   │   │   ├── auth.js                 # Routes for authentication (login/signup)
│   │   │   ├── profile.js              # Routes for user profile operations
│   │   │   ├── request.js              # Routes for managing connection requests
│   │   │   └── user.js                 # Routes for user operations
│   │   ├── utils/                      # Utility functions
│   │   │   └── validation.js           # Validation logic for backend inputs
│   │   └── app.js                      # Main server file for backend
│   ├── .gitignore                      # Backend .gitignore file
│   ├── apiList.md                      # API documentation file
│   ├── package-lock.json               # Backend lock file
│   ├── package.json                    # Backend dependencies
│   └── README.md                       # Instructions for running backend
│
├── frontend/                           # Frontend folder
│   ├── node_modules/                   # Frontend dependencies
│   ├── public/                         # Static assets
│   │   ├── index.html                  # Main HTML file
│   │   └── manifest.json               # Metadata for PWA support
│   ├── src/                            # Source files for frontend
│   │   ├── components/                 # Reusable React components
│   │   │   ├── Body.js                 # Main body of the application
│   │   │   ├── Connections.js          # Component for connections page
│   │   │   ├── EditProfile.jsx         # Component for editing user profiles
│   │   │   ├── Feed.js                 # Component for user feed
│   │   │   ├── Footer.js               # Footer component
│   │   │   ├── Login.jsx               # Login/Signup form
│   │   │   ├── Message.js              # Chat and messaging component
│   │   │   ├── NavBar.jsx              # Navigation bar
│   │   │   ├── Profile.jsx             # User profile page
│   │   │   ├── Requests.js             # Component to view and handle requests
│   │   │   └── UserCard.js             # Card component for displaying users
│   │   ├── utils/                      # Utility functions and Redux slices
│   │   │   ├── appStore.js             # Redux store configuration
│   │   │   ├── connectionSlice.js      # Redux slice for connection management
│   │   │   ├── constants.js            # Constants like BASE_URL
│   │   │   ├── feedSlice.js            # Redux slice for managing feed
│   │   │   ├── requestSlice.js         # Redux slice for managing requests
│   │   │   └── userSlice.js            # Redux slice for user management
│   │   ├── App.js                      # Main React application file
│   │   ├── index.js                    # Entry point for React
│   │   ├── index.css                   # Global styles
│   │   ├── tailwind.config.js          # TailwindCSS configuration
│   │   └── README.md                   # Instructions for running frontend
│   ├── .gitignore                      # Frontend .gitignore file
│   ├── package-lock.json               # Frontend lock file
│   ├── package.json                    # Frontend dependencies
│   └── README.md                       # Instructions for running frontend
│
├── README.md                           # Main project instructions
