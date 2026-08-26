const express= require('express')
const router=express.Router();
const Person=require("../person");

//this is the router method for accesing the endpoint
router.post("/person",async (req,res)=>{
    try{
    const data=req.body//this takes the data from the body of senders side using body pareser
    const cursor=new Person(data)
    const response=await cursor.save()
    console.log("data saved")
    res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"this is internal error"});
    }
})

//this is the get method for parametrized url in api calling for dynamically changing value in it
router.get("/person/:key",async (req,res)=>{
    try{
    const keyy=req.params.key;
    if (keyy=="chef" || keyy=="manager" || keyy=="worker"){
    const data= await Person.find({work:keyy})
    console.log("data fetched")
    res.status(200).json(data)
    }else{
      res.status(400).send("error not matched type");
      console.log("error occured")
    }}
    catch(err){
        console.log(err);
        res.status(500).json({error:"this is internal error"});
    }
})

//this is the method to get the data of people using api
router.get("/person",async (req,res)=>{
    try{
    const data= await Person.find()
    console.log("data fetched")
    res.status(200).json(data)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"this is internal error"});
    }
})

//this is the router update method
router.put("/person/:key",async (req,res)=>{
    try{
    const keyy=req.params.key;
    const update=req.body;
    const response=await Person.findByIdAndUpdate(keyy,update,{
        new:true,
        runValidators:true

    })
    if(!response){
        return res.send("data not found");
    }
        console.log("value updated")
        res.status(200).json(response)

        }
    catch(err){
        console.log(err);
        res.status(500).json({error:"this is internal error"});
    }
})

//this is router delete method to delete the data from the db
router.delete("/person/:key",async (req,res)=>{
    try{
    const keyy=req.params.key;
    const response=await Person.findByIdAndDelete(keyy);
    if(!response){
        return res.send("data not found");
    }
        console.log("value Deleted")
        res.status(200).json(response)

        }
    catch(err){
        console.log(err);
        res.status(500).json({error:"this is internal error"});
    }
})


module.exports=router;