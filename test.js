// JUST TESTING THINGS OUT

const database = require('./database/database');

database.User.find({}).then(users => {
  let following = users[0];
  let followed = users[1];
  console.log(users);

  // let userFollow = database.UserFollow({
  //   followedUserId: followed._id,
  //   followingUserId: following._id,
  //   activeMode: false
  // });

  // userFollow.save((err, o) => {
  //   console.log(err, o);
  // });

  database.UserFollow
    .find({ followedUserId: followed._id })
    .populate('followingUserId')
    .exec(function (err, user) {
      if (err) return handleError(err);
      console.log('The creator is %s', user.followingUserId.name);
      // prints "The creator is Aaron"
    });
})