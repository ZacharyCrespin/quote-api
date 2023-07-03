const express = require('express');
const app = express();

const fs = require('fs');

app.get('/api', (req, res) => {
  fs.readFile('quotes.json', function(err, quotes) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      quotes = JSON.parse(quotes);
      let random = Math.floor(Math.random() * (quotes.length - 1));
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.send(quotes[random]);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port http://localhost:3000');
});
