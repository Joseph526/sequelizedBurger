// Require dependencies
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up Express app
var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Require Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Require routes for API endpoints
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});