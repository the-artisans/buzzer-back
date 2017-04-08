const express = require('express')
const db = require('./mongo');
const app = express()

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  db.execute().then(function (mongo) {
    return new Promise(resolve => {
      db.findDocuments(mongo, d => {
        res.send(JSON.stringify(d));
        resolve();
      });
    });
  });
})

app.listen(app.get('port'), function () {
  console.log(`Example app listening on port ${app.get('port')}!`)
})