const mongoose = require("mongoose");
const database = require("../database/database");
const User = require("./DbService/User");
const handleError = require("./Service/Utility").handleError;
var moment = require("moment");

function addProductToUser(req, res) {
  database.User.findOne({_id: req.body.userId}).populate("products").exec((err, user) => {
    if(err) {
      console.log("err", err);
      return;
    }

    console.log("user", user);

    var product = new database.Product({
      name: "AAON",
      startTime: moment("2017-04-07").format("x"),
      startPrice: 34.5,
      endPrice: 34.3,
      unitNumber: 34.3,
      rateOfRoi: 0.994
    });

    product.save((err, product) => {
      if(err) {
        console.log("err", err);
        res.sendStatus(500);
        return;
      }

      console.log("product", product);
      user.products.push(product);

      user.save((err, user) => {
        if(err) {
          console.log("err", err);
          res.sendStatus(500);
          return;
        }

        console.log("saved user", user);

        res.sendStatus(200);
      });
    });
  });
}

// function updateProduct(req, res) {
//   // database.Product.find().exec((error, products) => {
//   // });

//   database.Product.update({}, {mimickUser: "58e8d7e6a4f8e33ec891e709"});
// }

function addOverallReportToUser(req, res) {
  database.User.findOne({_id: req.body.userId}).populate("products").exec((err, user) => {
    if(err) {
      console.log("err", err);
      return;
    }

    console.log("user", user);

    var overallReport = new database.OverallReport({
      standardDeviation: 0.1,
      averageRateOfRoi: 0.994
    });

    overallReport.save((err, overallReport) => {
      if(err) {
        console.log("err", err);
        res.sendStatus(500);
        return;
      }

      console.log("overallReport", overallReport);
      user.overallReport = overallReport._id;

      user.save((err, user) => {
        if(err) {
          console.log("err", err);
          res.sendStatus(500);
          return;
        }

        console.log("saved user", user);

        res.sendStatus(200);
      });
    });
  });
}

// function getStockRealtimePrice() {
//   // 
// }

// function calculateROI() {
//   // 
// }

function getDashboardInfoByUser(req, res) {
  var options = {
    where: {
      _id: req.body.userId
    },
    fieldStr: "products overallReport",
    populateOptions: [{
      path: "products",
      // match: {
      //   sold: false
      // }
    }, {
      path: "overallReport"
    }]
  };

  User.getUserWithPopulateData(options, (error, user) => {
    if(error) {
      handleError(error);
      return res.sendStatus(500);
    }

    return res.send({result: user});
  });
}

// TODO get the realtime stock price and calculate ROI

module.exports = { getDashboardInfoByUser/*, addProductToUser, addOverallReportToUser*/ };

