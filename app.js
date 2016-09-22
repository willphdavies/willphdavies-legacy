var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
process.env.PWD = process.cwd();

app.use(express.static('dist'));

app.get('/', function(request, response) {
    response.sendfile('dist/index.html');
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});