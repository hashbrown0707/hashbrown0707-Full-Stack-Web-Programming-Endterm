require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const book = require("./routes/book")
const app = express()

const port = process.env.PORT

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(book)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(port, () => {
      console.log('listening for requests on port', port)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 