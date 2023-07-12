const twoDigitsOperationSchema = require("../validators/calculatorValidator")

const addition = ((req, res) => {
    const { error, value } = twoDigitsOperationSchema.validate(req.body);
    
    if (error) {
        return res.status(400).json({
            message: error.message
        })
    }

    res.status(200).json({
        result: value.firstDigit + value.secondDigit
    })
})

const substraction = ((req, res) => {
    const { error, value } = twoDigitsOperationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: error.message
        })
    }

    res.status(200).json({
        result: value.firstDigit - value.secondDigit
    })
})

const multiplication = ((req, res) => {
    const { error, value } = twoDigitsOperationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: error.message
        })
    }

    res.status(200).json({
        result: value.firstDigit * value.secondDigit
    })
})

const division = ((req, res) => {
    const { error, value } = twoDigitsOperationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: error.message
        })
    }

    if (value.secondDigit === 0) {
        return res.status(400).json({
            message: 'Division by zero is undefined'
        })
    }

    res.status(200).json({
        result: value.firstDigit / value.secondDigit
    })
})

module.exports = {
    addition,
    substraction,
    multiplication,
    division
}