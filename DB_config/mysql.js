const { Sequelize, DataTypes } = require("sequelize");
const config = require(".");


const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  port: config.DB_PORT,
  dialect: "mysql",
});

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

module.exports = { dbConnectMySql, sequelize };