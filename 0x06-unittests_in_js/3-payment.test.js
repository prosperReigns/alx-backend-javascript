const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('validates that Utils.calculateNumber is called with the correct arguments', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spy.callCount).to.be.equal(1)
    spy.restore();
  });

  it('should call Utils.calculateNumber once', () => {
    const UtilsSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(UtilsSpy.calledOnce).to.be.true;
    UtilsSpy.restore();
  });

  it('should handle negative numbers correctly', () => {
    const UtilsSpy = sinon.spy(Utils, 'calculateNumber');
  
    sendPaymentRequestToApi(-50, 30);
  
    expect(UtilsSpy.calledWith('SUM', -50, 30)).to.be.true;
    expect(UtilsSpy.returnValues[0]).to.equal(-20);
    UtilsSpy.restore();
  });
});
