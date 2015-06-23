var pg = require('pg');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('smkhalsa', 'smkhalsa', null, {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var Users = sequelize.define('users', {
  email: Sequelize.STRING,
  password: Sequelize.STRING
});

// TODO: remove the force true when adding to production
Users.sync({force:true});

exports.Users = Users;
