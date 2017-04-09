const UserService = require("../Service/User");
const handleError = require("../Service/Utility").handleError;

exports.getAllFollowingUsersWithInfo = (req, res) => {
  var userId = req.params.userId;

  UserService.getAllFollowingUsersWithInfo(userId, (error, users) => {
    if(error) {
      handleError(error);
      return res.sendStatus(500);
    }
    
    return res.send({result: users});
  });
};
