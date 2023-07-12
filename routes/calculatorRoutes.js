const express = require('express')
const router = express.Router()
const { sum } = require('../controllers/calculatorController')

router.get('/sum', sum)

module.exports = router