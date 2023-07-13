const getRandomString = require("../services/randomOrg")

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

const squareRoot = ((req, res) => {
    res.status(200).json({
        result: Math.sqrt(req.value.digit)
    })
})

const randomString = (async (req, res) => {
    const result = await getRandomString()
    res.status(200).json({
        result
    })
})

module.exports = {
    addition,
    substraction,
    multiplication,
    division,
    squareRoot,
    randomString
}