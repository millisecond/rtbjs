
//Bid request object.  All attributes from the request are entered into here.
//Standard fields are declared at the root level, with extensions available for certain providers.
var BidRequest = function() {}
//BidRequest.prototype.submit = function() { };
exports.BidRequest = BidRequest;

//Create and send back this bid response object as the result of a bid request.  Return null to void the request.
var BidResponse = function() {}
BidResponse.prototype.end = function() {
    //send the response back to the server.
};
exports.BidResponse = BidResponse;

//Create and send back this bid response object as the result of a bid request.  Return null to void the request.
var Listener = function() {}
Listener.prototype.name = function() {

};
Listener.prototype.path = function() {

};
exports.Listener = Listener;

exports.google = require("./exchanges/google/google.js");
exports.facebook = require("./exchanges/facebook/facebook.js");

