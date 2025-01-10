const mongoose = require("mongoose");
require('dotenv').config();

// const mongourl = "mongodb://127.0.0.1:27017/hotels";
const mongourl =
  "mongodb+srv://Amarjeet_223711:Hostel90311@cluster1.2thf3.mongodb.net/";

mongoose.connect(mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("disconnected to the mongodb server", err);
});

db.on("connected", () => {
  console.log("connected to the mongodb server");
});

module.exports = db;
