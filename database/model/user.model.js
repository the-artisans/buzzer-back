var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, index: true, required: true, lowercase: true },
  occupation: String,
  followerCount: { type: Number, default: 0 },
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  mimickedCount: { type: Number, default: 0 },
  mimicking: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  availableAmount: { type: Number, default: 0 },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  portfolios: [{ type: mongoose.Schema.Types.ObjectId, ref: "Portfolio" }],
  overallReport: { type: mongoose.Schema.Types.ObjectId, ref: "OverallReport" },
  detailReport: { type: mongoose.Schema.Types.ObjectId, ref: "DetailReport" },
  // style: ,
  deleted: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", userSchema);
