const express = require('express');
const ackeeTracker = require('ackee-tracker');
const app = express();

var fs = require('fs');

app.get('/', (req, res) => {
  fs.readFile('quotes.json', function(err, buf) {
    var qarr = JSON.parse(buf);
    var random = Math.floor(Math.random() * (qarr.length - 1));
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.send(qarr[random]);
    ackeeTracker.action('b926992b-1b76-412c-9a6e-0beecfe0ca9c', { key: 'Click', value: 1 });
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Express server listening on port %d in %s mode');
});