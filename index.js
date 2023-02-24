const express = require('express');
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
  });
});

app.listen(process.env.PORT || 3000);