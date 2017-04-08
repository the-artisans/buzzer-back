var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var overallReportSchema = new Schema({
  standardDeviation: Number,
  averageRateOfRoi: Number
});

module.exports = mongoose.model("OverallReport", overallReportSchema);
