const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var detailReportSchema = new Schema({
  portfolio: { type: Schema.Types.ObjectId, ref: "Portfolio" },
  startTime: String,
  endTime: String,
  rateOfRoi: Number
});

module.exports = mongoose.model("DetailReport", detailReportSchema);
