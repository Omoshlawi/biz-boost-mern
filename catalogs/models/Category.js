const { default: mongoose } = require("mongoose");
const categoryScheema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
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
  },
  {
    toJSON: { virtuals: true }, // Include virtual properties when converting to JSON
    toObject: { virtuals: true }, // Include virtual properties when converting to object
  }
);

categoryScheema.virtual("url").get(function () {
  return `/catalog/${this._id}`;
});

module.exports = mongoose.model("Category", categoryScheema);
