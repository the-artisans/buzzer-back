const mongoose = require('mongoose');
const database = require('../database/database');

// /following (:userId)
function get(req, res) {
  database.UserFollow
    .find({ followingUserId: req.params.userId })
    .populate('followedUserId')
    .exec(function (err, userFollows) {
      if (err) return handleError(err);
      res.json(userFollows);
    });
}

// /follow/:targetUserId (:userId, may have :actively in query)
function post(req, res) {
  let userId = req.params.userId;
  let targetUserId = req.params.targetUserId;
  let activelyFollow = req.query.actively !== undefined ? req.query.actively : false;

  userFollows(userId, targetUserId)
    .then(alreadyFollows => {
      if (alreadyFollows) {
        res.status(409).send({
          success: false,
          message: 'already following'
        });
        return;
      }

      let userFollow = database.UserFollow({
        followingUserId: userId,
        followedUserId: targetUserId,
        activeMode: activelyFollow
      });

      userFollow.save()
        .then(_ => res.json({ success: true }),
        err => res.status(500).json(err));
    });
}

// TODO: stop following
function del(req, res) {
  res.json({ success: true });
}


/**
 * Check if :userId follows :targetUserId
 * @param {mongoose.Types.ObjectId} userId 
 * @param {mongoose.Types.ObjectId} targetUserId 
 */
function userFollows(userId, targetUserId) {
  return database.UserFollow
    .findOne({ followingUserId: userId, followedUserId: targetUserId })
    .exec()
    .then(userFollow => !!userFollow);
}

module.exports = { get, post, del };