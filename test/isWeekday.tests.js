describe('Testing a weekday function' , function(){
    it('It should return true, when passed with a day of the week ' , function(){
        assert.equal(true, isWeekday('Monday'), "This should be true");
    });
    
    it('It should return false when passed with a weekend day ' , function(){
        assert.equal(false, isWeekday('Saturday'), "This should be true");
    });

});