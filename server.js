/**
 * File that begins the server.
 * @file
 */
var express = require('express');
var app = express();
var router = express.Router();
var controllers = require('./controllers');
var port = process.env.PORT || '3000';

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Routing for api requests
app.use("/api", router);
for (var route in controllers) {
  router.route("/" + route)
      .get(controllers[route].get)
      .post(controllers[route].post);
}

// Serve the static public page files
app.use(express.static("public"));

var server = app.listen(port, function() {
  console.log('mybus-server listening at port', port);
});
