const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var productSchema = new Schema({
  name: String,
  startTime: String,
  endTime: String,
  startPrice: Number,
  endPrice: Number,
  unitNumber: Number,
  rateOfRoi: Number,
  sold: { type: Boolean, default: false },
  mimickUser: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Product", productSchema);
