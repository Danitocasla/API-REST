const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const nameFile = removeExtension(file);
  const skip = ["index"].includes(nameFile)
  if (!skip) {
    router.use(`/${nameFile}`, require(`./${nameFile}`));
  }
});

module.exports = router;
