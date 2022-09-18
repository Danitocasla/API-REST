const {
  createRole,
  getRole,
  getRoles,
  updateRole,
  deleteRole,
} = require("../controllers/roles");

const router = require("express").Router();

router.post("/", createRole);

router.get("/", getRoles);

router.get("/:id", getRole);

router.put("/:id", updateRole);

router.delete("/:id", deleteRole);

module.exports = router;
