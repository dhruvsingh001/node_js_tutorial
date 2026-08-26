console.log("hello main")
function call(){
    console.log("executed")

}
function add(a,b,c){
    console.log(a+b)//this is the main function 
    c()//after this the callback function is called
}
add(4,4,call)//this takes two parameters and one function
add(3,4,()=>console.log("this is the inline function passed as callback function"))