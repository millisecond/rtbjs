
var rtb = require('../../rtb.js');

//Create a generic server with all exchange endpoints
var server = rtb.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen();

console.log('RTB.js server running at http://127.0.0.1/');

server.endpoints.map(function(endpoint) {
    console.log(endpoint.name + " listening at " + endpoint.url);
});