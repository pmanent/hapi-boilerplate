"use strict";
var Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
  var Brewery = sequelize.define("Brewery", {
    idBrewery: Sequelize.INTEGER,
    Name: Sequelize.STRING,
    Location: Sequelize.STRING,
    Type: Sequelize.STRING,
    Foundation: Sequelize.STRING,
    CreationDate: Sequelize.DATE(6),
    ModifyDate: Sequelize.DATE(6)
  }, {
    createdAt: false,
    updatedAt: false,
    id: false,
    // define the table's name
    tableName: 'BREWERY'
  });

  return Brewery;
};
