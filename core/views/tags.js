const Joi = require("joi");
const { getValidationErrrJson } = require("../../utils/helpers");
const Tag = require("../models/Tag");

const schema = Joi.object({
  name: Joi.string().required().min(5).max(50),
});

const getTags = async (req, res) => {
  res.json({ results: await Tag.find() });
};

const addTag = async (req, res) => {
  try {
    const { value } = schema.validate(req.body);
    const tags = new Tag(value);
    await tags.save();
    return res.json(tags);
  } catch (err) {
    return res.status(400).json(getValidationErrrJson(err));
  }
};
const detaileTag = async (req, res) => {
  const tag = await Tag.findOne({ _id: req.params.id });
  if (!tag) return res.status(404).json({ detail: "No such status" });
  return res.json(tag);
};
const updateTag = async (req, res) => {
  let tag = await Tag.findOne({ _id: req.params.id });
  if (!tag) return res.status(404).json({ detail: "No such status" });

  try {
    const { value } = schema.validate(req.body);
    tag = await Tag.findByIdAndUpdate(req.params.id, value, {
      new: true,
    });
    return res.json(tag);
  } catch (err) {
    return res.status(400).json(getValidationErrrJson(err));
  }
};
const deleteTag = async (req, res) => {
  const tag = await Tag.findByIdAndRemove(req.params.id);
  if (!tag) return res.status(404).json({ detail: "No suh status" });
  res.json({ detail: "Deleted successfully" });
};

module.exports = {
  listView: getTags,
  createView: addTag,
  detailedView: detaileTag,
  updateView: updateTag,
  deleteView: deleteTag,
};
