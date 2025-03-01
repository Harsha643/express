
// Task 2: Route Parameters
// Question: Create an Express route that accepts a route parameter id and responds with a message
//  containing the id value.
//  Summary: You should define a route like /user/:id where id is a route parameter, 
// and return a response that includes the id in the message.

let  express = require('express');
let  app = express();

app.get('/user/:id', (req, res) => {
  let userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

app.listen(3002, () => {
  console.log('Server listening on port 3000');
});