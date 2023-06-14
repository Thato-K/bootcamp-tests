describe('Testing transportFee function' , function(){
    it('It should stricly return "R20", when passed with "morning" ' , function(){
        assert.equal('R20', transportFee('morning'), "This should be true");
    });
    
    it('It should stricly return "R10", when passed with "afternoon" ' , function(){
        assert.equal('R10', transportFee('afternoon'), "This should be true");
    });

    it('It should stricly return "free", when passed with "nightshift" ' , function(){
        assert.equal(undefined, transportFee('free'), "for night shift return free");
    });

});