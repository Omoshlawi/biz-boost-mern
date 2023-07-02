const express = require("express");
const Joi = require("joi");
const status = require("./views/status");
const tags = require("./views/tags");

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
router.get("/templates", (req, res) => {});
router.post("/templates", (req, res) => {});
router.get("/templates/:id", (req, res) => {});
router.put("/templates/:id", (req, res) => {});
router.delete("/templates/:id", (req, res) => {});

module.exports = router;
