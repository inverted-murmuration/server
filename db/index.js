var pg = require('pg');
var Sequelize = require('sequelize');

// heroku automatically creates the config variable 'DATABASE_URL' when you add a postgres add-on to a server
var sequelize = new Sequelize(process.env.DATABASE_URL);

var Users = sequelize.define('users', {
  email: Sequelize.STRING,
  password: Sequelize.STRING
});

// TODO: remove the force true when adding to production
Users.sync({force:true});

exports.Users = Users;
