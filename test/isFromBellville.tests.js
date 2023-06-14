describe('Testing isFromBellville function' , function(){
    it('It should return true when passed with reg number that starts with "CY" ' , function(){
        assert.equal(true, isFromBellville('CY 123'), "This should be true");
    });
    
    it('It should return false, when passed with reg number that does not starts with "CY" ' , function(){
        assert.equal(false, isFromBellville('CJ 123'), "This should be false");
    });

});
