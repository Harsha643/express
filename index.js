// Task 1: Query Parameters
// Question: Create an Express route that accepts a query 
// parameter name and responds with a greeting message 
// including the name.Summary: You need to create a route 
// /greet that extracts the name query parameter from the
//  URL and responds with a personalized greeting.


const express = require('express');
let express = require('express');
let a = express();

a.get('/greet', (req, res) => {
  let  name = req.query.name;

  if (name) {
    res.send(`Hello, ${name}!`);
  } else {
    res.send('Hello, guest!');
  }
});

a.listen(3001, () => {
  console.log('Server listening on port 3001');
});


// url:  
// http://localhost:3001/greet?name=harsha



let  express = require('express');
let  ap = express();

app.get('/user/:id', (req, res) => {
  let userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

ap.listen(3002, () => {
  console.log('Server listening on port 3002');
});




let express = require('express');
let app = express();
app.use(express.json()); 

app.post('/submit', (req, res) => {
  let name = req.body.name;
  console.log(req.body,req.headers)
  let password = req.headers.pass;

  if (!name || !password) {
    return res.send({ error: 'Name and Authorization header are required.' });
  }

  res.send(`Received name: ${name}, Authorization: ${password}`);
});

app.listen(3003, () => {
  console.log('Server listening on port 3003');
});


//http://localhost:3003/submit
// in header write the key pass : your password  content-type : application/json
// in body write the {"name" :"your name"}


let express=require("express")
let apps=express()

function getting(req,res,next){
    console.log(`Method: ${req.method}, URL: ${req.url}`)
    next()
}
apps.use(getting)

apps.get("/name",(req,res)=>{
// console.log(req.params.name);
    res.send("it is get method")
})
app.post("/greeting",(req,res)=>{
    res.send("hello this is post ")
    
})

apps.listen(3004,()=>{
    console.log("it running port is 3004")

})


// http://localhost:3004/greeting
// http://localhost:3004/name




let express = require('express');
let appss = express();

appss.get('/user/:id', (req, res) => {
  let userId = req.params.id;
  let userAge = req.query.age;

  if (userAge) {
    res.send({ id: userId, age: userAge });
  } else {
    res.send({ id: userId, message: "Age not provided" });
  }
});

appss.listen(3005, () => {
  console.log('Server listening on port 3005');
});


// url:http://localhost:3005/user/123?age=30






