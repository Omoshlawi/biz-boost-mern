const { default: mongoose } = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    category: {
      type: mongoose.Types.ObjectId,
      required: true,
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
      type: mongoose.Types.ObjectId,
      required: true,
    },
    image: String,
    description: {
      type: String,
      minlength: 20,
      required: false,
    },
    price: {
      type: mongoose.Types.Decimal128,
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
    availa
  })
);
