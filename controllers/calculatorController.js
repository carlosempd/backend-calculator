const twoDigitsOperationSchema = require("../validators/calculatorValidator")

const addition = ((req, res) => {

    res.status(200).json({
        result: req.value.firstDigit + req.value.secondDigit
    })
})

const substraction = ((req, res) => {

    res.status(200).json({
        result: req.value.firstDigit - req.value.secondDigit
    })
})

const multiplication = ((req, res) => {

    res.status(200).json({
        result: req.value.firstDigit * req.value.secondDigit
    })
})

const division = ((req, res) => {

    if (req.value.secondDigit === 0) {
        return res.status(400).json({
            message: 'Division by zero is undefined'
        })
    }

    res.status(200).json({
        result: req.value.firstDigit / req.value.secondDigit
    })
})

module.exports = {
    addition,
    substraction,
    multiplication,
    division
}