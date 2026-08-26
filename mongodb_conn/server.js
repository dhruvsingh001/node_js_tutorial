const express= require('express')

const app = express()
const db=require("./db")

const bodyParser=require("body-parser")
app.use((bodyParser.json()))
//this will store the body elements in the req.body

//this is a comment to check the git 
//this is the comment new
const menuitems=require("./menu");


app.get('/', (req, res) => {
  res.send('Hello World my name is dhruv')
})
app.get('/halo', (req, res) => {
  res.send('Hello World ')
})

app.get("/items",(req,res)=>{    //use to read the data from the api is the client or frontend use the api at this url
  var c={name:"dhruv",age:12};
  res.send(c)
})
app.post("/itmesss",(req,res)=>{   //if the frontend send the data on this api with post method we will add data
  res.send("data added");
  console.log("data added")
})






//this is the post method for menu items using menu model of db schema defined in menu.js
app.post("/menu",async (req,res)=>{
    try{
    const data=req.body//this takes the data from the body of senders side using body pareser
    const cursor=new menuitems(data)
    const response=await cursor.save()
    console.log("data saved")
    res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"this is internal error"});
    }
})

//import the router file
const personroutes=require("../mongodb_conn/routes/personroutes")
app.use("/",personroutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
