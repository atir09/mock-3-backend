const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({
    title:String,
    author:String,
    genre:String,
    descripton:String,
    price:Number
})


const bookModel=mongoose.model("book",bookSchema)


module.exports={
    bookModel
}