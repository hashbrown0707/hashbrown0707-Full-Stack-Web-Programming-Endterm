const book = require('../models/bookModel')
const mongoose = require('mongoose')

const getAllBooks = async (req, res) => {
    const acc = await book.find({}).sort({ createdAt: -1 })

    res.status(200).json(acc)
}

const getBook = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such book' })
    }

    const acc = await book.findById(id)

    if (!acc) {
        return res.status(404).json({ error: 'No such book' })
    }

    res.status(200).json(acc)
}

const createBook = async (req, res) => {
    const { bookName, ID, auther, reservations } = req.body

    // add to the database
    try {
        const acc = await book.create({ bookName, ID, auther, reservations })
        res.status(200).json(acc)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteBook = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such book' })
    }

    const acc = await book.findOneAndDelete({ _id: id })

    if (!acc) {
        return res.status(400).json({ error: 'No such book' })
    }

    res.status(200).json(acc)
}

const updateBook = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such book' })
    }

    const acc = await book.findOneAndUpdate({ _id: id }, { ...req.body })

    if (!acc) {
        return res.status(400).json({ error: 'No such book' })
    }

    res.status(200).json(acc)
}

module.exports = {
    getAllBooks: getAllBooks,
    getBook: getBook,
    createBook: createBook,
    deleteBook: deleteBook,
    updateBook: updateBook
}