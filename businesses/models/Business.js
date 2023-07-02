const mongoose = require("mongoose");
module.exports = mongoose.model(
  "Business",
  new mongoose.Schema({
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
    description: {
      type: String,
      minlength: 20,
      required: false,
    },
    is_approved: {
      type: Boolean,
      default: false,
    },
    image: String,
    owner: mongoose.Schema.Types.ObjectId,
    address: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  })
);
