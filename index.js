const express = require('express');
const app = express();

const fs = require('fs');

app.get('/', (req, res) => {
  fs.readFile('quotes.json', function(err, quotes) {
    quotes = JSON.parse(quotes);
    let random = Math.floor(Math.random() * (quotes.length - 1));
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.send(quotes[random]);
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log(
    'listening on port http://localhost:%d',
    this.address().port
  );
});
