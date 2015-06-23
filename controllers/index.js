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
      var user = {email: req.body.email};
      db.Users.create(user)
          .then(function (results, err) {
            res.sendStatus(201);
          });
    }
  }
};
