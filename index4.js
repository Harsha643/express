
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

app.listen(3005, () => {
  console.log('Server listening on port 3005');
});


// url:http://localhost:3005/user/123?age=30