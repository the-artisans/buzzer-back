const mongoose = require("mongoose");
const database = require("../../database/database");

exports.setSold = (productIds, cb) => {
  database.Product.update({_id: productIds}, {sold: true}, cb);
};
