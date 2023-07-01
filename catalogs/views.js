const Joi = require("joi");
const Category = require("./models/Category");
const { default: slugify } = require("slugify");
const { getValidationErrrJson } = require("../utils/helpers");
const CategorySchema = Joi.object({
  category: Joi.string().required().min(5).max(50).label("Category"),
  description: Joi.string().min(20),
});

const addCategory = async (req, res) => {
  try {
    const value = await CategorySchema.validateAsync(req.body);
    let newCategory = new Category({ ...value, slug: slugify(value.category) });
    newCategory = await newCategory.save();
    return res.json(newCategory);
  } catch (err) {
    return res.status(400).json(getValidationErrrJson(err));
  }
};

const getCategories = async (req, res) => {
  res.json({ results: await Category.find() });
};
const getCategoryDetail = async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) return res.status(404).json({ detail: "No such category" });
  res.json(category);
};

const updateCategory = async (req, res) => {
  // TODO fix this bug
  if (!(await Category.exists({ _id: req.params.id }))) {
    return res.status(404).json({ detail: "No such category" });
  }
  try {
    const value = await CategorySchema.validateAsync(req.body);
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { $set: { ...value, slug: slugify(value.category) } },
      { new: true }
    );

    return res.json(category);
  } catch (err) {
    return res.status(400).json(getValidationErrrJson(err));
  }
};

const deleteCategory = async (req, res) => {
  const category = await Category.findByIdAndRemove(req.params.id);
  if (!category) return res.status(404).json({ detail: "No suh category" });
  res.json({ detail: "Deleted successfully" });
};

module.exports = {
  addCategory,
  getCategories,
  getCategoryDetail,
  updateCategory,
  deleteCategory,
};
