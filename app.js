"use strict";

const express = require("express");
const app = express();
const port = 5000;

app.get("/test", (req, res) => res.send("Hello World!"));

app.get("/customer", (req, res, next) => { console.log("Customer"); res.send("customer returned"); });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
