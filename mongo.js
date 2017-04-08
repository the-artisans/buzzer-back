var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

const user = 'artisans';
const pass = 'GuRzZox9VN2oqzjX';
const db = 'buzzer-dev';

// Connection URL
var url = process.env.MONGO_CONNECTION_STR || `mongodb://${user}:${pass}@cluster0-shard-00-00-gu8zv.mongodb.net:27017,cluster0-shard-00-01-gu8zv.mongodb.net:27017,cluster0-shard-00-02-gu8zv.mongodb.net:27017/${db}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`;

// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  // insertDocuments(db, function() {
  //   findDocuments(db, function() {
  //     db.close();
  //   });
  // });
});

module.exports.execute = function (fn) {
  return new Promise((res, rej) => {
    MongoClient.connect(url, function (err, db) {
      assert.equal(null, err);
      console.log("Connected successfully to server");

      res(db)//.then(_ => db.close());
    });
  });
}

var insertDocuments = function (db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    { a: 1 }, { a: 2 }, { a: 3 }
  ], function (err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

var findDocuments = function (db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

module.exports.findDocuments = findDocuments;

var updateDocument = function (db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ a: 2 }
    , { $set: { b: 1 } }, function (err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback(result);
    });
}