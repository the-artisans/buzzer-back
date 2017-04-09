var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: String,
  startTime: String,
  endTime: String,
  startPrice: Number,
  endPrice: Number,
  unitNumber: Number,
  rateOfRoi: Number
});

module.exports = mongoose.model("Product", productSchema);
