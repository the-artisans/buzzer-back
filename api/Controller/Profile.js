const handleError = require("../Service/Utility").handleError;
const ReportService = require("../Service/Report");

exports.getProfileInfoByUser = (req, res) => {
  var userId = req.body.userId;

  ReportService.getProfileInfoByUser(userId, (error, profileInfo) => {
    if(error) {
      handleError(error);
      return res.sendStatus(500);
    }

    return res.send(profileInfo);
  })
};

