
/**
 * File that begins the server.
 * @file
 */
var restbus = require('restbus');

var port = process.env.PORT || '3000';
 
restbus.listen(port, function() {
  console.log('restbus is now listening on port 3000');
});