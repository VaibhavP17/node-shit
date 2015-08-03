var http = require('http');
var myServer = http.createServer(function(req, response){
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write("<b>Hello </b> World");
	response.end();
});

myServer.listen(3000);