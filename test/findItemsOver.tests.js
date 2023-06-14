describe('Testing findItemsOver function' , function(){
    it('It should return roducts that have quantity higher than the threshold, when passed with list of objects ' , function(){
        assert.deepEqual(results, findItemsOver(itemList, 20), "This should be true");
    });
    
    it('It should second return(results2) all the second item list' , function(){
        assert.deepEqual(results2, findItemsOver(itemList2, 20), "This should be true");
    });

});