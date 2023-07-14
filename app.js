const express = require('express')
const app = express()
const cors = require('cors')
const dbConfig = require('./config/connectDB')
const bodyParser = require('body-parser')
const calculatorRoutes = require('./routes/calculatorRoutes')
const authRoutes = require('./routes/authRoutes')
const operationRoutes = require('./routes/operationRoutes')
const seedRoutes = require('./routes/seedRoutes')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./Swagger.json');

require('dotenv').config()

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use('/api/v1/calc', calculatorRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/operations', operationRoutes)
app.use('/api/v1/seed', seedRoutes)

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

try {
    dbConfig(process.env.MONGO_URL, process.env.DB_NAME)
        .then(() => {
            console.log('db connection established');
        }).catch(error => {
            throw error
        })
} catch (error) {
    throw new Error(`Database connection error: ${ error }`)
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API server listening on port ${ port }`)
})