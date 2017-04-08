var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  followingUserId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  followedUserId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  activeMode: Boolean
});

module.exports = mongoose.model('UserFollow', userSchema);