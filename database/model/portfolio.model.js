var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var moment = require("moment");

var portfolioSchema = new Schema({
  startTime: { type: String, default: moment().format("x") },
  endTime: String,
  type: { type: String, default: "Stock" },
  products: [{
    name: String,
    price: Number,
    unitNumber: { type: Number, default: 0 }
  }],
  report: { type: mongoose.Schema.Types.ObjectId, ref: "DetailReport" }
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
