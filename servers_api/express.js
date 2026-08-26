const express= require('express')

const app = express()

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

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})