const Joi = require('joi');

const UserCreateDto = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18).messages({
    'number.min': 'O usuário deve ser maior de idade'
  })
});

module.exports = { UserCreateDto };
