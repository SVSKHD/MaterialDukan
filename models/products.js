const Mongoose = require("mongoose");
const { ObjectId } = Mongoose.Schema;

const productSchema = new Mongoose.Schema(
  {
    title: String,
    subTitle: String,
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    descrption: {
      type: String,
      maxlength: 300,
    },
    note: String,
    price: {
      type: Number,
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
    images: {
      type: Array,
    },
    keywords: {
      type: [],
    },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("Product", productSchema);
