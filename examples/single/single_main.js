
var rtb = require('rtb');

//only create a Google endpoint
var server = rtb.google.createServer(function (req, res) {
    //Process req, decide on bids / creative
    //Call res.end() when done
}).listen();

console.log('RTB.js server running at http://127.0.0.1/');

server.endpoints.map(function(endpoint) {
    console.log(endpoint.name + " listening at " + endpoint.url);
});