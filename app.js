const express = require("express");
const cors = require("cors");
const app = express();
const { PORT } = require("./config");
const { dbConnectMySql } = require("./DB_config/mysql");
require("./models");
require("./DB_associatons")

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", require("./routes"));

// Server
try {
  app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
  });
} catch (error) {
  console.log("*** SERVER DOWN ***", error);
}

// DB conection
dbConnectMySql();
