



var express=require("express")
var app=express();
app.get("/",(req,res,next)=>{
    next()

})
app.listen(3000,()=>{
    console.log("server is running")
})