const mongoose = require("mongoose");
const User = require("./model/user.model");
const Portfolio = require("./model/portfolio.model");
const Product = require("./model/product.model");
const DetailReport = require("./model/detailReport.model");
const OverallReport = require("./model/overallReport.model");

const user = "artisans";
const pass = "GuRzZox9VN2oqzjX";
const db = "buzzer-dev";
// Connection URL
const url = process.env.MONGO_CONNECTION_STR || `mongodb://${user}:${pass}@cluster0-shard-00-00-gu8zv.mongodb.net:27017,cluster0-shard-00-01-gu8zv.mongodb.net:27017,cluster0-shard-00-02-gu8zv.mongodb.net:27017/${db}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`;
console.log("Database URL", url);

mongoose.set("debug", true);
mongoose.Promise = global.Promise
mongoose.connect(url);

// User.updateMany({}, {$rename:{"following":"followingUsers"}});
// Product.update({_id: "58e9fad0820d04e951577c10"}, {rateOfRoi: -0.006}, {multi: false}, (error, numberAffected) => {
//   if(error) {
//     console.error(error);
//     return;
//   }
//   console.log("!!! numberAffected", numberAffected);
// });

module.exports = { User, Portfolio, Product, DetailReport, OverallReport };