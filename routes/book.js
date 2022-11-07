const express = require("express")
const bookRouter = express.Router()

bookRouter.get("/", (req, res) => res.send("main page"))

bookRouter.get("/login", (req, res) => {
    res.send("login page")
})

module.exports = bookRouter