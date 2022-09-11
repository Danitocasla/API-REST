const { config } = require("dotenv");

config();

module.exports = {
  host: process.env.HOST || "",
  database: process.env.DB_NAME || "",
  user: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  port: process.env.PORT || 4000,
  DB_PORT: process.env.DB_PORT || 3306,
};
