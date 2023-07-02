const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Address",
  new mongoose.Schema({
    zip: {
      type: String,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    street: String,
    city: String,
    country: String,
  })
);
