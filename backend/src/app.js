// const express = require("express");
// const connectDB = require("./config/database");
// const app = express();
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(cookieParser());

// const authRouter = require("./routes/auth");
// const profileRouter = require("./routes/profile");
// const requestRouter = require("./routes/request");
// const userRouter = require("./routes/user");

// app.use("/", authRouter);
// app.use("/", profileRouter);
// app.use("/", requestRouter);
// app.use("/", userRouter);

// connectDB()
//   .then(() => {
//     console.log("Database connection establised....");
//     app.listen(7777, () => {
//       console.log("server is successfully listening on port 3000.....");
//     });
//   })
//   .catch((err) => {
//     console.error("Database connot be connected", err);
//   });

const express = require("express");
const connectDB = require("./config/database");
require("dotenv").config(); // Load environment variables
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

// CORS Configuration
app.use(
  cors({
    origin: ["http://localhost:3000", "https://your-frontend-url.com"], // Add your frontend's Render URL
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(cookieParser());

// Import routes
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

// Use routes
app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

// Connect to the database and start the server
connectDB()
  .then(() => {
    console.log("Database connection established...");
    const PORT = process.env.PORT || 7777; // Use dynamic port for deployment
    app.listen(PORT, () => {
      console.log(`Server is successfully listening on port ${PORT}...`);
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected:", err.message);
  });
