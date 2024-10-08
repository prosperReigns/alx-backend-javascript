const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return sum if first argument is SUM', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
	assert.equal(result, 6);
  });

  it('should return divide if first argument is DIVIDE', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
	assert.equal(result, 0.2);
  });

  it('should return subtract if first argument is SUBTRACT', () => {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
	assert.equal(result, -4);
  });

  it('should return Error if first argument is DIVIDE and divisor is 0', () => {
    const result = calculateNumber('DIVIDE', 1.4, 0);
	assert.equal(result, 'Error');
  });
});
