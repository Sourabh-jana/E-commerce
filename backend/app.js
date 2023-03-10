const express = require('express')
const cookieParser = require("cookie-parser")
const errorHandler = require('./middleware/error')

const app = express()
app.use(express.json())
app.use(cookieParser())

const product = require('./routes/product.route')
const user = require('./routes/user.route')
const order = require('./routes/order.route')


app.use('/api/v1', product)
app.use('/api/v1', user)
app.use('/api/v1', order)

// Middleware
app.use(errorHandler)

module.exports = app