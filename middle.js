let express = require("express")
let app= express()

app.use("/naa",(req,res,next)=>{
console.log("middle 1")
})

app.listen(3002,()=>{
    console.log("its running ")
})