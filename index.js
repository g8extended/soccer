var _PORT = 8881;

var express = require('express');
var app = express();

app.use(express.static('app'));

app.listen(_PORT, function () {
	console.log('Example app listening on port ' + _PORT);
});