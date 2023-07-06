// NPM modules
const express=require("express")
require('dotenv').config()
const cors=require("cors")

// ..............External Modules..................
const connection=require("./config/db")
const {bookRoute}=require("./Router/bookRoute")



// .................Express APP....................
const app=express()
app.use(cors())
app.use(express.json())



// ...................Base API.............................
app.get("/",(req,res)=>{
    res.send("Base Endpoint Of API")
})


app.use("/book",bookRoute)


// ..............Listening................................
app.listen(process.env.PORT,async()=>{
    console.log("Server is On")
    try {
        await connection
        console.log("Successfully connected to DB")
    } catch (error) {
        console.log(error)
    }
})