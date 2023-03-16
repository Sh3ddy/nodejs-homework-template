
const Joi = require('joi');
Joi.objectId = require("joi-objectid")(Joi)

const schemaCreateContact = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'any.required': 'Нефор, как звать?',
    'string.empty': 'Поле name не может быть пися-попа',
  }),

  phone: Joi.string()
    .pattern(/[0-9]+/)
    .required(),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),

  favorite: Joi.boolean()
    .optional(),
});

const schemaFavoriteContact = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "object.boolean": "Тебя ебать не должно" }),
})
const schemaMongoId = Joi.object({
    contactId: Joi.objectId().required(),
})


module.exports = { schemaCreateContact,schemaFavoriteContact, schemaMongoId}