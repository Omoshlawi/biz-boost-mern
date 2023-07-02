const { default: mongoose } = require("mongoose");

const generalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  description: {
    type: String,
    required: false,
    minlength: 20,
  },
  slug: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    lowercase: true,
  },
  branch: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Branch",
  },
});

const pricingSchema = new mongoose.Schema({
  basePrice: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  dicount: {
    type: String,
    required: false,
    minlength: 20,
  },
  netPrice: {
    type: Number,
    min: 0,
    virtual: true,
  },
});

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    thumbnail: {
      type: String,
      required: true,
    },
    general: {
      type: generalSchema,
      required: true,
    },
    pricing: {
      type: pricingSchema,
      required: true,
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Tag",
    },
    status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Status",
    },
    template: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Template",
    },
    created: {
      type: Date,
      required: false,
      default: Date.now,
    },
    updated: {
      type: Date,
      required: false,
      default: Date.now,
    },
    available: {
      type: Boolean,
      default: true,
      required: false,
    },
    images: {
      type: Array,
      required: true,
      validate: {
        validator: (value) => value && value.length > 0,
        message: "Product must have atleast one image",
      },
    },
  })
);

module.exports = {
  Product,
  Pricing: mongoose.model("Pricing", pricingSchema),
  General: mongoose.model("General", generalSchema),
};
