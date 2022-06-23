//This is the Web Server
require("dotenv").config();
const express = require("express");
const server = express();

//enables corss-origin resource sharing to proxy api requests
//from localhost:3000 to localhost:4000 in local dev env
const cors = require("cors");
server.use(cors());

// create logs for everything
const morgan = require("morgan");
server.use(morgan("dev"));

//handles application/json requests
server.use(express.json());
server.use((req, res, next) => {
  console.log("BODY LOGGER START");
  console.log(req.body);
  console.log("BODY LOGGER END");
  next();
});

//here's our static files
const path = require("path");
server.use(express.static(path.join(__dirname, "build")));

//here's the API
server.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//bring in the DB connection
const { client } = require("./db");

//connect to the server
const PORT = process.env.PORT || 4000;

// define a serer handle to close open tcp connection after unit tests have run
const handle = server.listen(PORT, async () => {
  console.log(`Server is running on ${PORT}!`);
  try {
    await client.connect();
    console.log("Database is open for business!");
  } catch (error) {
    console.error("Database is closed for repairs!\n", error);
  }
});

module.exports = { server, handle };