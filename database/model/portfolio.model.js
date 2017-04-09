const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

var portfolioSchema = new Schema({
  startTime: { type: String, default: moment().format("x") },
  endTime: String,
  type: { type: String, default: "Stock" },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  report: { type: Schema.Types.ObjectId, ref: "DetailReport" }
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
