var http = require('http');
var server = http.createServer(function(req, res){
	res.writeHead(301, {'Location' : 'http://bonanza368.co'});
	res.end();
});
server.listen(process.env.PORT || 3000);
