var mongoose = require("mongoose");
// const assert = require("assert");

const User = require("./model/user.model");
// const UserFollow = require("./model/user-follow.model");
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
Product.update({}, {mimickUser: "58e8d7e6a4f8e33ec891e709"});

module.exports = { User, Portfolio, Product, DetailReport, OverallReport };