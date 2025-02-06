// require("dotenv").config();
const mongoose = require("mongoose");
// database
const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = connectDB;
