const gm = require('./google')
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../build')));

// GOOGLE API

app.post('/sendGoogleTokenAccess', function (req, res) {
  const token = req.body.token.tokenObj
  gm.authorize(token, (auth) => {
    gm.listFiles(auth)
  })
  return res.send('MRC');
});
// END GOOGLE API

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(process.env.PORT || 3000);