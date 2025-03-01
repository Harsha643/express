// Task 1: Query Parameters
// Question: Create an Express route that accepts a query parameter name and responds with a greeting message including the name.
//  Summary: You need to create a route /greet that extracts the name query parameter from the URL and responds with a
//  personalized greeting.


// let express = require('express');
// let app = express();

 
// app.get('/greet', (req, res) => {
//   let  name = req.query.name;


//   if (name) {
//     res.send(`Hello, ${name}!`);
//   } else {
//     res.send('Hello, guest!');
//   }
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });


// url:  
// http://localhost:3000/greet?name=harsha





// Task 2: Route Parameters
// Question: Create an Express route that accepts a route parameter id and responds with a message
//  containing the id value.
//  Summary: You should define a route like /user/:id where id is a route parameter, 
// and return a response that includes the id in the message.

// let  express = require('express');
// let  app = express();

// app.get('/user/:id', (req, res) => {
//   let userId = req.params.id;
//   res.send(`User ID: ${userId}`);
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });



// Task 3: Headers and Body Parameters
// Question: Implement a POST route that accepts JSON data with a name field in the request body, and a custom Authorization header. 
// Respond with the received name and confirm the authorization.
//  Summary: You need to create a POST route /submit that parses the request body and header, and then sends back a confirmation message including both the name from the body and the Authorization
//  header value.

// let express = require('express');
// let app = express();
// app.use(express.json()); 

// app.post('/submit', (req, res) => {
//   let name = req.body.name;
//   console.log(req.body,req.headers)
//   let authorizationHeader = req.headers.pass;

//   if (!name || !authorizationHeader) {
//     return res.send({ error: 'Name and Authorization header are required.' });
//   }

//   res.send(`Received name: ${name}, Authorization: ${authorizationHeader}`);
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

// Task 4: Middleware
// Question: Write a middleware function that logs the HTTP method and URL of every incoming request. 
// Then, apply this middleware to your Express app. Summary: Your task is to implement a custom middleware 
// that logs the HTTP method (GET, POST, etc.) and the URL for each request before passing control to the next 
// middleware or route handler.

// let express=require("express")
// let app=express()

// function getting(req,res,next){
//     console.log(`Method: ${req.method}, URL: ${req.url}`)
//     // req.name="harsha"
//     next()
// }
// app.use(getting)

// app.get("/name",(req,res)=>{
// console.log(req.params);

//     res.send(req.params)
// })


// app.get("/greeting",(req,res)=>{
//     res.send("hello")
    
// })

// app.listen(3000,()=>{
//     console.log("it running")

// })

// Task 5: Combining Query and Route Parameters
// Question: Create an Express route that combines both route parameters and query parameters. 
// For example, a route like /user/:id?age=:age that responds with the user's id and age from the query string. 
// Summary: In this task, you need to handle a route that contains both a route parameter and a query parameter.
//  You will extract both the id from the route and the age from the query parameters and return them in the response

let express = require('express');
let app = express();

app.get('/user/:id', (req, res) => {
  let userId = req.params.id;
  let userAge = req.query.age;

  if (userAge) {
    res.send({ id: userId, age: userAge });
  } else {
    res.send({ id: userId, message: "Age not provided" });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
