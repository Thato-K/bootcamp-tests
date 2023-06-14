describe('Testing my countRegNumber function', function() {
    it('should return 3 for input "CA 123, CY 456, CJ 789"', function() {
      const result = countRegNumber("CA 123, CY 456, CJ 789");
      assert.equal(result, 3);
    });
  
    it('should return 1 for input "ND 987"', function() {
      const result = countRegNumber("ND 987");
      assert.equal(result, 1);
    });
  });
  