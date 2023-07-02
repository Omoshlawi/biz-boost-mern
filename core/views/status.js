const Joi = require("joi");
const Status = require("../models/Status");
const { getValidationErrrJson } = require("../../utils/helpers");

const schema = Joi.object({
  name: Joi.string().required().min(5).max(50),
  description: Joi.string().min(20),
});

const getStatus = async (req, res) => {
  res.json({ results: await Status.find() });
};

const addStatus = async (req, res) => {
  try {
    const { value } = schema.validate(req.body);
    const status = new Status(value);
    await status.save();
    return res.json(status);
  } catch (err) {
    return res.status(400).json(getValidationErrrJson(err));
  }
};
const detaileStatus = async (req, res) => {
  const status = await Status.findOne({ _id: req.params.id });
  if (!status) return res.status(404).json({ detail: "No such status" });
  return res.json(status);
};
const updateStatus = async (req, res) => {
  let status = await Status.findOne({ _id: req.params.id });
  if (!status) return res.status(404).json({ detail: "No such status" });

  try {
    const { value } = schema.validate(req.body);
    status = await Status.findByIdAndUpdate(req.params.id, value, {
      new: true,
    });
    return res.json(status);
  } catch (err) {
    return res.status(400).json(getValidationErrrJson(err));
  }
};
const deleteStatus = async (req, res) => {
  const status = await Status.findByIdAndRemove(req.params.id);
  if (!status) return res.status(404).json({ detail: "No suh status" });
  res.json({ detail: "Deleted successfully" });
};

module.exports = {
  listView: getStatus,
  createView: addStatus,
  detailedView: detaileStatus,
  updateView: updateStatus,
  deleteView: deleteStatus,
};
