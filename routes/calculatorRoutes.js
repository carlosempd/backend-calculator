const express = require('express')
const router = express.Router()
const { 
    addition, 
    substraction, 
    multiplication, 
    division } = require('../controllers/calculatorController')

router.post('/addition', addition)
router.post('/substraction', substraction)
router.post('/multiplication', multiplication)
router.post('/division', division)

module.exports = router