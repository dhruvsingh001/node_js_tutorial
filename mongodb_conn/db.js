const mongoose=require("mongoose")

require("dotenv").config();


//const mongourl="mongodb://127.0.0.1:27017/hotels"
const mongourl=process.env.mongo_url

//to connect to the mongo databse
mongoose.connect(mongourl)

//use a object to mantain that connection
const db=mongoose.connection;

//these are event listeners which tell about the database connectivity
db.on("connected",()=>{
    console.log("database connected")
})

db.on("disconnected",()=>{
    console.log("database disconnected")
})

module.exports=db;