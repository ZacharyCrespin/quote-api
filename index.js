const express = require('express');
const app = express();
app.use(express.static('views'));

var fs = require('fs');

app.get('/', (req, res) => {
  fs.readFile('quotes.json', function(err, buf) {
    var qarr = JSON.parse(buf);
    var random = Math.floor(Math.random() * (qarr.length - 1));
    res.send(qarr[random]);
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log(
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env
  );
});