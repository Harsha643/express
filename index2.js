// Task 3: Headers and Body Parameters
// Question: Implement a POST route that accepts JSON data with a name field in the request body, and a custom Authorization header. 
// Respond with the received name and confirm the authorization.
//  Summary: You need to create a POST route /submit that parses the request body and header, and then sends back a confirmation message including both the name from the body and the Authorization
//  header value.

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