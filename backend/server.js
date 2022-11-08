require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const book = require("./routes/book")
const account = require("./routes/account")
const app = express()

const port = process.env.PORT

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use("/account", account)

//app.use("/book", book)

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

// app.get("/", (req, res) => res.send("main page"))

// app.get("/login", (req, res) => res.send("login page"))
