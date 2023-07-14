const express = require('express')
const router = express.Router()
const { 
    addition, 
    substraction, 
    multiplication, 
    division, 
    squareRoot, 
    randomString } = require('../controllers/calculatorController')
const twoDigitsOperationMiddleware = require('../middlewares/twoDigitsOperationMidlleware')
const oneDigitsOperationMiddleware = require('../middlewares/oneDigitOperationMiddleware')
const { authenticate } = require('../middlewares/authMiddleware')

router.post('/addition', authenticate, twoDigitsOperationMiddleware, addition)
router.post('/substraction', authenticate, twoDigitsOperationMiddleware, substraction)
router.post('/multiplication', authenticate, twoDigitsOperationMiddleware, multiplication)
router.post('/division', authenticate, twoDigitsOperationMiddleware, division)
router.post('/square-root', authenticate, oneDigitsOperationMiddleware, squareRoot)
router.get('/random-string', authenticate, randomString)

module.exports = router