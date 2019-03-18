const Joi = require('joi');

const db = require("../db/customer");
const customerSchemas = require("../model/customer");

const get = async (req, res, next) => {
  //TODO: return a customer from db based on passed in parameter
  var customer =  await db.retrieve(req.query["name"]);
  if (customer === null)
  {
    response="Customer not found";
  }
  else
  {
    response = JSON.stringify(customer);
  }
  res.send(response);
  next();
};

const post = async (req, res, next) => {
  console.log("IN customer post");
  const customerCreateBody = req.body;
  // Return result.
  const result = Joi.validate(customerCreateBody, customerSchemas.newCustomerSchema);
  if (result.error === null)
  {
    customer = await db.createNew(customerCreateBody);
    res.send(JSON.stringify(customer));
  }
  next();
};

module.exports = { get, post }
;
