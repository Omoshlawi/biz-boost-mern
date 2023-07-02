const { default: mongoose } = require("mongoose");

const metaShema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    keyword: {
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
);
const Category = mongoose.model(
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
      thumbnail: {
        type: String,
        required: true,
      },
      meta: {
        type: metaShema,
        required: true,
      },
    },
    {
      // Options for virtual properties
      toJSON: { virtuals: true, getters: true }, // Include virtual properties and getters when converting to JSON
      toObject: { virtuals: true, getters: true }, // Include virtual properties and getters when converting to object
    }
  )
);

module.exports = {
  Category,
  CtegoryMeta: mongoose.model("CategoryMeta", metaShema),
};
