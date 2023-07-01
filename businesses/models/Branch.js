const mongoose = require("mongoose");

const Branch = mongoose.model(
  "Branch",
  new mongoose.Schema({
    business: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    street: String,
    city: String,
    country: String,
    address: {
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
    customer_service_number: {
      type: String,
      required: true,
    },
  })
);
