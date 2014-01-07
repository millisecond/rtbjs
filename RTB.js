
//Bid request object.  All attributes from the request are entered into here.
//Standard fields are declared at the root level, with extensions available for certain providers.
var BidRequest = function() {}
//BidRequest.prototype.submit = function() { };
exports.BidRequest = BidRequest;

//Create and send back this bid response object as the result of a bid request.  Return null to void the request. 
var BidResponse = function() {}
BidResponse.prototype.submit = function() {

};
exports.BidResponse = BidResponse;

exports.googleAdExchange = function() {

};

