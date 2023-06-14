//describe('Testing allPaarl function' , function(){
    //it('It should return all Paarl reg No. when passed with parameter string ' , function(){
    //    assert.equal(2, regNumberForPaarl, allPaarl(regNumbers), "This should be true");
   // });
    
   //// it('It should return , when passed with "Sam" ' , function(){
    //    assert.equal('Hello, Sam', greet('Sam'), "This should be true");
    //});

//});

//const assert = require('chai').assert;
//const allPaarl = require('./allPaarl'); // Assuming allPaarl is defined in a separate file

describe('Testing allPaarl function', function() {
  it('should return an array of registration numbers from Paarl', function() {

    const regNumbers = 'CA 123 456, CJ 987 654, CY 321 654, CJ 123 789, CA 654 321, CJ 456 789';

    const result = allPaarl(regNumbers);

    assert.isArray(result);
    assert.deepEqual(result, ['CJ 987 654', 'CJ 123 789', 'CJ 456 789']);
  });

  it('should return an empty array when there are no registration numbers from Paarl', function() {

    const regNumbers = 'CA 123 456, CY 987 654, GP 321 654, CA 123 789, GP 654 321, GP 456 789';

    const result = allPaarl(regNumbers);

    assert.isArray(result);
    assert.deepEqual(result, []);
  });
});
