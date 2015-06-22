// var app = require('express');
// var restbus = require('restbus');
// var http = require('http');

// var port = process.env.PORT || 3030;
 
// http.createServer(app).listen(port, function() {
//   console.log('app is now listening on port 3030');
//   restbus.listen(function() {
//     console.log('restbus is now listening on port 3535');
//   });
// });

// Refactor to different version of restbus so that port will work
var restbus = require('restbus');

var port = process.env.PORT || '3000';
 
restbus.listen(port, function() {
  console.log('restbus is now listening on port 3000');
});