if (process.env.NODE_ENV != 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)
app.use(express.static('public'))

// app.listen(port, () =>
//   console.log(`E-commerce CMS running at http://localhost:${port}`)
// )

module.exports = app
