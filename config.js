const { config } = require("dotenv");

config();

module.exports = {
  HOST: process.env.HOST || "",
  DATABASE: process.env.DB_NAME || "",
  USER_DB: process.env.DB_USER || "",
  PASS_DB: process.env.DB_PASSWORD || "",
  PORT: process.env.PORT || 4000,
  DB_PORT: process.env.DB_PORT || 3306,
};
