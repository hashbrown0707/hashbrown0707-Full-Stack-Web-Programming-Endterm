const express = require("express")
const router = express.Router()

router.get("/", (req, res) => res.send("main page"))

router.get("/login", (req, res) => {
    res.send("login page")
})

module.exports = router