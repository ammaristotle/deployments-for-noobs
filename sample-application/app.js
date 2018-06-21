const express = require('express');
const http = require('http');
const app = express();

// Helper function to check if a JS object is empty
// Source: https://stackoverflow.com/a/32108184
isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

app.set('port', process.env.PORT || 4000);

// We'll hold all data in memory on this object
let data = {};

// Create a route to make sure the app is online
app.get('/', (req, res) => { res.send('Online!'); });

// Set a key to a value
app.get('/set', (req, res) => {
  // If no keys are provided or an empty query is provided
  // send 400 Bad Request
  if (!req.query || isEmptyObject(req.query)) {
    res.sendStatus(400);
    return;
  }

  // Iterate through all keys to set
  for (key in req.query) {
    // Save in memory
    const value = req.query[key];
    data[key] = value;
  }
  res.sendStatus(200);
});

// Retrieve a key's value stored in memory
app.get('/get', (req, res) => {
  if (!req.query || !req.query.key) {
    res.sendStatus(400);
    return;
  }
  if (data[req.query.key]) {
    res.send(data[req.query.key])
    return;
  }
  res.send('nil');
});

http.createServer(app).listen(app.get('port'), () => {
  console.log(`KV store running on ${app.get('port')}!`);
});
