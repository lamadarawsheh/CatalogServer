const express = require('express')
const Book = require('../models/book')
const router = express.Router()

//add a book
router.post('/books', (req, res)=>{
    const book = new Book (req.body)
    book.save().then(()=>{
        res.send(book)
    }).then((error)=>{
        res.status(400).send(error)
    })
})


//get a book by number 
router.get('/books/info/:id', async(req, res)=>{
    try{
        
        const book = await Book.findOne({num:req.params.id})
        if(!book){
            return res.status(404).send("Invalid Item Id")
        }
        res.status(200).send(book)
    } catch(err){
        console.log(err)
        res.status(500).send(err)
        }
})


//get a book by topic
router.get('/books/search/:topic', async(req, res)=>{
   try{
    const books = await Book.find({topic: req.params.topic})
    if(!books.length){
        return res.status(404).send("No items found with the specified topic.")
        }
        res.send(books)
   }
    catch(err){
        res.status(500).send(err)
    }
})

//update cost or number of items
router.patch('/books/:id', async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ['cost', 'numberinstock']
    try {
        const book = await Book.findOne({ num: req.params.id })
        if (!book) {
            return res.status(404).send("Invalid Item Id")
        }
        const isValidUpdate= updates.every((update) => allowedUpdates.includes(update))
        if (!isValidUpdate) {
            return res.status(400).send( "invalid update operation")
        }

        updates.forEach((update) => { book[update] = req.body[update] })

        await book.save()
        res.status(200).send("Book was successfully updated")
    } catch (e) {
        res.status(500).send()
    }

})
module.exports= router