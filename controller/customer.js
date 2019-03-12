const Joi = require('joi');

const db = require("../db/customer");
const customerSchemas = require("../model/customer");

const get = (req, res, next) => {
  console.log("IN customer get" + req.path + req.query.id);
  var customer = db.retrieve(req.query.id);
  console.log(JSON.stringify(customer));
  next();
};

const post = (req, res, next) => {
  console.log("IN customer post");
  const customerCreateBody = req.body;
  // Return result.
  const result = Joi.validate(customerCreateBody, customerSchemas.newCustomerSchema);
  if (result.error === null)
  {
    db.createNew(customerCreateBody);
    res.send('test');
  }
  next();
};

module.exports = { get, post }
;
