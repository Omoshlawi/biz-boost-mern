const mongoose = require("mongoose");
const Business = mongoose.model(
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
    owner: mongoose.Types.ObjectId,
    address: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  })
);

const getBusinesses = async () => {
  const businesses = await Business.find();
  return businesses;
};
