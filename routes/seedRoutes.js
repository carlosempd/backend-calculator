const express = require('express')
const seed = require('../controllers/seedController')
const router = express.Router()

router.get('', seed)

module.exports = router