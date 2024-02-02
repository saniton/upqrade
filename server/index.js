// index.js
const functions = require('firebase-functions');
const express = require('express');
const app = require('./server');

const serverApp = express();
serverApp.use('/', app);

exports.app = functions.https.onRequest(serverApp);
