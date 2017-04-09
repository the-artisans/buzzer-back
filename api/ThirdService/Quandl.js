const https = require("https");
const moment = require("moment");

exports.getLatestDJIA = (cb) => {
  var oneYearBefore = moment().subtract(1, "years");
  var endDate = oneYearBefore.format("YYYY-MM-DD");
  var startDate = oneYearBefore.subtract(5, "days").format("YYYY-MM-DD");
  var url = `https://www.quandl.com/api/v3/datasets/BCB/UDJIAD1.json?api_key=KeMLbUBiRoyV9RbKmMVE&transform=rdiff&start_date=${startDate}&end_date=${endDate}`;

  https.get(url, (res) => {
    if(res.statusCode != 200) {
      return cb("Something's wrong");
    }

    var body = "";

    res.on("data", (d) => {
      body = body + d;
    });

    res.on("end", () => {
      return cb(null, body);
    });

  }).on("error", (e) => {
    return cb("Something's wrong");
  });
};
