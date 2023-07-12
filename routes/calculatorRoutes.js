const express = require('express')
const router = express.Router()
const { sum } = require('../controllers/calculatorController')

router.post('/sum', sum)

module.exports = router