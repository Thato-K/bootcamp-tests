describe('Testing items > 20 function' , function(){
    it('It should return first results for the first item list' , function(){
        assert.deepEqual(results, findItemsOver20(itemList), "This should be true");
    });
    
    it('It should second return(results2) all the second item list' , function(){
        assert.deepEqual(results2, findItemsOver20(itemList2), "This should be true");
    });

});