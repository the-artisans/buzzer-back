const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var overallReportSchema = new Schema({
  standardDeviation: Number,
  averageRateOfRoi: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("OverallReport", overallReportSchema);
