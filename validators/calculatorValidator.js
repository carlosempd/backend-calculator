const Joi = require('joi')

const twoDigitsOperationSchema = Joi.object({
    firstDigit: Joi.number().required().precision(2).max(9999999).min(-9999999),
    secondDigit: Joi.number().required().precision(2).max(9999999).min(-9999999)
})

module.exports = twoDigitsOperationSchema