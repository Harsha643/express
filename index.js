// Task 1: Query Parameters
// Question: Create an Express route that accepts a query 
// parameter name and responds with a greeting message 
// including the name.Summary: You need to create a route 
// /greet that extracts the name query parameter from the
//  URL and responds with a personalized greeting.


let express = require('express');
let app = express();

 
app.get('/greet', (req, res) => {
  let  name = req.query.name;


  if (name) {
    res.send(`Hello, ${name}!`);
  } else {
    res.send('Hello, guest!');
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});


// url:  
// http://localhost:3001/greet?name=harsha








