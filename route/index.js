const express = require("express");
const router = express.Router();

const {
  findUser, addUser, updateUser, deleteUser 
} = require("../controllers/index");

router.get("/", findUser);
router.post("/add", addUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;