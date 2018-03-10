// serwer napisany w Node z wykorzystaniem biblioteki express

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  return res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function () {
  console.log('server is running on http://localhost:' + port);
});
