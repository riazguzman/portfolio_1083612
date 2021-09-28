// mongoose
// For interacting with database. We connect and query to mongodb through mongoose.
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    content: {
      type: String,
      trim: true,
      required: true,
      maxlength: 500,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Message", messageSchema);
