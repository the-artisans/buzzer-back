var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, index: true, required: true, lowercase: true },
  occupation: String
});

module.exports = mongoose.model('User', userSchema);