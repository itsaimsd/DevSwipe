# DevTinder UI

- Create a Vite + React application
- Remove uneccesary code and create a Hellow world app
- Install Tailwind CSS
- Install Daisy UI
- Add NavBar component to App.jsx
- Create a NavBar separate Component file
- Install react router dom
- Create BrowserRouter > Routes>Route=/ Body >RouteChildren
- Create an Outlet in your Body Component
- Create a Footer
- Create a login page
- Install axios
- CORS -Install cors in backend =>add middleware to with configuration: origin,credentials:true
- Whenever you're making API call so passed axios => {withCredentials:true}
- install react-redux + @reduxjs/toolkit - https://redux-toolkit.js.org/introduction/getting-started
- configureStore => Provider => createSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user as logs in
- Refactor our code to add constants file + create a components folder
- you should not be access other routes without login
- If token is not present,redirect user to login page
- Logout feature
- Get the feed and the feed in the store
- build the user card on feed
- Show toast message on save profile
- New Page -see all my connections
- Feature - Accept/Reject Connection Request
- send/ignore the user card from Feed
- send/ignore the user card from Feed
- Signup New User
- E2ETesting

- Body
  NavBar
  Route=/ =>Feed
  Route=/login =>login
  Route=/connections =>Connections
  Route=/profile =>Profile


# deployement
- Signup on aws 
- create a new account
- create a key value pair
- Launch instance
- chmod 400 "dev-swipe-secret.pem"
- ssh -i "dev-swipe-secret.pem" ubuntu@ec2-13-60-83-3.eu-north-1.compute.amazonaws.com
- 