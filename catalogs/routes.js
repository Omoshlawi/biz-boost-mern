const express = require("express");
const {
  addCategory,
  getCategories,
  getCategoryDetail,
  updateCategory,
  deleteCategory,
} = require("./views");
const router = express.Router();

router.get("/", getCategories);
router.post("/", addCategory);

router.get("/:id", getCategoryDetail);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
