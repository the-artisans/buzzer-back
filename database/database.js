var mongoose = require('mongoose');
const assert = require('assert');

const User = require('./model/user.model');
const UserFollow = require('./model/user-follow.model');

const user = 'artisans';
const pass = 'GuRzZox9VN2oqzjX';
const db = 'buzzer-dev';
// Connection URL
const url = process.env.MONGO_CONNECTION_STR || `mongodb://${user}:${pass}@cluster0-shard-00-00-gu8zv.mongodb.net:27017,cluster0-shard-00-01-gu8zv.mongodb.net:27017,cluster0-shard-00-02-gu8zv.mongodb.net:27017/${db}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`;
console.log("URL", url);

mongoose.set('debug', true);
mongoose.Promise = global.Promise
mongoose.connect(url);

module.exports = { User, UserFollow };