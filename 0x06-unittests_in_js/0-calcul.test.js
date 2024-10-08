const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return correct value for positive integers', () => {
    const result = calculateNumber(1, 1);
    assert.equal(result, 2);
  });

  it('should return correct value for a positive and negative integer', () => {
    const result = calculateNumber(1, -1);
    assert.equal(result, 0);
  });

  it('should return correct value for positive floats', () => {
    const result = calculateNumber(1.2, 1.3);
    assert.equal(result, 2);
  });

  it('should return correct value for rounding up floats', () => {
    const result = calculateNumber(4.7, 2.7);
    assert.equal(result, 8);
  });

  it('should return correct value for negative integers', () => {
    const result = calculateNumber(-1, -1);
    assert.equal(result, -2);
  });

  it('should return correct value for a negative and positive float', () => {
    const result = calculateNumber(-1.2, 2.7);
    assert.equal(result, 2);
  });

  it('should return correct value for zero and a positive float', () => {
    const result = calculateNumber(0, 2.5);
    assert.equal(result, 3);
  });

  it('should return correct value for large numbers', () => {
    const result = calculateNumber(1e9 + 0.4, 1e9 + 0.6);
    assert.equal(result, 2000000001);
  });

  it('should return correct value when both numbers round to zero', () => {
    const result = calculateNumber(0.4, -0.4);
    assert.equal(result, 0);
  });
});
