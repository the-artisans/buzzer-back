const mongoose = require("mongoose");
const User = require("../../database/database").User;

exports.getUser = (options, cb) => {
  var {where, fieldStr} = options;
  // TODO
  // where.deleted = false;
  User.findOne(where, fieldStr).exec(cb);
};

exports.getUserWithPopulateData = (options, cb) => {
  var {where, fieldStr, populateOptions} = options;
  // TODO
  // where.deleted = false;
  User.findOne(where, fieldStr).populate(populateOptions).exec(cb);
};

exports.getUsers = (options, cb) => {
  var {where, fieldStr} = options;
  // TODO
  // where.deleted = false;
  User.find(where, fieldStr).exec(cb);
};

exports.getUsersWithPopulateData = (options, cb) => {
  var {where, fieldStr, populateOptions} = options;
  // TODO
  // where.deleted = false;
  User.find(where, fieldStr).populate(populateOptions).exec(cb);
};

exports.getTopTenUsersSortBy = (condition, cb) => {
  User.find().limit(10).sort(condition).exec(cb);
};
