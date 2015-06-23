var db = require('../db');
var bcrypt = require('bcrypt');
var bluebird = require('bluebird');

module.exports = {
  users: {
    get: function (req, res) {
      db.Users.findAll()
          .then(function (results, err) {
            if (!err) {
              res.json(results);
            }
          });
    },
    post: function (req, res) {
      bcrypt.genSalt(10, function(err, salt) {
        var email = req.body.email;
        var password = req.body.password;
        // Create hashed password
        bcrypt.hash(password, salt, function(err, hash) {
          // Store hashed password in database
          var user = {email: email, password: hash};
          db.Users.create(user)
              .then(function (results, err) {
                res.sendStatus(201);
              });
        });
      });
    }
  }
};
