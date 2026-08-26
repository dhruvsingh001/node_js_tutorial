var os=require("os")
var fs=require("fs")

var user=os.userInfo()
console.log(user)
fs.appendFile("greeting.txt","hi"+user.username +"\n" ,()=>console.log("executed"))
const a=require("/.node2.js")
