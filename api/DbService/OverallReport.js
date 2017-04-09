const mongoose = require("mongoose");
const OverallReport = require("../../database/database").OverallReport;

exports.getTopTenUsersByRoi = (cb) => {
  OverallReport.find().limit(10).sort("-averageRateOfRoi").populate("user").exec((error, reports) => {
    if(error) {
      return cb(error);
    }

    var user;
    var results = reports.reduce((results, report) => {
      user = report.user;
      if(!user) {
        return results;
      }
      user.overallReport = {
        standardDeviation: report.standardDeviation,
        averageRateOfRoi: report.averageRateOfRoi
      };
      results.push(user);
      return results;
    }, []);

    return cb(null, results);
  });
};
