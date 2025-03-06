const express = require("express");
const fs = require("fs");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());
let users =[];
try {
    const data = fs.readFileSync('user.json');
    users = JSON.parse(data);
} catch (err) {
    if (err.code !== 'ENOENT') {
        console.error("Error reading user data:", err);
    }
}
const usernameValidator = (req, res, next) => {
    let inputName = req.body.username;
    var usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    if (inputName.length <= 0) {
        res.status(400).send("username should not be empty");
    } else if (usernameRegex.test(inputName)) {
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
        bcrypt.hash(pwd, 10, (err, hash) => {
            if (err) {
                res.status(500).send("error hashing password ", err);
            } else {
                req.hashedPassword = hash; // Store hashed password in the request object
                next();
            }
        });
    } else {
        res.status(400).send("password format is invalid");
    }
};
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
};
app.post("/signup", usernameValidator, emailValidator, passwordValidator, (req, res) => {
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.hashedPassword 
    };
    users.push(newUser);
    fs.writeFileSync('user.json', JSON.stringify(users,null,2));
    res.send("user registered successfully");
});
app.listen(3100, () => {
    console.log("server running");
});