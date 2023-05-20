const router = require("express").Router();
const isLoggedOut = require("./middleware/isLoggedOut");
const isLoggedIn = require("./middleware/isLoggedIn");
const express = require("express");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/signup', (req, res) => {
  res.render('signup')
});

router.post("/signup", isLoggedIn, (req, res, next) => {
  const { username, password } = req.body;
  const signUpData = {
    username,
    password
  };
  console.log("asdfghjuks: ", req.body)
  
  if (username === "" || password === "") {
    signUpData.errorMessage =
      "All fields are mandatory. Please fill out every blank field and try again";
      res.render("/signup", signUpData);
  };

  bcrypt
    .genSalt(saltRounds)
    .then((salt) => bcrypt.hash(password, salt))
    .then((hashedPassword) => {
      // Create a user and save it in the database
      const newUser = {username, password: hashedPassword}
      return User.create(newUser);
    })
    .then(() => {
      res.render("/login");
    })
});

router.get

module.exports = router;
