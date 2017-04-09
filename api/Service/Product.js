// const UserService = require("../Service/User");
const Product = require("../DbService/Product");

exports.sell = (userId, productIds, cb) => {
  // TODO check if the product is owned by the user? UserService.getAllProductsByUser()
  Product.setSold(productIds, cb);
};