const User = require("../DbService/User");
const OverallReport = require("../DbService/OverallReport");
const QuandlService = require("../ThirdService/Quandl");

exports.getProfileInfoByUser = (userId, cb) => {
  var options = {
    where: {
      _id: userId
    },
    populateOptions: "products overallReport detailReport"
  };

  User.getUserWithPopulateData(options, (error, user) => {
    if(error) {
      return cb(error);
    }

    if(!user) {
      return cb("Can't find the user: " + userId);
    }

    user = user.toObject();

    user.followingCount = user.following.length;
    user.mimickingCount = user.mimicking.length;

    var products = user.products;
    var investmentAmount = products.reduce((result, product) => {
      result = result + product.startPrice * product.unitNumber;
      return result;
    }, 0);

    user.investmentAmount = investmentAmount;
    
    QuandlService.getLatestDJIA((error, result) => {
      return cb(null, {
        result: {
          user: user,
          benchmark: result
        }
      });
    });
  });
};
