// require("dotenv").config();
const mongoose = require("mongoose");
// database
const connectDB = async () => {
  console.log("Mongo URI:", process.env.MONGO_URI);
  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = connectDB;
