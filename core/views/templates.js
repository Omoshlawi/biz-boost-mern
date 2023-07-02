const Joi = require("joi");
const { getValidationErrrJson } = require("../../utils/helpers");
const Template = require("../models/Template");

const schema = Joi.object({
  name: Joi.string().required().min(5).max(50),
  description: Joi.string().min(20),
});

const getTemplates = async (req, res) => {
  res.json({ results: await Template.find() });
};

const addTemplates = async (req, res) => {
  try {
    const { value } = schema.validate(req.body);
    const templates = new Template(value);
    await templates.save();
    return res.json(templates);
  } catch (err) {
    return res.status(400).json(getValidationErrrJson(err));
  }
};
const detaileTemplate = async (req, res) => {
  const template = await Template.findOne({ _id: req.params.id });
  if (!template) return res.status(404).json({ detail: "No such template" });
  return res.json(template);
};
const updateTemplate = async (req, res) => {
  let template = await Template.findOne({ _id: req.params.id });
  if (!template) return res.status(404).json({ detail: "No such template" });

  try {
    const { value } = schema.validate(req.body);
    template = await Template.findByIdAndUpdate(req.params.id, value, {
      new: true,
    });
    return res.json(template);
  } catch (err) {
    return res.status(400).json(getValidationErrrJson(err));
  }
};
const deleteTemplate = async (req, res) => {
  const template = await Template.findByIdAndRemove(req.params.id);
  if (!template) return res.status(404).json({ detail: "No such template" });
  res.json({ detail: "Deleted successfully" });
};

module.exports = {
  listView: getTemplates,
  createView: addTemplates,
  detailedView: detaileTemplate,
  updateView: updateTemplate,
  deleteView: deleteTemplate,
};
