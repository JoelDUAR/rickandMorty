const express = require("express");
const router = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(express.json())
server.use(morgan("dev"));
server.use(cors())

server.use("/rickandmorty", router);

module.exports = server;

