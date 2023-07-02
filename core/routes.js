const express = require("express");
const Joi = require("joi");
const status = require("./views/status");
const tags = require("./views/tags");
const templates = require("./views/templates");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hellow world");
  return;
});
router.get("/status", status.listView);
router.post("/status", status.createView);
router.get("/status/:id", status.detailedView);
router.put("/status/:id", status.updateView);
router.delete("/status/:id", status.deleteView);
router.get("/tags", tags.listView);
router.post("/tags", tags.createView);
router.get("/tags/:id", tags.detailedView);
router.put("/tags/:id", tags.updateView);
router.delete("/tags/:id", tags.deleteView);
router.get("/templates", templates.listView);
router.post("/templates", templates.createView);
router.get("/templates/:id", templates.detailedView);
router.put("/templates/:id", templates.updateView);
router.delete("/templates/:id", templates.deleteView);

module.exports = router;
