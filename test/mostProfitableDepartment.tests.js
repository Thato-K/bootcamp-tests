describe('Testing most profitable department function' , function(){
    it('It should return "outdoor", when passed with outdoor(department) ' , function(){
        assert.equal(null, mostProfitableDepartment('outdoor'), "This should be true");
    });
    
    it('It should return "electronics", when passed with electronics department ' , function(){
        assert.equal(null, mostProfitableDepartment('electronics'), "This should be true");
    });

});