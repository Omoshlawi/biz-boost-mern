const mongoose = require("mongoose");
module.exports = mongoose.model(
  "Order",
  new mongoose.Schema({
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
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
  })
);
