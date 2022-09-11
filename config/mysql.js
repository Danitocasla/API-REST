const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config");
const { userModel, roleModel } = require("../models");

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  port: config.DB_PORT,
  dialect: "mysql",
});

const User = userModel(sequelize, DataTypes);
const Role = roleModel(sequelize, DataTypes);

const dbConnectMySql = async () => {
  try {
    await sequelize.sync().then(() => {
      console.log("*** MYSQL SCHEMA CREATED ***");
    });
    console.log("*** MYSQL CONNECTION SUCESSFULL ***");
  } catch (e) {
    console.log("*** MYSQL ERROR CONNECTION ***", e);
  }
};

module.exports = { dbConnectMySql, sequelize, User, Role };
