let ex=require("express")
let app=ex();
app.post("/", async(req,res)=>{
    let response= await fetch("")
    let data=await response.json()
    
})