const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const md5 = require("md5");

var userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, index: true, required: true, lowercase: true },
  occupation: String,
  followerCount: { type: Number, default: 0 },
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  mimickedCount: { type: Number, default: 0 },
  mimicking: [{ type: Schema.Types.ObjectId, ref: "User" }],
  availableAmount: { type: Number, default: 0 },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  portfolios: [{ type: Schema.Types.ObjectId, ref: "Portfolio" }],
  overallReport: { type: Schema.Types.ObjectId, ref: "OverallReport" },
  detailReport: { type: Schema.Types.ObjectId, ref: "DetailReport" },
  // style: ,
  deleted: { type: Boolean, default: false }
});

userSchema.set("toJSON", { virtuals: true });
userSchema.set("toObject", { virtuals: true });

userSchema.virtual("emailHash").get(function() {
  if(this.email) {
    return md5(this.email);
  }
  return this.email;
});

module.exports = mongoose.model("User", userSchema);
