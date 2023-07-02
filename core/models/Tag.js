const { default: mongoose } = require("mongoose");

module.exports = mongoose.model(
  "Tag",
  new mongoose.Schema({
    name: {
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
  })
);
