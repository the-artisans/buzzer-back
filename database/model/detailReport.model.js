var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var detailReportSchema = new Schema({
  portfolio: { type: mongoose.Schema.Types.ObjectId, ref: "Portfolio" },
  startTime: String,
  endTime: String,
  rateOfRoi: Number
});

module.exports = mongoose.model("DetailReport", detailReportSchema);
