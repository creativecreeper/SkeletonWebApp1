"use strict";

const express = require("express");
const app = express();
const port = 5000;
const middlewareLogger = require("./middlewareLogger");

app.get("/customer", 
        middlewareLogger.logRequest,
        (req, res, next) => {
            res.send("customer returned"); 
            next(); 
        }
        );

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//Next release:
//Get controllers working with middleware that logs
