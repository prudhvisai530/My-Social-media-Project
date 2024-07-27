const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    description: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    Likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posts", PostSchema);
