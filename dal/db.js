var connection = require('./dbconf').connectionString;
var Sequelize = require('sequelize');
var sequelize = new Sequelize(connection);

// console.log(sequelize);

var db = {
    sequelize: sequelize,
    Sequelize: Sequelize
};

module.exports = db;