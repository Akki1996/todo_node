const express = require("express");
const router = express.Router();

const {
  postList,
  getList,
  delList,
  updateList,
} = require("../controllers/index");

router.post("/post_todo", postList);
router.get("/get_todo", getList);
router.delete("/delete_todo/:id", delList);
router.put("/update_todo/:id", updateList);

module.exports = router;
