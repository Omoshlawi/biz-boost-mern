const { default: mongoose, model } = require("mongoose");
module.exports = mongoose.model(
  "User",
  new mongoose.Schema({
    firstName: {
      type: String,
      required: false,
      minlength: 3,
      maxlength: 20,
    },
    lastName: {
      type: String,
      required: false,
      minlength: 3,
      maxlength: 20,
    },
    surName: {
      type: String,
      required: false,
      minlength: 3,
      maxlength: 20,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 255,
      // match: //,
    },
    active: {
      type: Boolean,
      default: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
      required: false,
    },
    image: {
      type: String,
      required: false,
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
