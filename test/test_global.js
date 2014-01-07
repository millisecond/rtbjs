
var assert = require("assert")

require("../rtb")

describe('Model', function(){


//
//    var db = new Connection
//        , tobi = new User('tobi')
//        , loki = new User('loki')
//        , jane = new User('jane');
//
//    beforeEach(function(done){
//        db.clear(function(err){
//            if (err) return done(err);
//            db.save([tobi, loki, jane], done);
//        });
//    })
//
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
})


