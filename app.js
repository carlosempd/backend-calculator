const express = require('express')
const app = express()
const cors = require('cors')
const calculatorRoutes = require('./routes/calculatorRoutes')

app.use(cors())
app.use(express.json())
app.use('/api/v1/calc', calculatorRoutes)

app.get('/', (req, res) => {
    res.send('Hello world')
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API server listening on port ${ port }`)
})