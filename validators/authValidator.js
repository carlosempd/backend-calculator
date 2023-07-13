const Joi = require('joi')

const authUserSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required()
})

module.exports = {
    authUserSchema
}