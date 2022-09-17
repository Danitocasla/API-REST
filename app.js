const express = require("express");
const cors = require("cors");
const app = express();
const { port } = require("./config");
const { dbConnectMySql } = require("./DB_config/mysql");
require("./models")
require("./models/associations/associations")

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", require("./routes"));

// Server
try {
  app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
  });
} catch (error) {
  console.log("*** SERVER DOWN ***", error);
}

// DB conection
dbConnectMySql();
