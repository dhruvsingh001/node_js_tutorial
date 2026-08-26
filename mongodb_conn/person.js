const mongoose=require("mongoose")

const personschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:["chef","worker","manager"],
        required:true

    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }

});

//create this schema model ..this schema is used to validate the data send through servers using api post 
const Person=mongoose.model("Person",personschema);
module.exports=Person;