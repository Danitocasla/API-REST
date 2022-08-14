const express = require("express")
const { getItems, getItem, createItem } = require("../controllers/users")
const router = express.Router()
// TODO: aquí se declara el GET POST PUT DELETE de las colecciones
router.get("/", getItems)

router.post("/", createItem)

module.exports = router
