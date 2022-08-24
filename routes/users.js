const express = require("express");
const { getItems, getItem, createItem, updateItem, deleteItem,} = require("../controllers/users");
const { validatorCreateItem } = require("../validators/users");


const router = express.Router();

router.get("/", getItems);

router.get("/:id", getItem);

router.post("/",validatorCreateItem , createItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

module.exports = router;
