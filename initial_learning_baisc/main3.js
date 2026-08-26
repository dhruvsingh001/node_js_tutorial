const a=require("./node2.js");//this is the object which links the node2.js file
console.log("new linking done")
var v=a.age//now you  use this object to access the exported modules of that file
console.log(v)
var r=a.add(2,3)//using a function defined in the node2 file 
console.log(r)
var _=require("lodash")//special module to filter and manipulate data
var x=[1,1,1,1,2,2,2,2];
var c=_.uniq(x)//give unique items in the array x
console.log(c)