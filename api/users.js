const mongoose = require("mongoose");
const database = require("../database/database");

function get(req, res) {
  database.User.find({}).exec((err, users) => {
    console.log(err, users);
    res.json(users);
  });
}

function post(req, res) {
  const user = new database.User({
    name: req.body.name,
    email: req.body.email,
    occupation: req.body.occupation
  });
  user.save((err, user, numAffected) => {
    console.log(err, numAffected);
    res.json(user);
  });
}

function del(req, res) {
  // database.User.remove({ asd: "guilhermeventura2@gmail.com" }).then((err, user, numAffected) => {
  //   console.log(err, user, numAffected);
  //   res.json({ success: true });
  // });
  res.json({ success: true });
}

module.exports = { get, post, del };