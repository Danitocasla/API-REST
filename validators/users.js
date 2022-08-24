const {check} = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorCreateItem = [
  check("name")
  .exists()
  .notEmpty(),
  check("age")
  .exists()
  .notEmpty(),
  check("email")
  .exists()
  .notEmpty()
  .isEmail(), 
  (req, res, next) => {
    return validateResults(req, res, next)
  } 
]

module.exports = {validatorCreateItem}