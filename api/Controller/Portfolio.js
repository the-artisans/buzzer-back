const handleError = require("../Service/Utility").handleError;
const UserService = require("../Service/User");
const ProductService = require("../Service/Product");

exports.getAllProductsByUser = (req, res) => {
  var userId = req.body.userId;

  UserService.getAllProductsByUser(userId, (error, products) => {
    if(error) {
      handleError(error);
      return res.sendStatus(500);
    }

    return res.send({result: products});
  });
};

exports.sellProducts = (req, res) => {
  var {userId, productIds} = req.body;
  
  ProductService.sell(userId, productIds, (error, result) => {
    if(error) {
      handleError(error);
      return res.sendStatus(500);
    }

    return res.sendStatus(200);
  });
};
