var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  var fs = require('fs');
  var Buffer = require('buffer').Buffer;
  var constants = require('constants');

  fs.open("index.html", 'r', function(status, fd) {
    if (status) {
        console.log(status.message);
        return;
    }
    var buffer = new Buffer(1000);
    fs.read(fd, buffer, 0, 1000, 0, function(err, num) {
        response.send(buffer.toString('utf-8', 0, num));
    });
  });


});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
