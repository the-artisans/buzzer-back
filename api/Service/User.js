const User = require("../DbService/User");
const OverallReport = require("../DbService/OverallReport");

// exports.getAllFollowingUsers = (userId, cb) => {
//   var options = {
//     where: {
//       _id: userId
//     },
//     fieldStr: "following",
//     populateOptions: "following"
//   };

//   User.getUsersWithPopulateData(options, cb);
// };

exports.getAllFollowingUsersWithInfo = (userId, cb) => {
  var options = {
    where: {
      _id: userId
    },
    fieldStr: "following",
    populateOptions: {
      path: "following",
      populate: {
        path: "products overallReport"
      }
    }
  };

  User.getUsersWithPopulateData(options, cb);
};

exports.getAllProductsByUser = (userId, cb) => {
  var options = {
    where: {
      _id: userId
    },
    fieldStr: "products",
    populateOptions: {
      path: "products",
      // match: {
      //   sold: false
      // }
    }
  };

  User.getUserWithPopulateData(options, (error, user) => {
    if(error) {
      return cb(error);
    }

    return cb(null, user.products);
  });
};

exports.getTopTenUsers = (cb) => {
  var result = {};

  User.getTopTenUsersSortBy("-followerCount", (error, users) => {
    if(error) {
      return cb(error);
    }

    result.followerCount = users;

    User.getTopTenUsersSortBy("-mimickedCount", (error, users) => {
      if(error) {
        return cb(error);
      }

      result.mimickedCount = users;
      
      OverallReport.getTopTenUsersByRoi((error, users) => {
        if(error) {
          return cb(error);
        }

        result.averageRoi = users;
        
        return cb(null, result);
      });
    });
  });
};
