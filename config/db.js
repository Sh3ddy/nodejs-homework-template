
const mongoose = require('mongoose');
require ('dotenv').config()
const uri = process.env.URI_DB

const db = mongoose.connect(uri, 
    { useNewUrlParser: true, 
      useUnifiedTopology: true, 
    })

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to Pisya-Popa");
})

mongoose.connection.on("error", (err) => {
  console.log(`Mongoose connection error: ${err}`);
})

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from Pisya-Popa");
})

process.on("SIGINT", async () => {
  mongoose.connection.close();
  console.log("Mongoose disconnected from Pisya-Popa");
  process.exit(1);
});

module.exports = db