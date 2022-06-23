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
