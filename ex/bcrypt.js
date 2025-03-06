const express = require("express");
const fs = require("fs");
const bcrypt=require("bcrypt")

const app = express();
app.use(express.json());

const usernameValidator = (req, res, next) => {
  let inputName = req.body.username;
  var usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
  if (inputName.length <= 0) {
    res.status(400).send("username should not be empty");
  } else if (usernameRegex.test(inputName)) {
    fs.writeFile("./user.txt",inputName,(err)=>{
              if(err){
                  console.log(err)
              }
              else{
                  console.log("username is submited")
              }
          })
    next();
  } else {
    res.status(400).send("username format is invalid");
  }
};


const passwordValidator = (req, res, next) => {
    let pwd = req.body.password;
    const passwordRex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (pwd.length <= 0) {
      res.status(400).send("password should not be empty");
    } else if (passwordRex.test(pwd)) {
      bcrypt.hash(pwd,10,(err,hash)=>{
        if(err){
          res.status(400).send("error hashing password ",err)
        }else{
        fs.appendFile("./user.txt",hash,(err)=>{
        if(err){
          console.log(err)
        }else{
          console.log(hash)
        }

        })
          next();
        }
      })

    } else {
      res.status(400).send("password format is invalid");
    }
  };;

  const emailValidator = (req, res, next) => {
    let email = req.body.email;
    const emailRex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.length <= 0) {
      res.status(400).send("email should not be empty");
    } else if (emailRex.test(email)) {
      next();
    } else {
      res.status(400).send("email format is invalid");
    }
  };;



  // console.log(harsha)
app.post("/signup", usernameValidator,emailValidator,passwordValidator, (req, res) => {

  res.send("user registered successfully");
});
app.listen(3100, () => {
  console.log("server running");
});




// // Display all users
// app.get("/users", (req, res) => {
//     res.json(users);
// });

// Edit user by username
// app.put("/users/:username", usernameValidator, emailValidator, passwordValidator, (req, res) => {
//     const usernameToUpdate = req.params.username;
//     const updatedUser = {
//         username: req.body.username,
//         email: req.body.email,
//         password: req.hashedPassword
//     };

    // const userIndex = users.findIndex(user => user.username === usernameToUpdate);
    // if (userIndex === -1) {
    //     return res.status(404).send("User not found");
    // }

    // users[userIndex] = updatedUser;

    // Save updated user data to user.json
//     fs.writeFileSync('user.json', JSON.stringify(users, null, 2));

//     res.send("User updated successfully");
// });