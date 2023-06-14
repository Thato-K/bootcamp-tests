describe('Testing fromWhere function' , function(){
    it('It should return Paarl, when passed with Paarl regNumber ' , function(){
        assert.equal('Paarl', fromWhere('CJ 343502'), "This should be true");
    });
    
    it('It should return Bellville, when passed with Bellville regNumber ' , function(){
        assert.equal('Bellville', fromWhere('CY 567489'), "This should be true");
    });

    it('It should return the town where the car is from, when passed with Cape Town regNumber ' , function(){
        assert.equal('Cape Town', fromWhere('CA 987504'), "This should be true");
    });

    it('It should return the town where the car is from, when passed with other regNumber ' , function(){
        assert.equal('Some other place!', fromWhere('ZN 568593'), "This should be true");
    });

});