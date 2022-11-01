require('./db/mongoose') //so that this runs
const express = require('express')
const Book = require('./models/book.js')
const bookRouter = require('./routes/book')

const app = express()
const port = process.env.PORT || 3000



app.use(express.json()) //to parse incoming json to object.
app.use(bookRouter)




app.listen(port, ()=>{
    console.log('server is listening on port ' + port)
})