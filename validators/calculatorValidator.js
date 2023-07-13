const Joi = require('joi')

const digitRules = Joi.number().required().precision(2).max(9999999).min(-9999999)

const twoDigitsOperationSchema = Joi.object({
    firstDigit: digitRules,
    secondDigit: digitRules
})

const oneDigitsOperationSchema = Joi.object({
    digit: digitRules
})

module.exports = {
    oneDigitsOperationSchema,
    twoDigitsOperationSchema
}