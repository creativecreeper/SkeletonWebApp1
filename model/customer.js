const Joi = require('joi');

const newCustomerSchema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
});

module.exports = {newCustomerSchema};