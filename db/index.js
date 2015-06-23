var pg = require('pg');
var Sequelize = require('sequelize');

var host = process.env.db_host || 'localhost';
var database = process.env.db_database || 'smkhalsa';
var user = process.env.db_user || 'smkhalsa';
var password = process.env.db_password || null;

var sequelize = new Sequelize(database, user, password, {
  host: host,
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
