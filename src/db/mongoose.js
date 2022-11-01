    const mongoose = require('mongoose')
    const validator = require('validator')
 
    
    mongoose.connect('mongodb://127.0.0.1:27017/Bookdb', {
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useFindAndModify: false
    })
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
      console.log("Connected successfully");
    });