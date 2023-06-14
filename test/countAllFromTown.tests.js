describe('Testing allFromTown function', function() {
    it('should return an array of registration numbers starting with "CA" from "CA 123, CY 456, CJ 789, CA 987"', function() {
      const result = allFromTown('CA 123, CY 456, CJ 789, CA 987', 'CA');
      assert.deepEqual(result, ['CA 123', 'CA 987']);
    });
  
    it('should return an empty array when there are no registration numbers starting with "ND" in "CA 123, CY 456, CJ 789, CA 987"', function() {
      const result = allFromTown('CA 123, CY 456, CJ 789, CA 987', 'ND');
      assert.deepEqual(result, []);
    });
  
    it('should return an empty array when the input string is empty', function() {
      const result = allFromTown('', 'CA');
      assert.deepEqual(result, []);
    });
  });