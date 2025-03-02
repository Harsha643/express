
// Task 4: Middleware
// Question: Write a middleware function that logs the HTTP method and URL of every incoming request. 
// Then, apply this middleware to your Express app. Summary: Your task is to implement a custom middleware 
// that logs the HTTP method (GET, POST, etc.) and the URL for each request before passing control to the next 
// middleware or route handler.

let express=require("express")
let app=express()

function getting(req,res,next){
    console.log(`Method: ${req.method}, URL: ${req.url}`)
    next()
}
app.use(getting)

app.get("/name",(req,res)=>{
// console.log(req.params.name);
    res.send("it is get method")
})
app.post("/greeting",(req,res)=>{
    res.send("hello this is post ")
    
})

app.listen(3004,()=>{
    console.log("it running port is 3004")

})


// http://localhost:3004/greeting
// http://localhost:3004/name