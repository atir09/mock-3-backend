const express=require("express")
const mongoose=require("mongoose")

const {bookModel}=require("../Model/bookModel")


const bookRoute=express.Router()

bookRoute.post("/add",async(req,res)=>{
    const {title,author,genre,descripton,price}=req.body
    try {
        let book=new bookModel({title,author,genre,descripton,price})
        await book.save()
        res.send({"msg":"Book Added"})
    } catch (error) {
        console.log(error)
        res.send({"msg":error})
    }
})


bookRoute.get("/",async(req,res)=>{
    try {
        let data=await bookModel.find()
        res.send({data})
    } catch (error) {
        console.log(error)
        res.send({"error":error})
    }
})


// ..................SORT............................

bookRoute.get("/sort",async(req,res)=>{
    const sort=req.query.sort
    try {
        let data=await bookModel.find().sort({price:sort})
        res.send({data})
    } catch (error) {
        console.log("error",error)
        res.send({"error":error})
    }
})


// ..................Filter............................

bookRoute.get("/filter",async(req,res)=>{
    const filter=req.query.filter
    try {
        let data=await bookModel.find({genre:filter})
        res.send({data})
    } catch (error) {
        console.log("error",error)
        res.send({"error":error})
    }
})


// ..................Filter && SORT............................

bookRoute.get("/filterWithSort",async(req,res)=>{
    const filter=req.query.filter
    const sort=req.query.sort

    try {
        let data=await bookModel.find({genre:filter}).sort({price:sort})
        res.send({data})
    } catch (error) {
        console.log("error",error)
        res.send({"error":error})
    }
})


// ..........................Delete A Book..............................

bookRoute.delete("/:id",async(req,res)=>{
    const id=req.params.id
    try {
       await bookModel.findByIdAndDelete(id) 
       res.send({"msg":"Deleted Successfuly"})
    } catch (error) {
        console.log("error",error)
        res.send({"error":error})
    }
})

module.exports={
    bookRoute
}
