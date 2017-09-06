/**
 * @file index.js
 * Defines the Yodle server.
 */

const express = require('express');
const fortune = require('fortune');
const fortuneHTTP = require('fortune-http');
const fortuneMongo = require('fortune-mongodb');
const fortuneJsonAPI = require('fortune-json-api');

// Initialize fortune instance (Define schema and store).
const store = fortune(
  {
    hostname: {
      name: String
    }
  },
  {
    adapter: [fortuneMongo, { url: 'mongodb://34.211.179.255:27017/test' }]
  }
);

// Initialize an HTTP listener.
const listener = fortuneHTTP(store, {
  serializers: [[fortuneJsonAPI]]
});

// Initialize app object.
const app = express();
app.use((req, res) => {
  listener(req, res);
});

app.listen(process.env.YODLE_PORT || 3000);
