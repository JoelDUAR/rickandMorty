/* require("dotenv").config();
const http = require("http");
const getCharById = require("./controllers/getCharById.js");
const getCharDetail = require("./controllers/getCharDetail.js");

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const {url} = req;s

    if(url.includes("onsearch")){
         const id = url.split("/").at(-1);
        getCharById(res, id)
    }
    
    if(url.includes("detail")){
        const id = url.split('/').at(-1);
        getCharDetail(res, id)
    }
}).listen(3001, "localhost"); */

require("dotenv").config();
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const server = express();
server.use(express.json())
server.use(morgan("dev"));
server.use(cors())

server.use("/rickandmorty", router);

server.listen(PORT, ()=>{
    console.log('Server raised in port ' + PORT);
})