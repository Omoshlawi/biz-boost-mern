const { default: mongoose } = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    slug: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    branch: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Branch",
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      minlength: 20,
      required: false,
    },
    price: {
      type: mongoose.Schema.Types.Decimal128,
      required: false,
      default: 0.0,
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
