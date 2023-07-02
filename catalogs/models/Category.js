const { default: mongoose } = require("mongoose");

module.exports = mongoose.model(
  "Category",
  new mongoose.Schema(
    {
      category: {
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
      description: {
        type: String,
        required: false,
        minlength: 20,
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
      url: {
        type: String,
        virtual: true,
        get: function () {
          return `/catalog/${this._id}`;
        },
      },
    },
    {
      // Options for virtual properties
      toJSON: { virtuals: true, getters: true }, // Include virtual properties and getters when converting to JSON
      toObject: { virtuals: true, getters: true }, // Include virtual properties and getters when converting to object
    }
  )
);
