// functions/index.js

const functions = require('firebase-functions');

exports.myFunction = functions.https.onRequest((req, res) => {
  res.send('Hello from Firebase!');
});
