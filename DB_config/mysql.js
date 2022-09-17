const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(
  config.DATABASE,
  config.USER_DB,
  config.PASS_DB,
  {
    host: config.HOST,
    port: config.DB_PORT,
    dialect: "mysql",
  }
);

const dbConnectMySql = async () => {
  try {
    await sequelize.sync({force:true}).then(() => {
      console.log("*** MYSQL SCHEMA CREATED ***");
    });
    console.log("*** MYSQL CONNECTION SUCESSFULL ***");
  } catch (e) {
    console.log("*** MYSQL ERROR CONNECTION ***", e);
  }
};

module.exports = { dbConnectMySql, sequelize };
