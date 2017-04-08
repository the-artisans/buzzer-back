const express = require('express')
const bodyParser = require('body-parser');
const app = express()

const usersEndpoint = require('./api/users');
const userFollowingEndpoint = require('./api/user-following');

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', usersEndpoint.get);
app.post('/users', usersEndpoint.post);
app.delete('/users', usersEndpoint.del);

app.get('/users/:userId/following', userFollowsEndpoint.get);
app.post('/users/:userId/follow/:targetUserId', userFollowsEndpoint.post);

app.listen(app.get('port'), function () {
  console.log(`Example app listening on port ${app.get('port')}!`)
});