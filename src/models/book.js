const mongoose = require('mongoose')
const validator = require('validator')

    const Book = mongoose.model('books', {
        topic: {
            type: String, 
            required: true, 
            trim: true
        }, 
        cost:{
            type: Number,
            required: true , 
            validate(value){
                if(value<0){
                    throw new Error('negative values aren\'t allowed')
                }
            }
        }, 
        num:{
            type: Number,
            required: true , 
          
        }, 
        numberinstock:{
            type: Number, 
            required: true,
            validate(value){
                if(value<0){
                    throw new Error('negative values aren\'t allowed')
                }
            }
        }, 
        
        name:{
            type:String, 
            required: true
        }


    })
    module.exports = Book