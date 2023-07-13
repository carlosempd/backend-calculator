const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const calculatorRoutes = require('./routes/calculatorRoutes')
const authRoutes = require('./routes/authRoutes')
require('dotenv').config()

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use('/api/v1/calc', calculatorRoutes)
app.use('/api/v1/auth', authRoutes)

app.get('/', (req, res) => {
    res.send('Hello world')
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API server listening on port ${ port }`)
})