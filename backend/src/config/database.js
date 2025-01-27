// const mongoose = require("mongoose");
// // database
// const connectDB = async () => {
//   await mongoose.connect(
//     "mongodb+srv://itsaimsd:c6QlvjSabP804nxP@namastenode.uieky.mongodb.net/devTinder"
//   );
// };

// module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Use the MONGO_URI environment variable
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit the application with a failure code
  }
};

module.exports = connectDB;
