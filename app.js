"use strict";

const express = require("express");
var bodyParser = require('body-parser');

const customer=require('./controller/customer.js');
const middlewareLogger = require("./middlewareLogger");

const port = 5000;
const app = express();

app.use(bodyParser.json()); // for parsing application/json

app.get("/customer", 
        middlewareLogger.logRequest,
        (req, res, next) => {
            res.send("customer returned"); 
            next(); 
        }
        );

app.post("/customer", 
        middlewareLogger.logRequest,
        customer.post
        );

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//pick up port from env variable
