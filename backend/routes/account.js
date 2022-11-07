const express = require("express")

const { 
    getAllAccounts,
    getAccount,
    createAccount,
    deleteAccount,
    updateAccount
} = require("../controllers/accountController")

const router = express.Router()

router.get("/all", getAllAccounts)

router.get("/:id", getAccount)

router.post("/", createAccount)

router.delete('/:id', deleteAccount)

router.patch('/:id', updateAccount)

module.exports = router
