const UserService = require("../Service/User");
const handleError = require("../Service/Utility").handleError;

exports.getTopTenUsers = (req, res) => {
  UserService.getTopTenUsers((error, users) => {
    if(error) {
      handleError(error);
      return res.sendStatus(500);
    }
    
    return res.send({result: users});
  });
};