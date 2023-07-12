const twoDigitsOperationSchema = require("../validators/calculatorValidator")

const sum = ((req, res) => {
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

module.exports = {
    sum
}