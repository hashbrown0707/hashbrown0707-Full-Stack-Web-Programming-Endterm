const account = require('../models/accountModel')
const mongoose = require('mongoose')

const getAllAccounts = async (req, res) => {
    const acc = await account.find({}).sort({ createdAt: -1 })

    res.status(200).json(acc)
}

const getAccount = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such account' })
    }

    const acc = await account.findById(id)

    if (!acc) {
        return res.status(404).json({ error: 'No such account' })
    }

    res.status(200).json(acc)
}

const createAccount = async (req, res) => {
    const { userID, password, mail, phoneNumber } = req.body

    // add to the database
    try {
        const acc = await account.create({ userID, password, mail, phoneNumber })
        res.status(200).json(acc)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteAccount = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such account' })
    }

    const acc = await account.findOneAndDelete({ _id: id })

    if (!acc) {
        return res.status(400).json({ error: 'No such account' })
    }

    res.status(200).json(acc)
}

const updateAccount = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such account' })
    }

    const acc = await account.findOneAndUpdate({ _id: id }, { ...req.body })

    if (!acc) {
        return res.status(400).json({ error: 'No such account' })
    }

    res.status(200).json(acc)
}

module.exports = {
    getAllAccounts: getAllAccounts,
    getAccount: getAccount,
    createAccount: createAccount,
    deleteAccount: deleteAccount,
    updateAccount: updateAccount
}