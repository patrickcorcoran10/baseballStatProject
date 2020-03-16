const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("./models");
const PORT = 3001;

const app = express();

app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

var User = require("./models/user");
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// !!!! Insert Specific mongodb Database name HERE !!!!
mongoose
  .connect("mongodb://localhost/mongo-mongoose", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connection succesful"))
  .catch(err => console.error(err));

app.listen(PORT, () => {
  console.log("The Goose is Flying on PORT: ", PORT);
});
