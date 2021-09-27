// Express
const express = require("express");

// morgan (Middleware that prints nicer errors on the console)
const morgan = require("morgan");

// body-parser (Middleware that parses HTTP Request body so that it can be accessed).
const bodyParser = require("body-parser");

// cookie-parser (Middleware that parses HTTP Request cookie field so that it can be accessed).
const cookieParser = require("cookie-parser");

// express-validator (Middleware that wraps app.js in functions that can be used to validate inputs).
const expressValidator = require("express-validator");

const cors = require("cors");

// Saves the variables in .env file to process.env.
require("dotenv").config();

// Instance of express() which includes all the functions such as .get, .use, .post etc. for creating a server.
const app = express();

// Routes which is abstracted to another folder.
const messageRouter = require("./routes/messageRouter");

// db connects to db using db.connect()
require("./config/db");

// Middlewars
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(expressValidator());

// Routes
app.use("/api", messageRouter);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const port = process.env.PORT || 8000;

// Server now continues to listen on PORT 8000.
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
